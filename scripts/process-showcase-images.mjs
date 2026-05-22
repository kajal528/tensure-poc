import sharp from 'sharp'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')

const TARGET_WHITE = { r: 255, g: 255, b: 255 }
const TARGET_DARK = { r: 10, g: 10, b: 10 } // #0a0a0a

async function replaceBackground(input, output, target, threshold = 30) {
  const { data, info } = await sharp(input).ensureAlpha().raw().toBuffer({ resolveWithObject: true })

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i]
    const g = data[i + 1]
    const b = data[i + 2]
    const a = data[i + 3]
    if (a < 20) continue

    const isLight = r > 255 - threshold && g > 255 - threshold && b > 255 - threshold
    const isBeige = r > 200 && g > 200 && b > 180 && r - b < 40
    const isBlack = r < threshold && g < threshold && b < threshold

    if (target === 'white' && (isLight || isBeige)) {
      data[i] = TARGET_WHITE.r
      data[i + 1] = TARGET_WHITE.g
      data[i + 2] = TARGET_WHITE.b
      data[i + 3] = 255
    } else if (target === 'dark' && isBlack) {
      data[i] = TARGET_DARK.r
      data[i + 1] = TARGET_DARK.g
      data[i + 2] = TARGET_DARK.b
      data[i + 3] = 255
    }
  }

  await sharp(data, { raw: { width: info.width, height: info.height, channels: 4 } })
    .png()
    .toFile(output)

  console.log(`✓ ${output} (${info.width}x${info.height})`)
}

// Before/after — already has white frame; light pass only
await replaceBackground(
  join(root, 'public/showcase-before-after-source.png'),
  join(root, 'public/showcase-before-after.png'),
  'white',
  25,
)

// Infographic (beige bg) → white for showcase section
await replaceBackground(
  join(root, 'public/showcase-infographic-source.png'),
  join(root, 'public/showcase-infographic.png'),
  'white',
  35,
)

// Infographic (black bg) → white for showcase section
await replaceBackground(
  join(root, 'public/showcase-infographic-dark-source.png'),
  join(root, 'public/showcase-infographic-alt.png'),
  'white',
  25,
)
