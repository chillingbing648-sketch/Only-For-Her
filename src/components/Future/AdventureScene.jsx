import { useState } from 'react'

/**
 * Cinematic SVG Mini-Scenes for the 6 Future Adventures.
 * Handcrafted editorial line-art integrating with the cosmic visual identity.
 * Each scene features purposeful ambient animations and an interactive micro-action.
 */
export default function AdventureScene({ id, reduced = false }) {
  const [interacted, setInteracted] = useState(false)

  const triggerInteract = () => {
    setInteracted(true)
    setTimeout(() => setInteracted(false), 1400)
  }

  return (
    <div
      className={`future__scene-stage future__scene-stage--${id} ${interacted ? 'is-interacted' : ''}`}
      onClick={triggerInteract}
      role="img"
      aria-label={`Cinematic illustration of ${id} adventure`}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          triggerInteract()
        }
      }}
    >
      <div className="future__scene-svg-wrap">
        {id === 'japan' && <JapanScene interacted={interacted} reduced={reduced} />}
        {id === 'shopping' && <ShoppingScene interacted={interacted} reduced={reduced} />}
        {id === 'dinner' && <DinnerScene interacted={interacted} reduced={reduced} />}
        {id === 'airbnb' && <AirbnbScene interacted={interacted} reduced={reduced} />}
        {id === 'cook' && <CookScene interacted={interacted} reduced={reduced} />}
        {id === 'photobooth' && <PhotoboothScene interacted={interacted} reduced={reduced} />}
      </div>
      <div className="future__scene-tap-hint" aria-hidden="true">
        <span>✦ Tap scene to interact</span>
      </div>
    </div>
  )
}

/* ==========================================================================
   1. JAPAN 🇯🇵 — BIG ADVENTURE / EXPLORATION
   Elements: Mount Fuji, Tokyo skyline, Shinkansen train, suitcase, travel route
   ========================================================================== */
function JapanScene({ interacted, reduced }) {
  return (
    <svg viewBox="0 0 520 300" className="future__scene-svg" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <defs>
        <linearGradient id="jpDawnGlow" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="var(--adv-accent)" stopOpacity="0.22" />
          <stop offset="100%" stopColor="var(--adv-accent)" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Ambient background sky & distant Mount Fuji */}
      <circle cx="150" cy="115" r="38" fill="url(#jpDawnGlow)" stroke="var(--adv-accent)" strokeWidth="1" strokeOpacity="0.4" />
      <path
        d="M60 215L138 92c5-8 19-8 24 0l78 123"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeOpacity="0.75"
        className="scene-draw"
      />
      {/* Fuji snowcap line */}
      <path
        d="M118 132c12 6 22 2 32-4 10 7 22 8 34 2"
        stroke="var(--adv-accent)"
        strokeWidth="1.2"
        strokeOpacity="0.8"
      />

      {/* Distant Tokyo Skyline Silhouette */}
      <g stroke="currentColor" strokeWidth="1.1" strokeOpacity="0.45">
        {/* Tokyo Tower lattice silhouette */}
        <path d="M410 215L392 110l-4 0 0-14 2-10 2 10 0 14-4 0-18 105" />
        <path d="M382 170h16M378 195h24" />
        <circle cx="390" cy="84" r="1.5" fill="var(--adv-accent)" className="scene-pulse" />
        {/* Modern highrises */}
        <rect x="424" y="130" width="28" height="85" rx="1" />
        <line x1="432" y1="145" x2="444" y2="145" strokeDasharray="2 3" />
        <line x1="432" y1="160" x2="444" y2="160" strokeDasharray="2 3" />
        <line x1="432" y1="175" x2="444" y2="175" strokeDasharray="2 3" />
        <rect x="460" y="150" width="34" height="65" rx="1" />
        <line x1="468" y1="165" x2="486" y2="165" strokeDasharray="2 3" />
        <line x1="468" y1="180" x2="486" y2="180" strokeDasharray="2 3" />
      </g>

      {/* Dotted Constellation Travel Route with Destination Pins */}
      <path
        d="M70 75 Q 160 35 260 70 T 450 65"
        stroke="var(--adv-accent)"
        strokeWidth="1.3"
        strokeDasharray="4 5"
        strokeOpacity="0.85"
        className="scene-route-flow"
      />
      {/* Route stop markers */}
      <g fill="var(--adv-accent)">
        <circle cx="70" cy="75" r="3" className="scene-pulse" />
        <circle cx="260" cy="70" r="3" className="scene-pulse" />
        <circle cx="450" cy="65" r="3.5" className="scene-pulse" />
      </g>
      <text x="70" y="62" fill="currentColor" fontSize="8" fontFamily="var(--font-serif)" textAnchor="middle" opacity="0.6">
        Tokyo
      </text>
      <text x="260" y="58" fill="currentColor" fontSize="8" fontFamily="var(--font-serif)" textAnchor="middle" opacity="0.6">
        Kyoto
      </text>
      <text x="450" y="52" fill="currentColor" fontSize="8" fontFamily="var(--font-serif)" textAnchor="middle" opacity="0.6">
        Osaka
      </text>

      {/* Elevated Viaduct Track */}
      <line x1="20" y1="215" x2="500" y2="215" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.5" />
      <g stroke="currentColor" strokeWidth="1.1" strokeOpacity="0.35">
        <path d="M40 215 v28 M120 215 v28 M200 215 v28 M280 215 v28 M360 215 v28 M440 215 v28" />
        <path d="M40 228 a40 20 0 0 1 80 0 M120 228 a40 20 0 0 1 80 0 M200 228 a40 20 0 0 1 80 0 M280 228 a40 20 0 0 1 80 0 M360 228 a40 20 0 0 1 80 0" />
      </g>

      {/* Shinkansen / Bullet Train (Gliding motion) */}
      <g className={`scene-train ${interacted ? 'is-fast' : ''}`}>
        {/* Train Body */}
        <path
          d="M170 206 h140 c22 0 38 4 52 9 l-8 0 c-14 -6 -30 -9 -44 -9 h-140 z"
          fill="rgba(240, 242, 252, 0.12)"
          stroke="currentColor"
          strokeWidth="1.3"
        />
        {/* Train stripe in accent */}
        <path d="M170 210 h155 c18 0 30 2 40 5" stroke="var(--adv-accent)" strokeWidth="1.4" />
        {/* Lighted Windows */}
        <g stroke="var(--adv-accent)" strokeWidth="1" strokeOpacity="0.9">
          <rect x="180" y="202" width="12" height="4" rx="0.5" />
          <rect x="198" y="202" width="12" height="4" rx="0.5" />
          <rect x="216" y="202" width="12" height="4" rx="0.5" />
          <rect x="234" y="202" width="12" height="4" rx="0.5" />
          <rect x="252" y="202" width="12" height="4" rx="0.5" />
          <rect x="270" y="202" width="12" height="4" rx="0.5" />
          <rect x="288" y="202" width="12" height="4" rx="0.5" />
        </g>
      </g>

      {/* Foreground Platform Elements: Suitcase & Starlight Tag */}
      <g transform="translate(60, 230)">
        {/* Ground shadow */}
        <ellipse cx="26" cy="38" rx="28" ry="4" fill="currentColor" fillOpacity="0.12" stroke="none" />
        {/* Vintage suitcase */}
        <rect x="6" y="10" width="40" height="28" rx="3" stroke="currentColor" strokeWidth="1.3" fill="rgba(20, 16, 26, 0.9)" />
        {/* Straps and lock */}
        <line x1="16" y1="10" x2="16" y2="38" stroke="var(--adv-accent)" strokeWidth="1.1" strokeOpacity="0.7" />
        <line x1="36" y1="10" x2="36" y2="38" stroke="var(--adv-accent)" strokeWidth="1.1" strokeOpacity="0.7" />
        <circle cx="26" cy="12" r="1.5" fill="var(--adv-accent)" stroke="none" />
        {/* Handle */}
        <path d="M21 10V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4" stroke="currentColor" strokeWidth="1.2" />
        {/* Luggage star tag */}
        <path d="M38 18l8 6" stroke="var(--adv-accent)" strokeWidth="1" strokeDasharray="1.5 1.5" />
        <circle cx="48" cy="26" r="2.5" fill="var(--adv-accent)" stroke="none" className="scene-pulse" />
      </g>

      {/* Traditional Torii Gate Silhouette on lower left */}
      <g transform="translate(130, 222)" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.6">
        <path d="M4 22V5 M24 22V5" />
        <path d="M1 8h26" />
        <path d="M0 5c8-1.5 18-1.5 28 0" strokeWidth="1.4" />
      </g>

      {/* Floating Sakura Starlight Sparks */}
      <g fill="var(--adv-accent)" className="scene-float-drift">
        <path d="M220 120 l1 2 2 1 -2 1 -1 2 -1 -2 -2 -1 2 -1 z" />
        <path d="M320 90 l1 2 2 1 -2 1 -1 2 -1 -2 -2 -1 2 -1 z" opacity="0.7" />
        <path d="M180 160 l.8 1.6 1.6.8 -1.6.8 -.8 1.6 -.8 -1.6 -1.6 -.8 1.6 -.8 z" opacity="0.6" />
      </g>
    </svg>
  )
}

