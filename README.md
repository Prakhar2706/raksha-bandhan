# 🪢 Happy Raksha Bandhan, Aditi

An interactive, animation-heavy single-page site — animated rakhi, falling marigold petals,
confetti, a 20-photo gallery, a Hinglish nautanki quiz, flip-card coupons, and a sealed
envelope that opens into a personal message.

**Live site:** https://prakhar2706.github.io/raksha-bandhan/ *(enable GitHub Pages — see below)*

---

## Personalise it

Everything worth changing lives in the **CONFIG block at the top of `script.js`**.

### Name

```js
const CONFIG = {
  sisterFull: "Aditi",   // hero, letter, footer, page title
};
```

### Photos

The `photos/` folder holds `01.jpg` … `20.jpg`. To swap or add, drop files in and update
the `PHOTOS` list:

```js
const PHOTOS = [
  { src: "photos/01.jpg", cap: "Exhibit A. Koi sawaal nahi.", emoji: "🌟" },
  ...
];
```

- `src` — path to the file (`.jpg`, `.png`, `.webp`, `.gif`)
- `cap` — caption under the polaroid frame
- `emoji` — shown in the placeholder if the file is missing

Missing images degrade gracefully: the frame keeps a decorated placeholder instead of
showing a broken image. Frames crop to 3:4 with the focal point biased upward
(`object-position: center 22%`) so faces survive the crop on tall phone photos.

### Text

Also in `script.js`:

| Constant | Controls |
|---|---|
| `QUESTIONS` | Quiz questions, options, points (`s`), and the reply shown after answering (`r`) |
| `VERDICTS`  | Score bands and result text (`min` is a percentage) |
| `VOUCHERS`  | The flip-card coupons |

The timeline ("Certified Nautanki Incidents") and the letter are plain HTML — edit them
directly in `index.html`.

---

## Run it locally

No build step, no dependencies:

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

Use a server rather than opening `index.html` directly — some browsers block local image
loading over `file://`.

---

## Publish with GitHub Pages

1. Repo → **Settings** → **Pages**
2. **Source:** `Deploy from a branch`
3. **Branch:** `main`, folder `/ (root)` → **Save**
4. Wait ~1 minute, then open `https://prakhar2706.github.io/raksha-bandhan/`

---

## Features

- Animated loader, spinning SVG rakhi with woven threads, swaying marigold garland
- Typewriter name reveal
- Canvas particle system: continuously falling petals + physics-based confetti bursts
- Scroll-reveal timeline
- 20-photo polaroid gallery with tilt, hover zoom, fade-in loading, and a keyboard-accessible lightbox
- 7-question quiz with per-answer reactions, animated progress bar, and a scored verdict ring
- 3D flip-card coupons with equalised heights
- Wax-sealed envelope that opens into the message
- Optional WebAudio chimes (🔔 in the nav — no audio files needed)
- Easter egg: press **R** anywhere for confetti
- Responsive down to 360px, and respects `prefers-reduced-motion`

## Stack

Vanilla HTML, CSS and JavaScript. No dependencies, no build tooling.
The only external request is Google Fonts (Fraunces + Outfit), with system-font fallbacks.
