# 🐒 codemonkey

A minimalist typing‑speed test for developers — **[Monkeytype](https://monkeytype.com), but you type real code.**

Pick a language, pick a mode, and race through idiomatic snippets while codemonkey
tracks your WPM, accuracy, consistency, and a live WPM graph. No build step, no
dependencies, no backend — just open it and type.

👉 **Live:** https://fizzexual.github.io/Codemonkey/

---

## Features

- **Real code, not prose** — snippets in JavaScript, Python, TypeScript, Java, and C++.
- **Smart auto‑indentation** — press `Enter` and the next line's leading whitespace is
  filled in for you, so you only ever type the characters that matter.
- **Two modes**
  - `time` — type as much as you can in 15 / 30 / 60 / 120 seconds.
  - `snippet` — finish 1 / 3 / 5 complete snippets.
- **Live stats** — WPM, accuracy, and a countdown/progress indicator while you type.
- **Detailed results** — net WPM, raw WPM, accuracy, consistency, character counts,
  and a WPM‑over‑time graph with error markers.
- **Personal bests & history** — your results are saved locally (per language + mode)
  in `localStorage`. Nothing leaves your machine.
- **9 themes** — serika dark, dracula, nord, gruvbox, monokai, tokyo night, coral,
  matrix, and serika light. Your choice is remembered.

## Keyboard shortcuts

| Key | Action |
| --- | --- |
| `Tab` | restart with a new snippet |
| `Esc` | reset the current test |
| `Enter` | new line (leading indentation is auto‑filled) |
| `Enter` / `Tab` (on results) | start the next test |

## Running locally

It's a static site — there is nothing to install or build.

```bash
# just open it
open index.html        # macOS
start index.html       # Windows

# …or serve it (any static server works)
python -m http.server 8000
# then visit http://localhost:8000
```

## Project structure

```
Codemonkey/
├── index.html          # markup
├── css/
│   └── style.css       # layout + all theme palettes (CSS variables)
└── js/
    ├── themes.js       # theme registry + apply/persist
    ├── snippets.js     # the code you type, per language
    └── app.js          # typing engine, stats, graph, persistence
```

### Adding snippets

Open [`js/snippets.js`](js/snippets.js) and add a string to the array for a language.
Use spaces (not tabs) for indentation and skip trailing whitespace — `app.js` handles
auto‑indentation and normalisation. Adding a whole new language is just a new key in
`CODE_SNIPPETS` plus an entry in `LANGUAGES`.

### Adding a theme

Add a `[data-theme="your_theme"]` block of CSS variables in
[`css/style.css`](css/style.css) and a matching entry in the `THEMES` list in
[`js/themes.js`](js/themes.js).

## Deployment

The repo ships with a GitHub Actions workflow ([`.github/workflows/pages.yml`](.github/workflows/pages.yml))
that publishes the site to GitHub Pages on every push to `main`. To enable it once:

> **Settings → Pages → Build and deployment → Source → GitHub Actions**

After that, every push deploys automatically to
`https://fizzexual.github.io/Codemonkey/`.

## Credits

Inspired by the wonderful [Monkeytype](https://monkeytype.com). Built with plain
HTML, CSS, and JavaScript. Fonts: [JetBrains Mono](https://www.jetbrains.com/lp/mono/)
and [Lexend Deca](https://fonts.google.com/specimen/Lexend+Deca).

## License

[MIT](LICENSE)
