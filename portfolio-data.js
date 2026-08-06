(() => {
  const metaverseAssetFolders = {
    OmegaPro: "metaverse/digital-twin/omega-pro",
    "Hotel Five": "metaverse/digital-twin/hotel-five",
    Casino: "metaverse/digital-twin/casino",
    Passionpreneur: "metaverse/digital-twin/passionpreneur",
    "Cove Beach": "metaverse/digital-twin/cove-beach",
    "Metaverse Music Rooms": "metaverse/music-rooms/main-stage-room",
    "Rock Pub": "metaverse/music-rooms/rock-room",
    HipHop: "metaverse/music-rooms/hip-hop-room",
    EDM: "metaverse/music-rooms/edm-room",
    RnB: "metaverse/music-rooms/rnb-room",
    Metal: "metaverse/music-rooms/metal-room",
    Classic: "metaverse/music-rooms/classical-room",
    PulsePop: "metaverse/music-rooms/pulse-pop-room",
    "Ivory Coast": "metaverse/music-rooms/zouglou-room",
    Country: "metaverse/music-rooms/country-room",
    "Latino Party": "metaverse/music-rooms/latino-room",
    Kpop: "metaverse/music-rooms/kpop-room",
    MainStage: "metaverse/music-rooms/main-stage-room",
    Tunisia: "metaverse/music-rooms/tunisia-room",
    India: "metaverse/music-rooms/india-room",
    Entoto: "metaverse/music-rooms/entoto-room",
    CardsMaze: "metaverse/maze/cards-maze",
    "Secret Garden": "metaverse/maze/garden-maze",
    CheeseMaze: "metaverse/maze/cheese-maze",
    "Candy Land": "metaverse/maze/sugar-city-maze",
    Orange: "metaverse/maze/orange-maze",
    BackToSchoolMaze: "metaverse/maze/back-to-school-maze",
    Ooreedoo: "metaverse/maze/ooredoo-maze",
    AmusementPark: "metaverse/treasure-hunter/amusment-park",
    TunisiaRamadan: "metaverse/treasure-hunter/tunisia-ramadan",
    Fantasy: "metaverse/treasure-hunter/fantasy-islands",
    PirateIsland: "metaverse/treasure-hunter/pirate-island",
    MafEventDeira: "metaverse/treasure-hunter/deira-city-center",
    DesertCityOasis: "metaverse/treasure-hunter/desert-city",
    BouncingCastle: "metaverse/pulse-guys/bouncing-castle",
    ChocolateFactory: "metaverse/pulse-guys/chocolate-factory",
    DeathRun: "metaverse/pulse-guys/death-run",
    TheUnderworld: "metaverse/pulse-guys/the-underworld",
    TuttiFruity: "metaverse/pulse-guys/tutti-frutti",
    Heaven: "metaverse/pulse-guys/heaven",
    Candy: "metaverse/pulse-guys/candy",
    Temple: "metaverse/pulse-guys/temple",
    Halloween: "metaverse/pulse-guys/halloween",
    Space: "metaverse/pulse-guys/space",
    Underwater: "metaverse/pulse-guys/unterwater",
    Neon: "metaverse/pulse-guys/neon",
    Winter: "metaverse/pulse-guys/winter",
    Dynamite: "metaverse/pulse-guys/dynamite"
  };

  const gameAssetFolders = {
    "Bamboo House": "game-development/bamboo-house-house-builder",
    "Arabic House": "game-development/arabic-house-house-builder",
    "Tree House": "game-development/tree-house-house-builder",
    "African Metal House": "game-development/african-metal-house-house-builder",
    "Underwater House": "game-development/underwater-house-house-builder",
    "Aztec House": "game-development/aztec-house-house-builder",
    "Underwater Ruin": "game-development/underwater-ruin-aquarist",
    "Underwater Egyptian Ruin": "game-development/underwater-egyptian-ruin-aquarist",
    "Japanese Garden": "game-development/japanese-garden-aquarist",
    "OP Games": "game-development/OP-Games",
    SOGA: "game-development/SOGA",
    "Wild Rush": "game-development/wild-rush",
    "Wild Rush Turbo": "game-development/Wild-Rush-Turbo",
    "Naval Battle | Zombie Outbreak | Mech Mayhem": "game-development/NavalBattle-ZombieOutbreak-MechMayhem",
    "TrafficCashout | BeatEmUp | MetalSquad": "game-development/TrafficCashout-BeatEmUp-MetalSquad",
    "Medieval Machines Builder": "game-development/Medieval-Machines-Builder",
    "Painter Simulator": "game-development/Painter-Simulator",
    "Pulse Guys": "game-development/PulseGuys",
    "Treasure Hunter": "game-development/Treasure-Hunter",
    "House Builder": "game-development/House-Builder",
    Aquarist: "game-development/Aquarist"
  };

  const gameAssetExtensions = {
    "Medieval Machines Builder": "jpg",
    "Painter Simulator": "jpg",
    "Pulse Guys": "webp",
    "House Builder": "jpg",
    Aquarist: "jpg"
  };

  const gameAssetFiles = {
    "Treasure Hunter": ["gallery-01.webp", "gallery-02.webp", "gallery-03.webp", "gallery-04.jpg", "gallery-05.jpg", "gallery-06.jpg"]
  };

  const architectureAssetFolders = {
    "29L": "architecture/archicom-kraków-29L-YSLAB",
    "Zenit": "architecture/archicom-zenit-YSLAB",
    "Zenit Residential Estate": "architecture/archicom-zenit-YSLAB",
    Parkowa: "architecture/atal-parkowa-YSLAB",
    "Ryżowa": "architecture/dom-demelovment-osiedle-przy-ryzowej-YSLAB",
    "Anny German / Sady Żoliborz": "architecture/maxeti-sady-zoriborz-YSLAB",
    "Bertone Le Moden": "architecture/moden-bertone-YSLAB",
    Jeziorna: "architecture/murapol-siewierz-jeziorna-YSLAB",
    "Jeziorna Residential Masterplan": "architecture/murapol-siewierz-jeziorna-YSLAB"
  };

  const architectureAssetExtensions = {
    "29L": "avif",
    "Zenit": "avif",
    "Zenit Residential Estate": "avif",
    Parkowa: "avif",
    "Ryżowa": "webp",
    "Anny German / Sady Żoliborz": "avif",
    "Bertone Le Moden": "jpg",
    Jeziorna: "avif",
    "Jeziorna Residential Masterplan": "avif"
  };

  const architectureAssetFiles = {
    Zenit: ["gallery-01.avif", "gallery-02.avif", "gallery-03.avif", "gallery-04.avif", "gallery-05.jpg", "gallery-06.jpg"],
    "Zenit Residential Estate": ["gallery-01.avif", "gallery-02.avif", "gallery-03.avif", "gallery-04.avif", "gallery-05.jpg", "gallery-06.jpg"],
    Jeziorna: ["gallery-01.avif", "gallery-02.avif", "gallery-03.avif", "gallery-04.avif", "gallery-05.jpg", "gallery-06.jpg"],
    "Jeziorna Residential Masterplan": ["gallery-01.avif", "gallery-02.avif", "gallery-03.avif", "gallery-04.avif", "gallery-05.jpg", "gallery-06.jpg"],
    "Ryżowa": ["gallery-01.webp", "gallery-02.webp", "gallery-03.webp", "gallery-04.webp", "gallery-05.jpg", "gallery-06.jpg"]
  };

  const makeProject = (name, category, role, partner = "", extra = {}) => ({
    name,
    category,
    role,
    partner,
    country: extra.country || "",
    game: extra.game || "",
    status: extra.status || "",
    previousTitle: extra.previousTitle || "",
    note: extra.note || "",
    description: extra.description || "",
    projectInfo: extra.projectInfo || "",
    hideProjectFacts: extra.hideProjectFacts || false,
    finalClient: extra.finalClient || "",
    deliveredFor: extra.deliveredFor || "",
    placeholder: extra.placeholder || `[Project thumbnail: ${name}]`,
    assetFolder: extra.assetFolder || "",
    assetExtension: extra.assetExtension || "webp",
    assetFiles: extra.assetFiles || [],
    scope: extra.scope || role,
    industry: extra.industry || category,
    technology: extra.technology || "Technology details available on request",
    year: extra.year || "Not specified"
  });

  const architectureProjects = [
    ["Żeromskiego 13lt7", "Vinci", "Investment modelling and PTT support"],
    ["Bajeczna", "Atal", "Investment modelling and PZT support"],
    ["Parkowa", "Atal", "Investment modelling and PZT support"],
    ["Zenit", "Archicom", "Investment modelling and PTT support"],
    ["Metro Zachód F", "Dom Development", "Investment modelling and PTT support"],
    ["Osiedle Beauforta", "Euro Styl", "Investment modelling and PZT support"],
    ["Urbino I (Italia)", "Dom Development", "Investment modelling and PZT support"],
    ["City Square", "Atal", "Investment modelling and PZT support"],
    ["Apator I", "Echo", "Investment modelling and PZT support"],
    ["FIQUS Marcelin (Świerzawska)", "Nickel Development", "Investment modelling and PZT support"],
    ["Srebrzyńska Park II", "Peira", "Investment modelling and PZT support"],
    ["Nadgórników", "Noho Investment", "Investment modelling and PZT support"],
    ["Jeziorna", "Murapol", "Investment modelling and PTT support"],
    ["Jeziorna IV", "Murapol", "Investment modelling and PZT support"],
    ["Fama Jeżyce III", "Monday", "Investment modelling and PZT support"],
    ["Srebrzyńska Park", "Peira", "Investment modelling and PZT support"],
    ["Sokratesa", "Matexi", "Investment modelling and PZT support"],
    ["Kaskady Krakowska", "Vinci", "Investment modelling and PZT support"],
    ["Planty Racławickie", "Archicom", "Investment modelling and PZT support"],
    ["Zenit II", "Echo", "Investment modelling and PZT support"],
    ["Inwestycja Hallera", "Tree Development", "Investment modelling and PZT support"],
    ["Jeziorna V", "Murapol", "Investment modelling and PZT support"],
    ["Synteza AB", "Euro Styl", "Investment modelling and PZT support"],
    ["Bertone Le Moden", "SIXcom", "Investment modelling and PZT support", "Canada"],
    ["Metro Zachód E4 - A6 (F) - Stage F", "Dom Development", "Investment modelling and PZT support, additional stage"],
    ["MakaM West Hill Phase III (Le Malcolm)", "SIXcom MakaM", "Investment modelling and PZT support", "Canada"],
    ["Garbary", "Vinci", "Investment modelling and PZT support"],
    ["Ryżowa", "Dom Development", "Investment modelling and PZT support"],
    ["Anny German / Sady Żoliborz", "Matexi", "Investment modelling and PZT support"],
    ["Awipolis L6-L8", "Archicom", "Investment modelling and PZT support"],
    ["Wita (Kraków)", "Echo", "Investment modelling and PZT support"],
    ["Ryżowa II (B and C)", "Dom Development", "Investment modelling and PZT support"],
    ["Soho EFG", "Yareal", "Investment modelling and PZT support"],
    ["Awipolis II (L6B)", "Archicom", "Investment modelling and PZT support"],
    ["Zenit III 3D", "Echo", "Investment modelling and PZT support"],
    ["Targowa (Łódź)", "Murapol", "Investment modelling and PZT support"],
    ["Zenit IV 4D", "Echo", "Investment modelling and PZT support"],
    ["Klimontowska IV / Apartamenty na Wzgórzu, buildings 4 and 5", "Murapol", "Investment modelling and PZT support"],
    ["Anny German II / Sady Żoliborz", "Matexi", "Investment modelling and PZT support"],
    ["C31", "Burtville", "Investment modelling and PZT support"],
    ["Stoczniova (Gdańsk)", "Murapol", "Investment modelling and PZT support"],
    ["Warszawska (Poznań)", "Atal", "Investment modelling and PZT support"],
    ["Rivo (Bydgoszcz)", "Murapol", "Investment modelling and PZT support"],
    ["Os. Warszawska II (CD)", "Euro Styl", "Investment modelling and PZT support"],
    ["Zielna 5 (4.2)", "Dom Development", "Investment modelling and PZT support"],
    ["Neolia II", "Corsim", "Investment modelling and PZT support", "Canada"],
    ["29L", "Archicom", "Investment modelling and PZT support"],
    ["Wilno 7.3.2", "Dom Development", "Investment modelling and PZT support"],
    ["Os. Warszawska III (B)", "Euro Styl", "Investment modelling and PZT support"],
    ["Zenit V 5D and 6D", "Echo", "Investment modelling and PZT support"]
  ].map(([name, client, role, country]) => makeProject(
    name,
    "Architecture / Realtime Real Estate",
    role,
    `${client} / YSLAB/RESIMO cooperation`,
    {
      country,
      finalClient: client,
      deliveredFor: "YSLAB / RESIMO",
      scope: "Residential investment modelling and support for preparing the project for realtime real estate presentation.",
      description: "Residential investment modelling support prepared for realtime real estate presentation workflows.",
      projectInfo: name === "Bertone Le Moden" ? "The project was completed for the final client SIXcom in cooperation with YSLAB / RESIMO. The scope included residential investment modelling and support for preparing the project for realtime real estate presentation. The work concerned the residential real estate sector in Canada and was prepared in a realtime 3D production workflow. The year of completion was not specified." : "",
      industry: "Residential real estate",
      technology: "Realtime 3D workflow / technology placeholder"
    }
  ));

  const supportProjects = [
    ["Urzecze", "Budlex", "Collider name changes according to database"],
    ["Solea", "Laor", "Window replacement support", "Italy"],
    ["Rezydencja Tagore", "Vinci", "Terrace and balcony material changes"],
    ["Apartamenty Ludwiki", "Dom Development", "Window view review and corrections"],
    ["Do Woli / Przy Malborskiej", "Dom Development", "Model comparison and change check"],
    ["Apartamenty na Wzgórzu, building 3", "Murapol", "Model corrections based on comments from 29-03"],
    ["Jaśkowa Dolina", "Cordia", "Model changes from 18-04-23"],
    ["Modena (Poznań)", "Cordia", "Model and collider changes"],
    ["Ramhan Island", "Eagle Hills", "Project support", "United Arab Emirates"],
    ["Doki IV (CD)", "Euro Styl", "Project support"],
    ["Nowy Reden (Przemysłowa)", "Częstobud", "Project support"],
    ["Zielony Żurawiniec (Poznań)", "Murapol", "Project support"],
    ["Dolnych Młynów 10", "Noho Investment", "Project support"],
    ["Animation work for investment projects", "", "Work on new animated people / character assets"],
    ["Panorama III", "Budlex", "Project analysis"],
    ["Sady nad Zieloną II (B)", "Archicom", "Project analysis"],
    ["Na Opoczyńskiej (Wrocław)", "Atal", "Project analysis"],
    ["Lindego", "Megapolis", "Project analysis"]
  ].map(([name, client, role, country]) => makeProject(
    name,
    "Animations / Cinematic / Wideo Editing",
    role,
    `${client ? `${client} / ` : ""}YSLAB/RESIMO cooperation`,
    {
      country,
      description: "Focused production support, corrections or analysis within an architecture visualization workflow.",
      industry: "Architecture and realtime real estate",
      technology: "3D production workflow / technology placeholder"
    }
  ));

  supportProjects.unshift(makeProject("Avatars - Optimization", "Avatars / Animation", "Avatar creation, optimization and animation support", "Solverto production support", {
    description: "Creation, optimization and animation support for avatars prepared for realtime interactive experiences.",
    industry: "Interactive content production",
    technology: "Realtime character and animation workflow",
    assetFolder: "animation-trailer-movie/avatars",
    assetFiles: ["gallery-01.jpg", "gallery-02.png", "gallery-03.png", "gallery-04.png"]
  }));

  const squarebytesProjects = [
    ["Living Point 21. Housing", "Investment modelling and PZT support"],
    ["Leopold Quartier Office", "Project support"],
    ["Village im Dritten – 11A", "Project support"],
    ["Village im Dritten – 9B", "Project support"],
    ["Gmunden", "Investment modelling and PZT support"]
  ].map(([name, role]) => makeProject(
    name,
    "Architecture / Realtime Real Estate",
    role,
    "SQUAREBYTES GmbH / partner cooperation",
    {
      description: "Realtime architecture support completed in cooperation with SQUAREBYTES GmbH.",
      industry: "Architecture and real estate",
      technology: "Realtime 3D workflow / technology placeholder"
    }
  ));

  const gameProjects = [
    ["Bamboo House", "House Builder", "Level creation", "Freemind"],
    ["Biofeedback Level", "Biofeedback-related project", "Level creation and partial programming", "Tetronix"],
    ["Arabic House", "House Builder", "Level creation", "Freemind"],
    ["Tree House", "House Builder", "Level creation", "Freemind"],
    ["African Metal House", "House Builder", "Level creation", "Freemind"],
    ["Underwater House", "House Builder", "Level creation", "Freemind"],
    ["Aztec House", "House Builder", "Level creation", "Freemind"],
    ["Underwater Ruin", "Aquarist", "Level creation", "Freemind"],
    ["Underwater Egyptian Ruin", "Aquarist", "Level creation", "Freemind"],
    ["Japanese Garden", "Aquarist", "Level creation", "Freemind"]
  ].map(([name, game, role, client]) => makeProject(
    name,
    "Game Development",
    role,
    `${client} / project involvement`,
    {
      game,
      description: `${role} support for ${game}.`,
      placeholder: `[Project thumbnail: ${name} level for ${game}]`,
      assetExtension: "jpg",
      industry: "Commercial game development",
      technology: "Game engine / technology placeholder"
    }
  ));

  const metaverseDigitalTwin = ["OmegaPro", "Hotel Five", "Casino", "Passionpreneur", "Cove Beach"]
    .map((name) => makeProject(name, "Digital Twin", "Digital Twin environment production support", "Partner studio cooperation", {
      description: "Digital Twin environment and realtime 3D location production support.",
      placeholder: `[Project thumbnail: metaverse environment for ${name}]`,
      industry: "Digital Twin and realtime 3D",
      technology: "Realtime engine / technology placeholder"
    }));

  const metaverseMusicRooms = ["Metaverse Music Rooms", "Rock Pub", "HipHop", "EDM", "RnB", "Metal", "Classic", "PulsePop", "Ivory Coast", "Country", "Latino Party", "Kpop", "MainStage", "Tunisia", "India", "Entoto"]
    .map((name) => makeProject(name, "Music Room / Metaverse", "Music room environment production support", "Partner studio cooperation", {
      description: "3D environment and location production support for a themed metaverse music room.",
      placeholder: `[Project thumbnail: metaverse music room for ${name}]`,
      technology: "Realtime engine / technology placeholder"
    }));

  const metaverseMazes = ["CardsMaze", "Secret Garden", "CheeseMaze", "Candy Land", "Orange", "BackToSchoolMaze", "Ooreedoo"]
    .map((name) => makeProject(name, "Metaverse Maze", "Maze environment and 3D production support", "Partner studio cooperation", {
      description: "Maze environment and realtime 3D production support for a metaverse experience.",
      placeholder: `[Project thumbnail: metaverse maze environment for ${name}]`,
      technology: "Realtime engine / technology placeholder"
    }));

  const treasureHunterLevels = ["AmusementPark", "TunisiaRamadan", "Fantasy", "PirateIsland", "MafEventDeira", "DesertCityOasis"]
    .map((name) => makeProject(name, "Metaverse Game Area", "3D level / game area production support", "Partner studio cooperation", {
      description: "Realtime 3D level and game area production support for a metaverse project.",
      placeholder: `[Project thumbnail: metaverse game area for ${name}]`,
      technology: "Realtime engine / technology placeholder"
    }));

  const pulseGuysLevels = ["BouncingCastle", "ChocolateFactory", "DeathRun", "TheUnderworld", "TuttiFruity", "Heaven", "Candy", "Temple", "Halloween", "Space", "Underwater", "Neon", "Winter", "Dynamite"]
    .map((name) => makeProject(name, "Pulse Guys / Metaverse Game Level", "Level and 3D production support", "Partner studio cooperation", {
      description: "Level and 3D production support for a Pulse Guys metaverse game experience.",
      placeholder: `[Project thumbnail: Pulse Guys level for ${name}]`,
      technology: "Realtime engine / technology placeholder"
    }));

  const customGameProjects = [
    "OP Games",
    "SOGA",
    "Wild Rush",
    "Wild Rush Turbo",
    "Naval Battle | Zombie Outbreak | Mech Mayhem",
    "TrafficCashout | BeatEmUp | MetalSquad"
  ].map((name) => makeProject(name, "Game Development", "Game prototype and production support", "Project involvement", {
    description: "Game prototype and production support.",
    placeholder: `[Project thumbnail: ${name}]`,
    assetExtension: "jpg",
    industry: "Game development",
    technology: "Game engine / technology placeholder"
  }));

  gameProjects.push(...customGameProjects);

  const gameShowcaseProjects = ["Pulse Guys", "Treasure Hunter", "House Builder", "Aquarist"]
    .map((name) => makeProject(name, "Game Development", "Game development and production support", "Project involvement", {
      description: "Game development and production support.",
      placeholder: `[Project thumbnail: ${name}]`,
      assetExtension: gameAssetExtensions[name] || "jpg",
      assetFiles: gameAssetFiles[name] || [],
      industry: "Game development",
      technology: "Game engine / technology placeholder"
    }));

  gameProjects.push(...gameShowcaseProjects);

  const productPrototypeProjects = [
    makeProject("Oferta AR", "Product Prototypes / 3D Models", "Oferta rzeczywistości rozszerzonej", "Solverto", {
      description: "Doświadczenia AR umieszczają produkt lub koncepcję bezpośrednio w otoczeniu użytkownika. Ułatwiają zrozumienie skali, materiałów i kluczowych funkcji przed zakupem lub wdrożeniem. Przygotowujemy zoptymalizowane modele 3D oraz sposób interakcji dla urządzeń mobilnych i prezentacji.",
      assetFolder: "assets",
      assetFiles: ["Site-01.jpg"],
      industry: "Augmented reality",
      technology: "Realtime 3D / AR"
    }),
    makeProject("Oferta optymalizacji", "Product Prototypes / 3D Models", "Oferta optymalizacji 3D", "Solverto", {
      description: "Optymalizujemy modele 3D do płynnego działania w aplikacjach czasu rzeczywistego. Geometria, tekstury i materiały są dostosowywane do urządzenia docelowego oraz budżetu wydajnościowego. Efektem jest szybsze ładowanie i spójna jakość wizualna.",
      assetFolder: "assets",
      assetFiles: ["Site-02.jpg"],
      industry: "3D optimization",
      technology: "Realtime 3D optimization"
    }),
    makeProject("Oferta architektury", "Product Prototypes / 3D Models", "Oferta architektury", "Solverto", {
      description: "Przekształcamy modele architektoniczne w czytelne, interaktywne prezentacje. Doświadczenie wspiera przeglądy projektowe, rozmowy sprzedażowe i decyzje interesariuszy. Może łączyć kontekst budynku, materiały, warianty oraz nawigację.",
      assetFolder: "assets",
      assetFiles: ["Site-03.jpg"],
      industry: "Architecture and real estate",
      technology: "Realtime 3D visualization"
    }),
    makeProject("Oferta VR", "Product Prototypes / 3D Models", "Oferta rzeczywistości wirtualnej", "Solverto", {
      description: "Tworzymy immersyjne doświadczenia VR do szkoleń, prezentacji i eksploracji. Użytkownicy mogą zrozumieć przestrzeń, procesy oraz interakcje z produktem w praktycznej skali. Rozwiązanie projektujemy pod konkretne urządzenie, odbiorców i cel wdrożenia.",
      assetFolder: "assets",
      assetFiles: ["site-04.jpg"],
      industry: "Virtual reality",
      technology: "Realtime 3D / VR"
    })
  ];

  const solvertoGames = [
    makeProject("Tarvos Desolation", "Original Game / Work in Progress", "Current Solverto Games project", "Solverto Games", {
      previousTitle: "Jupiter Survivor",
      status: "WIP before demo",
      note: "Wishlist reached approximately 1.5k and has been stagnant since September 2023.",
      description: "Tarvos Desolation is a work-in-progress single-player isometric sci-fi horror and exploration project. The project is being evaluated and developed toward a demo while Solverto continues to balance internal game development with service-based work.",
      placeholder: "[Project thumbnail: Tarvos Desolation sci-fi horror environment]",
      scope: "Original game development toward a playable demo",
      industry: "Original game development",
      technology: "Game engine / technology placeholder"
    }),
    makeProject("Medieval Machines Builder", "Commercial Game", "Game development / production involvement", "Project involvement", {
      description: "Commercial game development and production involvement.",
      placeholder: "[Project thumbnail: Medieval Machines Builder game]",
    }),
    makeProject("Painter Simulator", "Commercial Game", "Game development / production involvement", "Project involvement", {
      description: "Commercial game development and production involvement.",
      placeholder: "[Project thumbnail: Painter Simulator game]",
    }),
    ...["Arca Plane", "Arca Cross", "Arca Dance", "Arca Crowd", "Arca Archer", "Arca Ball Jam"].map((name) => makeProject(`OP Games - ${name}`, "Web3 Mini-Game", "Mini-game production", "OP Games", {
      description: "Web3 mini-game production for OP Games.",
      placeholder: `[Project thumbnail: OP Games ${name} mini-game]`,
    })),
    makeProject("Kroc and Roll", "Game / Released or previous title", "Game production / original project", "Solverto Games", {
      description: "A released or previous original Solverto Games project.",
      placeholder: "[Project thumbnail: Kroc and Roll game]",
    })
  ];

  const groups = [
    {
      id: "architecture",
      filter: "architecture",
      title: "Architecture / Realtime Real Estate",
      subtitle: "YSLAB/RESIMO cooperation",
      intro: "Over 50 projects completed in Poland and around the world.",
      heroImage: "architecture/hero-architektura-realtime.jpg",
      visibleAssetFolders: [
        "architecture/archicom-kraków-29L-YSLAB",
        "architecture/archicom-zenit-YSLAB",
        "architecture/dom-demelovment-osiedle-przy-ryzowej-YSLAB",
        "architecture/maxeti-sady-zoriborz-YSLAB",
        "architecture/moden-bertone-YSLAB",
        "architecture/murapol-siewierz-jeziorna-YSLAB"
      ],
      projects: architectureProjects
    },
    {
      id: "support",
      filter: "support",
      title: "Animations / Cinematic / Wideo Editing",
      intro: "Focused production support, model corrections, animation work and project analysis completed within partner-led architecture workflows.",
      heroImage: "animation-trailer-movie/hero-animacje-filmy-trailery.jpg",
      projects: supportProjects
    },
    {
      id: "squarebytes",
      filter: "architecture",
      title: "SQUAREBYTES Austria cooperation",
      intro: "Solverto also contributed to selected architecture and realtime real estate projects in cooperation with SQUAREBYTES GmbH.",
      projects: squarebytesProjects
    },
    {
      id: "product-prototypes",
      filter: "product",
      title: "Product Prototypes / 3D Models",
      intro: "Interactive product, architecture, AR and VR offers supported by optimized realtime 3D content.",
      heroImage: "assets/Site-01.jpg",
      projects: productPrototypeProjects
    },
    {
      id: "game-development",
      filter: "games",
      title: "Game Development",
      intro: "Solverto has contributed to commercial game projects through level creation, 3D environment production, programming support, metaverse locations, game areas, avatars, animations and original game development.",
      heroImage: "game-development/hero-poziomy-elementy-gier.jpg",
      projects: gameProjects
    },
    {
      id: "digital-twin",
      filter: "metaverse",
      title: "Digital Twin",
      subtitle: "Digital Twin environments",
      intro: "Digital Twin and realtime 3D environment production support for interactive locations.",
      heroImage: "metaverse/digital-twin/hero-wirtualny-blizniak.jpg",
      projects: metaverseDigitalTwin
    },
    { id: "metaverse-mazes", filter: "metaverse", title: "Maze", heroImage: "metaverse/music-rooms/hero-pokoje-metaverse.jpg", projects: metaverseMazes },
    { id: "music-rooms", filter: "metaverse", title: "Music Room", heroImage: "metaverse/music-rooms/hero-pokoje-metaverse.jpg", projects: metaverseMusicRooms },
    { id: "pulse-guys", filter: "metaverse", title: "Pulse Guys", heroImage: "metaverse/pulse-guys/hero-pulse-guys.jpg", projects: pulseGuysLevels },
    { id: "treasure-hunter", filter: "metaverse", title: "Treasure Hunter", heroImage: "metaverse/treasure-hunter/hero-poziomy-treasure-hunter-metaverse.jpg", projects: treasureHunterLevels },
    {
      id: "solverto-games",
      filter: "solverto",
      title: "Solverto Games",
      intro: "Solverto Games currently operates under Solverto Studio and focuses on original games, experimental projects, web3 mini-games and commercial game development.",
      heroImage: "games/hero-elementy-gier-solverto Games.jpg",
      projects: solvertoGames
    }
  ];

  groups.forEach((group) => {
    group.projects.forEach((project, index) => {
      project.id = `${group.id}-${index + 1}`;
      project.filter = group.filter;
      project.group = group.title;
      project.assetFolder ||= architectureAssetFolders[project.name] || gameAssetFolders[project.name] || metaverseAssetFolders[project.name] || "";
      project.assetExtension = architectureAssetExtensions[project.name] || gameAssetExtensions[project.name] || project.assetExtension;
      project.assetFiles = architectureAssetFiles[project.name] || gameAssetFiles[project.name] || project.assetFiles;
    });
  });

  const featured = [
    makeProject("Zenit Residential Estate", "Architecture / Realtime Real Estate", "Large-scale residential estate modelling support", "Echo / YSLAB/RESIMO cooperation", {
      description: "Large-scale residential estate modelling support with multiple buildings and realtime presentation requirements.",
      placeholder: "[Project thumbnail: Zenit residential estate realtime 3D model]",
      industry: "Residential real estate"
    }),
    makeProject("Jeziorna Residential Masterplan", "Architecture / Realtime Real Estate", "Large residential masterplan modelling support", "Murapol / YSLAB/RESIMO cooperation", {
      description: "Large residential masterplan modelling support for a multi-building development.",
      placeholder: "[Project thumbnail: Jeziorna large residential masterplan]",
      industry: "Residential real estate"
    }),
    makeProject("House Builder Levels", "Game Development", "Environment and level production support", "Freemind / project involvement", {
      description: "Environment and level production support for multiple House Builder locations.",
      placeholder: "[Project thumbnail: House Builder level environment]",
    }),
    makeProject("Metaverse Music Rooms", "Metaverse", "3D environment and location production support", "Partner studio cooperation", {
      description: "3D environment and location production support for multiple themed metaverse music rooms.",
      placeholder: "[Project thumbnail: metaverse music room environment]",
    }),
    makeProject("OP Games Mini-Games", "Solverto Games", "Production of six web3 mini-games", "OP Games", {
      description: "Production of multiple web3 mini-games for OP Games.",
      placeholder: "[Project thumbnail: OP Games arcade mini-game collection]",
    }),
    makeProject("Tarvos Desolation", "Solverto Games / Work in Progress", "Current Solverto Games project", "Solverto Games", {
      description: "Single-player isometric sci-fi horror and extraction-inspired survival project currently in development.",
      placeholder: "[Project thumbnail: Tarvos Desolation sci-fi horror scene]",
    })
  ];
  featured.forEach((project, index) => {
    project.id = `featured-${index + 1}`;
    project.assetFolder ||= architectureAssetFolders[project.name] || gameAssetFolders[project.name] || metaverseAssetFolders[project.name] || "";
    project.assetExtension = architectureAssetExtensions[project.name] || gameAssetExtensions[project.name] || project.assetExtension;
    project.assetFiles = architectureAssetFiles[project.name] || gameAssetFiles[project.name] || project.assetFiles;
  });

  const legacyLargeScale = [
    ["Zenit", "Echo / Zenit", "10 residential buildings, approximately 150 apartments each, large estate", "[Featured project visual: large Zenit residential estate model]"],
    ["Jeziorna", "Murapol", "Approximately 30 buildings, around 20 apartments each, large residential masterplan", "[Featured project visual: Jeziorna residential masterplan]"],
    ["Fama Jeżyce", "Monday", "6 buildings, around 12 apartments each, large estate", "[Featured project visual: Fama Jeżyce estate model]"],
    ["Ryżowa", "Dom Development", "3 buildings, around 200 apartments each", "[Featured project visual: Ryżowa residential buildings]"],
    ["Anny German / Sady Żoliborz", "Matexi", "2 buildings, around 150 apartments each", "[Featured project visual: Sady Żoliborz architecture model]"],
    ["Nadgórników", "Noho Investment", "Large residential towers and large estate", "[Featured project visual: Nadgórników residential towers]"]
  ].map(([name, partner, scale, placeholder], index) => ({
    ...makeProject(name, "Architecture / Realtime Real Estate", "Large-scale architecture modelling support", `${partner} / YSLAB/RESIMO cooperation`, {
      description: scale,
      placeholder,
      scope: scale,
      industry: "Residential real estate"
    }),
    id: `large-scale-${index + 1}`
  }));

  const selectedProjectSources = new Map([
    ...groups.flatMap((group) => group.projects),
    ...featured
  ].map((project) => [project.name, project]));
  const selectedProject = (sourceName, overrides = {}) => {
    const source = selectedProjectSources.get(sourceName);
    return source ? { ...source, ...overrides } : null;
  };

  const selectedWork = [
    selectedProject("Jeziorna Residential Masterplan", {
      id: "selected-work-1",
      name: "Jeziorna",
      category: "Architecture / Realtime Real Estate",
      filter: "architecture",
      departmentId: "architecture",
      departmentTitle: "Architecture / Realtime Real Estate",
      group: "Selected work"
    }),
    selectedProject("Japanese Garden", {
      id: "selected-work-2",
      category: "Game Development",
      filter: "games",
      departmentId: "game-development",
      departmentTitle: "Game Development",
      group: "Selected work"
    }),
    selectedProject("Hotel Five", {
      id: "selected-work-3",
      name: "Hotel Five",
      category: "Digital Twin",
      filter: "metaverse",
      departmentId: "digital-twin",
      departmentTitle: "Digital Twin",
      group: "Selected work"
    }),
    selectedProject("Orange", {
      id: "selected-work-4",
      name: "Orange",
      category: "Metaverse Maze",
      filter: "metaverse",
      departmentId: "metaverse-mazes",
      departmentTitle: "Maze",
      group: "Selected work"
    }),
    selectedProject("India", {
      id: "selected-work-5",
      name: "India Music Room",
      category: "Music Room / Metaverse",
      filter: "metaverse",
      departmentId: "music-rooms",
      departmentTitle: "Music Room",
      group: "Selected work"
    }),
    selectedProject("ChocolateFactory", {
      id: "selected-work-6",
      name: "Chocolate Factory",
      category: "Pulse Guys / Metaverse Game Level",
      filter: "metaverse",
      departmentId: "pulse-guys",
      departmentTitle: "Pulse Guys",
      group: "Selected work"
    }),
    selectedProject("MafEventDeira", {
      id: "selected-work-7",
      name: "Maf Event Deira",
      category: "Treasure Hunter / Metaverse Game Area",
      filter: "metaverse",
      departmentId: "treasure-hunter",
      departmentTitle: "Treasure Hunter",
      assetFolder: "metaverse/treasure-hunter/amusment-park",
      group: "Selected work"
    }),
    selectedProject("Medieval Machines Builder", {
      id: "selected-work-8",
      category: "Solverto Games / Commercial Game",
      filter: "solverto",
      departmentId: "solverto-games",
      departmentTitle: "Solverto Games",
      group: "Selected work"
    }),
    {
      ...makeProject("Avatars - Optimization", "Animations / Cinematic / Wideo Editing", "Avatar optimization and production support", "Solverto production support", {
        description: "Avatar asset optimization and animation support for interactive production workflows.",
        placeholder: "[Project thumbnail: Avatars - Optimization]",
        industry: "Interactive content production",
        technology: "Realtime asset optimization workflow / technology placeholder"
      }),
      id: "selected-work-9",
      filter: "support",
      departmentId: "support",
      departmentTitle: "Animations / Cinematic / Wideo Editing",
      group: "Selected work"
    }
  ].filter(Boolean);

  const stats = [
    { value: "70+", label: "architecture / realtime real estate projects and support tasks" },
    { value: "30+", label: "metaverse locations, mazes and game areas" },
    { value: "9+", label: "commercial game levels for House Builder, Aquarist and biofeedback-related projects" },
    { value: "6", label: "web3 mini-games produced for OP Games" },
    { value: "Own + co-developed", label: "game titles including Painter Simulator, Medieval Machines Builder and Tarvos Desolation" }
  ];

  window.SOLVERTO_PORTFOLIO = { stats, featured, largeScale: selectedWork, groups };
})();
