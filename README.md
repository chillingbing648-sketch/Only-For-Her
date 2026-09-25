# Only For Her

> **A little universe, made intentionally.**  
> A handcrafted interactive React experience built from memories, photographs, letters, music, and small surprises.

<p align="center">
  <a href="https://chillingbing648-sketch.github.io/Only-For-Her/"><strong>✦ Live Experience</strong></a>
  &nbsp; · &nbsp;
  <a href="https://github.com/chillingbing648-sketch/Only-For-Her"><strong>Source Code</strong></a>
</p>

---

## ✦ What This Is

**Only For Her** is a personal digital keepsake designed to feel more like a small interactive universe than a conventional website.

The experience moves through memories, photographs, videos, letters, music, future plans, quizzes, hidden interactions, and a final reveal — all inside a responsive React application.

<p align="center">
  <img src="./assets/sections-preview.svg" alt="Only For Her experience sections" width="900">
</p>

---

## 🌙 The Experience

| Section | What it contains |
|---|---|
| **Opening** | The cinematic entry into the experience |
| **Our Universe** | Central navigation through the memories |
| **The Beginning** | A chronological relationship timeline |
| **Memory Museum** | Photo and video memories with an interactive viewer |
| **Things I Don't Say Enough** | Short personal messages |
| **A Letter For You** | A dedicated letter experience |
| **Open When…** | Context-based letters with optional date locks |
| **How Well Do You Know Us** | An interactive memory quiz |
| **Our Soundtrack** | Songs and music connected to memories |
| **Surprise Me** | Randomized messages, memories, jokes, and ideas |
| **The Future** | Things to do, places to visit, and future plans |
| **One Last Thing** | The final emotional reveal |
| **Secret Star** | A small hidden Easter egg |

---

## 🛠️ Built With

- **React 18** — UI and component architecture
- **Vite 6** — development and production builds
- **JavaScript (ES Modules)** — application logic
- **CSS** — responsive layout, visual system, transitions, and atmosphere
- **SVG** — decorative and preview graphics
- **GitHub Actions** — automated deployment
- **GitHub Pages** — static hosting

No backend, database, authentication service, or API keys are required.

---

## 🧩 Project Structure

```text
Only-For-Her/
│
├── .github/
│   └── workflows/
│       └── deploy.yml
│
├── MyHeartGallery/          # Personal photos & videos
├── assets/                  # README / static project visuals
├── public/                  # Public static directories
│
├── src/
│   ├── components/
│   │   ├── Opening/
│   │   ├── Universe/
│   │   ├── Navigation/
│   │   ├── Timeline/
│   │   ├── MemoryMuseum/
│   │   ├── PhotoViewer/
│   │   ├── Unsaid/
│   │   ├── Letter/
│   │   ├── OpenWhen/
│   │   ├── Quiz/
│   │   ├── Soundtrack/
│   │   ├── Surprise/
│   │   ├── Future/
│   │   ├── FinalReveal/
│   │   └── UI/
│   │
│   ├── data/
│   │   └── giftData.js      # Main personal content
│   ├── hooks/               # Reusable React hooks
│   ├── styles/              # Global & section styling
│   ├── utils/               # Shared utilities
│   ├── App.jsx              # Application shell & routing
│   └── main.jsx             # React entry point
│
├── index.html
├── package.json
└── vite.config.js
```

---

## 💌 Where To Edit The Experience

The project is intentionally **content-driven**.

### Main content

Start with:

```text
src/data/giftData.js
```

This file contains the majority of the editable experience:

- Names
- Opening text
- Timeline entries
- Museum exhibits
- Personal messages
- Letter content
- Open When letters
- Quiz questions
- Songs
- Future plans
- Destinations
- Surprise messages
- Final reveal
- Secret Easter egg

You should normally **not need to modify the React components** just to change personal content.

### Media

Personal gallery media lives in:

```text
MyHeartGallery/
```

The deployment workflow copies this directory into the production build automatically.

---

## 🎨 Design Direction

The visual system is intentionally built around:

- Midnight-space atmosphere
- Constellation-inspired navigation
- Warm editorial typography
- Soft translucent surfaces
- Subtle motion
- Focused transitions
- Responsive layouts
- Reduced-motion support
- Small hidden interactions

The goal is not to create another generic landing page.

It is meant to feel **quiet, personal, cinematic, and discovered over time**.

---

## 🚀 Run Locally

### Requirements

- Node.js 18+
- npm

### Install

```bash
git clone https://github.com/chillingbing648-sketch/Only-For-Her.git
cd Only-For-Her
npm install
```

### Start development server

```bash
npm run dev
```

### Production build

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

---

## ☁️ Deployment

The project automatically deploys to GitHub Pages whenever changes are pushed to `main`.

```text
git push
   │
   ▼
GitHub Actions
   │
   ├── Install dependencies
   ├── Build with Vite
   ├── Copy MyHeartGallery/
   ├── Verify production output
   ├── Upload Pages artifact
   └── Deploy
   │
   ▼
GitHub Pages
```

Deployment workflow:

```text
.github/workflows/deploy.yml
```

### Live

**https://chillingbing648-sketch.github.io/Only-For-Her/**

---

## 🖼️ Media

The project currently uses both images and videos inside `MyHeartGallery/`.

Examples include:

```text
.jpeg
.mp4
```

The gallery is served as static content and does not require a media backend.

> **Important:** Anything committed to a public GitHub repository should be considered publicly accessible. Personal photographs, videos, music, and writing should only be committed when you are comfortable hosting them publicly.

---

## ♡ Project Philosophy

This project is deliberately more than a collection of pages.

Every section is intended to represent a different way of remembering:

**a moment → a photograph → a sentence → a song → a question → a surprise → a future → a final message**

The technology is there to support the memory, not replace it.

---

## 📌 Project Status

**Active personal project**

The architecture is modular so that new memories, media, sections, and interactions can be added without rebuilding the application from scratch.

---

## License

Personal project.

The source code is available for learning and experimentation. Personal writing, photographs, videos, music, and other media remain the property of their respective owners and should not be reused without permission.

---

<p align="center">
  <strong>Only For Her</strong><br>
  <sub>Built like software. Kept like a memory.</sub>
</p>
