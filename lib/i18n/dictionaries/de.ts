import type { Dictionary } from '../types'

// German. Informal "du", as in the app.
export const de: Dictionary = {
  meta: {
    title: 'Reisekosten mit Freunden teilen – die App für Gruppenreisen | Trevvy',
    description:
      'Gemeinsam verreisen? Trevvy hält fest, wer was bezahlt hat, teilt die Kosten auf und zeigt, wer wem wie viel schuldet. Kostenlos für iOS und Android, funktioniert auch offline.',
    keywords: [
      'Reisekosten teilen App',
      'Kosten teilen Gruppenreise',
      'Urlaubskosten aufteilen',
      'Gruppenkasse App',
      'wer schuldet wem',
      'Rechnung teilen',
      'Reisebudget App',
      'beste App zum Kosten teilen',
    ],
    ogTitle: 'Trevvy – Reisekosten mit Freunden teilen',
    ogDescription:
      'Gemeinsame Ausgaben erfassen, mit Freunden teilen und sehen, wer wem wie viel schuldet. Ohne Konto, funktioniert offline.',
  },
  nav: {
    features: 'Funktionen',
    howItWorks: "So funktioniert's",
    faq: 'FAQ',
    support: 'Support',
    privacy: 'Datenschutz',
    language: 'Sprache',
    toggleMenu: 'Menü öffnen',
  },
  hero: {
    badge: 'Jetzt im App Store und bei Google Play',
    titleStart: 'Reisekosten teilen',
    titleHighlight: 'ganz ohne Rechnen',
    subtitle:
      'Gemeinsam unterwegs? Füge Mitreisende hinzu, erfasse Ausgaben nach Kategorie und sieh sofort, wer wem wie viel schuldet — oder teile die Reise, damit Freunde Ausgaben mit dir eintragen.',
    appStore: 'Laden im App Store',
    googlePlay: 'Jetzt bei Google Play',
    howItWorks: "So funktioniert's",
    screenshotAlt: 'Trevvy App – Ausgabenliste einer Reise',
  },
  features: {
    eyebrow: 'Funktionen',
    title: 'Alles, was du zum Kostenteilen auf Reisen brauchst',
    subtitle:
      'Genieß die Reise, Trevvy übernimmt das Rechnen. Reisen teilen, QR/OCR-Scan, Live-Wechselkurse und Statistiken sind Teil von Premium.',
    items: {
      split: {
        title: 'Kosten einfach teilen',
        description: 'Trag eine gemeinsame Ausgabe ein und Trevvy berechnet automatisch, wer wem wie viel schuldet.',
      },
      groups: {
        title: 'Gemacht für Gruppenreisen',
        description: 'Unterkunft, Essen, Transport, Tanken und Ausflüge — alle Reisekosten an einem Ort.',
      },
      share: {
        title: 'Reisen mit Freunden teilen',
        description:
          'Lade Freunde per Link ein. Alle tragen Ausgaben in dieselbe Reise ein und sehen Änderungen sofort. Freunde machen kostenlos mit.',
      },
      backup: {
        title: 'Backup in deinem Konto',
        description:
          'Melde dich an und deine Reisen werden in deinem Konto gesichert — auch auf einem neuen Handy. Zum Start brauchst du kein Konto.',
      },
      settle: {
        title: 'Abrechnen mit wenigen Zahlungen',
        description: 'Du siehst genau, wer wem zahlen muss — mit so wenigen Überweisungen wie möglich.',
      },
      scan: {
        title: 'Belege scannen',
        description:
          'Scanne den QR-Code von Kassenbelegen aus 27 Ländern, darunter Österreich und Spanien — Trevvy übernimmt Betrag, Währung und Steuerdaten.',
      },
      currency: {
        title: 'Mehrere Währungen',
        description: 'Erfasse Ausgaben in jeder Währung mit eigenem Kurs oder nutze Live-Wechselkurse.',
      },
      analytics: {
        title: 'Ausgaben-Statistiken',
        description:
          'Ausgaben nach Kategorie und Budget im Vergleich zu den tatsächlichen Kosten für jede Reise, plus alle Reisen eines Jahres.',
      },
    },
  },
  countries: {
    eyebrow: 'QR-Beleg-Scan',
    title: '27 Länder unterstützt',
    subtitle:
      'Trevvy liest die QR-Codes offizieller Kassenbelege. Einfach scannen — Betrag, Währung und Steuerdaten werden automatisch ausgefüllt.',
    footnote: 'Dazu allgemeine Unterstützung für JSON-, Schlüssel-Wert- und URL-basierte Belegformate.',
    names: {
      AR: 'Argentinien',
      AT: 'Österreich',
      BO: 'Bolivien',
      BR: 'Brasilien',
      CN: 'China',
      CO: 'Kolumbien',
      HR: 'Kroatien',
      CZ: 'Tschechien',
      EC: 'Ecuador',
      EG: 'Ägypten',
      HU: 'Ungarn',
      IN: 'Indien',
      IT: 'Italien',
      KE: 'Kenia',
      KR: 'Südkorea',
      MX: 'Mexiko',
      PT: 'Portugal',
      RO: 'Rumänien',
      RU: 'Russland',
      SA: 'Saudi-Arabien',
      RS: 'Serbien',
      SK: 'Slowakei',
      SI: 'Slowenien',
      ES: 'Spanien',
      TW: 'Taiwan',
      TH: 'Thailand',
      UA: 'Ukraine',
    },
  },
  howItWorks: {
    eyebrow: "So funktioniert's",
    title: 'In wenigen Minuten startklar',
    subtitle: 'Ein paar einfache Schritte zu stressfreiem Kostenteilen.',
    steps: {
      create: {
        title: 'Reise anlegen',
        description: 'Leg eine neue Reise an und gib ihr einen Namen, an den ihr euch erinnert.',
      },
      participants: {
        title: 'Mitreisende hinzufügen',
        description: 'Füge Mitreisende per Name hinzu oder lade sie per Link ein, um gemeinsam Ausgaben einzutragen.',
      },
      record: {
        title: 'Ausgaben erfassen',
        description: 'Trag Ausgaben ein, sobald sie anfallen. Trevvy behält den Überblick.',
      },
      calculate: {
        title: 'Trevvy rechnet',
        description: 'Der Saldo aktualisiert sich sofort und du siehst, wer wem wie viel schuldet.',
      },
    },
  },
  preview: {
    eyebrow: 'App-Vorschau',
    title: 'Übersichtlich und intuitiv',
    subtitle: 'Gemacht für echte Situationen auf Reisen: schnell und klar.',
    screens: {
      travels: {
        alt: 'Reiseliste mit Budgets',
        title: 'Deine Reisen',
        description: 'Leg Reisen an, setze ein Budget und behalte die Ausgaben aller Reisen im Blick.',
      },
      expenses: {
        alt: 'Ausgabenliste nach Kategorien',
        title: 'Ausgaben erfassen',
        description: 'Jede Ausgabe mit Kategorie, wer bezahlt hat und zwischen wem geteilt wird.',
      },
      analytics: {
        alt: 'Statistik – Ausgaben nach Kategorie',
        title: 'Ausgaben-Statistiken',
        description: 'Diagramme nach Kategorie und Budget im Vergleich zu den tatsächlichen Kosten auf einen Blick.',
      },
      settlement: {
        alt: 'Abrechnung – erfasste Zahlungen',
        title: 'Einfach abrechnen',
        description: 'Offene Schulden sehen, Zahlungen erfassen und als erledigt markieren.',
      },
    },
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Häufige Fragen',
    subtitle: 'Alles, was du über Trevvy wissen musst.',
    items: [
      {
        question: 'Was ist Trevvy?',
        answer:
          'Trevvy ist eine App zum Teilen von Reisekosten für iOS und Android. Leg eine Reise an, füge Freunde hinzu, erfasse gemeinsame Ausgaben — Trevvy berechnet, wer wem wie viel schuldet, und schlägt eine Abrechnung mit möglichst wenigen Überweisungen vor.',
      },
      {
        question: 'Welche App ist am besten, um Reisekosten mit Freunden zu teilen?',
        answer:
          'Das hängt davon ab, was eure Gruppe braucht. Allgemeine Apps wie Splitwise oder Tricount eignen sich gut für Alltagsausgaben. Trevvy ist speziell für Reisen gemacht: funktioniert offline und ohne Konto, unterstützt über 150 Währungen, scannt QR-Codes von Kassenbelegen aus 27 Ländern und rechnet mit möglichst wenigen Zahlungen ab. Kostenlos für bis zu 7 aktive Reisen.',
      },
      {
        question: 'Ist Trevvy kostenlos?',
        answer:
          'Ja. Reisen anlegen, Teilnehmer hinzufügen, Ausgaben erfassen und Salden ansehen ist für bis zu 7 aktive Reisen komplett kostenlos. Premium schaltet Reisen teilen, QR/OCR-Belegscan, Live-Wechselkurse, Statistiken und unbegrenzt viele Reisen frei.',
      },
      {
        question: 'In welchen Sprachen gibt es Trevvy?',
        answer:
          'Trevvy gibt es auf Deutsch, Englisch, Spanisch, Russisch, Serbisch, Kroatisch und Bosnisch. Die App verwendet die Sprache deines Handys; du kannst in den Einstellungen auch eine Sprache wählen, die dann bleibt.',
      },
      {
        question: 'Kann ich eine Reise mit Freunden teilen?',
        answer:
          'Ja. Teile eine Reise und schick den Einladungslink; Freunde, die beitreten, können Ausgaben mit dir hinzufügen und bearbeiten, und alle sehen Änderungen sofort. Nur der Besitzer der Reise braucht Premium — eingeladene Freunde machen kostenlos mit.',
      },
      {
        question: 'Wie funktioniert der QR-Scan von Belegen?',
        answer:
          'Richte die Kamera auf den QR-Code eines Kassenbelegs und Trevvy liest Betrag, Währung, Steuernummer und Belegnummer direkt aus dem QR-Code. Für die meisten Länder funktioniert das komplett offline. Die Daten füllen das Ausgabenformular aus, sodass du die Ausgabe in Sekunden hinzufügst.',
      },
      {
        question: 'Belege aus welchen Ländern kann ich scannen?',
        answer:
          'Trevvy liest QR-Codes offizieller Kassenbelege aus 27 Ländern: Argentinien, Österreich, Bolivien, Brasilien, China, Kolumbien, Kroatien, Tschechien, Ecuador, Ägypten, Ungarn, Indien, Italien, Kenia, Südkorea, Mexiko, Portugal, Rumänien, Russland, Saudi-Arabien, Serbien, Slowakei, Slowenien, Spanien, Taiwan, Thailand und Ukraine. Außerdem allgemeine JSON-, Schlüssel-Wert- und URL-Belegformate aus jedem Land.',
      },
      {
        question: 'Unterstützt Trevvy mehrere Währungen?',
        answer:
          'Ja. Jede Ausgabe kann in jeder Währung mit eigenem Wechselkurs erfasst werden; jede Reise hat ihre eigene Basiswährung. Premium lädt Live-Wechselkurse automatisch.',
      },
      {
        question: 'Brauche ich ein Konto?',
        answer:
          'Nein. Trevvy funktioniert ohne Registrierung — einfach laden und Reisen anlegen. Melde dich mit Apple, Google oder E-Mail nur an, wenn du deine Reisen sichern oder mit Freunden teilen willst.',
      },
      {
        question: 'Werden meine Daten online gespeichert?',
        answer:
          'Nur wenn du dich anmeldest. Ohne Konto bleibt alles auf deinem Gerät. Mit Konto werden deine Reisen auch auf unseren Servern gespeichert, damit sie gesichert sind und geteilt werden können; Belegfotos bleiben immer auf deinem Gerät. Details in der Datenschutzerklärung.',
      },
      {
        question: 'Wie lösche ich mein Konto?',
        answer:
          'In der App unter Einstellungen → Konto → Konto löschen. Dein Konto und die darin gespeicherten Reisen werden gelöscht; geteilte Reisen bleiben für die Mitglieder schreibgeschützt erhalten. Du kannst die Löschung auch unter trevvy.app/delete-account anfordern.',
      },
      {
        question: 'Was ist ein Trip Pass?',
        answer:
          'Ein Trip Pass ist ein Einmalkauf, der Premium für eine Reise 17 Tage lang freischaltet — Belegscan, Live-Wechselkurse und Statistiken. Ideal, wenn du Premium nur für eine Reise brauchst, ohne Abo. Für das Teilen von Reisen ist ein Abo nötig.',
      },
      {
        question: 'Wie optimiert Trevvy die Abrechnung?',
        answer:
          'Trevvy nutzt einen Algorithmus zur Schuldenvereinfachung, der die kleinste Zahl an Zahlungen findet, damit alle quitt sind. Statt dass jeder jedem zahlt, bekommst du die kürzeste Liste an Überweisungen.',
      },
      {
        question: 'Kann ich meine Reisedaten exportieren?',
        answer: 'Ja. Eine Übersicht der Ausgaben und Salden kannst du direkt aus der App teilen.',
      },
    ],
  },
  cta: {
    title: 'Die nächste Reise ohne Stress ums Geld',
    subtitle: 'Lade Trevvy und konzentrier dich auf Erinnerungen statt auf Tabellen.',
    note: 'Kostenloser Download • Kein Konto nötig',
  },
  support: {
    eyebrow: 'Support',
    title: 'Wir helfen gern',
    subtitle: 'Bei Problemen oder Fragen zu Trevvy schreib uns.',
    emailTitle: 'Support per E-Mail',
    emailText: 'Schreib uns, wir antworten.',
    inAppTitle: 'Hilfe in der App',
    inAppText: 'Hilfe direkt in der App.',
    inAppPath: 'Einstellungen → Hilfe & Support',
    privacyTitle: 'Datenschutzerklärung',
    privacyText: 'So schützen wir deine Daten (auf Englisch).',
    privacyLink: 'Datenschutzerklärung lesen',
  },
  footer: {
    tagline: 'Der einfache, schnelle und entspannte Weg, Reisekosten mit Freunden zu teilen.',
    product: 'Produkt',
    support: 'Support',
    helpCenter: 'Hilfe',
    contact: 'Kontakt',
    legal: 'Rechtliches',
    privacy: 'Datenschutzerklärung',
    deleteAccount: 'Konto löschen',
    languages: 'Sprachen',
    rights: 'Alle Rechte vorbehalten.',
  },
  schema: {
    description:
      'App zum Teilen von Reisekosten mit Freunden: hält fest, wer was bezahlt hat, teilt die Kosten und zeigt, wer wem wie viel schuldet.',
    featureList: [
      'Kosten teilen mit Abrechnung über möglichst wenige Zahlungen',
      'Reisen teilen mit Live-Updates',
      'QR-Scan von Kassenbelegen aus 27 Ländern',
      'Mehrere Währungen und Live-Wechselkurse',
      'Ausgaben-Statistiken und Diagramme',
      'Offline nutzbar; Konto nur für Backup und Teilen',
      'Trip Pass für Premium auf einer Reise',
      'Auf Deutsch, Englisch, Spanisch, Russisch, Serbisch, Kroatisch und Bosnisch',
    ],
  },
}
