import { useState } from 'react'
import { giftData } from '../../data/giftData'
import { useReducedMotion } from '../../hooks/useReducedMotion'

export default function Letter() {
  const { letter, recipientName } = giftData
  const reduced = useReducedMotion()
  const [phase, setPhase] = useState('closed') // closed | opening | open

  function handleOpen() {
    if (phase !== 'closed') return
    if (reduced) {
      setPhase('open')
      return
    }
    setPhase('opening')
    setTimeout(() => setPhase('open'), 950)
  }

  function handleClose() {
    setPhase('closed')
  }

  return (
    <div className={`screen screen--center letter ${phase === 'open' ? 'letter--intimate' : ''}`}>
      {/* Intimate candlelight atmosphere aura */}
      <div className="letter__candlelight" aria-hidden="true" />

      {phase !== 'open' ? (
        <div className="screen__inner fade-in">
          <p className="eyebrow letter__eyebrow">A private note</p>
          <h1 className="heading-l letter__heading">Written only for you.</h1>
          
          <button
            className={`envelope ${reduced ? '' : 'envelope--idle'} ${phase === 'opening' ? 'is-opening' : ''}`}
            onClick={handleOpen}
            aria-label={`Open letter for ${recipientName || 'you'}`}
          >
            <span className="envelope__paper-peek" aria-hidden="true" />
            <span className="envelope__flap" />
            <span className="envelope__body">
              <span className="envelope__to">For {recipientName || 'You'}</span>
            </span>
            <span className="envelope__seal" aria-hidden="true">✦</span>
          </button>

          <p className="body-text body-text--soft letter__prompt">
            {phase === 'opening' ? 'Unsealing…' : 'Touch the seal to open'}
          </p>
        </div>
      ) : (
        <div className="letter__paper paper scale-in">
          <div className="letter__paper-inner">
            <p className="letter__to-header">Dear {recipientName || 'you'},</p>
            {letter.paragraphs.map((p, i) => (
              <p
                key={i}
                className="letter__paragraph fade-in"
                style={{ '--enter-delay': `${i * 180 + 120}ms` }}
              >
                {p}
              </p>
            ))}
            <div className="letter__signoff fade-in" style={{ '--enter-delay': `${letter.paragraphs.length * 180 + 200}ms` }}>
              <p>{letter.signOff}</p>
              <p className="letter__signoff-name">{letter.sender}</p>
            </div>
            
            <div className="letter__actions">
              <button className="btn btn--ghost letter__fold-btn" onClick={handleClose}>
                Fold and keep safe ✉
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
