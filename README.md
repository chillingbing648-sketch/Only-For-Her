# Only For Her

> A private, interactive digital keepsake built around memories, photographs, letters, music, and shared moments.

**Only For Her** is a handcrafted React experience designed as a personal digital universe rather than a conventional website. It brings memories, stories, media, and small interactive details together in one immersive experience.

<p align="center">
  <a href="https://chillingbing648-sketch.github.io/Only-For-Her/"><strong>✦ Live Experience</strong></a>
  &nbsp; · &nbsp;
  <a href="https://github.com/chillingbing648-sketch/Only-For-Her"><strong>Source Code</strong></a>
</p>

---

## Overview

The experience combines a constellation-inspired interface with a collection of personal experiences:

- **Opening** — the entry point into the experience
- **Universe** — central navigation between sections
- **The Beginning** — a chronological memory timeline
- **Memory Museum** — photographs and video exhibits with an interactive viewer
- **Things I Don't Say Enough** — short personal notes
- **A Letter For You** — a dedicated letter experience
- **Open When…** — context-based letters with optional date locks
- **How Well Do You Know Us** — an interactive memory quiz
- **Our Soundtrack** — songs connected to memories
- **Surprise Me** — randomized messages and moments
- **The Future** — shared plans and places
- **One Last Thing** — the final reveal

---

## Technical Stack

| Technology | Role |
|---|---|
| **React** | Component-based UI and interaction |
| **Vite** | Development and production build tooling |
| **JavaScript** | Application and interaction logic |
| **CSS** | Responsive layout, animation, and visual system |
| **SVG** | Constellation and decorative graphics |
| **GitHub Actions** | Continuous deployment |
| **GitHub Pages** | Static hosting |

The application is intentionally lightweight and requires no backend, database, authentication system, or application server.

---

## Architecture

Personal content is separated from the presentation layer wherever practical.

```text
src/
├── components/        # Experience sections and reusable UI
├── data/
│   └── giftData.js    # Primary content/configuration
├── hooks/             # Reusable React hooks
├── styles/            # Global visual system
├── App.jsx            # Application shell and navigation
└── main.jsx           # React entry point

MyHeartGallery/        # Personal gallery media
public/                # Public static assets
.github/workflows/     # GitHub Pages deployment
```

Most content changes can be made directly in `src/data/giftData.js`.

Gallery media is stored separately in `MyHeartGallery/` and copied into the production build by the deployment workflow.

---

## Design Principles

The interface is built around a few deliberate principles:

- **Immersive, not overwhelming** — atmosphere without excessive effects
- **Editorial typography** — strong hierarchy and readable content
- **Subtle motion** — transitions support the experience rather than distract from it
- **Responsive by default** — designed for mobile and desktop screens
- **Accessible interaction** — semantic controls, labels, and reduced-motion support
- **Content-first architecture** — personal content stays separate from UI implementation

The visual language combines a midnight-space atmosphere, warm typography, constellation navigation, soft surfaces, and restrained animation.

> **Built like software. Kept like a memory.**

---

## Local Development

### Requirements

- Node.js 18+
- npm

### Installation

```bash
git clone https://github.com/chillingbing648-sketch/Only-For-Her.git
cd Only-For-Her
npm install
npm run dev
```

### Production build

```bash
npm run build
npm run preview
```

---

## Deployment

Production deployment is automated through **GitHub Actions** and **GitHub Pages**.

```text
git push
   ↓
GitHub Actions
   ↓
Install dependencies
   ↓
Build with Vite
   ↓
Copy gallery media
   ↓
Verify production output
   ↓
Upload Pages artifact
   ↓
Deploy to GitHub Pages
```

Deployment configuration:

```text
.github/workflows/deploy.yml
```

Live site:

**https://chillingbing648-sketch.github.io/Only-For-Her/**

---

## Media Handling

The project supports both image and video memories.

Gallery assets are kept in:

```text
MyHeartGallery/
```

The application resolves media paths relative to the deployed Vite base path, allowing the same content to work locally and on the repository's GitHub Pages URL.

Supported gallery formats currently include:

- JPEG images
- MP4 video

---

## Privacy & Hosting

The application is a static site and does not include:

- a backend
- a database
- user accounts
- authentication
- analytics

The deployed experience is public at its GitHub Pages address. Although the project is intended as a personal keepsake, any content committed to the repository should be treated as publicly hosted content.

---

## Development Guide

| If you want to change… | Start here |
|---|---|
| Personal content | `src/data/giftData.js` |
| Memory/gallery assets | `MyHeartGallery/` |
| Navigation | `src/App.jsx` and navigation components |
| Universe experience | `src/components/Universe/` |
| Memory Museum | `src/components/MemoryMuseum/` |
| Media viewer | `src/components/PhotoViewer/` |
| Visual system | `src/styles/` |
| GitHub Pages deployment | `.github/workflows/deploy.yml` |
| Vite deployment path | `vite.config.js` |

---

## Project Status

**Active personal project.**

The architecture is intentionally modular so new memories, media, sections, and interactions can be added without rebuilding the experience from scratch.

---

## License

Personal project.

The source code is shared for learning and experimentation. Personal writing, photographs, music, videos, and other media remain the property of their respective owners and should not be reused without permission.

---

<p align="center">
  <strong>Only For Her</strong><br>
  <sub>A little universe, made intentionally.</sub>
</p>
