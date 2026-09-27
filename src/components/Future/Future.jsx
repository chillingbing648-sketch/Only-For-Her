import { useEffect, useRef, useState } from 'react'
import { giftData, settings } from '../../data/giftData'
import { EmptySection } from '../Timeline/Timeline'
import { useEscapeToClose } from '../../hooks/useEscapeToClose'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import AdventureScene from './AdventureScene'

// Connections between the 6 celestial destinations
const CONSTELLATION_CONNECTIONS = [
  ['japan', 'photobooth'],
  ['photobooth', 'shopping'],
  ['shopping', 'dinner'],
  ['dinner', 'airbnb'],
  ['airbnb', 'cook'],
  ['cook', 'japan'],
  ['photobooth', 'airbnb'],
]

const MOBILE_CONNECTIONS = [
  ['japan', 'photobooth'],
  ['photobooth', 'shopping'],
  ['shopping', 'dinner'],
  ['dinner', 'airbnb'],
  ['airbnb', 'cook'],
  ['cook', 'japan'],
]

// Adjacency mapping for starlight thread illumination
const ADJACENCY = {}
CONSTELLATION_CONNECTIONS.forEach(([a, b]) => {
  if (!ADJACENCY[a]) ADJACENCY[a] = new Set()
  if (!ADJACENCY[b]) ADJACENCY[b] = new Set()
  ADJACENCY[a].add(b)
  ADJACENCY[b].add(a)
})

const STORAGE_FAVORITE_KEY = 'ofh_first_adventure'
const STORAGE_VISITED_KEY = 'ofh_visited_adventures'

