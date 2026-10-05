export default {
  name: 'Polski',
  label: 'PL',
  locale: 'pl_PL',

  meta: {
    title: 'JARIZ — instalacje elektryczne, alarmy i monitoring w Poznaniu',
    description:
      'JARIZ Sp. z o.o. — instalacje elektryczne i słaboprądowe, montaż monitoringu CCTV, systemów alarmowych i czujników. Uprawnienia SEP i UDT. Poznań i Wielkopolska.',
  },

  nav: {
    skip: 'Przejdź do treści',
    menu: 'Menu',
    close: 'Zamknij menu',
    lang: 'Język',
    cta: 'Wycena',
    items: { services: 'Usługi', licenses: 'Uprawnienia', process: 'Jak pracujemy', faq: 'FAQ', contact: 'Kontakt' },
  },

  hero: {
    eyebrow: 'Elektryka · Słaboprąd · Bezpieczeństwo',
    title: ['Instalacje, które ', 'po prostu działają', '.'],
    lead: 'Projektujemy i montujemy instalacje elektryczne, sieci słaboprądowe, monitoring CCTV, alarmy i czujniki — w domach, mieszkaniach, biurach i obiektach firmowych. Z uprawnieniami SEP i UDT.',
    primary: 'Napisz na WhatsApp',
    secondary: 'Zadzwoń',
    badges: ['Uprawnienia SEP', 'Uprawnienia UDT', 'Poznań i okolice'],
    card: { title: 'Bezpłatna wycena', text: 'Opisz zlecenie — odpowiemy zwykle tego samego dnia.' },
  },

  services: {
    eyebrow: 'Usługi',
    title: 'Pełen zakres prac elektrycznych i niskoprądowych',
    lead: 'Od jednego gniazdka po kompletną instalację w nowym budynku — z jednym wykonawcą, bez szukania kilku ekip.',
    ask: 'Zapytaj o wycenę',
    items: {
      electrical: {
        name: 'Instalacje elektryczne',
        text: 'Nowe instalacje i modernizacje w domach, mieszkaniach i lokalach usługowych.',
        points: ['Rozdzielnice i zabezpieczenia', 'Gniazda, oświetlenie, siła 400 V', 'Wymiana starej instalacji'],
      },
      lowvoltage: {
        name: 'Instalacje słaboprądowe',
        text: 'Okablowanie strukturalne i systemy niskoprądowe dla domu i biura.',
        points: ['Sieci LAN i Wi-Fi, szafy rack', 'Domofony i wideodomofony', 'Instalacje RTV / SAT'],
      },
      cctv: {
        name: 'Monitoring CCTV',
        text: 'Kamery IP i analogowe HD z podglądem na telefonie — dla domów i firm.',
        points: ['Dobór i montaż kamer', 'Rejestratory NVR/DVR, dyski', 'Zdalny podgląd i konfiguracja'],
      },
      alarm: {
        name: 'Systemy alarmowe',
        text: 'Systemy sygnalizacji włamania i napadu (SSWiN) z powiadamianiem.',
        points: ['Centrale, manipulatory, sygnalizatory', 'Powiadamianie GSM / aplikacja', 'Integracja z monitoringiem'],
      },
      sensors: {
        name: 'Czujniki i automatyka',
        text: 'Czujniki i elementy smart home, które reagują, zanim stanie się szkoda.',
        points: ['Czujki ruchu, otwarcia, zalania', 'Czujniki dymu i czadu', 'Sterowanie oświetleniem i smart home'],
      },
      measurements: {
        name: 'Pomiary i przeglądy',
        text: 'Pomiary elektryczne z protokołem — do odbioru, ubezpieczenia lub przeglądu okresowego.',
        points: ['Rezystancja izolacji, pętla zwarcia', 'Badanie wyłączników RCD', 'Protokoły pomiarowe'],
      },
    },
  },

  licenses: {
    eyebrow: 'Uprawnienia',
    title: 'Pracujemy zgodnie z przepisami',
    lead: 'Prace elektryczne wykonują osoby z aktualnymi świadectwami kwalifikacyjnymi. Po zakończeniu dostajesz dokumentację i protokoły.',
    items: [
      {
        code: 'SEP',
        title: 'Świadectwa kwalifikacyjne SEP',
        text: 'Uprawnienia w zakresie eksploatacji (E) i dozoru (D) urządzeń, instalacji i sieci elektroenergetycznych — montaż, konserwacja, naprawy i pomiary.',
      },
      {
        code: 'UDT',
        title: 'Uprawnienia UDT',
        text: 'Zaświadczenia kwalifikacyjne Urzędu Dozoru Technicznego — bezpieczna praca z urządzeniami podlegającymi dozorowi, m.in. przy montażu na wysokości.',
      },
    ],
    company: {
      title: 'Dane firmy',
      rows: [
        ['Nazwa', 'JARIZ Sp. z o.o.'],
        ['NIP', '7792596181'],
        ['KRS', '0001201042'],
        ['REGON', '543036397'],
        ['Kapitał zakładowy', '20 000 zł'],
      ],
      note: 'Spółka wpisana do Krajowego Rejestru Sądowego.',
    },
  },

  process: {
    eyebrow: 'Jak pracujemy',
    title: 'Od wiadomości do odbioru — w 4 krokach',
    steps: [
      { title: 'Kontakt', text: 'Napisz na WhatsApp, zadzwoń lub wyślij e-mail. Zdjęcia i plan budynku przyspieszą wycenę.' },
      { title: 'Wycena', text: 'Oglądamy obiekt lub wyceniamy zdalnie. Dostajesz konkretny zakres i koszt prac.' },
      { title: 'Montaż', text: 'Pracujemy czysto i w ustalonym terminie, z użyciem sprawdzonych materiałów.' },
      { title: 'Odbiór', text: 'Uruchamiamy system, szkolimy z obsługi i przekazujemy protokoły.' },
    ],
  },

  gallery: {
    eyebrow: 'Zakres prac',
    title: 'Rozdzielnice, sieci, kamery, automatyka',
    alts: {
      panel: 'Rozdzielnica elektryczna z zabezpieczeniami',
      cables: 'Okablowanie strukturalne — kable sieciowe',
      'camera-wall': 'Kamera monitoringu zamontowana na elewacji',
      breakers: 'Wyłączniki nadprądowe w rozdzielnicy',
      smartlock: 'Inteligentny zamek sterowany telefonem',
      hero: 'Elektryk podczas montażu instalacji',
    },
  },

  cta: {
    title: 'Masz projekt lub awarię?',
    text: 'Wyślij krótką wiadomość — doradzimy rozwiązanie i przygotujemy wycenę.',
    btn: 'Napisz na WhatsApp',
  },

  faq: {
    eyebrow: 'FAQ',
    title: 'Najczęstsze pytania',
    items: [
      {
        q: 'Na jakim terenie działacie?',
        a: 'Głównie w Poznaniu i okolicach (powiat poznański), a przy większych zleceniach — na terenie całej Wielkopolski.',
      },
      {
        q: 'Ile kosztuje wycena?',
        a: 'Wycena jest bezpłatna. Przy prostych pracach wystarczą zdjęcia przesłane przez WhatsApp, przy większych umawiamy się na oględziny.',
      },
      {
        q: 'Czy montujecie monitoring z podglądem w telefonie?',
        a: 'Tak. Konfigurujemy rejestrator i aplikację, tak aby obraz z kamer był dostępny na telefonie i komputerze z dowolnego miejsca.',
      },
      {
        q: 'Czy wystawiacie protokoły z pomiarów?',
        a: 'Tak. Po pomiarach elektrycznych otrzymujesz protokół podpisany przez osobę z uprawnieniami SEP — potrzebny m.in. do odbioru budynku i ubezpieczyciela.',
      },
      {
        q: 'Czy pracujecie dla firm?',
        a: 'Tak, wykonujemy prace dla klientów prywatnych, firm, wspólnot mieszkaniowych i jako podwykonawca dla firm budowlanych.',
      },
      {
        q: 'Czy można zintegrować alarm z kamerami i czujnikami?',
        a: 'Tak. Dobieramy urządzenia tak, aby alarm, monitoring i czujniki działały razem i wysyłały powiadomienia na telefon.',
      },
    ],
  },

  contact: {
    eyebrow: 'Kontakt',
    title: 'Opisz zlecenie — odpiszemy szybko',
    lead: 'Wypełnij formularz i wybierz, jak chcesz wysłać wiadomość: przez WhatsApp lub e-mail.',
    phone: 'Telefon / WhatsApp',
    email: 'E-mail',
    address: 'Siedziba',
    hours: 'Godziny pracy',
    hoursValue: 'pon.–pt. 8:00–18:00',
    area: 'Obszar działania',
    areaValue: 'Poznań i Wielkopolska',
    form: {
      name: 'Imię',
      phone: 'Telefon',
      service: 'Rodzaj prac',
      place: 'Miejscowość',
      message: 'Wiadomość',
      choose: 'Wybierz…',
      other: 'Inne',
      placeholders: {
        name: 'Jan',
        phone: '+48 …',
        place: 'np. Poznań, Suchy Las',
        message: 'Krótko opisz, co trzeba zrobić: rodzaj obiektu, metraż, termin…',
      },
      sendWa: 'Wyślij przez WhatsApp',
      sendMail: 'Wyślij e-mailem',
      note: 'Formularz nie zapisuje danych na serwerze — otworzy się WhatsApp lub program pocztowy z gotową wiadomością.',
      subject: 'Zapytanie ze strony — JARIZ',
      hello: 'Dzień dobry! Zapytanie ze strony JARIZ:',
    },
  },

  footer: {
    tagline: 'Instalacje elektryczne, słaboprądowe i systemy bezpieczeństwa.',
    rights: 'Wszelkie prawa zastrzeżone.',
    cookies: 'Ustawienia cookies',
    photos: 'Zdjęcia: Unsplash',
    top: 'Do góry',
  },

  wa: { label: 'Napisz na WhatsApp', hello: 'Dzień dobry! Mam pytanie do JARIZ: ' },

  cookies: {
    title: 'Pliki cookies',
    text: 'Używamy niezbędnych plików cookies, aby strona działała, i — za Twoją zgodą — analitycznych, by ją ulepszać.',
    acceptAll: 'Akceptuj wszystkie',
    rejectAll: 'Tylko niezbędne',
    settings: 'Ustawienia',
    dialogTitle: 'Ustawienia cookies',
    save: 'Zapisz wybór',
    close: 'Zamknij',
    always: 'Zawsze aktywne',
    categories: {
      necessary: { title: 'Niezbędne', text: 'Zapamiętują język strony i Twój wybór cookies.' },
      analytics: { title: 'Analityczne', text: 'Anonimowe statystyki odwiedzin.' },
      marketing: { title: 'Marketingowe', text: 'Dopasowanie reklam w mediach społecznościowych.' },
    },
  },
}
