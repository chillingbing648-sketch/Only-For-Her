import { useEffect, useRef, useState } from 'react'
import { giftData } from '../../data/giftData'
import SmartImage from '../UI/SmartImage'
import { EmptySection } from '../Timeline/Timeline'
import { PlayIcon, PauseIcon } from '../UI/PlaybackIcons'
import { assetUrl } from '../../utils/assetUrl'

export default function Soundtrack() {
  const songs = giftData.songs
  const [playingId, setPlayingId] = useState(null)

  if (!songs?.length) return <EmptySection title="Songs That Feel Like Us" />

  return (
    <div className={`screen soundtrack ${playingId !== null ? 'soundtrack--resonating' : ''}`}>
      {/* Environmental acoustic starlight resonance */}
      <div className="soundtrack__ambient-aura" aria-hidden="true" />

      <div className="screen__inner">
        <header className="soundtrack__header">
          <p className="eyebrow soundtrack__eyebrow">Resonance</p>
          <h1 className="heading-l soundtrack__main-heading">Songs That Feel Like Us</h1>
          <p className="body-text body-text--soft soundtrack__sub">
            The melodies tied to our time together. Touch a disc to listen.
          </p>
        </header>

        <ul className="soundtrack__list">
          {songs.map((song, i) => (
            <SongRow
              key={i}
              index={i}
              song={song}
              delay={i * 70}
              isPlayingGlobal={playingId === i}
              onPlayStateChange={(isPlaying) => setPlayingId(isPlaying ? i : null)}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}

function formatTime(seconds) {
  if (!Number.isFinite(seconds)) return '0:00'
  const m = Math.floor(seconds / 60)
  const s = Math.floor(seconds % 60)
  return `${m}:${String(s).padStart(2, '0')}`
}

function SongRow({ song, delay, isPlayingGlobal, onPlayStateChange }) {
  const audioRef = useRef(null)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [available, setAvailable] = useState(true)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    const onTime = () => setCurrentTime(audio.currentTime)
    const onMeta = () => setDuration(audio.duration || 0)
    audio.addEventListener('timeupdate', onTime)
    audio.addEventListener('loadedmetadata', onMeta)
    return () => {
      audio.removeEventListener('timeupdate', onTime)
      audio.removeEventListener('loadedmetadata', onMeta)
    }
  }, [])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    if (!isPlayingGlobal && !audio.paused) {
      audio.pause()
    }
  }, [isPlayingGlobal])

  function toggle() {
    const audio = audioRef.current
    if (!audio) return
    if (isPlayingGlobal) {
      audio.pause()
      onPlayStateChange(false)
    } else {
      audio
        .play()
        .then(() => onPlayStateChange(true))
        .catch(() => setAvailable(false))
    }
  }

  function seek(e) {
    const audio = audioRef.current
    if (!audio || !duration) return
    audio.currentTime = Number(e.target.value)
    setCurrentTime(Number(e.target.value))
  }

  const progress = duration ? (currentTime / duration) * 100 : 0

  return (
    <li
      className={`soundtrack__row ${isPlayingGlobal ? 'is-playing' : ''}`}
      style={{ '--enter-delay': `${delay}ms` }}
    >
      <button
        className={`soundtrack__disc-btn ${isPlayingGlobal ? 'is-spinning' : ''}`}
        onClick={toggle}
        aria-label={isPlayingGlobal ? `Pause ${song.title}` : `Play ${song.title}`}
      >
        <span className="soundtrack__disc-groove">
          <SmartImage src={assetUrl(song.cover)} alt="" className="soundtrack__cover" label="♪" />
        </span>
        <span className="soundtrack__disc-center" aria-hidden="true" />
      </button>

      <div className="soundtrack__meta">
        <div className="soundtrack__title-row">
          <p className="soundtrack__title">{song.title}</p>
          <span className="soundtrack__artist">{song.artist}</span>
        </div>

        {song.why && <p className="soundtrack__why">"{song.why}"</p>}

        {song.src && available && (
          <div className="soundtrack__player">
            <audio
              ref={audioRef}
              src={assetUrl(song.src)}
              onEnded={() => onPlayStateChange(false)}
              onError={() => setAvailable(false)}
              preload="metadata"
            />
            <button
              className="icon-btn soundtrack__toggle"
              onClick={toggle}
              aria-label={isPlayingGlobal ? 'Pause' : 'Play'}
            >
              {isPlayingGlobal ? <PauseIcon size={13} /> : <PlayIcon size={13} />}
            </button>
            <span className="soundtrack__time">{formatTime(currentTime)}</span>
            <input
              type="range"
              min="0"
              max={duration || 0}
              step="0.1"
              value={currentTime}
              onChange={seek}
              aria-label={`Seek in ${song.title}`}
              className="soundtrack__seek"
              style={{ '--progress': `${progress}%` }}
            />
            <span className="soundtrack__time">{formatTime(duration)}</span>
          </div>
        )}

        {song.link && (
          <div className="soundtrack__meta-row">
            <a className="soundtrack__external-link" href={song.link} target="_blank" rel="noreferrer">
              Listen on streaming ↗
            </a>
          </div>
        )}
      </div>
    </li>
  )
}
