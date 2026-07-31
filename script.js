const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const header = document.querySelector("[data-header]");
const navToggle = document.querySelector("[data-nav-toggle]");
const navMenu = document.querySelector("[data-nav-menu]");
let portfolioData = window.SOLVERTO_PORTFOLIO;
const supplementalTranslations = window.SOLVERTO_TRANSLATIONS || {};
const textLanguageSources = new WeakMap();
const attributeLanguageSources = new WeakMap();
let revealObserver = null;

function registerRevealItems(root = document) {
  const items = [];
  if (root instanceof Element && root.matches(".reveal")) items.push(root);
  items.push(...root.querySelectorAll(".reveal"));

  if (reducedMotion.matches || !("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  if (!revealObserver) {
    revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -48px" });
  }

  items.forEach((item) => {
    if (!item.classList.contains("is-visible")) revealObserver.observe(item);
  });
}

const languageOptions = [
  ["en", "English"],
  ["pl", "Polski"],
  ["de", "Deutsch"],
  ["es", "Español"],
  ["pt", "Português"],
  ["it", "Italiano"]
];

const lightboxLabels = {
  en: { close: "Close", previous: "Previous image", next: "Next image", preview: "Image preview", image: "Image" },
  pl: { close: "Zamknij", previous: "Poprzedni obraz", next: "Następny obraz", preview: "Podgląd obrazu", image: "Obraz" },
  de: { close: "Schließen", previous: "Vorheriges Bild", next: "Nächstes Bild", preview: "Bildvorschau", image: "Bild" },
  es: { close: "Cerrar", previous: "Imagen anterior", next: "Imagen siguiente", preview: "Vista previa de imagen", image: "Imagen" },
  pt: { close: "Fechar", previous: "Imagem anterior", next: "Imagem seguinte", preview: "Pré-visualização da imagem", image: "Imagem" },
  it: { close: "Chiudi", previous: "Immagine precedente", next: "Immagine successiva", preview: "Anteprima immagine", image: "Immagine" }
};

const translations = {
  pl: {
    "See more": "Zobacz kolejne",
    "Project catalogue": "Katalog projektów",
    "Projects by production area": "Projekty według działu produkcji",
    "Browse project data from Solverto's architecture, game development, Digital Twin, Metaverse, Solverto Games and production support work.": "Przeglądaj dane projektów Solverto z obszaru architektury, tworzenia gier, Digital Twin, Metaverse, Solverto Games i wsparcia produkcji.",
    "Browse projects": "Przeglądaj projekty",
    "Project data": "Dane projektów",
    "Explore the projects.": "Poznaj projekty.",
    "Search by project, partner, category or production area.": "Szukaj według projektu, partnera, kategorii lub działu produkcji.",
    "Home": "Strona główna", "Game Production": "Produkcja gier", "Realtime 3D": "3D czasu rzeczywistego", "XR & Digital Twin": "XR i cyfrowy bliźniak", "AI & Pipeline": "AI i proces produkcyjny", "Contact": "Kontakt", "Start a project": "Rozpocznij projekt",
    "View portfolio": "Zobacz portfolio", "Explore projects": "Zobacz projekty", "View full portfolio": "Pełne portfolio", "More": "Więcej", "More projects": "Więcej projektów", "Show next 6": "Rozwiń kolejne 6", "Show all projects": "Rozwiń wszystkie", "View examples": "Zobacz przykłady", "Email us": "Napisz e-mail", "Start a conversation": "Rozpocznij rozmowę", "Back to portfolio": "Powrót do portfolio",
    "All": "Wszystkie", "Architecture / Realtime Real Estate": "Architektura Realtime", "Game Development": "Poziomy i Elementy do gier", "Animations / Cinematic / Wideo Editing": "Animacje, Filmy i Trailery", "Search portfolio": "Przeszukaj portfolio",
    "Project facts": "Informacje o projekcie", "Client / Partner": "Klient / Partner", "Role": "Rola", "Scope": "Zakres", "Industry": "Branża", "Technologies": "Technologie", "Year": "Rok", "Challenge": "Wyzwanie", "Solverto contribution": "Wkład Solverto", "Gallery": "Galeria", "Interactive model": "Model interaktywny",
    "Realtime 3D, games, XR simulations and interactive product experiences for business.": "3D czasu rzeczywistego, gry, symulacje XR i interaktywne doświadczenia produktowe dla biznesu.",
    "Game Production & Demo Support": "Produkcja gier i wsparcie wersji demo", "Realtime 3D for Business": "3D czasu rzeczywistego dla biznesu", "XR Training, Simulations & Digital Twin": "Szkolenia XR, symulacje i cyfrowy bliźniak", "AI-Assisted Creative Pipeline & Realtime Production": "Proces kreatywny wspierany przez AI i produkcja realtime", "Portfolio of realtime 3D, architecture, games and metaverse production": "Portfolio produkcji 3D realtime, architektury, gier i metaverse", "Tell us what you want to build.": "Opowiedz nam, co chcesz stworzyć."
  },
  de: {
    "See more": "Weitere anzeigen",
    "Home": "Startseite", "Game Production": "Spieleproduktion", "Realtime 3D": "Echtzeit-3D", "XR & Digital Twin": "XR & Digitaler Zwilling", "AI & Pipeline": "KI & Produktionsprozess", "Portfolio": "Portfolio", "Contact": "Kontakt", "Start a project": "Projekt starten",
    "View portfolio": "Portfolio ansehen", "Explore projects": "Projekte entdecken", "View full portfolio": "Gesamtes Portfolio", "More": "Mehr", "More projects": "Weitere Projekte", "Show next 6": "Weitere 6 anzeigen", "Show all projects": "Alle Projekte anzeigen", "View examples": "Beispiele ansehen", "Email us": "E-Mail senden", "Start a conversation": "Gespräch beginnen", "Back to portfolio": "Zurück zum Portfolio",
    "All": "Alle", "Architecture / Realtime Real Estate": "Architektur / Echtzeit-Immobilien", "Game Development": "Spieleentwicklung", "Metaverse": "Metaverse", "Solverto Games": "Solverto Games", "Animations / Cinematic / Wideo Editing": "Animation / Cinematic / Videoschnitt", "Search portfolio": "Portfolio durchsuchen",
    "Project facts": "Projektdaten", "Client / Partner": "Kunde / Partner", "Role": "Rolle", "Scope": "Umfang", "Industry": "Branche", "Technologies": "Technologien", "Year": "Jahr", "Challenge": "Herausforderung", "Solverto contribution": "Beitrag von Solverto", "Gallery": "Galerie", "Interactive model": "Interaktives Modell",
    "Realtime 3D, games, XR simulations and interactive product experiences for business.": "Echtzeit-3D, Spiele, XR-Simulationen und interaktive Produkterlebnisse für Unternehmen.",
    "Game Production & Demo Support": "Spieleproduktion & Demo-Support", "Realtime 3D for Business": "Echtzeit-3D für Unternehmen", "XR Training, Simulations & Digital Twin": "XR-Training, Simulationen & Digitaler Zwilling", "AI-Assisted Creative Pipeline & Realtime Production": "KI-gestützter Kreativprozess & Echtzeitproduktion", "Portfolio of realtime 3D, architecture, games and metaverse production": "Portfolio für Echtzeit-3D, Architektur, Spiele und Metaverse-Produktion", "Tell us what you want to build.": "Erzählen Sie uns, was Sie entwickeln möchten."
  },
  es: {
    "See more": "Ver más",
    "Home": "Inicio", "Game Production": "Producción de juegos", "Realtime 3D": "3D en tiempo real", "XR & Digital Twin": "XR y gemelo digital", "AI & Pipeline": "IA y proceso de producción", "Portfolio": "Portafolio", "Contact": "Contacto", "Start a project": "Iniciar un proyecto",
    "View portfolio": "Ver portafolio", "Explore projects": "Explorar proyectos", "View full portfolio": "Ver portafolio completo", "More": "Más", "More projects": "Más proyectos", "Show next 6": "Mostrar 6 más", "Show all projects": "Mostrar todos los proyectos", "View examples": "Ver ejemplos", "Email us": "Enviar correo", "Start a conversation": "Iniciar una conversación", "Back to portfolio": "Volver al portafolio",
    "All": "Todos", "Architecture / Realtime Real Estate": "Arquitectura / inmobiliario en tiempo real", "Game Development": "Desarrollo de juegos", "Metaverse": "Metaverso", "Solverto Games": "Solverto Games", "Animations / Cinematic / Wideo Editing": "Animación / Cinematic / Edición de vídeo", "Search portfolio": "Buscar en el portafolio",
    "Project facts": "Datos del proyecto", "Client / Partner": "Cliente / socio", "Role": "Función", "Scope": "Alcance", "Industry": "Sector", "Technologies": "Tecnologías", "Year": "Año", "Challenge": "Desafío", "Solverto contribution": "Contribución de Solverto", "Gallery": "Galería", "Interactive model": "Modelo interactivo",
    "Realtime 3D, games, XR simulations and interactive product experiences for business.": "3D en tiempo real, juegos, simulaciones XR y experiencias interactivas de producto para empresas.",
    "Game Production & Demo Support": "Producción de juegos y soporte de demos", "Realtime 3D for Business": "3D en tiempo real para empresas", "XR Training, Simulations & Digital Twin": "Formación XR, simulaciones y gemelo digital", "AI-Assisted Creative Pipeline & Realtime Production": "Proceso creativo asistido por IA y producción en tiempo real", "Portfolio of realtime 3D, architecture, games and metaverse production": "Portafolio de 3D en tiempo real, arquitectura, juegos y producción metaverso", "Tell us what you want to build.": "Cuéntenos qué quiere crear."
  },
  pt: {
    "See more": "Ver mais",
    "Home": "Início", "Game Production": "Produção de jogos", "Realtime 3D": "3D em tempo real", "XR & Digital Twin": "XR e gémeo digital", "AI & Pipeline": "IA e processo de produção", "Portfolio": "Portfólio", "Contact": "Contacto", "Start a project": "Iniciar um projeto",
    "View portfolio": "Ver portfólio", "Explore projects": "Explorar projetos", "View full portfolio": "Ver portfólio completo", "More": "Mais", "More projects": "Mais projetos", "Show next 6": "Mostrar mais 6", "Show all projects": "Mostrar todos os projetos", "View examples": "Ver exemplos", "Email us": "Enviar e-mail", "Start a conversation": "Iniciar conversa", "Back to portfolio": "Voltar ao portfólio",
    "All": "Todos", "Architecture / Realtime Real Estate": "Arquitetura / imobiliário em tempo real", "Game Development": "Desenvolvimento de jogos", "Metaverse": "Metaverso", "Solverto Games": "Solverto Games", "Animations / Cinematic / Wideo Editing": "Animação / Cinematic / Edição de vídeo", "Search portfolio": "Pesquisar no portfólio",
    "Project facts": "Dados do projeto", "Client / Partner": "Cliente / parceiro", "Role": "Função", "Scope": "Âmbito", "Industry": "Setor", "Technologies": "Tecnologias", "Year": "Ano", "Challenge": "Desafio", "Solverto contribution": "Contribuição da Solverto", "Gallery": "Galeria", "Interactive model": "Modelo interativo",
    "Realtime 3D, games, XR simulations and interactive product experiences for business.": "3D em tempo real, jogos, simulações XR e experiências interativas de produto para empresas.",
    "Game Production & Demo Support": "Produção de jogos e suporte de demos", "Realtime 3D for Business": "3D em tempo real para empresas", "XR Training, Simulations & Digital Twin": "Formação XR, simulações e gémeo digital", "AI-Assisted Creative Pipeline & Realtime Production": "Processo criativo assistido por IA e produção em tempo real", "Portfolio of realtime 3D, architecture, games and metaverse production": "Portfólio de 3D em tempo real, arquitetura, jogos e produção metaverso", "Tell us what you want to build.": "Conte-nos o que pretende criar."
  },
  it: {
    "See more": "Vedi altro",
    "Home": "Home", "Game Production": "Produzione videogiochi", "Realtime 3D": "3D in tempo reale", "XR & Digital Twin": "XR e gemello digitale", "AI & Pipeline": "IA e processo produttivo", "Portfolio": "Portfolio", "Contact": "Contatti", "Start a project": "Avvia un progetto",
    "View portfolio": "Vedi portfolio", "Explore projects": "Esplora i progetti", "View full portfolio": "Portfolio completo", "More": "Altro", "More projects": "Altri progetti", "Show next 6": "Mostra altri 6", "Show all projects": "Mostra tutti i progetti", "View examples": "Vedi esempi", "Email us": "Invia un'e-mail", "Start a conversation": "Inizia una conversazione", "Back to portfolio": "Torna al portfolio",
    "All": "Tutti", "Architecture / Realtime Real Estate": "Architettura / immobiliare in tempo reale", "Game Development": "Sviluppo videogiochi", "Metaverse": "Metaverso", "Solverto Games": "Solverto Games", "Animations / Cinematic / Wideo Editing": "Animazione / Cinematic / Montaggio video", "Search portfolio": "Cerca nel portfolio",
    "Project facts": "Dati del progetto", "Client / Partner": "Cliente / partner", "Role": "Ruolo", "Scope": "Ambito", "Industry": "Settore", "Technologies": "Tecnologie", "Year": "Anno", "Challenge": "Sfida", "Solverto contribution": "Contributo di Solverto", "Gallery": "Galleria", "Interactive model": "Modello interattivo",
    "Realtime 3D, games, XR simulations and interactive product experiences for business.": "3D in tempo reale, videogiochi, simulazioni XR ed esperienze interattive di prodotto per le aziende.",
    "Game Production & Demo Support": "Produzione videogiochi e supporto demo", "Realtime 3D for Business": "3D in tempo reale per le aziende", "XR Training, Simulations & Digital Twin": "Formazione XR, simulazioni e gemello digitale", "AI-Assisted Creative Pipeline & Realtime Production": "Processo creativo assistito dall'IA e produzione in tempo reale", "Portfolio of realtime 3D, architecture, games and metaverse production": "Portfolio di 3D in tempo reale, architettura, videogiochi e produzione metaverso", "Tell us what you want to build.": "Raccontaci cosa vuoi realizzare."
  }
};

const translationCorrections = {
  pl: {
    "About": "O nas",
    "Privacy policy": "Polityka prywatności",
    "Creative technology for business and game studios": "Technologie Kreatywne dla Biznesu i studiów gier",
    "Demo rescue": "Wsparcie wersji demo",
    "Explore": "Poznaj",
    "Selected work": "Realizacje",
    "Examples from every production area": "Przykłady realizacji z każdego działu",
    "Representative Solverto realizations across architecture, game development, Digital Twin, Metaverse, Solverto Games and production support.": "Reprezentatywne realizacje Solverto z obszaru architektury, tworzenia gier, Digital Twin, Metaverse, Solverto Games oraz wsparcia produkcji.",
    "Digital Twin": "Wirtualny bliźniak",
    "Maze": "Labirynty Metaverse",
    "Music Room": "Pokoje Metaverse",
    "Pulse Guys": "Poziomy do gry Pulse Guys",
    "Treasure Hunter": "Poziomy do Treasure Hunter Metaverse",
    "Solverto Games": "Elementy do gier Solverto Games",
    "Music Room / Metaverse": "Pokój muzyczny / Metaverse",
    "Treasure Hunter / Metaverse Game Area": "Treasure Hunter / obszar gry Metaverse",
    "Hotel Five": "Hotel Five",
    "India Music Room": "India — pokój muzyczny",
    "Maf Event Deira": "Maf Event Deira",
    "Avatars - Optimization": "Avatary - Optymalizacja",
    "Solverto home": "Strona główna Solverto",
    "Copy email address": "Skopiuj adres e-mail",
    "Email address copied.": "Adres e-mail został skopiowany.",
    "Open the offer": "Zobacz ofertę",
    "Offer": "Oferta",
    "Choose the production area.": "Wybierz obszar produkcji.",
    "Click an image to see the areas Solverto can support.": "Kliknij obraz, aby zobaczyć obszary, w których Solverto może pomóc.",
    "Product prototypes": "Prototypy produktów",
    "Images from selected realisations": "Obrazy wybranych realizacji",
    "Examples from the portfolio that connect the offer to delivered work.": "Przykłady z portfolio łączące ofertę z wykonanymi realizacjami.",
    "Realtime architecture, residential investments and large-scale 3D modelling.": "Architektura realtime, inwestycje mieszkaniowe i wielkoskalowe modelowanie 3D.",
    "Game levels, environments and practical production support for playable content.": "Poziomy gier, środowiska i praktyczne wsparcie produkcji grywalnych treści.",
    "Interactive digital twins, realtime locations and operational visualizations.": "Interaktywne cyfrowe bliźniaki, lokalizacje realtime i wizualizacje operacyjne.",
    "Metaverse environments, mazes and game-ready interactive spaces.": "Środowiska Metaverse, labirynty i interaktywne przestrzenie gotowe do wykorzystania w grach.",
    "Animations, films, trailers and visual production support.": "Animacje, filmy, trailery i wsparcie produkcji wizualnej.",
    "Interactive product configurators, realtime showrooms and prototype experiences.": "Interaktywne konfiguratory produktów, showroomy realtime i doświadczenia prototypowe.",
    "Original games, mini-games and reusable game production assets.": "Autorskie gry, minigry i wielokrotnego użytku elementy produkcji gier.",
    "Over 50 projects completed in Poland and around the world.": "Wykonano ponad 50 projektów z Polski i z całego świata."
  },
  es: {
    "Privacy policy": "Política de privacidad",
    "Creative technology for business and game studios": "Tecnología creativa para empresas y estudios de videojuegos",
    "Demo rescue": "Recuperación de demos",
    "Copy email address": "Copiar dirección de correo",
    "Email address copied.": "Dirección de correo copiada.",
    "Over 50 projects completed in Poland and around the world.": "Se realizaron más de 50 proyectos en Polonia y en todo el mundo."
  },
  pt: {
    "Privacy policy": "Política de privacidade",
    "Creative technology for business and game studios": "Tecnologia criativa para empresas e estúdios de jogos",
    "Demo rescue": "Recuperação de demos",
    "Copy email address": "Copiar endereço de e-mail",
    "Email address copied.": "Endereço de e-mail copiado.",
    "Over 50 projects completed in Poland and around the world.": "Foram concluídos mais de 50 projetos na Polónia e em todo o mundo."
  },
  it: {
    "Privacy policy": "Informativa sulla privacy",
    "Creative technology for business and game studios": "Tecnologia creativa per aziende e studi di videogiochi",
    "Demo rescue": "Recupero demo",
    "Copy email address": "Copia indirizzo e-mail",
    "Email address copied.": "Indirizzo e-mail copiato.",
    "Over 50 projects completed in Poland and around the world.": "Sono stati completati più di 50 progetti in Polonia e nel mondo."
  }
};

translationCorrections.de ||= {};
translationCorrections.de["Privacy policy"] = "Datenschutzerklärung";
translationCorrections.de["Copy email address"] = "E-Mail-Adresse kopieren";
translationCorrections.de["Email address copied."] = "E-Mail-Adresse kopiert.";
translationCorrections.de["Over 50 projects completed in Poland and around the world."] = "In Polen und weltweit wurden mehr als 50 Projekte realisiert.";

Object.entries(translationCorrections).forEach(([language, entries]) => {
  supplementalTranslations[language] ||= {};
  Object.assign(supplementalTranslations[language], entries);
});

function storedLanguage() {
  try {
    const value = localStorage.getItem("solverto-language");
    return languageOptions.some(([code]) => code === value) ? value : "en";
  } catch {
    return "en";
  }
}

let selectedLanguage = storedLanguage();

function translatedText(source, language = selectedLanguage) {
  return language === "en"
    ? source
    : translations[language]?.[source] || supplementalTranslations[language]?.[source] || translateDynamicText(source, language);
}

function translateDynamicText(source, language) {
  const phraseReplacements = {
    pl: {
      " / YSLAB/RESIMO cooperation": " / współpraca z YSLAB/RESIMO", " / partner cooperation": " / współpraca partnerska", " / project involvement": " / udział w projekcie", "Partner studio cooperation": "Współpraca ze studiem partnerskim", "Project involvement": "Udział w projekcie",
      "metaverse maze environment for ": "środowisko labiryntu metaverse: ", "metaverse game area for ": "obszar gry metaverse: ", "metaverse environment for ": "środowisko metaverse: ", "Pulse Guys level for ": "poziom Pulse Guys: ", " level for ": " — poziom dla ", " mini-game collection": " — kolekcja minigier", " mini-game": " — minigra", " game": " — gra",
      " avatars and animations": " — awatary i animacje", " sci-fi horror environment": " — środowisko horroru science fiction", " sci-fi horror scene": " — scena horroru science fiction", " residential estate realtime 3D model": " — model 3D osiedla w czasie rzeczywistym", " large residential masterplan": " — rozległy plan osiedla", " level environment": " — środowisko poziomu", "metaverse music room environment": "środowisko pokoju muzycznego metaverse", " arcade mini-game collection": " — kolekcja minigier zręcznościowych", " residential masterplan": " — plan osiedla", " estate model": " — model osiedla", " residential buildings": " — budynki mieszkalne", " architecture model": " — model architektoniczny", " residential towers": " — wieże mieszkalne"
    },
    de: {
      " / YSLAB/RESIMO cooperation": " / Zusammenarbeit mit YSLAB/RESIMO", " / partner cooperation": " / Partnerkooperation", " / project involvement": " / Projektbeteiligung", "Partner studio cooperation": "Zusammenarbeit mit Partnerstudio", "Project involvement": "Projektbeteiligung",
      "metaverse maze environment for ": "Metaverse-Labyrinthumgebung: ", "metaverse game area for ": "Metaverse-Spielbereich: ", "metaverse environment for ": "Metaverse-Umgebung: ", "Pulse Guys level for ": "Pulse-Guys-Level: ", " level for ": " – Level für ", " mini-game collection": " – Minispielsammlung", " mini-game": " – Minispiel", " game": " – Spiel",
      " avatars and animations": " – Avatare und Animationen", " sci-fi horror environment": " – Sci-Fi-Horror-Umgebung", " sci-fi horror scene": " – Sci-Fi-Horror-Szene", " residential estate realtime 3D model": " – Echtzeit-3D-Modell der Wohnanlage", " large residential masterplan": " – großer Wohn-Masterplan", " level environment": " – Level-Umgebung", "metaverse music room environment": "Metaverse-Musikraumumgebung", " arcade mini-game collection": " – Arcade-Minispielsammlung", " residential masterplan": " – Wohn-Masterplan", " estate model": " – Wohnanlagenmodell", " residential buildings": " – Wohngebäude", " architecture model": " – Architekturmodell", " residential towers": " – Wohntürme"
    },
    es: {
      " / YSLAB/RESIMO cooperation": " / colaboración con YSLAB/RESIMO", " / partner cooperation": " / colaboración con socios", " / project involvement": " / participación en el proyecto", "Partner studio cooperation": "Colaboración con un estudio asociado", "Project involvement": "Participación en el proyecto",
      "metaverse maze environment for ": "entorno de laberinto del metaverso: ", "metaverse game area for ": "zona de juego del metaverso: ", "metaverse environment for ": "entorno del metaverso: ", "Pulse Guys level for ": "nivel de Pulse Guys: ", " level for ": " — nivel para ", " mini-game collection": " — colección de minijuegos", " mini-game": " — minijuego", " game": " — juego",
      " avatars and animations": " — avatares y animaciones", " sci-fi horror environment": " — entorno de terror y ciencia ficción", " sci-fi horror scene": " — escena de terror y ciencia ficción", " residential estate realtime 3D model": " — modelo 3D en tiempo real del complejo residencial", " large residential masterplan": " — gran plan maestro residencial", " level environment": " — entorno de nivel", "metaverse music room environment": "entorno de sala musical del metaverso", " arcade mini-game collection": " — colección de minijuegos arcade", " residential masterplan": " — plan maestro residencial", " estate model": " — modelo del complejo", " residential buildings": " — edificios residenciales", " architecture model": " — modelo arquitectónico", " residential towers": " — torres residenciales"
    },
    pt: {
      " / YSLAB/RESIMO cooperation": " / colaboração com YSLAB/RESIMO", " / partner cooperation": " / colaboração com parceiros", " / project involvement": " / participação no projeto", "Partner studio cooperation": "Colaboração com estúdio parceiro", "Project involvement": "Participação no projeto",
      "metaverse maze environment for ": "ambiente de labirinto do metaverso: ", "metaverse game area for ": "área de jogo do metaverso: ", "metaverse environment for ": "ambiente do metaverso: ", "Pulse Guys level for ": "nível Pulse Guys: ", " level for ": " — nível para ", " mini-game collection": " — coleção de minijogos", " mini-game": " — minijogo", " game": " — jogo",
      " avatars and animations": " — avatares e animações", " sci-fi horror environment": " — ambiente de terror e ficção científica", " sci-fi horror scene": " — cena de terror e ficção científica", " residential estate realtime 3D model": " — modelo 3D em tempo real do empreendimento residencial", " large residential masterplan": " — grande plano diretor residencial", " level environment": " — ambiente de nível", "metaverse music room environment": "ambiente de sala de música do metaverso", " arcade mini-game collection": " — coleção de minijogos arcade", " residential masterplan": " — plano diretor residencial", " estate model": " — modelo do empreendimento", " residential buildings": " — edifícios residenciais", " architecture model": " — modelo arquitetónico", " residential towers": " — torres residenciais"
    },
    it: {
      " / YSLAB/RESIMO cooperation": " / collaborazione con YSLAB/RESIMO", " / partner cooperation": " / collaborazione con partner", " / project involvement": " / partecipazione al progetto", "Partner studio cooperation": "Collaborazione con studio partner", "Project involvement": "Partecipazione al progetto",
      "metaverse maze environment for ": "ambiente labirinto metaverso: ", "metaverse game area for ": "area di gioco metaverso: ", "metaverse environment for ": "ambiente metaverso: ", "Pulse Guys level for ": "livello Pulse Guys: ", " level for ": " — livello per ", " mini-game collection": " — raccolta di minigiochi", " mini-game": " — minigioco", " game": " — gioco",
      " avatars and animations": " — avatar e animazioni", " sci-fi horror environment": " — ambiente horror fantascientifico", " sci-fi horror scene": " — scena horror fantascientifica", " residential estate realtime 3D model": " — modello 3D in tempo reale del complesso residenziale", " large residential masterplan": " — grande masterplan residenziale", " level environment": " — ambiente del livello", "metaverse music room environment": "ambiente della sala musicale del metaverso", " arcade mini-game collection": " — raccolta di minigiochi arcade", " residential masterplan": " — masterplan residenziale", " estate model": " — modello del complesso", " residential buildings": " — edifici residenziali", " architecture model": " — modello architettonico", " residential towers": " — torri residenziali"
    }
  };
  const replacePhrases = (value) => Object.entries(phraseReplacements[language] || {})
    .sort(([left], [right]) => right.length - left.length)
    .reduce((result, [english, localized]) => result.replaceAll(english, localized), value);
  const placeholderPrefixes = {
    pl: { "Project thumbnail": "Miniatura projektu", "Featured project visual": "Wizualizacja wyróżnionego projektu", "Project hero": "Główna wizualizacja projektu", "Project hero image": "Główna wizualizacja projektu", "Hero image": "Grafika główna", "Hero visual": "Grafika główna", "Service visual": "Wizualizacja usługi", "Gallery image": "Zdjęcie w galerii", "Gallery": "Galeria", "Process image": "Grafika procesu" },
    de: { "Project thumbnail": "Projektvorschaubild", "Featured project visual": "Visual des hervorgehobenen Projekts", "Project hero": "Projekt-Hauptvisual", "Project hero image": "Projekt-Hauptbild", "Hero image": "Titelbild", "Hero visual": "Titelvisual", "Service visual": "Service-Visual", "Gallery image": "Galeriebild", "Gallery": "Galerie", "Process image": "Prozessbild" },
    es: { "Project thumbnail": "Miniatura del proyecto", "Featured project visual": "Imagen del proyecto destacado", "Project hero": "Imagen principal del proyecto", "Project hero image": "Imagen principal del proyecto", "Hero image": "Imagen principal", "Hero visual": "Imagen principal", "Service visual": "Imagen del servicio", "Gallery image": "Imagen de la galería", "Gallery": "Galería", "Process image": "Imagen del proceso" },
    pt: { "Project thumbnail": "Miniatura do projeto", "Featured project visual": "Imagem do projeto em destaque", "Project hero": "Imagem principal do projeto", "Project hero image": "Imagem principal do projeto", "Hero image": "Imagem principal", "Hero visual": "Imagem principal", "Service visual": "Imagem do serviço", "Gallery image": "Imagem da galeria", "Gallery": "Galeria", "Process image": "Imagem do processo" },
    it: { "Project thumbnail": "Miniatura del progetto", "Featured project visual": "Visual del progetto in evidenza", "Project hero": "Visual principale del progetto", "Project hero image": "Immagine principale del progetto", "Hero image": "Immagine principale", "Hero visual": "Visual principale", "Service visual": "Visual del servizio", "Gallery image": "Immagine della galleria", "Gallery": "Galleria", "Process image": "Immagine del processo" }
  };
  const placeholder = source.match(/^\[([^:]+):\s*(.+)]$/);
  if (placeholder) {
    const prefix = placeholderPrefixes[language]?.[placeholder[1]];
    if (prefix) return `[${prefix}: ${replacePhrases(translatedText(placeholder[2], language))}]`;
  }
  const portfolioTitle = source.match(/^(.+) — Solverto Portfolio$/);
  if (portfolioTitle) {
    const suffixes = { pl: "Portfolio Solverto", de: "Solverto-Portfolio", es: "Portafolio de Solverto", pt: "Portfólio da Solverto", it: "Portfolio Solverto" };
    return `${portfolioTitle[1]} — ${suffixes[language] || "Solverto Portfolio"}`;
  }
  const describedProject = source.match(/^([^:]+): (.+)$/);
  if (describedProject) return `${describedProject[1]}: ${translatedText(describedProject[2], language)}`;
  return replacePhrases(source);
}

function translatedTemplate(source, values) {
  let result = translatedText(source);
  Object.entries(values).forEach(([key, value]) => {
    const exactToken = `{${key}}`;
    if (result.includes(exactToken)) result = result.replaceAll(exactToken, value);
    else result = result.replace(/\{[^}]+\}/, value);
  });
  return result;
}

