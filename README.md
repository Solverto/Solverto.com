# Solverto / Solverto Group

Nowoczesna, responsywna strona dla marki Solverto, zbudowana w Next.js,
TypeScript i Tailwind CSS. Projekt jest przygotowany pod statyczny eksport i
GitHub Pages.

## Uruchomienie lokalne

```bash
npm install
npm run dev
```

Build produkcyjny:

```bash
npm run build
```

Przy konfiguracji `output: "export"` statyczny wynik trafia do katalogu `out/`.

## Gdzie edytować

- Teksty i języki: `src/lib/translations.ts`
- Projekty portfolio: `src/data/projects.ts`
- Logo: `public/brand/solverto-logo.svg`, `public/brand/solverto-mark.svg`
- Favicon: `public/brand/favicon.svg`
- Grafiki zastępcze: `public/graphics/`
- Komponenty UI: `src/components/`

## Funkcje

- PL / EN / DE / ES z zapisem wyboru w `localStorage`
- Portfolio z filtrami i wyszukiwarką
- Featured projects i largest real estate references
- Formularz kontaktowy jako mock submit gotowy do podpięcia API
- Responsywne menu mobilne
- Autorskie SVG dla logo, ikon i grafik
- SEO i Open Graph metadata
- Subtelne animacje z obsługą `prefers-reduced-motion`
