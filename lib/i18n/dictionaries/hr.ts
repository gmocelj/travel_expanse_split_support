import type { Dictionary } from '../types'

// Croatian. Informal "ti", as in the app.
export const hr: Dictionary = {
  meta: {
    title: 'Aplikacija za podjelu troškova putovanja s prijateljima | Trevvy',
    description:
      'Ideš na put s društvom? Trevvy bilježi tko je što platio, dijeli troškove i pokazuje tko kome koliko duguje. Besplatna aplikacija za iOS i Android, radi i bez interneta.',
    keywords: [
      'aplikacija za podjelu troškova',
      'podjela troškova putovanja',
      'podjela troškova na putovanju',
      'putovanje s prijateljima',
      'tko kome duguje',
      'dijeljenje računa',
      'grupno putovanje',
      'troškovi puta',
      'najbolja aplikacija za podjelu troškova',
    ],
    ogTitle: 'Trevvy – podjela troškova putovanja s prijateljima',
    ogDescription:
      'Bilježi zajedničke troškove, podijeli ih s društvom i vidi tko kome koliko duguje. Bez računa, radi i bez interneta.',
  },
  nav: {
    features: 'Mogućnosti',
    howItWorks: 'Kako radi',
    faq: 'Pitanja',
    support: 'Podrška',
    privacy: 'Privatnost',
    language: 'Jezik',
    toggleMenu: 'Otvori izbornik',
  },
  hero: {
    badge: 'Dostupno na App Storeu i Google Playu',
    titleStart: 'Podjela troškova putovanja',
    titleHighlight: 'bez računanja',
    subtitle:
      'Ideš na put s društvom? Dodaj sudionike, bilježi troškove po kategorijama i odmah vidi tko kome koliko duguje — ili podijeli putovanje da i drugi upisuju troškove s tobom.',
    appStore: 'Preuzmi na App Storeu',
    googlePlay: 'Preuzmi na Google Playu',
    howItWorks: 'Pogledaj kako radi',
    screenshotAlt: 'Aplikacija Trevvy – popis troškova putovanja',
  },
  features: {
    eyebrow: 'Mogućnosti',
    title: 'Sve što ti treba za podjelu troškova na putovanju',
    subtitle:
      'Ti uživaj u putovanju, a Trevvy računa novac. Dijeljenje putovanja, QR/OCR skeniranje, tečajevi uživo i analitika dio su Premium paketa.',
    items: {
      split: {
        title: 'Jednostavna podjela troškova',
        description: 'Upiši zajednički trošak i Trevvy sam izračuna tko kome koliko duguje. Nema više računanja na papiru.',
      },
      groups: {
        title: 'Napravljeno za grupna putovanja',
        description: 'Smještaj, hrana, prijevoz, gorivo i izleti — svi troškovi puta na jednom mjestu.',
      },
      share: {
        title: 'Podijeli putovanje s društvom',
        description:
          'Pozovi prijatelje poveznicom. Svi upisuju troškove u isto putovanje i odmah vide promjene. Prijatelji se pridružuju besplatno.',
      },
      backup: {
        title: 'Sigurnosna kopija na računu',
        description:
          'Prijavi se i putovanja su spremljena na tvom računu, pa ih vraćaš i na novom mobitelu. Za početak ti račun ne treba.',
      },
      settle: {
        title: 'Podmirivanje s najmanje uplata',
        description: 'Točno vidiš tko kome treba platiti, uz najmanji mogući broj uplata.',
      },
      scan: {
        title: 'Skeniranje fiskalnih računa',
        description:
          'Skeniraj QR kod fiskalnog računa iz 27 zemalja, uključujući Hrvatsku — Trevvy sam upiše iznos, valutu i podatke o porezu.',
      },
      currency: {
        title: 'Više valuta',
        description: 'Upiši trošak u bilo kojoj valuti sa svojim tečajem ili pusti da tečajevi uživo sve preračunaju.',
      },
      analytics: {
        title: 'Analitika potrošnje',
        description:
          'Potrošnja po kategorijama i proračun u odnosu na stvarne troškove za svako putovanje, plus pregled svih putovanja u godini.',
      },
    },
  },
  countries: {
    eyebrow: 'Skeniranje QR računa',
    title: 'Podržano 27 zemalja',
    subtitle:
      'Trevvy čita QR kodove službenih fiskalnih računa. Skeniraš račun, a iznos, valuta i podaci o porezu upišu se sami.',
    footnote: 'Uz to su podržani i opći JSON, ključ-vrijednost i URL formati računa.',
    names: {
      AR: 'Argentina',
      AT: 'Austrija',
      BO: 'Bolivija',
      BR: 'Brazil',
      CN: 'Kina',
      CO: 'Kolumbija',
      HR: 'Hrvatska',
      CZ: 'Češka',
      EC: 'Ekvador',
      EG: 'Egipat',
      HU: 'Mađarska',
      IN: 'Indija',
      IT: 'Italija',
      KE: 'Kenija',
      KR: 'Južna Koreja',
      MX: 'Meksiko',
      PT: 'Portugal',
      RO: 'Rumunjska',
      RU: 'Rusija',
      SA: 'Saudijska Arabija',
      RS: 'Srbija',
      SK: 'Slovačka',
      SI: 'Slovenija',
      ES: 'Španjolska',
      TW: 'Tajvan',
      TH: 'Tajland',
      UA: 'Ukrajina',
    },
  },
  howItWorks: {
    eyebrow: 'Kako radi',
    title: 'Spremno za par minuta',
    subtitle: 'Nekoliko jednostavnih koraka do podjele troškova bez svađe.',
    steps: {
      create: {
        title: 'Napravi putovanje',
        description: 'Napravi novo putovanje i daj mu ime koje ćete pamtiti.',
      },
      participants: {
        title: 'Dodaj društvo',
        description: 'Dodaj suputnike po imenu ili ih pozovi poveznicom da zajedno upisujete troškove.',
      },
      record: {
        title: 'Upisuj troškove',
        description: 'Bilježi troškove čim nastanu. Trevvy pamti sve umjesto tebe.',
      },
      calculate: {
        title: 'Trevvy računa',
        description: 'Stanje se odmah ažurira i uvijek vidiš tko kome koliko duguje.',
      },
    },
  },
  preview: {
    eyebrow: 'Izgled aplikacije',
    title: 'Pregledno i jednostavno',
    subtitle: 'Napravljeno za stvarne situacije na putu: brzo i jasno.',
    screens: {
      travels: {
        alt: 'Popis putovanja s proračunima',
        title: 'Tvoja putovanja',
        description: 'Stvaraj putovanja, postavi proračun i prati potrošnju svih putovanja na jednom mjestu.',
      },
      expenses: {
        alt: 'Popis troškova po kategorijama',
        title: 'Praćenje troškova',
        description: 'Svaki trošak ima kategoriju, vidi se tko je platio i između koga se dijeli.',
      },
      analytics: {
        alt: 'Analitika – potrošnja po kategorijama',
        title: 'Analitika potrošnje',
        description: 'Grafikoni potrošnje po kategorijama i proračun u odnosu na stvarne troškove na prvi pogled.',
      },
      settlement: {
        alt: 'Podmirivanje – zabilježene uplate',
        title: 'Lako podmirivanje',
        description: 'Vidi otvorene dugove, bilježi uplate i označi ih kao podmirene.',
      },
    },
  },
  faq: {
    eyebrow: 'Pitanja',
    title: 'Česta pitanja',
    subtitle: 'Sve što trebaš znati o aplikaciji Trevvy.',
    items: [
      {
        question: 'Što je Trevvy?',
        answer:
          'Trevvy je aplikacija za podjelu troškova putovanja za iOS i Android. Napraviš putovanje, dodaš društvo, upisuješ zajedničke troškove, a Trevvy izračuna tko kome koliko duguje — i predloži podmirivanje sa što manje uplata.',
      },
      {
        question: 'Koja je aplikacija najbolja za podjelu troškova putovanja?',
        answer:
          'Ovisi što vašem društvu treba. Opće aplikacije za dijeljenje računa, poput Splitwisea ili Tricounta, dobre su za svakodnevne troškove. Trevvy je napravljen baš za putovanja: radi bez interneta i bez računa, podržava više od 150 valuta, skenira QR kodove fiskalnih računa iz 27 zemalja (i iz Hrvatske) i podmiruje dugove s najmanje uplata. Besplatan je za do 7 aktivnih putovanja.',
      },
      {
        question: 'Je li Trevvy besplatan?',
        answer:
          'Da. Stvaranje putovanja, dodavanje sudionika, upisivanje troškova i pregled stanja potpuno su besplatni za do 7 aktivnih putovanja. Premium otključava dijeljenje putovanja, QR/OCR skeniranje računa, tečajeve uživo, analitiku i neograničen broj putovanja.',
      },
      {
        question: 'Na kojim je jezicima Trevvy dostupan?',
        answer:
          'Trevvy je dostupan na hrvatskom, srpskom, bosanskom, engleskom, ruskom, njemačkom i španjolskom. Aplikacija prati jezik mobitela, a jezik možeš odabrati i u Postavkama — tada ostaje onaj koji si odabrao.',
      },
      {
        question: 'Kako podijeliti troškove putovanja s prijateljima?',
        answer:
          'Napravi putovanje, dodaj suputnike i upisuj troškove kako nastaju: tko je platio i tko sudjeluje. Trošak možeš podijeliti na jednake dijelove, postotno, točnim iznosima ili po udjelima. Na kraju puta Trevvy pokaže tko kome koliko duguje i predloži najmanji broj uplata.',
      },
      {
        question: 'Mogu li podijeliti putovanje s prijateljima?',
        answer:
          'Da. Podijeli putovanje i pošalji poveznicu za poziv; prijatelji koji se pridruže mogu dodavati i mijenjati troškove s tobom, a svi odmah vide promjene. Premium treba samo vlasniku putovanja — pozvani prijatelji pridružuju se besplatno.',
      },
      {
        question: 'Kako radi skeniranje QR koda s računa?',
        answer:
          'Usmjeriš kameru prema QR kodu fiskalnog računa i Trevvy pročita ukupan iznos, valutu, OIB i broj računa izravno iz QR koda. Za većinu zemalja to radi potpuno bez interneta. Podaci se sami upišu u trošak, pa ga dodaješ u putovanje za par sekundi.',
      },
      {
        question: 'Iz kojih zemalja mogu skenirati fiskalne račune?',
        answer:
          'Trevvy čita QR kodove službenih fiskalnih računa iz 27 zemalja: Argentina, Austrija, Bolivija, Brazil, Kina, Kolumbija, Hrvatska, Češka, Ekvador, Egipat, Mađarska, Indija, Italija, Kenija, Južna Koreja, Meksiko, Portugal, Rumunjska, Rusija, Saudijska Arabija, Srbija, Slovačka, Slovenija, Španjolska, Tajvan, Tajland i Ukrajina. Podržani su i opći JSON, ključ-vrijednost i URL formati računa iz bilo koje zemlje.',
      },
      {
        question: 'Podržava li Trevvy više valuta?',
        answer:
          'Da. Svaki trošak možeš upisati u bilo kojoj valuti i unijeti svoj tečaj; svako putovanje ima svoju osnovnu valutu. Premium sam preuzima tečajeve uživo.',
      },
      {
        question: 'Trebam li račun za korištenje?',
        answer:
          'Ne. Trevvy radi bez registracije — preuzmi ga i odmah stvaraj putovanja. Prijavi se putem Applea, Googlea ili e-pošte samo ako želiš sigurnosnu kopiju putovanja ili ih dijeliti s prijateljima.',
      },
      {
        question: 'Čuvaju li se moji podaci na internetu?',
        answer:
          'Samo ako se prijaviš. Bez računa sve ostaje na tvom mobitelu. S računom se putovanja spremaju i na naše poslužitelje, kako bi imala sigurnosnu kopiju i mogla se dijeliti; fotografije računa uvijek ostaju na mobitelu. Detalji su u Pravilima privatnosti.',
      },
      {
        question: 'Kako obrisati račun?',
        answer:
          'U aplikaciji idi na Postavke → Račun → Obriši račun. Brišu se račun i putovanja spremljena na njemu; putovanja koja si dijelio ostaju članovima, samo za čitanje. Brisanje možeš zatražiti i na trevvy.app/delete-account.',
      },
      {
        question: 'Što je Trip Pass?',
        answer:
          'Trip Pass je jednokratna kupnja koja otključava Premium za jedno putovanje na 17 dana — skeniranje računa, tečajeve uživo i analitiku. Idealan je ako ti Premium treba samo za jedno putovanje, bez pretplate. Za dijeljenje putovanja potrebna je pretplata.',
      },
      {
        question: 'Kako Trevvy smanjuje broj uplata?',
        answer:
          'Trevvy koristi algoritam za pojednostavljivanje dugova koji traži najmanji broj uplata potreban da se svi podmire. Umjesto da svatko plaća svakome, dobiješ najkraći popis uplata nakon kojeg su svi na nuli.',
      },
      {
        question: 'Mogu li izvesti podatke o putovanju?',
        answer: 'Da. Pregled troškova i stanja putovanja možeš podijeliti izravno iz aplikacije.',
      },
    ],
  },
  cta: {
    title: 'Sljedeće putovanje bez svađe oko novca',
    subtitle: 'Preuzmi Trevvy i posveti se uspomenama, a ne tablicama.',
    note: 'Besplatno preuzimanje • Račun nije potreban',
  },
  support: {
    eyebrow: 'Podrška',
    title: 'Tu smo da pomognemo',
    subtitle: 'Ako imaš problem ili pitanje o aplikaciji Trevvy, javi nam se.',
    emailTitle: 'Podrška e-poštom',
    emailText: 'Piši nam i odgovorit ćemo.',
    inAppTitle: 'Pomoć u aplikaciji',
    inAppText: 'Pomoć je dostupna izravno iz aplikacije.',
    inAppPath: 'Postavke → Pomoć i podrška',
    privacyTitle: 'Pravila privatnosti',
    privacyText: 'Saznaj kako štitimo tvoje podatke (na engleskom).',
    privacyLink: 'Pročitaj pravila privatnosti',
  },
  footer: {
    tagline: 'Jednostavan, brz i opušten način da podijeliš troškove putovanja s prijateljima.',
    product: 'Proizvod',
    support: 'Podrška',
    helpCenter: 'Centar za pomoć',
    contact: 'Kontakt',
    legal: 'Pravno',
    privacy: 'Pravila privatnosti',
    deleteAccount: 'Brisanje računa',
    languages: 'Jezici',
    rights: 'Sva prava pridržana.',
  },
  schema: {
    description:
      'Aplikacija za podjelu troškova putovanja s prijateljima: bilježi tko je što platio, dijeli troškove i pokazuje tko kome koliko duguje.',
    featureList: [
      'Podjela troškova s podmirivanjem uz najmanje uplata',
      'Dijeljenje putovanja s promjenama uživo',
      'Skeniranje QR fiskalnih računa iz 27 zemalja',
      'Više valuta i tečajevi uživo',
      'Analitika i grafikoni potrošnje',
      'Radi bez interneta; račun samo za sigurnosnu kopiju i dijeljenje',
      'Trip Pass za Premium na jednom putovanju',
      'Na hrvatskom, srpskom, bosanskom, engleskom, ruskom, njemačkom i španjolskom',
    ],
  },
}
