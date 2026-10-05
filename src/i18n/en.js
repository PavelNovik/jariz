export default {
  name: 'English',
  label: 'EN',
  locale: 'en_GB',

  meta: {
    title: 'JARIZ — electrical installations, alarms & CCTV in Poznań',
    description:
      'JARIZ Sp. z o.o. — electrical and low-voltage installations, CCTV, alarm systems and sensors. SEP and UDT certified. Poznań and the Greater Poland region.',
  },

  nav: {
    skip: 'Skip to content',
    menu: 'Menu',
    close: 'Close menu',
    lang: 'Language',
    cta: 'Get a quote',
    items: { services: 'Services', licenses: 'Certificates', process: 'How we work', faq: 'FAQ', contact: 'Contact' },
  },

  hero: {
    eyebrow: 'Electrical · Low voltage · Security',
    title: ['Installations that ', 'simply work', '.'],
    lead: 'We design and install electrical systems, low-voltage networks, CCTV, alarms and sensors — in houses, flats, offices and commercial buildings. SEP and UDT certified.',
    primary: 'Message on WhatsApp',
    secondary: 'Call us',
    badges: ['SEP certified', 'UDT certified', 'Poznań & area'],
    card: { title: 'Free quote', text: 'Describe the job — we usually reply the same day.' },
  },

  services: {
    eyebrow: 'Services',
    title: 'Full range of electrical and low-voltage work',
    lead: 'From a single socket to a complete installation in a new building — one contractor instead of several crews.',
    ask: 'Ask for a quote',
    items: {
      electrical: {
        name: 'Electrical installations',
        text: 'New installations and upgrades in houses, flats and commercial premises.',
        points: ['Distribution boards & protection', 'Sockets, lighting, 400 V power', 'Rewiring old installations'],
      },
      lowvoltage: {
        name: 'Low-voltage systems',
        text: 'Structured cabling and low-voltage systems for home and office.',
        points: ['LAN & Wi-Fi, rack cabinets', 'Intercoms & video intercoms', 'TV / SAT installations'],
      },
      cctv: {
        name: 'CCTV monitoring',
        text: 'IP and HD analogue cameras with live view on your phone — for homes and businesses.',
        points: ['Camera selection & mounting', 'NVR/DVR recorders, storage', 'Remote view & setup'],
      },
      alarm: {
        name: 'Alarm systems',
        text: 'Intrusion and hold-up alarm systems with notifications.',
        points: ['Control panels, keypads, sirens', 'GSM / app notifications', 'Integration with CCTV'],
      },
      sensors: {
        name: 'Sensors & automation',
        text: 'Sensors and smart-home devices that react before damage is done.',
        points: ['Motion, door/window, flood sensors', 'Smoke & CO detectors', 'Lighting control & smart home'],
      },
      measurements: {
        name: 'Testing & inspections',
        text: 'Electrical testing with a certified report — for acceptance, insurance or periodic inspection.',
        points: ['Insulation resistance, loop impedance', 'RCD testing', 'Test reports'],
      },
    },
  },

  licenses: {
    eyebrow: 'Certificates',
    title: 'We work by the book',
    lead: 'Electrical work is carried out by people holding valid qualification certificates. When the job is done you receive documentation and test reports.',
    items: [
      {
        code: 'SEP',
        title: 'SEP qualification certificates',
        text: 'Polish certificates for operation (E) and supervision (D) of electrical equipment, installations and networks — installation, maintenance, repairs and testing.',
      },
      {
        code: 'UDT',
        title: 'UDT certificates',
        text: 'Office of Technical Inspection (UDT) qualifications — safe work with equipment subject to technical inspection, e.g. when installing at height.',
      },
    ],
    company: {
      title: 'Company details',
      rows: [
        ['Name', 'JARIZ Sp. z o.o.'],
        ['NIP (VAT ID)', '7792596181'],
        ['KRS', '0001201042'],
        ['REGON', '543036397'],
        ['Share capital', 'PLN 20,000'],
      ],
      note: 'Registered in the Polish National Court Register (KRS).',
    },
  },

  process: {
    eyebrow: 'How we work',
    title: 'From first message to handover — in 4 steps',
    steps: [
      { title: 'Contact', text: 'Message us on WhatsApp, call or email. Photos and a floor plan speed up the quote.' },
      { title: 'Quote', text: 'We visit the site or quote remotely. You get a clear scope and price.' },
      { title: 'Installation', text: 'Clean, on-schedule work using proven materials.' },
      { title: 'Handover', text: 'We start up the system, show you how to use it and hand over the reports.' },
    ],
  },

  gallery: {
    eyebrow: 'Scope of work',
    title: 'Switchboards, networks, cameras, automation',
    alts: {
      panel: 'Electrical distribution board with circuit protection',
      cables: 'Structured cabling — network cables',
      'camera-wall': 'Security camera mounted on a facade',
      breakers: 'Circuit breakers in a distribution board',
      smartlock: 'Smart lock controlled by phone',
      hero: 'Electrician installing wiring',
    },
  },

  cta: {
    title: 'Have a project or a fault?',
    text: 'Send a short message — we will suggest a solution and prepare a quote.',
    btn: 'Message on WhatsApp',
  },

  faq: {
    eyebrow: 'FAQ',
    title: 'Frequently asked questions',
    items: [
      {
        q: 'Which area do you cover?',
        a: 'Mainly Poznań and the surrounding county, and for larger projects — the whole Greater Poland region.',
      },
      {
        q: 'How much does a quote cost?',
        a: 'Quotes are free. For simple jobs, photos sent via WhatsApp are enough; for larger ones we arrange a site visit.',
      },
      {
        q: 'Do you install CCTV with phone access?',
        a: 'Yes. We configure the recorder and the app so you can view the cameras on your phone and computer from anywhere.',
      },
      {
        q: 'Do you issue electrical test reports?',
        a: 'Yes. After testing you receive a report signed by an SEP-certified person — required e.g. for building acceptance and insurance.',
      },
      {
        q: 'Do you work for businesses?',
        a: 'Yes — for private clients, companies, housing communities and as a subcontractor for construction firms.',
      },
      {
        q: 'Can the alarm work together with cameras and sensors?',
        a: 'Yes. We select devices so the alarm, CCTV and sensors work as one system and send notifications to your phone.',
      },
    ],
  },

  contact: {
    eyebrow: 'Contact',
    title: 'Describe the job — we reply fast',
    lead: 'Fill in the form and choose how to send it: via WhatsApp or email. We speak Polish and English.',
    phone: 'Phone / WhatsApp',
    email: 'Email',
    address: 'Registered office',
    hours: 'Working hours',
    hoursValue: 'Mon–Fri 8:00–18:00',
    area: 'Service area',
    areaValue: 'Poznań & Greater Poland',
    form: {
      name: 'Name',
      phone: 'Phone',
      service: 'Type of work',
      place: 'Location',
      message: 'Message',
      choose: 'Choose…',
      other: 'Other',
      placeholders: {
        name: 'John',
        phone: '+48 …',
        place: 'e.g. Poznań, Suchy Las',
        message: 'Briefly describe the job: type of property, size, timing…',
      },
      sendWa: 'Send via WhatsApp',
      sendMail: 'Send by email',
      note: 'The form does not store data on a server — WhatsApp or your email app opens with a ready message.',
      subject: 'Website enquiry — JARIZ',
      hello: 'Hello! Enquiry from the JARIZ website:',
    },
  },

  footer: {
    tagline: 'Electrical, low-voltage and security installations.',
    rights: 'All rights reserved.',
    cookies: 'Cookie settings',
    photos: 'Photos: Unsplash',
    top: 'Back to top',
  },

  wa: { label: 'Message on WhatsApp', hello: 'Hello! I have a question for JARIZ: ' },

  cookies: {
    title: 'Cookies',
    text: 'We use necessary cookies to make the site work and — with your consent — analytics cookies to improve it.',
    acceptAll: 'Accept all',
    rejectAll: 'Necessary only',
    settings: 'Settings',
    dialogTitle: 'Cookie settings',
    save: 'Save choice',
    close: 'Close',
    always: 'Always active',
    categories: {
      necessary: { title: 'Necessary', text: 'Remember the site language and your cookie choice.' },
      analytics: { title: 'Analytics', text: 'Anonymous visit statistics.' },
      marketing: { title: 'Marketing', text: 'Ad personalisation on social media.' },
    },
  },
}
