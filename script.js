const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const header = document.querySelector("[data-header]");
const navToggle = document.querySelector("[data-nav-toggle]");
const navMenu = document.querySelector("[data-nav-menu]");
let portfolioData = window.SOLVERTO_PORTFOLIO;
const supplementalTranslations = window.SOLVERTO_TRANSLATIONS || {};
const textLanguageSources = new WeakMap();
const attributeLanguageSources = new WeakMap();
let revealObserver = null;
let homePanelsInitialized = false;

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
  ["de", "Deutsch"]
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
    "We help companies present products, test ideas and build interactive solutions.": "Pomagamy firmom lepiej prezentować produkty, testować pomysły i rozwijać interaktywne rozwiązania.",
    "Realtime 3D, playable prototypes, XR experiences and game production - from source materials or concept to a working result.": "Tworzymy modele i doświadczenia realtime 3D, grywalne prototypy, rozwiązania XR oraz wspieramy produkcję gier - od materiałów wejściowych do działającego rezultatu.",
    "Discuss your project": "Omów swój projekt",
    "View our work": "Zobacz nasze realizacje",
    "What do you need help with?": "W czym możemy pomóc?",
    "One production partner from idea to interactive result.": "Jeden partner produkcyjny - od pomysłu do interaktywnego rezultatu.",
    "Tell us what you are working on.": "Opowiedz nam, nad czym pracujesz.",
    "Send us your goal, available materials, target platform and deadline. We will review them and suggest a practical first step.": "Prześlij nam cel, dostępne materiały, platformę docelową i termin. Przeanalizujemy je i zaproponujemy praktyczny pierwszy krok.",
    "Game Environments | 3D Assets": "Środowiska Gier | Elementy 3D",
    "XR | Training | Simulation": "XR | Szkolenia | Symulacje",
    "3D Animation | Trailers | Realtime Characters": "Animacja 3D | Trailery | Postacie Realtime",
    "What we can deliver": "Co możemy dostarczyć",
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
    "Final client": "Klient końcowy", "Delivered for": "Realizacja dla", "Scope of work": "Zakres prac", "Residential investment modelling and support for preparing the project for realtime real estate presentation.": "Modelowanie inwestycji mieszkaniowej oraz wsparcie procesu przygotowania projektu do prezentacji nieruchomości w czasie rzeczywistym.",
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
    "Pulse Guys": "Pulse Guys",
    "Treasure Hunter": "Treasure Hunter",
    "Solverto Games": "Elementy do gier Solverto Games",
    "Music Room / Metaverse": "Pokój muzyczny / Metaverse",
    "Treasure Hunter / Metaverse Game Area": "Treasure Hunter / obszar gry Metaverse",
    "Hotel Five": "Hotel Five",
    "India Music Room": "India - pokój muzyczny",
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
    "Realtime architecture, residential investments and large-scale 3D modelling.": "Architektura realtime, inwestycje mieszkaniowe i wielkoskalowe modelowanie 3D.",
    "Game levels, environments and practical production support for playable content.": "Poziomy gier, środowiska i praktyczne wsparcie produkcji grywalnych treści.",
    "Interactive digital twins, realtime locations and operational visualizations.": "Interaktywne cyfrowe bliźniaki, lokalizacje realtime i wizualizacje operacyjne.",
    "Metaverse environments, mazes and game-ready interactive spaces.": "Środowiska Metaverse, labirynty i interaktywne przestrzenie gotowe do wykorzystania w grach.",
    "Animations, films, trailers and visual production support.": "Animacje, filmy, trailery i wsparcie produkcji wizualnej.",
    "Interactive product configurators, realtime showrooms and prototype experiences.": "Interaktywne konfiguratory produktów, showroomy realtime i doświadczenia prototypowe.",
    "Original games, mini-games and reusable game production assets.": "Autorskie gry, minigry i wielokrotnego użytku elementy produkcji gier.",
    "Over 50 projects completed in Poland and around the world.": "Wykonano ponad 50 projektów z Polski i z całego świata.",
    "Choose your area": "Wybierz obszar",
    "Creative Technologies for Business and Game Studios": "Technologie Kreatywne dla Biznesu i studiów gier",
    "What do you want to build?": "Co chcesz stworzyć?",
    "Select an area to see how we can help, how we work and relevant projects.": "Wybierz obszar, aby zobaczyć, jak możemy pomóc, jak działamy i jakie mamy realizacje.",
    "Explore the area": "Zobacz obszar",
    "Realtime Architecture | Digital Twins": "Architektura Realtime | Wirtualne Bliźniaki",
    "Product Prototypes | 3D Models": "Prototypy Produktów | Modele 3D",
    "Game Assets | Game Levels": "Elementy do gier | Poziomy do gier",
    "Game Prototypes | Custom Games": "Prototypy Gier | Gry na zamówienie",
    "Metaverse | Mazes": "Metaverse | Labirynty",
    "Animations | Films | Trailers | Avatars": "Animacje | Filmy | Trailery | Avatary",
    "Interactive architecture, property presentations and digital replicas that make spaces and data easier to understand.": "Interaktywna architektura, prezentacje nieruchomości i cyfrowe odwzorowania, które ułatwiają zrozumienie przestrzeni i danych.",
    "Interactive architecture, property presentations and digital replicas that make spaces and data easier to understand. We contributed to more than 60 projects.": "Interaktywna architektura, prezentacje nieruchomości i cyfrowe odwzorowania, które ułatwiają zrozumienie przestrzeni i danych. Braliśmy udział w realizacji ponad 60 projektów.",
    "Product models, interactive proofs of concept and reusable 3D content for development, sales and communication.": "Modele produktów, interaktywne proof of concept i wielokrotnego użytku treści 3D dla rozwoju produktu, sprzedaży i komunikacji.",
    "Game-ready environments, levels and optimized assets that fit an existing production pipeline.": "Środowiska, poziomy i zoptymalizowane elementy gotowe do użycia w istniejącym procesie produkcji gry.",
    "We delivered and collaborated on the implementation of more than 130 playable prototypes, vertical slices, mini-games and complete custom games.": "Wykonaliśmy i współpracowaliśmy przy wdrożeniu ponad 130 grywalnych prototypów, vertical slice’ów, minigier oraz kompletnych gier tworzonych na zamówienie.",
    "We delivered and collaborated on the implementation of more than 25 themed metaverse locations, social spaces, mazes and gameplay areas designed for exploration.": "Wykonaliśmy i współpracowaliśmy przy wdrożeniu ponad 25 tematycznych lokacjach Metaverse, przestrzeniach społecznościowych, labirynty i obszary rozgrywki stworzone do eksploracji.",
    "Animation, film editing, trailers and optimized avatars for games, products and interactive experiences.": "Animacje, montaż filmów, trailery i zoptymalizowane avatary dla gier, produktów oraz interaktywnych doświadczeń.",
    "Area of collaboration": "Obszar współpracy",
    "Tell us about your project": "Opowiedz nam o projekcie",
    "How we can help": "Jak możemy pomóc",
    "How we work": "Jak działamy",
    "A clear path from material to working result.": "Czytelna droga od materiałów do działającego rezultatu.",
    "Goal and materials": "Cel i materiały",
    "We define the business or production goal, review available files and choose the target platform.": "Określamy cel biznesowy lub produkcyjny, sprawdzamy dostępne materiały i wybieramy platformę docelową.",
    "Scope and prototype": "Zakres i prototyp",
    "We propose a focused scope and quickly validate the most important visual and technical assumptions.": "Proponujemy konkretny zakres i szybko weryfikujemy najważniejsze założenia wizualne oraz techniczne.",
    "Production": "Produkcja",
    "We build in clear stages, share progress and keep the solution aligned with its real use.": "Pracujemy etapami, pokazujemy postępy i pilnujemy, aby rozwiązanie odpowiadało jego rzeczywistemu zastosowaniu.",
    "Delivery and support": "Wdrożenie i wsparcie",
    "We prepare the agreed files or build, documentation and a practical next step for further development.": "Przekazujemy uzgodnione pliki lub build, dokumentację i konkretny następny krok dalszego rozwoju.",
    "Relevant projects and production experience.": "Powiązane realizacje i doświadczenie produkcyjne.",
    "Back": "Wstecz",
    "We turn architectural documentation, BIM data and existing locations into clear realtime experiences for sales, planning, presentation and operation.": "Przekształcamy dokumentację architektoniczną, dane BIM i istniejące lokalizacje w czytelne doświadczenia realtime dla sprzedaży, planowania, prezentacji i obsługi.",
    "Show a space before it exists - or understand it better once it does.": "Pokaż przestrzeń, zanim powstanie - albo lepiej ją zrozum, gdy już istnieje.",
    "We help developers, architects and technology companies transform complex spatial information into an experience that clients and teams can explore. The result can support a sales meeting, stakeholder review, training scenario or an operational digital twin.": "Pomagamy deweloperom, architektom i firmom technologicznym zmieniać złożone informacje przestrzenne w doświadczenia, które klienci i zespoły mogą swobodnie poznawać. Efekt może wspierać sprzedaż, konsultacje, szkolenia lub działanie cyfrowego bliźniaka.",
    "We turn a product idea, CAD file or reference material into a clear 3D model and an interactive prototype that can be tested before full production.": "Zmieniamy pomysł na produkt, plik CAD lub materiały referencyjne w czytelny model 3D i interaktywny prototyp, który można sprawdzić przed pełną produkcją.",
    "Validate the product experience before investing in the complete solution.": "Sprawdź doświadczenie produktu, zanim zainwestujesz w kompletne rozwiązanie.",
    "A focused prototype helps your team test form, interaction, presentation and technical feasibility early. The same prepared assets can later support configurators, AR, animation, marketing renders or realtime applications.": "Skoncentrowany prototyp pozwala wcześnie sprawdzić formę, interakcję, sposób prezentacji i wykonalność techniczną. Przygotowane materiały mogą później zasilić konfigurator, AR, animację, rendery marketingowe lub aplikację realtime.",
    "We support game studios with level creation, environment production and technical preparation of assets - from a defined brief to content ready for implementation.": "Wspieramy studia gier w tworzeniu poziomów, środowisk i technicznym przygotowaniu elementów - od briefu po treści gotowe do wdrożenia.",
    "Extend your production capacity without losing visual and technical consistency.": "Zwiększ możliwości produkcyjne bez utraty spójności wizualnej i technicznej.",
    "We can take responsibility for a complete location or a clearly defined asset package. Work is aligned with the game's style, performance target, engine requirements and the way your team already reviews content.": "Możemy odpowiadać za kompletną lokację lub precyzyjnie określony pakiet elementów. Pracę dopasowujemy do stylu gry, wymagań wydajnościowych, silnika i procesu akceptacji w zespole.",
    "We help turn a game idea, campaign concept or training goal into something playable - first as a focused prototype, then as a production-ready scope.": "Pomagamy zmienić pomysł na grę, kampanię lub szkolenie w grywalne doświadczenie - najpierw jako konkretny prototyp, a następnie zakres gotowy do produkcji.",
    "Test the fun, technology and production risk with a working build.": "Sprawdź rozgrywkę, technologię i ryzyko produkcyjne na działającym buildzie.",
    "A playable prototype makes decisions easier than a long document. We focus on the core loop, the feeling of interaction and the technical unknowns, then provide a clear basis for further development or full production.": "Grywalny prototyp ułatwia decyzje bardziej niż długi dokument. Skupiamy się na głównej pętli rozgrywki, odczuciu interakcji i ryzykach technicznych, tworząc podstawę dalszego rozwoju lub pełnej produkcji.",
    "We build recognizable, efficient realtime worlds that combine a strong visual theme with navigation, interaction and gameplay requirements.": "Budujemy rozpoznawalne i wydajne światy realtime, łączące wyrazisty motyw wizualny z wymaganiami nawigacji, interakcji i rozgrywki.",
    "Give users a place worth exploring - and a reason to return.": "Daj użytkownikom miejsce warte odkrywania - i powód, żeby wrócili.",
    "We support platform owners, agencies and game teams with complete themed environments or defined location packages. The work can cover concept development, 3D production, level construction, optimization and implementation support.": "Wspieramy właścicieli platform, agencje i zespoły gier kompletnymi środowiskami tematycznymi lub określonymi pakietami lokacji. Zakres może obejmować rozwój koncepcji, produkcję 3D, budowę poziomu, optymalizację i wsparcie wdrożenia.",
    "We prepare moving content and realtime characters that explain, present and strengthen a product, game or digital experience.": "Tworzymy ruchome treści i postacie realtime, które wyjaśniają, prezentują i wzmacniają produkt, grę lub cyfrowe doświadczenie.",
    "Turn complex ideas and static assets into clear, engaging movement.": "Zmień złożone pomysły i statyczne materiały w czytelny, angażujący ruch.",
    "Depending on the goal, we can support the complete process or a focused production stage: storyboard, 3D preparation, animation, avatar optimization, rendering, editing and final platform-specific outputs.": "W zależności od celu możemy przejąć cały proces lub wybrany etap: storyboard, przygotowanie 3D, animację, optymalizację avatarów, rendering, montaż i finalne formaty dla danej platformy.",
    "Realtime property presentation": "Prezentacja nieruchomości realtime",
    "Interactive estates, buildings and apartments that clients can explore before construction is complete.": "Interaktywne osiedla, budynki i mieszkania, które klienci mogą poznać jeszcze przed zakończeniem budowy.",
    "Digital twin environment": "Środowisko wirtualnego bliźniaka",
    "A navigable 3D representation prepared for data, controls, training or presentation layers.": "Interaktywne odwzorowanie 3D przygotowane pod dane, sterowanie, szkolenie lub prezentację.",
    "BIM/CAD optimization": "Optymalizacja BIM/CAD",
    "Technical models cleaned, structured and optimized for reliable realtime use.": "Modele techniczne oczyszczone, uporządkowane i zoptymalizowane do niezawodnego działania realtime.",
    "Interactive sales tools": "Interaktywne narzędzia sprzedażowe",
    "Views, variants, filters and guided journeys designed around customer decisions.": "Widoki, warianty, filtry i prowadzone prezentacje zaprojektowane wokół decyzji klienta.",
    "Product prototype": "Prototyp produktu",
    "A focused interactive proof of concept for internal validation, presentation or investor conversations.": "Interaktywny proof of concept do wewnętrznej weryfikacji, prezentacji lub rozmów z inwestorem.",
    "Production-ready 3D model": "Model 3D gotowy do produkcji",
    "Clean geometry, materials, hierarchy and variants prepared for the chosen platform.": "Czysta geometria, materiały, hierarchia i warianty przygotowane dla wybranej platformy.",
    "Configurator and showroom": "Konfigurator i showroom",
    "Interactive product choices, camera states and presentation flows for customers or sales teams.": "Interaktywne warianty produktu, ujęcia kamer i scenariusze prezentacji dla klientów lub zespołu sprzedaży.",
    "Reusable content pipeline": "Treści wielokrotnego użytku",
    "One organized 3D source prepared for stills, animation, realtime and future iterations.": "Jedno uporządkowane źródło 3D przygotowane do grafik, animacji, realtime i kolejnych iteracji.",
    "Level production": "Produkcja poziomów",
    "Blockout, environment building, set dressing, lighting and a final optimization pass.": "Blockout, budowa środowiska, set dressing, oświetlenie i końcowa optymalizacja.",
    "Environment assets": "Elementy środowiska",
    "Modular kits, props and location-specific elements prepared for practical reuse.": "Modułowe zestawy, rekwizyty i elementy lokacji przygotowane do praktycznego ponownego użycia.",
    "Technical art support": "Wsparcie technical art",
    "Materials, LODs, collisions, profiling and asset cleanup for the target engine.": "Materiały, LOD-y, kolizje, profilowanie i porządkowanie elementów dla docelowego silnika.",
    "Production reinforcement": "Wzmocnienie produkcji",
    "A focused external team for a milestone, vertical slice or content-heavy production stage.": "Skoncentrowany zespół zewnętrzny na milestone, vertical slice lub etap wymagający dużej ilości treści.",
    "Playable prototype": "Grywalny prototyp",
    "The smallest useful build that validates the core mechanic and player experience.": "Najmniejszy użyteczny build, który weryfikuje główną mechanikę i doświadczenie gracza.",
    "Vertical slice": "Vertical slice",
    "A presentation-ready fragment showing the intended quality, content and production direction.": "Gotowy do prezentacji fragment pokazujący docelową jakość, treść i kierunek produkcji.",
    "Branded mini-game": "Minigra dla marki",
    "A compact game experience for a campaign, event, community or web platform.": "Kompaktowe doświadczenie growe dla kampanii, wydarzenia, społeczności lub platformy internetowej.",
    "Custom game production": "Produkcja gry na zamówienie",
    "Design, development, 3D content and delivery organized around an agreed scope.": "Projektowanie, programowanie, treści 3D i wdrożenie zorganizowane wokół uzgodnionego zakresu.",
    "Themed metaverse location": "Tematyczna lokacja Metaverse",
    "A complete social, event or brand environment with a distinct visual identity.": "Kompletne środowisko społecznościowe, eventowe lub markowe z wyrazistą identyfikacją wizualną.",
    "Maze experience": "Doświadczenie labiryntu",
    "Readable routes, landmarks, challenge rhythm and a theme carried across the whole space.": "Czytelne trasy, punkty orientacyjne, rytm wyzwań i motyw prowadzony przez całą przestrzeń.",
    "Gameplay area": "Obszar rozgrywki",
    "Locations built around movement, collection, competition or another defined interaction loop.": "Lokacje budowane wokół ruchu, zbierania, rywalizacji lub innej określonej pętli interakcji.",
    "Ongoing content production": "Stała produkcja treści",
    "A repeatable pipeline for seasonal variants, new rooms and additional levels.": "Powtarzalny proces dla wariantów sezonowych, nowych pomieszczeń i kolejnych poziomów.",
    "3D animation": "Animacja 3D",
    "Product, architectural and technical animation focused on clarity and visual quality.": "Animacja produktowa, architektoniczna i techniczna nastawiona na czytelność oraz jakość wizualną.",
    "Film and trailer": "Film i trailer",
    "Editing, pacing, titles and final outputs for games, campaigns and presentations.": "Montaż, tempo, napisy i finalne formaty dla gier, kampanii oraz prezentacji.",
    "Realtime avatars": "Avatary realtime",
    "Character preparation, optimization, materials and animation for interactive platforms.": "Przygotowanie postaci, optymalizacja, materiały i animacja dla platform interaktywnych.",
    "Production support": "Wsparcie produkcji",
    "A defined animation, editing or asset task integrated with an existing team and pipeline.": "Określone zadanie animacyjne, montażowe lub assetowe zintegrowane z istniejącym zespołem i procesem."
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

