import { useState } from 'react'
import { giftData, settings } from '../../data/giftData'
import { EmptySection } from '../Timeline/Timeline'
import { useEscapeToClose } from '../../hooks/useEscapeToClose'

function isLocked(item) {
  if (!settings.enableDateLocks) return false
  if (!item.unlockDate) return false
  const target = new Date(item.unlockDate + 'T00:00:00')
  if (Number.isNaN(target.getTime())) return false
  return new Date() < target
}

export default function OpenWhen() {
  const items = giftData.openWhen
  const recipient = giftData.recipientName || 'You'
  const [openIndex, setOpenIndex] = useState(null)
  const [unsealingIndex, setUnsealingIndex] = useState(null)

  const active = openIndex !== null ? items[openIndex] : null
  const locked = active ? isLocked(active) : false
  useEscapeToClose(openIndex !== null, () => setOpenIndex(null))

  if (!items?.length) return <EmptySection title="Open When…" />

  function handleSelect(i) {
    const item = items[i]
    if (isLocked(item)) {
      setOpenIndex(i)
      return
    }

    // Anticipation unsealing sequence
    setUnsealingIndex(i)
    setTimeout(() => {
      setUnsealingIndex(null)
      setOpenIndex(i)
    }, 540)
  }

  return (
    <div className="screen openwhen">
      <div className="screen__inner">
        <header className="openwhen__header">
          <p className="eyebrow openwhen__eyebrow">Secret Letters</p>
          <h1 className="heading-l openwhen__main-heading">Open When…</h1>
          <p className="body-text body-text--soft openwhen__intro">
            Words saved for specific hours in time. Pick one when you need it.
          </p>
        </header>

        <div className="openwhen__grid">
          {items.map((item, i) => {
            const lockedItem = isLocked(item)
            const isUnsealing = unsealingIndex === i
            return (
              <button
                key={i}
                className={`openwhen__card lift-on-hover ${lockedItem ? 'is-locked' : ''} ${isUnsealing ? 'is-unsealing' : ''}`}
                style={{ '--enter-delay': `${(i % 6) * 60}ms` }}
                onClick={() => handleSelect(i)}
                disabled={unsealingIndex !== null}
                aria-label={`${item.title} ${lockedItem ? '(Locked)' : ''}`}
              >
                <span className="openwhen__card-seal" aria-hidden="true">
                  {lockedItem ? '⚷' : (isUnsealing ? '✦' : '✉')}
                </span>
                <span className="openwhen__card-title">{item.title}</span>
                <span className="openwhen__card-note">
                  {lockedItem ? 'Locked until its day' : (isUnsealing ? 'Unsealing…' : 'Touch to unseal')}
                </span>
              </button>
            )
          })}
        </div>
      </div>

      {active && (
        <div
          className="modal-backdrop openwhen__backdrop"
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          onClick={(e) => e.target === e.currentTarget && setOpenIndex(null)}
        >
          <div className="paper openwhen__parchment scale-in" key={openIndex}>
            <button
              className="icon-btn openwhen__close-btn"
              onClick={() => setOpenIndex(null)}
              aria-label="Fold away"
            >
              ✕
            </button>

            <div className="openwhen__parchment-inner">
              <span className="openwhen__modal-seal" aria-hidden="true">
                {locked ? '⚷' : '✦'}
              </span>

              <h2 className="heading-l openwhen__modal-title">{active.title}</h2>

              {locked ? (
                <div className="openwhen__locked-body">
                  <p className="letter__paragraph openwhen__whisper">
                    Some words need their exact moment in time.
                  </p>
                  <p className="letter__paragraph">
                    {active.lockedMessage || 'This letter is waiting for its day. Take comfort knowing it is already here for you.'}
                  </p>
                  {active.unlockDate && (
                    <p className="openwhen__unlock-date">
                      ✦ Unlocks on {active.unlockDate}
                    </p>
                  )}
                </div>
              ) : (
                <div className="openwhen__unlocked-body">
                  <p className="openwhen__to">Dearest {recipient},</p>
                  <p className="letter__paragraph openwhen__content">{active.content}</p>
                  <p className="openwhen__signoff">Always here for you ✦</p>
                </div>
              )}

              <button className="btn btn--ghost openwhen__fold-btn" onClick={() => setOpenIndex(null)}>
                Fold and put back ✉
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
