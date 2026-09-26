import { useState } from 'react'
import { giftData } from '../../data/giftData'
import SmartImage from '../UI/SmartImage'

export default function Timeline() {
  const entries = giftData.timeline
  const [index, setIndex] = useState(0)
  const entry = entries[index]

  function go(delta) {
    setIndex((i) => Math.max(0, Math.min(entries.length - 1, i + delta)))
  }

  if (!entries?.length) return <EmptySection title="Where It All Started" />

  return (
    <div className="screen timeline timeline--journey">
      {/* Ambient starlight trajectory glow */}
      <div className="timeline__trajectory-glow" aria-hidden="true" />

      <div className="screen__inner">
        <header className="timeline__header">
          <p className="eyebrow timeline__eyebrow">
            Station {index + 1} of {entries.length} · The Journey
          </p>
          <h1 className="heading-l timeline__main-heading">Where It All Started</h1>
        </header>

        {/* Orbit Trajectory Map */}
        <nav className="timeline__orbit-track" aria-label="Journey waypoints">
          <div className="timeline__orbit-line" aria-hidden="true" />
          {entries.map((item, i) => (
            <button
              key={i}
              className={`timeline__orbit-point ${i === index ? 'is-active' : ''} ${i < index ? 'is-passed' : ''}`}
              onClick={() => setIndex(i)}
              aria-label={`Travel to milestone ${i + 1}: ${item.title || item.date}`}
              aria-current={i === index ? 'step' : undefined}
            >
              <span className="timeline__orbit-dot" />
              <span className="timeline__orbit-label">0{i + 1}</span>
            </button>
          ))}
        </nav>

        {/* Destination Waypoint Station */}
        <article className="timeline__station scale-in" key={index}>
          <div className="timeline__station-meta">
            <span className="timeline__date-badge">✦ {entry.date}</span>
            {entry.location && <span className="timeline__coord-badge">📍 {entry.location}</span>}
          </div>

          <h2 className="heading-l timeline__title">{entry.title}</h2>

          {entry.image && (
            <div className="timeline__portal-frame">
              <SmartImage src={entry.image} alt={entry.title} label="A memory from this milestone" />
            </div>
          )}

          <p className="body-text timeline__desc">{entry.description}</p>

          {entry.song && (
            <p className="timeline__whisper">
              <span aria-hidden="true">🎵</span> Echoes: <em>{entry.song}</em>
            </p>
          )}
        </article>

        <div className="timeline__controls">
          <button
            className="btn btn--ghost timeline__step-btn"
            onClick={() => go(-1)}
            disabled={index === 0}
          >
            ← Earlier Station
          </button>
          <button
            className="btn btn--ghost timeline__step-btn"
            onClick={() => go(1)}
            disabled={index === entries.length - 1}
          >
            Next Station →
          </button>
        </div>
      </div>
    </div>
  )
}

export function EmptySection({ title, hint }) {
  return (
    <div className="screen screen--center">
      <div className="screen__inner">
        <h1 className="heading-l">{title}</h1>
        <p className="body-text body-text--soft">
          {hint || 'Nothing here yet — add some content to giftData.js.'}
        </p>
      </div>
    </div>
  )
}
