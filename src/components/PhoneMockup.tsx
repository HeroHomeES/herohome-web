const MESSAGES = [
  { from: 'hero', text: 'Hola, soy Hero. Ya he publicado tu piso en Idealista, Fotocasa y Habitaclia. ¿Quieres que te informe de cada visita por aquí?' },
  { from: 'user', text: 'Sí, perfecto. ¿Ya hay interesados?' },
  { from: 'hero', text: 'Sí — 4 solicitudes de visita desde esta mañana. He filtrado 2: uno no cumple el perfil financiero y otro no puede visitar hasta dentro de 3 semanas. Los otros 2 son sólidos. ¿Los agendo para el sábado?' },
  { from: 'user', text: 'Sábado bien, por la mañana.' },
  { from: 'hero', text: 'Listo. Te confirmo: sábado 10:00h y 11:30h. Te envío recordatorio 24h antes. Si alguien cancela, te aviso al momento.' },
]

export default function PhoneMockup() {
  return (
    <div style={{
      width: 280,
      maxWidth: '100%',
      background: '#1a1a2e',
      borderRadius: 32,
      border: '2px solid rgba(255,255,255,0.1)',
      padding: '16px 0 24px',
      margin: '0 auto',
      position: 'relative',
      boxShadow: '0 40px 80px rgba(0,0,0,0.5)',
    }}>
      {/* Top bar */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 12 }}>
        <div style={{ width: 60, height: 6, borderRadius: 3, background: 'rgba(255,255,255,0.15)' }}/>
      </div>
      {/* Header */}
      <div style={{ padding: '8px 16px 12px', borderBottom: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'linear-gradient(135deg, #A5A6FF, #5B5CFF)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
          </svg>
        </div>
        <div>
          <p style={{ margin: 0, fontSize: 13, fontWeight: 600, color: '#fff' }}>Hero</p>
          <p style={{ margin: 0, fontSize: 11, color: 'rgba(255,255,255,0.45)' }}>Tu agente inmobiliario IA</p>
        </div>
      </div>
      {/* Messages */}
      <div style={{ padding: '16px 12px', display: 'flex', flexDirection: 'column', gap: 10, maxHeight: 380, overflowY: 'auto' }}>
        {MESSAGES.map((msg, i) => (
          <div key={i} style={{ display: 'flex', justifyContent: msg.from === 'user' ? 'flex-end' : 'flex-start' }}>
            <div style={{
              maxWidth: '80%',
              padding: '10px 12px',
              borderRadius: msg.from === 'user' ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
              background: msg.from === 'user' ? 'var(--color-violet)' : 'rgba(255,255,255,0.08)',
              fontSize: 12,
              lineHeight: 1.55,
              color: msg.from === 'user' ? '#fff' : 'rgba(255,255,255,0.85)',
            }}>
              {msg.text}
            </div>
          </div>
        ))}
      </div>
      {/* Input bar */}
      <div style={{ margin: '0 12px', background: 'rgba(255,255,255,0.06)', borderRadius: 20, padding: '8px 14px', display: 'flex', alignItems: 'center', gap: 8, border: '1px solid rgba(255,255,255,0.08)' }}>
        <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', flex: 1 }}>Escribe un mensaje...</span>
        <div style={{ width: 24, height: 24, borderRadius: '50%', background: 'var(--color-violet)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z"/></svg>
        </div>
      </div>
    </div>
  )
}