Object.assign(translationCorrections.pl, {
  "Play video": "Odtwórz film",
  "A digital architecture model and game world connected in a realtime 3D environment.": "Cyfrowy model architektury i świat gry połączone w środowisku 3D realtime.",
  "Solverto cooperation process: project review, scope and milestone plan, prototype or production sprint, delivery and next step.": "Proces współpracy Solverto: przegląd projektu, zakres i plan etapów, prototyp lub sprint produkcyjny, dostarczenie i kolejny krok.",
  "VR and AR prototypes, training scenarios and interactive simulations that help teams validate a solution before a larger rollout.": "Prototypy VR i AR, scenariusze szkoleniowe oraz interaktywne symulacje, które pomagają zespołom sprawdzić rozwiązanie przed szerszym wdrożeniem.",
  "Product Prototypes / 3D Models": "Prototypy produktów / Modele 3D",
  "Optimization": "Optymalizacja",
  "Architecture": "Architektura",
  "Augmented reality offer": "Oferta rzeczywistości rozszerzonej",
  "3D optimization offer": "Oferta optymalizacji 3D",
  "Architecture offer": "Oferta architektury",
  "Virtual reality offer": "Oferta rzeczywistości wirtualnej",
  "AR experiences place a product or concept directly in the user's surroundings. They make it easier to understand scale, materials and key functions before purchase or implementation. We prepare optimized 3D models and interactions for mobile devices and presentations.": "Doświadczenia AR umieszczają produkt lub koncepcję bezpośrednio w otoczeniu użytkownika. Ułatwiają zrozumienie skali, materiałów i kluczowych funkcji przed zakupem lub wdrożeniem. Przygotowujemy zoptymalizowane modele 3D oraz interakcje dla urządzeń mobilnych i prezentacji.",
  "We optimize 3D models for smooth operation in realtime applications. Geometry, textures and materials are adapted to the target device and performance budget. The result is faster loading and consistent visual quality.": "Optymalizujemy modele 3D do płynnego działania w aplikacjach realtime. Geometrię, tekstury i materiały dostosowujemy do urządzenia docelowego oraz budżetu wydajnościowego. Efektem jest szybsze ładowanie i spójna jakość wizualna.",
  "We transform architectural models into clear interactive presentations. The experience supports design reviews, sales conversations and stakeholder decisions. It can combine building context, materials, variants and navigation.": "Przekształcamy modele architektoniczne w czytelne, interaktywne prezentacje. Rozwiązanie wspiera przeglądy projektowe, rozmowy sprzedażowe i decyzje interesariuszy. Może łączyć kontekst budynku, materiały, warianty oraz nawigację.",
  "We create immersive VR experiences for training, presentation and exploration. Users can understand spaces, processes and product interactions at a practical scale. We design the solution for a specific device, audience and implementation goal.": "Tworzymy immersyjne doświadczenia VR do szkoleń, prezentacji i eksploracji. Użytkownicy mogą zrozumieć przestrzeń, procesy oraz interakcje z produktem w praktycznej skali. Projektujemy rozwiązanie dla konkretnego urządzenia, odbiorców i celu wdrożenia.",
  "Interactive product, architecture, AR and VR offers supported by optimized realtime 3D content.": "Interaktywne rozwiązania produktowe, architektoniczne, AR i VR wspierane przez zoptymalizowane treści 3D realtime.",
  "Selected work across realtime 3D, games and interactive production": "Wybrane realizacje z obszaru 3D realtime, gier i produkcji interaktywnej",
  "Explore selected projects delivered directly by Solverto and in collaboration with partner studios - from realtime architecture and game environments to interactive experiences and original games.": "Poznaj wybrane projekty zrealizowane bezpośrednio przez Solverto oraz we współpracy ze studiami partnerskimi, od architektury realtime i środowisk gier po interaktywne doświadczenia i autorskie gry.",
  "Projects with a clear production contribution": "Projekty z jasno określonym wkładem produkcyjnym",
  "Selected work across architecture, game development, interactive experiences and production support.": "Wybrane realizacje z obszaru architektury, tworzenia gier, interaktywnych doświadczeń i wsparcia produkcyjnego.",
  "Solverto realtime 3D, architecture, games and metaverse projects": "Projekty Solverto z obszaru 3D realtime, architektury, gier i Metaverse",
  "Projects": "Projekty",
  "Browse by production area.": "Przeglądaj według obszaru produkcji.",
  "Focused production support, model corrections, animation work and project analysis completed within partner-led architecture workflows.": "Ukierunkowane wsparcie produkcyjne, poprawki modeli, animacje i analizy projektów realizowane w partnerskich procesach architektonicznych.",
  "Solverto also contributed to selected architecture and realtime real estate projects in cooperation with SQUAREBYTES GmbH.": "Solverto uczestniczyło również w wybranych projektach architektury i nieruchomości realtime we współpracy z SQUAREBYTES GmbH.",
  "Solverto has contributed to commercial game projects through level creation, 3D environment production, programming support, metaverse locations, game areas, avatars, animations and original game development.": "Solverto wspierało komercyjne projekty gier poprzez tworzenie poziomów i środowisk 3D, wsparcie programistyczne, lokacje Metaverse, obszary rozgrywki, avatary, animacje oraz rozwój autorskich gier.",
  "Digital Twin and realtime 3D environment production support for interactive locations.": "Wsparcie produkcji środowisk Digital Twin i 3D realtime dla interaktywnych lokalizacji.",
  "Solverto Games currently operates under Solverto Studio and focuses on original games, experimental projects, web3 mini-games and commercial game development.": "Solverto Games działa obecnie w ramach Solverto Studio i koncentruje się na autorskich grach, projektach eksperymentalnych, minigrach web3 oraz komercyjnej produkcji gier.",
  "Music room environment production support": "Wsparcie produkcji środowiska pokoju muzycznego",
  "3D environment and location production support for a themed metaverse music room.": "Wsparcie produkcji środowiska 3D i lokacji dla tematycznego pokoju muzycznego Metaverse.",
  "XR | Training | Simulation": "XR | Szkolenia | Symulacje",
  "Test processes and train people without interrupting real operations.": "Testuj procesy i prowadź szkolenia bez przerywania rzeczywistych operacji.",
  "XR training prototype": "Prototyp szkolenia XR",
  "A focused training scenario that can be reviewed before a wider implementation.": "Konkretny scenariusz szkoleniowy, który można sprawdzić przed szerszym wdrożeniem.",
  "Interactive simulation": "Interaktywna symulacja",
  "A controllable process or environment with clear interactions and feedback.": "Sterowalny proces lub środowisko z czytelnymi interakcjami i informacją zwrotną.",
  "Product visualization": "Wizualizacja produktu",
  "A practical way to present scale, features and use in AR or VR.": "Praktyczny sposób prezentacji skali, funkcji i zastosowania produktu w AR lub VR.",
  "Proof of concept": "Proof of concept",
  "A working build that validates the experience, device fit and next production step.": "Działający build, który sprawdza doświadczenie, dopasowanie urządzenia i kolejny etap produkcji.",
  "Operational digital twin": "Operacyjny cyfrowy bliźniak",
  "A navigable 3D representation with data, controls or operational states where they are needed.": "Interaktywne odwzorowanie 3D z danymi, sterowaniem lub stanami operacyjnymi tam, gdzie są potrzebne.",
  "Digital product prototype": "Cyfrowy prototyp produktu",
  "Flexible production support": "Elastyczne wsparcie produkcji",
  "Focused support for a milestone, vertical slice or content-heavy production stage.": "Skoncentrowane wsparcie na potrzeby kamienia milowego, vertical slice lub etapu wymagającego dużej ilości treści.",
  "3D product animation": "Animacja produktowa 3D",
  "Game trailers and video editing": "Trailery gier i montaż wideo",
  "Realtime characters and avatars": "Postacie i avatary realtime",
  "Tell us what you are working on.": "Opowiedz nam, nad czym pracujesz.",
  "Send us your goal, available materials, target platform and deadline. We will review them and suggest a practical first step.": "Prześlij nam cel, dostępne materiały, platformę docelową i termin. Przeanalizujemy je i zaproponujemy praktyczny pierwszy krok.",
  "One production partner from idea to interactive result.": "Jeden partner produkcyjny od pomysłu do interaktywnego rezultatu.",
  "We combine 3D production, realtime technology, game development and XR so projects can move from source materials or an early idea to something that can be reviewed, tested and used.": "Łączymy produkcję 3D, technologię realtime, tworzenie gier i XR, aby przeprowadzać projekty od materiałów źródłowych lub wczesnego pomysłu do rezultatu, który można ocenić, przetestować i wykorzystać.",
  "Discuss your project": "Omów swój projekt"
});

