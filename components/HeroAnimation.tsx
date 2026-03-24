'use client'

const CX = 389.044
const CY = 379.345
const LINE_COLOR = '#AAAAAA'
const SHAPE_FILL = 'rgba(247, 243, 243,'

const SPEED = 1.25

const rects = [
  { w: 415.781, h: 415.781, rx: 12.93, opacity: 0.45, angle: 10, dir: -1, duration: 5  * SPEED },
  { w: 351.849, h: 351.849, rx: 19.40, opacity: 0.50, angle: 20, dir:  1, duration: 6  * SPEED },
  { w: 283.913, h: 283.913, rx: 30.18, opacity: 0.55, angle: 30, dir: -1, duration: 7  * SPEED },
  { w: 224.119, h: 228.145, rx: 36.64, opacity: 0.65, angle: 40, dir:  1, duration: 8  * SPEED },
]

const badges = [
  { label: 'Wireframes',  color: '#F97316', x: 474.181, y: 323.305, w: 87.243, delay: 0.3, dx: 0,  dy: 10  },
  { label: 'Research',    color: '#6366F1', x: 414.908, y: 512.977, w: 74.243, delay: 0.6, dx: 0,  dy: 10  },
  { label: 'Prototypes',  color: '#3B82F6', x: 144.41,  y: 412.753, w: 84.243, delay: 0.9, dx: 0,  dy: 10  },
  { label: 'Psychology',  color: '#EC4899', x: 187.517, y: 278.042, w: 88.243, delay: 1.2, dx: 0,  dy: -10 },
  { label: 'Branding',    color: '#F59E0B', x: 344.859, y: 198.294, w: 72.243, delay: 1.5, dx: 0,  dy: 10  },
  { label: 'Mockups',     color: '#10B981', x: 172.429, y: 101.302, w: 73.243, delay: 1.8, dx: 10, dy: 0   },
  { label: 'Vibe Coding', color: '#BD0C3F', x: 271.576, y: 613.202, w: 92.243, delay: 2.1, dx: 0,  dy: -10 },
]

export default function HeroAnimation() {
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'visible' }}>
      <svg
        viewBox="0 0 731 763"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        style={{
          position: 'absolute',
          width: '148%',
          height: '148%',
          top: '-24%',
          right: '-22%',
        }}
      >
        <defs>
          <filter id="shape-shadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="10" stdDeviation="20" floodColor="rgba(0,0,0,0.15)" />
          </filter>
        </defs>

        {/* Rectangles — SMIL animateTransform rotates natively around CX,CY */}
        {rects.map((r, i) => {
          const peak = r.dir * r.angle
          return (
            <rect
              key={i}
              x={CX - r.w / 2}
              y={CY - r.h / 2}
              width={r.w}
              height={r.h}
              rx={r.rx}
              fill={`${SHAPE_FILL}${r.opacity})`}
              filter="url(#shape-shadow)"
            >
              {/* @ts-ignore */}
              <animateTransform
                attributeName="transform"
                type="rotate"
                values={`0 ${CX} ${CY}; ${peak} ${CX} ${CY}; 0 ${CX} ${CY}`}
                dur={`${r.duration}s`}
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.45 0 0.55 1;0.45 0 0.55 1"
              />
            </rect>
          )
        })}

        {/* Circles */}
        <circle cx={CX} cy={CY} r="85.137" fill="rgba(255,255,255,0.57)" filter="url(#shape-shadow)" />

        {/* Dashed connector lines */}
        <path d="M374.495 378.806H196.138C185.425 378.806 176.74 387.491 176.74 398.204V439.156C176.74 449.869 168.055 458.554 157.342 458.554H86.2147" stroke={LINE_COLOR} strokeWidth="1.07768" strokeLinecap="round" strokeDasharray="3.23 3.23"/>
        <path d="M399.282 380.961H494.118C504.831 380.961 513.516 372.276 513.516 361.563V320.611C513.516 309.898 522.201 301.213 532.915 301.213H595.959" stroke={LINE_COLOR} strokeWidth="1.07768" strokeLinecap="round" strokeDasharray="3.23 3.23"/>
        <path d="M386.888 396.049V414.908C386.888 425.622 378.203 434.307 367.49 434.307H336.776C326.063 434.307 317.378 442.991 317.378 453.705V644.455" stroke={LINE_COLOR} strokeWidth="1.07768" strokeLinecap="round" strokeDasharray="3.23 3.23"/>
        <path d="M162.73 112.079H249.512C260.225 112.079 268.91 120.764 268.91 131.477V140.2C268.91 150.913 277.595 159.598 288.309 159.598H367.49C378.203 159.598 386.888 168.283 386.888 178.996V366.412" stroke={LINE_COLOR} strokeWidth="1.07768" strokeLinecap="round" strokeDasharray="3.23 3.23"/>
        <path d="M445.623 619.129L445.623 390.121C444.832 384.384 442.85 382.36 436.462 380.961" stroke={LINE_COLOR} strokeWidth="1.07768" strokeLinecap="round" strokeDasharray="3.23 3.23"/>
        <path d="M241.401 214.998L241.401 369.107C242.192 374.844 244.173 376.868 250.561 378.267" stroke={LINE_COLOR} strokeWidth="1.07768" strokeLinecap="round" strokeDasharray="3.23 3.23"/>

        {/* Center dot */}
        <circle cx={CX} cy={CY} r="4.31073" fill="#999999" />

        {/* Badge pills — SMIL translate for movement, CSS for fade-in */}
        {badges.map((badge) => {
          const dur = (3.5 + (badge.delay % 1.2)) * SPEED
          const txValues = badge.dx
            ? `${-badge.dx} 0;${badge.dx} 0;${-badge.dx} 0`
            : `0 ${-badge.dy};0 ${badge.dy};0 ${-badge.dy}`
          return (
            <g
              key={badge.label}
            >
              <g>
                {/* @ts-ignore */}
                <animateTransform
                  attributeName="transform"
                  type="translate"
                  values={txValues}
                  dur={`${dur}s`}
                  repeatCount="indefinite"
                  calcMode="spline"
                  keySplines="0.45 0 0.55 1;0.45 0 0.55 1"
                />
                <rect
                  x={badge.x} y={badge.y}
                  width={badge.w} height={22.31}
                  rx={11.155}
                  fill={badge.color}
                />
                <text
                  x={badge.x + badge.w / 2}
                  y={badge.y + 14.8}
                  textAnchor="middle"
                  fill="white"
                  fontFamily="Inter, ui-sans-serif, system-ui, sans-serif"
                  fontSize={10.5}
                  fontWeight={400}
                >
                  {badge.label}
                </text>
              </g>
            </g>
          )
        })}
      </svg>
    </div>
  )
}