/* ==========================================================================
   2. DATE + SHOPPING 🛍️ — CAREFREE DATE
   Elements: Two walking figures, shopping bags, boutique storefront, café stop
   ========================================================================== */
function ShoppingScene({ interacted, reduced }) {
  return (
    <svg viewBox="0 0 520 300" className="future__scene-svg" fill="none" strokeLinecap="round" strokeLinejoin="round">
      {/* Background Boutique & Café Storefront */}
      <g stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.4">
        {/* Boutique storefront wall */}
        <rect x="40" y="60" width="220" height="175" rx="2" />
        {/* Striped awning */}
        <path d="M32 90h236l-8 22H40z" fill="rgba(242, 200, 131, 0.08)" stroke="var(--adv-accent)" strokeWidth="1.2" />
        <path d="M60 90l-4 22 M100 90l-4 22 M140 90l-4 22 M180 90l-4 22 M220 90l-4 22" stroke="var(--adv-accent)" strokeWidth="1" strokeOpacity="0.5" />
        {/* Arched Boutique window display */}
        <path d="M70 185v-45a30 30 0 0 1 60 0v45z" stroke="currentColor" strokeWidth="1.2" />
        <line x1="70" y1="185" x2="130" y2="185" strokeWidth="1.4" />
        {/* Boutique door */}
        <rect x="155" y="125" width="45" height="75" rx="1" />
        <circle cx="162" cy="162" r="1.5" fill="var(--adv-accent)" stroke="none" />
      </g>

      {/* Street Lamp Casting Soft Light Cone */}
      <g stroke="currentColor" strokeWidth="1.2">
        <path d="M280 235V50c0-6 4-10 10-10h14" strokeOpacity="0.55" />
        <path d="M304 40v14" stroke="var(--adv-accent)" strokeWidth="1.3" />
        {/* Lantern fixture */}
        <polygon points="296,54 312,54 308,68 300,68" stroke="var(--adv-accent)" strokeWidth="1.2" fill="rgba(242, 200, 131, 0.2)" />
        {/* Warm light cone */}
        <polygon points="304,68 250,235 360,235" fill="rgba(242, 200, 131, 0.04)" stroke="none" />
      </g>

      {/* Sidewalk Café Corner */}
      <g stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.55">
        {/* Small bistro round table */}
        <ellipse cx="400" cy="180" rx="22" ry="5" stroke="var(--adv-accent)" strokeWidth="1.2" />
        <path d="M400 185v45 M388 230l12-4 12 4" />
        {/* Café chair */}
        <path d="M435 170c0-10-8-18-18-18v30" />
        <path d="M420 182v48 M432 182v48" />
        {/* Two takeaway coffee cups with steam */}
        <rect x="392" y="171" width="6" height="8" rx="0.5" stroke="var(--adv-accent)" strokeWidth="1" />
        <rect x="402" y="171" width="6" height="8" rx="0.5" stroke="var(--adv-accent)" strokeWidth="1" />
        <path d="M395 168c-.5-2 .5-3 0-4 M405 168c.5-2-.5-3 0-4" stroke="var(--adv-accent)" strokeWidth="0.9" className="scene-steam" />
      </g>

      {/* Ground Line / Cobblestones */}
      <line x1="20" y1="235" x2="500" y2="235" stroke="currentColor" strokeWidth="1.4" strokeOpacity="0.4" />
      <g stroke="currentColor" strokeWidth="0.9" strokeOpacity="0.25" strokeDasharray="6 12">
        <line x1="40" y1="242" x2="480" y2="242" />
        <line x1="60" y1="250" x2="460" y2="250" />
      </g>

      {/* HERO: Two Figures Walking Together Hand in Hand */}
      <g className={`scene-walkers ${interacted ? 'is-swinging' : ''}`} transform="translate(150, 80)">
        {/* Left Figure */}
        <g stroke="currentColor" strokeWidth="1.3">
          {/* Head */}
          <circle cx="50" cy="50" r="9" />
          {/* Flowing coat */}
          <path d="M46 60c-4 14-8 42-12 65h24c-2-20-4-45-6-65" fill="rgba(240, 242, 252, 0.08)" />
          {/* Trailing scarf */}
          <path d="M50 63c-8 6-16 8-22 4" stroke="var(--adv-accent)" strokeWidth="1.2" />
          {/* Legs walking */}
          <path d="M42 125l-8 30 M52 125l6 30" strokeWidth="1.4" />
          {/* Left arm carrying shopping bag */}
          <path d="M44 72l-14 26" strokeWidth="1.3" />
        </g>

        {/* Right Figure */}
        <g stroke="currentColor" strokeWidth="1.3">
          {/* Head */}
          <circle cx="94" cy="46" r="9" />
          {/* Long elegant coat */}
          <path d="M90 56c-3 16-6 48-10 69h26c-2-22-4-50-6-69" fill="rgba(240, 242, 252, 0.08)" />
          {/* Trailing scarf in accent */}
          <path d="M95 59c6 8 14 10 20 6" stroke="var(--adv-accent)" strokeWidth="1.2" />
          {/* Legs in stride */}
          <path d="M86 125l-4 30 M96 125l10 30" strokeWidth="1.4" />
          {/* Right arm carrying shopping bags */}
          <path d="M98 68l16 28" strokeWidth="1.3" />
        </g>

        {/* Intertwined Hands Between Figures */}
        <path d="M52 75c8 10 16 16 22 22 M90 72c-6 12-12 18-16 25" stroke="currentColor" strokeWidth="1.3" />
        <circle cx="73" cy="97" r="3" fill="var(--adv-accent)" stroke="none" className="scene-pulse" />

        {/* Shopping Bags with Star Tags */}
        {/* Left bag */}
        <g transform="translate(18, 98)" stroke="currentColor" strokeWidth="1.2">
          <path d="M6 0v-5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v5" stroke="var(--adv-accent)" />
          <rect x="0" y="0" width="20" height="24" rx="2" fill="rgba(242, 200, 131, 0.12)" />
          <line x1="10" y1="8" x2="10" y2="16" stroke="var(--adv-accent)" strokeWidth="1" strokeDasharray="2 2" />
        </g>
        {/* Right bags (layered) */}
        <g transform="translate(112, 96)" stroke="currentColor" strokeWidth="1.2">
          <rect x="6" y="-3" width="18" height="24" rx="2" strokeOpacity="0.5" strokeDasharray="3 2" />
          <path d="M6 0v-5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v5" stroke="var(--adv-accent)" />
          <rect x="0" y="0" width="18" height="22" rx="2" fill="rgba(242, 200, 131, 0.16)" />
          {/* Star charm */}
          <circle cx="14" cy="8" r="1.5" fill="var(--adv-accent)" stroke="none" />
        </g>

        {/* Floating Heart Starlight between them */}
        <path
          d="M73 82c-2-4-6-4-6 0c0 4 6 7 6 7s6-3 6-7c0-4-4-4-6 0z"
          fill="var(--adv-accent)"
          stroke="none"
          className="scene-float-drift"
        />
      </g>
    </svg>
  )
}