Object.assign(translationCorrections.de, {
  "A digital architecture model and game world connected in a realtime 3D environment.": "Ein digitales Architekturmodell und eine Spielwelt, verbunden in einer Echtzeit-3D-Umgebung.",
  "Solverto cooperation process: project review, scope and milestone plan, prototype or production sprint, delivery and next step.": "Zusammenarbeitsprozess mit Solverto: Projektprüfung, Umfang und Meilensteinplan, Prototyp oder Produktionssprint, Auslieferung und nächster Schritt.",
  "Choose your area": "Wählen Sie einen Bereich",
  "What do you need help with?": "Wobei können wir helfen?",
  "Explore the area": "Bereich ansehen",
  "Realtime Architecture | Digital Twins": "Echtzeit-Architektur | Digitale Zwillinge",
  "Product Prototypes | 3D Models": "Produktprototypen | 3D-Modelle",
  "Game Environments | 3D Assets": "Spielumgebungen | 3D-Assets",
  "Game Prototypes | Custom Games": "Spielprototypen | Individuelle Spiele",
  "XR | Training | Simulation": "XR | Schulung | Simulation",
  "3D Animation | Trailers | Realtime Characters": "3D-Animation | Trailer | Echtzeit-Charaktere",
  "Interactive architecture, property presentations and digital replicas that make spaces and data easier to understand.": "Interaktive Architektur, Immobilienpräsentationen und digitale Abbilder, die Räume und Daten leichter verständlich machen.",
  "Product models, interactive proofs of concept and reusable 3D content for development, sales and communication.": "Produktmodelle, interaktive Machbarkeitsnachweise und wiederverwendbare 3D-Inhalte für Entwicklung, Vertrieb und Kommunikation.",
  "Game-ready environments, levels and optimized assets that fit an existing production pipeline.": "Spielfertige Umgebungen, Level und optimierte Assets, die sich in eine bestehende Produktionspipeline einfügen.",
  "We delivered and collaborated on the implementation of more than 130 playable prototypes, vertical slices, mini-games and complete custom games.": "Wir haben an der Umsetzung von mehr als 130 spielbaren Prototypen, Vertical Slices, Minispielen und vollständigen individuellen Spielen mitgewirkt.",
  "VR and AR prototypes, training scenarios and interactive simulations that help teams validate a solution before a larger rollout.": "VR- und AR-Prototypen, Schulungsszenarien und interaktive Simulationen, mit denen Teams eine Lösung vor einer breiteren Einführung prüfen können.",
  "Animation, film editing, trailers and optimized avatars for games, products and interactive experiences.": "Animation, Filmschnitt, Trailer und optimierte Avatare für Spiele, Produkte und interaktive Erlebnisse.",
  "Start a conversation": "Gespräch beginnen",
  "Tell us what you are working on.": "Erzählen Sie uns, woran Sie arbeiten.",
  "Send us your goal, available materials, target platform and deadline. We will review them and suggest a practical first step.": "Senden Sie uns Ihr Ziel, die verfügbaren Materialien, die Zielplattform und den Termin. Wir prüfen alles und schlagen einen praktischen ersten Schritt vor.",
  "One production partner from idea to interactive result.": "Ein Produktionspartner von der Idee bis zum interaktiven Ergebnis.",
  "We combine 3D production, realtime technology, game development and XR so projects can move from source materials or an early idea to something that can be reviewed, tested and used.": "Wir verbinden 3D-Produktion, Echtzeit-Technologie, Spieleentwicklung und XR, damit Projekte von Ausgangsmaterialien oder einer frühen Idee zu einem Ergebnis gelangen, das geprüft, getestet und eingesetzt werden kann.",
  "Discuss your project": "Projekt besprechen",
  "Area of collaboration": "Bereich der Zusammenarbeit",
  "Tell us about your project": "Erzählen Sie uns von Ihrem Projekt",
  "Selected work": "Ausgewählte Arbeiten",
  "Relevant projects and production experience.": "Relevante Projekte und Produktionserfahrung.",
  "Product Prototypes / 3D Models": "Produktprototypen / 3D-Modelle",
  "Optimization": "Optimierung",
  "Architecture": "Architektur",
  "Augmented reality offer": "Augmented-Reality-Angebot",
  "3D optimization offer": "Angebot zur 3D-Optimierung",
  "Architecture offer": "Architekturangebot",
  "Virtual reality offer": "Virtual-Reality-Angebot",
  "AR experiences place a product or concept directly in the user's surroundings. They make it easier to understand scale, materials and key functions before purchase or implementation. We prepare optimized 3D models and interactions for mobile devices and presentations.": "AR-Erlebnisse platzieren ein Produkt oder Konzept direkt in der Umgebung des Nutzers. So lassen sich Maßstab, Materialien und wichtige Funktionen vor dem Kauf oder der Einführung leichter verstehen. Wir erstellen optimierte 3D-Modelle und Interaktionen für Mobilgeräte und Präsentationen.",
  "We optimize 3D models for smooth operation in realtime applications. Geometry, textures and materials are adapted to the target device and performance budget. The result is faster loading and consistent visual quality.": "Wir optimieren 3D-Modelle für den flüssigen Einsatz in Echtzeit-Anwendungen. Geometrie, Texturen und Materialien werden an das Zielgerät und das Leistungsbudget angepasst. Das Ergebnis sind kürzere Ladezeiten und eine einheitliche visuelle Qualität.",
  "We transform architectural models into clear interactive presentations. The experience supports design reviews, sales conversations and stakeholder decisions. It can combine building context, materials, variants and navigation.": "Wir verwandeln Architekturmodelle in klare interaktive Präsentationen. Das Erlebnis unterstützt Entwurfsprüfungen, Verkaufsgespräche und Entscheidungen von Projektbeteiligten. Es kann Gebäudekontext, Materialien, Varianten und Navigation verbinden.",
  "We create immersive VR experiences for training, presentation and exploration. Users can understand spaces, processes and product interactions at a practical scale. We design the solution for a specific device, audience and implementation goal.": "Wir entwickeln immersive VR-Erlebnisse für Schulung, Präsentation und Erkundung. Nutzer können Räume, Prozesse und Produktinteraktionen in einem praktischen Maßstab verstehen. Wir gestalten die Lösung für ein bestimmtes Gerät, eine Zielgruppe und ein Einführungsziel.",
  "Interactive product, architecture, AR and VR offers supported by optimized realtime 3D content.": "Interaktive Produkt-, Architektur-, AR- und VR-Lösungen auf Basis optimierter Echtzeit-3D-Inhalte.",
  "Selected work across realtime 3D, games and interactive production": "Ausgewählte Arbeiten aus Echtzeit-3D, Spielen und interaktiver Produktion",
  "Explore selected projects delivered directly by Solverto and in collaboration with partner studios - from realtime architecture and game environments to interactive experiences and original games.": "Entdecken Sie ausgewählte Projekte, die Solverto direkt oder gemeinsam mit Partnerstudios umgesetzt hat, von Echtzeit-Architektur und Spielumgebungen bis zu interaktiven Erlebnissen und eigenen Spielen.",
  "Projects with a clear production contribution": "Projekte mit klar dokumentiertem Produktionsbeitrag",
  "Selected work across architecture, game development, interactive experiences and production support.": "Ausgewählte Arbeiten aus Architektur, Spieleentwicklung, interaktiven Erlebnissen und Produktionsunterstützung.",
  "Solverto realtime 3D, architecture, games and metaverse projects": "Solverto-Projekte aus Echtzeit-3D, Architektur, Spielen und Metaverse",
  "Projects": "Projekte",
  "Browse by production area.": "Nach Produktionsbereich durchsuchen.",
  "Focused production support, model corrections, animation work and project analysis completed within partner-led architecture workflows.": "Gezielte Produktionsunterstützung, Modellkorrekturen, Animationen und Projektanalysen in partnergeführten Architekturabläufen.",
  "Solverto also contributed to selected architecture and realtime real estate projects in cooperation with SQUAREBYTES GmbH.": "Solverto wirkte außerdem gemeinsam mit SQUAREBYTES GmbH an ausgewählten Architektur- und Echtzeit-Immobilienprojekten mit.",
  "Solverto has contributed to commercial game projects through level creation, 3D environment production, programming support, metaverse locations, game areas, avatars, animations and original game development.": "Solverto unterstützte kommerzielle Spieleprojekte durch Levelerstellung, 3D-Umgebungsproduktion, Programmierunterstützung, Metaverse-Orte, Spielbereiche, Avatare, Animationen und die Entwicklung eigener Spiele.",
  "Digital Twin and realtime 3D environment production support for interactive locations.": "Produktionsunterstützung für digitale Zwillinge und Echtzeit-3D-Umgebungen interaktiver Orte.",
  "Solverto Games currently operates under Solverto Studio and focuses on original games, experimental projects, web3 mini-games and commercial game development.": "Solverto Games ist derzeit Teil von Solverto Studio und konzentriert sich auf eigene Spiele, experimentelle Projekte, Web3-Minispiele und kommerzielle Spieleentwicklung.",
  "Music Room / Metaverse": "Musikraum / Metaverse",
  "Music room environment production support": "Produktionsunterstützung für Musikraum-Umgebungen",
  "3D environment and location production support for a themed metaverse music room.": "Unterstützung bei der Produktion von 3D-Umgebungen und Orten für einen thematischen Metaverse-Musikraum.",
  "Metaverse Maze": "Metaverse-Labyrinth",
  "Pulse Guys / Metaverse Game Level": "Pulse Guys / Metaverse-Spiellevel",
  "Metaverse Game Area": "Metaverse-Spielbereich",
  "Test processes and train people without interrupting real operations.": "Testen Sie Prozesse und schulen Sie Menschen, ohne den realen Betrieb zu unterbrechen.",
  "XR training prototype": "XR-Schulungsprototyp",
  "A focused training scenario that can be reviewed before a wider implementation.": "Ein fokussiertes Schulungsszenario, das vor einer breiteren Einführung geprüft werden kann.",
  "Interactive simulation": "Interaktive Simulation",
  "A controllable process or environment with clear interactions and feedback.": "Ein steuerbarer Prozess oder eine steuerbare Umgebung mit klaren Interaktionen und Rückmeldungen.",
  "Product visualization": "Produktvisualisierung",
  "A practical way to present scale, features and use in AR or VR.": "Eine praktische Möglichkeit, Maßstab, Funktionen und Nutzung in AR oder VR zu zeigen.",
  "Proof of concept": "Machbarkeitsnachweis",
  "A working build that validates the experience, device fit and next production step.": "Ein funktionierender Build, der das Erlebnis, die Eignung des Geräts und den nächsten Produktionsschritt prüft.",
  "Operational digital twin": "Operativer digitaler Zwilling",
  "A navigable 3D representation with data, controls or operational states where they are needed.": "Eine navigierbare 3D-Darstellung mit Daten, Steuerungen oder Betriebszuständen an den benötigten Stellen.",
  "Digital product prototype": "Digitaler Produktprototyp",
  "A focused interactive proof of concept for internal validation, presentation or investor conversations.": "Ein fokussierter interaktiver Machbarkeitsnachweis für interne Prüfung, Präsentation oder Investorengespräche.",
  "Production-ready 3D model": "Produktionsreifes 3D-Modell",
  "Clean geometry, materials, hierarchy and variants prepared for the chosen platform.": "Saubere Geometrie, Materialien, Hierarchie und Varianten für die gewählte Plattform.",
  "Configurator and showroom": "Konfigurator und Showroom",
  "Interactive product choices, camera states and presentation flows for customers or sales teams.": "Interaktive Produktoptionen, Kamerazustände und Präsentationsabläufe für Kunden oder Vertriebsteams.",
  "Reusable content pipeline": "Wiederverwendbare Content-Pipeline",
  "One organized 3D source prepared for stills, animation, realtime and future iterations.": "Eine organisierte 3D-Quelle für Standbilder, Animation, Echtzeit und spätere Iterationen.",
  "Level production": "Levelproduktion",
  "Blockout, environment building, set dressing, lighting and a final optimization pass.": "Blockout, Umgebungsaufbau, Set Dressing, Beleuchtung und abschließende Optimierung.",
  "Environment assets": "Umgebungs-Assets",
  "Modular kits, props and location-specific elements prepared for practical reuse.": "Modulare Kits, Requisiten und ortsspezifische Elemente für die praktische Wiederverwendung.",
  "Technical art support": "Technical-Art-Unterstützung",
  "Materials, LODs, collisions, profiling and asset cleanup for the target engine.": "Materialien, LODs, Kollisionen, Profiling und Asset-Bereinigung für die Ziel-Engine.",
  "Flexible production support": "Flexible Produktionsunterstützung",
  "Focused support for a milestone, vertical slice or content-heavy production stage.": "Gezielte Unterstützung für einen Meilenstein, Vertical Slice oder eine inhaltsintensive Produktionsphase.",
  "Playable prototype": "Spielbarer Prototyp",
  "The smallest useful build that validates the core mechanic and player experience.": "Der kleinste sinnvolle Build zur Prüfung der Kernmechanik und Spielerfahrung.",
  "Vertical slice": "Vertical Slice",
  "A presentation-ready fragment showing the intended quality, content and production direction.": "Ein präsentationsfertiger Ausschnitt, der die angestrebte Qualität, Inhalte und Produktionsrichtung zeigt.",
  "Branded mini-game": "Marken-Minispiel",
  "A compact game experience for a campaign, event, community or web platform.": "Ein kompaktes Spielerlebnis für eine Kampagne, Veranstaltung, Community oder Webplattform.",
  "Custom game production": "Individuelle Spieleproduktion",
  "Design, development, 3D content and delivery organized around an agreed scope.": "Design, Entwicklung, 3D-Inhalte und Auslieferung auf Basis eines vereinbarten Umfangs.",
  "3D product animation": "3D-Produktanimation",
  "Product, architectural and technical animation focused on clarity and visual quality.": "Produkt-, Architektur- und technische Animation mit Fokus auf Klarheit und visuelle Qualität.",
  "Game trailers and video editing": "Spieltrailer und Videoschnitt",
  "Editing, pacing, titles and final outputs for games, campaigns and presentations.": "Schnitt, Tempo, Titel und finale Ausgaben für Spiele, Kampagnen und Präsentationen.",
  "Realtime characters and avatars": "Echtzeit-Charaktere und Avatare",
  "Character preparation, optimization, materials and animation for interactive platforms.": "Charaktervorbereitung, Optimierung, Materialien und Animation für interaktive Plattformen.",
  "Production support": "Produktionsunterstützung",
  "A defined animation, editing or asset task integrated with an existing team and pipeline.": "Eine klar definierte Animations-, Schnitt- oder Asset-Aufgabe, integriert in ein bestehendes Team und eine bestehende Pipeline."
});

Object.assign(translationCorrections.de, {
  "Show a space before it exists - or understand it better once it does. We turn architectural documentation, BIM data and existing locations into clear realtime experiences for sales, planning and presentation.": "Zeigen Sie einen Raum, bevor er existiert, oder verstehen Sie ihn besser, sobald er vorhanden ist. Wir verwandeln Architekturdokumentation, BIM-Daten und bestehende Orte in klare Echtzeit-Erlebnisse für Vertrieb, Planung und Präsentation.",
  "Show a space before it exists - or understand it better once it does.": "Zeigen Sie einen Raum, bevor er existiert, oder verstehen Sie ihn besser, sobald er vorhanden ist.",
  "We help developers, architects and technology companies transform complex spatial information into an experience that clients and teams can explore. The result can support a sales meeting, stakeholder review, training scenario or an operational digital twin.": "Wir helfen Entwicklern, Architekten und Technologieunternehmen, komplexe räumliche Informationen in ein Erlebnis zu verwandeln, das Kunden und Teams erkunden können. Das Ergebnis kann Verkaufsgespräche, Projektprüfungen, Schulungsszenarien oder einen operativen digitalen Zwilling unterstützen.",
  "Realtime property presentation": "Echtzeit-Immobilienpräsentation",
  "Interactive estates, buildings and apartments that clients can explore before construction is complete.": "Interaktive Wohnanlagen, Gebäude und Wohnungen, die Kunden bereits vor Abschluss der Bauarbeiten erkunden können.",
  "BIM/CAD optimization": "BIM/CAD-Optimierung",
  "Technical models cleaned, structured and optimized for reliable realtime use.": "Technische Modelle, bereinigt, strukturiert und für eine zuverlässige Echtzeit-Nutzung optimiert.",
  "Interactive sales tools": "Interaktive Vertriebswerkzeuge",
  "Views, variants, filters and guided journeys designed around customer decisions.": "Ansichten, Varianten, Filter und geführte Abläufe, die auf Kundenentscheidungen ausgerichtet sind.",
  "We turn a product idea, sketch, CAD file or existing model into a digital product prototype that can be reviewed and tested before a larger investment.": "Wir verwandeln eine Produktidee, Skizze, CAD-Datei oder ein bestehendes Modell in einen digitalen Produktprototyp, der vor einer größeren Investition geprüft und getestet werden kann.",
  "Validate the product experience before investing in the complete solution.": "Prüfen Sie das Produkterlebnis, bevor Sie in die vollständige Lösung investieren.",
  "A focused prototype helps your team test form, interaction, presentation and technical feasibility early. The same prepared assets can later support configurators, AR, animation, marketing renders or realtime applications.": "Ein fokussierter Prototyp hilft Ihrem Team, Form, Interaktion, Präsentation und technische Machbarkeit frühzeitig zu prüfen. Dieselben vorbereiteten Assets können später Konfiguratoren, AR, Animationen, Marketing-Renderings oder Echtzeit-Anwendungen unterstützen.",
  "We support game studios with level creation, environment production and technical preparation of assets - from a defined brief to content ready for implementation.": "Wir unterstützen Spielestudios bei Levelerstellung, Umgebungsproduktion und technischer Vorbereitung von Assets, vom klaren Briefing bis zu implementierungsbereiten Inhalten.",
  "Extend your production capacity without losing visual and technical consistency.": "Erweitern Sie Ihre Produktionskapazität, ohne visuelle und technische Konsistenz zu verlieren.",
  "We can take responsibility for a complete location or a clearly defined asset package. Work is aligned with the game's style, performance target, engine requirements and the way your team already reviews content.": "Wir können die Verantwortung für einen vollständigen Ort oder ein klar definiertes Asset-Paket übernehmen. Die Arbeit wird an Stil, Leistungsziel, Engine-Anforderungen und den bestehenden Prüfprozess Ihres Teams angepasst.",
  "We help turn a game idea, campaign concept or training goal into something playable - first as a focused prototype, then as a production-ready scope.": "Wir machen aus einer Spielidee, einem Kampagnenkonzept oder einem Schulungsziel etwas Spielbares, zunächst als fokussierten Prototyp und anschließend als produktionsreifen Umfang.",
  "Test the fun, technology and production risk with a working build.": "Prüfen Sie Spielspaß, Technologie und Produktionsrisiko mit einem funktionierenden Build.",
  "A playable prototype makes decisions easier than a long document. We focus on the core loop, the feeling of interaction and the technical unknowns, then provide a clear basis for further development or full production.": "Ein spielbarer Prototyp erleichtert Entscheidungen stärker als ein langes Dokument. Wir konzentrieren uns auf die Kernschleife, das Interaktionsgefühl und technische Unbekannte und schaffen eine klare Grundlage für weitere Entwicklung oder vollständige Produktion.",
  "We prepare moving content and realtime characters that explain, present and strengthen a product, game or digital experience.": "Wir erstellen bewegte Inhalte und Echtzeit-Charaktere, die ein Produkt, Spiel oder digitales Erlebnis erklären, präsentieren und stärken.",
  "Turn complex ideas and static assets into clear, engaging movement.": "Verwandeln Sie komplexe Ideen und statische Assets in klare, ansprechende Bewegung.",
  "Depending on the goal, we can support the complete process or a focused production stage: storyboard, 3D preparation, animation, avatar optimization, rendering, editing and final platform-specific outputs.": "Je nach Ziel unterstützen wir den gesamten Prozess oder eine fokussierte Produktionsphase: Storyboard, 3D-Vorbereitung, Animation, Avatar-Optimierung, Rendering, Schnitt und finale plattformspezifische Ausgaben.",
  "Validate a practical XR scenario before scaling it.": "Prüfen Sie ein praktisches XR-Szenario, bevor Sie es skalieren.",
  "We create focused VR and AR prototypes for training, process simulation, product visualization and proof of concept. Each solution is shaped around the users, target device and decision it needs to support.": "Wir entwickeln fokussierte VR- und AR-Prototypen für Schulungen, Prozesssimulationen, Produktvisualisierung und Machbarkeitsnachweise. Jede Lösung wird auf Nutzer, Zielgerät und die zu unterstützende Entscheidung zugeschnitten."
});

