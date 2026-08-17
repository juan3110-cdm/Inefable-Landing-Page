import { useTranslation } from '../hooks/useTranslation'
import RevealText from './RevealText'
import ServiceFlow from './ServiceFlow'
import StatCard from './StatCard'

export default function GrowthSection() {
  const { t } = useTranslation()
  const g = t.growth

  return (
    <section style={{ padding: '40px 6vw 100px', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: 1080, margin: '0 auto' }}>
        <RevealText size={38}>{g.titleA}</RevealText>
        <div style={{ height: 32 }} />
        <ServiceFlow items={g.flowItems} target={g.flowTarget} />

        <div style={{ height: 64 }} />

        <RevealText size={32}>{g.titleB}</RevealText>
        <div style={{ height: 28 }} />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {g.stats.map((s) => (
            <StatCard key={s.label} value={s.value} suffix={s.suffix} label={s.label} desc={s.desc} />
          ))}
        </div>
      </div>
    </section>
  )
}
