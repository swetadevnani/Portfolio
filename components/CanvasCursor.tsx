'use client'

import { useEffect, useRef } from 'react'

export function CanvasCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const el: HTMLCanvasElement = canvas
    const ctx = el.getContext('2d')!

    let running = true
    const mouse = { x: -200, y: -200 }
    // Dot trails — each follows the one before with lag
    const dots = Array.from({ length: 8 }, (_, i) => ({
      x: -200, y: -200,
      size: 7 - i * 0.7,   // shrinks toward the tail
      alpha: 1 - i * 0.1,  // fades toward the tail
    }))

    function resize() {
      if (!canvas) return
      el.width = window.innerWidth
      el.height = window.innerHeight
    }

    function onMove(e: MouseEvent) {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }

    function render() {
      if (!running) return
      ctx.clearRect(0, 0, el.width, el.height)

      // Each dot chases the one in front with easing
      dots[0].x += (mouse.x - dots[0].x) * 0.35
      dots[0].y += (mouse.y - dots[0].y) * 0.35
      for (let i = 1; i < dots.length; i++) {
        dots[i].x += (dots[i - 1].x - dots[i].x) * 0.35
        dots[i].y += (dots[i - 1].y - dots[i].y) * 0.35
      }

      // Draw tail dots first (back to front)
      for (let i = dots.length - 1; i >= 0; i--) {
        const d = dots[i]
        ctx.beginPath()
        ctx.arc(d.x, d.y, Math.max(d.size, 0.5), 0, Math.PI * 2)
        // #C0305E at varying opacity
        ctx.fillStyle = `rgba(192, 48, 94, ${d.alpha * 0.15})`
        ctx.fill()
      }

      // Lead dot — solid, crisp
      const lead = dots[0]
      ctx.beginPath()
      ctx.arc(lead.x, lead.y, 5, 0, Math.PI * 2)
      ctx.fillStyle = 'rgba(192, 48, 94, 0.85)'
      ctx.fill()

      // Thin ring around lead dot
      ctx.beginPath()
      ctx.arc(lead.x, lead.y, 10, 0, Math.PI * 2)
      ctx.strokeStyle = 'rgba(192, 48, 94, 0.25)'
      ctx.lineWidth = 1
      ctx.stroke()

      requestAnimationFrame(render)
    }

    resize()
    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', onMove)
    render()

    return () => {
      running = false
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMove)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-50"
    />
  )
}
