'use client'

import { useEffect } from 'react'

export default function LottieHero() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://unpkg.com/@lottiefiles/dotlottie-wc@0.9.10/dist/dotlottie-wc.js'
    script.type = 'module'
    document.head.appendChild(script)
    return () => {
      if (document.head.contains(script)) document.head.removeChild(script)
    }
  }, [])

  return (
    <div style={{ position: 'absolute', bottom: '40px', left: '-120px', right: '-120px', display: 'flex', justifyContent: 'center' }}>
      {/* @ts-ignore */}
      <dotlottie-wc
        src="https://lottie.host/6f17203c-80c6-4d14-aba5-0193d6ced139/GdQWSddHlf.lottie"
        style={{
          width: '630px',
          height: '630px',
WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 18%, black 82%, transparent 100%)',
          maskImage: 'linear-gradient(to right, transparent 0%, black 18%, black 82%, transparent 100%)',
        }}
        speed="0.6"
        autoplay
        loop
      />
    </div>
  )
}