function projectCountLabel(count) {
  const labels = {
    en: count === 1 ? "project" : "projects",
    pl: count === 1 ? "projekt" : "projektów",
    de: count === 1 ? "Projekt" : "Projekte",
    es: count === 1 ? "proyecto" : "proyectos",
    pt: count === 1 ? "projeto" : "projetos",
    it: count === 1 ? "progetto" : "progetti"
  };
  return `${count} ${labels[selectedLanguage]}`;
}

function portfolioCountLabel(shown, total) {
  return shown < total ? `${shown} / ${projectCountLabel(total)}` : projectCountLabel(total);
}

function addLanguageSelector() {
  if (!navMenu) return;

  navMenu.querySelectorAll(".nav-cta").forEach((button) => button.remove());
  let companyLink = navMenu.querySelector("[data-company-link]");
  if (!companyLink) {
    companyLink = document.createElement("a");
    companyLink.dataset.companyLink = "";
    companyLink.textContent = "Company";
  }
  companyLink.href = "company.html";
  const homeLink = navMenu.querySelector('a[href="index.html"]');
  if (homeLink && homeLink.nextElementSibling !== companyLink) homeLink.after(companyLink);
  const portfolioLink = navMenu.querySelector('a[href="portfolio.html"], [data-home-panel-trigger="portfolio"]');
  if (!companyLink.isConnected && portfolioLink) portfolioLink.before(companyLink);
  else if (!companyLink.isConnected) navMenu.prepend(companyLink);
  if (portfolioLink) {
    portfolioLink.textContent = "Realizacje";
    portfolioLink.href = "portfolio.html";
  }
  if (navMenu.querySelector("[data-language-select]")) return;

  const control = document.createElement("label");
  control.className = "language-control";
  control.innerHTML = `<span class="visually-hidden">Language</span><select data-language-select aria-label="Language">${languageOptions.map(([code, label]) => `<option value="${code}">${label}</option>`).join("")}</select>`;
  navMenu.append(control);

  const select = control.querySelector("select");
  select.value = selectedLanguage;
  select.addEventListener("change", () => {
    selectedLanguage = select.value;
    try { localStorage.setItem("solverto-language", selectedLanguage); } catch { /* Storage may be unavailable in private contexts. */ }
    applyLanguage();
  });
}

