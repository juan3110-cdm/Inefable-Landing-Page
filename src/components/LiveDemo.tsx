import { useEffect, useRef, useState } from 'react'
import { useTranslation } from '../hooks/useTranslation'
import { useReveal } from '../hooks/useReveal'

type ActiveDemo = 'idle' | 'call' | 'lead' | 'campaign'

const WEEKS = 8
const CPA_START = 24.5
const CPA_END = 9.2

export default function LiveDemo() {
  const { t } = useTranslation()
  const s = t.live
  const heading = useReveal<HTMLDivElement>()
  const panel = useReveal<HTMLDivElement>()

  const [active, setActive] = useState<ActiveDemo>('idle')
  const [callStep, setCallStep] = useState(0)
  const [callSeconds, setCallSeconds] = useState(0)
  const [leadStep, setLeadStep] = useState(0)
  const [campaignOn, setCampaignOn] = useState(false)

  const timers = useRef<ReturnType<typeof setTimeout>[]>([])
  const callInterval = useRef<ReturnType<typeof setInterval> | null>(null)

  const clearTimers = () => {
    timers.current.forEach(clearTimeout)
    timers.current = []
    if (callInterval.current) clearInterval(callInterval.current)
  }

  useEffect(() => clearTimers, [])

  const triggerCall = () => {
    clearTimers()
    setActive('call')
    setCallStep(0)
    setCallSeconds(0)
    callInterval.current = setInterval(() => setCallSeconds((v) => v + 1), 1000)
    ;[500, 1600, 2900].forEach((delay, i) => {
      timers.current.push(setTimeout(() => setCallStep(i + 1), delay))
    })
    timers.current.push(setTimeout(() => setCallStep(4), 4200))
  }

  const triggerLead = () => {
    clearTimers()
    setActive('lead')
    setLeadStep(0)
    timers.current.push(setTimeout(() => setLeadStep(1), 500))
    timers.current.push(setTimeout(() => setLeadStep(2), 1800))
    timers.current.push(setTimeout(() => setLeadStep(3), 3100))
  }

  const triggerCampaign = () => {
    clearTimers()
    setActive('campaign')
    setCampaignOn(true)
  }

  const triggers = { call: triggerCall, lead: triggerLead, campaign: triggerCampaign }

  const mm = String(Math.floor(callSeconds / 60)).padStart(2, '0')
  const ss = String(callSeconds % 60).padStart(2, '0')
  const bubbles = s.call.bubbles.slice(0, callStep)
  const callBooked = callStep >= 4

  const cpaBars = Array.from({ length: WEEKS }, (_, i) => {
    const val = campaignOn ? CPA_START - (CPA_START - CPA_END) * (i / (WEEKS - 1)) : CPA_START
    return {
      height: Math.round((val / 26) * 70),
      delay: i * 0.05,
      isLast: campaignOn && i === WEEKS - 1,
    }
  })

  return (
    <section style={{ padding: '20px 6vw 100px', position: 'relative', zIndex: 1 }}>
      <div ref={heading.ref} className={heading.className} style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 44px' }}>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            background: 'rgba(168,133,255,.12)',
            border: '1px solid rgba(168,133,255,.3)',
            color: 'var(--color-accent-purple-light)',
            fontSize: 12.5,
            fontWeight: 700,
            padding: '6px 15px',
            borderRadius: 100,
            marginBottom: 22,
          }}
        >
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--color-accent-purple-light)', animation: 'pulseDot 2s ease-in-out infinite' }} />
          {s.eyebrow}
        </div>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(26px,4.5vw,42px)', fontWeight: 800, lineHeight: 1.15, letterSpacing: '-.01em', margin: '0 0 14px' }}>
          {s.titleA}
          <br />
          <span style={{ background: 'var(--color-accent-gradient-2)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>{s.titleB}</span>
        </h2>
        <p style={{ color: 'var(--color-muted)', fontSize: 15, margin: 0 }}>{s.subtitle}</p>
      </div>

      <div ref={panel.ref} className={panel.className} style={{ maxWidth: 1080, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', border: '1px solid var(--color-border-soft)', borderBottom: 'none' }}>
          {s.tabs.map((tab, i) => {
            const isActive = active === tab.key
            return (
              <button
                key={tab.key}
                type="button"
                onClick={triggers[tab.key]}
                style={{
                  background: isActive ? 'rgba(168,85,247,.1)' : 'transparent',
                  border: 'none',
                  borderRight: i < s.tabs.length - 1 ? '1px solid var(--color-border-soft)' : 'none',
                  color: 'var(--color-text)',
                  padding: 20,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 4,
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'background .2s',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) e.currentTarget.style.background = 'var(--color-surface-hover)'
                }}
                onMouseLeave={(e) => {
                  if (!isActive) e.currentTarget.style.background = 'transparent'
                }}
              >
                <span style={{ fontSize: 14, fontWeight: 700 }}>
                  {tab.icon} {tab.label}
                </span>
                <span style={{ fontSize: 11.5, color: 'var(--color-faint)' }}>{tab.sublabel}</span>
              </button>
            )
          })}
        </div>

        <div
          style={{
            border: '1px solid var(--color-border-soft)',
            minHeight: 320,
            padding: 36,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          {active === 'call' && (
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 22 }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#4ade80', animation: 'pulseDot 1s ease-in-out infinite' }} />
                <span style={{ fontFamily: 'monospace', fontSize: 11, color: '#4ade80', letterSpacing: '.08em', textTransform: 'uppercase' }}>
                  {s.call.liveLabel} · {mm}:{ss}
                </span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 32 }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10, minHeight: 120 }}>
                  {bubbles.map((b, i) => {
                    const isAI = b.speaker === s.call.bubbles[0].speaker
                    return (
                      <div
                        key={i}
                        style={{
                          alignSelf: isAI ? 'flex-start' : 'flex-end',
                          maxWidth: '80%',
                          background: isAI ? 'rgba(168,85,247,.1)' : 'var(--color-surface)',
                          border: `1px solid ${isAI ? 'rgba(168,85,247,.3)' : 'var(--color-border)'}`,
                          borderRadius: 10,
                          padding: '9px 13px',
                        }}
                      >
                        <div style={{ fontFamily: 'monospace', fontSize: 9.5, color: 'var(--color-faint)', letterSpacing: '.06em', textTransform: 'uppercase', marginBottom: 3 }}>
                          {b.speaker}
                        </div>
                        <div style={{ fontSize: 13.5, color: 'var(--color-text)' }}>{b.text}</div>
                      </div>
                    )
                  })}
                </div>
                <div style={{ borderLeft: '1px solid var(--color-border-soft)', paddingLeft: 28 }}>
                  <div style={{ fontFamily: 'monospace', fontSize: 11, color: 'var(--color-faint)', letterSpacing: '.08em', textTransform: 'uppercase', marginBottom: 12 }}>
                    {s.call.calendarLabel}
                  </div>
                  {callBooked ? (
                    <>
                      <div style={{ background: 'rgba(168,85,247,.12)', border: '1px solid rgba(168,85,247,.4)', borderRadius: 4, padding: 14 }}>
                        <div style={{ fontSize: 13, color: 'var(--color-accent-purple-light)', fontWeight: 700 }}>{s.call.bookedDay}</div>
                        <div style={{ fontSize: 13, color: 'var(--color-text)', marginTop: 4 }}>{s.call.bookedConfirm}</div>
                      </div>
                      <div style={{ fontSize: 12, color: 'var(--color-faint)', marginTop: 12 }}>{s.call.missedCalls}</div>
                    </>
                  ) : (
                    <div style={{ fontSize: 12.5, color: 'var(--color-subtle)' }}>{s.call.waiting}</div>
                  )}
                </div>
              </div>
            </div>
          )}

          {active === 'lead' && (
            <div>
              <div style={{ fontSize: 12.5, color: 'var(--color-faint)', marginBottom: 18 }}>{s.lead.intro}</div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16 }}>
                {s.lead.columns.map((col, i) => {
                  const show = i === 0 ? leadStep >= 1 && leadStep < 2 : i === 1 ? leadStep >= 2 && leadStep < 3 : leadStep >= 3
                  return (
                    <div key={col.label} style={{ border: '1px solid var(--color-border-soft)', borderRadius: 4, padding: 16, minHeight: 110 }}>
                      <div style={{ fontFamily: 'monospace', fontSize: 10, color: 'var(--color-faint)', letterSpacing: '.08em', textTransform: 'uppercase', marginBottom: 10 }}>
                        {col.label}
                      </div>
                      {show && (
                        <div style={{ background: 'rgba(168,85,247,.12)', border: '1px solid rgba(168,85,247,.4)', borderRadius: 4, padding: '10px 12px' }}>
                          <div style={{ fontSize: 13, color: 'var(--color-text)', fontWeight: 700 }}>{s.lead.leadName}</div>
                          <div style={{ fontSize: 11, color: 'var(--color-muted)', marginTop: 2 }}>{col.status}</div>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          )}

          {active === 'campaign' && (
            <div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24, marginBottom: 26 }}>
                <div>
                  <div style={{ fontFamily: 'monospace', fontSize: 10.5, color: 'var(--color-faint)', letterSpacing: '.08em', textTransform: 'uppercase', marginBottom: 6 }}>
                    {s.campaign.cpaLabel}
                  </div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 800, color: 'var(--color-accent-purple-light)' }}>
                    {campaignOn ? s.campaign.cpaAfter : s.campaign.cpaBefore}
                  </div>
                </div>
                <div>
                  <div style={{ fontFamily: 'monospace', fontSize: 10.5, color: 'var(--color-faint)', letterSpacing: '.08em', textTransform: 'uppercase', marginBottom: 6 }}>
                    {s.campaign.leadsLabel}
                  </div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 800, color: 'var(--color-text)' }}>
                    {campaignOn ? s.campaign.leadsAfter : s.campaign.leadsBefore}
                  </div>
                </div>
                <div>
                  <div style={{ fontFamily: 'monospace', fontSize: 10.5, color: 'var(--color-faint)', letterSpacing: '.08em', textTransform: 'uppercase', marginBottom: 6 }}>
                    {s.campaign.spendLabel}
                  </div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 800, color: '#4ade80' }}>
                    {campaignOn ? s.campaign.spendAfter : s.campaign.spendBefore}
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 6, alignItems: 'flex-end', height: 70 }}>
                {cpaBars.map((bar, i) => (
                  <div
                    key={i}
                    style={{
                      flex: 1,
                      background: bar.isLast ? '#4ade80' : 'var(--color-accent-purple)',
                      borderRadius: '2px 2px 0 0',
                      height: bar.height,
                      transition: `height 1s cubic-bezier(.16,1,.3,1) ${bar.delay}s`,
                    }}
                  />
                ))}
              </div>
              <div style={{ fontSize: 11.5, color: 'var(--color-faint)', marginTop: 8 }}>{s.campaign.chartCaption}</div>
            </div>
          )}

          {active === 'idle' && <p style={{ color: 'var(--color-subtle)', fontSize: 14, textAlign: 'center', margin: 0 }}>{s.idleHint}</p>}
        </div>
      </div>
    </section>
  )
}
