'use client'

import { useState, FormEvent } from 'react'
import { pushEvent } from '@/lib/gtm'

const API_URL = '/api/contacto'

export default function PhoneCaptureForm() {
  const [phone, setPhone] = useState('')
  const [focused, setFocused] = useState(false)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (phone.trim().length < 9) return
    setStatus('loading')
    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ telefono: phone, origen: 'landing-cta-final' }),
      })
      if (!res.ok) throw new Error('request failed')
      pushEvent('conversion_contacto', { form_type: 'cta-telefono' })
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div style={{ background: 'rgba(91,92,255,0.1)', border: '1px solid rgba(91,92,255,0.25)', borderRadius: 10, padding: 24, maxWidth: 420, margin: '0 auto' }}>
        <p style={{ fontSize: 15, fontWeight: 500, color: '#F8FAFC', margin: 0 }}>✓ ¡Recibido! Te llamamos en menos de 24 h.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} data-gtm="form-cta-telefono-submit" style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center' }}>
      <input
        type="tel"
        placeholder="Tu número de teléfono"
        value={phone}
        onChange={e => setPhone(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        required
        minLength={9}
        aria-label="Tu número de teléfono"
        style={{
          flex: '1 1 220px',
          maxWidth: 260,
          background: 'rgba(255,255,255,0.08)',
          border: focused ? '1px solid var(--color-violet)' : '1px solid rgba(255,255,255,0.12)',
          borderRadius: 7,
          padding: '12px 16px',
          fontSize: 14,
          fontWeight: 500,
          color: '#F8FAFC',
          outline: 'none',
          transition: 'border-color 0.15s',
          fontFamily: 'var(--font-sans)',
        }}
      />
      <button type="submit" disabled={status === 'loading'} className="btn-primary" style={{ padding: '12px 28px', opacity: status === 'loading' ? 0.7 : 1 }}>
        {status === 'loading' ? 'Enviando…' : 'Que me llamen →'}
      </button>
      {status === 'error' && (
        <p style={{ width: '100%', fontSize: 13, color: 'var(--color-error)', margin: 0 }}>Error al enviar. Inténtalo de nuevo.</p>
      )}
    </form>
  )
}