function applyLanguage() {
  document.documentElement.lang = document.documentElement.dataset.pageLanguage || selectedLanguage;
  const root = document.body;
  if (root) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        const parent = node.parentElement;
        if (!parent || parent.closest("script, style, noscript, [data-no-translate]")) return NodeFilter.FILTER_REJECT;
        return node.nodeValue.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    });
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach((node) => {
      const current = node.nodeValue;
      const leading = current.match(/^\s*/)?.[0] || "";
      const trailing = current.match(/\s*$/)?.[0] || "";
      const source = textLanguageSources.get(node) || current.trim();
      textLanguageSources.set(node, source);
      node.nodeValue = `${leading}${translatedText(source)}${trailing}`;
    });
  }

  document.querySelectorAll("[placeholder], [aria-label], [title], [alt]").forEach((element) => {
    const sources = attributeLanguageSources.get(element) || {};
    ["placeholder", "aria-label", "title", "alt"].forEach((attribute) => {
      if (!element.hasAttribute(attribute)) return;
      sources[attribute] ||= element.getAttribute(attribute);
      element.setAttribute(attribute, translatedText(sources[attribute]));
    });
    attributeLanguageSources.set(element, sources);
  });

  const title = document.querySelector("title");
  if (title) {
    const source = title.dataset.languageSource || title.textContent.trim();
    title.dataset.languageSource = source;
    title.textContent = translatedText(source);
  }
  document.querySelectorAll('meta[name="description"], meta[property="og:title"], meta[property="og:description"]').forEach((meta) => {
    const source = meta.dataset.languageSource || meta.getAttribute("content");
    meta.dataset.languageSource = source;
    meta.setAttribute("content", translatedText(source));
  });

  const search = document.querySelector("[data-portfolio-search]");
  if (search) search.placeholder = translatedText(search.dataset.searchPlaceholder || "Project, client or category");
  const count = document.querySelector("[data-portfolio-count]");
  if (count?.dataset.projectCount) {
    const total = Number(count.dataset.projectCount);
    const shown = Number(count.dataset.projectVisible || total);
    count.textContent = portfolioCountLabel(shown, total);
  }
  document.querySelectorAll("[data-department-more]").forEach((button) => {
    button.textContent = `${translatedText("See more")} (${button.dataset.projectCount || 0})`;
  });
  document.documentElement.dataset.languageReady = "";
}

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function projectUrl(project) {
  return `project-template.html?project=${encodeURIComponent(project.id)}`;
}

