import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollFadeIn from '@/components/ScrollFadeIn'

export const metadata: Metadata = {
  title: 'Honorarios — Comisión del 1% para vendedor y comprador',
  description: 'Herohome cobra un 1% al vendedor y un 1% al comprador. Sin letra pequeña, sin comisiones ocultas. Solo pagas si vendes. Compara con las agencias tradicionales.',
  alternates: { canonical: 'https://herohome.es/honorarios' },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Compraventa inmobiliaria con agente IA',
  provider: {
    '@type': 'Organization',
    name: 'Herohome',
    url: 'https://herohome.es',
  },
  areaServed: 'España',
  description: 'Herohome vende tu vivienda con un agente IA disponible 24/7. Comisión del 1% al vendedor y 1% al comprador. Solo pagas si vendes.',
  offers: {
    '@type': 'Offer',
    description: '1% al vendedor sobre el precio de venta · 1% al comprador sobre el precio de compra',
    priceSpecification: [
      {
        '@type': 'UnitPriceSpecification',
        description: 'Comisión al vendedor',
        price: '1',
        priceCurrency: 'EUR',
        unitText: '% sobre el precio de venta',
      },
      {
        '@type': 'UnitPriceSpecification',
        description: 'Comisión al comprador',
        price: '1',
        priceCurrency: 'EUR',
        unitText: '% sobre el precio de compra',
      },
    ],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Cuánto cobra Herohome por vender mi piso?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Herohome cobra un 1% al vendedor sobre el precio de venta y un 1% al comprador sobre el precio de compra. En una vivienda de 300.000 €, el vendedor paga 3.000 € — frente a los 12.000–18.000 € que cobra una agencia tradicional al 4–6%.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Pago aunque no venda?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Herohome solo cobra cuando la venta se cierra. Si tu vivienda no se vende, no pagas nada. Sin costes de alta, sin mensualidades, sin permanencia.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué incluye el 1% del vendedor?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Publicación en Idealista, Fotocasa, Habitaclia, Pisos.com y Yaencontre en menos de 48 horas. Agente Hero IA disponible 24/7 para atender interesados, agendar visitas y recoger feedback. Gestión de ofertas y contraofertas en la app. Firma digital del contrato de arras. Agente humano para el cierre y la firma.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Por qué cobra Herohome también al comprador?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Hero trabaja igual para las dos partes: responde las dudas del comprador, le informa de la vivienda y le acompaña hasta el cierre. El comprador paga un 1% por ese servicio, lo que a su vez permite que el vendedor pague solo un 1% en lugar del 3–5% habitual.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Herohome tiene contrato de exclusividad?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Sin exclusividad y sin ataduras: puedes vender con Herohome y en paralelo explorar otras opciones, y puedes cancelar cuando quieras.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuánto ahorro frente a una agencia tradicional?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Las agencias tradicionales cobran entre el 4% y el 6% al vendedor. En una vivienda de 300.000 €: agencia tradicional al 4% = 12.000 €; Herohome = 3.000 €. Ahorro: 9.000 €. En una vivienda de 400.000 €: agencia al 5% = 20.000 €; Herohome = 4.000 €. Ahorro: 16.000 €.',
      },
    },
  ],
}

const INCLUIDO = [
  'Publicación en todos los portales inmobiliarios',
  'Agente Hero IA disponible 24/7',
  'Respuesta a interesados en menos de 1 minuto',
  'Gestión de agenda de visitas',
  'Feedback de cada visita en tiempo real',
  'Gestión de ofertas y contraofertas por escrito',
  'Firma digital del contrato de arras',
  'Agente humano para el cierre',
  'Seguimiento personalizado hasta la firma',
]

const COMPARISON = [
  { feature: 'Comisión al vendedor', traditional: '4%–6%', herohome: '1%' },
  { feature: 'En una vivienda de 300.000 €', traditional: '12.000 – 18.000 €', herohome: '3.000 €' },
  { feature: 'Disponibilidad', traditional: 'Horario de oficina', herohome: '24/7 con Hero IA' },
  { feature: 'Visibilidad en portales', traditional: 'Sí', herohome: 'Sí — mismos portales' },
  { feature: 'Control del propietario', traditional: 'Limitado', herohome: 'Total — app en tiempo real' },
  { feature: 'Exclusividad', traditional: 'Habitual', herohome: 'No — cancela cuando quieras' },
  { feature: 'Pago si no se vende', traditional: 'Varía', herohome: 'No — solo pagas si vendes' },
]

