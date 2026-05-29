export default function Logo({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <svg width="32" height="32" viewBox="0 0 64 64" fill="none" aria-hidden="true">
        <defs>
          <linearGradient id="logo-gl" x1="0" y1="6" x2="0" y2="58" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#A5A6FF"/>
            <stop offset="100%" stopColor="#3C3ECC"/>
          </linearGradient>
          <linearGradient id="logo-gr" x1="0" y1="18" x2="0" y2="58" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#5B5CFF"/>
            <stop offset="100%" stopColor="#282999"/>
          </linearGradient>
        </defs>
        <rect x="10" y="6" width="12" height="52" rx="5" fill="url(#logo-gl)"/>
        <rect x="30" y="18" width="12" height="40" rx="5" fill="url(#logo-gr)"/>
      </svg>
      <span style={{ fontSize: '18px', fontWeight: 600, letterSpacing: '-0.03em', color: 'inherit' }}>
        Herohome
      </span>
    </div>
  )
}