function projectImagePath(project, index = 1) {
  if (!project?.assetFolder) return "";
  return `${project.assetFolder}/gallery-${String(index).padStart(2, "0")}.${project.assetExtension || "webp"}`;
}

function projectMediaMarkup(project, index = 1, options = {}) {
  const source = projectImagePath(project, index);
  const extraClass = options.className ? ` ${escapeHtml(options.className)}` : "";
  if (!source) {
    return `<div class="media-placeholder${extraClass}" role="img">${escapeHtml(options.placeholder || project.placeholder)}</div>`;
  }

  const loading = options.loading || "lazy";
  const alt = options.altText || `${project.name} — Solverto portfolio image ${index}`;
  return `<div class="media-placeholder media-image-frame${extraClass}" data-no-lightbox><img src="${escapeHtml(source)}" alt="${escapeHtml(alt)}" loading="${escapeHtml(loading)}" decoding="async" /></div>`;
}

function projectCardMarkup(project, headingLevel = 3, options = {}) {
  const partner = project.partner || "Solverto project";
  const projectGroup = options.groupId || project.groupId || "";
  return `
    <article class="project-card reveal" data-project-card data-project-category="${escapeHtml(project.filter || "")}" data-project-group="${escapeHtml(projectGroup)}" data-project-search="${escapeHtml(`${project.name} ${project.category} ${partner} ${project.role} ${project.country}`.toLowerCase())}">
      ${projectMediaMarkup(project)}
      <div class="project-card-body">
        <p class="project-badge">${escapeHtml(project.category)}</p>
        <h${headingLevel}>${escapeHtml(project.name)}</h${headingLevel}>
        <p class="project-meta"><span>Client / Partner</span>${escapeHtml(partner)}${project.country ? ` · ${escapeHtml(project.country)}` : ""}</p>
        <p class="project-meta"><span>Role</span>${escapeHtml(project.role)}</p>
        <p>${escapeHtml(project.description || "Production support within a realtime 3D or interactive project workflow.")}</p>
        <a class="button button-secondary button-small" href="${projectUrl(project)}">More</a>
      </div>
    </article>`;
}

