import { useEffect, useRef, useState } from 'react'
import { useTranslation } from '../hooks/useTranslation'

interface ChatMessage {
  role: 'user' | 'assistant'
  content: string
}

const MAX_TEXTAREA_HEIGHT = 120

export default function ChatWidget() {
  const { t } = useTranslation()
  const c = t.chat

  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [input, setInput] = useState('')
  const [sending, setSending] = useState(false)

  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (open) textareaRef.current?.focus()
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ block: 'end' })
  }, [messages, sending])

  const resizeTextarea = () => {
    const el = textareaRef.current
    if (!el) return
    el.style.height = 'auto'
    el.style.height = `${Math.min(el.scrollHeight, MAX_TEXTAREA_HEIGHT)}px`
  }

  const send = async (text: string) => {
    const trimmed = text.trim()
    if (!trimmed || sending) return

    const nextMessages: ChatMessage[] = [...messages, { role: 'user', content: trimmed }]
    setMessages(nextMessages)
    setInput('')
    requestAnimationFrame(resizeTextarea)
    setSending(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: nextMessages }),
      })
      if (!res.ok) throw new Error('Request failed')
      const data = (await res.json()) as { reply?: string }
      setMessages((prev) => [...prev, { role: 'assistant', content: data.reply || c.errorMessage }])
    } catch {
      setMessages((prev) => [...prev, { role: 'assistant', content: c.errorMessage }])
    } finally {
      setSending(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      send(input)
    }
  }

  return (
    <>
      <button
        type="button"
        aria-label={open ? c.closeLabel : c.openLabel}
        aria-expanded={open}
        aria-controls="inefable-chat-panel"
        onClick={() => setOpen((v) => !v)}
        className="chat-bubble"
        style={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          width: 60,
          height: 60,
          borderRadius: '50%',
          background: 'var(--color-accent-gradient)',
          border: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: '0 12px 32px rgba(0,0,0,.45)',
          zIndex: 100,
        }}
      >
        {open ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round">
            <path d="M6 6l12 12M18 6 6 18" />
          </svg>
        ) : (
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5c-1.35 0-2.62-.32-3.73-.9L4 21l1.9-4.77A8.5 8.5 0 1 1 21 11.5z" />
          </svg>
        )}
      </button>

      {open && (
        <div
          id="inefable-chat-panel"
          role="dialog"
          aria-modal="true"
          aria-label={c.title}
          className="chat-panel"
          style={{
            position: 'fixed',
            bottom: 96,
            right: 24,
            width: 384,
            maxWidth: 'calc(100vw - 32px)',
            height: 520,
            maxHeight: 'calc(100vh - 140px)',
            background: 'var(--color-bg)',
            border: '1px solid var(--color-border)',
            borderRadius: 20,
            boxShadow: '0 24px 60px rgba(0,0,0,.55)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            zIndex: 100,
          }}
        >
          <div
            style={{
              padding: '16px 18px',
              borderBottom: '1px solid var(--color-border-soft)',
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              flexShrink: 0,
            }}
          >
            <div
              style={{
                width: 34,
                height: 34,
                borderRadius: '50%',
                background: 'var(--color-accent-gradient)',
                flexShrink: 0,
              }}
            />
            <div>
              <div style={{ fontSize: 14, fontWeight: 700 }}>{c.title}</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    background: '#3ac478',
                    animation: 'pulseDot 2s ease-in-out infinite',
                  }}
                />
                <span style={{ fontSize: 11, color: '#8ee6ae', fontWeight: 600 }}>{c.status}</span>
              </div>
            </div>
          </div>

          <div
            role="log"
            aria-live="polite"
            style={{
              flex: 1,
              overflowY: 'auto',
              padding: '18px',
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
            }}
          >
            {messages.length === 0 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 4 }}>
                {c.starters.map((starter) => (
                  <button
                    key={starter}
                    type="button"
                    onClick={() => send(starter)}
                    style={{
                      textAlign: 'left',
                      background: 'var(--color-surface)',
                      border: '1px solid var(--color-border-soft)',
                      color: 'var(--color-text)',
                      borderRadius: 12,
                      padding: '10px 14px',
                      fontSize: 13.5,
                      cursor: 'pointer',
                    }}
                  >
                    {starter}
                  </button>
                ))}
              </div>
            )}

            {messages.map((m, i) => (
              <div
                key={i}
                style={{
                  alignSelf: m.role === 'user' ? 'flex-end' : 'flex-start',
                  maxWidth: '85%',
                  background: m.role === 'user' ? 'var(--color-accent-gradient)' : 'var(--color-surface)',
                  border: m.role === 'user' ? 'none' : '1px solid var(--color-border-soft)',
                  color: '#fff',
                  borderRadius: 14,
                  padding: '10px 14px',
                  fontSize: 14,
                  lineHeight: 1.5,
                  whiteSpace: 'pre-wrap',
                }}
              >
                {m.content}
              </div>
            ))}

            {sending && (
              <div
                style={{
                  alignSelf: 'flex-start',
                  background: 'var(--color-surface)',
                  border: '1px solid var(--color-border-soft)',
                  borderRadius: 14,
                  padding: '12px 16px',
                  display: 'flex',
                  gap: 4,
                }}
              >
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: '50%',
                      background: 'var(--color-subtle)',
                      animation: 'pulseDot 1.2s ease-in-out infinite',
                      animationDelay: `${i * 0.15}s`,
                    }}
                  />
                ))}
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div style={{ padding: 14, borderTop: '1px solid var(--color-border-soft)', display: 'flex', gap: 10, flexShrink: 0 }}>
            <textarea
              ref={textareaRef}
              rows={1}
              value={input}
              aria-label={c.placeholder}
              placeholder={c.placeholder}
              onChange={(e) => {
                setInput(e.target.value)
                resizeTextarea()
              }}
              onKeyDown={handleKeyDown}
              style={{
                flex: 1,
                resize: 'none',
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border-soft)',
                borderRadius: 12,
                padding: '10px 12px',
                color: 'var(--color-text)',
                fontSize: 14,
                fontFamily: 'inherit',
                maxHeight: MAX_TEXTAREA_HEIGHT,
              }}
            />
            <button
              type="button"
              aria-label={c.send}
              onClick={() => send(input)}
              disabled={sending || !input.trim()}
              style={{
                background: 'var(--color-accent-gradient)',
                border: 'none',
                borderRadius: 12,
                width: 42,
                flexShrink: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                opacity: sending || !input.trim() ? 0.5 : 1,
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 2 11 13" />
                <path d="M22 2 15 22l-4-9-9-4 20-7z" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  )
}
