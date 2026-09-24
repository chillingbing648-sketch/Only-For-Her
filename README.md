# Only For Her

> A small, private corner of the internet made for one person.

**Only For Her** is a personal interactive web experience built around memories, letters, music, photographs, little surprises, and the moments that are easier to keep when they have a place of their own.

It is intentionally not a typical portfolio-style website. The interface is designed to feel more like entering a small digital keepsake than navigating an app.

<p align="center">
  <a href="https://chillingbing648-sketch.github.io/Only-For-Her/"><strong>✦ Open Only For Her</strong></a>
  &nbsp; · &nbsp;
  <a href="https://github.com/chillingbing648-sketch/Only-For-Her"><strong>View Source</strong></a>
</p>

---

## ✦ What It Contains

- **The Universe** — the central navigation space
- **The Beginning** — a timeline of memories
- **Memory Museum** — visual memories and exhibits
- **Things I Don't Say Enough** — short personal thoughts
- **A Letter For You** — a dedicated letter experience
- **Open When…** — letters designed for specific moments
- **How Well Do You Know Us** — a small shared-memory quiz
- **Our Soundtrack** — songs and memories connected to them
- **Surprise Me** — randomized little moments
- **The Future** — things still waiting to happen
- **One Last Thing** — the final reveal

---

## ⚙️ Built With

| Technology | Purpose |
|---|---|
| **React 18** | Component-based experience and UI |
| **Vite 6** | Development server and production builds |
| **JavaScript** | Interaction and experience logic |
| **CSS3** | Layout, atmosphere, animation, and responsive design |
| **SVG** | Constellation and decorative visuals |
| **GitHub Actions** | Automated production deployment |
| **GitHub Pages** | Static hosting |

The project deliberately stays lightweight: no backend, database, authentication, or unnecessary application infrastructure.

---

## 🌌 How It Works

The experience is organized around a lightweight hash-based navigation system:

```text
Opening
   ↓
Universe
   ↓
Choose a destination
   ↓
Section transition
   ↓
Explore
   ↓
Return to the Universe
```

Content is separated from presentation wherever practical. Personal data and experience configuration live primarily in:

```text
src/data/giftData.js
```

while the React components control how that content is presented.

---

## 🎨 Design Direction

The visual direction combines:

- midnight-space atmosphere
- warm editorial typography
- soft memory-inspired surfaces
- constellation navigation
- subtle motion
- responsive layouts
- reduced-motion support

The goal is to keep the interface expressive without turning it into an effects showcase.

> **Built like software. Kept like a memory.**

---

## 🗂️ Project Structure

```text
Only-For-Her/
│
├── .github/
│   └── workflows/
│       └── deploy.yml
│
├── public/
│   └── media/
│
├── src/
│   ├── components/
│   │   ├── Opening/
│   │   ├── Universe/
│   │   ├── Timeline/
│   │   ├── MemoryMuseum/
│   │   ├── Unsaid/
│   │   ├── Letter/
│   │   ├── OpenWhen/
│   │   ├── Quiz/
│   │   ├── Soundtrack/
│   │   ├── Surprise/
│   │   ├── Future/
│   │   ├── FinalReveal/
│   │   ├── Navigation/
│   │   └── UI/
│   │
│   ├── data/
│   │   └── giftData.js
│   ├── hooks/
│   ├── styles/
│   ├── App.jsx
│   └── main.jsx
│
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
```

---

## 🚀 Run It Locally

### Requirements

- Node.js 18+
- npm

### Setup

```bash
git clone https://github.com/chillingbing648-sketch/Only-For-Her.git
cd Only-For-Her
npm install
npm run dev
```

### Production preview

```bash
npm run build
npm run preview
```

---

## ☁️ Deployment

The project is deployed through GitHub Actions and GitHub Pages.

```text
Push to main
    ↓
GitHub Actions
    ↓
npm ci
    ↓
npm run build
    ↓
Verify dist/
    ↓
Upload Pages artifact
    ↓
GitHub Pages
```

The production workflow is located at:

```text
.github/workflows/deploy.yml
```

Vite uses a relative production base so the application works from the repository's GitHub Pages path.

---

## 🔒 Privacy

The application is intentionally static.

There is:

- no backend
- no database
- no account system
- no authentication
- no analytics layer

The site also asks search engines not to index the experience.

Because the project contains personal writing and media, anything committed to the repository should be treated as content you are comfortable hosting as part of the deployed site.

---

## 🛠️ Development Notes

For future changes:

```text
Changing personal content
→ src/data/giftData.js

Changing navigation
→ src/App.jsx + src/hooks/

Changing the Universe
→ src/components/Universe/

Changing the visual system
→ src/styles/

Changing deployment
→ .github/workflows/deploy.yml
   + vite.config.js
```

---

## License

Personal project.

The source is shared for learning and experimentation. Personal writing, photographs, music, and other media belong to their respective owners and should not be reused without permission.

---

<p align="center">
  <strong>Only For Her</strong><br>
  <sub>A little universe, made intentionally.</sub>
</p>