function displayProjectsForGroup(group) {
  if (!group) return [];
  if (group.visibleAssetFolders?.length) {
    return group.projects.filter((project) => group.visibleAssetFolders.includes(project.assetFolder));
  }
  return group.showOnlyWithAssets ? group.projects.filter((project) => project.assetFolder) : group.projects;
}

function departmentCardMarkup(project, headingLevel = 3) {
  const title = project.departmentTitle || project.category;
  const departmentId = project.departmentId || project.filter || "all";
  const department = portfolioData.groups.find((group) => group.id === departmentId);
  const projectCount = displayProjectsForGroup(department).length;
  const href = `projects.html?department=${encodeURIComponent(departmentId)}`;
  const placeholder = `[Project thumbnail: ${title}]`;
  return `
    <article class="project-card department-card reveal">
      ${projectMediaMarkup(project, 1, { altText: `${title} — Solverto project image`, placeholder })}
      <div class="project-card-body">
        <h${headingLevel}>${escapeHtml(title)}</h${headingLevel}>
        <a class="button button-secondary button-small" data-department-more data-project-count="${projectCount}" href="${href}">${escapeHtml(`${translatedText("See more")} (${projectCount})`)}</a>
      </div>
    </article>`;
}

function renderProjectPageHero(group, root = document) {
  const hero = root.querySelector("[data-project-page-hero]");
  if (!hero) return;

  const source = group?.heroImage || "assets/hero-offer-collage.png";
  const alt = group?.title || "Solverto production areas and project data";
  hero.classList.add("media-image-frame");
  hero.dataset.noLightbox = "";
  hero.removeAttribute("role");
  hero.innerHTML = '<img src="' + escapeHtml(source) + '" alt="' + escapeHtml(alt) + '" loading="eager" decoding="async" />';
}

function renderFeaturedProjects(root = document) {
  const container = root.querySelector("[data-featured-projects]");
  if (!container || !portfolioData) return;
  container.innerHTML = portfolioData.featured.map((project) => projectCardMarkup(project)).join("");
}

function renderHomeOfferPanel(root = document) {
  const grid = root.querySelector("[data-home-offer-grid]");
  if (!grid || !portfolioData) return;

  const groups = new Map(portfolioData.groups.map((group) => [group.id, group]));
  const offerCards = [
    { groupId: "architecture", description: "Realtime architecture, residential investments and large-scale 3D modelling." },
    { groupId: "game-development", description: "Game levels, environments and practical production support for playable content." },
    { groupId: "digital-twin", description: "Interactive digital twins, realtime locations and operational visualizations." },
    { groupId: "metaverse-mazes", description: "Metaverse environments, mazes and game-ready interactive spaces." },
    { groupId: "support", description: "Animations, films, trailers and visual production support." },
    { id: "product-prototypes", title: "Product prototypes", image: "assets/herovisual.png", href: "realtime-3d.html", description: "Interactive product configurators, realtime showrooms and prototype experiences." },
    { groupId: "solverto-games", description: "Original games, mini-games and reusable game production assets." }
  ];

  grid.innerHTML = offerCards.map((card) => {
    const group = card.groupId ? groups.get(card.groupId) : null;
    const title = card.title || group?.title || "Offer";
    const image = card.image || group?.heroImage || "assets/hero-offer-collage.png";
    const href = card.href || `projects.html?department=${encodeURIComponent(card.groupId)}`;
    return `
      <article class="offer-card reveal">
        <div class="offer-card-media"><img src="${escapeHtml(image)}" alt="${escapeHtml(title)}" loading="lazy" decoding="async" /></div>
        <div class="offer-card-body">
          <h3>${escapeHtml(title)}</h3>
          <p>${escapeHtml(card.description)}</p>
          <a class="button button-secondary button-small" href="${escapeHtml(href)}">View examples</a>
        </div>
      </article>`;
  }).join("");

  const realizationGrid = root.querySelector("[data-home-realization-grid]");
  if (!realizationGrid) return;
  const realizationProjects = portfolioData.largeScale.filter((project) => project.assetFolder);
  realizationGrid.innerHTML = realizationProjects.map((project) => `
    <article class="offer-realization-card reveal">
      ${projectMediaMarkup(project, 1, { altText: `${project.name} — selected realisation image` })}
      <div class="offer-realization-card-body">
        <h4>${escapeHtml(project.name)}</h4>
        <p>${escapeHtml(project.departmentTitle || project.category)}</p>
      </div>
    </article>`).join("");
}

