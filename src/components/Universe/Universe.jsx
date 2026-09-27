import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import StarField from '../UI/StarField'

// Spatial celestial nodes with curated coordinates for desktop and mobile aspect ratios.
// Coordinates are carefully spaced to prevent edge collisions and overlapping labels.
const NODES = [
  { id: 'beginning', title: 'The Beginning', x: 18, y: 18, mx: 28, my: 7, icon: 'spark' },
  { id: 'museum', title: 'Memory Museum', x: 48, y: 14, mx: 72, my: 16, icon: 'frame' },
  { id: 'future', title: 'The Future', x: 78, y: 20, mx: 32, my: 26, icon: 'path' },
  { id: 'unsaid', title: "Things I Don't Say Enough", x: 84, y: 44, mx: 74, my: 36, icon: 'note' },
  { id: 'letter', title: 'A Letter For You', x: 28, y: 40, mx: 26, my: 46, icon: 'envelope' },
  { id: 'openwhen', title: 'Open When…', x: 64, y: 52, mx: 72, my: 56, icon: 'seal' },
  { id: 'quiz', title: 'How Well Do You Know Us', x: 16, y: 64, mx: 26, my: 66, icon: 'question' },
  { id: 'soundtrack', title: 'Our Soundtrack', x: 46, y: 72, mx: 72, my: 76, icon: 'wave' },
  { id: 'surprise', title: 'Surprise Me', x: 82, y: 76, mx: 28, my: 86, icon: 'star4' },
  { id: 'final', title: 'One Last Thing', x: 38, y: 90, mx: 58, my: 95, icon: 'dot' },
]

// Constellation graphs: intentionally arranged with zero line-crossings.
const DESKTOP_CONNECTIONS = [
  ['beginning', 'museum'],
  ['museum', 'future'],
  ['future', 'unsaid'],
  ['beginning', 'letter'],
  ['letter', 'openwhen'],
  ['openwhen', 'unsaid'],
  ['letter', 'quiz'],
  ['quiz', 'soundtrack'],
  ['openwhen', 'surprise'],
  ['soundtrack', 'surprise'],
  ['soundtrack', 'final'],
]

const MOBILE_CONNECTIONS = [
  ['beginning', 'museum'],
  ['museum', 'future'],
  ['future', 'unsaid'],
  ['unsaid', 'letter'],
  ['letter', 'openwhen'],
  ['openwhen', 'quiz'],
  ['quiz', 'soundtrack'],
  ['soundtrack', 'surprise'],
  ['surprise', 'final'],
]

// Fast O(1) adjacency lookup
const DESKTOP_ADJACENCY = {}
const MOBILE_ADJACENCY = {}
NODES.forEach((node) => {
  DESKTOP_ADJACENCY[node.id] = new Set()
  MOBILE_ADJACENCY[node.id] = new Set()
})
DESKTOP_CONNECTIONS.forEach(([a, b]) => {
  DESKTOP_ADJACENCY[a]?.add(b)
  DESKTOP_ADJACENCY[b]?.add(a)
})
MOBILE_CONNECTIONS.forEach(([a, b]) => {
  MOBILE_ADJACENCY[a]?.add(b)
  MOBILE_ADJACENCY[b]?.add(a)
})

