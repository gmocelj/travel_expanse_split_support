export type Faq = { question: string; answer: string }

type TitleText = { title: string; description: string }

export type FeatureKey =
  | 'split'
  | 'groups'
  | 'share'
  | 'backup'
  | 'settle'
  | 'scan'
  | 'currency'
  | 'analytics'

export type StepKey = 'create' | 'participants' | 'record' | 'calculate'

export type ScreenKey = 'travels' | 'expenses' | 'analytics' | 'settlement'

export type CountryKey =
  | 'AR' | 'AT' | 'BO' | 'BR' | 'CN' | 'CO' | 'HR' | 'CZ' | 'EC'
  | 'EG' | 'HU' | 'IN' | 'IT' | 'KE' | 'KR' | 'MX' | 'PT' | 'RO'
  | 'RU' | 'SA' | 'RS' | 'SK' | 'SI' | 'ES' | 'TW' | 'TH' | 'UA'

/** All text of the landing page in one language. */
export type Dictionary = {
  meta: {
    /** Full <title> of the landing page (no "| Trevvy" template is added). */
    title: string
    description: string
    keywords: string[]
    ogTitle: string
    ogDescription: string
  }
  nav: {
    features: string
    howItWorks: string
    faq: string
    support: string
    privacy: string
    language: string
    toggleMenu: string
  }
  hero: {
    badge: string
    titleStart: string
    titleHighlight: string
    subtitle: string
    appStore: string
    googlePlay: string
    howItWorks: string
    screenshotAlt: string
  }
  features: {
    eyebrow: string
    title: string
    subtitle: string
    items: Record<FeatureKey, TitleText>
  }
  countries: {
    eyebrow: string
    title: string
    subtitle: string
    footnote: string
    names: Record<CountryKey, string>
  }
  howItWorks: {
    eyebrow: string
    title: string
    subtitle: string
    steps: Record<StepKey, TitleText>
  }
  preview: {
    eyebrow: string
    title: string
    subtitle: string
    screens: Record<ScreenKey, TitleText & { alt: string }>
  }
  faq: {
    eyebrow: string
    title: string
    subtitle: string
    items: Faq[]
  }
  cta: {
    title: string
    subtitle: string
    note: string
  }
  support: {
    eyebrow: string
    title: string
    subtitle: string
    emailTitle: string
    emailText: string
    inAppTitle: string
    inAppText: string
    inAppPath: string
    privacyTitle: string
    privacyText: string
    privacyLink: string
  }
  footer: {
    tagline: string
    product: string
    support: string
    helpCenter: string
    contact: string
    legal: string
    privacy: string
    deleteAccount: string
    languages: string
    rights: string
  }
  schema: {
    description: string
    featureList: string[]
  }
}
