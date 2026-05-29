'use client'

import { useEffect, useState } from 'react'

interface Notification {
  icon: string
  title: string
  body: string
  time: string
  color: string
}

const NOTIFICATIONS: Notification[] = [
  { icon: '👁️', title: 'Nueva visita confirmada', body: 'Laura M. — Sábado 10:00h. Perfil: comprador solvente, hipoteca pre-aprobada.', time: 'Ahora', color: '#5B5CFF' },
  { icon: '💬', title: 'Oferta recibida', body: '275.000 € — 8.3% por debajo de tu precio. Análisis de mercado disponible.', time: '2 min', color: '#0EA5A0' },
  { icon: '📋', title: 'Comprador filtrado', body: 'Petición rechazada automáticamente: sin financiación acreditada.', time: '15 min', color: '#C2620A' },
  { icon: '✅', title: 'Contrato de arras listo', body: 'El documento está preparado para firma digital. Revisión en curso.', time: '1h', color: '#0EA5A0' },
]

export default function NotificationCards() {
  const [visible, setVisible] = useState(0)

  useEffect(() => {
    if (visible >= NOTIFICATIONS.length) return
    const timer = setTimeout(() => setVisible(v => v + 1), 600)
    return () => clearTimeout(timer)
  }, [visible])

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      {NOTIFICATIONS.slice(0, visible).map((n, i) => (
        <div
          key={i}
          style={{
            background: 'var(--color-ink-2)',
            border: '1px solid rgba(255,255,255,0.07)',
            borderLeft: `3px solid ${n.color}`,
            borderRadius: 10,
            padding: '14px 16px',
            display: 'flex',
            gap: 12,
            alignItems: 'flex-start',
            animation: 'slideIn 0.35s ease',
          }}
        >
          <span style={{ fontSize: 18, lineHeight: 1, flexShrink: 0, marginTop: 1 }}>{n.icon}</span>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: 8, marginBottom: 3 }}>
              <p style={{ margin: 0, fontSize: 13, fontWeight: 600, color: '#fff', letterSpacing: '-0.01em' }}>{n.title}</p>
              <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', flexShrink: 0 }}>{n.time}</span>
            </div>
            <p style={{ margin: 0, fontSize: 12, color: 'rgba(255,255,255,0.55)', lineHeight: 1.5 }}>{n.body}</p>
          </div>
        </div>
      ))}
      <style>{`
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-12px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </div>
  )
}
