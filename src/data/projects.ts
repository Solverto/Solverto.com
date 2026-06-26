export type ProjectCategory =
  | "architecture"
  | "gamedev"
  | "metaverse"
  | "support"
  | "analysis"
  | "animation";

export type Project = {
  id: string;
  title: string;
  category: ProjectCategory;
  subcategory?: string;
  client?: string;
  partner?: string;
  country?: string;
  region?: string;
  tags: string[];
  isFeatured?: boolean;
  isLargest?: boolean;
  serviceType: string;
  descriptionPL: string;
  descriptionEN: string;
  descriptionDE: string;
  descriptionES: string;
};

export type LargestReference = {
  title: string;
  client: string;
  descriptionPL: string;
  descriptionEN: string;
  descriptionDE: string;
  descriptionES: string;
};

type ProjectSeed = {
  title: string;
  client?: string;
  partner?: string;
  country?: string;
  region?: string;
  subcategory?: string;
  tags?: string[];
  isFeatured?: boolean;
  isLargest?: boolean;
  serviceType?: string;
};

const slugify = (value: string) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const baseTags = (seed: ProjectSeed, category: ProjectCategory) => [
  category,
  seed.subcategory ?? "",
  seed.client ?? "",
  seed.partner ?? "",
  seed.country ?? "Poland",
  seed.region ?? "",
  seed.isLargest ? "largest" : "",
  seed.isFeatured ? "featured" : "",
  ...(seed.tags ?? [])
];

const architectureDescriptions = (title: string) => ({
  descriptionPL: `Modelowanie inwestycji oraz przygotowanie PZT/PTT dla projektu ${title}.`,
  descriptionEN: `Investment modeling and PZT/PTT preparation for ${title}.`,
  descriptionDE: `Modellierung des Investitionsprojekts und PZT/PTT-Vorbereitung für ${title}.`,
  descriptionES: `Modelado de inversión y preparación PZT/PTT para ${title}.`
});

const supportDescriptions = (title: string) => ({
  descriptionPL: `Wsparcie produkcyjne i poprawki modelu dla projektu ${title}.`,
  descriptionEN: `Production support and model fixes for ${title}.`,
  descriptionDE: `Produktionssupport und Modellkorrekturen für ${title}.`,
  descriptionES: `Soporte de producción y correcciones de modelo para ${title}.`
});

const analysisDescriptions = (title: string) => ({
  descriptionPL: `Analiza modelu i zakresu produkcyjnego dla projektu ${title}.`,
  descriptionEN: `Model and production scope analysis for ${title}.`,
  descriptionDE: `Modell- und Produktionsumfangsanalyse für ${title}.`,
  descriptionES: `Análisis de modelo y alcance de producción para ${title}.`
});

const gamedevDescriptions = (title: string) => ({
  descriptionPL: `Level design, środowisko lub prace produkcyjne przy projekcie ${title}.`,
  descriptionEN: `Level design, environment or production work for ${title}.`,
  descriptionDE: `Leveldesign, Umgebung oder Produktionsarbeit für ${title}.`,
  descriptionES: `Level design, entorno o trabajo de producción para ${title}.`
});

const metaverseDescriptions = (title: string) => ({
  descriptionPL: `Współpraca przy tworzeniu przestrzeni, leveli, modeli 3D lub doświadczeń metaverse dla ${title}.`,
  descriptionEN: `Collaboration on spaces, levels, 3D models or metaverse experiences for ${title}.`,
  descriptionDE: `Mitarbeit an Räumen, Levels, 3D-Modellen oder Metaverse-Erlebnissen für ${title}.`,
  descriptionES: `Colaboración en espacios, niveles, modelos 3D o experiencias metaverse para ${title}.`
});

const toProject = (
  seed: ProjectSeed,
  category: ProjectCategory,
  descriptions: ReturnType<typeof architectureDescriptions>
): Project => ({
  id: `${category}-${slugify(seed.title)}`,
  title: seed.title,
  category,
  subcategory: seed.subcategory,
  client: seed.client,
  partner: seed.partner,
  country: seed.country ?? "Poland",
  region: seed.region,
  tags: baseTags(seed, category).filter(Boolean).map((tag) => tag.toLowerCase()),
  isFeatured: seed.isFeatured,
  isLargest: seed.isLargest,
  serviceType: seed.serviceType ?? "Production reference",
  ...descriptions
});