export default function Universe({ navigate }) {
  const reduced = useReducedMotion()
  const [activeId, setActiveId] = useState(null)
  const [hoveredId, setHoveredId] = useState(null)
  const [focusedId, setFocusedId] = useState(null)
  const [seekingId, setSeekingId] = useState(null)
  const timerRef = useRef(null)

  const fieldRef = useRef(null)
  const nodeRefs = useRef({})
  const [fieldSize, setFieldSize] = useState({ width: 0, height: 0 })
  const [nodePositions, setNodePositions] = useState({})
  const [isMobile, setIsMobile] = useState(false)

  // Measure actual node celestial centers relative to container
  const measureNodes = () => {
    if (!fieldRef.current) return
    const fieldRect = fieldRef.current.getBoundingClientRect()
    if (fieldRect.width === 0 || fieldRect.height === 0) return

    const mobile = window.innerWidth <= 640
    setIsMobile(mobile)
    setFieldSize({ width: fieldRect.width, height: fieldRect.height })

    const positions = {}
    NODES.forEach((node) => {
      const el = nodeRefs.current[node.id]
      if (el) {
        const coreEl = el.querySelector('.universe__node-core') || el
        const rect = coreEl.getBoundingClientRect()
        positions[node.id] = {
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

    const t = setTimeout(measureNodes, 80)

    return () => {
      clearTimeout(t)
      window.removeEventListener('resize', measureNodes)
      if (ro) ro.disconnect()
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [])

  function selectNode(id) {
    if (activeId || seekingId) return

    if (reduced) {
      navigate(id)
      return
    }

    if (id === 'surprise') {
      // Cosmic seeking anticipation: traverse constellation before revealing surprise
      setSeekingId('beginning')
      setTimeout(() => setSeekingId('unsaid'), 220)
      setTimeout(() => setSeekingId('letter'), 440)
      setTimeout(() => {
        setSeekingId(null)
        setActiveId('surprise')
        setTimeout(() => navigate('surprise'), 460)
      }, 660)
      return
    }

    setActiveId(id)
    timerRef.current = setTimeout(() => navigate(id), 460)
  }

  const interactedId = activeId || seekingId || hoveredId || focusedId
  const activeConnections = isMobile ? MOBILE_CONNECTIONS : DESKTOP_CONNECTIONS
  const activeAdjacency = isMobile ? MOBILE_ADJACENCY : DESKTOP_ADJACENCY
  const hasMeasured = fieldSize.width > 0 && Object.keys(nodePositions).length === NODES.length

  return (
    <div className={`screen universe ${interactedId ? 'has-active' : ''}`}>
      <StarField density={0.7} respondToPointer={!reduced} />

      <header className="screen__inner universe__intro fade-in">
        <p className="eyebrow universe__eyebrow">Our Little Universe</p>
        <h1 className="heading-l universe__heading">Wander wherever you like.</h1>
        <p className="body-text body-text--soft universe__desc">
          Every star holds something. There's no right order.
        </p>
      </header>

      <div
        ref={fieldRef}
        className={`universe__field ${activeId ? 'is-traveling' : ''} ${interactedId ? 'has-interaction' : ''}`}
        role="navigation"
        aria-label="Sections of the universe"
      >
        {/* Constellation thread system dynamically rendered to exact node geometry */}
        <svg
          className="universe__lines"
          viewBox={hasMeasured ? `0 0 ${fieldSize.width} ${fieldSize.height}` : '0 0 100 100'}
          preserveAspectRatio={hasMeasured ? 'none' : 'none'}
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="constellationGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(242, 200, 131, 0.45)" />
              <stop offset="50%" stopColor="rgba(216, 208, 246, 0.35)" />
              <stop offset="100%" stopColor="rgba(226, 168, 178, 0.4)" />
            </linearGradient>
            <filter id="threadGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="1.5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {activeConnections.map(([aId, bId], i) => {
            const isLit = activeId && (aId === activeId || bId === activeId)
            const isRelated = interactedId && (aId === interactedId || bId === interactedId)
            const isDimmed = interactedId && !isRelated

            let lineClass = 'universe__line'
            if (isLit) lineClass += ' universe__line--lit is-connected'
            else if (isRelated) lineClass += ' universe__line--active is-connected'
            else if (isDimmed) lineClass += ' universe__line--dimmed'

            let x1, y1, x2, y2
            if (hasMeasured && nodePositions[aId] && nodePositions[bId]) {
              x1 = nodePositions[aId].x
              y1 = nodePositions[aId].y
              x2 = nodePositions[bId].x
              y2 = nodePositions[bId].y
            } else {
              const nodeA = NODES.find((n) => n.id === aId)
              const nodeB = NODES.find((n) => n.id === bId)
              x1 = isMobile ? nodeA.mx : nodeA.x
              y1 = isMobile ? nodeA.my : nodeA.y
              x2 = isMobile ? nodeB.mx : nodeB.x
              y2 = isMobile ? nodeB.my : nodeB.y
            }

            return (
              <line
                key={`line-${aId}-${bId}-${i}`}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                className={lineClass}
              />
            )
          })}
        </svg>

        {/* Celestial Star Nodes */}
        {NODES.map((node, i) => {
          const isActive = activeId === node.id
          const isHovered = hoveredId === node.id
          const isFocused = focusedId === node.id
          const isConnected = Boolean(
            interactedId && interactedId !== node.id && activeAdjacency[interactedId]?.has(node.id)
          )
          const isDimmed = Boolean(
            interactedId && interactedId !== node.id && !activeAdjacency[interactedId]?.has(node.id)
          )

          let nodeClasses = `universe__node universe__node--${node.id}`
          if (!reduced) nodeClasses += ' universe__node--float'
          if (isActive) nodeClasses += ' is-active'
          if (seekingId === node.id) nodeClasses += ' is-seeking is-active'
          if (isHovered) nodeClasses += ' is-hovered'
          if (isFocused) nodeClasses += ' is-focused'
          if (isConnected) nodeClasses += ' is-connected'
          if (isDimmed && seekingId !== node.id) nodeClasses += ' is-dimmed'

          return (
            <button
              key={node.id}
              ref={(el) => (nodeRefs.current[node.id] = el)}
              className={nodeClasses}
              style={{
                '--x': `${node.x}%`,
                '--y': `${node.y}%`,
                '--mx': `${node.mx}%`,
                '--my': `${node.my}%`,
                '--enter-delay': `${(i % 6) * 65}ms`,
                '--float-delay': `${(i % 5) * 0.7}s`,
              }}
              onClick={() => selectNode(node.id)}
              onPointerEnter={(e) => {
                if (e.pointerType !== 'touch') setHoveredId(node.id)
              }}
              onPointerLeave={() => setHoveredId(null)}
              onFocus={() => setFocusedId(node.id)}
              onBlur={() => setFocusedId(null)}
              disabled={!!activeId}
              aria-label={node.title}
            >
              <span className="universe__node-halo" aria-hidden="true" />
              <span className="universe__node-orbit" aria-hidden="true" />
              <span className="universe__node-core" aria-hidden="true">
                <NodeIcon name={node.icon} />
              </span>
              <span className="universe__node-label">{node.title}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}

function NodeIcon({ name }) {
  const props = {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    'aria-hidden': true,
    fill: 'none',
  }

  switch (name) {
    case 'spark':
      return (
        <svg {...props}>
          <path
            d="M10 2v5M10 13v5M2 10h5M13 10h5M4.5 4.5l3.2 3.2M12.3 12.3l3.2 3.2M15.5 4.5l-3.2 3.2M7.7 12.3l-3.2-3.2"
            stroke="currentColor"
            strokeWidth="1.3"
            strokeLinecap="round"
          />
        </svg>
      )

    case 'frame':
      return (
        <svg {...props}>
          <rect
            x="3"
            y="4"
            width="14"
            height="12"
            rx="1.5"
            stroke="currentColor"
            strokeWidth="1.3"
          />
          <circle
            cx="7.5"
            cy="9"
            r="1.3"
            stroke="currentColor"
            strokeWidth="1.1"
          />
          <path
            d="M3 14l4-3.5 3 2.5 3.5-4 3.5 4.5"
            stroke="currentColor"
            strokeWidth="1.1"
          />
        </svg>
      )

    case 'note':
      return (
        <svg {...props}>
          <path
            d="M4 3h9l3 3v11H4z"
            stroke="currentColor"
            strokeWidth="1.3"
            strokeLinejoin="round"
          />
          <path
            d="M7 9h6M7 12.5h4"
            stroke="currentColor"
            strokeWidth="1.1"
            strokeLinecap="round"
          />
        </svg>
      )

    case 'envelope':
      return (
        <svg {...props}>
          <rect
            x="2.5"
            y="5"
            width="15"
            height="10.5"
            rx="1.3"
            stroke="currentColor"
            strokeWidth="1.3"
          />
          <path
            d="M3 6l7 5.5L17 6"
            stroke="currentColor"
            strokeWidth="1.3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )

    case 'seal':
      return (
        <svg {...props}>
          <circle
            cx="10"
            cy="10"
            r="6.5"
            stroke="currentColor"
            strokeWidth="1.3"
          />
          <path
            d="M10 6.5v3.8l2.6 1.6"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </svg>
      )

    case 'question':
      return (
        <svg {...props}>
          <circle
            cx="10"
            cy="10"
            r="7"
            stroke="currentColor"
            strokeWidth="1.3"
          />
          <path
            d="M7.8 8a2.2 2.2 0 1 1 3.4 1.8c-.9.6-1.2 1-1.2 1.9"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          <circle cx="10" cy="14.2" r="0.6" fill="currentColor" />
        </svg>
      )

    case 'wave':
      return (
        <svg {...props}>
          <path
            d="M2 10c1.5-3 2.5-3 4 0s2.5 3 4 0 2.5-3 4 0 2.5 3 4 0"
            stroke="currentColor"
            strokeWidth="1.3"
            strokeLinecap="round"
          />
        </svg>
      )

    case 'star4':
      return (
        <svg {...props}>
          <path
            d="M10 2l1.6 5.4L17 9l-5.4 1.6L10 16l-1.6-5.4L3 9l5.4-1.6z"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinejoin="round"
          />
        </svg>
      )

    case 'path':
      return (
        <svg {...props}>
          <circle
            cx="4"
            cy="15"
            r="1.6"
            stroke="currentColor"
            strokeWidth="1.2"
          />
          <circle
            cx="16"
            cy="5"
            r="1.6"
            stroke="currentColor"
            strokeWidth="1.2"
          />
          <path
            d="M5.4 13.8C9 9 11 7.5 14.6 6.2"
            stroke="currentColor"
            strokeWidth="1.1"
            strokeDasharray="1 2.6"
            strokeLinecap="round"
          />
        </svg>
      )

    default:
      return (
        <svg {...props}>
          <circle cx="10" cy="10" r="2.4" fill="currentColor" />
        </svg>
      )
  }
}