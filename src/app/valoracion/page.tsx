import type { Metadata } from 'next'
import Link from 'next/link'
import Logo from '@/components/Logo'
import ValoracionForm from '@/components/ValoracionForm'

export const metadata: Metadata = {
  title: 'Valorar mi vivienda — Análisis gratuito en 24h',
  description: 'Consigue la valoración de tu vivienda en 24 horas. Sin visita presencial. Hero analiza el mercado y te llama con el resultado.',
  alternates: { canonical: 'https://herohome.es/valoracion' },
}

export default function ValoracionPage() {
  return (
    <main style={{ background: 'var(--color-ink)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div style={{ maxWidth: 560, margin: '0 auto', padding: '40px 24px', width: '100%', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Link href="/" style={{ textDecoration: 'none', color: '#fff', display: 'inline-block', marginBottom: 48 }}>
          <Logo />
        </Link>
        <ValoracionForm />
      </div>
    </main>
  )
}
