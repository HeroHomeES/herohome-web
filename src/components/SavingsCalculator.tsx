'use client'

import { useState, useCallback } from 'react'
import Link from 'next/link'

function formatEur(n: number) {
  return new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(n)
}

export default function SavingsCalculator() {
  const [price, setPrice] = useState(300000)

  const agencyFeeMin = price * 0.04
  const agencyFeeMax = price * 0.06
  const heroFee = price * 0.01
  const saving = Math.round((agencyFeeMin + agencyFeeMax) / 2 - heroFee)

  const handleSlider = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(Number(e.target.value))
  }, [])

  return (
    <div style={{
      background: '#fff',
      borderRadius: 14,
      border: '1px solid var(--color-border)',
      padding: '32px',
    }}>
      <h3 style={{ fontSize: 17, fontWeight: 600, letterSpacing: '-0.02em', color: 'var(--color-ink)', margin: '0 0 24px' }}>
        Calcula tu ahorro
      </h3>

      {/* Price display */}
      <div style={{ marginBottom: 8 }}>
        <p style={{ fontSize: 12, fontWeight: 500, color: 'var(--color-slate)', margin: '0 0 4px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
          Precio de venta
        </p>
        <p style={{ fontSize: 28, fontWeight: 700, color: 'var(--color-violet)', margin: 0, letterSpacing: '-0.03em' }}>
          {formatEur(price)}
        </p>
      </div>

      {/* Slider */}
      <div style={{ marginBottom: 24, position: 'relative' }}>
        <input
          type="range"
          min={100000}
          max={1000000}
          step={5000}
          value={price}
          onChange={handleSlider}
          aria-label="Precio de venta de tu vivienda"
          style={{
            width: '100%',
            height: 6,
            appearance: 'none',
            background: `linear-gradient(to right, var(--color-violet) 0%, var(--color-violet) ${((price - 100000) / 900000) * 100}%, var(--color-border) ${((price - 100000) / 900000) * 100}%, var(--color-border) 100%)`,
            borderRadius: 3,
            outline: 'none',
            cursor: 'pointer',
          }}
        />
        <style>{`
          input[type=range]::-webkit-slider-thumb {
            appearance: none;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: var(--color-violet);
            border: 3px solid #fff;
            box-shadow: 0 0 0 1px var(--color-violet);
            cursor: pointer;
          }
          input[type=range]::-moz-range-thumb {
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: var(--color-violet);
            border: 3px solid #fff;
            box-shadow: 0 0 0 1px var(--color-violet);
            cursor: pointer;
          }
        `}</style>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 6 }}>
          <span style={{ fontSize: 11, color: 'var(--color-slate)' }}>100.000 €</span>
          <span style={{ fontSize: 11, color: 'var(--color-slate)' }}>1.000.000 €</span>
        </div>
      </div>

      {/* Comparison boxes */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 20 }}>
        <div style={{ background: 'var(--color-surface)', borderRadius: 10, padding: '16px', border: '1px solid var(--color-border)' }}>
          <p style={{ fontSize: 11, fontWeight: 600, color: 'var(--color-slate)', margin: '0 0 6px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Agencia trad.</p>
          <p style={{ fontSize: 13, fontWeight: 500, color: 'var(--color-slate)', margin: '0 0 4px' }}>4–6%</p>
          <p style={{ fontSize: 20, fontWeight: 700, color: 'var(--color-error)', margin: 0, letterSpacing: '-0.02em' }}>
            {formatEur(agencyFeeMin)}–{formatEur(agencyFeeMax)}
          </p>
        </div>
        <div style={{ background: 'var(--color-teal-light)', borderRadius: 10, padding: '16px', border: '1px solid #b2e8e5' }}>
          <p style={{ fontSize: 11, fontWeight: 600, color: 'var(--color-teal)', margin: '0 0 6px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Herohome</p>
          <p style={{ fontSize: 13, fontWeight: 500, color: 'var(--color-teal)', margin: '0 0 4px' }}>1% vendedor</p>
          <p style={{ fontSize: 20, fontWeight: 700, color: 'var(--color-teal)', margin: 0, letterSpacing: '-0.02em' }}>
            {formatEur(heroFee)}
          </p>
        </div>
      </div>

      {/* Nota */}
      <p style={{ fontSize: 12, color: 'var(--color-slate)', margin: '0 0 20px', lineHeight: 1.6 }}>
        Comisión del 1% para el vendedor y otro 1% para el comprador. Sin comisiones ocultas.
      </p>

      {/* Savings */}
      <div style={{ background: 'var(--color-violet-light)', borderRadius: 10, padding: '16px 20px', marginBottom: 20 }}>
        <p style={{ fontSize: 12, fontWeight: 600, color: 'var(--color-violet-dark)', margin: '0 0 4px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
          Tu ahorro estimado
        </p>
        <p style={{ fontSize: 32, fontWeight: 700, color: 'var(--color-violet)', margin: 0, letterSpacing: '-0.03em' }}>
          {formatEur(saving)}
        </p>
      </div>

      <Link href="#contacto" className="btn-primary" style={{ width: '100%', justifyContent: 'center', fontSize: 15 }}>
        Empezar a ahorrar →
      </Link>
    </div>
  )
}
