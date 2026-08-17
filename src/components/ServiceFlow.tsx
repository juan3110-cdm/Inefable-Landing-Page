import { useEffect, useState } from 'react'
import { tokens } from '../styles/tokens'

interface ServiceFlowProps {
  items?: string[]
  target?: string
}

/* ============================================================
   DIAGRAMA DE NODOS  (3 servicios -> tu negocio)
   Con línea de luz que viaja y check verde en secuencia.
   ============================================================ */
export default function ServiceFlow({ items = ['Marca', 'Web', 'Automatización'], target = 'Tu negocio' }: ServiceFlowProps) {
  const [active, setActive] = useState(0)
  const [done, setDone] = useState(-1)

  useEffect(() => {
    const t = setInterval(() => {
      setDone((d) => (d + 1) % items.length)
      setActive((a) => (a + 1) % items.length)
    }, 2000)
    return () => clearInterval(t)
  }, [items.length])

  const paths = [
    'M105,150 L105,235 A15,15 0 0 0 120,250 L300,250',
    'M300,150 L300,250',
    'M495,150 L495,235 A15,15 0 0 1 480,250 L300,250',
  ]

  return (
    <div className="min-w-[320px] overflow-x-auto rounded-3xl border border-flow-border bg-flow-surface p-6">
      <svg viewBox="0 0 600 330" style={{ width: '100%', display: 'block' }}>
        {/* tarjetas */}
        {[40, 235, 430].map((x, i) => (
          <g key={i}>
            <path d={`M${x},20 L${x + 100},20 L${x + 130},50 L${x + 130},150 L${x},150 Z`} fill="url(#cardGrad)" stroke={tokens.border} />
            <path d={`M${x + 100},20 L${x + 130},50 L${x + 100},50 Z`} fill="rgba(255,255,255,0.10)" />
            {/* indicador de estado */}
            {active === i && done !== i && (
              <circle
                className="flow-spin"
                cx={x + 100}
                cy={80}
                r="11"
                fill="none"
                stroke={tokens.accent}
                strokeWidth="2.5"
                strokeDasharray="34 70"
                style={{ transformOrigin: `${x + 100}px 80px` }}
              />
            )}
            {done === i && (
              <g className="flow-pop">
                <circle cx={x + 100} cy={80} r="12" fill={tokens.ok} />
                <path d={`M${x + 94},80 l4,4 l8,-8`} stroke="#062012" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </g>
            )}
            {/* etiqueta */}
            <rect x={x + 8} y={112} width={114} height={30} rx={8} fill={tokens.surface2} stroke={tokens.border} />
            <text x={x + 65} y={131} textAnchor="middle" fill="#fff" fontSize="13" fontFamily="system-ui, sans-serif">
              {items[i]}
            </text>
          </g>
        ))}

        {/* conectores */}
        {paths.map((d, i) => (
          <g key={i}>
            <path d={d} stroke="rgba(255,255,255,0.14)" strokeWidth="1" fill="none" />
            <path
              className="flow-beam"
              d={d}
              stroke={tokens.accentGlow}
              strokeWidth="1.5"
              fill="none"
              strokeDasharray="45 600"
              style={{
                filter: `drop-shadow(0 0 5px ${tokens.accentGlow})`,
                animationDelay: `${i * 0.5}s`,
              }}
            />
          </g>
        ))}
        <path d="M300,250 L300,278" stroke="rgba(255,255,255,0.14)" strokeWidth="1" />
        <rect x="294" y="244" width="12" height="12" rx="3" fill="#1c1c20" stroke={tokens.border} />

        {/* pill final */}
        <rect x="200" y="278" width="200" height="44" rx="22" fill={tokens.surface2} stroke={tokens.border} />
        <circle cx="228" cy="300" r="11" fill={tokens.accent} />
        <path d="M228,295 v10 M223,300 h10" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
        <text x="252" y="305" fill="#fff" fontSize="15" fontFamily="system-ui, sans-serif">
          {target}
        </text>

        <defs>
          <linearGradient id="cardGrad" x1="0" y1="0" x2="0.6" y2="1">
            <stop offset="0%" stopColor="#1a1a1d" />
            <stop offset="100%" stopColor="#0c0c0e" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}
