import { useMemo } from 'react'
import './SpaceBackground.css'

// Deterministic pseudo-random so the layout doesn't jump on every re-render
function seeded(seed) {
  let s = seed
  return () => {
    s = (s * 9301 + 49297) % 233280
    return s / 233280
  }
}

export default function SpaceBackground() {
  const stars = useMemo(() => {
    const rand = seeded(42)
    const arr = []
    for (let i = 0; i < 140; i++) {
      const size = rand() < 0.85 ? 1 + rand() * 1.5 : 2 + rand() * 1.8
      arr.push({
        id: i,
        top: rand() * 100,
        left: rand() * 100,
        size,
        duration: 2.5 + rand() * 4,
        delay: rand() * 6,
        opacity: 0.35 + rand() * 0.65,
      })
    }
    return arr
  }, [])

  const shootingStars = useMemo(
    () => [
      { top: '8%', left: '65%', delay: '0s', duration: '5.5s' },
      { top: '22%', left: '15%', delay: '3.2s', duration: '6.5s' },
      { top: '55%', left: '80%', delay: '7s', duration: '5.8s' },
      { top: '70%', left: '5%', delay: '11s', duration: '6.2s' },
    ],
    []
  )

  return (
    <div className="space-bg" aria-hidden="true">
      <div className="planet planet-one">
        <span className="planet-ring" />
      </div>
      <div className="planet planet-two" />
      <div className="nebula-glow" />

      <div className="star-field">
        {stars.map((s) => (
          <span
            key={s.id}
            className="star"
            style={{
              top: `${s.top}%`,
              left: `${s.left}%`,
              width: `${s.size}px`,
              height: `${s.size}px`,
              '--twinkle-duration': `${s.duration}s`,
              '--twinkle-delay': `${s.delay}s`,
              '--star-opacity': s.opacity,
            }}
          />
        ))}
      </div>

      {shootingStars.map((s, i) => (
        <span
          key={i}
          className="shooting-star"
          style={{
            top: s.top,
            left: s.left,
            animationDelay: s.delay,
            animationDuration: s.duration,
          }}
        />
      ))}
    </div>
  )
}
