import { useEffect, useRef, useState } from 'react'

interface StatCardProps {
  value: number
  suffix?: string
  label: string
  desc: string
}

/* ============================================================
   TARJETA DE MÉTRICA con contador y cuadrícula de fondo
   ============================================================ */
export default function StatCard({ value, suffix = '', label, desc }: StatCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [n, setN] = useState(0)
  const [seen, setSeen] = useState(false)

  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !seen) setSeen(true)
      },
      { threshold: 0.4 },
    )
    if (ref.current) io.observe(ref.current)
    return () => io.disconnect()
  }, [seen])

  useEffect(() => {
    if (!seen) return
    const t0 = performance.now()
    const dur = 1600
    let raf: number
    const tick = (t: number) => {
      const k = Math.min(1, (t - t0) / dur)
      const eased = 1 - Math.pow(1 - k, 3)
      setN(Math.round(value * eased))
      if (k < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [seen, value])

  return (
    <div
      ref={ref}
      className="stat-grid-bg relative overflow-hidden rounded-3xl border border-border bg-surface pt-8 px-6 pb-6 text-center"
    >
      <div
        className="text-[44px] font-extrabold leading-none tracking-[-0.03em]"
        style={{
          background: 'linear-gradient(180deg,#fff 35%,rgba(255,255,255,.35) 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        {n}
        {suffix}
      </div>
      <div className="mt-2 font-bold">{label}</div>
      <div className="mt-2 text-sm leading-normal text-muted">{desc}</div>
    </div>
  )
}
