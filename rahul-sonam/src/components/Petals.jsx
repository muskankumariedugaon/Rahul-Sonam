import { useMemo } from 'react'

export default function Petals() {
  const petals = useMemo(() => Array.from({ length: 34 }, (_, i) => ({
    left: `${(i * 29) % 101}%`,
    delay: `${-(i * 0.72) % 12}s`,
    duration: `${7 + (i % 6)}s`,
    size: `${13 + (i % 5) * 4}px`,
    rotate: `${(i * 47) % 360}deg`,
    pink: i % 3 !== 0,
  })), [])
  return <div className="petal-layer" aria-hidden="true">
    {petals.map((p, i) => <span key={i} className={`petal ${p.pink ? '' : 'petal-light'}`} style={{left:p.left, animationDelay:p.delay, animationDuration:p.duration, width:p.size, height:`${Number.parseInt(p.size)*0.72}px`, transform:`rotate(${p.rotate})`}} />)}
  </div>
}