/* ==========================================================================
   3. EXPENSIVE DINNER 🍽️ — ROMANTIC / ELEGANT
   Elements: Table for two, candle, plates/glasses, chandelier, arched window
   ========================================================================== */
function DinnerScene({ interacted, reduced }) {
  return (
    <svg viewBox="0 0 520 300" className="future__scene-svg" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <defs>
        <radialGradient id="candleGlowRadial" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--adv-accent)" stopOpacity="0.4" />
          <stop offset="60%" stopColor="var(--adv-accent)" stopOpacity="0.1" />
          <stop offset="100%" stopColor="var(--adv-accent)" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Arched French Window with Night City Skyline & Stars */}
      <g stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.45">
        <path d="M160 220V90a100 100 0 0 1 200 0v130z" fill="rgba(12, 10, 18, 0.85)" />
        {/* Window grid */}
        <line x1="260" y1="20" x2="260" y2="220" strokeWidth="1.1" />
        <line x1="160" y1="120" x2="360" y2="120" strokeWidth="1.1" />
        <line x1="160" y1="170" x2="360" y2="170" strokeWidth="1.1" />
        {/* Skyline lights outside */}
        <g stroke="var(--adv-accent)" strokeWidth="1" strokeOpacity="0.6">
          <circle cx="210" cy="150" r="1" className="scene-pulse" />
          <circle cx="235" cy="160" r="0.8" />
          <circle cx="285" cy="145" r="1.2" className="scene-pulse" />
          <circle cx="315" cy="155" r="0.8" />
        </g>
        {/* Distant moon */}
        <path d="M220 60a16 16 0 0 1-10 15 16 16 0 0 0 14-14c-.8 0-2.5-.5-4-1z" fill="var(--adv-accent)" stroke="none" opacity="0.75" />
      </g>

      {/* Draped Curtains Framing Window */}
      <g stroke="currentColor" strokeWidth="1.3" strokeOpacity="0.4">
        <path d="M140 20c-8 60-12 120-25 200 M380 20c8 60 12 120 25 200" />
        <path d="M125 140c8 3 14 3 20 0 M375 140c-8 3-14 3-20 0" stroke="var(--adv-accent)" strokeWidth="1.2" />
      </g>

      {/* Delicate Crystal Chandelier Hanging from Ceiling */}
      <g transform="translate(260, 20)" stroke="var(--adv-accent)" strokeWidth="1.1" strokeOpacity="0.7">
        <line x1="0" y1="0" x2="0" y2="22" strokeWidth="1.2" />
        <path d="M-28 22c14 10 42 10 56 0" />
        <path d="M-18 27c9 7 27 7 36 0" />
        <circle cx="-28" cy="22" r="1" fill="var(--adv-accent)" />
        <circle cx="28" cy="22" r="1" fill="var(--adv-accent)" />
        <circle cx="0" cy="34" r="1.5" fill="var(--adv-accent)" className="scene-pulse" />
      </g>

      {/* Intimate Table for Two */}
      <g transform="translate(180, 150)">
        {/* Two Elegant High-Back Dining Chairs */}
        <g stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.5">
          {/* Left chair */}
          <path d="M0 45c-2-25 4-45 14-55v55z" fill="rgba(240, 242, 252, 0.04)" />
          <path d="M4 45v45 M16 45v45" />
          {/* Right chair */}
          <path d="M160 45c2-25-4-45-14-55v55z" fill="rgba(240, 242, 252, 0.04)" />
          <path d="M156 45v45 M144 45v45" />
        </g>

        {/* Table Base & Draped Linen Cloth */}
        <ellipse cx="80" cy="45" rx="64" ry="16" fill="rgba(20, 16, 26, 0.95)" stroke="currentColor" strokeWidth="1.4" />
        <path
          d="M16 45c4 25 8 50 12 75h104c4-25 8-50 12-75"
          fill="rgba(240, 242, 252, 0.05)"
          stroke="currentColor"
          strokeWidth="1.3"
        />
        {/* Soft fabric drapery creases */}
        <path d="M48 48c4 24 6 48 8 72 M112 48c-4 24-6 48-8 72" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.25" />

        {/* Tabletop Dining Elements */}
        {/* Left Plate & Cloche */}
        <ellipse cx="44" cy="44" rx="14" ry="5" stroke="currentColor" strokeWidth="1.1" />
        <path d="M35 43c0-6 4-10 9-10s9 4 9 10" stroke="var(--adv-accent)" strokeWidth="1.2" fill="rgba(255, 215, 130, 0.08)" />
        <circle cx="44" cy="31" r="1.2" fill="var(--adv-accent)" stroke="none" />
        {/* Cutlery */}
        <line x1="26" y1="39" x2="26" y2="49" stroke="currentColor" strokeWidth="0.9" strokeOpacity="0.6" />
        <line x1="62" y1="39" x2="62" y2="49" stroke="currentColor" strokeWidth="0.9" strokeOpacity="0.6" />

        {/* Right Plate & Cloche */}
        <ellipse cx="116" cy="44" rx="14" ry="5" stroke="currentColor" strokeWidth="1.1" />
        <path d="M107 43c0-6 4-10 9-10s9 4 9 10" stroke="var(--adv-accent)" strokeWidth="1.2" fill="rgba(255, 215, 130, 0.08)" />
        <circle cx="116" cy="31" r="1.2" fill="var(--adv-accent)" stroke="none" />
        {/* Cutlery */}
        <line x1="98" y1="39" x2="98" y2="49" stroke="currentColor" strokeWidth="0.9" strokeOpacity="0.6" />
        <line x1="134" y1="39" x2="134" y2="49" stroke="currentColor" strokeWidth="0.9" strokeOpacity="0.6" />

        {/* Champagne Flutes with Rising Bubbles */}
        <g stroke="var(--adv-accent)" strokeWidth="1.1" className={`scene-glasses ${interacted ? 'is-clinking' : ''}`}>
          {/* Left glass */}
          <path d="M58 26l3 10h4l3-10z M63 36v10 M59 46h8" />
          <circle cx="63" cy="30" r="0.6" fill="var(--adv-accent)" stroke="none" className="scene-bubble" />
          {/* Right glass */}
          <path d="M102 26l-3 10h-4l-3-10z M97 36v10 M93 46h8" />
          <circle cx="97" cy="30" r="0.6" fill="var(--adv-accent)" stroke="none" className="scene-bubble" />
        </g>

        {/* Central Candlelight with Warm Glow */}
        <g transform="translate(80, 26)">
          {/* Ambient Candle Glow Circle */}
          <circle cx="0" cy="-6" r="28" fill="url(#candleGlowRadial)" stroke="none" />
          {/* Brass Candlestick */}
          <path d="M-6 16h12 M-3 16V4h6v12 M-5 4h10" stroke="currentColor" strokeWidth="1.2" />
          <line x1="0" y1="4" x2="0" y2="0" stroke="var(--adv-accent)" strokeWidth="1.2" />
          {/* Flickering Flame */}
          <path
            d="M0 -1c-2-3 0-8 0-8s2 5 0 8z"
            fill="var(--adv-accent)"
            stroke="none"
            className="scene-candle-flame"
          />
        </g>
      </g>
    </svg>
  )
}

