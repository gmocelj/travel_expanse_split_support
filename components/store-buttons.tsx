import type { JoinTexts } from '@/lib/i18n/join'

const APP_STORE_URL = 'https://apps.apple.com/app/trevvy/id6754640654'
const GOOGLE_PLAY_URL =
  'https://play.google.com/store/apps/details?id=com.gmocelj.travel_expanse_split'

interface StoreButtonsProps {
  /** Custom-scheme link behind the "Open in Trevvy" button. */
  deepLink: string
  texts: JoinTexts['join']
}

/** App Store, Google Play and "Open in Trevvy" buttons shared by the deep link fallback pages. */
export function StoreButtons({ deepLink, texts }: StoreButtonsProps) {
  return (
    <div className="flex flex-col gap-3 w-full">
      {/* Primary CTA */}
      <a
        href={APP_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 w-full rounded-xl bg-primary text-primary-foreground font-semibold text-base h-12 px-6 transition-all duration-150 hover:bg-primary/90 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        aria-label={texts.appStoreLabel}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-5 shrink-0"
          aria-hidden="true"
        >
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
        </svg>
        {texts.appStore}
      </a>

      <a
        href={GOOGLE_PLAY_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 w-full rounded-xl bg-primary text-primary-foreground font-semibold text-base h-12 px-6 transition-all duration-150 hover:bg-primary/90 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        aria-label={texts.googlePlayLabel}
      >
        {texts.googlePlay}
      </a>

      {/* Secondary: deep link */}
      <a
        href={deepLink}
        className="inline-flex items-center justify-center w-full rounded-xl border border-border bg-secondary text-secondary-foreground font-medium text-base h-12 px-6 transition-all duration-150 hover:bg-secondary/80 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        aria-label={texts.openInAppLabel}
      >
        {texts.openInApp}
      </a>
    </div>
  )
}
