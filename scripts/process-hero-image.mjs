import sharp from 'sharp'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')
const src = join(root, 'public/hero-graphic-source.png')
const out = join(root, 'public/hero-graphic.png')
const BG = { r: 10, g: 10, b: 10 } // #0a0a0a

const { data, info } = await sharp(src).ensureAlpha().raw().toBuffer({ resolveWithObject: true })

for (let i = 0; i < data.length; i += 4) {
  const r = data[i]
  const g = data[i + 1]
  const b = data[i + 2]
  const a = data[i + 3]

  if (a < 20) continue

  // White / light gray card background → site background
  if (r > 220 && g > 220 && b > 220) {
    data[i] = BG.r
    data[i + 1] = BG.g
    data[i + 2] = BG.b
    data[i + 3] = 255
    continue
  }

  // Near-black text → light for dark theme
  if (r < 60 && g < 60 && b < 60) {
    data[i] = 215
    data[i + 1] = 220
    data[i + 2] = 230
    data[i + 3] = 255
  }
}

await sharp(data, { raw: { width: info.width, height: info.height, channels: 4 } })
  .png()
  .toFile(out)

console.log(`Saved ${out} (${info.width}x${info.height})`)