/* ==========================================================================
   4. AIRBNB ESCAPE 🏡 — COZY / PRIVATE
   Elements: Cozy room, bed, window with rain/mist, two mugs, takeaway food
   ========================================================================== */
function AirbnbScene({ interacted, reduced }) {
  return (
    <svg viewBox="0 0 520 300" className="future__scene-svg" fill="none" strokeLinecap="round" strokeLinejoin="round">
      {/* Big Picture Window overlooking Rainy Dusk Pines */}
      <g stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.45">
        <rect x="50" y="40" width="220" height="175" rx="3" fill="rgba(14, 16, 28, 0.9)" />
        <line x1="160" y1="40" x2="160" y2="215" strokeWidth="1.2" />
        <line x1="50" y1="120" x2="270" y2="120" strokeWidth="1.2" />
        {/* Pine trees outside window */}
        <path d="M90 190l15-28 15 28z M190 200l18-35 18 35z M135 180l12-22 12 22z" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" />
        {/* Gentle rain streaks */}
        <g stroke="var(--adv-accent)" strokeWidth="0.8" strokeOpacity="0.5" className="scene-rain">
          <line x1="80" y1="60" x2="74" y2="85" />
          <line x1="120" y1="80" x2="114" y2="105" />
          <line x1="190" y1="55" x2="184" y2="80" />
          <line x1="230" y1="90" x2="224" y2="115" />
        </g>
      </g>

      {/* Cozy Fairy Lights String across Window */}
      <g stroke="var(--adv-accent)" strokeWidth="0.9" strokeOpacity="0.6">
        <path d="M50 48 Q 110 65 160 52 T 270 56" />
        <circle cx="85" cy="56" r="1.8" fill="var(--adv-accent)" className="scene-pulse" />
        <circle cx="130" cy="57" r="1.8" fill="var(--adv-accent)" className="scene-pulse" />
        <circle cx="190" cy="53" r="1.8" fill="var(--adv-accent)" className="scene-pulse" />
        <circle cx="235" cy="57" r="1.8" fill="var(--adv-accent)" className="scene-pulse" />
      </g>

      {/* Bedside Wall Lamp with Soft Warmth */}
      <g transform="translate(420, 70)" stroke="currentColor" strokeWidth="1.2">
        <path d="M0 0h15v20" strokeOpacity="0.5" />
        {/* Lamp shade */}
        <polygon points="5,20 25,20 28,38 2,38" stroke="var(--adv-accent)" strokeWidth="1.2" fill="rgba(169, 184, 232, 0.15)" />
        <circle cx="15" cy="38" r="2" fill="var(--adv-accent)" stroke="none" className="scene-pulse" />
      </g>

      {/* Room Flooring Line & Cozy Rug */}
      <line x1="20" y1="235" x2="500" y2="235" stroke="currentColor" strokeWidth="1.4" strokeOpacity="0.35" />
      <ellipse cx="260" cy="245" rx="140" ry="18" stroke="var(--adv-accent)" strokeWidth="1" strokeDasharray="3 3" strokeOpacity="0.5" />

      {/* Cozy Bed Piled with Duvet & Pillows */}
      <g transform="translate(230, 120)">
        {/* Wooden headboard */}
        <rect x="20" y="10" width="180" height="90" rx="3" stroke="currentColor" strokeWidth="1.3" strokeOpacity="0.5" />
        <line x1="20" y1="35" x2="200" y2="35" stroke="currentColor" strokeWidth="1" strokeOpacity="0.35" />
        {/* Pillows */}
        <rect x="35" y="38" width="40" height="24" rx="4" stroke="currentColor" strokeWidth="1.2" fill="rgba(240, 242, 252, 0.08)" />
        <rect x="85" y="38" width="40" height="24" rx="4" stroke="currentColor" strokeWidth="1.2" fill="rgba(240, 242, 252, 0.08)" />
        {/* Soft puffy duvet with folded sheet */}
        <path
          d="M20 65c25-6 60-6 85 0s60 6 85 0c8 20 12 45 10 55H10c-2-10 2-35 10-55z"
          fill="rgba(20, 16, 28, 0.95)"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        {/* Turned down blanket fold */}
        <path d="M20 65c25-6 60-6 85 0s60 6 85 0" stroke="var(--adv-accent)" strokeWidth="1.4" />
        {/* Knitted throw blanket across foot of bed */}
        <path d="M15 95c35-4 80 4 125-2s55-2 65 2" stroke="var(--adv-accent)" strokeWidth="1.2" strokeDasharray="2 3" />
      </g>

      {/* Bedside Wooden Table with Two Steaming Mugs & Takeaway Box */}
      <g transform="translate(100, 190)" stroke="currentColor" strokeWidth="1.2">
        {/* Low wooden table */}
        <ellipse cx="45" cy="25" rx="35" ry="10" fill="rgba(24, 20, 32, 0.95)" strokeWidth="1.3" />
        <path d="M20 28v22 M70 28v22" strokeOpacity="0.6" />

        {/* Two Ceramic Mugs */}
        {/* Mug 1 */}
        <rect x="25" y="14" width="10" height="12" rx="1.5" stroke="var(--adv-accent)" fill="rgba(169, 184, 232, 0.15)" />
        <path d="M35 17c3 0 4 2 4 4s-1 4-4 4" stroke="var(--adv-accent)" strokeWidth="1" />
        {/* Mug 2 */}
        <rect x="42" y="14" width="10" height="12" rx="1.5" stroke="var(--adv-accent)" fill="rgba(169, 184, 232, 0.15)" />
        <path d="M42 17c-3 0-4 2-4 4s-1 4 4 4" stroke="var(--adv-accent)" strokeWidth="1" />
        {/* Rising steam curls */}
        <g stroke="var(--adv-accent)" strokeWidth="1" className={`scene-steam ${interacted ? 'is-active' : ''}`}>
          <path d="M30 11c-1-3 1-5 0-7 M47 11c1-3-1-5 0-7" />
        </g>

        {/* Takeaway Food Box with Chopsticks */}
        <path d="M58 20l3-8h14l3 8z" fill="rgba(240, 242, 252, 0.1)" stroke="currentColor" strokeWidth="1.1" />
        <line x1="56" y1="12" x2="80" y2="8" stroke="var(--adv-accent)" strokeWidth="1.1" />
      </g>
    </svg>
  )
}

