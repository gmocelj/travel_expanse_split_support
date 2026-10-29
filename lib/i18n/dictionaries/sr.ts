import type { Dictionary } from '../types'

// Serbian, ekavian, Latin script. Informal "ti", as in the app.
export const sr: Dictionary = {
  meta: {
    title: 'Aplikacija za podelu troškova putovanja sa društvom | Trevvy',
    description:
      'Ideš na put sa društvom? Trevvy beleži ko je šta platio, deli troškove i pokazuje ko kome koliko duguje. Besplatna aplikacija za iOS i Android, radi i bez interneta.',
    keywords: [
      'aplikacija za podelu troškova',
      'podela troškova putovanja',
      'podela troškova na putovanju',
      'putovanje sa društvom',
      'ko kome duguje',
      'deljenje računa',
      'grupno putovanje',
      'troškovi puta',
      'najbolja aplikacija za podelu troškova',
    ],
    ogTitle: 'Trevvy – podela troškova putovanja sa društvom',
    ogDescription:
      'Beleži zajedničke troškove, podeli ih sa društvom i vidi ko kome koliko duguje. Bez naloga, radi i bez interneta.',
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
    titleStart: 'Podela troškova putovanja',
    titleHighlight: 'bez računanja',
    subtitle:
      'Ideš na put sa društvom? Dodaj učesnike, beleži troškove po kategorijama i odmah vidi ko kome koliko duguje — ili podeli putovanje da i drugi upisuju troškove sa tobom.',
    appStore: 'Preuzmi na App Store',
    googlePlay: 'Preuzmi na Google Play',
    howItWorks: 'Pogledaj kako radi',
    screenshotAlt: 'Trevvy aplikacija – lista troškova putovanja',
  },
  features: {
    eyebrow: 'Mogućnosti',
    title: 'Sve što ti treba za podelu troškova na putovanju',
    subtitle:
      'Ti uživaj u putovanju, a Trevvy računa novac. Deljenje putovanja, QR/OCR skeniranje, kursna lista uživo i analitika su deo Premium paketa.',
    items: {
      split: {
        title: 'Laka podela troškova',
        description: 'Upiši zajednički trošak i Trevvy sam izračuna ko kome koliko duguje. Nema više računanja na papiru.',
      },
      groups: {
        title: 'Napravljeno za grupna putovanja',
        description: 'Smeštaj, hrana, prevoz, gorivo i izleti — svi troškovi puta na jednom mestu.',
      },
      share: {
        title: 'Podeli putovanje sa društvom',
        description:
          'Pozovi prijatelje linkom. Svi upisuju troškove u isto putovanje i odmah vide promene. Prijatelji se pridružuju besplatno.',
      },
      backup: {
        title: 'Rezervna kopija na nalogu',
        description:
          'Prijavi se i putovanja su sačuvana na tvom nalogu, pa ih vraćaš i na novom telefonu. Za početak ti nalog ne treba.',
      },
      settle: {
        title: 'Izmirenje sa najmanje uplata',
        description: 'Tačno vidiš ko kome treba da plati, uz najmanji mogući broj uplata.',
      },
      scan: {
        title: 'Skeniranje fiskalnih računa',
        description:
          "Skeniraj podržane fiskalne QR račune ili koristi OCR za štampane račune iz bilo koje zemlje. Proveri iznos, valutu i datum pre čuvanja.",
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
    footnote: "OCR možeš da koristiš za štampane račune iz bilo koje zemlje. Rezultat zavisi od kvaliteta slike, jezika i rasporeda teksta. Za neke QR račune treba internet.",
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
      PT: 'Portugalija',
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
    subtitle: 'Nekoliko jednostavnih koraka do podele troškova bez svađe.',
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
        description: 'Beleži troškove čim nastanu. Trevvy pamti sve umesto tebe.',
      },
      calculate: {
        title: 'Trevvy računa',
        description: 'Stanje se ažurira odmah i uvek vidiš ko kome koliko duguje.',
      },
    },
  },
  preview: {
    eyebrow: 'Izgled aplikacije',
    title: 'Pregledno i jednostavno',
    subtitle: 'Napravljeno za prave situacije na putu: brzo i jasno.',
    screens: {
      travels: {
        alt: 'Lista putovanja sa budžetima',
        title: 'Tvoja putovanja',
        description: 'Pravi putovanja, postavi budžet i prati potrošnju svih putovanja na jednom mestu.',
      },
      expenses: {
        alt: 'Lista troškova po kategorijama',
        title: 'Praćenje troškova',
        description: 'Svaki trošak ima kategoriju, vidi se ko je platio i između koga se deli.',
      },
      analytics: {
        alt: 'Analitika – potrošnja po kategorijama',
        title: 'Analitika potrošnje',
        description: 'Grafikoni potrošnje po kategorijama i budžet naspram stvarnih troškova na prvi pogled.',
      },
      settlement: {
        alt: 'Izmirenje – zabeležene uplate',
        title: 'Lako izmirenje',
        description: 'Vidi otvorene dugove, beleži uplate i označi ih kao izmirene.',
      },
    },
  },
  faq: {
    eyebrow: 'Pitanja',
    title: 'Česta pitanja',
    subtitle: 'Sve što treba da znaš o Trevvy aplikaciji.',
    items: [
      {
        question: 'Šta je Trevvy?',
        answer:
          'Trevvy je aplikacija za podelu troškova putovanja za iOS i Android. Napraviš putovanje, dodaš društvo, upisuješ zajedničke troškove, a Trevvy izračuna ko kome koliko duguje — i predloži izmirenje sa što manje uplata.',
      },
      {
        question: 'Koja aplikacija je najbolja za podelu troškova puta?',
        answer:
          "Trevvy je napravljen za putovanja: podeli troškove društva, prati budžet u preko 150 valuta i skeniraj račune. Osnovno beleženje troškova radi bez interneta i bez naloga. QR skeniranje podržava odabrane formate, a OCR možeš da koristiš za štampane račune iz bilo koje zemlje. Besplatno za do 7 aktivnih putovanja.",
      },
      {
        question: 'Da li je Trevvy besplatan?',
        answer:
          'Da. Pravljenje putovanja, dodavanje učesnika, upisivanje troškova i pregled stanja potpuno su besplatni za do 7 aktivnih putovanja. Premium otključava deljenje putovanja, QR/OCR skeniranje računa, kursnu listu uživo, analitiku i neograničen broj putovanja.',
      },
      {
        question: 'Na kojim jezicima je Trevvy dostupan?',
        answer:
          'Trevvy je dostupan na srpskom, hrvatskom, bosanskom, engleskom, ruskom, nemačkom i španskom. Aplikacija prati jezik telefona, a jezik možeš izabrati i u Podešavanjima — tada ostaje taj koji si izabrao.',
      },
      {
        question: 'Kako da podelim troškove putovanja sa društvom?',
        answer:
          'Napravi putovanje, dodaj saputnike i upisuj troškove kako nastaju: ko je platio i ko učestvuje. Trošak možeš podeliti na jednake delove, procentualno, tačnim iznosima ili po udelima. Na kraju puta Trevvy pokaže ko kome koliko duguje i predloži najmanji broj uplata.',
      },
      {
        question: 'Mogu li da podelim putovanje sa prijateljima?',
        answer:
          'Da. Podeli putovanje i pošalji link za poziv; prijatelji koji se pridruže mogu da dodaju i menjaju troškove sa tobom, a svi odmah vide promene. Premium treba samo vlasniku putovanja — pozvani prijatelji se pridružuju besplatno.',
      },
      {
        question: 'Kako radi skeniranje QR koda sa računa?',
        answer:
          "Skeniraj podržani QR kod računa da popuniš trošak dostupnim podacima. Neki kodovi sadrže podatke direktno, dok drugi traže internet da ih preuzmu. Proveri iznos, valutu i datum pre čuvanja.",
      },
      {
        question: 'Iz kojih zemalja mogu da skeniram fiskalne račune?',
        answer:
          "Podržani formati uključuju fiskalne račune iz Srbije i Hrvatske. Dostupni podaci zavise od formata računa. OCR možeš da koristiš za štampane račune iz bilo koje zemlje. Rezultat zavisi od kvaliteta slike, jezika i rasporeda teksta. Za neke QR račune treba internet.",
      },
      {
        question: 'Da li Trevvy podržava više valuta?',
        answer:
          'Da. Svaki trošak možeš upisati u bilo kojoj valuti i uneti svoj kurs; svako putovanje ima svoju osnovnu valutu. Premium sam preuzima kursnu listu uživo.',
      },
      {
        question: 'Da li mi treba nalog?',
        answer:
          'Ne. Trevvy radi bez registracije — preuzmi ga i odmah pravi putovanja. Prijavi se preko Apple, Google naloga ili e-pošte samo ako želiš rezervnu kopiju putovanja ili da ih deliš sa prijateljima.',
      },
      {
        question: 'Da li se moji podaci čuvaju na internetu?',
        answer:
          'Samo ako se prijaviš. Bez naloga sve ostaje na tvom telefonu. Sa nalogom se putovanja čuvaju i na našim serverima, da bi imala rezervnu kopiju i mogla da se dele; fotografije računa uvek ostaju na telefonu. Detalji su u Politici privatnosti.',
      },
      {
        question: 'Kako da obrišem nalog?',
        answer:
          'U aplikaciji idi na Podešavanja → Nalog → Obriši nalog. Brišu se nalog i putovanja sačuvana na njemu; putovanja koja si delio ostaju članovima, samo za čitanje. Brisanje možeš zatražiti i na trevvy.app/delete-account.',
      },
      {
        question: 'Šta je Trip Pass?',
        answer:
          'Trip Pass je jednokratna kupovina koja otključava Premium za jedno putovanje na 17 dana — skeniranje računa, kursnu listu uživo i analitiku. Idealan je ako ti Premium treba samo za jedno putovanje, bez pretplate. Za deljenje putovanja potrebna je pretplata.',
      },
      {
        question: 'Kako Trevvy smanjuje broj uplata?',
        answer:
          'Trevvy koristi algoritam za pojednostavljivanje dugova koji traži najmanji broj uplata potreban da se svi izmire. Umesto da svako plaća svakome, dobiješ najkraći spisak uplata posle kog su svi na nuli.',
      },
      {
        question: 'Mogu li da izvezem podatke o putovanju?',
        answer: 'Da. Pregled troškova i stanja putovanja možeš podeliti direktno iz aplikacije.',
      },
    ],
  },
  cta: {
    title: 'Sledeće putovanje bez svađe oko para',
    subtitle: 'Preuzmi Trevvy i posveti se uspomenama, a ne tabelama.',
    note: 'Besplatno preuzimanje • Nalog nije potreban',
  },
  support: {
    eyebrow: 'Podrška',
    title: 'Tu smo da pomognemo',
    subtitle: 'Ako imaš problem ili pitanje o Trevvy aplikaciji, javi nam se.',
    emailTitle: 'Podrška e-poštom',
    emailText: 'Piši nam i odgovorićemo.',
    inAppTitle: 'Pomoć u aplikaciji',
    inAppText: 'Pomoć je dostupna direktno iz aplikacije.',
    inAppPath: 'Podešavanja → Pomoć i podrška',
    privacyTitle: 'Politika privatnosti',
    privacyText: 'Saznaj kako štitimo tvoje podatke (na engleskom).',
    privacyLink: 'Pročitaj politiku privatnosti',
  },
  footer: {
    tagline: 'Jednostavan, brz i miran način da podeliš troškove putovanja sa društvom.',
    product: 'Proizvod',
    support: 'Podrška',
    helpCenter: 'Centar za pomoć',
    contact: 'Kontakt',
    legal: 'Pravno',
    privacy: 'Politika privatnosti',
    deleteAccount: 'Brisanje naloga',
    languages: 'Jezici',
    rights: 'Sva prava zadržana.',
  },
  schema: {
    description:
      'Aplikacija za podelu troškova putovanja sa društvom: beleži ko je šta platio, deli troškove i pokazuje ko kome koliko duguje.',
    featureList: [
      'Podela troškova sa izmirenjem uz najmanje uplata',
      'Deljenje putovanja sa promenama uživo',
      "Podržani fiskalni QR formati i OCR za štampane račune iz bilo koje zemlje",
      'Više valuta i kursna lista uživo',
      'Analitika i grafikoni potrošnje',
      'Radi bez interneta; nalog samo za rezervnu kopiju i deljenje',
      'Trip Pass za Premium na jednom putovanju',
      'Na srpskom, hrvatskom, bosanskom, engleskom, ruskom, nemačkom i španskom',
    ],
  },
}