Object.assign(translationCorrections.pl, {
  "A trailer presenting the Painter Simulator demo on Steam. The video shows the character of the game, its visual style and key gameplay elements. It is an example of video communication supporting a project launch.": "Trailer prezentujący wersję demonstracyjną Painter Simulator na Steam. Materiał pokazuje charakter gry, jej oprawę oraz najważniejsze elementy rozgrywki. To przykład komunikacji wideo wspierającej premierę projektu.",
  "A gameplay trailer prepared for Steam Next Fest. The video presents painting mechanics, interaction with the environment and the range of available tasks. Dynamic editing communicates the main idea of the game quickly.": "Gameplay trailer przygotowany na Steam Next Fest. Film przedstawia mechaniki malowania, interakcję z otoczeniem i różnorodność dostępnych zadań. Dynamiczny montaż szybko przekazuje główne założenia gry.",
  "The official trailer for the Tarvos Desolation demo. The video builds a science-fiction horror atmosphere while presenting the world, threats and gameplay. Editing and visual storytelling emphasize the mood and key features of the project.": "Oficjalny trailer wersji demonstracyjnej Tarvos Desolation. Materiał buduje klimat science fiction i horroru, prezentując świat, zagrożenia oraz fragmenty rozgrywki. Montaż i narracja wizualna podkreślają atmosferę oraz najważniejsze cechy projektu.",
  "Game Trailer / Video": "Trailer gry / Wideo",
  "Trailer editing and promotional video production": "Montaż trailera i produkcja materiału promocyjnego",
  "Gameplay trailer editing and promotional support": "Montaż trailera gameplay i wsparcie promocyjne",
  "Official demo trailer production and editing": "Produkcja i montaż oficjalnego trailera demo"
});

Object.assign(translationCorrections.de, {
  "A trailer presenting the Painter Simulator demo on Steam. The video shows the character of the game, its visual style and key gameplay elements. It is an example of video communication supporting a project launch.": "Ein Trailer zur Demo von Painter Simulator auf Steam. Das Video zeigt den Charakter des Spiels, seinen visuellen Stil und wichtige Gameplay-Elemente. Es ist ein Beispiel für Videokommunikation zur Unterstützung eines Projektstarts.",
  "A gameplay trailer prepared for Steam Next Fest. The video presents painting mechanics, interaction with the environment and the range of available tasks. Dynamic editing communicates the main idea of the game quickly.": "Ein Gameplay-Trailer für das Steam Next Fest. Das Video zeigt Malmechaniken, Interaktionen mit der Umgebung und die Bandbreite der Aufgaben. Der dynamische Schnitt vermittelt die Grundidee des Spiels schnell.",
  "The official trailer for the Tarvos Desolation demo. The video builds a science-fiction horror atmosphere while presenting the world, threats and gameplay. Editing and visual storytelling emphasize the mood and key features of the project.": "Der offizielle Trailer zur Demo von Tarvos Desolation. Das Video erzeugt eine Science-Fiction-Horror-Atmosphäre und zeigt Welt, Gefahren und Gameplay. Schnitt und visuelles Storytelling betonen Stimmung und Hauptmerkmale des Projekts.",
  "Game Trailer / Video": "Spieltrailer / Video",
  "Trailer editing and promotional video production": "Trailerschnitt und Produktion von Werbevideos",
  "Gameplay trailer editing and promotional support": "Gameplay-Trailerschnitt und Werbeunterstützung",
  "Official demo trailer production and editing": "Produktion und Schnitt des offiziellen Demo-Trailers",
  "Play video": "Video abspielen"
});

Object.assign(translationCorrections.pl, {
  "Partner studio cooperation": "Współpraca ze studiem partnerskim",
  "Project involvement": "Udział w projekcie",
  "Solverto production support": "Wsparcie produkcyjne Solverto",
  "YSLAB/RESIMO cooperation": "Współpraca z YSLAB/RESIMO",
  "SQUAREBYTES GmbH / partner cooperation": "SQUAREBYTES GmbH / współpraca partnerska",
  "Production materials in preparation": "Materiały produkcyjne w przygotowaniu",
  "What we can deliver": "Co możemy dostarczyć",
  "Final client": "Klient końcowy",
  "Delivered for": "Realizacja dla",
  "Scope of work": "Zakres prac",
  "Interactive architecture, property presentations and digital replicas that make spaces and data easier to understand. We contributed to more than 60 projects.": "Interaktywna architektura, prezentacje nieruchomości i cyfrowe odwzorowania, które ułatwiają zrozumienie przestrzeni i danych. Wnieśliśmy wkład w ponad 60 projektów.",
  "Residential investment modelling and support for preparing the project for realtime real estate presentation.": "Modelowanie inwestycji mieszkaniowej oraz wsparcie w przygotowaniu projektu do prezentacji nieruchomości w czasie rzeczywistym.",
  "Game prototype and production support": "Prototyp gry i wsparcie produkcyjne",
  "Game prototype and production support.": "Prototyp gry i wsparcie produkcyjne.",
  "Game development and production support": "Tworzenie gry i wsparcie produkcyjne",
  "Game development and production support.": "Tworzenie gry i wsparcie produkcyjne.",
  "Avatars / Animation": "Avatary / Animacja",
  "Avatars - Optimization": "Avatary - optymalizacja",
  "Avatar creation, optimization and animation support": "Tworzenie i optymalizacja avatarów oraz wsparcie animacji",
  "Creation, optimization and animation support for avatars prepared for realtime interactive experiences.": "Tworzenie, optymalizacja i wsparcie animacji avatarów przygotowanych do interaktywnych doświadczeń realtime.",
  "Digital Twin environment production support": "Wsparcie produkcji środowiska Digital Twin",
  "Digital Twin environment and realtime 3D location production support.": "Wsparcie produkcji środowiska Digital Twin i lokacji 3D realtime.",
  "Projects by production area": "Projekty według obszaru produkcji",
  "Browse projects across realtime architecture, games, interactive experiences and production support.": "Przeglądaj projekty z obszaru architektury realtime, gier, interaktywnych doświadczeń i wsparcia produkcyjnego.",
  "Show a space before it exists - or understand it better once it does. We turn architectural documentation, BIM data and existing locations into clear realtime experiences for sales, planning and presentation.": "Pokaż przestrzeń, zanim powstanie, albo lepiej ją zrozum, gdy już istnieje. Przekształcamy dokumentację architektoniczną, dane BIM i istniejące lokalizacje w czytelne doświadczenia realtime wspierające sprzedaż, planowanie i prezentację.",
  "We turn a product idea, sketch, CAD file or existing model into a digital product prototype that can be reviewed and tested before a larger investment.": "Przekształcamy pomysł na produkt, szkic, plik CAD lub istniejący model w cyfrowy prototyp produktu, który można ocenić i przetestować przed większą inwestycją.",
  "Solverto production areas and project data": "Obszary produkcji i dane projektów Solverto",
  "Maze": "Labirynty",
  "Music Room": "Pokoje muzyczne",
  "Solverto Games": "Solverto Games",
  "Production with purpose": "Produkcja z konkretnym celem",
  "Solverto combines realtime 3D, game development and XR to help teams turn source materials or early ideas into results they can review, test and use.": "Solverto łączy 3D realtime, tworzenie gier i XR, aby pomagać zespołom przekształcać materiały źródłowe lub wczesne pomysły w rezultaty, które można ocenić, przetestować i wykorzystać.",
  "A clear production core for interactive work.": "Jasny rdzeń produkcyjny dla projektów interaktywnych.",
  "We bring together 3D production, realtime technology, game development and XR around a practical production goal.": "Łączymy produkcję 3D, technologię realtime, tworzenie gier i XR wokół konkretnego celu produkcyjnego.",
  "From the first useful prototype to a working interactive experience, each stage is planned so it can be reviewed and used in the next decision.": "Od pierwszego użytecznego prototypu do działającego doświadczenia interaktywnego każdy etap planujemy tak, aby można go było ocenić i wykorzystać przy kolejnej decyzji.",
  "Current production": "Obecna produkcja",
  "Two focused production teams.": "Dwa wyspecjalizowane zespoły produkcyjne.",
  "Solverto is being developed as a broader creative technology ecosystem, while current production is focused on Solverto Studio and Solverto Games.": "Solverto rozwija się jako szerszy ekosystem technologii kreatywnych, a obecna produkcja skupia się na Solverto Studio i Solverto Games.",
  "We will review the goal, available materials and constraints and suggest a practical first step.": "Przeanalizujemy cel, dostępne materiały i ograniczenia oraz zaproponujemy praktyczny pierwszy krok.",
  "Tell us what you are working on. We will review the goal, available materials and constraints and suggest a practical first step.": "Opowiedz nam, nad czym pracujesz. Przeanalizujemy cel, dostępne materiały i ograniczenia oraz zaproponujemy praktyczny pierwszy krok.",
  "Cooperation and scope.": "Współpraca i zakres.",
  "Project media.": "Materiały projektowe.",
  "Approved project graphics are shown here when available.": "W tym miejscu prezentujemy zatwierdzone materiały graficzne projektu, jeśli są dostępne.",
  "3D optimization": "Optymalizacja 3D",
  "Augmented reality": "Rzeczywistość rozszerzona",
  "Virtual reality": "Rzeczywistość wirtualna"
});

Object.assign(translationCorrections.de, {
  "Partner studio cooperation": "Zusammenarbeit mit Partnerstudio",
  "Project involvement": "Projektbeteiligung",
  "Solverto production support": "Produktionsunterstützung durch Solverto",
  "YSLAB/RESIMO cooperation": "Zusammenarbeit mit YSLAB/RESIMO",
  "SQUAREBYTES GmbH / partner cooperation": "SQUAREBYTES GmbH / Partnerkooperation",
  "Production materials in preparation": "Produktionsmaterialien in Vorbereitung",
  "What we can deliver": "Was wir liefern können",
  "Final client": "Endkunde",
  "Delivered for": "Realisiert für",
  "Scope of work": "Arbeitsumfang",
  "Interactive architecture, property presentations and digital replicas that make spaces and data easier to understand. We contributed to more than 60 projects.": "Interaktive Architektur, Immobilienpräsentationen und digitale Abbilder, die Räume und Daten leichter verständlich machen. Wir haben an mehr als 60 Projekten mitgewirkt.",
  "Residential investment modelling and support for preparing the project for realtime real estate presentation.": "Modellierung von Wohninvestitionen und Unterstützung bei der Vorbereitung des Projekts für eine Echtzeit-Immobilienpräsentation.",
  "Game prototype and production support": "Spielprototyp und Produktionsunterstützung",
  "Game prototype and production support.": "Spielprototyp und Produktionsunterstützung.",
  "Game development and production support": "Spieleentwicklung und Produktionsunterstützung",
  "Game development and production support.": "Spieleentwicklung und Produktionsunterstützung.",
  "Avatars / Animation": "Avatare / Animation",
  "Avatars - Optimization": "Avatare - Optimierung",
  "Avatar creation, optimization and animation support": "Erstellung und Optimierung von Avataren sowie Animationsunterstützung",
  "Creation, optimization and animation support for avatars prepared for realtime interactive experiences.": "Erstellung, Optimierung und Animationsunterstützung für Avatare in interaktiven Echtzeit-Erlebnissen.",
  "Digital Twin environment production support": "Produktionsunterstützung für eine Digital-Twin-Umgebung",
  "Digital Twin environment and realtime 3D location production support.": "Produktionsunterstützung für eine Digital-Twin-Umgebung und einen Echtzeit-3D-Ort.",
  "Projects by production area": "Projekte nach Produktionsbereich",
  "Browse projects across realtime architecture, games, interactive experiences and production support.": "Durchsuchen Sie Projekte aus Echtzeit-Architektur, Spielen, interaktiven Erlebnissen und Produktionsunterstützung.",
  "All presented projects are real Solverto productions. Extended descriptions, visual materials, and selected case studies will be added progressively.": "Alle gezeigten Projekte sind reale Produktionen von Solverto. Erweiterte Beschreibungen, Bildmaterial und ausgewählte Fallstudien werden schrittweise ergänzt.",
  "Solverto production areas and project data": "Produktionsbereiche und Projektdaten von Solverto",
  "Maze": "Labyrinthe",
  "Music Room": "Musikräume",
  "Production with purpose": "Produktion mit klarem Ziel",
  "Solverto combines realtime 3D, game development and XR to help teams turn source materials or early ideas into results they can review, test and use.": "Solverto verbindet Echtzeit-3D, Spieleentwicklung und XR, damit Teams Ausgangsmaterialien oder frühe Ideen in Ergebnisse verwandeln können, die sich prüfen, testen und einsetzen lassen.",
  "A clear production core for interactive work.": "Ein klarer Produktionskern für interaktive Projekte.",
  "We bring together 3D production, realtime technology, game development and XR around a practical production goal.": "Wir verbinden 3D-Produktion, Echtzeit-Technologie, Spieleentwicklung und XR rund um ein konkretes Produktionsziel.",
  "From the first useful prototype to a working interactive experience, each stage is planned so it can be reviewed and used in the next decision.": "Vom ersten nützlichen Prototyp bis zum funktionierenden interaktiven Erlebnis wird jede Phase so geplant, dass sie geprüft und für die nächste Entscheidung genutzt werden kann.",
  "Current production": "Aktuelle Produktion",
  "Two focused production teams.": "Zwei spezialisierte Produktionsteams.",
  "Solverto is being developed as a broader creative technology ecosystem, while current production is focused on Solverto Studio and Solverto Games.": "Solverto wird als breiteres Ökosystem für Kreativtechnologie entwickelt, während sich die aktuelle Produktion auf Solverto Studio und Solverto Games konzentriert.",
  "We will review the goal, available materials and constraints and suggest a practical first step.": "Wir prüfen Ziel, verfügbare Materialien und Einschränkungen und schlagen einen praktischen ersten Schritt vor.",
  "Tell us what you are working on. We will review the goal, available materials and constraints and suggest a practical first step.": "Erzählen Sie uns, woran Sie arbeiten. Wir prüfen Ziel, verfügbare Materialien und Einschränkungen und schlagen einen praktischen ersten Schritt vor.",
  "Cooperation and scope.": "Zusammenarbeit und Umfang.",
  "Project media.": "Projektmaterialien.",
  "Approved project graphics are shown here when available.": "Hier werden freigegebene Projektgrafiken gezeigt, sofern sie verfügbar sind.",
  "3D optimization": "3D-Optimierung",
  "Augmented reality": "Augmented Reality",
  "Virtual reality": "Virtual Reality"
});

Object.entries(translationCorrections).forEach(([language, entries]) => {
  supplementalTranslations[language] ||= {};
  Object.assign(supplementalTranslations[language], entries);
});

function storedLanguage() {
  const pageLanguage = document.documentElement.dataset.pageLanguage;
  if (document.documentElement.dataset.privacyPage && languageOptions.some(([code]) => code === pageLanguage)) {
    return pageLanguage;
  }
  try {
    const value = localStorage.getItem("solverto-language");
    return languageOptions.some(([code]) => code === value) ? value : "en";
  } catch {
    return "en";
  }
}

let selectedLanguage = document.documentElement.dataset.pageLanguage || storedLanguage();

function privacyPageForLanguage(language = selectedLanguage) {
  if (language === "de") return "privacy-de.html";
  if (language === "en") return "privacy-en.html";
  return "privacy.html";
}

function translatedText(source, language = selectedLanguage) {
  return language === "en"
    ? source
    : translationCorrections[language]?.[source] || translations[language]?.[source] || supplementalTranslations[language]?.[source] || translateDynamicText(source, language);
}

