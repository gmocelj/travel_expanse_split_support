import type { Locale } from './config'
import type { Dictionary } from './types'
import { en } from './dictionaries/en'
import { sr } from './dictionaries/sr'
import { hr } from './dictionaries/hr'
import { bs } from './dictionaries/bs'
import { ru } from './dictionaries/ru'
import { de } from './dictionaries/de'
import { es } from './dictionaries/es'

const dictionaries: Record<Locale, Dictionary> = { en, sr, hr, bs, ru, de, es }

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale]
}

export * from './config'
export type * from './types'
