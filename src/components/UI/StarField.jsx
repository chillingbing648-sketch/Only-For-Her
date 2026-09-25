import { memo, useEffect, useRef } from 'react'
import { useReducedMotion } from '../../hooks/useReducedMotion'

// Detect lower-powered hardware / mobile safely
function checkLowPower() {
  if (typeof window === 'undefined') return false
  const nav = typeof navigator !== 'undefined' ? navigator : null
  const lowCores = Boolean(nav?.hardwareConcurrency && nav.hardwareConcurrency <= 4)
  const lowMem = Boolean(nav?.deviceMemory && nav.deviceMemory <= 4)
  const touchOrMobile = Boolean(
    window.matchMedia?.('(pointer: coarse)').matches ||
    window.matchMedia?.('(max-width: 640px)').matches
  )
  return lowCores || lowMem || touchOrMobile
}

// Particle types
const TYPE_DUST = 0       // Fine micro-particulate cosmic dust
const TYPE_STAR = 1       // Small twinkling normal stars
const TYPE_CROSS = 2      // Medium 4-point cross-twinkle stars (Ref 2 & 3)
const TYPE_BURST = 3      // Occasional large luminous starbursts (Ref 3)
const TYPE_HEART = 4      // Sparse glowing outlined celestial hearts (Ref 2)

const STAR_PALETTE = ['#ffffff', '#ffeef2', '#f3bfca', '#ffeed8', '#f8d2db']

