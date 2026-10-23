import { MetadataRoute } from 'next'
import { homeAlternates, homeUrl, locales } from '@/lib/i18n/config'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = homeAlternates()
  return [
    ...locales.map((locale) => ({
      url: homeUrl(locale),
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1,
      alternates: { languages },
    })),
    {
      url: 'https://trevvy.app/privacy/',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: 'https://trevvy.app/delete-account/',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]
}