function renderPortfolio(root = document, pageUrl = window.location.href) {
  if (!portfolioData) return;

  const largeScaleContainer = root.querySelector("[data-large-scale-projects]");
  if (largeScaleContainer) {
    largeScaleContainer.innerHTML = portfolioData.largeScale.map((project) => departmentCardMarkup(project)).join("");
  }

  const groupsContainer = root.querySelector("[data-portfolio-groups]");
  if (!groupsContainer) return;

  const queryParams = new URL(pageUrl, window.location.href).searchParams;
  let activeFilter = queryParams.get("category") || "all";
  let activeDepartment = queryParams.get("department") || "";
  const activeDepartmentGroup = portfolioData.groups.find((group) => group.id === activeDepartment);
  const groupsToRender = activeDepartmentGroup ? [activeDepartmentGroup] : portfolioData.groups;
  renderProjectPageHero(activeDepartmentGroup, root);

  groupsContainer.innerHTML = groupsToRender.map((group) => `
    <section class="portfolio-group" id="${escapeHtml(group.id)}" data-portfolio-group data-group-category="${escapeHtml(group.filter)}">
      <div class="portfolio-group-heading reveal">
        <p class="eyebrow">${escapeHtml(group.subtitle || group.title)}</p>
        <h3>${escapeHtml(group.title)}</h3>
        ${group.intro ? `<p>${escapeHtml(group.intro)}</p>` : ""}
      </div>
      <div class="portfolio-grid">${displayProjectsForGroup(group).map((project) => projectCardMarkup(project, 4, { groupId: group.id })).join("")}</div>
    </section>
  `).join("");

  const searchInput = root.querySelector("[data-portfolio-search]");
  const countOutput = root.querySelector("[data-portfolio-count]");
  const filterButtons = [...root.querySelectorAll("[data-filter]")];
  const pagination = root.querySelector("[data-portfolio-pagination]");
  const moreButton = root.querySelector("[data-portfolio-more]");
  const allButton = root.querySelector("[data-portfolio-all]");
  let projectLimit = 6;

  const initialFilterButton = filterButtons.find((button) => button.dataset.filter === activeFilter);
  if (!initialFilterButton) activeFilter = "all";
  if (activeDepartment) {
    const pageTitle = root.querySelector("[data-project-page-title]");
    const pageIntro = root.querySelector("[data-project-page-intro]");
    if (activeDepartmentGroup) {
      if (pageTitle) pageTitle.textContent = activeDepartmentGroup.title;
      if (pageIntro) pageIntro.textContent = activeDepartmentGroup.intro || `Project data from the ${activeDepartmentGroup.title} production area.`;
    }
  }
  filterButtons.forEach((button) => {
    const active = !activeDepartment && button.dataset.filter === activeFilter;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  function updatePortfolio() {
    const query = (searchInput?.value || "").trim().toLowerCase();
    const cards = [...groupsContainer.querySelectorAll("[data-project-card]")];
    const matchingCards = cards.filter((card) => {
      const matchesDepartment = !activeDepartment || card.dataset.projectGroup === activeDepartment;
      const matchesFilter = activeDepartment || activeFilter === "all" || card.dataset.projectCategory === activeFilter;
      const matchesSearch = !query || card.dataset.projectSearch.includes(query);
      return matchesDepartment && matchesFilter && matchesSearch;
    });
    const shownCards = projectLimit === Infinity ? matchingCards : matchingCards.slice(0, projectLimit);

    cards.forEach((card) => {
      card.hidden = !shownCards.includes(card);
    });

    root.querySelectorAll("[data-portfolio-group]").forEach((group) => {
      group.hidden = !group.querySelector("[data-project-card]:not([hidden])");
    });

    if (countOutput) {
      countOutput.dataset.projectCount = String(matchingCards.length);
      countOutput.dataset.projectVisible = String(shownCards.length);
      countOutput.textContent = portfolioCountLabel(shownCards.length, matchingCards.length);
    }

    if (pagination) {
      const remainingProjects = Math.max(0, matchingCards.length - shownCards.length);
      const hasMore = remainingProjects > 0;
      pagination.hidden = !hasMore;
      if (moreButton) {
        moreButton.hidden = !hasMore || projectLimit === Infinity;
        if (!moreButton.hidden) {
          const nextCount = Math.min(6, remainingProjects);
          moreButton.textContent = translatedText("Show next 6").replace(/\b6\b/, String(nextCount));
        }
      }
      if (allButton) allButton.hidden = !hasMore || projectLimit === Infinity;
    }
  }

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      activeFilter = button.dataset.filter;
      activeDepartment = "";
      filterButtons.forEach((item) => {
        const active = item === button;
        item.classList.toggle("is-active", active);
        item.setAttribute("aria-pressed", String(active));
      });
      projectLimit = 6;
      updatePortfolio();
    });
  });

  searchInput?.addEventListener("input", () => {
    projectLimit = 6;
    updatePortfolio();
  });
  moreButton?.addEventListener("click", () => {
    projectLimit = projectLimit === Infinity ? Infinity : projectLimit + 6;
    updatePortfolio();
  });
  allButton?.addEventListener("click", () => {
    projectLimit = Infinity;
    updatePortfolio();
  });
  updatePortfolio();
}

function allPortfolioProjects() {
  if (!portfolioData) return [];
  return [
    ...portfolioData.featured,
    ...portfolioData.largeScale,
    ...portfolioData.groups.flatMap((group) => group.projects)
  ];
}

function detailCopy(project) {
  const category = project.category.toLowerCase();
  if (category.includes("architecture") || category.includes("real estate")) {
    return {
      challenge: "Realtime architecture production requires technically consistent 3D assets, careful preparation and clear coordination with the source documentation. The exact confidential requirements of this project are not disclosed.",
      contribution: `Solverto's documented contribution covered ${project.role.toLowerCase()}. The work was delivered as realtime architecture or 3D modelling support within the stated partner workflow.`
    };
  }
  if (category.includes("digital twin")) {
    return {
      challenge: "Digital Twin environments need clear spatial structure, efficient realtime assets and a visual language that supports interactive exploration. Project-specific confidential constraints are not disclosed.",
      contribution: `Solverto's documented contribution covered ${project.role.toLowerCase()}, including realtime environment production support for this Digital Twin project.`
    };
  }
  if (category.includes("metaverse")) {
    return {
      challenge: "Metaverse spaces need recognizable visual themes, efficient realtime geometry and environments that support navigation or gameplay. Project-specific confidential constraints are not disclosed.",
      contribution: `Solverto's documented contribution covered ${project.role.toLowerCase()}, including 3D production support appropriate to this type of interactive environment.`
    };
  }
  if (category.includes("game")) {
    return {
      challenge: "Game production connects visual quality, level readability and technical performance with the intended player experience. The page does not disclose confidential production details.",
      contribution: `Solverto's documented contribution covered ${project.role.toLowerCase()}, based only on the available project information.`
    };
  }
  return {
    challenge: "The assignment required focused production support within an existing 3D workflow. Confidential project details and unapproved materials are not presented here.",
    contribution: `Solverto's documented contribution covered ${project.role.toLowerCase()}, based only on the available project information.`
  };
}

function renderProjectDetail(root = document, pageUrl = window.location.href) {
  const detailRoot = root === document ? document.querySelector("[data-project-detail]") : root;
  if (!detailRoot || !portfolioData) return;

  const projectId = new URL(pageUrl, window.location.href).searchParams.get("project");
  const project = allPortfolioProjects().find((item) => item.id === projectId) || portfolioData.featured[0];
  const copy = detailCopy(project);
  const setText = (selector, value) => {
    const element = detailRoot.querySelector(selector);
    if (element) element.textContent = value;
  };

  if (root === document) {
    document.title = `${project.name} — Solverto Portfolio`;
    document.querySelector('meta[name="description"]')?.setAttribute("content", `${project.name}: ${project.description}`);
  }
  setText("[data-detail-category]", project.category);
  setText("[data-detail-name]", project.name);
  setText("[data-detail-intro]", project.description);
  const detailHero = detailRoot.querySelector("[data-detail-hero]");
  if (detailHero) {
    const projectGroup = portfolioData.groups.find((group) => group.id === project.departmentId);
    const source = projectImagePath(project) || projectGroup?.heroImage || "assets/hero-offer-collage.png";
    const alt = project.name + " — Solverto portfolio hero image";
    detailHero.classList.add("media-image-frame");
    detailHero.dataset.noLightbox = "";
    detailHero.removeAttribute("role");
    detailHero.innerHTML = '<img src="' + escapeHtml(source) + '" alt="' + escapeHtml(alt) + '" loading="eager" decoding="async" />';
  }
  setText("[data-detail-partner]", project.partner || "Solverto project");
  setText("[data-detail-role]", project.role);
  setText("[data-detail-scope]", project.scope);
  setText("[data-detail-industry]", project.industry);
  setText("[data-detail-technology]", project.technology);
  setText("[data-detail-year]", project.year);
  setText("[data-detail-challenge]", copy.challenge);
  setText("[data-detail-contribution]", copy.contribution);

  const extraFacts = detailRoot.querySelector("[data-detail-extra-facts]");
  if (extraFacts) {
    const facts = [
      project.game ? ["Game", project.game] : null,
      project.country ? ["Country", project.country] : null,
      project.status ? ["Status", project.status] : null,
      project.previousTitle ? ["Previous title", project.previousTitle] : null,
      project.note ? ["Portfolio note", project.note] : null
    ].filter(Boolean);
    extraFacts.innerHTML = facts.map(([label, value]) => `<div class="project-fact"><span>${escapeHtml(label)}</span><p>${escapeHtml(value)}</p></div>`).join("");
    extraFacts.hidden = facts.length === 0;
  }

  const gallery = detailRoot.querySelector("[data-detail-gallery]");
  if (gallery) {
    if (project.assetFolder) {
      gallery.innerHTML = [1, 2, 3, 4, 5, 6].map((index) => projectMediaMarkup(project, index, { className: "reveal" })).join("");
    } else {
      const labels = [
        "[Gallery image: exterior realtime model view]",
        "[Gallery image: environment art detail]",
        "[Gallery image: technical model preparation]",
        "[Gallery image: before/after optimization]",
        "[Gallery image: production workflow view]",
        "[Gallery image: final realtime presentation detail]"
      ];
      gallery.innerHTML = labels.map((label) => `<div class="media-placeholder reveal" role="img">${label}</div>`).join("");
    }
  }
}