function translateDynamicText(source, language) {
  const phraseReplacements = {
    pl: {
      " / YSLAB/RESIMO cooperation": " / współpraca z YSLAB/RESIMO", " / partner cooperation": " / współpraca partnerska", " / project involvement": " / udział w projekcie", "Partner studio cooperation": "Współpraca ze studiem partnerskim", "Project involvement": "Udział w projekcie",
      "metaverse maze environment for ": "środowisko labiryntu metaverse: ", "metaverse game area for ": "obszar gry metaverse: ", "metaverse environment for ": "środowisko metaverse: ", "Pulse Guys level for ": "poziom Pulse Guys: ", " level for ": " - poziom dla ", " mini-game collection": " - kolekcja minigier", " mini-game": " - minigra", " game": " - gra",
      " avatars and animations": " - awatary i animacje", " sci-fi horror environment": " - środowisko horroru science fiction", " sci-fi horror scene": " - scena horroru science fiction", " residential estate realtime 3D model": " - model 3D osiedla w czasie rzeczywistym", " large residential masterplan": " - rozległy plan osiedla", " level environment": " - środowisko poziomu", "metaverse music room environment": "środowisko pokoju muzycznego metaverse", " arcade mini-game collection": " - kolekcja minigier zręcznościowych", " residential masterplan": " - plan osiedla", " estate model": " - model osiedla", " residential buildings": " - budynki mieszkalne", " architecture model": " - model architektoniczny", " residential towers": " - wieże mieszkalne"
    },
    de: {
      " / YSLAB/RESIMO cooperation": " / Zusammenarbeit mit YSLAB/RESIMO", " / partner cooperation": " / Partnerkooperation", " / project involvement": " / Projektbeteiligung", "Partner studio cooperation": "Zusammenarbeit mit Partnerstudio", "Project involvement": "Projektbeteiligung",
      "metaverse maze environment for ": "Metaverse-Labyrinthumgebung: ", "metaverse game area for ": "Metaverse-Spielbereich: ", "metaverse environment for ": "Metaverse-Umgebung: ", "Pulse Guys level for ": "Pulse-Guys-Level: ", " level for ": " - Level für ", " mini-game collection": " - Minispielsammlung", " mini-game": " - Minispiel", " game": " - Spiel",
      " avatars and animations": " - Avatare und Animationen", " sci-fi horror environment": " - Sci-Fi-Horror-Umgebung", " sci-fi horror scene": " - Sci-Fi-Horror-Szene", " residential estate realtime 3D model": " - Echtzeit-3D-Modell der Wohnanlage", " large residential masterplan": " - großer Wohn-Masterplan", " level environment": " - Level-Umgebung", "metaverse music room environment": "Metaverse-Musikraumumgebung", " arcade mini-game collection": " - Arcade-Minispielsammlung", " residential masterplan": " - Wohn-Masterplan", " estate model": " - Wohnanlagenmodell", " residential buildings": " - Wohngebäude", " architecture model": " - Architekturmodell", " residential towers": " - Wohntürme"
    },
    es: {
      " / YSLAB/RESIMO cooperation": " / colaboración con YSLAB/RESIMO", " / partner cooperation": " / colaboración con socios", " / project involvement": " / participación en el proyecto", "Partner studio cooperation": "Colaboración con un estudio asociado", "Project involvement": "Participación en el proyecto",
      "metaverse maze environment for ": "entorno de laberinto del metaverso: ", "metaverse game area for ": "zona de juego del metaverso: ", "metaverse environment for ": "entorno del metaverso: ", "Pulse Guys level for ": "nivel de Pulse Guys: ", " level for ": " - nivel para ", " mini-game collection": " - colección de minijuegos", " mini-game": " - minijuego", " game": " - juego",
      " avatars and animations": " - avatares y animaciones", " sci-fi horror environment": " - entorno de terror y ciencia ficción", " sci-fi horror scene": " - escena de terror y ciencia ficción", " residential estate realtime 3D model": " - modelo 3D en tiempo real del complejo residencial", " large residential masterplan": " - gran plan maestro residencial", " level environment": " - entorno de nivel", "metaverse music room environment": "entorno de sala musical del metaverso", " arcade mini-game collection": " - colección de minijuegos arcade", " residential masterplan": " - plan maestro residencial", " estate model": " - modelo del complejo", " residential buildings": " - edificios residenciales", " architecture model": " - modelo arquitectónico", " residential towers": " - torres residenciales"
    },
    pt: {
      " / YSLAB/RESIMO cooperation": " / colaboração com YSLAB/RESIMO", " / partner cooperation": " / colaboração com parceiros", " / project involvement": " / participação no projeto", "Partner studio cooperation": "Colaboração com estúdio parceiro", "Project involvement": "Participação no projeto",
      "metaverse maze environment for ": "ambiente de labirinto do metaverso: ", "metaverse game area for ": "área de jogo do metaverso: ", "metaverse environment for ": "ambiente do metaverso: ", "Pulse Guys level for ": "nível Pulse Guys: ", " level for ": " - nível para ", " mini-game collection": " - coleção de minijogos", " mini-game": " - minijogo", " game": " - jogo",
      " avatars and animations": " - avatares e animações", " sci-fi horror environment": " - ambiente de terror e ficção científica", " sci-fi horror scene": " - cena de terror e ficção científica", " residential estate realtime 3D model": " - modelo 3D em tempo real do empreendimento residencial", " large residential masterplan": " - grande plano diretor residencial", " level environment": " - ambiente de nível", "metaverse music room environment": "ambiente de sala de música do metaverso", " arcade mini-game collection": " - coleção de minijogos arcade", " residential masterplan": " - plano diretor residencial", " estate model": " - modelo do empreendimento", " residential buildings": " - edifícios residenciais", " architecture model": " - modelo arquitetónico", " residential towers": " - torres residenciais"
    },
    it: {
      " / YSLAB/RESIMO cooperation": " / collaborazione con YSLAB/RESIMO", " / partner cooperation": " / collaborazione con partner", " / project involvement": " / partecipazione al progetto", "Partner studio cooperation": "Collaborazione con studio partner", "Project involvement": "Partecipazione al progetto",
      "metaverse maze environment for ": "ambiente labirinto metaverso: ", "metaverse game area for ": "area di gioco metaverso: ", "metaverse environment for ": "ambiente metaverso: ", "Pulse Guys level for ": "livello Pulse Guys: ", " level for ": " - livello per ", " mini-game collection": " - raccolta di minigiochi", " mini-game": " - minigioco", " game": " - gioco",
      " avatars and animations": " - avatar e animazioni", " sci-fi horror environment": " - ambiente horror fantascientifico", " sci-fi horror scene": " - scena horror fantascientifica", " residential estate realtime 3D model": " - modello 3D in tempo reale del complesso residenziale", " large residential masterplan": " - grande masterplan residenziale", " level environment": " - ambiente del livello", "metaverse music room environment": "ambiente della sala musicale del metaverso", " arcade mini-game collection": " - raccolta di minigiochi arcade", " residential masterplan": " - masterplan residenziale", " estate model": " - modello del complesso", " residential buildings": " - edifici residenziali", " architecture model": " - modello architettonico", " residential towers": " - torri residenziali"
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
  const portfolioTitle = source.match(/^(.+) - Solverto Portfolio$/);
  if (portfolioTitle) {
    const suffixes = { pl: "Portfolio Solverto", de: "Solverto-Portfolio", es: "Portafolio de Solverto", pt: "Portfólio da Solverto", it: "Portfolio Solverto" };
    return `${portfolioTitle[1]} - ${suffixes[language] || "Solverto Portfolio"}`;
  }
  const exploreLabel = source.match(/^Explore (.+)$/);
  if (exploreLabel) return `${translatedText("Explore the area", language)}: ${translatedText(exploreLabel[1], language)}`;
  const portfolioImage = source.match(/^(.+) - Solverto portfolio image (\d+)$/);
  if (portfolioImage) {
    const labels = { pl: "obraz portfolio Solverto", de: "Solverto-Portfolio-Bild", es: "imagen del portafolio de Solverto", pt: "imagem do portfólio da Solverto", it: "immagine del portfolio Solverto" };
    const projectName = ["Optimization", "Architecture"].includes(portfolioImage[1]) ? translatedText(portfolioImage[1], language) : portfolioImage[1];
    return `${projectName} - ${labels[language] || "Solverto portfolio image"} ${portfolioImage[2]}`;
  }
  const projectImage = source.match(/^(.+) - Solverto project image$/);
  if (projectImage) {
    const labels = { pl: "obraz projektu Solverto", de: "Solverto-Projektbild", es: "imagen del proyecto Solverto", pt: "imagem do projeto Solverto", it: "immagine del progetto Solverto" };
    const projectName = ["Optimization", "Architecture"].includes(projectImage[1]) ? translatedText(projectImage[1], language) : projectImage[1];
    return `${projectName} - ${labels[language] || "Solverto project image"}`;
  }
  const portfolioHeroImage = source.match(/^(.+) - Solverto portfolio hero image$/);
  if (portfolioHeroImage) {
    const labels = { pl: "główny obraz portfolio Solverto", de: "Solverto-Portfolio-Titelbild", es: "imagen principal del portafolio de Solverto", pt: "imagem principal do portfólio da Solverto", it: "immagine principale del portfolio Solverto" };
    return `${portfolioHeroImage[1]} - ${labels[language] || "Solverto portfolio hero image"}`;
  }
  const productionAreaIntro = source.match(/^Projects from the (.+) production area\.$/);
  if (productionAreaIntro) {
    const prefixes = { pl: "Projekty z obszaru", de: "Projekte aus dem Produktionsbereich", es: "Proyectos del área", pt: "Projetos da área", it: "Progetti dell'area" };
    return `${prefixes[language] || "Projects from the"} ${translatedText(productionAreaIntro[1], language)}.`;
  }
  const describedProject = source.match(/^([^:]+): (.+)$/);
  if (describedProject) return `${describedProject[1]}: ${translatedText(describedProject[2], language)}`;
  return source;
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
  companyLink.href = "index.html?panel=company";
  companyLink.dataset.homePanelTrigger = "company";
  const homeLink = navMenu.querySelector('a[href="index.html"]');
  if (homeLink && homeLink.nextElementSibling !== companyLink) homeLink.after(companyLink);
  const portfolioLink = navMenu.querySelector('a[href="portfolio.html"], [data-home-panel-trigger="portfolio"]');
  if (!companyLink.isConnected && portfolioLink) portfolioLink.before(companyLink);
  else if (!companyLink.isConnected) navMenu.prepend(companyLink);
  if (portfolioLink) {
    portfolioLink.textContent = "Work";
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
    if (document.documentElement.dataset.privacyPage) {
      window.location.href = privacyPageForLanguage();
      return;
    }
    const languageChange = new CustomEvent("solverto-language-changed", {
      cancelable: true,
      detail: { language: selectedLanguage }
    });
    document.dispatchEvent(languageChange);
    if (!languageChange.defaultPrevented) window.location.reload();
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
  document.querySelectorAll("[data-project-name]").forEach((element) => {
    const source = element.dataset.projectName || element.textContent.trim();
    element.textContent = element.dataset.projectId?.startsWith("product-prototypes-") ? translatedText(source) : source;
  });
  document.querySelectorAll("[data-privacy-link]").forEach((link) => {
    link.setAttribute("href", privacyPageForLanguage());
  });
  const processFlowImage = selectedLanguage === "pl"
    ? "assets/company-process-flow_PL.png"
    : selectedLanguage === "de"
      ? "assets/company-process-flow_DE.png"
      : "assets/company-process-flow_ENG.png";
  document.querySelectorAll("[data-company-process-flow]").forEach((image) => {
    image.setAttribute("src", processFlowImage);
  });
  if (document.querySelector("[data-project-detail]")) renderProjectDetail();
  document.documentElement.dataset.languageReady = "";
  applyTrustAndContactUpdates();
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

function projectDisplayName(project) {
  return project?.id?.startsWith("product-prototypes-") ? translatedText(project.name) : project.name;
}

function projectImagePath(project, index = 1) {
  if (!project?.assetFolder) return "";
  if (project.assetFiles?.[index - 1]) return `${project.assetFolder}/${project.assetFiles[index - 1]}`;
  return `${project.assetFolder}/gallery-${String(index).padStart(2, "0")}.${project.assetExtension || "webp"}`;
}

function projectMediaMarkup(project, index = 1, options = {}) {
  const source = projectImagePath(project, index);
  const extraClass = options.className ? ` ${escapeHtml(options.className)}` : "";
  if (!source) {
    return `<div class="media-placeholder${extraClass}" role="img">${escapeHtml(translatedText("Production materials in preparation"))}</div>`;
  }

  const loading = options.loading || "lazy";
  const alt = translatedText(options.altText || `${project.name} - Solverto portfolio image ${index}`);
  return `<div class="media-placeholder media-image-frame${extraClass}" data-no-lightbox><img src="${escapeHtml(source)}" alt="${escapeHtml(alt)}" loading="${escapeHtml(loading)}" decoding="async" /></div>`;
}

function projectCardMarkup(project, headingLevel = 3, options = {}) {
  const partner = project.partner || "Solverto project";
  const projectGroup = options.groupId || project.groupId || "";
  const showMore = options.showMore !== false;
  const isArchitectureProject = project.category === "Architecture / Realtime Real Estate";
  const projectDetails = isArchitectureProject
    ? `<p class="project-meta"><span>${escapeHtml(translatedText("Final client"))}</span>${escapeHtml(project.finalClient || partner)}${project.country ? ` · ${escapeHtml(project.country)}` : ""}</p>
        <p class="project-meta"><span>${escapeHtml(translatedText("Delivered for"))}</span>${escapeHtml(project.deliveredFor || "YSLAB / RESIMO")}</p>
        <p class="project-meta"><span>${escapeHtml(translatedText("Scope of work"))}</span>${escapeHtml(translatedText(project.scope))}</p>`
    : `<p class="project-meta"><span>Client / Partner</span>${escapeHtml(partner)}${project.country ? ` · ${escapeHtml(project.country)}` : ""}</p>
        <p class="project-meta"><span>Role</span>${escapeHtml(project.role)}</p>`;
  return `
    <article class="project-card reveal" data-project-card data-project-category="${escapeHtml(project.filter || "")}" data-project-group="${escapeHtml(projectGroup)}" data-project-search="${escapeHtml(`${project.name} ${project.category} ${partner} ${project.role} ${project.country}`.toLowerCase())}">
      ${projectMediaMarkup(project)}
      <div class="project-card-body">
        <p class="project-badge">${escapeHtml(project.category)}</p>
        <h${headingLevel} data-project-name="${escapeHtml(project.name)}" data-project-id="${escapeHtml(project.id)}">${escapeHtml(projectDisplayName(project))}</h${headingLevel}>
        ${projectDetails}
        ${isArchitectureProject ? "" : `<p>${escapeHtml(project.description || "Production support within a realtime 3D or interactive project workflow.")}</p>`}
        ${showMore ? `<a class="button button-secondary button-small" href="${projectUrl(project)}">More</a>` : ""}
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

const serviceCatalog = [
  {
    id: "architecture-digital-twins",
    title: "Realtime Architecture | Digital Twins",
    image: "metaverse/digital-twin/hero-wirtualny-blizniak.jpg",
    description: "Interactive architecture, property presentations and digital replicas that make spaces and data easier to understand.",
    workIntro: "Interactive architecture, property presentations and digital replicas that make spaces and data easier to understand. We contributed to more than 60 projects.",
    lead: "Show a space before it exists - or understand it better once it does. We turn architectural documentation, BIM data and existing locations into clear realtime experiences for sales, planning and presentation.",
    valueTitle: "Show a space before it exists - or understand it better once it does.",
    value: "We help developers, architects and technology companies transform complex spatial information into an experience that clients and teams can explore. The result can support a sales meeting, stakeholder review, training scenario or an operational digital twin.",
    capabilities: [
      ["Realtime property presentation", "Interactive estates, buildings and apartments that clients can explore before construction is complete."],
      ["Operational digital twin", "A navigable 3D representation with data, controls or operational states where they are needed."],
      ["BIM/CAD optimization", "Technical models cleaned, structured and optimized for reliable realtime use."],
      ["Interactive sales tools", "Views, variants, filters and guided journeys designed around customer decisions."]
    ],
    projectRefs: [["architecture", "Zenit"], ["architecture", "Jeziorna"], ["architecture", "Ryżowa"], ["architecture", "Bertone Le Moden"], ["music-rooms", "India"], ["digital-twin", "Hotel Five"], ["music-rooms", "Tunisia"], ["digital-twin", "Casino"], ["digital-twin", "Cove Beach"]]
  },
  {
    id: "product-prototypes-3d-models",
    title: "Product Prototypes | 3D Models",
    image: "games/hero-elementy-gier-solverto Games.jpg",
    description: "Product models, interactive proofs of concept and reusable 3D content for development, sales and communication.",
    lead: "We turn a product idea, sketch, CAD file or existing model into a digital product prototype that can be reviewed and tested before a larger investment.",
    valueTitle: "Validate the product experience before investing in the complete solution.",
    value: "A focused prototype helps your team test form, interaction, presentation and technical feasibility early. The same prepared assets can later support configurators, AR, animation, marketing renders or realtime applications.",
    capabilities: [
      ["Digital product prototype", "A focused interactive proof of concept for internal validation, presentation or investor conversations."],
      ["Production-ready 3D model", "Clean geometry, materials, hierarchy and variants prepared for the chosen platform."],
      ["Configurator and showroom", "Interactive product choices, camera states and presentation flows for customers or sales teams."],
      ["Reusable content pipeline", "One organized 3D source prepared for stills, animation, realtime and future iterations."]
    ],
    projectRefs: [["product-prototypes", "AR"], ["product-prototypes", "Optimization"], ["product-prototypes", "Architecture"], ["product-prototypes", "VR"]]
  },
  {
    id: "game-assets-levels",
    title: "Game Environments | 3D Assets",
    image: "metaverse/treasure-hunter/hero-poziomy-treasure-hunter-metaverse.jpg",
    description: "Game-ready environments, levels and optimized assets that fit an existing production pipeline.",
    lead: "We support game studios with level creation, environment production and technical preparation of assets - from a defined brief to content ready for implementation.",
    valueTitle: "Extend your production capacity without losing visual and technical consistency.",
    value: "We can take responsibility for a complete location or a clearly defined asset package. Work is aligned with the game's style, performance target, engine requirements and the way your team already reviews content.",
    capabilities: [
      ["Level production", "Blockout, environment building, set dressing, lighting and a final optimization pass."],
      ["Environment assets", "Modular kits, props and location-specific elements prepared for practical reuse."],
      ["Technical art support", "Materials, LODs, collisions, profiling and asset cleanup for the target engine."],
      ["Flexible production support", "Focused support for a milestone, vertical slice or content-heavy production stage."]
    ],
    projectRefs: [["solverto-games", "Medieval Machines Builder"], ["solverto-games", "Painter Simulator"], ["game-development", "Pulse Guys"], ["game-development", "Treasure Hunter"], ["game-development", "House Builder"], ["game-development", "Aquarist"]]
  },
  {
    id: "game-prototypes-custom-games",
    title: "Game Prototypes | Custom Games",
    image: "metaverse/pulse-guys/hero-pulse-guys.jpg",
    description: "We delivered and collaborated on the implementation of more than 130 playable prototypes, vertical slices, mini-games and complete custom games.",
    lead: "We help turn a game idea, campaign concept or training goal into something playable - first as a focused prototype, then as a production-ready scope.",
    valueTitle: "Test the fun, technology and production risk with a working build.",
    value: "A playable prototype makes decisions easier than a long document. We focus on the core loop, the feeling of interaction and the technical unknowns, then provide a clear basis for further development or full production.",
    capabilities: [
      ["Playable prototype", "The smallest useful build that validates the core mechanic and player experience."],
      ["Vertical slice", "A presentation-ready fragment showing the intended quality, content and production direction."],
      ["Branded mini-game", "A compact game experience for a campaign, event, community or web platform."],
      ["Custom game production", "Design, development, 3D content and delivery organized around an agreed scope."]
    ],
    projectRefs: [["game-development", "OP Games"], ["game-development", "SOGA"], ["game-development", "Wild Rush"], ["game-development", "Wild Rush Turbo"], ["game-development", "Naval Battle | Zombie Outbreak | Mech Mayhem"], ["game-development", "TrafficCashout | BeatEmUp | MetalSquad"]]
  },
  {
    id: "xr-training-simulation",
    title: "XR | Training | Simulation",
    image: "metaverse/digital-twin/hero-wirtualny-blizniak.jpg",
    description: "VR and AR prototypes, training scenarios and interactive simulations that help teams validate a solution before a larger rollout.",
    lead: "Test processes and train people without interrupting real operations.",
    valueTitle: "Validate a practical XR scenario before scaling it.",
    value: "We create focused VR and AR prototypes for training, process simulation, product visualization and proof of concept. Each solution is shaped around the users, target device and decision it needs to support.",
    capabilities: [
      ["XR training prototype", "A focused training scenario that can be reviewed before a wider implementation."],
      ["Interactive simulation", "A controllable process or environment with clear interactions and feedback."],
      ["Product visualization", "A practical way to present scale, features and use in AR or VR."],
      ["Proof of concept", "A working build that validates the experience, device fit and next production step."]
    ],
    projectRefs: [["metaverse-mazes", "Ooreedoo"], ["metaverse-mazes", "Orange"], ["music-rooms", "Entoto"], ["music-rooms", "Ivory Coast"], ["metaverse-mazes", "Secret Garden"], ["metaverse-mazes", "Candy Land"], ["music-rooms", "Latino Party"], ["music-rooms", "Rock Pub"], ["music-rooms", "Country"]]
  },
  {
    id: "animation-film-trailers-avatars",
    title: "3D Animation | Trailers | Realtime Characters",
    image: "animation-trailer-movie/hero-animacje-filmy-trailery.jpg",
    description: "Animation, film editing, trailers and optimized avatars for games, products and interactive experiences.",
    lead: "We prepare moving content and realtime characters that explain, present and strengthen a product, game or digital experience.",
    valueTitle: "Turn complex ideas and static assets into clear, engaging movement.",
    value: "Depending on the goal, we can support the complete process or a focused production stage: storyboard, 3D preparation, animation, avatar optimization, rendering, editing and final platform-specific outputs.",
    capabilities: [
      ["3D product animation", "Product, architectural and technical animation focused on clarity and visual quality."],
      ["Game trailers and video editing", "Editing, pacing, titles and final outputs for games, campaigns and presentations."],
      ["Realtime characters and avatars", "Character preparation, optimization, materials and animation for interactive platforms."],
      ["Production support", "A defined animation, editing or asset task integrated with an existing team and pipeline."]
    ],
    projectRefs: [["support", "Avatars - Optimization"]],
    videosFirst: true,
    youtubeVideos: [
      {
        id: "44LEhVFH5JY",
        title: "Painter Simulator - Release Trailer",
        category: "Game Trailer / Video",
        partner: "Solverto Studio",
        role: "Trailer editing and promotional video production",
        description: "A trailer presenting the Painter Simulator demo on Steam. The video shows the character of the game, its visual style and key gameplay elements. It is an example of video communication supporting a project launch."
      },
      {
        id: "caXv4VZl-jM",
        title: "Painter Simulator - Steam Next Fest",
        category: "Game Trailer / Video",
        partner: "FreeMind",
        role: "Gameplay trailer editing and promotional support",
        description: "A gameplay trailer prepared for Steam Next Fest. The video presents painting mechanics, interaction with the environment and the range of available tasks. Dynamic editing communicates the main idea of the game quickly."
      },
      {
        id: "O4t9RtPKd3A",
        title: "Tarvos Desolation - Official Demo Trailer",
        category: "Game Trailer / Video",
        partner: "Tarvos Desolation",
        role: "Official demo trailer production and editing",
        description: "The official trailer for the Tarvos Desolation demo. The video builds a science-fiction horror atmosphere while presenting the world, threats and gameplay. Editing and visual storytelling emphasize the mood and key features of the project."
      }
    ]
  }
];

function findPortfolioProject(groupId, projectName) {
  return portfolioData?.groups.find((group) => group.id === groupId)?.projects.find((project) => project.name === projectName);
}

function youtubeVideoPanelMarkup(video) {
  const safeVideoId = escapeHtml(video.id);
  const label = translatedText("Play video");
  return `<article class="youtube-video-panel reveal"><button class="youtube-video-link" type="button" data-youtube-video="${safeVideoId}" data-youtube-title="${escapeHtml(video.title)}" aria-label="${escapeHtml(`${label}: ${video.title}`)}"><img src="https://i.ytimg.com/vi/${safeVideoId}/hqdefault.jpg" alt="" loading="lazy" decoding="async" data-no-lightbox /><span class="youtube-video-play" aria-hidden="true">▶</span><span class="youtube-video-label">${escapeHtml(label)}</span></button><div class="youtube-video-copy"><p class="project-badge">${escapeHtml(video.category)}</p><h3>${escapeHtml(video.title)}</h3><p class="project-meta"><span>${escapeHtml(translatedText("Client / Partner"))}</span>${escapeHtml(video.partner)}</p><p class="project-meta"><span>${escapeHtml(translatedText("Role"))}</span>${escapeHtml(video.role)}</p><p class="youtube-video-description">${escapeHtml(video.description)}</p></div></article>`;
}

function renderServicePage(root = document, pageUrl = window.location.href) {
  const serviceRoot = root === document ? document.querySelector("[data-service-page]") : root.querySelector?.("[data-service-page]") || (root.matches?.("[data-service-page]") ? root : null);
  if (!serviceRoot || !portfolioData) return;

  const serviceId = new URL(pageUrl, window.location.href).searchParams.get("service");
  const service = serviceCatalog.find((item) => item.id === serviceId) || serviceCatalog[0];
  const setText = (selector, value) => {
    const element = serviceRoot.querySelector(selector);
    if (element) element.textContent = value;
  };

  setText("[data-service-title]", service.title);
  setText("[data-service-lead]", service.lead);
  setText("[data-service-value-title]", service.valueTitle);
  setText("[data-service-value]", service.value);
  setText("[data-service-work-intro]", service.workIntro || service.description);

  const valueSection = serviceRoot.querySelector(".service-value-section");
  const valueHeading = valueSection?.querySelector(".section-heading");
  const hideValueIntro = true;
  valueSection?.classList.toggle("is-intro-hidden", hideValueIntro);
  if (valueHeading) valueHeading.hidden = hideValueIntro;

  const hero = serviceRoot.querySelector("[data-service-hero]");
  if (hero) hero.innerHTML = `<img src="${escapeHtml(service.image)}" alt="${escapeHtml(`${translatedText(service.title)} - Solverto`)}" loading="eager" decoding="async" data-no-lightbox />`;

  const capabilities = serviceRoot.querySelector("[data-service-capabilities]");
  if (capabilities) capabilities.innerHTML = service.capabilities.map(([title, description], index) => `
    <article class="service-capability reveal"><span>${String(index + 1).padStart(2, "0")}</span><h3>${escapeHtml(title)}</h3><p>${escapeHtml(description)}</p></article>`).join("");

  const projects = service.projectRefs.map(([groupId, projectName]) => ({ project: findPortfolioProject(groupId, projectName), groupId })).filter((item) => item.project);
  const youtubeVideos = service.youtubeVideos || [];
  const workSection = serviceRoot.querySelector(".service-work-section");
  if (workSection) workSection.style.display = projects.length || youtubeVideos.length ? "" : "none";
  const projectGrid = serviceRoot.querySelector("[data-service-projects]");
  if (projectGrid) {
  const productOffers = service.id === "product-prototypes-3d-models";
    projectGrid.classList.toggle("product-offer-grid", productOffers);
    const projectMarkup = projects.map(({ project, groupId }) => projectCardMarkup(project, 3, { groupId, showMore: !productOffers })).join("");
    const videoMarkup = youtubeVideos.map(youtubeVideoPanelMarkup).join("");
    projectGrid.innerHTML = service.videosFirst ? videoMarkup + projectMarkup : projectMarkup + videoMarkup;
    const workHeading = workSection?.querySelector(".section-heading .eyebrow");
    if (workHeading && productOffers) workHeading.textContent = translatedText("What we can deliver");
  }

  if (root === document) {
    document.title = `${service.title} - Solverto`;
    document.querySelector('meta[name="description"]')?.setAttribute("content", service.description);
  }
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
      ${projectMediaMarkup(project, 1, { altText: `${title} - Solverto project image`, placeholder })}
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
  if (!grid) return;

  grid.innerHTML = serviceCatalog.map((service, index) => {
    const href = `services.html?service=${encodeURIComponent(service.id)}`;
    return `
      <a class="offer-card reveal" href="${escapeHtml(href)}" data-home-service="${escapeHtml(service.id)}" aria-label="${escapeHtml(`Explore ${service.title}`)}">
        <div class="offer-card-media"><img src="${escapeHtml(service.image)}" alt="" loading="${index < 3 ? "eager" : "lazy"}" decoding="async" /></div>
        <div class="offer-card-overlay" aria-hidden="true"></div>
        <div class="offer-card-body"><span class="offer-card-number">0${index + 1}</span><h3>${escapeHtml(service.title)}</h3><p>${escapeHtml(service.description)}</p><span class="offer-card-link">Explore the area <b>↗</b></span></div>
      </a>`;
  }).join("");
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
      if (pageIntro) pageIntro.textContent = activeDepartmentGroup.intro || `Projects from the ${activeDepartmentGroup.title} production area.`;
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
  const localizedRoleText = translatedText(project.role || "").replace(/[.]+$/, "");
  const localizedRole = selectedLanguage === "de" ? localizedRoleText : localizedRoleText.toLowerCase().replaceAll("3d", "3D");
  if (selectedLanguage === "pl") {
    if (category.includes("architecture") || category.includes("real estate")) {
      return {
        challenge: "Produkcja architektury realtime wymaga technicznie spójnych modeli 3D, starannego przygotowania i czytelnej koordynacji z dokumentacją źródłową. Poufne wymagania tego projektu nie są ujawniane.",
        contribution: `Udokumentowany wkład Solverto: ${localizedRole}. Prace zrealizowano jako wsparcie architektury realtime lub modelowania 3D w ramach wskazanego procesu partnerskiego.`
      };
    }
    if (category.includes("digital twin")) {
      return {
        challenge: "Środowiska Digital Twin wymagają czytelnej struktury przestrzennej, wydajnych modeli realtime oraz języka wizualnego wspierającego interaktywną eksplorację. Poufne ograniczenia projektu nie są ujawniane.",
        contribution: `Udokumentowany wkład Solverto obejmował zakres: ${localizedRole}, w tym wsparcie produkcji środowiska realtime dla tego projektu Digital Twin.`
      };
    }
    if (category.includes("metaverse")) {
      return {
        challenge: "Przestrzenie Metaverse wymagają rozpoznawalnych motywów wizualnych, wydajnej geometrii realtime oraz środowisk wspierających nawigację lub rozgrywkę. Poufne ograniczenia projektu nie są ujawniane.",
        contribution: `Udokumentowany wkład Solverto obejmował zakres: ${localizedRole}, w tym wsparcie produkcji 3D odpowiednie dla tego typu interaktywnego środowiska.`
      };
    }
    if (category.includes("game")) {
      return {
        challenge: "Produkcja gry łączy jakość wizualną, czytelność poziomu i wydajność techniczną z planowanym doświadczeniem gracza. Strona nie ujawnia poufnych szczegółów produkcji.",
        contribution: `Udokumentowany wkład Solverto obejmował zakres: ${localizedRole}, wyłącznie na podstawie dostępnych informacji o projekcie.`
      };
    }
    return {
      challenge: "Zadanie wymagało ukierunkowanego wsparcia produkcyjnego w istniejącym procesie 3D. Poufne szczegóły projektu i niezatwierdzone materiały nie są tutaj prezentowane.",
      contribution: `Udokumentowany wkład Solverto obejmował zakres: ${localizedRole}, wyłącznie na podstawie dostępnych informacji o projekcie.`
    };
  }
  if (selectedLanguage === "de") {
    if (category.includes("architecture") || category.includes("real estate")) {
      return {
        challenge: "Echtzeit-Architekturproduktion erfordert technisch konsistente 3D-Assets, sorgfältige Vorbereitung und klare Abstimmung mit der Quelldokumentation. Vertrauliche Anforderungen dieses Projekts werden nicht offengelegt.",
        contribution: `Der dokumentierte Beitrag von Solverto: ${localizedRole}. Die Arbeit wurde als Unterstützung für Echtzeit-Architektur oder 3D-Modellierung innerhalb des angegebenen Partnerprozesses geliefert.`
      };
    }
    if (category.includes("digital twin")) {
      return {
        challenge: "Umgebungen für digitale Zwillinge benötigen eine klare räumliche Struktur, effiziente Echtzeit-Assets und eine visuelle Sprache für interaktive Erkundung. Vertrauliche Projektanforderungen werden nicht offengelegt.",
        contribution: `Der dokumentierte Beitrag von Solverto umfasste folgenden Bereich: ${localizedRole}, einschließlich der Unterstützung bei der Echtzeit-Umgebungsproduktion für dieses Projekt.`
      };
    }
    if (category.includes("metaverse")) {
      return {
        challenge: "Metaverse-Räume benötigen erkennbare visuelle Themen, effiziente Echtzeit-Geometrie und Umgebungen, die Navigation oder Gameplay unterstützen. Vertrauliche Projektanforderungen werden nicht offengelegt.",
        contribution: `Der dokumentierte Beitrag von Solverto umfasste folgenden Bereich: ${localizedRole}, einschließlich passender 3D-Produktionsunterstützung für diese Art interaktiver Umgebung.`
      };
    }
    if (category.includes("game")) {
      return {
        challenge: "Spieleproduktion verbindet visuelle Qualität, Lesbarkeit der Level und technische Leistung mit dem geplanten Spielerlebnis. Vertrauliche Produktionsdetails werden auf dieser Seite nicht offengelegt.",
        contribution: `Der dokumentierte Beitrag von Solverto umfasste folgenden Bereich: ${localizedRole}, ausschließlich auf Grundlage der verfügbaren Projektinformationen.`
      };
    }
    return {
      challenge: "Die Aufgabe erforderte gezielte Produktionsunterstützung innerhalb eines bestehenden 3D-Workflows. Vertrauliche Projektdetails und nicht freigegebene Materialien werden hier nicht präsentiert.",
      contribution: `Der dokumentierte Beitrag von Solverto umfasste folgenden Bereich: ${localizedRole}, ausschließlich auf Grundlage der verfügbaren Projektinformationen.`
    };
  }
  if (category.includes("architecture") || category.includes("real estate")) {
    const contributionScope = (project.scope || project.role).replace(/[.]+$/, "").toLowerCase();
    return {
      challenge: "Realtime architecture production requires technically consistent 3D assets, careful preparation and clear coordination with the source documentation. The exact confidential requirements of this project are not disclosed.",
      contribution: `Solverto's documented contribution covered ${contributionScope}. The work was delivered as realtime architecture or 3D modelling support within the stated partner workflow.`
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

function projectInfoCopy(project) {
  if (project.projectInfo) return translatedText(project.projectInfo);

  const isArchitectureProject = project.category === "Architecture / Realtime Real Estate";
  const scope = translatedText(project.scope || project.role || "");
  const industry = translatedText(project.industry || project.category || "");
  const technology = translatedText(project.technology || "");
  const country = project.country ? translatedText(project.country) : "";
  const year = translatedText(project.year || "");
  const partner = project.partner || "Solverto";

  const genericCollaboration = (language) => {
    if (partner === "Partner studio cooperation") {
      if (language === "pl") return "Projekt zrealizowano we współpracy ze studiem partnerskim.";
      if (language === "de") return "Das Projekt wurde in Zusammenarbeit mit einem Partnerstudio umgesetzt.";
      return "The project was delivered in cooperation with a partner studio.";
    }
    if (partner === "Project involvement") {
      if (language === "pl") return "Solverto uczestniczyło w realizacji projektu.";
      if (language === "de") return "Solverto war an der Umsetzung des Projekts beteiligt.";
      return "Solverto contributed to the project.";
    }
    if (partner === "Solverto production support") {
      if (language === "pl") return "Solverto zapewniło wsparcie produkcyjne projektu.";
      if (language === "de") return "Solverto unterstützte die Produktion des Projekts.";
      return "Solverto provided production support for the project.";
    }
    if (language === "pl") return `Projekt zrealizowano dla ${translatedText(partner)}.`;
    if (language === "de") return `Das Projekt wurde für ${translatedText(partner)} umgesetzt.`;
    return `The project was delivered for ${partner}.`;
  };

  if (selectedLanguage === "pl") {
    const collaboration = isArchitectureProject
      ? `Projekt zrealizowano dla klienta końcowego ${project.finalClient || project.partner} w ramach współpracy z ${project.deliveredFor || "YSLAB / RESIMO"}.`
      : genericCollaboration("pl");
    const location = country ? ` w ${country}` : "";
    return `${collaboration} Zakres prac: ${scope}. Branża: ${industry}${location}.`;
  }

  if (selectedLanguage === "de") {
    const collaboration = isArchitectureProject
      ? `Das Projekt wurde für den Endkunden ${project.finalClient || project.partner} in Zusammenarbeit mit ${project.deliveredFor || "YSLAB / RESIMO"} umgesetzt.`
      : genericCollaboration("de");
    const location = country ? ` in ${country}` : "";
    return `${collaboration} Arbeitsumfang: ${scope}. Bereich: ${industry}${location}.`;
  }

  const recipient = isArchitectureProject
    ? `the final client ${project.finalClient || project.partner} in collaboration with ${project.deliveredFor || "YSLAB / RESIMO"}`
    : null;
  const location = country ? ` in ${country}` : "";
  const collaboration = isArchitectureProject ? `The project was delivered for ${recipient}.` : genericCollaboration("en");
  return `${collaboration} Scope: ${scope}. Sector: ${industry}${location}.`;
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
    document.title = `${projectDisplayName(project)} - Solverto Portfolio`;
    document.querySelector('meta[name="description"]')?.setAttribute("content", `${projectDisplayName(project)}: ${translatedText(project.description)}`);
  }
  setText("[data-detail-category]", translatedText(project.category));
  setText("[data-detail-name]", projectDisplayName(project));
  setText("[data-detail-intro]", translatedText(project.description));
  const projectInfoText = projectInfoCopy(project);
  setText("[data-detail-facts-title]", translatedText("Cooperation and scope."));
  setText("[data-detail-project-info]", projectInfoText);
  const projectInfo = detailRoot.querySelector("[data-detail-project-info]");
  const factsGrid = detailRoot.querySelector("[data-detail-facts-grid]");
  const factsSection = detailRoot.querySelector("[data-detail-facts-section]");
  if (projectInfo) projectInfo.hidden = false;
  if (factsGrid) factsGrid.hidden = true;
  if (factsSection) factsSection.hidden = Boolean(project.hideProjectFacts);
  const detailHero = detailRoot.querySelector("[data-detail-hero]");
  if (detailHero) {
    const projectGroup = portfolioData.groups.find((group) => group.id === project.departmentId);
    const source = projectImagePath(project) || projectGroup?.heroImage || "assets/hero-offer-collage.png";
    const alt = translatedText(projectDisplayName(project) + " - Solverto portfolio hero image");
    detailHero.classList.add("media-image-frame");
    detailHero.dataset.noLightbox = "";
    detailHero.removeAttribute("role");
    detailHero.innerHTML = '<img src="' + escapeHtml(source) + '" alt="' + escapeHtml(alt) + '" loading="eager" decoding="async" />';
  }
  const isArchitectureProject = project.category === "Architecture / Realtime Real Estate";
  setText("[data-detail-partner-label]", translatedText(isArchitectureProject ? "Final client" : "Client / Partner"));
  setText("[data-detail-role-label]", translatedText(isArchitectureProject ? "Delivered for" : "Role"));
  setText("[data-detail-scope-label]", translatedText(isArchitectureProject ? "Scope of work" : "Scope"));
  setText("[data-detail-partner]", translatedText(isArchitectureProject ? (project.finalClient || project.partner || "Solverto project") : (project.partner || "Solverto project")));
  setText("[data-detail-role]", translatedText(isArchitectureProject ? (project.deliveredFor || "YSLAB / RESIMO") : project.role));
  setText("[data-detail-scope]", translatedText(project.scope));
  setText("[data-detail-industry]", translatedText(project.industry));
  setText("[data-detail-technology]", translatedText(project.technology));
  setText("[data-detail-year]", translatedText(project.year));
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
    extraFacts.hidden = true;
  }

  const gallery = detailRoot.querySelector("[data-detail-gallery]");
  if (gallery) {
    if (project.assetFolder) {
      const mediaCount = Math.min(project.assetFiles?.length || 6, 6);
      gallery.innerHTML = Array.from({ length: mediaCount }, (_, index) => projectMediaMarkup(project, index + 1, { className: "reveal" })).join("");
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
  if (homePanelsInitialized) return;
  homePanelsInitialized = true;
  const sourceElements = [...document.querySelectorAll("[data-home-panel-source]")];
  const sources = new Map(sourceElements.map((source) => [source.dataset.homePanelSource, source]));
  const panel = document.createElement("div");
  panel.className = "home-panel";
  panel.hidden = true;
  panel.setAttribute("aria-hidden", "true");
  panel.innerHTML = `
    <div class="home-panel-backdrop" data-home-panel-close></div>
    <section class="home-panel-dialog" role="dialog" aria-modal="true">
      <div class="home-panel-toolbar">
        <button class="home-panel-back" type="button" data-home-panel-back hidden><span aria-hidden="true">←</span><span>Back</span></button>
        <span class="home-panel-toolbar-label">Solverto</span>
        <div class="home-panel-toolbar-actions"><button class="home-panel-close" type="button" data-home-panel-close><span aria-hidden="true">×</span></button></div>
      </div>
      <div class="home-panel-content" data-home-panel-content></div>
    </section>`;
  document.body.append(panel);

  const dialog = panel.querySelector(".home-panel-dialog");
  const content = panel.querySelector("[data-home-panel-content]");
  const closeButton = panel.querySelector(".home-panel-close");
  const backButton = panel.querySelector(".home-panel-back");
  let previousFocus = null;
  let closeTimer = null;
  let panelRequest = 0;
  let panelAnimation = null;
  let panelStack = [];

  const updatePanelToolbar = () => {
    backButton.hidden = panelStack.length < 2;
    backButton.setAttribute("aria-label", translatedText("Back"));
  };

  const updatePanelCloseLabel = () => {
    closeButton.setAttribute("aria-label", (lightboxLabels[selectedLanguage] || lightboxLabels.en).close);
  };

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
    panelStack = [];
    updatePanelToolbar();
    if (previousFocus instanceof HTMLElement && previousFocus.isConnected) previousFocus.focus();
  };

  const closePanel = () => {
    if (panel.hidden || panel.classList.contains("is-closing")) return;
    if (panelStack.length > 1) {
      goBackInPanel();
      return;
    }
    panelRequest += 1;
    cancelPanelAnimation();
    panel.classList.remove("is-open");
    panel.classList.add("is-closing");
    closeTimer = window.setTimeout(finishClose, reducedMotion.matches ? 0 : 480);
  };

  const prepareClone = (source, preserveIds = false) => {
    const clone = source.cloneNode(true);
    if (!preserveIds) {
      clone.removeAttribute("id");
      clone.querySelectorAll("[id]").forEach((element) => element.removeAttribute("id"));
    }
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
    updatePanelCloseLabel();

    const startPanelAnimation = () => {
      cancelPanelAnimation();
      panel.classList.remove("is-reopening");
      panel.classList.add("is-open");
      dialog.classList.add("is-panel-animating");
      const animation = dialog.animate(
        [{ transform: "translateY(100%)", borderRadius: "32px 32px 0 0" }, { transform: "translateY(0)", borderRadius: "0" }],
        {
          duration: reducedMotion.matches ? 0 : 480,
          easing: "cubic-bezier(0.22, 1, 0.36, 1)",
          fill: "none"
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

  const openPanel = (name, trigger, record = true) => {
    const source = sources.get(name);
    if (!source) return false;
    if (record) panelStack.push({ type: "source", name });
    updatePanelToolbar();
    panelRequest += 1;
    const sourceContent = source.querySelector(":scope > .container") || source;
    showPanel(prepareClone(sourceContent), name, trigger);
    return true;
  };

  const servicePanelMarkup = () => `
    <section class="service-hero">
      <div class="service-hero-glow" aria-hidden="true"></div>
      <div class="container service-hero-grid">
        <div class="page-hero-copy reveal"><p class="eyebrow">Area of collaboration</p><h1 data-service-title>Solverto services</h1><p class="hero-lead" data-service-lead>Focused creative technology support for your company.</p><div class="actions"><a class="button button-primary" href="#service-contact">Tell us about your project</a></div></div>
        <div class="service-hero-media reveal" data-service-hero></div>
      </div>
    </section>
    <section class="section service-value-section"><div class="container service-copy-grid"><div class="section-heading reveal"><p class="eyebrow">How we can help</p><h2 data-service-value-title>A practical solution around your goal.</h2><p data-service-value></p></div><div class="service-capability-grid" data-service-capabilities></div></div></section>
    <section class="section service-work-section"><div class="container"><div class="section-heading reveal"><p class="eyebrow">Selected work</p><h2>Relevant projects and production experience.</h2><p data-service-work-intro></p></div><div class="portfolio-grid service-project-grid" data-service-projects></div></div></section>
    <section class="section contact-section" id="service-contact"><div class="container minimal-contact company-contact-panel reveal"><p class="eyebrow">Start a conversation</p><h2>Tell us what needs to work next.</h2><p>Share the goal, available materials, target platform and deadline. We will suggest a practical first step.</p><div class="actions"><a class="button button-primary" href="mailto:contact@solverto.com">contact@solverto.com</a></div></div></section>`;

  const openServicePanel = (serviceId, trigger, record = true) => {
    const service = serviceCatalog.find((item) => item.id === serviceId);
    if (!service) return;
    if (record) panelStack.push({ type: "service", serviceId });
    updatePanelToolbar();
    panelRequest += 1;
    const serviceRoot = document.createElement("main");
    serviceRoot.dataset.servicePage = "";
    serviceRoot.innerHTML = servicePanelMarkup();
    renderServicePage(serviceRoot, new URL(`services.html?service=${encodeURIComponent(serviceId)}`, window.location.href).href);
    showPanel(serviceRoot, service.title, trigger);
    applyLanguage();
    registerRevealItems(serviceRoot);
  };

  const projectPanelMarkup = () => `
    <section class="page-hero">
      <div class="hero-gridlines" data-parallax aria-hidden="true"></div>
      <div class="container project-hero-layout">
        <div class="page-hero-copy reveal"><p class="eyebrow" data-detail-category>Project category</p><h1 data-detail-name>Project name</h1><p class="hero-lead" data-detail-intro>Project description.</p></div>
        <div class="media-placeholder media-image-frame is-wide reveal" data-no-lightbox data-detail-hero><img src="assets/hero-offer-collage.png" alt="Solverto project hero visual" loading="eager" decoding="async" /></div>
      </div>
    </section>
    <section class="section" aria-labelledby="facts-title" data-detail-facts-section><div class="container"><div class="project-overview-panel"><div class="project-overview-facts"><div class="section-heading reveal"><p class="eyebrow">Project facts</p><h2 id="facts-title" data-detail-facts-title>Scope and contribution.</h2></div><div class="project-info-text reveal" data-detail-project-info hidden></div><div class="project-facts-grid project-facts-text reveal" data-detail-facts-grid><div class="project-fact"><span data-detail-partner-label>Client / Partner</span><p data-detail-partner></p></div><div class="project-fact"><span data-detail-role-label>Role</span><p data-detail-role></p></div><div class="project-fact"><span data-detail-scope-label>Scope</span><p data-detail-scope></p></div><div class="project-fact"><span>Industry</span><p data-detail-industry></p></div><div class="project-fact"><span>Technologies</span><p data-detail-technology></p></div><div class="project-fact"><span>Year</span><p data-detail-year></p></div></div><div class="project-facts-grid project-facts-text project-extra-facts" data-detail-extra-facts></div></div><div class="project-story-grid project-story-text"><article class="detail-block reveal"><p class="eyebrow">Challenge</p><h2>Production context</h2><p data-detail-challenge></p></article><article class="detail-block reveal"><p class="eyebrow">Solverto contribution</p><h2>Documented involvement</h2><p data-detail-contribution></p></article></div></div></div></section>
    <section class="section project-gallery-section" aria-labelledby="gallery-title"><div class="container"><div class="section-heading reveal"><p class="eyebrow">Gallery</p><h2 id="gallery-title">Project media.</h2><p>Approved project graphics are shown here when available.</p></div><div class="gallery-grid" data-detail-gallery></div></div></section>
    <section class="consultation"><div class="container consultation-inner reveal"><h2>Need similar realtime 3D, game production or digital twin support? Contact Solverto.</h2><div class="actions"><a class="button button-primary" href="contact.html">Start a project</a><a class="button button-secondary" href="portfolio.html">Back to portfolio</a></div></div></section>`;

  const openProjectPanel = (url, trigger, record = true) => {
    if (record) panelStack.push({ type: "project", href: url.href });
    updatePanelToolbar();
    panelRequest += 1;
    const projectRoot = document.createElement("main");
    projectRoot.dataset.projectDetail = "";
    projectRoot.innerHTML = projectPanelMarkup();
    renderProjectDetail(projectRoot, url.href);
    showPanel(projectRoot, "Project", trigger);
    applyLanguage();
    registerRevealItems(projectRoot);
  };

  const openPagePanel = async (url, trigger, record = true) => {
    if (window.location.protocol === "file:") {
      window.location.href = url.href;
      return;
    }

    if (record) panelStack.push({ type: "page", href: url.href });
    updatePanelToolbar();
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

      const clone = prepareClone(pageMain, true);
      setPanelContent(clone, pageName);
      renderFeaturedProjects(clone);
      renderPortfolio(clone, requestUrl.href);
      renderProjectDetail(clone, requestUrl.href);
      renderServicePage(clone, requestUrl.href);
      renderHomeOfferPanel(clone);
      applyLanguage();
      updatePanelCloseLabel();
      registerRevealItems(clone);
    } catch {
      if (request !== panelRequest || panel.hidden) return;
      const error = document.createElement("div");
      error.className = "container panel-loading";
      error.innerHTML = "<p class=\"eyebrow\">Page unavailable</p><h1>We could not load this page.</h1><p>Please try again.</p>";
      setPanelContent(error, pageName);
    }
  };

  const openPrivacyPanel = (trigger, record = true) => {
    const privacyUrl = new URL(privacyPageForLanguage(), window.location.href);
    if (record) panelStack.push({ type: "privacy", href: privacyUrl.href });
    updatePanelToolbar();
    if (window.location.protocol === "file:") {
      panelRequest += 1;
      const frame = document.createElement("iframe");
      frame.className = "privacy-panel-frame";
      frame.title = translatedText("Privacy policy");
      frame.src = privacyUrl.href;
      showPanel(frame, translatedText("Privacy policy"), trigger);
      return;
    }
    openPagePanel(privacyUrl, trigger, false);
  };

  document.addEventListener("solverto-language-changed", (event) => {
    if (panelStack[panelStack.length - 1]?.type !== "privacy") return;
    event.preventDefault();
    applyLanguage();
    openPrivacyPanel(document.querySelector("[data-language-select]") || closeButton, false);
  });

  const canonicalPageAliases = {
    about: "company.html",
    company: "company.html",
    portfolio: "portfolio.html",
    "portfolio-preview": "portfolio.html",
    contact: "contact.html"
  };

  const goBackInPanel = () => {
    if (panelStack.length < 2) return;
    panelStack.pop();
    const previous = panelStack[panelStack.length - 1];
    updatePanelToolbar();
    if (previous.type === "source") openPanel(previous.name, backButton, false);
    else if (previous.type === "service") openServicePanel(previous.serviceId, backButton, false);
    else if (previous.type === "project") openProjectPanel(new URL(previous.href), backButton, false);
    else if (previous.type === "privacy") openPrivacyPanel(backButton, false);
    else openPagePanel(new URL(previous.href), backButton, false);
  };

  document.addEventListener("click", (event) => {
    const privacyTrigger = event.target.closest("[data-privacy-panel-trigger], a[href='privacy.html'], a[href='privacy-en.html'], a[href='privacy-de.html']");
    if (privacyTrigger) {
      event.preventDefault();
      closeNavigation();
      openPrivacyPanel(privacyTrigger);
      return;
    }

    const trigger = event.target.closest("[data-home-panel-trigger]");
    if (trigger) {
      if (openPanel(trigger.dataset.homePanelTrigger, trigger)) {
        event.preventDefault();
      } else if (trigger.href) {
        event.preventDefault();
        closeNavigation();
        openPagePanel(new URL(trigger.href, window.location.href), trigger);
      }
      return;
    }

    const link = event.target.closest("a[href]");
    if (!link || link.target === "_blank") return;
    if (link.classList.contains("brand")) {
      closeNavigation();
      return;
    }

    const href = link.getAttribute("href") || "";
    if (link.dataset.homeService) {
      event.preventDefault();
      openServicePanel(link.dataset.homeService, link);
      return;
    }
    if (href.startsWith("#")) {
      if (panel.contains(link)) {
        const targetId = decodeURIComponent(href.slice(1));
        const target = [...content.querySelectorAll("[id]")].find((element) => element.id === targetId);
        if (target) {
          event.preventDefault();
          target.scrollIntoView({ behavior: reducedMotion.matches ? "auto" : "smooth", block: "start" });
        }
      }
      return;
    }
    let url = new URL(href, window.location.href);
    const hashAlias = canonicalPageAliases[decodeURIComponent(url.hash.slice(1))];
    if (hashAlias && url.pathname.endsWith("index.html")) url = new URL(hashAlias, window.location.href);
    if (url.origin !== window.location.origin || !/\.html?$/i.test(url.pathname)) return;

    if (/project-template\.html$/i.test(url.pathname)) {
      event.preventDefault();
      closeNavigation();
      openProjectPanel(url, link);
      return;
    }

    event.preventDefault();
    closeNavigation();
    openPagePanel(url, link);
  });

  panel.addEventListener("click", (event) => {
    if (event.target.closest("[data-home-panel-close]")) closePanel();
    else if (event.target.closest("[data-home-panel-back]")) goBackInPanel();
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

  if (new URLSearchParams(window.location.search).get("panel") === "company" && sources.has("company")) {
    window.requestAnimationFrame(() => openPanel("company", document.querySelector("[data-company-link]"), false));
  }
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

function renderSiteFooter() {
  document.querySelectorAll(".site-footer").forEach((footer) => {
    const grid = footer.querySelector(".footer-grid");
    if (!grid) return;

    grid.innerHTML = `
      <div class="footer-logo">
        <a href="index.html" aria-label="Solverto"><img class="footer-brand" src="public/graphics/Solverto_Logo%202024_blue.png" alt="Solverto" width="256" height="256" /></a>
      </div>
      <div class="footer-column">
        <h2>Company</h2>
        <button class="button button-secondary footer-company-trigger" type="button" data-home-panel-trigger="company">Company</button>
      </div>
      <div class="footer-column">
        <h2>Explore</h2>
        <button class="button button-secondary footer-company-trigger" type="button" data-privacy-panel-trigger>Privacy policy</button>
      </div>
      <div class="footer-column">
        <h2>Contact</h2>
        <a href="mailto:contact@solverto.com">contact@solverto.com</a>
      </div>`;

    const copyright = footer.querySelector(".copyright");
    if (copyright) copyright.innerHTML = "© <span data-year></span> Solverto.";
  });
}

function initializePortfolioFeatures() {
  renderFeaturedProjects();
  renderPortfolio();
  renderProjectDetail();
  renderServicePage();
  renderHomeOfferPanel();
  renderSiteFooter();
  addLanguageSelector();
  applyLanguage();
  initializeContactHelpers();

  if (window.location.pathname.endsWith("ai-pipeline.html")) {
    document.querySelector("h1")?.replaceChildren("Technical Art & Production Pipelines");
    document.querySelectorAll('a[href="ai-pipeline.html"]').forEach((link) => link.textContent = "Technical Art & Production Pipelines");
  }
}

initializeHomePanels();

if (portfolioData) {
  initializePortfolioFeatures();
} else {
  const portfolioDataScript = document.createElement("script");
  portfolioDataScript.src = "portfolio-data.js?v=architecture-copy-20260805a";
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
    const projectRoot = item.closest("[data-project-detail]");
    const projectPage = projectRoot || (document.body.hasAttribute("data-project-detail") ? main : null);
    if (projectPage) return [...projectPage.querySelectorAll(selector)];
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

  const makeLightboxTrigger = (item) => {
    if (item.closest("[data-lightbox]")) return;
    item.classList.add("is-lightbox-trigger");
    if (!item.hasAttribute("tabindex")) item.tabIndex = 0;
    if (!item.hasAttribute("role") || item.tagName === "IMG") item.setAttribute("role", "button");
  };

  const prepareLightboxTriggers = (root) => {
    if (!(root instanceof Element || root instanceof Document || root instanceof DocumentFragment)) return;
    if (root instanceof Element && root.matches(selector)) makeLightboxTrigger(root);
    root.querySelectorAll?.(selector).forEach(makeLightboxTrigger);
  };

  prepareLightboxTriggers(main);
  const lightboxObserver = new MutationObserver((records) => {
    records.forEach((record) => record.addedNodes.forEach(prepareLightboxTriggers));
  });
  lightboxObserver.observe(document.body, { childList: true, subtree: true });

  document.addEventListener("click", (event) => {
    const item = event.target.closest(selector);
    if (item && !item.closest("[data-lightbox]")) open(item);
  });

  document.addEventListener("keydown", (event) => {
    const item = event.target.closest(selector);
    if (item && !item.closest("[data-lightbox]") && (event.key === "Enter" || event.key === " ")) {
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

function initializeYoutubeVideoModal() {
  const modal = document.createElement("div");
  modal.className = "lightbox youtube-player-modal";
  modal.hidden = true;
  modal.innerHTML = `
    <div class="lightbox-backdrop" data-youtube-close></div>
    <div class="youtube-player-dialog" role="dialog" aria-modal="true" aria-label="YouTube video player">
      <button class="lightbox-close" type="button" data-youtube-close><span aria-hidden="true">×</span></button>
      <iframe title="" loading="eager" referrerpolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <div class="youtube-player-fallback" data-youtube-fallback hidden>
        <p>Odtwarzanie filmu w oknie wymaga uruchomienia strony przez adres HTTP lub HTTPS.</p>
        <a class="button button-primary" data-youtube-fallback-link target="_blank" rel="noopener">Obejrzyj film na YouTube</a>
      </div>
    </div>`;
  document.body.append(modal);

  const iframe = modal.querySelector("iframe");
  const closeButton = modal.querySelector(".lightbox-close");
  const fallback = modal.querySelector("[data-youtube-fallback]");
  const fallbackLink = modal.querySelector("[data-youtube-fallback-link]");
  let previousFocus = null;

  const close = () => {
    if (modal.hidden) return;
    modal.hidden = true;
    iframe.src = "about:blank";
    iframe.hidden = false;
    fallback.hidden = true;
    document.body.classList.remove("lightbox-open");
    if (previousFocus instanceof HTMLElement && previousFocus.isConnected) previousFocus.focus();
  };

  const open = (trigger) => {
    const videoId = trigger.dataset.youtubeVideo;
    if (!videoId) return;
    const title = trigger.dataset.youtubeTitle || "YouTube video";
    iframe.title = title;
    if (/^https?:$/.test(window.location.protocol)) {
      const origin = encodeURIComponent(window.location.origin);
      iframe.hidden = false;
      fallback.hidden = true;
      iframe.src = `https://www.youtube.com/embed/${encodeURIComponent(videoId)}?autoplay=1&rel=0&origin=${origin}&widget_referrer=${origin}`;
    } else {
      iframe.hidden = true;
      iframe.src = "about:blank";
      fallback.hidden = false;
      fallbackLink.href = `https://www.youtube.com/watch?v=${encodeURIComponent(videoId)}`;
    }
    previousFocus = trigger;
    closeButton.setAttribute("aria-label", selectedLanguage === "pl" ? "Zamknij film" : "Close video");
    modal.hidden = false;
    document.body.classList.add("lightbox-open");
    closeButton.focus();
  };

  document.addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-youtube-video]");
    if (trigger) open(trigger);
  });

  modal.addEventListener("click", (event) => {
    if (event.target.closest("[data-youtube-close]")) close();
  });

  document.addEventListener("keydown", (event) => {
    if (!modal.hidden && event.key === "Escape") {
      event.preventDefault();
      event.stopImmediatePropagation();
      close();
    }
  }, true);
}

initializeYoutubeVideoModal();

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

function applyTrustAndContactUpdates() {
  const localized = (english, polish, german) => selectedLanguage === "pl" ? polish : selectedLanguage === "de" ? german : english;
  const portfolioIntro = localized(
    "All presented projects are real Solverto productions. Extended descriptions, visual materials, and selected case studies will be added progressively.",
    "Wszystkie prezentowane projekty są realnymi realizacjami Solverto. Rozszerzone opisy, materiały wizualne i case studies wybranych projektów będą sukcesywnie uzupełniane.",
    "Alle gezeigten Projekte sind reale Produktionen von Solverto. Erweiterte Beschreibungen, Bildmaterial und ausgewählte Fallstudien werden schrittweise ergänzt."
  );
  const replacements = new Map([
    ["Media placeholders", localized("Production materials", "Materiały produkcyjne", "Produktionsmaterialien")],
    ["Elementy zastępcze multimediów", localized("Production materials", "Materiały produkcyjne", "Produktionsmaterialien")],
    ["Project media placeholders.", localized("Production materials in preparation.", "Materiały produkcyjne w przygotowaniu.", "Produktionsmaterialien in Vorbereitung.")],
    ["Elementy zastępcze multimediów projektu.", localized("Production materials in preparation.", "Materiały produkcyjne w przygotowaniu.", "Produktionsmaterialien in Vorbereitung.")],
    ["Reserved for product and business examples.", localized("Materials in preparation.", "Materiały w przygotowaniu.", "Materialien in Vorbereitung.")],
    ["Reserved for training and simulation material.", localized("Materials in preparation.", "Materiały w przygotowaniu.", "Materialien in Vorbereitung.")],
    ["Reserved for workflow and audit examples.", localized("Materials in preparation.", "Materiały w przygotowaniu.", "Materialien in Vorbereitung.")],
    ["Add real production material here later.", localized("Materials in preparation.", "Materiały w przygotowaniu.", "Materialien in Vorbereitung.")],
    ["Otwórz czat zastępczy", localized("Contact us on WhatsApp", "Napisz na WhatsApp", "Kontaktieren Sie uns über WhatsApp")],
    ["A sample interactive property experience designed to make an unbuilt development easier to explore and understand.", localized("An interactive property experience that makes an unbuilt development easier to explore and understand.", "Interaktywna prezentacja nieruchomości ułatwiająca poznanie planowanej inwestycji.", "Ein interaktives Immobilienerlebnis, das eine noch nicht gebaute Anlage leichter erlebbar und verständlich macht.")],
    ["A sample environment art and lighting pass designed to make a playable demo easier to read and present.", localized("An environment art and lighting production focused on clear, presentation-ready gameplay.", "Realizacja środowiska gry i oświetlenia wspierająca czytelność oraz prezentację rozgrywki.", "Eine Produktion von Spielumgebung und Beleuchtung mit Fokus auf klares, präsentationsreifes Gameplay.")],
    ["VR Safety Training Demo", localized("VR Safety Training", "Szkolenie VR z bezpieczeństwa", "VR-Sicherheitsschulung")],
    ["A sample immersive prototype for practicing a safety procedure in a controlled virtual environment.", localized("An immersive production for practicing a safety procedure in a controlled virtual environment.", "Immersyjna realizacja wspierająca ćwiczenie procedury bezpieczeństwa w kontrolowanym środowisku wirtualnym.", "Eine immersive Produktion zum Üben eines Sicherheitsablaufs in einer kontrollierten virtuellen Umgebung.")],
    ["Sample Solverto case study", localized("Solverto case study", "Realizacja Solverto", "Solverto-Fallstudie")],
    ["Game Demo Environment", localized("Game Environment Production", "Produkcja środowiska gry", "Produktion einer Spielumgebung")]
  ]);
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach((node) => {
    let value = node.nodeValue;
    replacements.forEach((replacement, source) => { value = value.replaceAll(source, replacement); });
    node.nodeValue = value;
  });
  document.querySelectorAll('a[href^="tel:"]').forEach((link) => {
    link.href = "tel:+48784573516";
    link.textContent = "784-573-516";
  });
  document.querySelectorAll('a[href*="wa.me"]').forEach((link) => {
    link.href = "https://wa.me/48784573516";
    link.textContent = localized("Contact us on WhatsApp", "Napisz na WhatsApp", "Kontaktieren Sie uns über WhatsApp");
  });
  const portfolioHeading = document.querySelector("[data-large-scale-projects], [data-portfolio-groups]")?.closest("section")?.querySelector(".section-heading");
  if (portfolioHeading) {
    let note = portfolioHeading.querySelector("[data-portfolio-trust-note]");
    if (!note) {
      note = document.createElement("p");
      note.className = "portfolio-note";
      note.dataset.portfolioTrustNote = "";
      portfolioHeading.append(note);
    }
    note.textContent = portfolioIntro;
  }
  document.querySelectorAll('title, meta[name="description"], meta[property="og:title"], meta[property="og:description"]').forEach((element) => {
    const attribute = element.tagName === "META" ? "content" : "textContent";
    let value = element[attribute];
    replacements.forEach((replacement, source) => { value = value.replaceAll(source, replacement); });
    element[attribute] = value;
  });
}

applyTrustAndContactUpdates();
