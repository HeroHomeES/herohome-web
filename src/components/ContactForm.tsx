'use client'

import { useState, FormEvent } from 'react'
import { pushEvent } from '@/lib/gtm'

const API_URL = '/api/contacto'

export default function ContactForm() {
  const [form, setForm] = useState({ nombre: '', telefono: '', email: '', ciudad: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      pushEvent('conversion_contacto', { form_type: 'contacto' })
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div style={{ textAlign: 'center', padding: '40px 24px' }}>
        <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'var(--color-teal-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="var(--color-teal)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
        <h3 style={{ fontSize: 18, fontWeight: 600, color: '#fff', margin: '0 0 8px', letterSpacing: '-0.02em' }}>¡Enviado!</h3>
        <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', margin: 0 }}>Te contactamos en menos de 24 horas.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} data-gtm="form-contacto-submit" style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      {[
        { name: 'nombre', label: 'Nombre', type: 'text', placeholder: 'Tu nombre' },
        { name: 'telefono', label: 'Teléfono', type: 'tel', placeholder: '+34 600 000 000' },
        { name: 'email', label: 'Email', type: 'email', placeholder: 'tu@email.com' },
        { name: 'ciudad', label: 'Ciudad', type: 'text', placeholder: 'Madrid, Barcelona...' },
      ].map(field => (
        <div key={field.name}>
          <label style={{ display: 'block', fontSize: 12, fontWeight: 500, color: 'rgba(255,255,255,0.6)', marginBottom: 6, letterSpacing: '0.02em' }}>
            {field.label}
          </label>
          <input
            type={field.type}
            name={field.name}
            value={form[field.name as keyof typeof form]}
            onChange={handleChange}
            placeholder={field.placeholder}
            required
            className="input-base"
            style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', color: '#fff' }}
          />
        </div>
      ))}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="btn-primary"
        style={{ width: '100%', justifyContent: 'center', marginTop: 4, opacity: status === 'loading' ? 0.7 : 1 }}
      >
        {status === 'loading' ? 'Enviando...' : 'Enviar'}
      </button>
      {status === 'error' && (
        <p style={{ fontSize: 13, color: 'var(--color-error)', margin: 0, textAlign: 'center' }}>
          Error al enviar. Inténtalo de nuevo.
        </p>
      )}
    </form>
  )
}