function StarField({ density = 1, respondToPointer = true }) {
  const canvasRef = useRef(null)
  const reduced = useReducedMotion()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    let raf = null
    let width = 0
    let height = 0
    let destroyed = false
    let isVisible = true

    const isLowPower = checkLowPower()
    const baseDpr = typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1
    const dpr = isLowPower
      ? Math.min(Math.max(1, baseDpr), 1.25)
      : Math.min(Math.max(1, baseDpr), 1.5)

    let particles = []
    let pointer = { x: 0.5, y: 0.5 }
    let targetPointer = { x: 0.5, y: 0.5 }

    let hasPendingPointer = false
    let pendingClientX = 0
    let pendingClientY = 0

    // Measure viewport directly to eliminate any container-clipping or scroll-offset issues
    function updateRect() {
      if (destroyed) return
      const w = window.innerWidth || document.documentElement?.clientWidth || 800
      const h = window.innerHeight || document.documentElement?.clientHeight || 600
      width = w
      height = h
    }

    function buildParticles() {
      const area = width * height
      const powerScale = isLowPower ? 0.48 : 1
      const rawCount = Math.round((area / 5000) * density * powerScale)
      const minCount = isLowPower ? 75 : 140
      const maxCount = isLowPower ? 140 : 330
      const totalCount = Math.min(maxCount, Math.max(minCount, rawCount))

      const generated = []

      // Composition balance inspired by References 2 + 3:
      // ~52% Fine cosmic dust
      // ~28% Small normal stars
      // ~13% Medium 4-point cross twinkles
      // ~2% Large luminous starbursts
      // ~5% Glowing outlined celestial hearts
      const burstCount = Math.max(isLowPower ? 2 : 4, Math.min(isLowPower ? 3 : 7, Math.round(totalCount * 0.022)))
      const heartCount = Math.max(isLowPower ? 4 : 8, Math.min(isLowPower ? 6 : 14, Math.round(totalCount * 0.045)))
      const crossCount = Math.max(isLowPower ? 10 : 20, Math.round(totalCount * 0.13))
      const starCount = Math.round(totalCount * 0.28)
      const dustCount = Math.max(30, totalCount - burstCount - heartCount - crossCount - starCount)

      // 1. Fine cosmic dust motes (micro-particulates)
      for (let i = 0; i < dustCount; i++) {
        // Organic bias towards diagonal cosmic stream
        const isNebulaCluster = Math.random() < 0.45
        let x = Math.random()
        let y = Math.random()

        if (isNebulaCluster) {
          const streamY = x * 0.82 + 0.1 + Math.sin(x * Math.PI * 2.2) * 0.08
          const offset = (Math.random() + Math.random() + Math.random() - 1.5) * 0.26
          y = Math.max(0, Math.min(1, streamY + offset))
        }

        generated.push({
          type: TYPE_DUST,
          x,
          y,
          r: Math.random() * 0.5 + 0.35, // 0.35px - 0.85px micro dust
          baseAlpha: Math.random() * 0.35 + 0.12,
          twinkleAmp: Math.random() * 0.12 + 0.05,
          twinkleSpeed: Math.random() * 0.4 + 0.15,
          twinkleOffset: Math.random() * Math.PI * 2,
          parallax: Math.random() * 0.08 + 0.02,
          colorIdx: Math.random() < 0.45 ? 1 : (Math.random() < 0.75 ? 2 : 0),
          driftX: (Math.random() - 0.5) * 0.000018,
          driftY: (Math.random() - 0.5) * 0.000018,
        })
      }

      // 2. Small normal stars
      for (let i = 0; i < starCount; i++) {
        generated.push({
          type: TYPE_STAR,
          x: Math.random(),
          y: Math.random(),
          r: Math.random() * 0.6 + 0.9, // 0.9px - 1.5px
          baseAlpha: Math.random() * 0.45 + 0.42,
          twinkleAmp: Math.random() * 0.22 + 0.12,
          twinkleSpeed: Math.random() * 0.8 + 0.3,
          twinkleOffset: Math.random() * Math.PI * 2,
          parallax: Math.random() * 0.18 + 0.08,
          colorIdx: Math.random() < 0.5 ? 0 : (Math.random() < 0.75 ? 1 : 3),
          driftX: (Math.random() - 0.5) * 0.00003,
          driftY: (Math.random() - 0.5) * 0.00003,
        })
      }

      // 3. Medium 4-point cross twinkles (Ref 2 & 3)
      for (let i = 0; i < crossCount; i++) {
        generated.push({
          type: TYPE_CROSS,
          x: Math.random(),
          y: Math.random(),
          r: Math.random() * 0.5 + 1.2, // 1.2px - 1.7px core
          flare: Math.random() * 7 + 7, // 7px - 14px 4-point ray
          baseAlpha: Math.random() * 0.3 + 0.65,
          twinkleAmp: Math.random() * 0.25 + 0.18,
          twinkleSpeed: Math.random() * 0.7 + 0.35,
          twinkleOffset: Math.random() * Math.PI * 2,
          parallax: Math.random() * 0.25 + 0.18,
          colorIdx: Math.random() < 0.55 ? 0 : (Math.random() < 0.85 ? 1 : 2),
          driftX: (Math.random() - 0.5) * 0.000035,
          driftY: (Math.random() - 0.5) * 0.000035,
        })
      }

      // 4. Large luminous starbursts with diffraction spikes (Ref 3)
      for (let i = 0; i < burstCount; i++) {
        generated.push({
          type: TYPE_BURST,
          x: Math.random() * 0.88 + 0.06,
          y: Math.random() * 0.88 + 0.06,
          r: Math.random() * 0.8 + 2.2, // 2.2px - 3.0px core
          spikeH: Math.random() * 22 + 28, // 28px - 50px horizontal spike
          spikeV: Math.random() * 28 + 34, // 34px - 62px vertical spike
          diagSpike: Math.random() * 8 + 12, // 12px - 20px 45-deg rays
          baseAlpha: Math.random() * 0.2 + 0.8,
          twinkleAmp: Math.random() * 0.15 + 0.1,
          twinkleSpeed: Math.random() * 0.35 + 0.18,
          twinkleOffset: Math.random() * Math.PI * 2,
          parallax: Math.random() * 0.3 + 0.32,
          colorIdx: Math.random() < 0.6 ? 1 : 3,
          driftX: (Math.random() - 0.5) * 0.00004,
          driftY: (Math.random() - 0.5) * 0.00004,
        })
      }

      // 5. Glowing outlined celestial hearts (Ref 2)
      for (let i = 0; i < heartCount; i++) {
        generated.push({
          type: TYPE_HEART,
          x: Math.random() * 0.88 + 0.06,
          y: Math.random() * 0.88 + 0.06,
          size: Math.random() * 7 + (i % 2 === 0 ? 8 : 14), // 8px - 21px
          rotation: (Math.random() - 0.5) * 0.52, // Subtle celestial tilt
          baseAlpha: Math.random() * 0.35 + 0.5,
          twinkleAmp: Math.random() * 0.2 + 0.12,
          twinkleSpeed: Math.random() * 0.45 + 0.2,
          twinkleOffset: Math.random() * Math.PI * 2,
          parallax: Math.random() * 0.2 + 0.14,
          driftX: (Math.random() - 0.5) * 0.00003,
          driftY: (Math.random() - 0.5) * 0.00003,
        })
      }

      particles = generated
    }

    function resize() {
      if (destroyed) return
      updateRect()
      if (width <= 0 || height <= 0) return

      canvas.width = Math.round(width * dpr)
      canvas.height = Math.round(height * dpr)
      canvas.style.width = width + 'px'
      canvas.style.height = height + 'px'
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      buildParticles()

      if (reduced) {
        drawFrame(0)
      }
    }

    // Outlined celestial heart drawing helper (Ref 2)
    function drawHeart(x, y, size, rotation, alpha) {
      ctx.save()
      ctx.translate(x, y)
      ctx.rotate(rotation)

      const s = size / 16

      // Precise Bézier heart path centered vertically
      ctx.beginPath()
      ctx.moveTo(0, s * -3)
      ctx.bezierCurveTo(s * 5, s * -10, s * 13, s * -4, s * 13, s * 3)
      ctx.bezierCurveTo(s * 13, s * 9.5, s * 8, s * 14.5, 0, s * 19)
      ctx.bezierCurveTo(s * -8, s * 14.5, s * -13, s * 9.5, s * -13, s * 3)
      ctx.bezierCurveTo(s * -13, s * -4, s * -5, s * -10, 0, s * -3)
      ctx.closePath()

      // 1. Soft glowing outer halo
      ctx.globalAlpha = alpha * 0.4
      ctx.strokeStyle = '#f8a4b8'
      ctx.lineWidth = Math.max(1.8, s * 2.2)
      ctx.stroke()

      // 2. Crisp starlight inner outline
      ctx.globalAlpha = alpha * 0.88
      ctx.strokeStyle = '#fff0f3'
      ctx.lineWidth = Math.max(1.0, s * 1.05)
      ctx.stroke()

      // 3. Faint warm cleft illumination
      ctx.globalAlpha = alpha * 0.22
      ctx.fillStyle = '#ffdfe5'
      ctx.beginPath()
      ctx.arc(0, s * 3.5, s * 3.2, 0, Math.PI * 2)
      ctx.fill()

      ctx.restore()
    }

    // 4-point cross-twinkle drawing helper (Ref 2 & 3)
    function drawCross(cx, cy, flare, coreRadius, alpha, color) {
      ctx.save()
      ctx.fillStyle = color

      ctx.globalAlpha = alpha * 0.72
      const w = 0.95
      ctx.beginPath()
      ctx.moveTo(cx - flare, cy)
      ctx.lineTo(cx, cy - w)
      ctx.lineTo(cx + flare, cy)
      ctx.lineTo(cx, cy + w)
      ctx.closePath()

      ctx.moveTo(cx, cy - flare)
      ctx.lineTo(cx - w, cy)
      ctx.lineTo(cx, cy + flare)
      ctx.lineTo(cx + w, cy)
      ctx.closePath()
      ctx.fill()

      ctx.globalAlpha = alpha * 0.95
      ctx.beginPath()
      ctx.arc(cx, cy, coreRadius, 0, Math.PI * 2)
      ctx.fill()

      ctx.restore()
    }

    // Large luminous starburst drawing helper (Ref 3)
    function drawStarburst(cx, cy, spikeH, spikeV, coreRadius, diagSpike, alpha, color) {
      ctx.save()
      ctx.fillStyle = color

      // 1. Soft starlight ambient bloom
      ctx.globalAlpha = alpha * 0.2
      ctx.beginPath()
      ctx.arc(cx, cy, coreRadius * 4.8, 0, Math.PI * 2)
      ctx.fill()

      // 2. Horizontal diffraction spike
      ctx.globalAlpha = alpha * 0.84
      ctx.beginPath()
      ctx.moveTo(cx - spikeH, cy)
      ctx.quadraticCurveTo(cx, cy - 0.7, cx, cy - 1.2)
      ctx.quadraticCurveTo(cx, cy - 0.7, cx + spikeH, cy)
      ctx.quadraticCurveTo(cx, cy + 0.7, cx, cy + 1.2)
      ctx.quadraticCurveTo(cx, cy + 0.7, cx - spikeH, cy)
      ctx.fill()

      // 3. Vertical diffraction spike
      ctx.beginPath()
      ctx.moveTo(cx, cy - spikeV)
      ctx.quadraticCurveTo(cx - 0.7, cy, cx - 1.2, cy)
      ctx.quadraticCurveTo(cx - 0.7, cy, cx, cy + spikeV)
      ctx.quadraticCurveTo(cx + 0.7, cy, cx + 1.2, cy)
      ctx.quadraticCurveTo(cx + 0.7, cy, cx, cy - spikeV)
      ctx.fill()

      // 4. Secondary diagonal rays (45°)
      if (diagSpike > 0) {
        ctx.globalAlpha = alpha * 0.42
        const d = diagSpike * 0.7071
        ctx.strokeStyle = color
        ctx.lineWidth = 1.0
        ctx.beginPath()
        ctx.moveTo(cx - d, cy - d)
        ctx.lineTo(cx + d, cy + d)
        ctx.moveTo(cx + d, cy - d)
        ctx.lineTo(cx - d, cy + d)
        ctx.stroke()
      }

      // 5. Pure white central core
      ctx.globalAlpha = alpha
      ctx.fillStyle = '#ffffff'
      ctx.beginPath()
      ctx.arc(cx, cy, coreRadius, 0, Math.PI * 2)
      ctx.fill()

      ctx.restore()
    }

    function drawFrame(t) {
      if (destroyed || width <= 0 || height <= 0) return

      if (respondToPointer && !reduced) {
        if (hasPendingPointer && width > 0 && height > 0) {
          targetPointer.x = Math.max(0, Math.min(1, pendingClientX / width))
          targetPointer.y = Math.max(0, Math.min(1, pendingClientY / height))
          hasPendingPointer = false
        }
        pointer.x += (targetPointer.x - pointer.x) * 0.07
        pointer.y += (targetPointer.y - pointer.y) * 0.07
      }

      ctx.clearRect(0, 0, width, height)

      const px = (pointer.x - 0.5) * 2
      const py = (pointer.y - 0.5) * 2
      const len = particles.length

      // Pass 1: Cosmic dust & normal stars
      let activeColor = -1

      for (let i = 0; i < len; i++) {
        const p = particles[i]
        if (p.type !== TYPE_DUST && p.type !== TYPE_STAR) continue

        if (p.colorIdx !== activeColor) {
          activeColor = p.colorIdx
          ctx.fillStyle = STAR_PALETTE[activeColor]
        }

        if (!reduced) {
          p.x += p.driftX
          p.y += p.driftY
          if (p.x < 0) p.x += 1
          else if (p.x > 1) p.x -= 1
          if (p.y < 0) p.y += 1
          else if (p.y > 1) p.y -= 1
        }

        const twinkle = reduced
          ? p.baseAlpha
          : p.baseAlpha + Math.sin(t * 0.001 * p.twinkleSpeed + p.twinkleOffset) * p.twinkleAmp

        const offsetX = respondToPointer && !reduced ? px * p.parallax * 12 : 0
        const offsetY = respondToPointer && !reduced ? py * p.parallax * 12 : 0
        const alpha = Math.max(0, Math.min(1, twinkle))

        ctx.globalAlpha = alpha
        ctx.beginPath()
        ctx.arc(p.x * width + offsetX, p.y * height + offsetY, p.r, 0, Math.PI * 2)
        ctx.fill()
      }

      // Pass 2: Medium 4-point cross-twinkles (Ref 2 & 3)
      for (let i = 0; i < len; i++) {
        const p = particles[i]
        if (p.type !== TYPE_CROSS) continue

        if (!reduced) {
          p.x += p.driftX
          p.y += p.driftY
          if (p.x < 0) p.x += 1
          else if (p.x > 1) p.x -= 1
          if (p.y < 0) p.y += 1
          else if (p.y > 1) p.y -= 1
        }

        const twinkle = reduced
          ? p.baseAlpha
          : p.baseAlpha + Math.sin(t * 0.001 * p.twinkleSpeed + p.twinkleOffset) * p.twinkleAmp

        const offsetX = respondToPointer && !reduced ? px * p.parallax * 12 : 0
        const offsetY = respondToPointer && !reduced ? py * p.parallax * 12 : 0
        const alpha = Math.max(0, Math.min(1, twinkle))

        const flareDynamic = reduced ? p.flare : p.flare * (0.8 + alpha * 0.28)
        drawCross(p.x * width + offsetX, p.y * height + offsetY, flareDynamic, p.r, alpha, STAR_PALETTE[p.colorIdx])
      }

      // Pass 3: Large luminous starbursts (Ref 3)
      for (let i = 0; i < len; i++) {
        const p = particles[i]
        if (p.type !== TYPE_BURST) continue

        if (!reduced) {
          p.x += p.driftX
          p.y += p.driftY
          if (p.x < 0) p.x += 1
          else if (p.x > 1) p.x -= 1
          if (p.y < 0) p.y += 1
          else if (p.y > 1) p.y -= 1
        }

        const twinkle = reduced
          ? p.baseAlpha
          : p.baseAlpha + Math.sin(t * 0.001 * p.twinkleSpeed + p.twinkleOffset) * p.twinkleAmp

        const offsetX = respondToPointer && !reduced ? px * p.parallax * 14 : 0
        const offsetY = respondToPointer && !reduced ? py * p.parallax * 14 : 0
        const alpha = Math.max(0, Math.min(1, twinkle))

        const scaleH = reduced ? p.spikeH : p.spikeH * (0.85 + alpha * 0.22)
        const scaleV = reduced ? p.spikeV : p.spikeV * (0.85 + alpha * 0.22)
        drawStarburst(p.x * width + offsetX, p.y * height + offsetY, scaleH, scaleV, p.r, p.diagSpike, alpha, STAR_PALETTE[p.colorIdx])
      }

      // Pass 4: Glowing outlined celestial hearts (Ref 2)
      for (let i = 0; i < len; i++) {
        const p = particles[i]
        if (p.type !== TYPE_HEART) continue

        if (!reduced) {
          p.x += p.driftX
          p.y += p.driftY
          if (p.x < 0) p.x += 1
          else if (p.x > 1) p.x -= 1
          if (p.y < 0) p.y += 1
          else if (p.y > 1) p.y -= 1
        }

        const twinkle = reduced
          ? p.baseAlpha
          : p.baseAlpha + Math.sin(t * 0.0008 * p.twinkleSpeed + p.twinkleOffset) * p.twinkleAmp

        const offsetX = respondToPointer && !reduced ? px * p.parallax * 10 : 0
        const offsetY = respondToPointer && !reduced ? py * p.parallax * 10 : 0
        const alpha = Math.max(0, Math.min(1, twinkle))

        drawHeart(p.x * width + offsetX, p.y * height + offsetY, p.size, p.rotation, alpha)
      }

      ctx.globalAlpha = 1
    }

    function loop(t) {
      if (destroyed) return
      if (!isVisible) {
        raf = null
        return
      }

      drawFrame(t)

      if (!reduced) {
        raf = requestAnimationFrame(loop)
      } else {
        raf = null
      }
    }

    function startLoop() {
      if (destroyed || raf || reduced || !isVisible) return
      raf = requestAnimationFrame(loop)
    }

    function stopLoop() {
      if (raf) {
        cancelAnimationFrame(raf)
        raf = null
      }
    }

    function onPointerMove(e) {
      if (destroyed) return
      pendingClientX = e.clientX
      pendingClientY = e.clientY
      hasPendingPointer = true
    }

    function onVisibilityChange() {
      if (document.hidden) {
        stopLoop()
      } else if (isVisible && !reduced) {
        startLoop()
      }
    }

    let observer = null
    if (typeof IntersectionObserver !== 'undefined') {
      observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0]
          isVisible = Boolean(entry && entry.isIntersecting)
          if (isVisible) {
            updateRect()
            if (!reduced) startLoop()
          } else {
            stopLoop()
          }
        },
        { threshold: 0.01 }
      )
      observer.observe(canvas)
    }

    resize()
    if (!reduced) {
      startLoop()
    } else {
      drawFrame(0)
    }

    window.addEventListener('resize', resize, { passive: true })
    window.addEventListener('orientationchange', resize, { passive: true })
    document.addEventListener('visibilitychange', onVisibilityChange)

    if (respondToPointer) {
      window.addEventListener('pointermove', onPointerMove, { passive: true })
    }

    return () => {
      destroyed = true
      stopLoop()
      if (observer) {
        observer.disconnect()
        observer = null
      }
      window.removeEventListener('resize', resize)
      window.removeEventListener('orientationchange', resize)
      document.removeEventListener('visibilitychange', onVisibilityChange)
      if (respondToPointer) {
        window.removeEventListener('pointermove', onPointerMove)
      }
    }
  }, [density, respondToPointer, reduced])

  return (
    <div className="starfield" aria-hidden="true">
      <canvas ref={canvasRef} />
    </div>
  )
}

export default memo(StarField)
