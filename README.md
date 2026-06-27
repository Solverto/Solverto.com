# Solverto / Solverto Group

Nowoczesna, responsywna strona dla marki Solverto. Publiczna wersja strony jest
statyczna i działa bez builda: `index.html`, `styles.css`, `script.js` oraz
lokalne assety SVG w `public/`.

## Uruchomienie lokalne

Otwórz `index.html` w przeglądarce albo uruchom prosty serwer statyczny:

```bash
python -m http.server 4173
```

## Publikacja na GitHub Pages

Workflow `.github/workflows/pages.yml` publikuje statyczne pliki po każdym pushu
do `main`: `index.html`, `styles.css`, `script.js`, podstronę `architecture/` i katalog `public/`.

W GitHub ustaw:

1. Repository Settings -> Pages.
2. Source: `GitHub Actions`.
3. Wypchnij zmiany na branch `main`.

Po udanym workflow strona będzie dostępna pod adresem Pages repozytorium albo
pod podpiętą domeną niestandardową.

## Gdzie edytować

- Teksty i języki wersji statycznej: `script.js`
- Teksty i języki wersji Next.js: `src/lib/translations.ts`
- Projekty portfolio: `src/data/projects.ts`
- Logo używane na stronie: `public/graphics/SolvertoLogo.gif`
- Warianty SVG: `public/brand/solverto-logo.svg`, `public/brand/solverto-mark.svg`
- Favicon: `public/brand/favicon.svg`
- Grafiki zastępcze: `public/graphics/`
- Widoczna statyczna strona: `index.html`, `styles.css`, `script.js`
- Podstrona architektury: `architecture/index.html`, `architecture/script.js`

## Funkcje

- PL / EN / DE / ES z zapisem wyboru w `localStorage`
- Portfolio z filtrami i wyszukiwarką
- Featured projects i largest real estate references
- Formularz kontaktowy jako mock submit gotowy do podpięcia API
- Responsywne menu mobilne
- Autorskie SVG dla logo, ikon i grafik
- SEO i Open Graph metadata
- Subtelne animacje z obsługą `prefers-reduced-motion`