const architectureSeeds: ProjectSeed[] = [
  { title: "Żeromskiego 13", client: "Vinci", serviceType: "Modelowanie inwestycji oraz PZT/PTT" },
  { title: "Bajeczna", client: "Atal", serviceType: "Modelowanie inwestycji oraz PZT" },
  { title: "Metro Zachód F", client: "Dom Development", serviceType: "Modelowanie inwestycji oraz PZT/PTT" },
  { title: "Osiedle Beauforta", client: "Euro Styl", serviceType: "Modelowanie inwestycji oraz PZT" },
  { title: "Urbino I, Italia", client: "Dom Development", serviceType: "Modelowanie inwestycji oraz PZT" },
  { title: "City Square", client: "Atal", serviceType: "Modelowanie inwestycji oraz PZT" },
  { title: "Apator I", client: "Echo", serviceType: "Modelowanie inwestycji oraz PZT" },
  { title: "FIQUS Marcelin / Świerzawska", client: "Nickel Development", serviceType: "Modelowanie inwestycji oraz PZT" },
  { title: "Srebrzyńska Park II", client: "Peira", serviceType: "Modelowanie inwestycji oraz PZT" },
  { title: "Nadgórników", client: "Noho Investment", isFeatured: true, isLargest: true, serviceType: "Modelowanie inwestycji oraz PZT" },
  { title: "Jeziorna IV", client: "Murapol", isLargest: true, serviceType: "Modelowanie inwestycji oraz PZT" },
  { title: "Fama Jeżyce III", client: "Monday", isLargest: true, serviceType: "Modelowanie inwestycji oraz PZT" },
  { title: "Srebrzyńska Park", client: "Peira", serviceType: "Modelowanie inwestycji oraz PZT" },
  { title: "Sokratesa", client: "Matexi", serviceType: "Modelowanie inwestycji oraz PZT" },
  { title: "Kaskady Krakowska", client: "Vinci", serviceType: "Modelowanie inwestycji oraz PZT" },
  { title: "Planty Racławickie", client: "Archicom", serviceType: "Modelowanie inwestycji oraz PZT" },
  { title: "Zenit II", client: "Echo", isFeatured: true, isLargest: true, serviceType: "Modelowanie inwestycji oraz PZT" },
  { title: "Inwestycja Hallera", client: "Tree Development", serviceType: "Modelowanie inwestycji oraz PZT" },
  { title: "Jeziorna V", client: "Murapol", isLargest: true, serviceType: "Modelowanie inwestycji oraz PZT" },
  { title: "Synteza AB", client: "Euro Styl", serviceType: "Modelowanie inwestycji oraz PZT" },
  { title: "Bertone Le Moden", client: "SIXcom", country: "Canada", serviceType: "Modelowanie inwestycji oraz PZT" },
  { title: "Metro Zachód E4-A6, etap F", client: "Dom Development", serviceType: "Modelowanie inwestycji oraz PZT" },
  { title: "MakaM West Hill Phase III / Le Malcolm", client: "SIXcom MakaM", country: "Canada", serviceType: "Modelowanie inwestycji oraz PZT" },
  { title: "Garbary", client: "Vinci", serviceType: "Modelowanie inwestycji oraz PZT" },
  { title: "Ryżowa", client: "Dom Development", isFeatured: true, isLargest: true, serviceType: "Modelowanie inwestycji oraz PZT" },
  { title: "Anny German / Sady Żoliborz", client: "Matexi", isFeatured: true, isLargest: true, serviceType: "Modelowanie inwestycji oraz PZT" },
  { title: "Awipolis L6-L8", client: "Archicom", serviceType: "Modelowanie inwestycji oraz PZT" },
  { title: "Wita, Kraków", client: "Echo", serviceType: "Modelowanie inwestycji oraz PZT" },
  { title: "Ryżowa II, budynki B i C", client: "Dom Development", isLargest: true, serviceType: "Modelowanie inwestycji oraz PZT" },
  { title: "Soho EFG", client: "Yareal", serviceType: "Modelowanie inwestycji oraz PZT" },
  { title: "Awipolis II / L6B", client: "Archicom", serviceType: "Modelowanie inwestycji oraz PZT" },
  { title: "Zenit III 3D", client: "Echo", isLargest: true, serviceType: "Modelowanie inwestycji oraz PZT" },
  { title: "Targowa, Łódź", client: "Murapol", serviceType: "Modelowanie inwestycji oraz PZT" },
  { title: "Zenit IV 4D", client: "Echo", isLargest: true, serviceType: "Modelowanie inwestycji oraz PZT" },
  { title: "Klimontowska IV / Apartamenty na Wzgórzu, bud. 4 i 5", client: "Murapol", serviceType: "Modelowanie inwestycji oraz PZT" },
  { title: "Anny German II / Sady Żoliborz", client: "Matexi", isLargest: true, serviceType: "Modelowanie inwestycji oraz PZT" },
  { title: "C31", client: "Burtville", serviceType: "Modelowanie inwestycji oraz PZT" },
  { title: "Stoczniova, Gdańsk", client: "Murapol", serviceType: "Modelowanie inwestycji oraz PZT" },
  { title: "Warszawska, Poznań", client: "Atal", serviceType: "Modelowanie inwestycji oraz PZT" },
  { title: "Rivo, Bydgoszcz", client: "Murapol", serviceType: "Modelowanie inwestycji oraz PZT" },
  { title: "Osiedle Warszawska II, CD", client: "Euro Styl", serviceType: "Modelowanie inwestycji oraz PZT" },
  { title: "Zielna 5, 4.2", client: "Dom Development", serviceType: "Modelowanie inwestycji oraz PZT" },
  { title: "Neolia II", client: "Corsim", country: "Canada", serviceType: "Modelowanie inwestycji oraz PZT" },
  { title: "29L", client: "Archicom", serviceType: "Modelowanie inwestycji oraz PZT" },
  { title: "Wilno 7.3.2", client: "Dom Development", serviceType: "Modelowanie inwestycji oraz PZT" },
  { title: "Osiedle Warszawska III, B", client: "Euro Styl", serviceType: "Modelowanie inwestycji oraz PZT" },
  { title: "Zenit V, 5D i 6D", client: "Echo", isLargest: true, serviceType: "Modelowanie inwestycji oraz PZT" },
  { title: "Living Point 21 Housing", client: "SQUAREBYTES GmbH", country: "Austria", serviceType: "Modelowanie inwestycji oraz PZT" },
  { title: "Gmunden", client: "SQUAREBYTES GmbH", country: "Austria", serviceType: "Modelowanie inwestycji oraz PZT" }
];

