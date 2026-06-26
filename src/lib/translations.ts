export type Language = "pl" | "en" | "de" | "es";

export const languages: Array<{ code: Language; label: string }> = [
  { code: "pl", label: "PL" },
  { code: "en", label: "EN" },
  { code: "de", label: "DE" },
  { code: "es", label: "ES" }
];

export const translations = {
  pl: {
    seo: {
      title: "Solverto — Gry, 3D, architektura realtime i interaktywne światy",
      description:
        "Solverto tworzy gry, assety 3D, modele inwestycji, levele, środowiska realtime, metaverse i interaktywne doświadczenia dla biznesu oraz gamedevu."
    },
    nav: {
      home: "Home",
      services: "Services",
      architecture: "Architecture",
      games: "Games",
      metaverse: "Metaverse",
      portfolio: "Portfolio",
      investors: "Investors",
      about: "About",
      contact: "Contact",
      cta: "Rozpocznij współpracę",
      open: "Otwórz menu",
      close: "Zamknij menu"
    },
    hero: {
      eyebrow: "Solverto Group · games · 3D · realtime",
      title: "Gry, 3D i interaktywne światy realtime",
      subtitle:
        "Solverto tworzy produkcyjne assety 3D, levele, modele inwestycji, środowiska realtime, prototypy gier i interaktywne doświadczenia dla gamedevu, architektury i biznesu.",
      primary: "Rozpocznij współpracę",
      secondary: "Zobacz portfolio",
      trust:
        "Doświadczenie w grach, architekturze realtime, metaverse, Unity, Unreal i produkcji 3D."
    },
    stats: [
      "30+ real estate / architecture references",
      "Multiple game levels delivered",
      "Metaverse spaces, mazes and interactive levels",
      "Unity / Unreal / 3D / realtime production",
      "International references: Poland, Austria, Canada, Italy, UAE"
    ],
    sections: {
      overviewEyebrow: "Production house",
      overviewTitle: "Studio łączące art, technologię i pipeline produkcyjny.",
      overviewText:
        "Solverto nie pozycjonuje się jako pojedynczy freelancer. To rozwijająca się grupa produkcyjna budująca doświadczenie na styku gamedevu, modelowania 3D, architektury realtime, metaverse i interaktywnych technologii B2B.",
      servicesEyebrow: "Usługi",
      servicesTitle: "Od assetu do gotowego świata realtime.",
      servicesIntro:
        "Łączymy artystyczną jakość, techniczne podejście i praktyczne doświadczenie produkcyjne. Pomagamy klientom przechodzić od koncepcji do gotowego modelu, poziomu, prototypu albo interaktywnej prezentacji.",
      featuredEyebrow: "Selected work",
      featuredTitle: "Wybrane projekty i obszary doświadczenia.",
      largestEyebrow: "Architecture",
      largestTitle: "Największe inwestycje",
      architectureEyebrow: "Architecture & real estate 3D",
      architectureTitle: "Modelowanie inwestycji, PZT/PTT i produkcja dużych założeń.",
      architectureIntro:
        "W obszarze architektury i inwestycji mieszkaniowych Solverto ma doświadczenie w modelowaniu projektów, przygotowaniu PZT/PTT, poprawkach produkcyjnych, analizie modeli i pracy z dużymi założeniami urbanistycznymi.",
      gamesEyebrow: "Solverto Games",
      gamesTitle: "Levele, środowiska, prototypy i własne IP.",
      gamesIntro:
        "W gamedevie pracowaliśmy przy levelach, środowiskach, prototypach, elementach gameplayu i modelach 3D dla gier oraz projektów interaktywnych.",
      metaverseEyebrow: "Metaverse",
      metaverseTitle: "Cyfrowe światy, event roomy, avatary i interaktywne levele.",
      metaverseIntro:
        "Solverto współtworzyło wiele przestrzeni metaverse, maze’ów, leveli, event roomów, avatarów, animacji i modeli 3D dla cyfrowych światów.",
      metaverseNote:
        "Modele 3D były tworzone lub współtworzone dla wielu wymienionych projektów metaverse, leveli i doświadczeń interaktywnych.",
      portfolioEyebrow: "Portfolio",
      portfolioTitle: "Referencje projektowe z filtrowaniem.",
      portfolioIntro:
        "Przegląd projektów architektonicznych, gamedevowych, metaverse, analiz i wsparcia produkcyjnego.",
      investorsEyebrow: "Investors / Partners",
      aboutEyebrow: "About",
      aboutTitle: "Solverto Studio, Solverto Games i ekosystem Solverto Group.",
      aboutText:
        "Solverto rozwija własne zaplecze usługowe i kreatywne: od modeli 3D, leveli i środowisk realtime po własne gry, prototypy oraz potencjał IP. Ekosystem łączy usługi cashflow z długoterminową strategią produkcyjną.",
      cooperationEyebrow: "Cooperation",
      contactEyebrow: "Contact"
    },
    services: [
      {
        title: "Game Art & 3D Production",
        text: "Modele 3D, assety, środowiska, propsy, optymalizacja i przygotowanie produkcyjne."
      },
      {
        title: "Architecture & Real Estate 3D",
        text: "Modelowanie inwestycji, PZT/PTT, osiedla mieszkaniowe, poprawki modeli i analiza."
      },
      {
        title: "Game Development & Prototypes",
        text: "Levele, prototypy, systemy gameplayu, środowiska i wsparcie produkcji gier."
      },
      {
        title: "Realtime / VR / AR / Metaverse",
        text: "Interaktywne światy, aplikacje realtime, przestrzenie metaverse, VR/AR i doświadczenia cyfrowe."
      },
      {
        title: "Animation & Interactive Content",
        text: "Animacje, prezentacje, event roomy, avatary, ruch postaci i treści interaktywne."
      }
    ],
    largest: {
      title: "Largest real estate references",
      disclaimer:
        "Skale projektów są opisem orientacyjnym na podstawie zakresu referencyjnego i powinny być traktowane jako prezentacja doświadczenia produkcyjnego."
    },
    investor: {
      title: "Partnerstwo, publishing i inwestycje",
      text:
        "Solverto Group buduje ekosystem oparty na sprawdzonym zapleczu produkcyjnym: usługach 3D, doświadczeniu gamedevowym, projektach realtime, metaverse oraz własnych grach. Interesują nas rozmowy z publisherami, inwestorami, partnerami technologicznymi i firmami szukającymi długoterminowej współpracy produkcyjnej.",
      points: [
        "Usługi 3D jako aktualny fundament cashflow",
        "Własne gry jako potencjał IP",
        "Realtime i VR/AR jako obszar skalowania",
        "Powtarzalny pipeline produkcyjny",
        "Możliwość rozwoju asset store, edukacji i narzędzi"
      ],
      cta: "Porozmawiajmy o partnerstwie"
    },
    cooperation: {
      title: "Jak wygląda współpraca",
      text:
        "Zaczynamy od briefu i zrozumienia celu projektu. Następnie przygotowujemy zakres, estymację i plan produkcji. Przy większych projektach rekomendujemy etap sample/pilot, który pozwala szybko potwierdzić styl, pipeline i jakość. Produkcja przebiega iteracyjnie, z regularnymi przeglądami, feedbackiem i finalnym przekazaniem plików lub wdrożeniem.",
      steps: [
        ["Brief & NDA", "Zbieramy brief, materiały referencyjne, cele biznesowe i wymagania techniczne."],
        ["Scope & estimate", "Przygotowujemy zakres, harmonogram, estymację i plan produkcji."],
        ["Sample / pilot", "Dla większych projektów tworzymy próbkę, aby potwierdzić styl i pipeline."],
        ["Production", "Produkujemy assety, modele, levele, animacje lub elementy interaktywne."],
        ["Review & iteration", "Pracujemy iteracyjnie, wdrażając feedback i kontrolując jakość."],
        ["Delivery & support", "Przekazujemy pliki, wdrożenie lub paczkę produkcyjną oraz oferujemy dalsze wsparcie."]
      ]
    },
    portfolio: {
      search: "Szukaj po projekcie, kliencie, kraju lub tagu",
      all: "All",
      count: "projektów",
      empty: "Brak projektów dla wybranych kryteriów.",
      filters: {
        architecture: "Architecture",
        gamedev: "GameDev",
        metaverse: "Metaverse",
        analysis: "Analysis",
        support: "Support",
        austria: "Austria",
        canada: "Canada",
        uae: "UAE",
        largest: "Largest Projects"
      },
      legal:
        "Wybrane referencje projektowe obejmują prace realizowane bezpośrednio lub we współpracy z partnerami produkcyjnymi i zespołami branżowymi."
    },
    contact: {
      title: "Masz projekt, inwestycję, grę lub interaktywną prezentację do zrealizowania? Napisz do nas.",
      intro:
        "Formularz działa jako bezpieczny mock submit. Kod jest przygotowany tak, aby łatwo podłączyć endpoint API w przyszłości.",
      name: "Imię i nazwisko",
      company: "Firma",
      email: "Email",
      projectType: "Typ zapytania",
      budgetRange: "Budżet opcjonalnie",
      deadline: "Deadline opcjonalnie",
      message: "Wiadomość",
      preferredLanguage: "Preferowany język",
      submit: "Wyślij zapytanie",
      success: "Dziękujemy, skontaktujemy się wkrótce.",
      projectTypes: [
        "3D production",
        "Architecture / real estate",
        "Game development",
        "Realtime / VR / AR",
        "Metaverse",
        "Animation",
        "Publishing / investment / partnership",
        "Other"
      ]
    },
    footer: {
      description:
        "Solverto Group łączy gry, 3D, realtime, architekturę, metaverse i interaktywne technologie produkcyjne.",
      ecosystem: "Solverto Group ecosystem",
      legal:
        "Selected project references may include work delivered in cooperation with partner studios, production teams or external clients."
    }
  },
  en: {
    seo: {
      title: "Solverto — Games, 3D, realtime architecture and interactive worlds",
      description:
        "Solverto creates games, 3D assets, real estate models, levels, realtime environments, metaverse spaces and interactive experiences for business and game development."
    },
    nav: {
      home: "Home",
      services: "Services",
      architecture: "Architecture",
      games: "Games",
      metaverse: "Metaverse",
      portfolio: "Portfolio",
      investors: "Investors",
      about: "About",
      contact: "Contact",
      cta: "Start cooperation",
      open: "Open menu",
      close: "Close menu"
    },
    hero: {
      eyebrow: "Solverto Group · games · 3D · realtime",
      title: "Games, 3D and realtime interactive worlds",
      subtitle:
        "Solverto creates production-ready 3D assets, levels, real estate models, realtime environments, game prototypes and interactive experiences for game development, architecture and business.",
      primary: "Start cooperation",
      secondary: "View portfolio",
      trust:
        "Experience across games, realtime architecture, metaverse, Unity, Unreal and 3D production."
    },
    stats: [
      "30+ real estate / architecture references",
      "Multiple game levels delivered",
      "Metaverse spaces, mazes and interactive levels",
      "Unity / Unreal / 3D / realtime production",
      "International references: Poland, Austria, Canada, Italy, UAE"
    ],
    sections: {
      overviewEyebrow: "Production house",
      overviewTitle: "A studio combining art, technology and a production pipeline.",
      overviewText:
        "Solverto is not positioned as a single freelancer. It is a growing production group building experience across game development, 3D modeling, realtime architecture, metaverse and interactive B2B technologies.",
      servicesEyebrow: "Services",
      servicesTitle: "From assets to finished realtime worlds.",
      servicesIntro:
        "We combine artistic quality, technical thinking and real production experience. We help clients move from concept to a finished model, level, prototype or interactive presentation.",
      featuredEyebrow: "Selected work",
      featuredTitle: "Selected projects and experience areas.",
      largestEyebrow: "Architecture",
      largestTitle: "Largest real estate references",
      architectureEyebrow: "Architecture & real estate 3D",
      architectureTitle: "Investment modeling, PZT/PTT and large-scale production.",
      architectureIntro:
        "In architecture and real estate, Solverto has experience in investment modeling, PZT/PTT preparation, production fixes, model analysis and large-scale residential development work.",
      gamesEyebrow: "Solverto Games",
      gamesTitle: "Levels, environments, prototypes and original IP.",
      gamesIntro:
        "In game development, we have worked on levels, environments, prototypes, gameplay elements and 3D models for games and interactive projects.",
      metaverseEyebrow: "Metaverse",
      metaverseTitle: "Digital worlds, event rooms, avatars and interactive levels.",
      metaverseIntro:
        "Solverto has contributed to metaverse spaces, mazes, levels, event rooms, avatars, animations and 3D models for digital worlds.",
      metaverseNote:
        "3D models were created or co-created for many of the listed metaverse projects, levels and interactive experiences.",
      portfolioEyebrow: "Portfolio",
      portfolioTitle: "Project references with filtering.",
      portfolioIntro:
        "A review of architecture, gamedev, metaverse, analysis and production support work.",
      investorsEyebrow: "Investors / Partners",
      aboutEyebrow: "About",
      aboutTitle: "Solverto Studio, Solverto Games and the Solverto Group ecosystem.",
      aboutText:
        "Solverto develops its service and creative base: from 3D models, levels and realtime environments to original games, prototypes and IP potential. The ecosystem combines service cashflow with a long-term production strategy.",
      cooperationEyebrow: "Cooperation",
      contactEyebrow: "Contact"
    },
    services: [
      {
        title: "Game Art & 3D Production",
        text: "3D models, assets, environments, props, optimization and production-ready delivery."
      },
      {
        title: "Architecture & Real Estate 3D",
        text: "Investment modeling, PZT/PTT, residential developments, model fixes and analysis."
      },
      {
        title: "Game Development & Prototypes",
        text: "Levels, prototypes, gameplay systems, environments and game production support."
      },
      {
        title: "Realtime / VR / AR / Metaverse",
        text: "Interactive worlds, realtime applications, metaverse spaces, VR/AR and digital experiences."
      },
      {
        title: "Animation & Interactive Content",
        text: "Animations, presentations, event rooms, avatars, character motion and interactive content."
      }
    ],
    largest: {
      title: "Largest real estate references",
      disclaimer:
        "Project scale descriptions are indicative and based on reference scope; they should be treated as a presentation of production experience."
    },
    investor: {
      title: "Partnership, publishing and investment",
      text:
        "Solverto Group is building an ecosystem based on a proven production foundation: 3D services, game development experience, realtime projects, metaverse work and original games. We are open to conversations with publishers, investors, technology partners and companies looking for long-term production cooperation.",
      points: [
        "3D services as the current cashflow foundation",
        "Original games as IP potential",
        "Realtime and VR/AR as a scaling area",
        "Repeatable production pipeline",
        "Potential for asset store, education and tools"
      ],
      cta: "Talk about partnership"
    },
    cooperation: {
      title: "How cooperation works",
      text:
        "We start with a brief and a clear understanding of the project goal. Then we prepare the scope, estimate and production plan. For larger projects, we recommend a sample or pilot stage to quickly validate style, pipeline and quality. Production runs iteratively, with regular reviews, feedback and final delivery or implementation.",
      steps: [
        ["Brief & NDA", "We collect the brief, references, business goals and technical requirements."],
        ["Scope & estimate", "We prepare the scope, timeline, estimate and production plan."],
        ["Sample / pilot", "For larger projects, we create a sample to validate style and pipeline."],
        ["Production", "We produce assets, models, levels, animations or interactive elements."],
        ["Review & iteration", "We work iteratively, implementing feedback and controlling quality."],
        ["Delivery & support", "We deliver files, implementation or a production package and provide further support."]
      ]
    },
    portfolio: {
      search: "Search by project, client, country or tag",
      all: "All",
      count: "projects",
      empty: "No projects match the selected criteria.",
      filters: {
        architecture: "Architecture",
        gamedev: "GameDev",
        metaverse: "Metaverse",
        analysis: "Analysis",
        support: "Support",
        austria: "Austria",
        canada: "Canada",
        uae: "UAE",
        largest: "Largest Projects"
      },
      legal:
        "Project references include work delivered directly or in cooperation with partner studios and production teams."
    },
    contact: {
      title: "Have a project, investment, game or interactive presentation to build? Contact us.",
      intro:
        "The form uses a safe mock submit. The code is prepared so an API endpoint can be connected later.",
      name: "Name",
      company: "Company",
      email: "Email",
      projectType: "Project type",
      budgetRange: "Budget range optional",
      deadline: "Deadline optional",
      message: "Message",
      preferredLanguage: "Preferred language",
      submit: "Send inquiry",
      success: "Thank you, we will contact you soon.",
      projectTypes: [
        "3D production",
        "Architecture / real estate",
        "Game development",
        "Realtime / VR / AR",
        "Metaverse",
        "Animation",
        "Publishing / investment / partnership",
        "Other"
      ]
    },
    footer: {
      description:
        "Solverto Group connects games, 3D, realtime, architecture, metaverse and interactive production technology.",
      ecosystem: "Solverto Group ecosystem",
      legal:
        "Selected project references may include work delivered in cooperation with partner studios, production teams or external clients."
    }
  },
  de: {
    seo: {
      title: "Solverto — Games, 3D, Realtime-Architektur und interaktive Welten",
      description:
        "Solverto erstellt Spiele, 3D-Assets, Immobilienmodelle, Levels, Realtime-Umgebungen, Metaverse-Räume und interaktive Erlebnisse für Business und Game Development."
    },
    nav: {
      home: "Home",
      services: "Services",
      architecture: "Architecture",
      games: "Games",
      metaverse: "Metaverse",
      portfolio: "Portfolio",
      investors: "Investors",
      about: "About",
      contact: "Contact",
      cta: "Zusammenarbeit starten",
      open: "Menü öffnen",
      close: "Menü schließen"
    },
    hero: {
      eyebrow: "Solverto Group · games · 3D · realtime",
      title: "Games, 3D und interaktive Realtime-Welten",
      subtitle:
        "Solverto erstellt produktionsreife 3D-Assets, Levels, Immobilienmodelle, Realtime-Umgebungen, Spielprototypen und interaktive Erlebnisse für Game Development, Architektur und Business.",
      primary: "Zusammenarbeit starten",
      secondary: "Portfolio ansehen",
      trust:
        "Erfahrung in Games, Realtime-Architektur, Metaverse, Unity, Unreal und 3D-Produktion."
    },
    stats: [
      "30+ Real-Estate- und Architekturreferenzen",
      "Mehrere Game-Level geliefert",
      "Metaverse-Räume, Mazes und interaktive Levels",
      "Unity / Unreal / 3D / Realtime-Produktion",
      "Internationale Referenzen: Polen, Österreich, Kanada, Italien, VAE"
    ],
    sections: {
      overviewEyebrow: "Production house",
      overviewTitle: "Ein Studio für Art, Technologie und Produktionspipeline.",
      overviewText:
        "Solverto ist kein einzelner Freelancer. Es ist eine wachsende Produktionsgruppe mit Erfahrung in Game Development, 3D-Modellierung, Realtime-Architektur, Metaverse und interaktiven B2B-Technologien.",
      servicesEyebrow: "Services",
      servicesTitle: "Vom Asset zur fertigen Realtime-Welt.",
      servicesIntro:
        "Wir verbinden künstlerische Qualität, technisches Denken und echte Produktionserfahrung. Wir helfen Kunden, von der Idee zu einem fertigen Modell, Level, Prototyp oder einer interaktiven Präsentation zu gelangen.",
      featuredEyebrow: "Selected work",
      featuredTitle: "Ausgewählte Projekte und Erfahrungsbereiche.",
      largestEyebrow: "Architecture",
      largestTitle: "Größte Immobilienreferenzen",
      architectureEyebrow: "Architecture & real estate 3D",
      architectureTitle: "Investitionsmodellierung, PZT/PTT und große Produktionsumfänge.",
      architectureIntro:
        "Im Bereich Architektur und Immobilien verfügt Solverto über Erfahrung in der Modellierung von Investitionsprojekten, PZT/PTT-Vorbereitung, Produktionskorrekturen, Modellanalyse und großen Wohnbauprojekten.",
      gamesEyebrow: "Solverto Games",
      gamesTitle: "Levels, Umgebungen, Prototypen und eigene IP.",
      gamesIntro:
        "Im Game Development haben wir an Levels, Umgebungen, Prototypen, Gameplay-Elementen und 3D-Modellen für Spiele und interaktive Projekte gearbeitet.",
      metaverseEyebrow: "Metaverse",
      metaverseTitle: "Digitale Welten, Event-Rooms, Avatare und interaktive Levels.",
      metaverseIntro:
        "Solverto hat an Metaverse-Räumen, Mazes, Levels, Event-Rooms, Avataren, Animationen und 3D-Modellen für digitale Welten mitgewirkt.",
      metaverseNote:
        "3D-Modelle wurden für viele der genannten Metaverse-Projekte, Levels und interaktiven Erlebnisse erstellt oder mitentwickelt.",
      portfolioEyebrow: "Portfolio",
      portfolioTitle: "Projekt-Referenzen mit Filtern.",
      portfolioIntro:
        "Ein Überblick über Architektur-, GameDev-, Metaverse-, Analyse- und Produktionssupport-Projekte.",
      investorsEyebrow: "Investors / Partners",
      aboutEyebrow: "About",
      aboutTitle: "Solverto Studio, Solverto Games und das Solverto Group Ökosystem.",
      aboutText:
        "Solverto entwickelt seine Service- und Kreativbasis: von 3D-Modellen, Levels und Realtime-Umgebungen bis zu eigenen Spielen, Prototypen und IP-Potenzial. Das Ökosystem verbindet Service-Cashflow mit einer langfristigen Produktionsstrategie.",
      cooperationEyebrow: "Cooperation",
      contactEyebrow: "Contact"
    },
    services: [
      { title: "Game Art & 3D Production", text: "3D-Modelle, Assets, Umgebungen, Props, Optimierung und produktionsreife Lieferung." },
      { title: "Architecture & Real Estate 3D", text: "Investitionsmodellierung, PZT/PTT, Wohnanlagen, Modellkorrekturen und Analyse." },
      { title: "Game Development & Prototypes", text: "Levels, Prototypen, Gameplay-Systeme, Umgebungen und Unterstützung in der Spieleproduktion." },
      { title: "Realtime / VR / AR / Metaverse", text: "Interaktive Welten, Realtime-Anwendungen, Metaverse-Räume, VR/AR und digitale Erlebnisse." },
      { title: "Animation & Interactive Content", text: "Animationen, Präsentationen, Event-Rooms, Avatare, Charakterbewegung und interaktive Inhalte." }
    ],
    largest: {
      title: "Größte Immobilienreferenzen",
      disclaimer:
        "Die Projektgrößen sind indikativ und basieren auf dem Referenzumfang; sie dienen als Darstellung der Produktionserfahrung."
    },
    investor: {
      title: "Partnerschaft, Publishing und Investment",
      text:
        "Solverto Group baut ein Ökosystem auf einer bewährten Produktionsbasis auf: 3D-Services, Game-Development-Erfahrung, Realtime-Projekte, Metaverse-Arbeit und eigene Spiele. Wir sind offen für Gespräche mit Publishern, Investoren, Technologiepartnern und Unternehmen, die langfristige Produktionskooperation suchen.",
      points: [
        "3D-Services als aktuelle Cashflow-Basis",
        "Eigene Spiele als IP-Potenzial",
        "Realtime und VR/AR als Skalierungsbereich",
        "Wiederholbare Produktionspipeline",
        "Potenzial für Asset Store, Bildung und Tools"
      ],
      cta: "Über Partnerschaft sprechen"
    },
    cooperation: {
      title: "So funktioniert die Zusammenarbeit",
      text:
        "Wir beginnen mit einem Briefing und einem klaren Verständnis des Projektziels. Danach erstellen wir Umfang, Schätzung und Produktionsplan. Bei größeren Projekten empfehlen wir eine Sample- oder Pilotphase, um Stil, Pipeline und Qualität schnell zu validieren. Die Produktion läuft iterativ mit regelmäßigen Reviews, Feedback und finaler Übergabe oder Implementierung.",
      steps: [
        ["Brief & NDA", "Wir sammeln Briefing, Referenzen, Geschäftsziele und technische Anforderungen."],
        ["Scope & estimate", "Wir erstellen Umfang, Zeitplan, Schätzung und Produktionsplan."],
        ["Sample / pilot", "Bei größeren Projekten erstellen wir ein Sample, um Stil und Pipeline zu validieren."],
        ["Production", "Wir produzieren Assets, Modelle, Levels, Animationen oder interaktive Elemente."],
        ["Review & iteration", "Wir arbeiten iterativ, setzen Feedback um und kontrollieren die Qualität."],
        ["Delivery & support", "Wir liefern Dateien, Implementierung oder Produktionspaket und bieten weiteren Support."]
      ]
    },
    portfolio: {
      search: "Nach Projekt, Kunde, Land oder Tag suchen",
      all: "Alle",
      count: "Projekte",
      empty: "Keine Projekte für die ausgewählten Kriterien.",
      filters: {
        architecture: "Architecture",
        gamedev: "GameDev",
        metaverse: "Metaverse",
        analysis: "Analysis",
        support: "Support",
        austria: "Austria",
        canada: "Canada",
        uae: "UAE",
        largest: "Largest Projects"
      },
      legal:
        "Projekt-Referenzen umfassen Arbeiten, die direkt oder in Zusammenarbeit mit Partnerstudios und Produktionsteams geliefert wurden."
    },
    contact: {
      title: "Haben Sie ein Projekt, eine Investition, ein Spiel oder eine interaktive Präsentation zu realisieren? Kontaktieren Sie uns.",
      intro:
        "Das Formular nutzt einen sicheren Mock Submit. Der Code ist vorbereitet, damit später ein API-Endpunkt angeschlossen werden kann.",
      name: "Name",
      company: "Firma",
      email: "Email",
      projectType: "Projekttyp",
      budgetRange: "Budget optional",
      deadline: "Deadline optional",
      message: "Nachricht",
      preferredLanguage: "Bevorzugte Sprache",
      submit: "Anfrage senden",
      success: "Danke, wir melden uns in Kürze.",
      projectTypes: [
        "3D production",
        "Architecture / real estate",
        "Game development",
        "Realtime / VR / AR",
        "Metaverse",
        "Animation",
        "Publishing / investment / partnership",
        "Other"
      ]
    },
    footer: {
      description:
        "Solverto Group verbindet Games, 3D, Realtime, Architektur, Metaverse und interaktive Produktionstechnologie.",
      ecosystem: "Solverto Group ecosystem",
      legal:
        "Selected project references may include work delivered in cooperation with partner studios, production teams or external clients."
    }
  },
  es: {
    seo: {
      title: "Solverto — Juegos, 3D, arquitectura realtime y mundos interactivos",
      description:
        "Solverto crea juegos, assets 3D, modelos inmobiliarios, niveles, entornos realtime, espacios metaverse y experiencias interactivas para negocio y videojuegos."
    },
    nav: {
      home: "Home",
      services: "Services",
      architecture: "Architecture",
      games: "Games",
      metaverse: "Metaverse",
      portfolio: "Portfolio",
      investors: "Investors",
      about: "About",
      contact: "Contact",
      cta: "Iniciar colaboración",
      open: "Abrir menú",
      close: "Cerrar menú"
    },
    hero: {
      eyebrow: "Solverto Group · games · 3D · realtime",
      title: "Juegos, 3D y mundos interactivos en tiempo real",
      subtitle:
        "Solverto crea assets 3D listos para producción, niveles, modelos inmobiliarios, entornos realtime, prototipos de juegos y experiencias interactivas para videojuegos, arquitectura y negocio.",
      primary: "Iniciar colaboración",
      secondary: "Ver portfolio",
      trust:
        "Experiencia en videojuegos, arquitectura realtime, metaverse, Unity, Unreal y producción 3D."
    },
    stats: [
      "30+ referencias inmobiliarias / arquitectura",
      "Múltiples niveles de juegos entregados",
      "Espacios metaverse, mazes y niveles interactivos",
      "Unity / Unreal / 3D / producción realtime",
      "Referencias internacionales: Polonia, Austria, Canadá, Italia, EAU"
    ],
    sections: {
      overviewEyebrow: "Production house",
      overviewTitle: "Un estudio que combina arte, tecnología y pipeline de producción.",
      overviewText:
        "Solverto no se posiciona como un freelancer individual. Es un grupo de producción en crecimiento con experiencia en game development, modelado 3D, arquitectura realtime, metaverse y tecnologías interactivas B2B.",
      servicesEyebrow: "Services",
      servicesTitle: "Del asset al mundo realtime terminado.",
      servicesIntro:
        "Combinamos calidad artística, pensamiento técnico y experiencia real de producción. Ayudamos a los clientes a pasar de una idea a un modelo, nivel, prototipo o presentación interactiva terminada.",
      featuredEyebrow: "Selected work",
      featuredTitle: "Proyectos seleccionados y áreas de experiencia.",
      largestEyebrow: "Architecture",
      largestTitle: "Mayores referencias inmobiliarias",
      architectureEyebrow: "Architecture & real estate 3D",
      architectureTitle: "Modelado de inversiones, PZT/PTT y producción a gran escala.",
      architectureIntro:
        "En arquitectura e inmobiliaria, Solverto tiene experiencia en modelado de inversiones, preparación PZT/PTT, correcciones de producción, análisis de modelos y grandes proyectos residenciales.",
      gamesEyebrow: "Solverto Games",
      gamesTitle: "Niveles, entornos, prototipos e IP propia.",
      gamesIntro:
        "En game development hemos trabajado en niveles, entornos, prototipos, elementos de gameplay y modelos 3D para juegos y proyectos interactivos.",
      metaverseEyebrow: "Metaverse",
      metaverseTitle: "Mundos digitales, salas de eventos, avatares y niveles interactivos.",
      metaverseIntro:
        "Solverto ha contribuido a espacios metaverse, mazes, niveles, salas de eventos, avatares, animaciones y modelos 3D para mundos digitales.",
      metaverseNote:
        "Los modelos 3D fueron creados o co-creados para muchos de los proyectos metaverse, niveles y experiencias interactivas listados.",
      portfolioEyebrow: "Portfolio",
      portfolioTitle: "Referencias de proyectos con filtros.",
      portfolioIntro:
        "Revisión de trabajos de arquitectura, gamedev, metaverse, análisis y soporte de producción.",
      investorsEyebrow: "Investors / Partners",
      aboutEyebrow: "About",
      aboutTitle: "Solverto Studio, Solverto Games y el ecosistema Solverto Group.",
      aboutText:
        "Solverto desarrolla su base de servicios y creatividad: desde modelos 3D, niveles y entornos realtime hasta juegos propios, prototipos y potencial IP. El ecosistema combina cashflow de servicios con una estrategia de producción a largo plazo.",
      cooperationEyebrow: "Cooperation",
      contactEyebrow: "Contact"
    },
    services: [
      { title: "Game Art & 3D Production", text: "Modelos 3D, assets, entornos, props, optimización y entrega lista para producción." },
      { title: "Architecture & Real Estate 3D", text: "Modelado de inversiones, PZT/PTT, desarrollos residenciales, correcciones y análisis de modelos." },
      { title: "Game Development & Prototypes", text: "Niveles, prototipos, sistemas de gameplay, entornos y soporte para producción de videojuegos." },
      { title: "Realtime / VR / AR / Metaverse", text: "Mundos interactivos, aplicaciones realtime, espacios metaverse, VR/AR y experiencias digitales." },
      { title: "Animation & Interactive Content", text: "Animaciones, presentaciones, salas de eventos, avatares, movimiento de personajes y contenido interactivo." }
    ],
    largest: {
      title: "Mayores referencias inmobiliarias",
      disclaimer:
        "Las descripciones de escala son indicativas y se basan en el alcance de referencia; deben tratarse como presentación de experiencia de producción."
    },
    investor: {
      title: "Colaboración, publishing e inversión",
      text:
        "Solverto Group está construyendo un ecosistema basado en una base de producción probada: servicios 3D, experiencia en videojuegos, proyectos realtime, trabajo metaverse y juegos propios. Estamos abiertos a conversaciones con publishers, inversores, socios tecnológicos y empresas que buscan colaboración de producción a largo plazo.",
      points: [
        "Servicios 3D como base actual de cashflow",
        "Juegos propios como potencial IP",
        "Realtime y VR/AR como área de escalado",
        "Pipeline de producción repetible",
        "Potencial para asset store, educación y herramientas"
      ],
      cta: "Hablar sobre colaboración"
    },
    cooperation: {
      title: "Cómo funciona la colaboración",
      text:
        "Empezamos con un brief y una comprensión clara del objetivo del proyecto. Luego preparamos el alcance, la estimación y el plan de producción. Para proyectos más grandes recomendamos una fase sample o piloto para validar rápidamente el estilo, pipeline y calidad. La producción avanza de forma iterativa, con revisiones periódicas, feedback y entrega final o implementación.",
      steps: [
        ["Brief & NDA", "Recopilamos el brief, referencias, objetivos de negocio y requisitos técnicos."],
        ["Scope & estimate", "Preparamos el alcance, cronograma, estimación y plan de producción."],
        ["Sample / pilot", "Para proyectos grandes creamos una muestra para validar estilo y pipeline."],
        ["Production", "Producimos assets, modelos, niveles, animaciones o elementos interactivos."],
        ["Review & iteration", "Trabajamos de forma iterativa, implementando feedback y controlando calidad."],
        ["Delivery & support", "Entregamos archivos, implementación o paquete de producción y ofrecemos soporte posterior."]
      ]
    },
    portfolio: {
      search: "Buscar por proyecto, cliente, país o tag",
      all: "Todo",
      count: "proyectos",
      empty: "No hay proyectos para los criterios seleccionados.",
      filters: {
        architecture: "Architecture",
        gamedev: "GameDev",
        metaverse: "Metaverse",
        analysis: "Analysis",
        support: "Support",
        austria: "Austria",
        canada: "Canada",
        uae: "UAE",
        largest: "Largest Projects"
      },
      legal:
        "Las referencias de proyectos incluyen trabajos entregados directamente o en cooperación con estudios socios y equipos de producción."
    },
    contact: {
      title: "¿Tienes un proyecto, inversión, juego o presentación interactiva para desarrollar? Contáctanos.",
      intro:
        "El formulario usa un mock submit seguro. El código está preparado para conectar un endpoint API en el futuro.",
      name: "Nombre",
      company: "Empresa",
      email: "Email",
      projectType: "Tipo de proyecto",
      budgetRange: "Presupuesto opcional",
      deadline: "Deadline opcional",
      message: "Mensaje",
      preferredLanguage: "Idioma preferido",
      submit: "Enviar consulta",
      success: "Gracias, nos pondremos en contacto pronto.",
      projectTypes: [
        "3D production",
        "Architecture / real estate",
        "Game development",
        "Realtime / VR / AR",
        "Metaverse",
        "Animation",
        "Publishing / investment / partnership",
        "Other"
      ]
    },
    footer: {
      description:
        "Solverto Group conecta juegos, 3D, realtime, arquitectura, metaverse y tecnología de producción interactiva.",
      ecosystem: "Solverto Group ecosystem",
      legal:
        "Selected project references may include work delivered in cooperation with partner studios, production teams or external clients."
    }
  }
} as const;

export type Translation = (typeof translations)[Language];
