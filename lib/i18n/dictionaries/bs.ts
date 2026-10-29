import type { Dictionary } from '../types'

// Bosnian, ijekavian, Latin script. Informal "ti", as in the app.
export const bs: Dictionary = {
  meta: {
    title: 'Aplikacija za podjelu troškova putovanja s društvom | Trevvy',
    description:
      'Ideš na put s društvom? Trevvy bilježi ko je šta platio, dijeli troškove i pokazuje ko kome koliko duguje. Besplatna aplikacija za iOS i Android, radi i bez interneta.',
    keywords: [
      'aplikacija za podjelu troškova',
      'podjela troškova putovanja',
      'podjela troškova na putovanju',
      'putovanje s društvom',
      'ko kome duguje',
      'dijeljenje računa',
      'grupno putovanje',
      'troškovi puta',
      'najbolja aplikacija za podjelu troškova',
    ],
    ogTitle: 'Trevvy – podjela troškova putovanja s društvom',
    ogDescription:
      'Bilježi zajedničke troškove, podijeli ih s društvom i vidi ko kome koliko duguje. Bez korisničkog računa, radi i bez interneta.',
  },
  nav: {
    features: 'Mogućnosti',
    howItWorks: 'Kako radi',
    faq: 'Pitanja',
    support: 'Podrška',
    privacy: 'Privatnost',
    language: 'Jezik',
    toggleMenu: 'Otvori meni',
  },
  hero: {
    badge: 'Dostupno na App Store i Google Play',
    titleStart: 'Podjela troškova putovanja',
    titleHighlight: 'bez računanja',
    subtitle:
      'Ideš na put s društvom? Dodaj učesnike, bilježi troškove po kategorijama i odmah vidi ko kome koliko duguje — ili podijeli putovanje da i drugi upisuju troškove s tobom.',
    appStore: 'Preuzmi na App Store',
    googlePlay: 'Preuzmi na Google Play',
    howItWorks: 'Pogledaj kako radi',
    screenshotAlt: 'Trevvy aplikacija – lista troškova putovanja',
  },
  features: {
    eyebrow: 'Mogućnosti',
    title: 'Sve što ti treba za podjelu troškova na putovanju',
    subtitle:
      'Ti uživaj u putovanju, a Trevvy računa novac. Dijeljenje putovanja, QR/OCR skeniranje, kursna lista uživo i analitika su dio Premium paketa.',
    items: {
      split: {
        title: 'Laka podjela troškova',
        description: 'Upiši zajednički trošak i Trevvy sam izračuna ko kome koliko duguje. Nema više računanja na papiru.',
      },
      groups: {
        title: 'Napravljeno za grupna putovanja',
        description: 'Smještaj, hrana, prevoz, gorivo i izleti — svi troškovi puta na jednom mjestu.',
      },
      share: {
        title: 'Podijeli putovanje s društvom',
        description:
          'Pozovi prijatelje linkom. Svi upisuju troškove u isto putovanje i odmah vide promjene. Prijatelji se pridružuju besplatno.',
      },
      backup: {
        title: 'Sigurnosna kopija na računu',
        description:
          'Prijavi se i putovanja su sačuvana na tvom korisničkom računu, pa ih vraćaš i na novom telefonu. Za početak ti račun ne treba.',
      },
      settle: {
        title: 'Izmirenje s najmanje uplata',
        description: 'Tačno vidiš ko kome treba platiti, uz najmanji mogući broj uplata.',
      },
      scan: {
        title: 'Skeniranje fiskalnih računa',
        description:
          "Skeniraj podržane fiskalne QR račune ili koristi OCR za štampane račune iz bilo koje zemlje. Provjeri iznos, valutu i datum prije čuvanja.",
      },
      currency: {
        title: 'Više valuta',
        description: 'Upiši trošak u bilo kojoj valuti sa svojim kursom ili pusti da kursna lista uživo sve preračuna.',
      },
      analytics: {
        title: 'Analitika potrošnje',
        description:
          'Potrošnja po kategorijama i budžet naspram stvarnih troškova za svako putovanje, plus pregled svih putovanja u godini.',
      },
    },
  },
  countries: {
    eyebrow: 'Skeniranje QR računa',
    title: "Formati fiskalnih QR računa",
    subtitle:
      "Podržani formati uključuju fiskalne račune iz Srbije i Hrvatske. Dostupni podaci zavise od formata računa.",
    footnote: "OCR možeš koristiti za štampane račune iz bilo koje zemlje. Rezultat zavisi od kvaliteta slike, jezika i rasporeda teksta. Za neke QR račune treba internet.",
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
      RO: 'Rumunija',
      RU: 'Rusija',
      SA: 'Saudijska Arabija',
      RS: 'Srbija',
      SK: 'Slovačka',
      SI: 'Slovenija',
      ES: 'Španija',
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
        description: 'Dodaj saputnike po imenu ili ih pozovi linkom da zajedno upisujete troškove.',
      },
      record: {
        title: 'Upisuj troškove',
        description: 'Bilježi troškove čim nastanu. Trevvy pamti sve umjesto tebe.',
      },
      calculate: {
        title: 'Trevvy računa',
        description: 'Stanje se odmah ažurira i uvijek vidiš ko kome koliko duguje.',
      },
    },
  },
  preview: {
    eyebrow: 'Izgled aplikacije',
    title: 'Pregledno i jednostavno',
    subtitle: 'Napravljeno za stvarne situacije na putu: brzo i jasno.',
    screens: {
      travels: {
        alt: 'Lista putovanja s budžetima',
        title: 'Tvoja putovanja',
        description: 'Pravi putovanja, postavi budžet i prati potrošnju svih putovanja na jednom mjestu.',
      },
      expenses: {
        alt: 'Lista troškova po kategorijama',
        title: 'Praćenje troškova',
        description: 'Svaki trošak ima kategoriju, vidi se ko je platio i između koga se dijeli.',
      },
      analytics: {
        alt: 'Analitika – potrošnja po kategorijama',
        title: 'Analitika potrošnje',
        description: 'Grafikoni potrošnje po kategorijama i budžet naspram stvarnih troškova na prvi pogled.',
      },
      settlement: {
        alt: 'Izmirenje – zabilježene uplate',
        title: 'Lako izmirenje',
        description: 'Vidi otvorene dugove, bilježi uplate i označi ih kao izmirene.',
      },
    },
  },
  faq: {
    eyebrow: 'Pitanja',
    title: 'Česta pitanja',
    subtitle: 'Sve što trebaš znati o Trevvy aplikaciji.',
    items: [
      {
        question: 'Šta je Trevvy?',
        answer:
          'Trevvy je aplikacija za podjelu troškova putovanja za iOS i Android. Napraviš putovanje, dodaš društvo, upisuješ zajedničke troškove, a Trevvy izračuna ko kome koliko duguje — i predloži izmirenje sa što manje uplata.',
      },
      {
        question: 'Koja aplikacija je najbolja za podjelu troškova puta?',
        answer:
          "Trevvy je napravljen za putovanja: podijeli troškove društva, prati budžet u preko 150 valuta i skeniraj račune. Osnovno bilježenje troškova radi bez interneta i bez korisničkog računa. QR skeniranje podržava odabrane formate, a OCR možeš koristiti za štampane račune iz bilo koje zemlje. Besplatno za do 7 aktivnih putovanja.",
      },
      {
        question: 'Da li je Trevvy besplatan?',
        answer:
          'Da. Pravljenje putovanja, dodavanje učesnika, upisivanje troškova i pregled stanja potpuno su besplatni za do 7 aktivnih putovanja. Premium otključava dijeljenje putovanja, QR/OCR skeniranje računa, kursnu listu uživo, analitiku i neograničen broj putovanja.',
      },
      {
        question: 'Na kojim jezicima je Trevvy dostupan?',
        answer:
          'Trevvy je dostupan na bosanskom, hrvatskom, srpskom, engleskom, ruskom, njemačkom i španskom. Aplikacija prati jezik telefona, a jezik možeš izabrati i u Postavkama — tada ostaje onaj koji si izabrao.',
      },
      {
        question: 'Kako podijeliti troškove putovanja s društvom?',
        answer:
          'Napravi putovanje, dodaj saputnike i upisuj troškove kako nastaju: ko je platio i ko učestvuje. Trošak možeš podijeliti na jednake dijelove, procentualno, tačnim iznosima ili po udjelima. Na kraju puta Trevvy pokaže ko kome koliko duguje i predloži najmanji broj uplata.',
      },
      {
        question: 'Mogu li podijeliti putovanje s prijateljima?',
        answer:
          'Da. Podijeli putovanje i pošalji link za poziv; prijatelji koji se pridruže mogu dodavati i mijenjati troškove s tobom, a svi odmah vide promjene. Premium treba samo vlasniku putovanja — pozvani prijatelji se pridružuju besplatno.',
      },
      {
        question: 'Kako radi skeniranje QR koda s računa?',
        answer:
          "Skeniraj podržani QR kod računa da popuniš trošak dostupnim podacima. Neki kodovi sadrže podatke direktno, dok drugi trebaju internet za njihovo preuzimanje. Provjeri iznos, valutu i datum prije čuvanja.",
      },
      {
        question: 'Iz kojih zemalja mogu skenirati fiskalne račune?',
        answer:
          "Podržani formati uključuju fiskalne račune iz Srbije i Hrvatske. Dostupni podaci zavise od formata računa. OCR možeš koristiti za štampane račune iz bilo koje zemlje. Rezultat zavisi od kvaliteta slike, jezika i rasporeda teksta. Za neke QR račune treba internet.",
      },
      {
        question: 'Da li Trevvy podržava više valuta?',
        answer:
          'Da. Svaki trošak možeš upisati u bilo kojoj valuti i unijeti svoj kurs; svako putovanje ima svoju osnovnu valutu. Premium sam preuzima kursnu listu uživo.',
      },
      {
        question: 'Da li mi treba korisnički račun?',
        answer:
          'Ne. Trevvy radi bez registracije — preuzmi ga i odmah pravi putovanja. Prijavi se putem Apple, Google računa ili e-maila samo ako želiš sigurnosnu kopiju putovanja ili ih dijeliti s prijateljima.',
      },
      {
        question: 'Da li se moji podaci čuvaju na internetu?',
        answer:
          'Samo ako se prijaviš. Bez korisničkog računa sve ostaje na tvom telefonu. S računom se putovanja čuvaju i na našim serverima, da bi imala sigurnosnu kopiju i mogla se dijeliti; fotografije računa uvijek ostaju na telefonu. Detalji su u Politici privatnosti.',
      },
      {
        question: 'Kako da obrišem korisnički račun?',
        answer:
          'U aplikaciji idi na Postavke → Račun → Obriši račun. Brišu se korisnički račun i putovanja sačuvana na njemu; putovanja koja si dijelio ostaju članovima, samo za čitanje. Brisanje možeš zatražiti i na trevvy.app/delete-account.',
      },
      {
        question: 'Šta je Trip Pass?',
        answer:
          'Trip Pass je jednokratna kupovina koja otključava Premium za jedno putovanje na 17 dana — skeniranje računa, kursnu listu uživo i analitiku. Idealan je ako ti Premium treba samo za jedno putovanje, bez pretplate. Za dijeljenje putovanja potrebna je pretplata.',
      },
      {
        question: 'Kako Trevvy smanjuje broj uplata?',
        answer:
          'Trevvy koristi algoritam za pojednostavljivanje dugova koji traži najmanji broj uplata potreban da se svi izmire. Umjesto da svako plaća svakome, dobiješ najkraći spisak uplata nakon kojeg su svi na nuli.',
      },
      {
        question: 'Mogu li izvesti podatke o putovanju?',
        answer: 'Da. Pregled troškova i stanja putovanja možeš podijeliti direktno iz aplikacije.',
      },
    ],
  },
  cta: {
    title: 'Sljedeće putovanje bez svađe oko para',
    subtitle: 'Preuzmi Trevvy i posveti se uspomenama, a ne tabelama.',
    note: 'Besplatno preuzimanje • Korisnički račun nije potreban',
  },
  support: {
    eyebrow: 'Podrška',
    title: 'Tu smo da pomognemo',
    subtitle: 'Ako imaš problem ili pitanje o Trevvy aplikaciji, javi nam se.',
    emailTitle: 'Podrška putem e-maila',
    emailText: 'Piši nam i odgovorit ćemo.',
    inAppTitle: 'Pomoć u aplikaciji',
    inAppText: 'Pomoć je dostupna direktno iz aplikacije.',
    inAppPath: 'Postavke → Pomoć i podrška',
    privacyTitle: 'Politika privatnosti',
    privacyText: 'Saznaj kako štitimo tvoje podatke (na engleskom).',
    privacyLink: 'Pročitaj politiku privatnosti',
  },
  footer: {
    tagline: 'Jednostavan, brz i opušten način da podijeliš troškove putovanja s društvom.',
    product: 'Proizvod',
    support: 'Podrška',
    helpCenter: 'Centar za pomoć',
    contact: 'Kontakt',
    legal: 'Pravno',
    privacy: 'Politika privatnosti',
    deleteAccount: 'Brisanje računa',
    languages: 'Jezici',
    rights: 'Sva prava zadržana.',
  },
  schema: {
    description:
      'Aplikacija za podjelu troškova putovanja s društvom: bilježi ko je šta platio, dijeli troškove i pokazuje ko kome koliko duguje.',
    featureList: [
      'Podjela troškova s izmirenjem uz najmanje uplata',
      'Dijeljenje putovanja s promjenama uživo',
      "Podržani fiskalni QR formati i OCR za štampane račune iz bilo koje zemlje",
      'Više valuta i kursna lista uživo',
      'Analitika i grafikoni potrošnje',
      'Radi bez interneta; korisnički račun samo za sigurnosnu kopiju i dijeljenje',
      'Trip Pass za Premium na jednom putovanju',
      'Na bosanskom, hrvatskom, srpskom, engleskom, ruskom, njemačkom i španskom',
    ],
  },
}