const supportSeeds: ProjectSeed[] = [
  { title: "Urzecze", client: "Budlex", subcategory: "Support / fixes", serviceType: "Zmiana nazw colliderów zgodnie z bazą" },
  { title: "Solea", client: "Laor", country: "Italy", subcategory: "Support / fixes", serviceType: "Podmiana okna" },
  { title: "Rezydencja Tagore", client: "Vinci", subcategory: "Support / fixes", serviceType: "Zmiany na tarasach i balkonach" },
  { title: "Apartamenty Ludwiki", client: "Dom Development", subcategory: "Support / fixes", serviceType: "Przegląd widoków z okna i poprawki" },
  { title: "Do Woli / Przy Malborskiej", client: "Dom Development", subcategory: "Support / fixes", serviceType: "Kontrola zmian w modelu" },
  { title: "Apartamenty na Wzgórzu, bud. 3", client: "Murapol", subcategory: "Support / fixes", serviceType: "Uwagi i poprawki modelu" },
  { title: "Jaśkowa Dolina", client: "Cordia", subcategory: "Support / fixes", serviceType: "Zmiany w modelu" },
  { title: "Modena, Poznań", client: "Cordia", subcategory: "Support / fixes", serviceType: "Zmiany w modelu i colliderach" },
  { title: "Ramhan Island", client: "Eagle Hills", country: "UAE", subcategory: "Support / fixes", serviceType: "Wsparcie przy inwestycji" },
  { title: "Doki IV, CD", client: "Euro Styl", subcategory: "Support / fixes", serviceType: "Wsparcie przy inwestycji" },
  { title: "Nowy Reden / Przemysłowa", client: "Częstobud", subcategory: "Support / fixes", serviceType: "Wsparcie przy inwestycji" },
  { title: "Zielony Żurawiniec, Poznań", client: "Murapol", subcategory: "Support / fixes", serviceType: "Wsparcie przy inwestycji" },
  { title: "Dolnych Młynów 10", client: "Noho Investment", subcategory: "Support / fixes", serviceType: "Wsparcie przy inwestycji" },
  { title: "Leopold Quartier Office", client: "SQUAREBYTES GmbH", country: "Austria", subcategory: "Support / fixes", serviceType: "Wsparcie przy inwestycji" },
  { title: "Village im Dritten 11A", client: "SQUAREBYTES GmbH", country: "Austria", subcategory: "Support / fixes", serviceType: "Wsparcie przy inwestycji" },
  { title: "Village im Dritten 9B", client: "SQUAREBYTES GmbH", country: "Austria", subcategory: "Support / fixes", serviceType: "Wsparcie przy inwestycji" }
];

