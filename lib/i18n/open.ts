// Texts of the store page deep link fallback pages (/open/scan, /open/new-trip).
// The store buttons reuse joinTexts[locale].join; only the heading differs.
// Only type imports here: tests run this file directly with Node type stripping.
import type { Locale } from './config'

export type OpenAction = 'scan' | 'newTrip'

export type OpenTexts = Record<OpenAction, { title: string; subtitle: string }>

export const openTexts: Record<Locale, OpenTexts> = {
  en: {
    scan: {
      title: 'Scan a receipt with Trevvy',
      subtitle: 'Get the app to scan a receipt QR code and split the expense with your group in seconds.',
    },
    newTrip: {
      title: 'Plan your group trip in Trevvy',
      subtitle: 'Get the app to create a trip, invite your friends and split every expense fairly.',
    },
  },
  sr: {
    scan: {
      title: 'Skeniraj račun u aplikaciji Trevvy',
      subtitle: 'Preuzmi aplikaciju da skeniraš QR kod sa računa i podeliš trošak sa grupom za nekoliko sekundi.',
    },
    newTrip: {
      title: 'Organizuj grupno putovanje u aplikaciji Trevvy',
      subtitle: 'Preuzmi aplikaciju da napraviš putovanje, pozoveš društvo i pošteno podeliš sve troškove.',
    },
  },
  hr: {
    scan: {
      title: 'Skeniraj račun u aplikaciji Trevvy',
      subtitle: 'Preuzmi aplikaciju da skeniraš QR kod s računa i podijeliš trošak s grupom u nekoliko sekundi.',
    },
    newTrip: {
      title: 'Organiziraj grupno putovanje u aplikaciji Trevvy',
      subtitle: 'Preuzmi aplikaciju da napraviš putovanje, pozoveš društvo i pošteno podijeliš sve troškove.',
    },
  },
  bs: {
    scan: {
      title: 'Skeniraj račun u aplikaciji Trevvy',
      subtitle: 'Preuzmi aplikaciju da skeniraš QR kod s računa i podijeliš trošak sa grupom za nekoliko sekundi.',
    },
    newTrip: {
      title: 'Organizuj grupno putovanje u aplikaciji Trevvy',
      subtitle: 'Preuzmi aplikaciju da napraviš putovanje, pozoveš društvo i pošteno podijeliš sve troškove.',
    },
  },
  ru: {
    scan: {
      title: 'Сканируйте чеки в Trevvy',
      subtitle: 'Установите приложение, чтобы сканировать QR-код чека и за секунды делить расход с группой.',
    },
    newTrip: {
      title: 'Планируйте поездку с друзьями в Trevvy',
      subtitle: 'Установите приложение, чтобы создать поездку, пригласить друзей и честно делить все расходы.',
    },
  },
  de: {
    scan: {
      title: 'Belege mit Trevvy scannen',
      subtitle: 'Lade die App, um den QR-Code eines Belegs zu scannen und die Ausgabe in Sekunden mit deiner Gruppe zu teilen.',
    },
    newTrip: {
      title: 'Plane eure Gruppenreise mit Trevvy',
      subtitle: 'Lade die App, um eine Reise anzulegen, Freunde einzuladen und alle Ausgaben fair zu teilen.',
    },
  },
  es: {
    scan: {
      title: 'Escanea recibos con Trevvy',
      subtitle: 'Descarga la app para escanear el código QR de un recibo y dividir el gasto con tu grupo en segundos.',
    },
    newTrip: {
      title: 'Organiza tu viaje en grupo con Trevvy',
      subtitle: 'Descarga la app para crear un viaje, invitar a tus amigos y dividir todos los gastos de forma justa.',
    },
  },
}