export default function Future() {
  const reduced = useReducedMotion()
  const adventures = giftData.futureAdventures || []
  const intro = giftData.futureIntro || {
    eyebrow: 'Our Future',
    heading: 'Where should we go first?',
    subheading: "There are still so many places we haven't been together.",
    coreIdea: "This is not a future-plans section. It is a collection of future memories that haven't happened yet.",
  }

  // Active modal/cinematic adventure
  const [selectedId, setSelectedId] = useState(null)
  const [previewState, setPreviewState] = useState('idle') // 'entering' | 'open' | 'closing' | 'idle'
  const [hoveredId, setHoveredId] = useState(null)
  const [focusedId, setFocusedId] = useState(null)

  // Track discovered adventures
  const [visitedIds, setVisitedIds] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_VISITED_KEY)
      return saved ? JSON.parse(saved) : []
    } catch {
      return []
    }
  })

  // Chosen first adventure
  const [firstChoiceId, setFirstChoiceId] = useState(() => {
    try {
      return localStorage.getItem(STORAGE_FAVORITE_KEY) || null
    } catch {
      return null
    }
  })

  // Toast / feedback message when an adventure is marked as first
  const [toastMsg, setToastMsg] = useState(null)
  const toastTimeoutRef = useRef(null)

  // Dynamic node coordinate measurement for precise constellation threads
  const fieldRef = useRef(null)
  const nodeRefs = useRef({})
  const [fieldSize, setFieldSize] = useState({ width: 0, height: 0 })
  const [nodePositions, setNodePositions] = useState({})
  const [isMobile, setIsMobile] = useState(false)

  // Close preview on escape
  useEscapeToClose(selectedId !== null, () => closePreview())

  const measureNodes = () => {
    if (!fieldRef.current) return
    const fieldRect = fieldRef.current.getBoundingClientRect()
    if (fieldRect.width === 0 || fieldRect.height === 0) return

    const mobile = window.innerWidth <= 640
    setIsMobile(mobile)
    setFieldSize({ width: fieldRect.width, height: fieldRect.height })

    const positions = {}
    adventures.forEach((adv) => {
      const el = nodeRefs.current[adv.id]
      if (el) {
        const glowEl = el.querySelector('.future__node-halo') || el
        const rect = glowEl.getBoundingClientRect()
        positions[adv.id] = {
          x: rect.left + rect.width / 2 - fieldRect.left,
          y: rect.top + rect.height / 2 - fieldRect.top,
        }
      }
    })
    setNodePositions(positions)
  }

  useEffect(() => {
    measureNodes()
    window.addEventListener('resize', measureNodes)

    let ro
    if (typeof ResizeObserver !== 'undefined' && fieldRef.current) {
      ro = new ResizeObserver(() => measureNodes())
      ro.observe(fieldRef.current)
    }

    const t = setTimeout(measureNodes, 70)
    return () => {
      clearTimeout(t)
      window.removeEventListener('resize', measureNodes)
      if (ro) ro.disconnect()
    }
  }, [adventures])

  const openAdventure = (id) => {
    setSelectedId(id)
    setPreviewState('entering')
    setTimeout(() => setPreviewState('open'), reduced ? 10 : 250)

    // Mark as visited
    if (!visitedIds.includes(id)) {
      const next = [...visitedIds, id]
      setVisitedIds(next)
      try {
        localStorage.setItem(STORAGE_VISITED_KEY, JSON.stringify(next))
      } catch {
        // ignore
      }
    }
  }

  const closePreview = () => {
    setPreviewState('closing')
    setTimeout(() => {
      setSelectedId(null)
      setPreviewState('idle')
    }, reduced ? 10 : 300)
  }

  const handleSelectFirstChoice = (id) => {
    const nextId = firstChoiceId === id ? null : id
    setFirstChoiceId(nextId)
    try {
      if (nextId) {
        localStorage.setItem(STORAGE_FAVORITE_KEY, nextId)
      } else {
        localStorage.removeItem(STORAGE_FAVORITE_KEY)
      }
    } catch {
      // ignore
    }

    const chosen = adventures.find((a) => a.id === nextId)
    if (chosen) {
      showToast(`Marked as our first stop ✦ Let's make ${chosen.title} happen first.`)
    } else {
      showToast('First adventure choice cleared.')
    }
  }

  const showToast = (text) => {
    if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current)
    setToastMsg(text)
    toastTimeoutRef.current = setTimeout(() => setToastMsg(null), 3800)
  }

  if (!settings.showFutureSection) {
    return <EmptySection title="The Future" hint="This section is turned off in settings." />
  }

  const activeAdventure = adventures.find((a) => a.id === selectedId)
  const interactedId = selectedId || hoveredId || focusedId
  const activeConnections = isMobile ? MOBILE_CONNECTIONS : CONSTELLATION_CONNECTIONS
  const hasMeasured = fieldSize.width > 0 && Object.keys(nodePositions).length === adventures.length

  const currentTheme = activeAdventure?.atmosphere || null

  return (
    <div
      className={`screen future ${selectedId ? 'is-in-adventure' : ''} ${interactedId ? 'has-interaction' : ''}`}
      style={{
        '--adv-accent': currentTheme?.accent || 'var(--c-star)',
        '--adv-glow': currentTheme?.glow || '242, 200, 131',
        '--adv-tint': currentTheme?.tint || 'rgba(242, 200, 131, 0.08)',
      }}
    >
      {/* Subtle dynamic atmospheric transformation layer */}
      <div className="future__atmosphere" aria-hidden="true" />

      {/* Screen reader live region for toasts & announcements */}
      <div className="sr-only" aria-live="polite">
        {toastMsg}
      </div>

      {toastMsg && (
        <div className="future__toast fade-in" role="status">
          <span>{toastMsg}</span>
        </div>
      )}

      <div className="screen__inner future__container">
        {/* Opening Header */}
        <header className="future__intro fade-in">
          <p className="eyebrow future__eyebrow">{intro.eyebrow}</p>
          <h1 className="heading-l future__heading">{intro.heading}</h1>
          <p className="future__subheading">{intro.subheading}</p>
          <p className="future__core-whisper">
            A collection of future memories that haven't happened yet.
          </p>
        </header>

        {/* Spatial Constellation Field */}
        <div
          ref={fieldRef}
          className="future__field"
          role="region"
          aria-label="Future adventures constellation"
        >
          {/* Constellation thread system dynamically rendered to exact node geometry */}
          <svg
            className="future__lines"
            viewBox={hasMeasured ? `0 0 ${fieldSize.width} ${fieldSize.height}` : '0 0 100 100'}
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="futureLineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(240, 162, 176, 0.45)" />
                <stop offset="50%" stopColor="rgba(242, 200, 131, 0.55)" />
                <stop offset="100%" stopColor="rgba(178, 194, 240, 0.45)" />
              </linearGradient>
              <filter id="futureThreadBlur" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="2.2" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {activeConnections.map(([aId, bId], i) => {
              const isLit = selectedId && (aId === selectedId || bId === selectedId)
              const isRelated = interactedId && (aId === interactedId || bId === interactedId)
              const isDimmed = interactedId && !isRelated

              let lineClass = 'future__line'
              if (isLit) lineClass += ' future__line--lit is-connected'
              else if (isRelated) lineClass += ' future__line--active is-connected'
              else if (isDimmed) lineClass += ' future__line--dimmed'

              let x1, y1, x2, y2
              if (hasMeasured && nodePositions[aId] && nodePositions[bId]) {
                x1 = nodePositions[aId].x
                y1 = nodePositions[aId].y
                x2 = nodePositions[bId].x
                y2 = nodePositions[bId].y
              } else {
                const nodeA = adventures.find((n) => n.id === aId)
                const nodeB = adventures.find((n) => n.id === bId)
                if (!nodeA || !nodeB) return null
                x1 = isMobile ? nodeA.mx : nodeA.x
                y1 = isMobile ? nodeA.my : nodeA.y
                x2 = isMobile ? nodeB.mx : nodeB.x
                y2 = isMobile ? nodeB.my : nodeB.y
              }

              const midX = (x1 + x2) / 2
              const midY = (y1 + y2) / 2

              return (
                <g key={`thread-group-${aId}-${bId}-${i}`}>
                  {/* Subtle soft ambient glow underlay */}
                  <line
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    className={`future__line-glow ${isLit || isRelated ? 'is-visible' : ''}`}
                  />
                  {/* Primary starlight thread */}
                  <line
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    className={lineClass}
                  />
                  {/* Subtle celestial midpoint starlight diamond */}
                  {(isLit || isRelated) && (
                    <circle
                      cx={midX}
                      cy={midY}
                      r="1.8"
                      className="future__line-sparkle"
                    />
                  )}
                </g>
              )
            })}
          </svg>

          {/* Spatial Adventure Celestial Nodes */}
          {adventures.map((adv, i) => {
            const isSelected = selectedId === adv.id
            const isHovered = hoveredId === adv.id
            const isFocused = focusedId === adv.id
            const isVisited = visitedIds.includes(adv.id)
            const isFirstChoice = firstChoiceId === adv.id
            const isConnected = Boolean(
              interactedId && interactedId !== adv.id && ADJACENCY[interactedId]?.has(adv.id)
            )
            const isDimmed = Boolean(
              interactedId && interactedId !== adv.id && !ADJACENCY[interactedId]?.has(adv.id)
            )

            let nodeClasses = 'future__node'
            if (!reduced) nodeClasses += ' future__node--float'
            if (isSelected) nodeClasses += ' is-selected'
            if (isHovered) nodeClasses += ' is-hovered'
            if (isFocused) nodeClasses += ' is-focused'
            if (isConnected) nodeClasses += ' is-connected'
            if (isDimmed) nodeClasses += ' is-dimmed'
            if (isVisited) nodeClasses += ' is-visited'
            if (isFirstChoice) nodeClasses += ' is-first-choice'

            return (
              <button
                key={adv.id}
                ref={(el) => (nodeRefs.current[adv.id] = el)}
                className={nodeClasses}
                style={{
                  '--x': `${adv.x}%`,
                  '--y': `${adv.y}%`,
                  '--mx': `${adv.mx}%`,
                  '--my': `${adv.my}%`,
                  left: isMobile ? `${adv.mx}%` : `${adv.x}%`,
                  top: isMobile ? `${adv.my}%` : `${adv.y}%`,
                  '--node-accent': adv.atmosphere?.accent || '#f2c883',
                  '--node-glow': adv.atmosphere?.glow || '242, 200, 131',
                  '--enter-delay': `${(i % 6) * 75}ms`,
                  '--float-delay': `${(i % 5) * 0.8}s`,
                }}
                onClick={() => openAdventure(adv.id)}
                onPointerEnter={(e) => {
                  if (e.pointerType !== 'touch') setHoveredId(adv.id)
                }}
                onPointerLeave={() => setHoveredId(null)}
                onFocus={() => setFocusedId(adv.id)}
                onBlur={() => setFocusedId(null)}
                aria-label={`${adv.title}: ${adv.tagline}. Click to discover.`}
              >
                <span className="future__node-halo" aria-hidden="true" />
                <span className="future__node-core" aria-hidden="true">
                  <AdventureIcon id={adv.id} size={20} />
                </span>

                <div className="future__node-meta">
                  <span className="future__node-emblem" aria-hidden="true">
                    {adv.emblem}
                  </span>
                  <span className="future__node-title">{adv.title}</span>
                  <span className="future__node-tagline">{adv.tagline}</span>
                  {isFirstChoice && (
                    <span className="future__node-badge" aria-label="Chosen first destination">
                      First Stop ♡
                    </span>
                  )}
                  {isVisited && !isFirstChoice && (
                    <span className="future__node-visited-star" title="Discovered">
                      ✦
                    </span>
                  )}
                </div>
              </button>
            )
          })}
        </div>

        {/* Ending Experience: Exploration Tracker & Choice Prompt */}
        <section className="future__ending fade-in" aria-label="Our Adventure Choice">
          <div className="future__ending-divider" aria-hidden="true">
            <span className="future__ending-star">✦</span>
          </div>

          <div className="future__ending-card">
            <p className="future__ending-lead">6 adventures waiting for us.</p>
            <h2 className="future__ending-question">Which one happens first? ♡</h2>

            <div className="future__ending-selector" role="radiogroup" aria-label="Choose which adventure happens first">
              {adventures.map((adv) => {
                const isSelected = firstChoiceId === adv.id
                return (
                  <button
                    key={adv.id}
                    role="radio"
                    aria-checked={isSelected}
                    className={`future__ending-btn ${isSelected ? 'is-selected' : ''}`}
                    onClick={() => handleSelectFirstChoice(adv.id)}
                  >
                    <span className="future__ending-btn-icon" aria-hidden="true">
                      <AdventureIcon id={adv.id} size={15} />
                    </span>
                    <span className="future__ending-btn-emblem" aria-hidden="true">
                      {adv.emblem}
                    </span>
                    <span className="future__ending-btn-label">{adv.title}</span>
                    {isSelected && <span className="future__ending-btn-check">✓</span>}
                  </button>
                )
              })}
            </div>

            {firstChoiceId && (
              <div className="future__ending-verdict fade-in">
                <p className="future__ending-note">
                  {adventures.find((a) => a.id === firstChoiceId)?.title} marked as our first stop.
                  <br />
                  <span className="future__ending-subtext">
                    I can't wait to live every second of this with you.
                  </span>
                </p>
              </div>
            )}
          </div>
        </section>
      </div>

      {/* Cinematic Preview Chamber */}
      {selectedId && activeAdventure && (
        <div
          className={`future__preview-overlay ${previewState}`}
          role="dialog"
          aria-modal="true"
          aria-label={`Cinematic preview of ${activeAdventure.title}`}
          onClick={(e) => {
            if (e.target === e.currentTarget) closePreview()
          }}
        >
          <div className="future__preview-scrim" aria-hidden="true" />

          <article className="future__preview-sheet scale-in">
            {/* Top Atmospheric Badge & Return Button */}
            <div className="future__preview-header">
              <button
                className="future__back-btn"
                onClick={closePreview}
                aria-label="Return to constellation"
              >
                <span className="future__back-arrow" aria-hidden="true">
                  ←
                </span>
                <span>Back to constellation</span>
              </button>

              <div className="future__status-pill" aria-label="Status: Adventure Found">
                <span className="future__status-spark" aria-hidden="true">
                  ✦
                </span>
                <span>ADVENTURE FOUND ✦</span>
              </div>
            </div>

            {/* Adventure Atmosphere Content */}
            <div className={`future__preview-content future__preview-content--${activeAdventure.theme}`}>
              {/* Kanji / Theme Watermark */}
              {activeAdventure.atmosphere?.watermark && (
                <div className="future__watermark" aria-hidden="true">
                  {activeAdventure.atmosphere.watermark}
                </div>
              )}

              {/* THE HERO: Cinematic SVG Mini-Scene */}
              <div className="future__scene-container">
                <AdventureScene id={activeAdventure.id} reduced={reduced} />
              </div>

              {/* Supporting Emotional Caption & Story */}
              <div className="future__scene-caption-block fade-in">
                <div className="future__scene-meta-top">
                  <span className="future__scene-emblem" aria-hidden="true">
                    {activeAdventure.emblem}
                  </span>
                  <h2 className="heading-l future__scene-title">{activeAdventure.title}</h2>
                  <span className="future__scene-tagline">“{activeAdventure.tagline}”</span>
                </div>

                <p className="future__scene-caption">
                  {activeAdventure.visualCaption || activeAdventure.story}
                </p>

                <div className="future__scene-whisper-tag">
                  <span>✦ A future memory · {activeAdventure.atmosphere?.badge || 'Someday Soon'}</span>
                </div>
              </div>

              {/* Action: Mark as First Adventure Choice & Return */}
              <div className="future__preview-actions">
                <button
                  className={`future__choice-action-btn ${firstChoiceId === activeAdventure.id ? 'is-active' : ''}`}
                  onClick={() => handleSelectFirstChoice(activeAdventure.id)}
                >
                  <span className="future__choice-action-heart">
                    {firstChoiceId === activeAdventure.id ? '♥' : '♡'}
                  </span>
                  <span>
                    {firstChoiceId === activeAdventure.id
                      ? 'Marked as our first stop ✦'
                      : 'Let’s make this our first stop ♡'}
                  </span>
                </button>

                <button className="future__close-btn" onClick={closePreview}>
                  Return to constellation
                </button>
              </div>
            </div>
          </article>
        </div>
      )}
    </div>
  )
}

