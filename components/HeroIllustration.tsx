export default function HeroIllustration() {
  return (
    <svg
      viewBox="0 0 400 520"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ width: '100%', maxWidth: 420, height: 'auto' }}
    >
      {/* ── Decorative rings behind figure ── */}
      <circle cx="200" cy="300" r="170" fill="rgba(192,48,94,0.06)" />
      <circle cx="200" cy="300" r="170" stroke="rgba(192,48,94,0.14)" strokeWidth="1" fill="none" />
      <circle cx="200" cy="300" r="205" stroke="rgba(192,48,94,0.07)" strokeWidth="1" strokeDasharray="5 5" fill="none" />

      {/* ── Floating accent dots ── */}
      <circle cx="355" cy="145" r="6" fill="rgba(192,48,94,0.35)">
        <animate attributeName="cy" values="145;135;145" dur="4s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1" />
      </circle>
      <circle cx="52" cy="220" r="4" fill="rgba(192,48,94,0.22)">
        <animate attributeName="cy" values="220;230;220" dur="5s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1" />
      </circle>
      <circle cx="368" cy="340" r="4" fill="rgba(192,48,94,0.28)">
        <animate attributeName="cy" values="340;332;340" dur="3.5s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1" />
      </circle>

      {/* ── Body / torso ── */}
      {/* Shirt */}
      <path
        d="M148 310 C140 300 128 295 115 305 L90 360 Q88 380 105 385 L295 385 Q312 380 310 360 L285 305 C272 295 260 300 252 310 L240 330 Q220 345 200 345 Q180 345 160 330 Z"
        fill="#F5E8EC"
        stroke="#1a1a1a"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      {/* Collar V */}
      <path d="M185 312 L200 338 L215 312" stroke="#C0305E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      {/* Left sleeve */}
      <path d="M128 295 L95 260 Q88 250 95 242 Q102 234 110 240 L148 285" fill="#F5E8EC" stroke="#1a1a1a" strokeWidth="2.2" strokeLinejoin="round" />
      {/* Right sleeve — waving arm, raised */}
      <path d="M272 285 L305 238 Q312 226 322 230 Q332 234 328 246 L295 295" fill="#F5E8EC" stroke="#1a1a1a" strokeWidth="2.2" strokeLinejoin="round">
        <animateTransform attributeName="transform" type="rotate" values="0 299 262;-12 299 262;0 299 262;8 299 262;0 299 262" dur="2.4s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1;0.45 0 0.55 1;0.45 0 0.55 1" />
      </path>

      {/* ── Waving hand ── */}
      <g>
        <animateTransform attributeName="transform" type="rotate" values="0 318 230;-14 318 230;0 318 230;10 318 230;0 318 230" dur="2.4s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1;0.45 0 0.55 1;0.45 0 0.55 1" />
        {/* Palm */}
        <ellipse cx="325" cy="224" rx="13" ry="16" fill="#F5E8EC" stroke="#1a1a1a" strokeWidth="2" />
        {/* Fingers */}
        <path d="M319 210 Q317 196 321 192 Q325 188 328 193 Q329 197 328 210" fill="#F5E8EC" stroke="#1a1a1a" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M326 208 Q325 193 329 190 Q333 187 335 192 Q336 198 334 209" fill="#F5E8EC" stroke="#1a1a1a" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M332 211 Q333 197 337 195 Q341 193 342 199 Q342 205 339 213" fill="#F5E8EC" stroke="#1a1a1a" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M313 213 Q310 200 313 196 Q317 192 320 197 Q321 202 321 213" fill="#F5E8EC" stroke="#1a1a1a" strokeWidth="1.8" strokeLinejoin="round" />
        {/* Thumb */}
        <path d="M313 222 Q305 218 306 212 Q307 206 313 209" fill="#F5E8EC" stroke="#1a1a1a" strokeWidth="1.8" strokeLinejoin="round" />
      </g>

      {/* ── Neck ── */}
      <rect x="190" y="266" width="20" height="28" rx="8" fill="#F5E8EC" stroke="#1a1a1a" strokeWidth="2" />

      {/* ── Head ── */}
      <ellipse cx="200" cy="220" rx="62" ry="70" fill="#F5E8EC" stroke="#1a1a1a" strokeWidth="2.5" />

      {/* ── Curly hair ── */}
      {/* Main hair mass — back */}
      <ellipse cx="200" cy="188" rx="66" ry="52" fill="#1a1a1a" />
      {/* Top curls */}
      <path d="M150 175 Q145 148 160 140 Q175 132 180 150" fill="#1a1a1a" stroke="#1a1a1a" strokeWidth="1" />
      <path d="M165 162 Q163 138 178 130 Q193 122 195 143" fill="#1a1a1a" stroke="#1a1a1a" strokeWidth="1" />
      <path d="M195 158 Q196 132 210 126 Q224 120 224 143" fill="#1a1a1a" stroke="#1a1a1a" strokeWidth="1" />
      <path d="M218 162 Q222 138 236 135 Q250 132 248 155" fill="#1a1a1a" stroke="#1a1a1a" strokeWidth="1" />
      <path d="M238 172 Q246 150 258 150 Q270 150 266 170" fill="#1a1a1a" stroke="#1a1a1a" strokeWidth="1" />
      {/* Side curls left */}
      <path d="M140 200 Q130 185 138 172 Q146 159 155 170 Q148 182 152 196" fill="#1a1a1a" />
      <path d="M138 220 Q126 208 130 193 Q134 178 145 188 Q140 202 144 218" fill="#1a1a1a" />
      {/* Side curls right */}
      <path d="M260 200 Q270 185 262 172 Q254 159 245 170 Q252 182 248 196" fill="#1a1a1a" />
      <path d="M262 220 Q274 208 270 193 Q266 178 255 188 Q260 202 256 218" fill="#1a1a1a" />

      {/* Hair highlight curl lines */}
      <path d="M165 148 Q170 138 178 142" stroke="#3a3a3a" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <path d="M195 144 Q202 132 210 136" stroke="#3a3a3a" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <path d="M220 150 Q228 140 234 146" stroke="#3a3a3a" strokeWidth="1.5" strokeLinecap="round" fill="none" />

      {/* ── Ears ── */}
      <ellipse cx="139" cy="222" rx="8" ry="11" fill="#F5E8EC" stroke="#1a1a1a" strokeWidth="2" />
      <ellipse cx="261" cy="222" rx="8" ry="11" fill="#F5E8EC" stroke="#1a1a1a" strokeWidth="2" />

      {/* ── Glasses ── */}
      {/* Left lens */}
      <rect x="162" y="212" width="34" height="24" rx="8" fill="rgba(192,48,94,0.08)" stroke="#C0305E" strokeWidth="2.5" />
      {/* Right lens */}
      <rect x="204" y="212" width="34" height="24" rx="8" fill="rgba(192,48,94,0.08)" stroke="#C0305E" strokeWidth="2.5" />
      {/* Bridge */}
      <path d="M196 224 L204 224" stroke="#C0305E" strokeWidth="2.5" strokeLinecap="round" />
      {/* Left arm */}
      <path d="M162 224 L147 222" stroke="#C0305E" strokeWidth="2" strokeLinecap="round" />
      {/* Right arm */}
      <path d="M238 224 L253 222" stroke="#C0305E" strokeWidth="2" strokeLinecap="round" />

      {/* ── Eyes ── */}
      <ellipse cx="179" cy="224" rx="7" ry="8" fill="white" />
      <circle cx="181" cy="225" r="4.5" fill="#1a1a1a" />
      <circle cx="182.5" cy="223" r="1.5" fill="white" />
      <ellipse cx="221" cy="224" rx="7" ry="8" fill="white" />
      <circle cx="223" cy="225" r="4.5" fill="#1a1a1a" />
      <circle cx="224.5" cy="223" r="1.5" fill="white" />

      {/* ── Eyebrows ── */}
      <path d="M170 212 Q179 207 188 210" stroke="#1a1a1a" strokeWidth="2.2" strokeLinecap="round" fill="none" />
      <path d="M213 210 Q221 207 230 212" stroke="#1a1a1a" strokeWidth="2.2" strokeLinecap="round" fill="none" />

      {/* ── Nose ── */}
      <path d="M197 235 Q200 248 203 235" stroke="#c4a09a" strokeWidth="1.5" strokeLinecap="round" fill="none" />

      {/* ── Smile ── */}
      <path d="M185 252 Q200 264 215 252" stroke="#1a1a1a" strokeWidth="2.2" strokeLinecap="round" fill="none" />
      {/* Cheek blush */}
      <ellipse cx="170" cy="248" rx="10" ry="6" fill="rgba(192,48,94,0.13)" />
      <ellipse cx="230" cy="248" rx="10" ry="6" fill="rgba(192,48,94,0.13)" />

      {/* ── Shirt detail — small star/asterisk ── */}
      <text x="192" y="372" fontSize="14" fill="#C0305E" fontFamily="serif" textAnchor="middle">✦</text>

      {/* ── Skirt / lower body ── */}
      <path d="M105 385 Q100 430 108 480 L292 480 Q300 430 295 385 Z" fill="#C0305E" stroke="#1a1a1a" strokeWidth="2" strokeLinejoin="round" />
      {/* Skirt fold lines */}
      <path d="M155 385 Q148 430 152 480" stroke="rgba(0,0,0,0.12)" strokeWidth="1" strokeLinecap="round" fill="none" />
      <path d="M200 385 L200 480" stroke="rgba(0,0,0,0.10)" strokeWidth="1" strokeLinecap="round" fill="none" />
      <path d="M245 385 Q252 430 248 480" stroke="rgba(0,0,0,0.12)" strokeWidth="1" strokeLinecap="round" fill="none" />

      {/* ── Legs ── */}
      <rect x="155" y="478" width="22" height="32" rx="6" fill="#F5E8EC" stroke="#1a1a1a" strokeWidth="2" />
      <rect x="223" y="478" width="22" height="32" rx="6" fill="#F5E8EC" stroke="#1a1a1a" strokeWidth="2" />
      {/* Shoes */}
      <ellipse cx="166" cy="512" rx="18" ry="9" fill="#1a1a1a" />
      <ellipse cx="234" cy="512" rx="18" ry="9" fill="#1a1a1a" />

      {/* ── Earring ── */}
      <circle cx="139" cy="234" r="3.5" fill="#C0305E" stroke="#1a1a1a" strokeWidth="1" />
    </svg>
  )
}