/* ==========================================================================
   5. COOK TOGETHER 🍳 — FUN / CHAOTIC / PERSONAL
   Elements: Kitchen counter, two people cooking, ingredients, utensils, mess
   ========================================================================== */
function CookScene({ interacted, reduced }) {
  return (
    <svg viewBox="0 0 520 300" className="future__scene-svg" fill="none" strokeLinecap="round" strokeLinejoin="round">
      {/* Background Kitchen Tiles & Hanging Utensil Rack */}
      <g stroke="currentColor" strokeWidth="1" strokeOpacity="0.25">
        <line x1="60" y1="60" x2="460" y2="60" />
        <line x1="60" y1="90" x2="460" y2="90" />
        <line x1="60" y1="120" x2="460" y2="120" />
      </g>
      {/* Hanging rack with ladle, spatula, whisk */}
      <g stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.55">
        <line x1="80" y1="65" x2="180" y2="65" strokeWidth="1.4" />
        <path d="M95 65v22c0 3 2 4 4 4s4-1 4-4" />
        <path d="M125 65v24h6v-6" />
        <path d="M155 65v18c0 4 3 6 5 6s5-2 5-6v-18" stroke="var(--adv-accent)" />
      </g>

      {/* Two Figures Cooking Together Behind Counter */}
      <g transform="translate(180, 50)">
        {/* Figure 1 (Left - Chef with tasting spoon) */}
        <g stroke="currentColor" strokeWidth="1.3">
          <circle cx="40" cy="35" r="9" />
          {/* Chef apron */}
          <path d="M35 44c-3 10-5 25-6 38h24c-1-13-3-28-6-38" fill="rgba(240, 242, 252, 0.08)" />
          <path d="M36 50h8" stroke="var(--adv-accent)" strokeWidth="1.2" />
          {/* Extended arm holding wooden tasting spoon towards partner */}
          <g className={`scene-cook-spoon ${interacted ? 'is-tasting' : ''}`}>
            <path d="M44 55c8 6 18 8 28 6" strokeWidth="1.3" />
            <ellipse cx="76" cy="62" rx="4" ry="2.5" stroke="var(--adv-accent)" strokeWidth="1.2" fill="var(--adv-accent)" fillOpacity="0.3" />
          </g>
        </g>

        {/* Figure 2 (Right - Partner leaning in tasting & laughing) */}
        <g stroke="currentColor" strokeWidth="1.3">
          <circle cx="105" cy="38" r="9" />
          {/* Flour smudge on cheek! */}
          <circle cx="101" cy="40" r="1.4" fill="var(--adv-accent)" stroke="none" />
          {/* Torso leaning slightly left */}
          <path d="M100 47c-4 10-6 24-8 35h24c-1-11-2-25-4-35" fill="rgba(240, 242, 252, 0.08)" />
          {/* Arm resting affectionately near partner */}
          <path d="M96 56c-6 8-12 12-16 16" strokeWidth="1.3" />
        </g>

        {/* Floating laughter / tease hearts */}
        <path
          d="M72 32c-1.5-3-5-3-5 0c0 3 5 5 5 5s5-2 5-5c0-3-3.5-3-5 0z"
          fill="var(--adv-accent)"
          stroke="none"
          className="scene-float-drift"
        />
      </g>

      {/* Main Butcher Block Countertop */}
      <g stroke="currentColor" strokeWidth="1.4">
        <rect x="60" y="135" width="400" height="18" rx="2" fill="rgba(28, 22, 36, 0.95)" />
        <rect x="70" y="153" width="380" height="85" fill="rgba(18, 14, 24, 0.98)" strokeWidth="1.2" />
        {/* Cabinet drawers and handles */}
        <line x1="200" y1="153" x2="200" y2="238" strokeWidth="1" strokeOpacity="0.4" />
        <line x1="330" y1="153" x2="330" y2="238" strokeWidth="1" strokeOpacity="0.4" />
        <line x1="125" y1="168" x2="145" y2="168" stroke="var(--adv-accent)" strokeWidth="1.4" />
        <line x1="255" y1="168" x2="275" y2="168" stroke="var(--adv-accent)" strokeWidth="1.4" />
        <line x1="385" y1="168" x2="405" y2="168" stroke="var(--adv-accent)" strokeWidth="1.4" />
      </g>

      {/* Sizzling Skillet Pan on Stove in Center */}
      <g transform="translate(230, 115)">
        {/* Induction burner circle */}
        <ellipse cx="30" cy="22" rx="24" ry="7" stroke="var(--adv-accent)" strokeWidth="1" strokeDasharray="3 3" />
        {/* Skillet body */}
        <ellipse cx="30" cy="20" rx="20" ry="7" fill="rgba(34, 28, 44, 0.95)" stroke="currentColor" strokeWidth="1.3" />
        <ellipse cx="30" cy="20" rx="16" ry="5" fill="rgba(242, 166, 121, 0.15)" stroke="var(--adv-accent)" strokeWidth="1" />
        {/* Long skillet handle */}
        <path d="M46 22l18 8" stroke="currentColor" strokeWidth="1.6" />
        {/* Sizzling steam wisps & pop sparks */}
        <g stroke="var(--adv-accent)" strokeWidth="1" className={`scene-steam ${interacted ? 'is-sizzling' : ''}`}>
          <path d="M24 14c-1-4 2-6 2-9 M34 13c1-4-2-6-1-9" />
          <circle cx="28" cy="8" r="0.8" fill="var(--adv-accent)" />
          <circle cx="38" cy="6" r="0.8" fill="var(--adv-accent)" />
        </g>
      </g>

      {/* Playful Countertop Mess: Ingredients & Tools */}
      {/* Left side: Propped recipe book & olive oil */}
      <g transform="translate(90, 118)" stroke="currentColor" strokeWidth="1.2">
        {/* Propped open cookbook */}
        <polygon points="10,16 28,6 28,24 10,24" fill="rgba(240, 242, 252, 0.08)" />
        <polygon points="28,6 46,16 46,24 28,24" fill="rgba(240, 242, 252, 0.08)" />
        <line x1="28" y1="6" x2="28" y2="24" stroke="var(--adv-accent)" strokeWidth="1.2" />
        {/* Olive oil bottle */}
        <path d="M58 24V14l3-4v-4h2v4l3 4v10z" stroke="var(--adv-accent)" fill="rgba(242, 166, 121, 0.15)" />
      </g>

      {/* Right side: Cutting board, rolling pin, scattered herbs */}
      <g transform="translate(330, 124)" stroke="currentColor" strokeWidth="1.2">
        {/* Wooden cutting board with chopped tomato */}
        <polygon points="10,12 48,12 42,20 4,20" stroke="var(--adv-accent)" strokeWidth="1.1" fill="rgba(242, 166, 121, 0.12)" />
        <circle cx="22" cy="16" r="2.5" fill="var(--adv-accent)" stroke="none" />
        <circle cx="30" cy="16" r="2" fill="var(--adv-accent)" stroke="none" />
        {/* Rolling pin with flour dust */}
        <path d="M48 20l24-6" stroke="currentColor" strokeWidth="2.4" />
        {/* Scattered flour dust particles */}
        <g fill="rgba(240, 242, 252, 0.6)" stroke="none">
          <circle cx="15" cy="22" r="0.7" />
          <circle cx="36" cy="22" r="0.8" />
          <circle cx="55" cy="18" r="0.6" />
        </g>
      </g>
    </svg>
  )
}

