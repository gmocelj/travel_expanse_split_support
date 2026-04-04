import sharp from 'sharp'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const publicDir = path.join(__dirname, '..', 'public')

const W = 1200
const H = 630

// Brand colors from globals.css
const BG      = '#1c1a17'   // dark warm background
const GOLD    = '#c9a84c'   // primary gold
const WHITE   = '#f2efe8'   // foreground
const MUTED   = '#7a7060'   // muted-foreground
const CARD_BG = '#242018'   // card background

const svg = `
<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Warm gold glow top-left -->
    <radialGradient id="g1" cx="0%" cy="0%" r="70%">
      <stop offset="0%" stop-color="${GOLD}" stop-opacity="0.18"/>
      <stop offset="100%" stop-color="${BG}" stop-opacity="0"/>
    </radialGradient>
    <!-- Subtle glow bottom-right -->
    <radialGradient id="g2" cx="100%" cy="100%" r="60%">
      <stop offset="0%" stop-color="${GOLD}" stop-opacity="0.10"/>
      <stop offset="100%" stop-color="${BG}" stop-opacity="0"/>
    </radialGradient>
    <!-- Fade mask for screenshot edge blend -->
    <linearGradient id="fade" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="white" stop-opacity="0"/>
      <stop offset="30%" stop-color="white" stop-opacity="1"/>
      <stop offset="100%" stop-color="white" stop-opacity="1"/>
    </linearGradient>
    <mask id="screenshotMask">
      <rect x="720" y="0" width="480" height="${H}" fill="url(#fade)"/>
    </mask>
    <!-- Rounded rect clip for icon -->
    <clipPath id="iconClip">
      <rect x="0" y="0" width="96" height="96" rx="20" ry="20"/>
    </clipPath>
  </defs>

  <!-- Background -->
  <rect width="${W}" height="${H}" fill="${BG}"/>
  <rect width="${W}" height="${H}" fill="url(#g1)"/>
  <rect width="${W}" height="${H}" fill="url(#g2)"/>

  <!-- Decorative horizontal line -->
  <line x1="80" y1="200" x2="560" y2="200" stroke="${GOLD}" stroke-width="1" stroke-opacity="0.3"/>

  <!-- App name -->
  <text x="196" y="150"
    font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    font-size="52" font-weight="700" fill="${WHITE}" letter-spacing="-1">
    Trevvy
  </text>

  <!-- Headline line 1 -->
  <text x="80" y="272"
    font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    font-size="42" font-weight="700" fill="${WHITE}" letter-spacing="-0.5">
    Split travel expenses
  </text>
  <!-- Headline line 2 in gold -->
  <text x="80" y="328"
    font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    font-size="42" font-weight="700" fill="${GOLD}" letter-spacing="-0.5">
    effortlessly.
  </text>

  <!-- Subtitle -->
  <text x="80" y="396"
    font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    font-size="20" font-weight="400" fill="${MUTED}">
    Track shared costs, settle balances,
  </text>
  <text x="80" y="424"
    font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    font-size="20" font-weight="400" fill="${MUTED}">
    and enjoy your trip — no account required.
  </text>

  <!-- Store pills -->
  <rect x="80" y="468" width="148" height="36" rx="18" fill="${CARD_BG}" stroke="${GOLD}" stroke-width="1" stroke-opacity="0.4"/>
  <text x="104" y="492"
    font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    font-size="14" fill="${WHITE}">
     App Store
  </text>
  <rect x="240" y="468" width="154" height="36" rx="18" fill="${CARD_BG}" stroke="${GOLD}" stroke-width="1" stroke-opacity="0.4"/>
  <text x="264" y="492"
    font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    font-size="14" fill="${WHITE}">
    ▶ Google Play
  </text>

  <!-- Domain -->
  <text x="80" y="582"
    font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    font-size="16" fill="${MUTED}" letter-spacing="0.5">
    trevvy.app
  </text>
</svg>
`

async function run() {
  console.log('🎨 Generating OG image...')

  // 1. Rasterize SVG background
  const bgBuffer = await sharp(Buffer.from(svg))
    .resize(W, H)
    .png()
    .toBuffer()

  // 2. Prepare app icon — rounded corners via SVG mask
  const iconSize = 96
  const iconRounded = await sharp(path.join(publicDir, 'trevvy-app-icon.png'))
    .resize(iconSize, iconSize, { fit: 'cover' })
    .png()
    .toBuffer()

  // Round the icon using a circular SVG mask
  const iconMaskSvg = `<svg width="${iconSize}" height="${iconSize}">
    <rect x="0" y="0" width="${iconSize}" height="${iconSize}" rx="20" ry="20" fill="white"/>
  </svg>`
  const roundedIcon = await sharp(iconRounded)
    .composite([{ input: Buffer.from(iconMaskSvg), blend: 'dest-in' }])
    .png()
    .toBuffer()

  // 3. Prepare screenshot — resize to fit right panel, slight vertical crop
  const screenshotH = 560
  const screenshotW = Math.round((390 / 844) * screenshotH) // ~255px
  const screenshotBuffer = await sharp(path.join(publicDir, 'screenshots', 'expenses-list.png'))
    .resize(screenshotW, screenshotH, { fit: 'cover', position: 'top' })
    .png()
    .toBuffer()

  // 4. Composite: background + icon (aligned with text) + screenshot on right
  const screenshotLeft = W - screenshotW - 60
  const screenshotTop = Math.round((H - screenshotH) / 2)

  await sharp(bgBuffer)
    .composite([
      // Icon — vertically centered with the "Trevvy" text (text baseline ~150, icon 96px → top ~80)
      { input: roundedIcon, left: 80, top: 80 },
      // Screenshot — right side, vertically centered
      { input: screenshotBuffer, left: screenshotLeft, top: screenshotTop },
    ])
    .png()
    .toFile(path.join(publicDir, 'og-image.png'))

  console.log(`✅ public/og-image.png created (${W}×${H}px)`)
  console.log(`   Screenshot at: left=${screenshotLeft}, top=${screenshotTop}, size=${screenshotW}×${screenshotH}`)
}

run().catch((err) => {
  console.error('❌ Failed:', err.message)
  process.exit(1)
})
