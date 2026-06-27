(() => {
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
    placeholder: extra.placeholder || `[Project thumbnail: ${name}]`,
    tags: extra.tags || [],
    scope: extra.scope || role,
    industry: extra.industry || category,
    technology: extra.technology || "Technology details available on request",
    year: extra.year || "Not specified"
  });

  const architectureProjects = [
    ["Żeromskiego 13lt7", "Vinci", "Investment modelling and PTT support"],
    ["Bajeczna", "Atal", "Investment modelling and PZT support"],
    ["Metro Zachód F", "Dom Development", "Investment modelling and PTT support"],
    ["Osiedle Beauforta", "Euro Styl", "Investment modelling and PZT support"],
    ["Urbino I (Italia)", "Dom Development", "Investment modelling and PZT support"],
    ["City Square", "Atal", "Investment modelling and PZT support"],
    ["Apator I", "Echo", "Investment modelling and PZT support"],
    ["FIQUS Marcelin (Świerzawska)", "Nickel Development", "Investment modelling and PZT support"],
    ["Srebrzyńska Park II", "Peira", "Investment modelling and PZT support"],
    ["Nadgórników", "Noho Investment", "Investment modelling and PZT support"],
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
    `${client} / YSLAB / RESIMO cooperation`,
    {
      country,
      description: "Residential investment modelling support prepared for realtime real estate presentation workflows.",
      tags: ["3D Modelling", role.includes("PTT") ? "PTT" : "PZT", "Realtime Architecture", "Residential"],
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
    ["Animation work for investment projects", "Partner studio cooperation", "Work on new animated people / character assets"],
    ["Panorama III", "Budlex", "Project analysis"],
    ["Sady nad Zieloną II (B)", "Archicom", "Project analysis"],
    ["Na Opoczyńskiej (Wrocław)", "Atal", "Project analysis"],
    ["Lindego", "Megapolis", "Project analysis"]
  ].map(([name, client, role, country]) => makeProject(
    name,
    "Animations / Support / Analysis",
    role,
    `${client} / partner cooperation`,
    {
      country,
      description: "Focused production support, corrections or analysis within an architecture visualization workflow.",
      tags: role.includes("Animation") || name.includes("Animation") ? ["Animation", "Character Assets", "Production Support"] : ["3D Support", "Corrections", "Analysis"],
      industry: "Architecture and realtime real estate",
      technology: "3D production workflow / technology placeholder"
    }
  ));

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
      tags: ["3D Modelling", "Realtime Architecture", "Production Support", "Austria"],
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
      tags: ["Level Design", "3D Environment", game, role.includes("programming") ? "Programming Support" : "Production Support"],
      industry: "Commercial game development",
      technology: "Game engine / technology placeholder"
    }
  ));

  const metaverseLocations = ["OmegaPro", "HotelFive", "Casino", "Metaverse Music Rooms", "Rock", "HipHop", "EDM", "RnB", "Metal", "Classic", "PulsePop", "Zouglou", "Country", "Latino", "Kpop", "MainStage", "Tunisia", "India", "PulseGuys", "Entoto"]
    .map((name) => makeProject(name, "Metaverse", "3D environment / metaverse production support", "Partner studio cooperation", {
      description: "3D environment and location production support for a themed metaverse space.",
      placeholder: `[Project thumbnail: metaverse environment for ${name}]`,
      tags: ["Metaverse", "3D Environment", "Production Support"],
      technology: "Realtime engine / technology placeholder"
    }));

  const metaverseMazes = ["CardsMaze", "HorrorMaze", "IncaMaze", "RunnerMaze", "GrassMaze", "CastleMaze", "CheeseMaze", "ShipMaze", "CandyMaze", "OrangeMaze", "BackToSchoolMaze", "OoredooMaze"]
    .map((name) => makeProject(name, "Metaverse Maze", "Maze environment and 3D production support", "Partner studio cooperation", {
      description: "Maze environment and realtime 3D production support for a metaverse experience.",
      placeholder: `[Project thumbnail: metaverse maze environment for ${name}]`,
      tags: ["Metaverse", "Maze", "Environment Art", "Production Support"],
      technology: "Realtime engine / technology placeholder"
    }));

  const metaverseAreas = ["Treasure Hunter Levels", "AmusementPark", "TunisiaRamadan", "Fantasy", "PirateIsland", "MafEventDeira", "DesertCityOasis"]
    .map((name) => makeProject(name, "Metaverse Game Area", "3D level / game area production support", "Partner studio cooperation", {
      description: "Realtime 3D level and game area production support for a metaverse project.",
      placeholder: `[Project thumbnail: metaverse game area for ${name}]`,
      tags: ["Metaverse", "Game Area", "3D Level", "Production Support"],
      technology: "Realtime engine / technology placeholder"
    }));

  const pulseGuysLevels = ["LastOnes", "BouncingCastle", "ChocolateFactory", "DeathRun", "TheUnderworld", "TuttiFruity", "Lobby", "Playground", "Heaven", "Podium", "Candy", "Temple", "Halloween", "Space", "Underwater", "Neon", "Winter", "Dynamite"]
    .map((name) => makeProject(name, "Pulse Guys / Metaverse Game Level", "Level and 3D production support", "Partner studio cooperation", {
      description: "Level and 3D production support for a Pulse Guys metaverse game experience.",
      placeholder: `[Project thumbnail: Pulse Guys level for ${name}]`,
      tags: ["Pulse Guys", "Metaverse", "Level Production", "3D Environment"],
      technology: "Realtime engine / technology placeholder"
    }));

  const wildRush = [makeProject("Wild Rush", "Metaverse / Game Production", "Avatars and animations", "Partner studio cooperation", {
    description: "Avatar and animation production support for a metaverse game project.",
    placeholder: "[Project thumbnail: Wild Rush avatars and animations]",
    tags: ["Avatars", "Animation", "Metaverse", "Game Production"],
    technology: "Character and animation workflow / technology placeholder"
  })];

  const solvertoGames = [
    makeProject("Kroc and Roll", "Game / Released or previous title", "Game production / original project", "Solverto Games", {
      description: "A released or previous original Solverto Games project.",
      placeholder: "[Project thumbnail: Kroc and Roll game]",
      tags: ["Original IP", "Game Production", "Released Title"]
    }),
    ...["Arca Dance", "Arca Ball Jam", "Arca Archer", "Arca Plane", "Arca Crowd", "Arca Cross"].map((name) => makeProject(`OP Games - ${name}`, "Web3 Mini-Game", "Mini-game production", "OP Games", {
      description: "Web3 mini-game production for OP Games.",
      placeholder: `[Project thumbnail: OP Games ${name} mini-game]`,
      tags: ["Web3", "Mini-Game", "Game Production", "OP Games"]
    })),
    makeProject("Painter Simulator", "Commercial Game", "Game development / production involvement", "Project involvement", {
      description: "Commercial game development and production involvement.",
      placeholder: "[Project thumbnail: Painter Simulator game]",
      tags: ["Commercial Game", "Game Development", "Production"]
    }),
    makeProject("Medieval Machines Builder", "Commercial Game", "Game development / production involvement", "Project involvement", {
      description: "Commercial game development and production involvement.",
      placeholder: "[Project thumbnail: Medieval Machines Builder game]",
      tags: ["Commercial Game", "Game Development", "Production"]
    }),
    makeProject("Tarvos Desolation", "Original Game / Work in Progress", "Current Solverto Games project", "Solverto Games", {
      previousTitle: "Jupiter Survivor",
      status: "WIP before demo",
      note: "Wishlist reached approximately 1.5k and has been stagnant since September 2023.",
      description: "Tarvos Desolation is a work-in-progress single-player isometric sci-fi horror and exploration project. The project is being evaluated and developed toward a demo while Solverto continues to balance internal game development with service-based work.",
      placeholder: "[Project thumbnail: Tarvos Desolation sci-fi horror environment]",
      tags: ["Original IP", "Sci-Fi Horror", "Isometric", "Work in Progress"],
      scope: "Original game development toward a playable demo",
      industry: "Original game development",
      technology: "Game engine / technology placeholder"
    })
  ];

  const groups = [
    {
      id: "architecture",
      filter: "architecture",
      title: "Architecture / Realtime Real Estate",
      subtitle: "YSLAB / RESIMO cooperation",
      intro: "Solverto has contributed to a wide range of architecture and realtime real estate projects, including residential investments, large estates, technical 3D modelling, PZT/PTT preparation support, optimization tasks and project corrections for partner studios and real estate clients.",
      projects: architectureProjects
    },
    {
      id: "architecture-support",
      filter: "support",
      title: "Architecture support, corrections and analysis",
      intro: "Focused production support, model corrections, animation work and project analysis completed within partner-led architecture workflows.",
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
      id: "game-development",
      filter: "games",
      title: "Game Development",
      intro: "Solverto has contributed to commercial game projects through level creation, 3D environment production, programming support, metaverse locations, game areas, avatars, animations and original game development.",
      projects: gameProjects
    },
    {
      id: "metaverse-locations",
      filter: "metaverse",
      title: "Metaverse environments and games",
      subtitle: "Metaverse locations and music rooms",
      intro: "Solverto contributed to a wide range of metaverse environments, music rooms, maze experiences, game areas and avatar/animation content.",
      projects: metaverseLocations
    },
    { id: "metaverse-mazes", filter: "metaverse", title: "Metaverse mazes", projects: metaverseMazes },
    { id: "metaverse-areas", filter: "metaverse", title: "Metaverse game areas", projects: metaverseAreas },
    { id: "pulse-guys", filter: "metaverse", title: "Pulse Guys levels", projects: pulseGuysLevels },
    { id: "wild-rush", filter: "metaverse", title: "Wild Rush", projects: wildRush },
    {
      id: "solverto-games",
      filter: "solverto",
      title: "Solverto Games",
      intro: "Solverto Games currently operates under Solverto Studio and focuses on original games, experimental projects, web3 mini-games and commercial game development.",
      projects: solvertoGames
    }
  ];

  groups.forEach((group) => {
    group.projects.forEach((project, index) => {
      project.id = `${group.id}-${index + 1}`;
      project.filter = group.filter;
      project.group = group.title;
    });
  });

  const featured = [
    makeProject("Zenit Residential Estate", "Architecture / Realtime Real Estate", "Large-scale residential estate modelling support", "Echo / partner cooperation", {
      description: "Large-scale residential estate modelling support with multiple buildings and realtime presentation requirements.",
      placeholder: "[Project thumbnail: Zenit residential estate realtime 3D model]",
      tags: ["3D Modelling", "Realtime Architecture", "Residential"],
      industry: "Residential real estate"
    }),
    makeProject("Jeziorna Residential Masterplan", "Architecture / Realtime Real Estate", "Large residential masterplan modelling support", "Murapol / partner cooperation", {
      description: "Large residential masterplan modelling support for a multi-building development.",
      placeholder: "[Project thumbnail: Jeziorna large residential masterplan]",
      tags: ["Masterplan", "3D Modelling", "Realtime Architecture"],
      industry: "Residential real estate"
    }),
    makeProject("House Builder Levels", "Game Development", "Environment and level production support", "Freemind / project involvement", {
      description: "Environment and level production support for multiple House Builder locations.",
      placeholder: "[Project thumbnail: House Builder level environment]",
      tags: ["House Builder", "Level Production", "3D Environment"]
    }),
    makeProject("Metaverse Music Rooms", "Metaverse", "3D environment and location production support", "Partner studio cooperation", {
      description: "3D environment and location production support for multiple themed metaverse music rooms.",
      placeholder: "[Project thumbnail: metaverse music room environment]",
      tags: ["Metaverse", "Music Rooms", "3D Environment"]
    }),
    makeProject("OP Games Mini-Games", "Solverto Games", "Production of six web3 mini-games", "OP Games", {
      description: "Production of multiple web3 mini-games for OP Games.",
      placeholder: "[Project thumbnail: OP Games arcade mini-game collection]",
      tags: ["Web3", "Mini-Games", "Game Production"]
    }),
    makeProject("Tarvos Desolation", "Solverto Games / Work in Progress", "Current Solverto Games project", "Solverto Games", {
      description: "Single-player isometric sci-fi horror and extraction-inspired survival project currently in development.",
      placeholder: "[Project thumbnail: Tarvos Desolation sci-fi horror scene]",
      tags: ["Original IP", "Sci-Fi Horror", "Work in Progress"]
    })
  ];
  featured.forEach((project, index) => { project.id = `featured-${index + 1}`; });

  const largeScale = [
    ["Zenit", "Echo / Zenit", "10 residential buildings, approximately 150 apartments each, large estate", "[Featured project visual: large Zenit residential estate model]"],
    ["Jeziorna", "Murapol", "Approximately 30 buildings, around 20 apartments each, large residential masterplan", "[Featured project visual: Jeziorna residential masterplan]"],
    ["Fama Jeżyce", "Monday", "6 buildings, around 12 apartments each, large estate", "[Featured project visual: Fama Jeżyce estate model]"],
    ["Ryżowa", "Dom Development", "3 buildings, around 200 apartments each", "[Featured project visual: Ryżowa residential buildings]"],
    ["Anny German / Sady Żoliborz", "Matexi", "2 buildings, around 150 apartments each", "[Featured project visual: Sady Żoliborz architecture model]"],
    ["Nadgórników", "Noho Investment", "Large residential towers and large estate", "[Featured project visual: Nadgórników residential towers]"]
  ].map(([name, partner, scale, placeholder], index) => ({
    ...makeProject(name, "Architecture / Realtime Real Estate", "Large-scale architecture modelling support", `${partner} / partner cooperation`, {
      description: scale,
      placeholder,
      tags: ["Large Scale", "Residential", "Realtime Architecture"],
      scope: scale,
      industry: "Residential real estate"
    }),
    id: `large-scale-${index + 1}`
  }));

  const stats = [
    { value: "70+", label: "architecture / realtime real estate projects and support tasks" },
    { value: "30+", label: "metaverse locations, mazes and game areas" },
    { value: "9+", label: "commercial game levels for House Builder, Aquarist and biofeedback-related projects" },
    { value: "6", label: "web3 mini-games produced for OP Games" },
    { value: "Own + co-developed", label: "game titles including Painter Simulator, Medieval Machines Builder and Tarvos Desolation" }
  ];

  window.SOLVERTO_PORTFOLIO = { stats, featured, largeScale, groups };
})();