export default function HonorariosPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <main>

        {/* ── Hero ── */}
        <section style={{ background: 'var(--color-ink)', padding: '140px 24px 80px' }}>
          <div style={{ maxWidth: 760, margin: '0 auto' }}>
            <ScrollFadeIn>
              <p className="eyebrow" style={{ marginBottom: 20 }}>Honorarios</p>
              <h1 className="display-text" style={{ color: '#F8FAFC', marginBottom: 24 }}>
                ¿Cuánto cobra Herohome<br />
                <span style={{ color: 'var(--color-violet)' }}>por vender tu piso?</span>
              </h1>
              <p style={{ fontSize: 18, lineHeight: 1.75, color: 'rgba(248,250,252,0.65)', maxWidth: 620, marginBottom: 32 }}>
                Un 1% al vendedor y un 1% al comprador. Sin letra pequeña, sin costes de alta y sin mensualidades.
                Solo pagas cuando la venta se cierra — si no se vende, no pagas nada.
                En una vivienda de 300.000 €, Herohome cuesta 3.000 €. Una agencia tradicional al 4%, 12.000 €.
              </p>
              <Link href="/valoracion" className="btn-primary" data-gtm="cta-valorar-honorarios" style={{ padding: '13px 28px' }}>
                Obtener valoración gratuita →
              </Link>
            </ScrollFadeIn>
          </div>
        </section>

        {/* ── Tabla de precios ── */}
        <section style={{ background: 'var(--color-surface)', padding: '80px 24px' }}>
          <div style={{ maxWidth: 760, margin: '0 auto' }}>
            <ScrollFadeIn>
              <div className="card" style={{ overflow: 'hidden' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', position: 'relative' }}>
                  {[
                    { pct: '1%', who: 'Para quien vende', note: 'sobre el precio de venta' },
                    { pct: '1%', who: 'Para quien compra', note: 'sobre el precio de compra' },
                  ].map((s, i) => (
                    <div key={i} style={{ padding: '44px 32px', textAlign: 'center', borderRight: i === 0 ? '1px solid var(--color-border)' : 'none' }}>
                      <div style={{ fontSize: 'clamp(56px,9vw,80px)', fontWeight: 700, letterSpacing: '-0.04em', color: 'var(--color-violet)', lineHeight: 1 }}>{s.pct}</div>
                      <p style={{ fontSize: 15, fontWeight: 600, color: 'var(--color-ink)', margin: '14px 0 0' }}>{s.who}</p>
                      <p style={{ fontSize: 13, color: 'var(--color-slate)', margin: '4px 0 0' }}>{s.note}</p>
                    </div>
                  ))}
                </div>
                <div style={{ borderTop: '1px solid var(--color-border)', background: 'var(--color-surface)', padding: '14px 24px', textAlign: 'center' }}>
                  <p style={{ fontSize: 13, fontWeight: 500, color: 'var(--color-slate)', margin: 0 }}>
                    Sin letra pequeña · Sin comisiones ocultas · Solo pagas si vendes
                  </p>
                </div>
              </div>
            </ScrollFadeIn>
          </div>
        </section>

        {/* ── Qué incluye ── */}
        <section style={{ background: '#111827', padding: '80px 24px' }}>
          <div style={{ maxWidth: 760, margin: '0 auto' }}>
            <ScrollFadeIn>
              <p className="eyebrow" style={{ marginBottom: 14 }}>Todo incluido</p>
              <h2 className="h1-text" style={{ color: '#F8FAFC', marginBottom: 36 }}>
                Lo que incluye tu 1%
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '14px 32px' }}>
                {INCLUIDO.map(f => (
                  <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 15, color: 'rgba(248,250,252,0.85)' }}>
                    <span style={{ flexShrink: 0, width: 22, height: 22, borderRadius: 99, background: 'rgba(91,92,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--color-violet)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                    </span>
                    {f}
                  </div>
                ))}
              </div>
            </ScrollFadeIn>
          </div>
        </section>

        {/* ── Comparativa ── */}
        <section style={{ background: 'var(--color-surface)', padding: '80px 24px' }}>
          <div style={{ maxWidth: 760, margin: '0 auto' }}>
            <ScrollFadeIn>
              <p className="eyebrow" style={{ marginBottom: 14 }}>Comparativa</p>
              <h2 className="h1-text" style={{ marginBottom: 36 }}>
                Herohome vs agencia tradicional
              </h2>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
                  <thead>
                    <tr>
                      <th style={{ padding: '12px 16px', textAlign: 'left', color: 'var(--color-slate)', fontWeight: 600, borderBottom: '2px solid var(--color-border)', width: '40%' }}>Característica</th>
                      <th style={{ padding: '12px 16px', textAlign: 'center', color: 'var(--color-slate)', fontWeight: 600, borderBottom: '2px solid var(--color-border)' }}>Agencia tradicional</th>
                      <th style={{ padding: '12px 16px', textAlign: 'center', color: 'var(--color-violet)', fontWeight: 700, borderBottom: '2px solid var(--color-border)' }}>Herohome</th>
                    </tr>
                  </thead>
                  <tbody>
                    {COMPARISON.map((row, i) => (
                      <tr key={row.feature} style={{ background: i % 2 === 0 ? 'transparent' : 'rgba(241,245,249,0.5)' }}>
                        <td style={{ padding: '14px 16px', color: 'var(--color-ink)', fontWeight: 500, borderBottom: '1px solid var(--color-border)' }}>{row.feature}</td>
                        <td style={{ padding: '14px 16px', textAlign: 'center', color: 'var(--color-slate)', borderBottom: '1px solid var(--color-border)' }}>{row.traditional}</td>
                        <td style={{ padding: '14px 16px', textAlign: 'center', color: 'var(--color-violet)', fontWeight: 600, borderBottom: '1px solid var(--color-border)' }}>{row.herohome}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p style={{ fontSize: 12, color: 'var(--color-slate)', marginTop: 12 }}>
                Comisiones de agencias tradicionales: rango de mercado 4–6% al vendedor (fuente: comparativa de mercado).
              </p>
            </ScrollFadeIn>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section style={{ background: '#111827', padding: '80px 24px' }}>
          <div style={{ maxWidth: 720, margin: '0 auto' }}>
            <ScrollFadeIn>
              <p className="eyebrow" style={{ marginBottom: 14 }}>Preguntas frecuentes</p>
              <h2 className="h1-text" style={{ color: '#F8FAFC', marginBottom: 40 }}>Lo que suelen preguntar sobre honorarios</h2>
            </ScrollFadeIn>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {faqSchema.mainEntity.map((faq, i) => (
                <ScrollFadeIn key={i} delay={i * 60}>
                  <details style={{ background: 'var(--color-ink-2)', borderRadius: 10, padding: '20px 24px', cursor: 'pointer' }}>
                    <summary style={{ fontSize: 16, fontWeight: 600, color: '#F8FAFC', lineHeight: 1.4, listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16 }}>
                      {faq.name}
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><polyline points="6 9 12 15 18 9" /></svg>
                    </summary>
                    <p style={{ fontSize: 15, lineHeight: 1.75, color: 'rgba(248,250,252,0.65)', margin: '14px 0 0' }}>
                      {faq.acceptedAnswer.text}
                    </p>
                  </details>
                </ScrollFadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section style={{ background: 'var(--color-ink)', padding: '96px 24px', textAlign: 'center' }}>
          <div style={{ maxWidth: 560, margin: '0 auto' }}>
            <ScrollFadeIn>
              <h2 className="h1-text" style={{ color: '#F8FAFC', marginBottom: 16 }}>
                Un 1%. Solo si vendes.
              </h2>
              <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.45)', marginBottom: 32 }}>
                Empieza con una valoración gratuita de tu vivienda — sin compromiso, sin visita presencial.
              </p>
              <Link href="/valoracion" className="btn-primary" data-gtm="cta-valorar-honorarios-bottom" style={{ padding: '13px 32px', fontSize: 16 }}>
                Valorar mi vivienda gratis →
              </Link>
              <p style={{ marginTop: 16, fontSize: 12, color: 'rgba(255,255,255,0.3)' }}>
                Sin permanencia · Sin exclusividad · Cancela cuando quieras
              </p>
            </ScrollFadeIn>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
