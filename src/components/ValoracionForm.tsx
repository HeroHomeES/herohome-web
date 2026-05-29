'use client'

import { useState, FormEvent } from 'react'
import Link from 'next/link'

const WEBHOOK_URL = 'https://hook.eu2.make.com/PLACEHOLDER'

type TipoVivienda = 'Piso' | 'Casa/Chalet' | 'Ático' | 'Dúplex' | 'Estudio' | 'Otro'
const TIPOS: TipoVivienda[] = ['Piso', 'Casa/Chalet', 'Ático', 'Dúplex', 'Estudio', 'Otro']

interface FormData {
  tipo: TipoVivienda | ''
  direccion: string
  metros: string
  precioEstimado: string
  nombre: string
  telefono: string
  email: string
}

export default function ValoracionForm() {
  const [step, setStep] = useState(1)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [form, setForm] = useState<FormData>({
    tipo: '', direccion: '', metros: '', precioEstimado: '', nombre: '', telefono: '', email: '',
  })

  const setField = (key: keyof FormData, value: string) =>
    setForm(prev => ({ ...prev, [key]: value }))

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          source: 'web-valoracion',
          tipo: form.tipo,
          direccion: form.direccion,
          metros: form.metros,
          precio_estimado: form.precioEstimado,
          nombre: form.nombre,
          telefono: form.telefono,
          email: form.email,
        }),
      })
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  const progress = ((step - 1) / 3) * 100

  if (status === 'success') {
    return (
      <div style={{ textAlign: 'center', paddingTop: 40 }}>
        <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'rgba(14,165,160,0.15)', border: '2px solid var(--color-teal)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="var(--color-teal)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#fff', letterSpacing: '-0.03em', marginBottom: 12 }}>
          ¡Solicitud enviada!
        </h2>
        <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, marginBottom: 32, maxWidth: 380, margin: '0 auto 32px' }}>
          Hero está analizando tu vivienda. Te llamaremos en menos de 24 horas.
        </p>
        <Link href="/" style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
          ← Volver al inicio
        </Link>
      </div>
    )
  }

  return (
    <div>
      {/* Progress bar */}
      <div style={{ marginBottom: 40 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
          <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--color-violet)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
            Paso {step} de 3
          </span>
          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)' }}>{Math.round(progress)}%</span>
        </div>
        <div style={{ height: 4, background: 'rgba(255,255,255,0.08)', borderRadius: 2 }}>
          <div style={{ height: '100%', background: 'var(--color-violet)', borderRadius: 2, width: `${progress}%`, transition: 'width 0.4s ease' }}/>
        </div>
      </div>

      {/* Step 1: Tipo de vivienda */}
      {step === 1 && (
        <div>
          <h1 className="h1-text" style={{ color: '#fff', marginBottom: 8 }}>¿Qué tipo de vivienda es?</h1>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', marginBottom: 32 }}>Selecciona una opción para continuar.</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            {TIPOS.map(tipo => (
              <button
                key={tipo}
                onClick={() => { setField('tipo', tipo); setTimeout(() => setStep(2), 180) }}
                style={{
                  padding: '20px 16px',
                  borderRadius: 12,
                  border: form.tipo === tipo ? '2px solid var(--color-violet)' : '1.5px solid rgba(255,255,255,0.1)',
                  background: form.tipo === tipo ? 'rgba(91,92,255,0.12)' : 'rgba(255,255,255,0.04)',
                  color: '#fff',
                  fontSize: 15,
                  fontWeight: 500,
                  cursor: 'pointer',
                  textAlign: 'center',
                  transition: 'all 0.15s',
                  letterSpacing: '-0.01em',
                }}
              >
                {tipo}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 2: Dirección */}
      {step === 2 && (
        <div>
          <h1 className="h1-text" style={{ color: '#fff', marginBottom: 8 }}>¿Dónde está la vivienda?</h1>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', marginBottom: 32 }}>Hero necesita la ubicación para analizar el mercado local.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div>
              <label style={{ display: 'block', fontSize: 12, fontWeight: 500, color: 'rgba(255,255,255,0.55)', marginBottom: 8 }}>
                Dirección
              </label>
              <input
                type="text"
                value={form.direccion}
                onChange={e => setField('direccion', e.target.value)}
                placeholder="Calle, número, ciudad"
                className="input-base"
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', color: '#fff' }}
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: 12, fontWeight: 500, color: 'rgba(255,255,255,0.55)', marginBottom: 8 }}>
                Superficie (m²)
              </label>
              <input
                type="number"
                value={form.metros}
                onChange={e => setField('metros', e.target.value)}
                placeholder="80"
                min={10}
                className="input-base"
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', color: '#fff' }}
              />
            </div>
            <button
              onClick={() => form.direccion && form.metros && setStep(3)}
              className="btn-primary"
              style={{ width: '100%', justifyContent: 'center', marginTop: 8, fontSize: 15, padding: '14px', opacity: !form.direccion || !form.metros ? 0.5 : 1 }}
            >
              Continuar →
            </button>
            <button onClick={() => setStep(1)} style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.4)', fontSize: 13, cursor: 'pointer', padding: '4px 0' }}>
              ← Atrás
            </button>
          </div>
        </div>
      )}

      {/* Step 3: Precio + datos personales */}
      {step === 3 && (
        <form onSubmit={handleSubmit}>
          <h1 className="h1-text" style={{ color: '#fff', marginBottom: 8 }}>¿Cuánto crees que vale?</h1>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', marginBottom: 32 }}>
            Solo es orientativo. Hero hará su propio análisis.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div>
              <label style={{ display: 'block', fontSize: 12, fontWeight: 500, color: 'rgba(255,255,255,0.55)', marginBottom: 8 }}>
                Precio estimado
              </label>
              <input
                type="text"
                value={form.precioEstimado}
                onChange={e => setField('precioEstimado', e.target.value)}
                placeholder="300.000 €"
                className="input-base"
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', color: '#fff' }}
              />
            </div>
            <div style={{ height: 1, background: 'rgba(255,255,255,0.08)', margin: '8px 0' }}/>
            <p style={{ fontSize: 13, fontWeight: 500, color: 'rgba(255,255,255,0.55)', margin: 0 }}>Tus datos de contacto</p>
            {[
              { name: 'nombre' as keyof FormData, label: 'Nombre', type: 'text', placeholder: 'Tu nombre' },
              { name: 'telefono' as keyof FormData, label: 'Teléfono', type: 'tel', placeholder: '+34 600 000 000' },
              { name: 'email' as keyof FormData, label: 'Email', type: 'email', placeholder: 'tu@email.com' },
            ].map(field => (
              <div key={field.name}>
                <label style={{ display: 'block', fontSize: 12, fontWeight: 500, color: 'rgba(255,255,255,0.55)', marginBottom: 8 }}>
                  {field.label}
                </label>
                <input
                  type={field.type}
                  value={form[field.name] as string}
                  onChange={e => setField(field.name, e.target.value)}
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
              style={{ width: '100%', justifyContent: 'center', marginTop: 8, fontSize: 15, padding: '14px', opacity: status === 'loading' ? 0.7 : 1 }}
            >
              {status === 'loading' ? 'Enviando...' : 'Obtener mi valoración →'}
            </button>
            {status === 'error' && (
              <p style={{ fontSize: 13, color: 'var(--color-error)', textAlign: 'center', margin: 0 }}>
                Error al enviar. Inténtalo de nuevo.
              </p>
            )}
            <button type="button" onClick={() => setStep(2)} style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.4)', fontSize: 13, cursor: 'pointer', padding: '4px 0' }}>
              ← Atrás
            </button>
          </div>
        </form>
      )}
    </div>
  )
}
