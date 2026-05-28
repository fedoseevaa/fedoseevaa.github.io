# Sasha Fedoseeva — Personal Website

A single-page, multilingual personal portfolio. Pure HTML / CSS / JS — no build step.
Designed to be deployed on **GitHub Pages**.

## Languages

The site supports four languages, switchable in the top-right corner:

- 🇬🇧 English
- 🇷🇺 Russian
- 🇮🇹 Italian
- 🇫🇷 French

The active language is remembered in `localStorage` and auto-detected from the browser on first visit.

## Files

```
index.html        Markup with data-i18n keys
styles.css        Styling (dark theme, gradients, animations)
translations.js   All text strings for the 4 languages
script.js         Language switching, scroll reveals, animated background
assets/           Photo and resume PDFs go here
```

## Editing content

Open `translations.js` and edit the strings — markup never needs to change.

For example, to change the hero tagline in English:

```js
en: {
  hero: { tagline: "Your new tagline here.", ... }
}
```

The same key (`hero.tagline`) exists for `ru`, `it`, and `fr` — translate each one.

## Personal files

Put these into `assets/`:

- `photo.jpg` — your profile picture (square crop preferred)
- `resume_en.pdf`, `resume_ru.pdf`, `resume_it.pdf`, `resume_fr.pdf`

If any are missing the site degrades gracefully.

## Run locally

Just open `index.html` in a browser. Or, if you want a local server:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy to GitHub Pages

1. Create a new repo on GitHub. The simplest option:
   - Name it `<your-username>.github.io` for a root-level URL.
   - Or any name for a project-level URL at `<your-username>.github.io/<repo>/`.

2. From this directory:

   ```bash
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin git@github.com:<your-username>/<repo>.git
   git push -u origin main
   ```

3. On GitHub: **Settings → Pages → Source: Deploy from branch → main / root**.

The site goes live in a minute or two.