// Rich, poetic celestial SVG icons crafted specifically for the 6 adventures
function AdventureIcon({ id, size = 20, className = '' }) {
  const props = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    className,
    'aria-hidden': 'true',
  }

  switch (id) {
    case 'japan':
      // Mount Fuji silhouette, rising dawn sun, torii gate, and morning starlight
      return (
        <svg {...props}>
          {/* Rising Sun starlight disc */}
          <circle cx="12" cy="7.5" r="4.2" strokeWidth="1.2" fill="currentColor" fillOpacity="0.18" />
          <path d="M12 1.5v1.8M6.5 4.5l1.3 1.3M17.5 4.5l-1.3 1.3" strokeWidth="1.1" strokeOpacity="0.65" />
          {/* Mount Fuji slopes and snowcap ridge */}
          <path d="M3 21l6.8-12c.7-1.2 1.7-1.2 2.4 0L19 21" strokeWidth="1.3" />
          <path d="M8.2 13.5c1 .5 2 .2 3.8-.5 1.8.7 2.8 1 3.8.5" strokeWidth="1.1" strokeOpacity="0.75" />
          {/* Torii Gate at the foothill */}
          <path d="M7 21v-5.2M17 21v-5.2" strokeWidth="1.3" />
          <path d="M5.5 17h13" strokeWidth="1.3" />
          <path d="M4.5 15c4.5-.8 10.5-.8 15 0" strokeWidth="1.4" />
        </svg>
      )

    case 'photobooth':
      // Retro analog rangefinder camera with starlight flash burst and lens aperture
      return (
        <svg {...props}>
          {/* Camera housing */}
          <rect x="2.5" y="6" width="19" height="14" rx="3" strokeWidth="1.3" />
          {/* Top shutter and dial */}
          <path d="M6.5 6V4h4v2M17.5 6V4.2" strokeWidth="1.3" />
          {/* Viewfinder and sensor */}
          <rect x="15" y="8" width="4.2" height="2.8" rx="0.8" strokeWidth="1" fill="currentColor" fillOpacity="0.2" />
          <circle cx="5.2" cy="9.2" r="0.8" fill="currentColor" stroke="none" />
          {/* Main Lens with aperture rings */}
          <circle cx="10.5" cy="13" r="4.2" strokeWidth="1.3" />
          <circle cx="10.5" cy="13" r="2.2" strokeWidth="1" fill="currentColor" fillOpacity="0.15" />
          <circle cx="9.6" cy="12" r="0.7" fill="currentColor" stroke="none" />
          {/* Starlight flash burst */}
          <path d="M20.5 1.5l.6 1.6 1.6.6-1.6.6-.6 1.6-.6-1.6-1.6-.6 1.6-.6z" fill="currentColor" stroke="none" />
        </svg>
      )

    case 'shopping':
      // Boutique shopping parcels with satin curved handles, star tag, and starlight accents
      return (
        <svg {...props}>
          {/* Secondary bag in background */}
          <path d="M9 7l1.5-3h4L16 7" strokeWidth="1" strokeOpacity="0.55" />
          <rect x="8.5" y="7" width="12.5" height="13" rx="2" strokeWidth="1.1" strokeOpacity="0.55" strokeDasharray="3 2" />
          {/* Primary boutique bag */}
          <rect x="3" y="9" width="13" height="12" rx="2" strokeWidth="1.3" />
          {/* Curved handle */}
          <path d="M6.5 9V5.5a3 3 0 016 0V9" strokeWidth="1.3" />
          {/* Celestial star keepsake tag */}
          <path d="M12.5 9l2.2 3.2" strokeWidth="1" strokeOpacity="0.7" />
          <path d="M14.7 12.2l.5 1.2 1.2.5-1.2.5-.5 1.2-.5-1.2-1.2-.5 1.2-.5z" fill="currentColor" stroke="none" />
          {/* Subtle star medallion on bag */}
          <circle cx="9.5" cy="15" r="1.4" strokeWidth="0.9" fill="currentColor" fillOpacity="0.25" />
        </svg>
      )

    case 'dinner':
      // Fine-dining polished cloche platter with steam wisps and romantic starlight candle glow
      return (
        <svg {...props}>
          {/* Pedestal platter base */}
          <path d="M2.5 18h19" strokeWidth="1.4" />
          <path d="M4 18c0 1.2 1.5 2 8 2s8-.8 8-2" strokeWidth="1.2" strokeOpacity="0.75" />
          {/* Cloche dome */}
          <path d="M4.5 17c0-5 3.4-9 7.5-9s7.5 4 7.5 9" strokeWidth="1.3" />
          {/* Ornate cloche ring handle */}
          <circle cx="12" cy="5.8" r="1.8" strokeWidth="1.2" fill="currentColor" fillOpacity="0.2" />
          <path d="M12 7.6v.5" strokeWidth="1.2" />
          {/* Floating starlight effervescence */}
          <path d="M8.5 4c-.5-1 .5-1.8 0-2.5M15.5 4c.5-1-.5-1.8 0-2.5" strokeWidth="1" strokeOpacity="0.6" />
          <path d="M12 11.5l.4 1 1 .4-1 .4-.4 1-.4-1-1-.4 1-.4z" fill="currentColor" stroke="none" />
        </svg>
      )

    case 'airbnb':
      // A-frame cozy forest cabin beneath crescent moon and pine starlight
      return (
        <svg {...props}>
          {/* A-frame roof structure */}
          <path d="M12 3L2 20h20L12 3z" strokeWidth="1.3" />
          {/* Central beam */}
          <path d="M12 3v17" strokeWidth="1" strokeOpacity="0.4" />
          {/* Warm glowing attic window */}
          <polygon points="12,8.5 14.5,12 9.5,12" strokeWidth="1.1" fill="currentColor" fillOpacity="0.25" />
          {/* Front doorway */}
          <path d="M10 20v-4.5h4V20" strokeWidth="1.2" />
          {/* Crescent moon over cabin */}
          <path d="M19.5 4a3.5 3.5 0 01-3.2 3.4 3.5 3.5 0 003.8-3.3c-.2 0-.4 0-.6-.1z" fill="currentColor" stroke="none" />
          {/* Distant stars */}
          <circle cx="5.5" cy="6" r="0.75" fill="currentColor" stroke="none" />
          <circle cx="7" cy="8.5" r="0.5" fill="currentColor" stroke="none" />
        </svg>
      )

    case 'cook':
      // Sizzling culinary skillet with swirling steam wisps forming a heart curve
      return (
        <svg {...props}>
          {/* Skillet rim and basin */}
          <ellipse cx="10" cy="13" rx="6.5" ry="4.5" strokeWidth="1.3" />
          <ellipse cx="10" cy="13" rx="4.8" ry="3" strokeWidth="1" strokeOpacity="0.5" fill="currentColor" fillOpacity="0.1" />
          {/* Cast iron handle with hanging hole */}
          <path d="M15 15.5l5.2 4" strokeWidth="1.5" />
          <circle cx="20.5" cy="19.8" r="0.8" fill="currentColor" stroke="none" />
          {/* Steam wisps in affectionate heart cadence */}
          <path d="M7 8c-.6-1.5 1-2.5 1.5-3.5M10 7c0-2 2-2.5 2-4" strokeWidth="1.2" strokeOpacity="0.7" />
          <path d="M13 8c.6-1.5-.5-2.5 0-3.5" strokeWidth="1.1" strokeOpacity="0.6" />
          {/* Sizzle spice sparkle */}
          <path d="M15.5 4l.5 1 1 .5-1 .5-.5 1-.5-1-1-.5 1-.5z" fill="currentColor" stroke="none" />
        </svg>
      )

    default:
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="3.5" strokeWidth="1.3" />
          <path d="M12 2v3M12 19v3M2 12h3M19 12h3" strokeWidth="1.3" />
        </svg>
      )
  }
}

