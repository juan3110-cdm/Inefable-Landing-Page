import { useEffect, useState } from 'react'
import { tokens } from '../styles/tokens'

interface ServiceFlowProps {
  items?: string[]
  target?: string
}

const CARD_W = 130
const CARD_TOP = 20
const CARD_BOTTOM = 150
const GAP = 65
const MARGIN = 40
const JOIN_Y = 250
const VIEW_H = 330

/* ============================================================
   DIAGRAMA DE NODOS  (N servicios -> tu negocio)
   Posiciones y conectores se calculan a partir de items.length,
   así que soporta cualquier cantidad de nodos, no solo 3.
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

  const n = items.length
  const totalW = n * CARD_W + (n - 1) * GAP
  const viewW = MARGIN * 2 + totalW
  const centerX = viewW / 2
  const pillX = centerX - 100
  const xs = Array.from({ length: n }, (_, i) => MARGIN + i * (CARD_W + GAP))

  const connectorPath = (cardX: number) => {
    const cx = cardX + 65 // label-center x, where the connector visually anchors
    if (Math.abs(cx - centerX) < 1) {
      return `M${cx},${CARD_BOTTOM} L${cx},${JOIN_Y}`
    }
    const dir = cx < centerX ? 1 : -1
    const sweep = dir > 0 ? 0 : 1
    return `M${cx},${CARD_BOTTOM} L${cx},${JOIN_Y - 15} A15,15 0 0 ${sweep} ${cx + dir * 15},${JOIN_Y} L${centerX},${JOIN_Y}`
  }

  return (
    <div className="mx-auto w-full max-w-[560px] min-w-[320px] overflow-x-auto rounded-3xl border border-border bg-surface p-6">
      <svg viewBox={`0 0 ${viewW} ${VIEW_H}`} style={{ width: '100%', display: 'block' }}>
        {/* tarjetas */}
        {xs.map((x, i) => (
          <g key={i}>
            <path d={`M${x},${CARD_TOP} L${x + 100},${CARD_TOP} L${x + 130},50 L${x + 130},${CARD_BOTTOM} L${x},${CARD_BOTTOM} Z`} fill="url(#cardGrad)" stroke={tokens.border} />
            <path d={`M${x + 100},${CARD_TOP} L${x + 130},50 L${x + 100},50 Z`} fill="rgba(255,255,255,0.10)" />
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
        {xs.map((x, i) => (
          <g key={i}>
            <path d={connectorPath(x)} stroke="rgba(255,255,255,0.14)" strokeWidth="1" fill="none" />
            <path
              className="flow-beam"
              d={connectorPath(x)}
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
        <path d={`M${centerX},${JOIN_Y} L${centerX},278`} stroke="rgba(255,255,255,0.14)" strokeWidth="1" />
        <rect x={centerX - 6} y={JOIN_Y - 6} width="12" height="12" rx="3" fill="#1c1c20" stroke={tokens.border} />

        {/* pill final */}
        <rect x={pillX} y="278" width="200" height="44" rx="22" fill={tokens.surface2} stroke={tokens.border} />
        <circle cx={pillX + 28} cy="300" r="11" fill={tokens.accent} />
        <path d={`M${pillX + 28},295 v10 M${pillX + 23},300 h10`} stroke="#fff" strokeWidth="2" strokeLinecap="round" />
        <text x={pillX + 52} y="305" fill="#fff" fontSize="15" fontFamily="system-ui, sans-serif">
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