function initializeHomePanels() {
  const sourceElements = [...document.querySelectorAll("[data-home-panel-source]")];
  const sources = new Map(sourceElements.map((source) => [source.dataset.homePanelSource, source]));
  const panel = document.createElement("div");
  panel.className = "home-panel";
  panel.hidden = true;
  panel.setAttribute("aria-hidden", "true");
  panel.innerHTML = `
    <div class="home-panel-backdrop" data-home-panel-close></div>
    <section class="home-panel-dialog" role="dialog" aria-modal="true">
      <button class="home-panel-close" type="button" data-home-panel-close><span aria-hidden="true">×</span></button>
      <div class="home-panel-content" data-home-panel-content></div>
    </section>`;
  document.body.append(panel);

  const dialog = panel.querySelector(".home-panel-dialog");
  const content = panel.querySelector("[data-home-panel-content]");
  const closeButton = panel.querySelector(".home-panel-close");
  let previousFocus = null;
  let closeTimer = null;
  let panelRequest = 0;
  let panelAnimation = null;

  const cancelPanelAnimation = () => {
    if (panelAnimation) {
      panelAnimation.cancel();
      panelAnimation = null;
    }
    dialog.classList.remove("is-panel-animating");
  };

  const finishClose = () => {
    closeTimer = null;
    cancelPanelAnimation();
    panel.hidden = true;
    panel.classList.remove("is-open", "is-closing");
    panel.setAttribute("aria-hidden", "true");
    document.body.classList.remove("home-panel-open");
    content.replaceChildren();
    if (previousFocus instanceof HTMLElement && previousFocus.isConnected) previousFocus.focus();
  };

  const closePanel = () => {
    if (panel.hidden || panel.classList.contains("is-closing")) return;
    panelRequest += 1;
    cancelPanelAnimation();
    panel.classList.remove("is-open");
    panel.classList.add("is-closing");
    closeTimer = window.setTimeout(finishClose, reducedMotion.matches ? 0 : 430);
  };

  const prepareClone = (source) => {
    const clone = source.cloneNode(true);
    clone.removeAttribute("id");
    clone.querySelectorAll("[id]").forEach((element) => element.removeAttribute("id"));
    if (clone.classList.contains("reveal")) {
      clone.classList.remove("reveal");
      clone.classList.add("is-visible");
    }
    clone.querySelectorAll(".reveal").forEach((element) => {
      element.classList.remove("reveal");
      element.classList.add("is-visible");
    });

    return clone;
  };

  const setPanelContent = (clone, name) => {
    const heading = clone.querySelector("h1, h2, h3");
    if (heading) {
      heading.id = "home-panel-title";
      dialog.setAttribute("aria-labelledby", heading.id);
    } else {
      dialog.removeAttribute("aria-labelledby");
      dialog.setAttribute("aria-label", name);
    }
    content.replaceChildren(clone);
  };

  const showPanel = (clone, name, trigger) => {
    if (closeTimer) {
      window.clearTimeout(closeTimer);
      closeTimer = null;
    }

    if (!previousFocus || !panel.contains(trigger)) previousFocus = trigger || document.activeElement;
    const wasOpen = !panel.hidden && panel.classList.contains("is-open");
    setPanelContent(clone, name);
    panel.hidden = false;
    panel.classList.remove("is-closing", "is-reopening");
    panel.setAttribute("aria-hidden", "false");
    dialog.scrollTop = 0;
    document.body.classList.add("home-panel-open");
    closeButton.setAttribute("aria-label", (lightboxLabels[selectedLanguage] || lightboxLabels.en).close);

    const startPanelAnimation = () => {
      cancelPanelAnimation();
      panel.classList.remove("is-reopening");
      panel.classList.add("is-open");
      dialog.classList.add("is-panel-animating");
      const animation = dialog.animate(
        [{ transform: "translateX(100%)" }, { transform: "translateX(0)" }],
        {
          duration: reducedMotion.matches ? 0 : 430,
          easing: "cubic-bezier(0.22, 1, 0.36, 1)",
          fill: "both"
        }
      );
      panelAnimation = animation;
      animation.addEventListener("finish", () => {
        if (panelAnimation !== animation) return;
        panelAnimation = null;
        dialog.classList.remove("is-panel-animating");
      }, { once: true });
      closeButton.focus();
    };

    if (wasOpen) {
      startPanelAnimation();
    } else {
      panel.classList.add("is-reopening");
      void panel.offsetWidth;
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(startPanelAnimation);
      });
    }
  };

  const openPanel = (name, trigger) => {
    const source = sources.get(name);
    if (!source) return;
    panelRequest += 1;
    const sourceContent = source.querySelector(":scope > .container") || source;
    showPanel(prepareClone(sourceContent), name, trigger);
  };

  const openPagePanel = async (url, trigger) => {
    if (window.location.protocol === "file:") {
      window.location.href = url.href;
      return;
    }

    const request = ++panelRequest;
    const pageName = url.pathname.split("/").pop() || "page";
    const loading = document.createElement("div");
    loading.className = "container panel-loading";
    loading.innerHTML = "<p class=\"eyebrow\">Loading page...</p><h1>Loading...</h1>";
    showPanel(loading, pageName, trigger);

    try {
      const requestUrl = new URL(url.href);
      const requestedHash = requestUrl.hash.slice(1);
      requestUrl.hash = "";
      const response = await fetch(requestUrl.href);
      if (!response.ok) throw new Error(`Page request failed: ${response.status}`);
      const markup = await response.text();
      const parsed = new DOMParser().parseFromString(markup, "text/html");
      const pageMain = requestedHash
        ? parsed.getElementById(decodeURIComponent(requestedHash))
        : parsed.querySelector("main");
      if (!pageMain) throw new Error("Page content is missing");
      if (request !== panelRequest || panel.hidden) return;

      const clone = prepareClone(pageMain);
      setPanelContent(clone, pageName);
      renderFeaturedProjects(clone);
      renderPortfolio(clone, requestUrl.href);
      renderProjectDetail(clone, requestUrl.href);
      renderHomeOfferPanel(clone);
      applyLanguage();
      registerRevealItems(clone);
    } catch {
      if (request !== panelRequest || panel.hidden) return;
      const error = document.createElement("div");
      error.className = "container panel-loading";
      error.innerHTML = "<p class=\"eyebrow\">Page unavailable</p><h1>We could not load this page.</h1><p>Please try again.</p>";
      setPanelContent(error, pageName);
    }
  };

  const canonicalPageAliases = {
    about: "company.html",
    company: "company.html",
    portfolio: "portfolio.html",
    "portfolio-preview": "portfolio.html",
    contact: "contact.html"
  };

  document.addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-home-panel-trigger]");
    if (trigger) {
      event.preventDefault();
      openPanel(trigger.dataset.homePanelTrigger, trigger);
      return;
    }

    const link = event.target.closest("a[href]");
    if (!link || link.target === "_blank") return;

    const href = link.getAttribute("href") || "";
    if (href.startsWith("#")) return;
    let url = new URL(href, window.location.href);
    const hashAlias = canonicalPageAliases[decodeURIComponent(url.hash.slice(1))];
    if (hashAlias && url.pathname.endsWith("index.html")) url = new URL(hashAlias, window.location.href);
    if (url.origin !== window.location.origin || !/\.html?$/i.test(url.pathname)) return;

    event.preventDefault();
    closeNavigation();
    openPagePanel(url, link);
  });

  panel.addEventListener("click", (event) => {
    if (event.target.closest("[data-home-panel-close]")) closePanel();
  });

  document.addEventListener("keydown", (event) => {
    if (panel.hidden || panel.classList.contains("is-closing")) return;
    if (event.key === "Escape") {
      closePanel();
      return;
    }
    if (event.key !== "Tab") return;

    const focusable = [...panel.querySelectorAll('a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])')]
      .filter((element) => !element.hidden);
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });

}

