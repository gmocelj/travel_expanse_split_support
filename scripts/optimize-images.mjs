import sharp from 'sharp'
import path from 'path'
import { fileURLToPath } from 'url'
import { readdirSync, existsSync } from 'fs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const screenshotsDir = path.join(__dirname, '..', 'public', 'screenshots')

// Screenshots are displayed at max ~390px CSS width (2× retina = 780px).
// Source files are 1320×2868 — serve at 800px wide WebP instead.
const MAX_WIDTH = 800

async function run() {
  const files = readdirSync(screenshotsDir).filter((f) => f.endsWith('.png'))

  console.log(`🖼  Optimizing ${files.length} screenshots → WebP @${MAX_WIDTH}px…`)

  await Promise.all(
    files.map(async (file) => {
      const src = path.join(screenshotsDir, file)
      const dest = path.join(screenshotsDir, file.replace('.png', '.webp'))

      await sharp(src)
        .resize(MAX_WIDTH, null, { withoutEnlargement: true })
        .webp({ quality: 82 })
        .toFile(dest)

      console.log(`  ✅ ${file} → ${path.basename(dest)}`)
    }),
  )

  console.log('Done.')
}

run().catch((err) => {
  console.error('❌ Failed:', err.message)
  process.exit(1)
})