const analysisSeeds: ProjectSeed[] = [
  { title: "Panorama III", client: "Budlex", serviceType: "Analiza projektu" },
  { title: "Sady nad Zieloną II, B", client: "Archicom", serviceType: "Analiza projektu" },
  { title: "Na Opoczyńskiej, Wrocław", client: "Atal", serviceType: "Analiza projektu" },
  { title: "Lindego", client: "Megapolis", serviceType: "Analiza projektu" }
];

const gameSeeds: ProjectSeed[] = [
  { title: "Tarvos Desolation", client: "Solverto Games", subcategory: "Original IP", isFeatured: true, serviceType: "Projekt własny / prototype-ready IP" },
  { title: "Bamboo House", client: "Freemind", subcategory: "House Builder", serviceType: "Stworzenie levelu" },
  { title: "Biofeedback", client: "Tetronix", subcategory: "Prototype", serviceType: "Stworzenie levelu i zaprogramowanie części projektu" },
  { title: "Arabic House", client: "Freemind", subcategory: "House Builder", serviceType: "Stworzenie levelu" },
  { title: "Tree House", client: "Freemind", subcategory: "House Builder", serviceType: "Stworzenie levelu" },
  { title: "African Metal House", client: "Freemind", subcategory: "House Builder", serviceType: "Stworzenie levelu" },
  { title: "Underwater House", client: "Freemind", subcategory: "House Builder", serviceType: "Stworzenie levelu" },
  { title: "Aztec House", client: "Freemind", subcategory: "House Builder", serviceType: "Stworzenie levelu" },
  { title: "Underwater Egyptian Ruin", client: "Freemind", subcategory: "Aquarist", serviceType: "Stworzenie levelu" },
  { title: "Japanese Garden", client: "Freemind", subcategory: "Aquarist", serviceType: "Stworzenie levelu" }
];

const metaverseNames: Array<{
  title: string;
  subcategory: string;
  category?: ProjectCategory;
}> = [
  ...[
    "OmegaPro",
    "HotelFive",
    "Casino",
    "Metaverse Music Rooms",
    "Rock",
    "HipHop",
    "EDM",
    "RnB",
    "Metal",
    "Classic",
    "PulsePop",
    "Zouglou",
    "Country",
    "Latino",
    "Kpop",
    "MainStage",
    "Tunisia",
    "India",
    "PulseGuys",
    "Entoto"
  ].map((title) => ({ title, subcategory: "Worlds / rooms" })),
  ...[
    "CardsMaze",
    "HorrorMaze",
    "IncaMaze",
    "RunnerMaze",
    "GrassMaze",
    "CastleMaze",
    "CheeseMaze",
    "ShipMaze",
    "CandyMaze",
    "OrangeMaze",
    "BackToSchoolMaze",
    "OoredooMaze"
  ].map((title) => ({ title, subcategory: "Mazes" })),
  ...[
    "Treasure Hunter Levels",
    "AmusementPark",
    "TunisiaRamadan",
    "Fantasy",
    "PirateIsland",
    "MafEventDeira",
    "DesertCityOasis"
  ].map((title) => ({ title, subcategory: "Metaverse games" })),
  ...[
    "LastOnes",
    "BouncingCastle",
    "ChocolateFactory",
    "DeathRun",
    "TheUnderworld",
    "TuttiFruity",
    "Lobby",
    "Playground",
    "Heaven",
    "Podium",
    "Candy",
    "Temple",
    "Halloween",
    "Space",
    "Underwater",
    "Neon",
    "Winter",
    "Dynamite"
  ].map((title) => ({ title, subcategory: "Pulse Guys levels" })),
  { title: "Wild Rush — Avatars and Animations", subcategory: "Animation", category: "animation" as const }
];