/* ==========================================================================
   6. PHOTOBOOTH 📸 — PLAYFUL / MEMORABLE
   Elements: Photobooth frame, camera lens, flash, 4-photo film strip developing
   ========================================================================== */
function PhotoboothScene({ interacted, reduced }) {
  return (
    <svg viewBox="0 0 520 300" className="future__scene-svg" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <defs>
        <radialGradient id="strobeFlash" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.85" />
          <stop offset="40%" stopColor="var(--adv-accent)" stopOpacity="0.35" />
          <stop offset="100%" stopColor="var(--adv-accent)" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Photobooth Booth Frame & Curtains */}
      <g stroke="currentColor" strokeWidth="1.3">
        {/* Booth roof canopy */}
        <rect x="60" y="25" width="400" height="230" rx="4" strokeOpacity="0.45" />
        {/* Header sign board */}
        <rect x="120" y="32" width="280" height="26" rx="3" stroke="var(--adv-accent)" strokeWidth="1.3" fill="rgba(18, 14, 26, 0.9)" />
        <text
          x="260"
          y="49"
          fill="var(--adv-accent)"
          fontSize="11"
          letterSpacing="0.25em"
          fontFamily="var(--font-serif)"
          textAnchor="middle"
          stroke="none"
        >
          ✦ PHOTOBOOTH ✦
        </text>
        {/* Marquee round bulbs along the top sign */}
        <g fill="var(--adv-accent)" stroke="none">
          <circle cx="132" cy="45" r="1.5" className="scene-pulse" />
          <circle cx="152" cy="45" r="1.5" />
          <circle cx="368" cy="45" r="1.5" />
          <circle cx="388" cy="45" r="1.5" className="scene-pulse" />
        </g>
        {/* Draped velvet curtain pulled aside */}
        <path d="M70 58c14 45 10 110 5 185 M120 58c-8 65-15 130-10 185" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.35" />
        <path d="M450 58c-14 45-10 110-5 185 M400 58c8 65 15 130 10 185" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.35" />
      </g>

      {/* Analog Camera Lens on Left Interior Wall */}
      <g transform="translate(130, 95)" stroke="currentColor" strokeWidth="1.2">
        <rect x="0" y="0" width="38" height="48" rx="3" fill="rgba(24, 20, 32, 0.9)" />
        {/* Large glass lens with aperture iris */}
        <circle cx="19" cy="24" r="12" stroke="var(--adv-accent)" strokeWidth="1.3" />
        <circle cx="19" cy="24" r="7" stroke="var(--adv-accent)" strokeWidth="1" fill="rgba(232, 200, 245, 0.15)" />
        <circle cx="16" cy="21" r="1.5" fill="#fff" stroke="none" />
        {/* Camera flash unit mounted on top */}
        <rect x="9" y="-12" width="20" height="12" rx="1.5" stroke="var(--adv-accent)" fill="rgba(232, 200, 245, 0.25)" />
        {/* Strobe flash burst on interact / reveal */}
        <circle
          cx="19"
          cy="-6"
          r="48"
          fill="url(#strobeFlash)"
          stroke="none"
          className={`scene-flash ${interacted ? 'is-firing' : ''}`}
        />
      </g>

      {/* THE HERO: Classic 4-Frame Film Strip Emerging from Booth */}
      <g transform="translate(230, 68)" className="scene-photostrip">
        {/* Vintage Film Strip Paper Container */}
        <rect
          x="0"
          y="0"
          width="135"
          height="182"
          rx="4"
          fill="#0c0a12"
          stroke="var(--adv-accent)"
          strokeWidth="1.4"
          filter="drop-shadow(0 8px 24px rgba(0, 0, 0, 0.8))"
        />
        {/* Header and footer stamp */}
        <text x="67" y="10" fill="var(--adv-accent)" fontSize="5.5" letterSpacing="0.14em" textAnchor="middle" stroke="none" opacity="0.7">
          4-SHOT PHOTOSTRIP · MEMORY
        </text>
        <text x="67" y="177" fill="var(--adv-accent)" fontSize="5.5" letterSpacing="0.14em" textAnchor="middle" stroke="none" opacity="0.7">
          SOMEDAY SOON · WALLET KEEPSAKE
        </text>

        {/* 4 Photo Frames Layout (2x2 grid inside strip for perfect visual balance) */}
        {/* Frame 1: Serious Photo */}
        <g transform="translate(8, 14)" stroke="currentColor" strokeWidth="1">
          <rect x="0" y="0" width="56" height="72" rx="2" strokeDasharray="2 2" strokeOpacity="0.4" fill="rgba(232, 200, 245, 0.04)" />
          <text x="28" y="12" fill="var(--adv-accent)" fontSize="6" fontFamily="monospace" textAnchor="middle" stroke="none" opacity="0.6">
            #01 SERIOUS
          </text>
          {/* Illustration: Studio poise with sunglasses */}
          <circle cx="28" cy="38" r="14" strokeOpacity="0.4" />
          <path d="M19 36h7l1.5 2 1.5-2h7" stroke="var(--adv-accent)" strokeWidth="1.2" />
          <path d="M19 36a3.5 3.5 0 0 0 7 0 M29 36a3.5 3.5 0 0 0 7 0" fill="var(--adv-accent)" fillOpacity="0.4" stroke="none" />
          <path d="M28 20v3 M28 53v3 M10 38h3 M43 38h3" strokeOpacity="0.35" />
          <text x="28" y="65" fill="currentColor" fontSize="5.5" fontStyle="italic" textAnchor="middle" stroke="none" opacity="0.6">
            Trying not to laugh
          </text>
        </g>

        {/* Frame 2: Cute Photo */}
        <g transform="translate(71, 14)" stroke="currentColor" strokeWidth="1">
          <rect x="0" y="0" width="56" height="72" rx="2" strokeDasharray="2 2" strokeOpacity="0.4" fill="rgba(232, 200, 245, 0.04)" />
          <text x="28" y="12" fill="var(--adv-accent)" fontSize="6" fontFamily="monospace" textAnchor="middle" stroke="none" opacity="0.6">
            #02 CUTE
          </text>
          {/* Illustration: Blushing cheeks & heart smile */}
          <path
            d="M28 50l-1.5-1.5C18 42 14 38 14 34c0-3.5 2.5-6 6-6c2 0 4 1 5.5 2.5C27 29 29 28 31 28c3.5 0 6 2.5 6 6c0 4-4 8-12.5 14.5L28 50z"
            fill="var(--adv-accent)"
            fillOpacity="0.2"
            stroke="var(--adv-accent)"
            strokeWidth="1.1"
          />
          <circle cx="23" cy="35" r="1" fill="var(--adv-accent)" stroke="none" />
          <circle cx="33" cy="35" r="1" fill="var(--adv-accent)" stroke="none" />
          <path d="M24 40c2 2 6 2 8 0" stroke="var(--adv-accent)" strokeWidth="1.1" />
          <text x="28" y="65" fill="currentColor" fontSize="5.5" fontStyle="italic" textAnchor="middle" stroke="none" opacity="0.6">
            Cheek to cheek
          </text>
        </g>

        {/* Frame 3: Stupid Photo */}
        <g transform="translate(8, 92)" stroke="currentColor" strokeWidth="1">
          <rect x="0" y="0" width="56" height="72" rx="2" strokeDasharray="2 2" strokeOpacity="0.4" fill="rgba(232, 200, 245, 0.04)" />
          <text x="28" y="12" fill="var(--adv-accent)" fontSize="6" fontFamily="monospace" textAnchor="middle" stroke="none" opacity="0.6">
            #03 STUPID
          </text>
          {/* Illustration: Goofy face & stuck-out tongue */}
          <circle cx="28" cy="38" r="14" strokeOpacity="0.4" />
          <path d="M21 34l4 3-4 1" stroke="var(--adv-accent)" strokeWidth="1.2" />
          <circle cx="35" cy="35" r="1.5" fill="var(--adv-accent)" stroke="none" />
          <path d="M22 43c2 2 5 3 7 3s5-1 7-3" stroke="currentColor" strokeWidth="1.1" />
          <path d="M27 46c0 3 2 4.5 3.5 4.5s2.5-1.5 2.5-4.5" fill="var(--adv-accent)" fillOpacity="0.4" stroke="var(--adv-accent)" />
          <text x="28" y="65" fill="currentColor" fontSize="5.5" fontStyle="italic" textAnchor="middle" stroke="none" opacity="0.6">
            Chaos mode
          </text>
        </g>

        {/* Frame 4: Favourite Photo */}
        <g transform="translate(71, 92)" stroke="currentColor" strokeWidth="1">
          <rect x="0" y="0" width="56" height="72" rx="2" strokeDasharray="2 2" strokeOpacity="0.4" fill="rgba(232, 200, 245, 0.08)" />
          <text x="28" y="12" fill="var(--adv-accent)" fontSize="6" fontFamily="monospace" textAnchor="middle" stroke="none" opacity="0.8">
            #04 FAVOURITE
          </text>
          {/* Illustration: Two intertwined stars gazing together */}
          <path d="M22 28l1.2 3 3 1.2-3 1.2-1.2 3-1.2-3-3-1.2 3-1.2z" fill="var(--adv-accent)" stroke="none" />
          <path d="M34 34l1.2 3 3 1.2-3 1.2-1.2 3-1.2-3-3-1.2 3-1.2z" fill="var(--adv-accent)" stroke="none" />
          <path d="M18 45c4-3 9-3 12 0s9 3 12 0" stroke="var(--adv-accent)" strokeWidth="1" strokeDasharray="2 2" />
          <circle cx="28" cy="28" r="1" fill="#fff" stroke="none" className="scene-pulse" />
          <text x="28" y="65" fill="var(--adv-accent)" fontSize="5.5" fontStyle="italic" textAnchor="middle" stroke="none" opacity="0.9">
            Just looking at you
          </text>
        </g>
      </g>
    </svg>
  )
}
