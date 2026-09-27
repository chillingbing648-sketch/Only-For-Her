import { useEffect, useRef, useState, useCallback } from 'react'
import StarField from '../UI/StarField'
import { giftData } from '../../data/giftData'
import { useReducedMotion } from '../../hooks/useReducedMotion'

/* ── Initial entrance stage timing ────────────────────────────────── */
const STAGE_DELAYS_MS = [300, 1000, 1800, 2600, 3200]

export default function Opening({ onEnter }) {
  const reduced = useReducedMotion()
  const [stage, setStage] = useState(reduced ? STAGE_DELAYS_MS.length : 0)
  const [convergencePhase, setConvergencePhase] = useState('idle') // 'idle' | 'waking-you' | 'waking-me' | 'traveling' | 'converged' | 'portal'
  const [hoveredStar, setHoveredStar] = useState(null) // 'you' | 'me' | null

  const containerRef = useRef(null)
  const pointerRef = useRef({ x: 0, y: 0 })
  const rafRef = useRef(null)
  const timersRef = useRef([])

  /* Safely record a timeout for automatic cleanup on unmount */
  const addTimer = useCallback((fn, delay) => {
    const id = setTimeout(fn, delay)
    timersRef.current.push(id)
    return id
  }, [])

  /* ── Stage reveals on initial mount ─────────────────────────────── */
  useEffect(() => {
    if (reduced) return
    STAGE_DELAYS_MS.forEach((delay, i) => {
      addTimer(() => setStage(i + 1), delay)
    })
    return () => {
      timersRef.current.forEach(clearTimeout)
      timersRef.current = []
    }
  }, [reduced, addTimer])

  /* ── Parallax via CSS custom properties (no React state updates) ── */
  useEffect(() => {
    if (reduced) return
    const el = containerRef.current
    if (!el) return
    let destroyed = false

    function onPointerMove(e) {
      const w = window.innerWidth
      const h = window.innerHeight
      pointerRef.current.x = ((e.clientX / w) - 0.5) * 2
      pointerRef.current.y = ((e.clientY / h) - 0.5) * 2
    }

    function tick() {
      if (destroyed) return
      const px = pointerRef.current.x
      const py = pointerRef.current.y
      el.style.setProperty('--px', px.toFixed(3))
      el.style.setProperty('--py', py.toFixed(3))
      rafRef.current = requestAnimationFrame(tick)
    }

    window.addEventListener('pointermove', onPointerMove, { passive: true })
    rafRef.current = requestAnimationFrame(tick)

    return () => {
      destroyed = true
      window.removeEventListener('pointermove', onPointerMove)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [reduced])

  /* ── Pure background shooting star (cosmic wonder) ──────────────── */
  useEffect(() => {
    if (reduced) return
    const el = containerRef.current
    if (!el) return

    let shootTimer = null

    function spawnShootingStar() {
      if (!containerRef.current) return
      const star = document.createElement('div')
      star.className = 'opening__shooting-star'
      star.setAttribute('aria-hidden', 'true')
      const startX = Math.random() * 50 + 25
      const startY = Math.random() * 25 + 5
      star.style.left = `${startX}%`
      star.style.top = `${startY}%`
      el.appendChild(star)
      setTimeout(() => {
        if (star.parentNode) star.parentNode.removeChild(star)
      }, 1500)
    }

    function scheduleNext() {
      shootTimer = setTimeout(() => {
        spawnShootingStar()
        scheduleNext()
      }, Math.random() * 16000 + 14000)
    }

    shootTimer = setTimeout(() => {
      spawnShootingStar()
      scheduleNext()
    }, 7000)

    return () => clearTimeout(shootTimer)
  }, [reduced])

  /* ── CORE EXPERIENCE: You + Me → Us convergence sequence ────────── */
  const triggerConvergence = useCallback(() => {
    if (convergencePhase !== 'idle') return

    if (reduced) {
      setConvergencePhase('converged')
      addTimer(() => onEnter(), 800)
      return
    }

    // Step 1: You reacts first — warm starlight aura flares
    setConvergencePhase('waking-you')

    // Step 2: Me responds — lavender starlight aura awakens
    addTimer(() => {
      setConvergencePhase('waking-me')
    }, 320)

    // Step 3: Traveling — both stars glide smoothly across the sky toward center
    addTimer(() => {
      setConvergencePhase('traveling')
    }, 650)

    // Step 4: Converged — Contact! They physically meet, merge, and Us star is formed
    addTimer(() => {
      setConvergencePhase('converged')
    }, 2150)

    // Step 5: Portal — Warm starlight expansion and departure
    addTimer(() => {
      setConvergencePhase('portal')
    }, 3100)

    // Step 6: Seamless transition into Universe
    addTimer(() => {
      onEnter()
    }, 3900)
  }, [convergencePhase, onEnter, reduced, addTimer])

  const isWakingYou = convergencePhase === 'waking-you'
  const isWakingMe = convergencePhase === 'waking-me'
  const isWakingAny = isWakingYou || isWakingMe
  const isTraveling = convergencePhase === 'traveling'
  const isConverged = convergencePhase === 'converged' || convergencePhase === 'portal'
  const isPortal = convergencePhase === 'portal'
  const isEngaged = convergencePhase !== 'idle'

  return (
    <div
      ref={containerRef}
      className={`opening screen screen--center opening--phase-${convergencePhase} ${isPortal ? 'opening--leaving' : ''}`}
      style={{ '--px': '0', '--py': '0' }}
    >
      <StarField density={1.1} respondToPointer={!reduced} />

      {/* Decorative horizon light */}
      <div className="opening__horizon" aria-hidden="true" />

      {/* Ambient nebula atmosphere */}
      <div
        className={`opening__nebula ${stage >= 1 ? 'is-visible' : ''} ${isPortal ? 'opening__nebula--expand' : ''}`}
        aria-hidden="true"
      />

      {/* ── "Me" Star (Lower-Left Celestial Station) ───────────────────
          Pure celestial star with lavender starlight aura.
          Zero trailing/tracing lines.
      ─────────────────────────────────────────────────────────────── */}
      <button
        type="button"
        className={`opening__star opening__star--me ${stage >= 2 ? 'is-visible' : ''} ${isWakingMe ? 'is-waking' : ''} ${isTraveling ? 'is-traveling' : ''} ${isConverged ? 'is-merged' : ''}`}
        onClick={triggerConvergence}
        onPointerEnter={() => setHoveredStar('me')}
        onPointerLeave={() => setHoveredStar(null)}
        disabled={isEngaged}
        aria-label="Me star. Click to converge with You."
      >
        <span className="opening__star-orbit" aria-hidden="true" />
        <span className="opening__star-halo opening__star-halo--me" aria-hidden="true" />
        <span className="opening__star-glow opening__star-glow--me" aria-hidden="true">
          <span className="opening__star-trail opening__star-trail--me" aria-hidden="true" />
        </span>
        <span className="opening__star-label opening__star-label--me">Me</span>
      </button>

      {/* ── "You" Star (Upper-Right Celestial Station) ──────────────────
          Pure celestial star with warm golden starlight aura.
          Subtle tapered directional motion trail.
      ─────────────────────────────────────────────────────────────── */}
      <button
        type="button"
        className={`opening__star opening__star--you ${stage >= 2 ? 'is-visible' : ''} ${isWakingAny ? 'is-waking' : ''} ${isTraveling ? 'is-traveling' : ''} ${isConverged ? 'is-merged' : ''}`}
        onClick={triggerConvergence}
        onPointerEnter={() => setHoveredStar('you')}
        onPointerLeave={() => setHoveredStar(null)}
        disabled={isEngaged}
        aria-label={`${giftData.opening.starLabel} star. Click to converge with Me.`}
      >
        <span className="opening__star-orbit" aria-hidden="true" />
        <span className="opening__star-halo opening__star-halo--you" aria-hidden="true" />
        <span className="opening__star-glow opening__star-glow--you" aria-hidden="true">
          <span className="opening__star-trail opening__star-trail--you" aria-hidden="true" />
        </span>
        <span className="opening__star-label opening__star-label--you">{giftData.opening.starLabel}</span>
      </button>

      {/* ── "Us" Star (Convergence Meeting Point at 50%, 22%) ───────────
          Pure celestial star that forms when You and Me meet at the center.
          Zero tracings or network lines.
      ─────────────────────────────────────────────────────────────── */}
      <div
        className={`opening__us-star ${isConverged ? 'is-visible' : ''}`}
        aria-hidden={!isConverged}
      >
        {/* Soft expanding starlight ripples on meeting */}
        <span className="opening__us-ripple opening__us-ripple--1" aria-hidden="true" />
        <span className="opening__us-ripple opening__us-ripple--2" aria-hidden="true" />
        <span className="opening__us-halo" aria-hidden="true" />
        <span className="opening__us-glow" aria-hidden="true" />

        {/* Minute heart shimmer glow elements (very subtle celestial sparks) */}
        <div className="opening__minute-heart-shimmer" aria-hidden="true">
          <span className="opening__heart-spark opening__heart-spark--1" />
          <span className="opening__heart-spark opening__heart-spark--2" />
          <span className="opening__heart-spark opening__heart-spark--3" />
          <span className="opening__heart-spark opening__heart-spark--4" />
          <span className="opening__heart-spark opening__heart-spark--5" />
          <span className="opening__heart-spark opening__heart-spark--6" />
        </div>

        <span className="opening__us-label">✦ Us ✦</span>
      </div>

      {/* Soft convergence bloom flash on impact */}
      {isConverged && (
        <div className="opening__convergence-bloom" aria-hidden="true" />
      )}

      {/* ── Main Typography Copy ─────────────────────────────────────── */}
      <div className={`screen__inner opening__copy ${isEngaged ? 'opening__copy--softened' : ''}`}>
        {/* Eyebrow */}
        <span className={`opening__eyebrow opening__line ${stage >= 1 ? 'is-visible' : ''}`}>
          ✦
        </span>

        {/* Title */}
        <p className={`heading-xl opening__line opening__title ${stage >= 2 ? 'is-visible' : ''}`}>
          <span className="opening__title-line1">I made you a</span>{' '}
          <span className="opening__title-line2">little universe.</span>
        </p>

        {/* Subtitle */}
        <p className={`body-text opening__line opening__subline ${stage >= 3 ? 'is-visible' : ''}`}>
          {giftData.opening.line2}
          <br />
          {giftData.opening.line3}
        </p>

        {/* CTA — "Enter our universe →" */}
        <button
          className={`btn btn--primary opening__enter ${stage >= 4 ? 'is-visible' : ''} ${isEngaged ? 'opening__enter--engaged' : ''}`}
          onClick={triggerConvergence}
          disabled={isEngaged}
        >
          {giftData.opening.enterLabel} <span aria-hidden="true">→</span>
        </button>

        {/* Explore cue */}
        <div className={`opening__cue ${stage >= 5 ? 'is-visible' : ''}`} aria-hidden="true">
          <span className="opening__cue-dot" />
        </div>
      </div>
    </div>
  )
}