function initializeContactHelpers() {
  document.addEventListener("click", async (event) => {
    const button = event.target.closest("[data-copy-email]");
    if (!button) return;

    const email = button.dataset.copyEmail;
    const status = button.closest(".minimal-contact")?.querySelector("[data-copy-email-status]");
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(email);
      } else {
        const input = document.createElement("textarea");
        input.value = email;
        input.setAttribute("readonly", "");
        input.style.position = "fixed";
        input.style.opacity = "0";
        document.body.append(input);
        input.select();
        document.execCommand("copy");
        input.remove();
      }
      if (status) status.textContent = translatedText("Email address copied.");
    } catch {
      if (status) status.textContent = email;
    }
  });
}

function initializePortfolioFeatures() {
  renderFeaturedProjects();
  renderPortfolio();
  renderProjectDetail();
  renderHomeOfferPanel();
  addLanguageSelector();
  applyLanguage();
  initializeHomePanels();
  initializeContactHelpers();
}

if (portfolioData) {
  initializePortfolioFeatures();
} else {
  const portfolioDataScript = document.createElement("script");
  portfolioDataScript.src = "portfolio-data.js";
  portfolioDataScript.onload = () => {
    portfolioData = window.SOLVERTO_PORTFOLIO;
    initializePortfolioFeatures();
  };
  portfolioDataScript.onerror = initializePortfolioFeatures;
  document.head.append(portfolioDataScript);
}

function initializeLightbox() {
  const main = document.querySelector("main");
  if (!main) return;

  const selector = ".media-placeholder:not([data-no-lightbox]), img:not([data-no-lightbox])";
  const modal = document.createElement("div");
  modal.className = "lightbox";
  modal.hidden = true;
  modal.dataset.lightbox = "";
  modal.innerHTML = `
    <div class="lightbox-backdrop" data-lightbox-close></div>
    <div class="lightbox-dialog" role="dialog" aria-modal="true" aria-labelledby="lightbox-caption">
      <button class="lightbox-close" type="button" data-lightbox-close></button>
      <button class="lightbox-arrow lightbox-arrow-previous" type="button" data-lightbox-previous aria-label=""></button>
      <div class="lightbox-stage" data-lightbox-stage></div>
      <button class="lightbox-arrow lightbox-arrow-next" type="button" data-lightbox-next aria-label=""></button>
      <div class="lightbox-footer">
        <p class="lightbox-caption" id="lightbox-caption" data-lightbox-caption></p>
        <p class="lightbox-count" data-lightbox-count></p>
      </div>
    </div>`;
  document.body.append(modal);

  const closeButton = modal.querySelector(".lightbox-close");
  const previousButton = modal.querySelector("[data-lightbox-previous]");
  const nextButton = modal.querySelector("[data-lightbox-next]");
  const stage = modal.querySelector("[data-lightbox-stage]");
  const caption = modal.querySelector("[data-lightbox-caption]");
  const count = modal.querySelector("[data-lightbox-count]");
  let items = [];
  let currentIndex = 0;
  let previousFocus = null;

  const labels = () => lightboxLabels[selectedLanguage] || lightboxLabels.en;
  const itemCaption = (item) => {
    const text = item.classList.contains("media-placeholder")
      ? item.dataset.lightboxCaption || item.textContent.trim() || item.getAttribute("aria-label")
      : item.dataset.lightboxCaption || item.getAttribute("alt") || item.getAttribute("aria-label") || item.textContent.trim();
    return (text || labels().image).replace(/^\[|\]$/g, "");
  };

  const groupItems = (item) => {
    const projectPage = main.hasAttribute("data-project-detail") || document.body.querySelector(".project-hero-layout");
    if (projectPage) return [...main.querySelectorAll(selector)];
    const group = item.closest("[data-lightbox-group], .gallery-grid, .project-card, .card") || item.parentElement;
    return [...group.querySelectorAll(selector)];
  };

  const renderItem = () => {
    const item = items[currentIndex];
    if (!item) return;
    const copy = itemCaption(item);
    stage.replaceChildren();

    if (item.tagName === "IMG") {
      const image = document.createElement("img");
      image.src = item.currentSrc || item.src;
      image.alt = copy;
      stage.append(image);
    } else {
      const placeholder = document.createElement("div");
      placeholder.className = "lightbox-placeholder";
      placeholder.textContent = item.textContent.trim();
      stage.append(placeholder);
    }

    caption.textContent = copy;
    count.textContent = `${currentIndex + 1} / ${items.length}`;
    const hasMultiple = items.length > 1;
    previousButton.hidden = !hasMultiple;
    nextButton.hidden = !hasMultiple;
  };

  const open = (item) => {
    items = groupItems(item).filter((candidate) => !candidate.closest("[data-lightbox]"));
    currentIndex = Math.max(0, items.indexOf(item));
    previousFocus = document.activeElement;
    const copy = labels();
    closeButton.innerHTML = `<span aria-hidden="true">×</span> ${copy.close}`;
    closeButton.setAttribute("aria-label", copy.close);
    previousButton.textContent = "‹";
    previousButton.setAttribute("aria-label", copy.previous);
    nextButton.textContent = "›";
    nextButton.setAttribute("aria-label", copy.next);
    modal.querySelector("[role='dialog']").setAttribute("aria-label", copy.preview);
    renderItem();
    modal.hidden = false;
    document.body.classList.add("lightbox-open");
    closeButton.focus();
  };

  const close = () => {
    modal.hidden = true;
    document.body.classList.remove("lightbox-open");
    stage.replaceChildren();
    if (previousFocus instanceof HTMLElement) previousFocus.focus();
  };

  const move = (direction) => {
    if (items.length < 2) return;
    currentIndex = (currentIndex + direction + items.length) % items.length;
    renderItem();
  };

  main.querySelectorAll(selector).forEach((item) => {
    item.classList.add("is-lightbox-trigger");
    if (!item.hasAttribute("tabindex")) item.tabIndex = 0;
    if (!item.hasAttribute("role") || item.tagName === "IMG") item.setAttribute("role", "button");
  });

  main.addEventListener("click", (event) => {
    const item = event.target.closest(selector);
    if (item && main.contains(item)) open(item);
  });

  main.addEventListener("keydown", (event) => {
    const item = event.target.closest(selector);
    if (item && (event.key === "Enter" || event.key === " ")) {
      event.preventDefault();
      open(item);
    }
  });

  modal.addEventListener("click", (event) => {
    if (event.target.closest("[data-lightbox-close]")) close();
    else if (event.target.closest("[data-lightbox-previous]")) move(-1);
    else if (event.target.closest("[data-lightbox-next]")) move(1);
  });

  document.addEventListener("keydown", (event) => {
    if (modal.hidden) return;
    if (event.key === "Escape") close();
    else if (event.key === "ArrowLeft") move(-1);
    else if (event.key === "ArrowRight") move(1);
  });
}

initializeLightbox();

function closeNavigation() {
  document.body.classList.remove("nav-open");
  navToggle?.setAttribute("aria-expanded", "false");
}

navToggle?.addEventListener("click", () => {
  const isOpen = document.body.classList.toggle("nav-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

navMenu?.addEventListener("click", (event) => {
  if (event.target.closest("a")) closeNavigation();
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 960) closeNavigation();
});

function updateScrollEffects() {
  const scrollY = window.scrollY;
  header?.classList.toggle("is-scrolled", scrollY > 12);
  if (!reducedMotion.matches) {
    document.querySelectorAll("[data-parallax]").forEach((element) => {
      element.style.transform = `translate3d(0, ${Math.min(scrollY * 0.12, 72)}px, 0)`;
    });
  }
}

window.addEventListener("scroll", updateScrollEffects, { passive: true });
updateScrollEffects();

registerRevealItems();

document.querySelectorAll("[data-static-form]").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const status = form.querySelector("[data-form-status]");
    const recipient = form.dataset.contactEmail || "contact@solverto.com";
    const formData = new FormData(form);
    const name = String(formData.get("name") || "");
    const email = String(formData.get("email") || "");
    const company = String(formData.get("company") || "");
    const projectType = String(formData.get("projectType") || "General inquiry");
    const message = String(formData.get("message") || "");
    const subjectLabels = { en: "Solverto project inquiry", pl: "Zapytanie projektowe Solverto", de: "Solverto-Projektanfrage", es: "Consulta de proyecto de Solverto", pt: "Consulta de projeto da Solverto", it: "Richiesta di progetto Solverto" };
    const subject = `${subjectLabels[selectedLanguage]}: ${projectType}`;
    const body = [
      `${translatedText("Name")}: ${name}`,
      `${translatedText("Email")}: ${email}`,
      `${translatedText("Company")}: ${company || translatedText("Not provided")}`,
      `${translatedText("Project type")}: ${projectType}`,
      "",
      message
    ].join("\n");

    if (status) status.textContent = translatedTemplate("Opening your email application. Recipient: {recipient}", { recipient });
    window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
});

document.querySelectorAll("[data-year]").forEach((element) => {
  element.textContent = String(new Date().getFullYear());
});
