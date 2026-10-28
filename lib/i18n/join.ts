// Texts of the invitation landing page (/join/<token>) and the 404 page.
// Kept apart from the landing page dictionaries so the client bundle of
// app/not-found.tsx only carries these few strings.
// Only type imports here: tests run this file directly with Node type stripping.
import type { Locale } from './config'

export type JoinTexts = {
  join: {
    title: string
    subtitle: string
    appStore: string
    appStoreLabel: string
    googlePlay: string
    googlePlayLabel: string
    openInApp: string
    openInAppLabel: string
    /** Must quote openInApp verbatim. */
    hint: string
  }
  notFound: {
    title: string
    description: string
    home: string
  }
}

export const joinTexts: Record<Locale, JoinTexts> = {
  en: {
    join: {
      title: 'You’ve been invited to a trip!',
      subtitle: 'Open Trevvy to join and start splitting expenses with your group.',
      appStore: 'Download on the App Store',
      appStoreLabel: 'Download Trevvy on the App Store',
      googlePlay: 'Get it on Google Play',
      googlePlayLabel: 'Get Trevvy on Google Play',
      openInApp: 'Open in Trevvy',
      openInAppLabel: 'Open this invitation in Trevvy',
      hint: 'If you already have Trevvy installed, tap “Open in Trevvy” above. Joining a trip needs the latest version of the app.',
    },
    notFound: {
      title: 'Page not found',
      description: 'The page you’re looking for doesn’t exist.',
      home: 'Go home',
    },
  },
  sr: {
    join: {
      title: 'Stigao ti je poziv za putovanje!',
      subtitle: 'Otvori Trevvy da se pridružiš i počneš da deliš troškove sa svojom grupom.',
      appStore: 'Preuzmi na App Store',
      appStoreLabel: 'Preuzmi Trevvy na App Store',
      googlePlay: 'Preuzmi na Google Play',
      googlePlayLabel: 'Preuzmi Trevvy na Google Play',
      openInApp: 'Otvori u aplikaciji Trevvy',
      openInAppLabel: 'Otvori ovaj poziv u aplikaciji Trevvy',
      hint: 'Ako već imaš Trevvy, dodirni „Otvori u aplikaciji Trevvy“ iznad. Za pridruživanje putovanju potrebna je najnovija verzija aplikacije.',
    },
    notFound: {
      title: 'Stranica nije pronađena',
      description: 'Stranica koju tražiš ne postoji.',
      home: 'Na početnu',
    },
  },
  hr: {
    join: {
      title: 'Stigao ti je poziv na putovanje!',
      subtitle: 'Otvori Trevvy da se pridružiš i počneš dijeliti troškove sa svojom grupom.',
      appStore: 'Preuzmi na App Storeu',
      appStoreLabel: 'Preuzmi Trevvy na App Storeu',
      googlePlay: 'Preuzmi na Google Playu',
      googlePlayLabel: 'Preuzmi Trevvy na Google Playu',
      openInApp: 'Otvori u aplikaciji Trevvy',
      openInAppLabel: 'Otvori ovaj poziv u aplikaciji Trevvy',
      hint: 'Ako već imaš Trevvy, dodirni „Otvori u aplikaciji Trevvy” iznad. Za pridruživanje putovanju potrebna je najnovija verzija aplikacije.',
    },
    notFound: {
      title: 'Stranica nije pronađena',
      description: 'Stranica koju tražiš ne postoji.',
      home: 'Na početnu stranicu',
    },
  },
  bs: {
    join: {
      title: 'Stigao ti je poziv za putovanje!',
      subtitle: 'Otvori Trevvy da se pridružiš i počneš dijeliti troškove sa svojom grupom.',
      appStore: 'Preuzmi na App Store',
      appStoreLabel: 'Preuzmi Trevvy na App Store',
      googlePlay: 'Preuzmi na Google Play',
      googlePlayLabel: 'Preuzmi Trevvy na Google Play',
      openInApp: 'Otvori u aplikaciji Trevvy',
      openInAppLabel: 'Otvori ovaj poziv u aplikaciji Trevvy',
      hint: 'Ako već imaš Trevvy, dodirni „Otvori u aplikaciji Trevvy“ iznad. Za pridruživanje putovanju potrebna je najnovija verzija aplikacije.',
    },
    notFound: {
      title: 'Stranica nije pronađena',
      description: 'Stranica koju tražiš ne postoji.',
      home: 'Na početnu',
    },
  },
  ru: {
    join: {
      title: 'Вас пригласили в поездку!',
      subtitle: 'Откройте Trevvy, чтобы присоединиться и делить расходы со своей группой.',
      appStore: 'Загрузить в App Store',
      appStoreLabel: 'Загрузить Trevvy в App Store',
      googlePlay: 'Доступно в Google Play',
      googlePlayLabel: 'Trevvy доступно в Google Play',
      openInApp: 'Открыть в Trevvy',
      openInAppLabel: 'Открыть это приглашение в Trevvy',
      hint: 'Если Trevvy уже установлено, нажмите «Открыть в Trevvy» выше. Чтобы присоединиться к поездке, нужна последняя версия приложения.',
    },
    notFound: {
      title: 'Страница не найдена',
      description: 'Такой страницы не существует.',
      home: 'На главную',
    },
  },
  de: {
    join: {
      title: 'Du wurdest zu einer Reise eingeladen!',
      subtitle: 'Öffne Trevvy, um beizutreten und die Ausgaben mit deiner Gruppe zu teilen.',
      appStore: 'Laden im App Store',
      appStoreLabel: 'Trevvy laden im App Store',
      googlePlay: 'Jetzt bei Google Play',
      googlePlayLabel: 'Trevvy jetzt bei Google Play',
      openInApp: 'In Trevvy öffnen',
      openInAppLabel: 'Diese Einladung in Trevvy öffnen',
      hint: 'Wenn du Trevvy schon installiert hast, tippe oben auf „In Trevvy öffnen“. Zum Beitreten brauchst du die neueste Version der App.',
    },
    notFound: {
      title: 'Seite nicht gefunden',
      description: 'Die Seite, die du suchst, gibt es nicht.',
      home: 'Zur Startseite',
    },
  },
  es: {
    join: {
      title: '¡Te han invitado a un viaje!',
      subtitle: 'Abre Trevvy para unirte y empezar a dividir los gastos con tu grupo.',
      appStore: 'Descargar en App Store',
      appStoreLabel: 'Descargar Trevvy en App Store',
      googlePlay: 'Disponible en Google Play',
      googlePlayLabel: 'Trevvy disponible en Google Play',
      openInApp: 'Abrir en Trevvy',
      openInAppLabel: 'Abrir esta invitación en Trevvy',
      hint: 'Si ya tienes Trevvy instalada, toca «Abrir en Trevvy» arriba. Para unirte a un viaje necesitas la última versión de la app.',
    },
    notFound: {
      title: 'Página no encontrada',
      description: 'La página que buscas no existe.',
      home: 'Ir al inicio',
    },
  },
}

function isJoinLocale(value: string): value is Locale {
  return Object.hasOwn(joinTexts, value)
}

/**
 * First browser language we have texts for, matched on the primary subtag
 * (so "sr-Cyrl-RS" and "sr-Latn" both give "sr"); English otherwise.
 */
export function pickJoinLocale(languages: readonly string[]): Locale {
  for (const tag of languages) {
    const primary = tag.split('-')[0].toLowerCase()
    if (isJoinLocale(primary)) return primary
  }
  return 'en'
}
