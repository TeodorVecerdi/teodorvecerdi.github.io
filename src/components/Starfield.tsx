import { useEffect, useRef } from 'react'

type Star = { x: number; y: number; r: number; a: number }

/**
 * A static, lightweight starfield drawn once to a <canvas>.
 * No animation loop — the field is regenerated only on resize.
 */
export function Starfield() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let stars: Star[] = []

    const draw = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const w = window.innerWidth
      const h = window.innerHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      ctx.clearRect(0, 0, w, h)

      // Density scales with area; capped for performance.
      const count = Math.min(220, Math.round((w * h) / 9000))
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.1 + 0.3,
        a: Math.random() * 0.6 + 0.2,
      }))

      for (const s of stars) {
        // Warm-tinted stars, a touch of glow on the larger ones.
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 247, 224, ${s.a})`
        if (s.r > 1) {
          ctx.shadowColor = 'rgba(255, 233, 184, 0.8)'
          ctx.shadowBlur = 6
        } else {
          ctx.shadowBlur = 0
        }
        ctx.fill()
      }
      ctx.shadowBlur = 0
    }

    draw()

    let t: number | undefined
    const onResize = () => {
      window.clearTimeout(t)
      t = window.setTimeout(draw, 150)
    }
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('resize', onResize)
      window.clearTimeout(t)
    }
  }, [])

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10"
    />
  )
}
