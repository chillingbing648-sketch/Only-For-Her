import { useState } from 'react'
import { giftData } from '../../data/giftData'
import { EmptySection } from '../Timeline/Timeline'
import { useReducedMotion } from '../../hooks/useReducedMotion'

export default function Surprise() {
  const pool = giftData.surprises
  const reduced = useReducedMotion()
  const [current, setCurrent] = useState(null)
  const [key, setKey] = useState(0)
  const [anticipating, setAnticipating] = useState(false)
  const [seekingStep, setSeekingStep] = useState(0)

  if (!pool?.length) return <EmptySection title="Want To See Something?" />

  function pickNext() {
    let next = pool[Math.floor(Math.random() * pool.length)]
    if (pool.length > 1) {
      while (current && next.title === current.title) {
        next = pool[Math.floor(Math.random() * pool.length)]
      }
    }
    setCurrent(next)
    setKey((k) => k + 1)
  }

  function reveal() {
    if (anticipating) return
    if (reduced) {
      pickNext()
      return
    }
    setAnticipating(true)
    setSeekingStep(1)
    setTimeout(() => setSeekingStep(2), 340)
    setTimeout(() => setSeekingStep(3), 680)
    setTimeout(() => {
      pickNext()
      setAnticipating(false)
      setSeekingStep(0)
    }, 1020)
  }

  return (
    <div className={`screen screen--center surprise ${anticipating ? 'surprise--seeking' : ''}`}>
      {/* Cosmic Discovery Focal Light */}
      <div className="surprise__ambient-bloom" aria-hidden="true" />

      <div className="screen__inner">
        <p className="eyebrow surprise__eyebrow">A Serendipitous Discovery</p>
        <h1 className="heading-l surprise__main-heading">
          {current ? 'Found in the Cosmos' : 'Let the universe choose for you.'}
        </h1>

        {/* Celestial Oracle Lens */}
        <div className={`surprise__oracle ${anticipating ? 'is-active' : ''}`} aria-hidden="true">
          <div className="surprise__oracle-ring" />
          <div className="surprise__oracle-sparks" />
          <span className="surprise__oracle-core">✦</span>
        </div>

        {anticipating && (
          <p className="body-text body-text--soft surprise__anticipation-msg fade-in">
            {seekingStep === 1 && 'Aligning the stars…'}
            {seekingStep === 2 && 'Seeking a memory in the deep field…'}
            {seekingStep >= 3 && 'Unveiling a discovery…'}
          </p>
        )}

        {current && !anticipating && (
          <article className="surprise__discovery-box scale-in" key={key}>
            <div className="surprise__discovery-header">
              <span className="surprise__badge">✦ Discovered Keepsake</span>
              {current.type && <span className="surprise__type-badge">{current.type}</span>}
            </div>

            <h2 className="heading-l surprise__title">{current.title}</h2>
            <p className="body-text surprise__content">{current.content}</p>
          </article>
        )}

        <div className="surprise__actions">
          <button
            className={`btn btn--primary surprise__btn ${anticipating ? 'is-anticipating' : ''}`}
            onClick={reveal}
            disabled={anticipating}
          >
            <span className="surprise__btn-icon" aria-hidden="true">✦</span>
            {anticipating ? 'Listening to the cosmos…' : (current ? 'Discover another surprise' : 'Ask the universe')}
          </button>
        </div>
      </div>
    </div>
  )
}
