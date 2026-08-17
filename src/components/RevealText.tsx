import { useEffect, useRef, useState } from 'react'

interface RevealTextProps {
  children: string
  size?: number
  weight?: number
  align?: 'left' | 'center' | 'right'
}

// Static map so Tailwind's JIT scanner can see the full class names
// (interpolating `text-${align}` at runtime would not be picked up at build time).
const ALIGN_CLASS: Record<NonNullable<RevealTextProps['align']>, string> = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
}

/* ============================================================
   TEXTO QUE SE ENCIENDE PALABRA A PALABRA AL HACER SCROLL
   Uso:  <RevealText>Tu titular aquí</RevealText>
   ============================================================ */
export default function RevealText({ children, size = 44, weight = 800, align = 'center' }: RevealTextProps) {
  const ref = useRef<HTMLHeadingElement>(null)
  const [p, setP] = useState(0) // progreso 0 -> 1

  useEffect(() => {
    const onScroll = () => {
      const el = ref.current
      if (!el) return
      const r = el.getBoundingClientRect()
      const vh = window.innerHeight
      // empieza cuando entra por abajo, termina cuando llega a 1/3 de pantalla
      const raw = (vh * 0.85 - r.top) / (vh * 0.5)
      setP(Math.max(0, Math.min(1, raw)))
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  const words = children.split(' ')

  // fluid size: scales with viewport, clamped between ~65% and 100% of the requested size
  const fluidSize = `clamp(${(size * 0.65).toFixed(1)}px, ${(size * 0.55).toFixed(2)}px + 3vw, ${size}px)`

  return (
    <h2
      ref={ref}
      className={`m-0 leading-[1.12] tracking-[-0.02em] ${ALIGN_CLASS[align]}`}
      style={{ fontSize: fluidSize, fontWeight: weight }}
    >
      {words.map((w, i) => {
        // cada palabra se enciende un poco después que la anterior
        const start = i / (words.length + 2)
        const local = Math.max(0, Math.min(1, (p - start) * 4))
        const light = 18 + local * 82 // de gris 18% a blanco
        return (
          <span key={i} className="transition-colors duration-[120ms] ease-linear" style={{ color: `rgba(255,255,255,${(light / 100).toFixed(3)})` }}>
            {w}{' '}
          </span>
        )
      })}
    </h2>
  )
}
