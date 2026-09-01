import { useEffect, useRef } from 'react'

const BLUE = '47,95,224'
const PURPLE = '168,85,247'
const PURPLE_LIGHT = '201,169,255'

/** Cursor-reactive light flare for the Hero background. Canvas 2D, no deps —
 * chases the pointer with easing, drifts on its own when idle/touch. */
export default function HeroFlare() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const container = canvas?.parentElement
    if (!canvas || !container) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    let width = 0
    let height = 0
    const resize = () => {
      width = container.clientWidth
      height = container.clientHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()

    const target = { x: 0, y: 0 }
    const pos = { x: 0, y: 0 }
    let hasPointer = false
    let raf = 0
    let t = 0

    const onPointerMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect()
      target.x = e.clientX - rect.left
      target.y = e.clientY - rect.top
      hasPointer = true
    }
    const onPointerLeave = () => {
      hasPointer = false
    }

    container.addEventListener('pointermove', onPointerMove)
    container.addEventListener('pointerleave', onPointerLeave)
    window.addEventListener('resize', resize)

    const draw = () => {
      t += 0.006
      if (!hasPointer) {
        target.x = width * 0.5 + Math.cos(t) * width * 0.18
        target.y = height * 0.42 + Math.sin(t * 1.3) * height * 0.14
      }
      pos.x += (target.x - pos.x) * 0.045
      pos.y += (target.y - pos.y) * 0.045

      ctx.clearRect(0, 0, width, height)

      const ambientBlue = ctx.createRadialGradient(width * 0.1, height * 0.05, 0, width * 0.1, height * 0.05, width * 0.5)
      ambientBlue.addColorStop(0, `rgba(${BLUE},.32)`)
      ambientBlue.addColorStop(1, 'rgba(0,0,0,0)')
      ctx.fillStyle = ambientBlue
      ctx.fillRect(0, 0, width, height)

      const ambientPurple = ctx.createRadialGradient(width * 0.92, height, 0, width * 0.92, height, width * 0.55)
      ambientPurple.addColorStop(0, `rgba(${PURPLE},.28)`)
      ambientPurple.addColorStop(1, 'rgba(0,0,0,0)')
      ctx.fillStyle = ambientPurple
      ctx.fillRect(0, 0, width, height)

      ctx.save()
      ctx.translate(pos.x, pos.y)
      ctx.rotate(t * 0.15)
      const rayCount = 8
      const rayLen = Math.max(width, height) * 0.6
      for (let i = 0; i < rayCount; i++) {
        const angle = (i / rayCount) * Math.PI * 2
        const rg = ctx.createLinearGradient(0, 0, Math.cos(angle) * rayLen, Math.sin(angle) * rayLen)
        rg.addColorStop(0, `rgba(${PURPLE_LIGHT},.10)`)
        rg.addColorStop(1, 'rgba(0,0,0,0)')
        ctx.strokeStyle = rg
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.moveTo(0, 0)
        ctx.lineTo(Math.cos(angle) * rayLen, Math.sin(angle) * rayLen)
        ctx.stroke()
      }
      ctx.restore()

      const coreR = Math.min(width, height) * 0.22
      const core = ctx.createRadialGradient(pos.x, pos.y, 0, pos.x, pos.y, coreR)
      core.addColorStop(0, `rgba(${PURPLE_LIGHT},.5)`)
      core.addColorStop(0.4, `rgba(${PURPLE},.26)`)
      core.addColorStop(1, 'rgba(0,0,0,0)')
      ctx.fillStyle = core
      ctx.beginPath()
      ctx.arc(pos.x, pos.y, coreR, 0, Math.PI * 2)
      ctx.fill()

      if (!reduceMotion) raf = requestAnimationFrame(draw)
    }
    raf = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(raf)
      container.removeEventListener('pointermove', onPointerMove)
      container.removeEventListener('pointerleave', onPointerLeave)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
    />
  )
}
