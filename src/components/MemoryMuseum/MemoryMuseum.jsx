import { useRef, useState } from 'react'
import { giftData } from '../../data/giftData'
import SmartImage from '../UI/SmartImage'
import PhotoViewer from '../PhotoViewer/PhotoViewer'
import { EmptySection } from '../Timeline/Timeline'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { assetUrl } from '../../utils/assetUrl'

export default function MemoryMuseum() {
  const exhibits = giftData.exhibits
  const [index, setIndex] = useState(0)
  const [viewerOpen, setViewerOpen] = useState(false)

  if (!exhibits?.length) return <EmptySection title="Our Memory Museum" />

  const exhibit = exhibits[index]
  const images = exhibits.map((e) => ({
    src: e.image && !isVideoPath(e.image) ? e.image : undefined,
    video: e.video || (isVideoPath(e.image) ? e.image : undefined),
    caption: e.title,
  }))
  const rotate = index % 2 === 0 ? -2.2 : 2.4

  function go(delta) {
    setIndex((i) => (i + delta + exhibits.length) % exhibits.length)
  }

  function onKeyDown(e) {
    if (e.key === 'ArrowRight') go(1)
    if (e.key === 'ArrowLeft') go(-1)
  }

  return (
    <div className="screen museum" onKeyDown={onKeyDown} tabIndex={-1}>
      <div className="screen__inner">
        <p className="eyebrow">Memory museum</p>
        <h1 className="heading-l">Our Memory Museum</h1>

        <div className="museum__exhibit fade-up" key={exhibit.id}>
          <p className="museum__number">
            Exhibit {String(index + 1).padStart(3, '0')}
            {exhibit.date ? ` · ${exhibit.date}` : ''}
            {exhibit.location ? ` · ${exhibit.location}` : ''}
          </p>
          <h2 className="heading-l museum__title">{exhibit.title}</h2>
          <PolaroidPhoto
            image={exhibit.image}
            video={exhibit.video || (isVideoPath(exhibit.image) ? exhibit.image : undefined)}
            alt={exhibit.title}
            caption={exhibit.date || exhibit.location}
            rotate={rotate}
            onClick={() => setViewerOpen(true)}
          />
          <p className="body-text museum__story">{exhibit.story}</p>
          {(exhibit.song || exhibit.mood) && (
            <div className="museum__meta">
              {exhibit.song && <span className="museum__meta-item">🎵 {exhibit.song}</span>}
              {exhibit.mood && <span className="museum__meta-item">☁️ {exhibit.mood}</span>}
            </div>
          )}
        </div>

        <nav className="museum__constellation-nav" aria-label="Discovered memories">
          <button
            className="museum__nav-arrow"
            onClick={() => go(-1)}
            aria-label="Previous memory"
          >
            ‹
          </button>
          <div className="museum__tokens" role="tablist">
            {exhibits.map((ex, i) => (
              <button
                key={ex.id || i}
                className={`museum__token ${i === index ? 'is-active' : ''}`}
                onClick={() => setIndex(i)}
                aria-label={`Memory ${i + 1}: ${ex.title || 'Found moment'}`}
                aria-current={i === index ? 'true' : undefined}
              >
                <span className="museum__token-dot" />
                <span className="museum__token-num">{String(i + 1).padStart(2, '0')}</span>
              </button>
            ))}
          </div>
          <button
            className="museum__nav-arrow"
            onClick={() => go(1)}
            aria-label="Next memory"
          >
            ›
          </button>
        </nav>
      </div>

      {viewerOpen && (
        <PhotoViewer
          images={images}
          index={index}
          onChange={setIndex}
          onClose={() => setViewerOpen(false)}
        />
      )}
    </div>
  )
}

function isVideoPath(path) {
  return typeof path === 'string' && /\\.mp4(?:$|[?#])/i.test(path)
}

function PolaroidPhoto({ image, video, alt, caption, rotate, onClick }) {
  const ref = useRef(null)
  const reduced = useReducedMotion()

  function onMove(e) {
    if (reduced || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    ref.current.style.setProperty('--tilt-x', `${(-y * 7).toFixed(2)}deg`)
    ref.current.style.setProperty('--tilt-y', `${(x * 7).toFixed(2)}deg`)
  }
  function onLeave() {
    if (!ref.current) return
    ref.current.style.setProperty('--tilt-x', '0deg')
    ref.current.style.setProperty('--tilt-y', '0deg')
  }

  return (
    <div className="museum__polaroid-wrap">
      <button
        ref={ref}
        className="museum__photo-btn polaroid"
        style={{ '--rotate': `${rotate}deg` }}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        onClick={onClick}
        aria-label={`View photo: ${alt}`}
      >
        {video ? (
          <video
            controls
            playsInline
            preload="auto"
            controlsList="nodownload"
            aria-label={alt || 'Video from this exhibit'}
            style={{ width: '100%', height: 'auto', display: 'block' }}
          >
            <source src={assetUrl(video)} type="video/mp4" />
            Your browser does not support MP4 video playback.
          </video>
        ) : (
          <SmartImage src={image} alt={alt} label="A photo from this exhibit" />
        )}
        {caption && <span className="polaroid__caption">{caption}</span>}
      </button>
    </div>
  )
}