export const projects: Project[] = [
  ...architectureSeeds.map((seed) =>
    toProject({ ...seed, partner: "YSLAB / RESIMO" }, "architecture", architectureDescriptions(seed.title))
  ),
  ...supportSeeds.map((seed) =>
    toProject({ ...seed, partner: "Partner studios / production teams" }, "support", supportDescriptions(seed.title))
  ),
  ...analysisSeeds.map((seed) =>
    toProject({ ...seed, partner: "Partner studios / production teams" }, "analysis", analysisDescriptions(seed.title))
  ),
  ...gameSeeds.map((seed) =>
    toProject(seed, "gamedev", gamedevDescriptions(seed.title))
  ),
  ...metaverseNames.map((seed) =>
    toProject(
      {
        title: seed.title,
        subcategory: seed.subcategory,
        serviceType: seed.category === "animation" ? "Avatars and animations" : "Metaverse spaces, levels and 3D models",
        isFeatured: ["OmegaPro", "PulseGuys", "Treasure Hunter Levels", "Wild Rush — Avatars and Animations"].includes(seed.title)
      },
      seed.category ?? "metaverse",
      metaverseDescriptions(seed.title)
    )
  )
];

export const largestReferences: LargestReference[] = [
  {
    title: "Zenit",
    client: "Echo",
    descriptionPL: "Wieloetapowa inwestycja mieszkaniowa, około 10 budynków i duże osiedle.",
    descriptionEN: "Multi-stage residential investment, around 10 buildings and a large estate.",
    descriptionDE: "Mehrstufiges Wohnprojekt mit rund 10 Gebäuden und einer großen Anlage.",
    descriptionES: "Inversión residencial de varias etapas, alrededor de 10 edificios y un gran conjunto."
  },
  {
    title: "Jeziorna",
    client: "Murapol",
    descriptionPL: "Duży plan mieszkaniowy, około 30 budynków.",
    descriptionEN: "Large residential plan, around 30 buildings.",
    descriptionDE: "Großer Wohnungsplan mit rund 30 Gebäuden.",
    descriptionES: "Gran plan residencial, alrededor de 30 edificios."
  },
  {
    title: "Fama Jeżyce",
    client: "Monday",
    descriptionPL: "Duże osiedle, około 6 budynków.",
    descriptionEN: "Large estate, around 6 buildings.",
    descriptionDE: "Große Wohnanlage mit rund 6 Gebäuden.",
    descriptionES: "Gran conjunto residencial, alrededor de 6 edificios."
  },
  {
    title: "Ryżowa",
    client: "Dom Development",
    descriptionPL: "Inwestycja mieszkaniowa, około 3 budynków po 200 mieszkań.",
    descriptionEN: "Residential investment, around 3 buildings with 200 apartments each.",
    descriptionDE: "Wohnprojekt mit rund 3 Gebäuden zu je 200 Wohnungen.",
    descriptionES: "Inversión residencial, alrededor de 3 edificios con 200 apartamentos cada uno."
  },
  {
    title: "Anny German / Sady Żoliborz",
    client: "Matexi",
    descriptionPL: "Inwestycja mieszkaniowa, około 2 budynków po 150 mieszkań.",
    descriptionEN: "Residential investment, around 2 buildings with 150 apartments each.",
    descriptionDE: "Wohnprojekt mit rund 2 Gebäuden zu je 150 Wohnungen.",
    descriptionES: "Inversión residencial, alrededor de 2 edificios con 150 apartamentos cada uno."
  },
  {
    title: "Nadgórników",
    client: "Noho Investment",
    descriptionPL: "Duże osiedle z wysoką zabudową.",
    descriptionEN: "Large estate with high-rise development.",
    descriptionDE: "Große Wohnanlage mit hoher Bebauung.",
    descriptionES: "Gran conjunto residencial con edificación alta."
  }
];

export const featuredProjects = projects.filter((project) => project.isFeatured).slice(0, 8);
