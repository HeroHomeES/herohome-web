import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SavingsCalculator from '@/components/SavingsCalculator'
import FAQAccordion from '@/components/FAQAccordion'
import { FAQS } from '@/lib/faq-data'
import ContactForm from '@/components/ContactForm'
import ScrollFadeIn from '@/components/ScrollFadeIn'
import AgendarButton from '@/components/AgendarButton'

export const metadata: Metadata = {
  title: 'Herohome — Vende tu piso sin agencia | Comisión 0%',
  description: 'Publica tu vivienda en Idealista y Fotocasa en 48h. Sin agencia, sin comisión en tu primera venta. Primer agente inmobiliario IA de España.',
  alternates: { canonical: 'https://herohome.es/' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map(f => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
}

const PORTALS = ['Idealista', 'Fotocasa', 'Habitaclia', 'Pisos.com', 'Yaencontre']
const STEPS = [
  { n: '01', title: 'Nos cuentas tu vivienda', desc: 'Sin visita presencial, sin reuniones innecesarias. Una llamada de 10 minutos.' },
  { n: '02', title: 'Hero publica tu piso en todos los portales', desc: 'En menos de 48 horas tu vivienda aparece en Idealista, Fotocasa, Habitaclia, Pisos.com y Yaencontre.' },
  { n: '03', title: 'Hero trabaja 24h para ti', desc: 'Responde preguntas, filtra compradores, organiza visitas según tu agenda y te presenta cada oferta con datos de mercado para que decidas bien.' },
  { n: '04', title: 'Cierra la venta con un agente humano', desc: 'Tendrás un agente a tu disposición durante el proceso, especialmente para acompañarte en el cierre. Contrato de arras, firma digital y coordinación con notaría incluidos.' },
]
const HERO_FEATURES = [
  'Filtra compradores por perfil financiero antes de cada visita',
  'Coordina visitas según tu disponibilidad real',
  'Analiza cada oferta con comparables de mercado',
  'Te envía notificaciones por WhatsApp en tiempo real',
  'Responde dudas de compradores por ti 24/7',
]
const WHY_CARDS = [
  { icon: 'cpu', title: 'Hero IA', desc: 'Un agente de IA disponible 24/7 que gestiona las conversaciones con compradores, organiza tu calendario y te avisa de cada movimiento en tiempo real.' },
  { icon: 'globe', title: 'Portales principales', desc: 'Tu vivienda aparece en Idealista, Fotocasa, Habitaclia y más portales simultáneamente. Los mismos canales que usa cualquier agencia, sin el sobrecoste.' },
  { icon: 'user-check', title: 'Agente humano cuando importa', desc: 'Para el contrato de arras y el cierre, un agente humano de Herohome está contigo. La tecnología gestiona lo repetitivo. Las personas gestionan lo importante.' },
]
const SERVICES = [
  'Publicación en todos los portales',
  'Agente Hero IA incluido 24/7',
  'Gestión de visitas y ofertas',
  'Firma digital del contrato de arras',
  'Agente humano para el cierre',
  'Valoración profesional de mercado',
]

function Icon({ name }: { name: string }) {
  if (name === 'cpu') return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/>
      <line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/>
      <line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/>
      <line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/>
      <line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/>
    </svg>
  )
  if (name === 'globe') return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <line x1="2" y1="12" x2="22" y2="12"/>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
  )
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <polyline points="16 11 18 13 22 9"/>
    </svg>
  )
}

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <main>
        {/* ── S1: Hero + Calculadora ── */}
        <section style={{ background: 'var(--color-ink)', paddingTop: 120, paddingBottom: 80, minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', width: '100%' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 64, alignItems: 'center' }}>
              {/* Left */}
              <div>
                <p className="eyebrow" style={{ color: 'rgba(165,166,255,0.9)', marginBottom: 20 }}>Primer agente inmobiliario IA de España</p>
                <h1 className="display-text" style={{ color: '#fff', marginBottom: 20 }}>
                  Vende tu piso sin agencia.{' '}
                  <span style={{ color: 'var(--color-violet)' }}>Comisión 0%</span>
                </h1>
                <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, marginBottom: 16, maxWidth: 520 }}>
                  Hero, tu agente inmobiliario IA, gestiona visitas, filtra compradores y analiza ofertas por ti. Tú enseñas el piso. Nosotros ponemos todo lo demás.
                </p>
                <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', lineHeight: 1.75, marginBottom: 32, maxWidth: 520 }}>
                  Con Herohome, los propietarios pueden vender su piso en España sin pagar comisión de agencia en su primera venta. Tu vivienda se publica en Idealista, Fotocasa y Habitaclia en menos de 48 horas.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: 24 }}>
                  <Link href="/valoracion" className="btn-primary" data-gtm="cta-valorar-hero" style={{ fontSize: 15, padding: '13px 24px' }}>
                    Valorar mi vivienda →
                  </Link>
                  <Link href="#como-funciona" className="btn-secondary" style={{ fontSize: 15, padding: '13px 24px', color: 'rgba(255,255,255,0.8)', borderColor: 'rgba(255,255,255,0.2)' }}>
                    Ver cómo funciona Hero
                  </Link>
                </div>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)' }}>
                  Comisión del 0% para primera venta. Resto 1%.
                </p>
              </div>
              {/* Right */}
              <div>
                <SavingsCalculator />
              </div>
            </div>
          </div>
        </section>

        {/* ── S2: Portal logos ── */}
        <section style={{ background: '#f0fdf9', padding: '48px 24px', textAlign: 'center', borderBottom: '1px solid #cdf0ec' }}>
          <p className="eyebrow" style={{ color: 'var(--color-teal)', marginBottom: 24 }}>Publicamos tu vivienda en</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 40, maxWidth: 800, margin: '0 auto' }}>
            {PORTALS.map(p => (
              <span key={p} style={{ fontSize: 18, fontWeight: 700, color: 'var(--color-teal)', letterSpacing: '-0.02em', opacity: 0.85 }}>
                {p}
              </span>
            ))}
          </div>
        </section>

        {/* ── S3: Cómo funciona ── */}
        <section id="como-funciona" style={{ background: 'var(--color-surface)', padding: '96px 24px' }}>
          <div style={{ maxWidth: 900, margin: '0 auto' }}>
            <ScrollFadeIn>
              <p className="eyebrow" style={{ marginBottom: 12 }}>Proceso</p>
              <h2 className="h1-text" style={{ marginBottom: 12 }}>Cómo funciona Herohome</h2>
              <p style={{ fontSize: 16, color: 'var(--color-slate)', maxWidth: 540, marginBottom: 56 }}>
                Vender tu piso sin agencia en España es legal, sencillo y con Herohome lo haces en 4 pasos.
              </p>
            </ScrollFadeIn>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 20 }}>
              {STEPS.map((step, i) => (
                <ScrollFadeIn key={step.n} delay={i * 80}>
                  <div className="card" style={{ padding: '28px 24px', height: '100%' }}>
                    <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'var(--color-violet-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                      <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--color-violet-dark)' }}>{step.n}</span>
                    </div>
                    <h3 className="h3-text" style={{ color: 'var(--color-ink)', marginBottom: 10 }}>{step.title}</h3>
                    <p style={{ fontSize: 14, color: 'var(--color-slate)', lineHeight: 1.7, margin: 0 }}>{step.desc}</p>
                  </div>
                </ScrollFadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── S4: Hero IA ── */}
        <section id="hero-ia" style={{ background: 'var(--color-ink)', padding: '96px 24px' }}>
          <div style={{ maxWidth: 780, margin: '0 auto' }}>
            <ScrollFadeIn>
              <p className="eyebrow" style={{ color: 'rgba(165,166,255,0.9)', marginBottom: 12 }}>Conoce a Hero, tu agente IA</p>
              <h2 className="h1-text" style={{ color: '#fff', marginBottom: 20 }}>No es un chatbot. Es un agente trabajando para ti</h2>
              <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, marginBottom: 40, maxWidth: 600 }}>
                Hero entiende el contexto de tu venta. Sabe qué visitas has tenido, qué ofertas han llegado y cuál es el precio de mercado de tu zona. Responde en lenguaje natural, actúa en tiempo real y te avisa antes de que necesites preguntar.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 16 }}>
                {HERO_FEATURES.map((f, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                    <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--color-violet)', flexShrink: 0, marginTop: 8 }}/>
                    <span style={{ fontSize: 16, color: 'rgba(255,255,255,0.8)' }}>{f}</span>
                  </li>
                ))}
              </ul>
              <div style={{ marginTop: 40 }}>
                <Link href="/hero-ia" className="btn-primary">
                  Conocer más sobre Hero →
                </Link>
              </div>
            </ScrollFadeIn>
          </div>
        </section>

        {/* ── S5: Precios ── */}
        <section id="precios" style={{ background: 'var(--color-surface)', padding: '96px 24px', textAlign: 'center' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <ScrollFadeIn>
              <p className="eyebrow" style={{ marginBottom: 12 }}>Precios</p>
              <h2 className="h1-text" style={{ marginBottom: 12 }}>Una comisión. Sin sorpresas.</h2>
              <p style={{ fontSize: 16, color: 'var(--color-slate)', maxWidth: 520, margin: '0 auto 56px' }}>
                Las agencias tradicionales cobran entre 12.000 € y 18.000 € por vender un piso de 300.000 €. Con Herohome, tu primera venta es gratis.
              </p>
            </ScrollFadeIn>
            <ScrollFadeIn>
              <div style={{ maxWidth: 400, margin: '0 auto', border: '2px solid var(--color-violet)', borderRadius: 12, overflow: 'hidden', background: '#fff', textAlign: 'left' }}>
                <div style={{ padding: '28px 32px', borderBottom: '1px solid var(--color-border)' }}>
                  <p style={{ fontSize: 12, fontWeight: 600, color: 'var(--color-slate)', margin: '0 0 6px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Primera venta</p>
                  <p style={{ fontSize: 14, color: 'var(--color-slate)', margin: '0 0 8px' }}>0% de comisión al vendedor</p>
                  <p style={{ fontSize: 28, fontWeight: 700, color: 'var(--color-violet)', margin: 0, letterSpacing: '-0.03em' }}>Gratis</p>
                </div>
                <div style={{ padding: '28px 32px', borderBottom: '1px solid var(--color-border)' }}>
                  <p style={{ fontSize: 12, fontWeight: 600, color: 'var(--color-slate)', margin: '0 0 6px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Siguientes ventas</p>
                  <p style={{ fontSize: 14, color: 'var(--color-slate)', margin: '0 0 8px' }}>1% sobre precio de venta</p>
                  <p style={{ fontSize: 28, fontWeight: 700, color: 'var(--color-ink)', margin: 0, letterSpacing: '-0.03em' }}>1%</p>
                </div>
                <div style={{ padding: '28px 32px', borderBottom: '1px solid var(--color-border)' }}>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
                    {SERVICES.map((s, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="8" fill="var(--color-teal-light)"/><path d="M4.5 8l2.5 2.5 4.5-5" stroke="var(--color-teal)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        <span style={{ fontSize: 14, color: 'var(--color-ink)' }}>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div style={{ padding: '24px 32px' }}>
                  <Link href="/valoracion" className="btn-primary" data-gtm="cta-empezar-gratis" style={{ width: '100%', justifyContent: 'center', fontSize: 15, padding: '13px 24px' }}>
                    Empezar gratis →
                  </Link>
                </div>
              </div>
            </ScrollFadeIn>
          </div>
        </section>

        {/* ── S6: Por qué funciona ── */}
        <section style={{ background: 'var(--color-surface)', padding: '80px 24px', borderTop: '1px solid var(--color-border)' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <ScrollFadeIn>
              <p className="eyebrow" style={{ marginBottom: 12, textAlign: 'center' }}>Por qué funciona</p>
              <h2 className="h1-text" style={{ textAlign: 'center', marginBottom: 48 }}>Menos comisión no significa menos servicio.</h2>
            </ScrollFadeIn>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
              {WHY_CARDS.map((card, i) => (
                <ScrollFadeIn key={card.title} delay={i * 80}>
                  <div className="card" style={{ padding: '28px 24px', height: '100%' }}>
                    <div style={{ width: 40, height: 40, borderRadius: 10, background: 'var(--color-violet-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16, color: 'var(--color-violet)' }}>
                      <Icon name={card.icon} />
                    </div>
                    <h3 className="h3-text" style={{ color: 'var(--color-ink)', marginBottom: 10 }}>{card.title}</h3>
                    <p style={{ fontSize: 14, color: 'var(--color-slate)', lineHeight: 1.75, margin: 0 }}>{card.desc}</p>
                  </div>
                </ScrollFadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── S7: FAQ ── */}
        <section id="faq" style={{ background: 'var(--color-surface)', padding: '80px 24px', borderTop: '1px solid var(--color-border)' }}>
          <div style={{ maxWidth: 720, margin: '0 auto' }}>
            <ScrollFadeIn>
              <p className="eyebrow" style={{ marginBottom: 12 }}>Preguntas frecuentes</p>
              <h2 className="h1-text" style={{ marginBottom: 48 }}>Lo que suelen preguntar.</h2>
            </ScrollFadeIn>
            <FAQAccordion />
          </div>
        </section>

        {/* ── S8: CTA final / Contacto ── */}
        <section id="contacto" style={{ background: 'var(--color-ink)', padding: '96px 24px' }}>
          <div style={{ maxWidth: 900, margin: '0 auto' }}>
            <ScrollFadeIn>
              <p className="eyebrow" style={{ color: 'rgba(165,166,255,0.9)', marginBottom: 12, textAlign: 'center' }}>Contacto</p>
              <h2 className="h1-text" style={{ color: '#fff', marginBottom: 12, textAlign: 'center' }}>Empieza a vender tu piso hoy</h2>
              <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.6)', textAlign: 'center', marginBottom: 56 }}>
                Te contactamos en menos de 24 horas. Sin compromiso.
              </p>
            </ScrollFadeIn>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24, maxWidth: 860, margin: '0 auto' }}>
              {/* Formulario */}
              <div style={{ background: 'var(--color-ink-2)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, padding: '32px' }}>
                <h3 style={{ fontSize: 17, fontWeight: 600, color: '#fff', letterSpacing: '-0.02em', margin: '0 0 24px' }}>
                  Escríbenos
                </h3>
                <ContactForm />
              </div>
              {/* Agendar */}
              <div style={{ background: 'rgba(91,92,255,0.08)', border: '1px solid rgba(91,92,255,0.2)', borderRadius: 12, padding: '32px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: 'rgba(91,92,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20, color: 'var(--color-violet)' }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                </div>
                <h3 style={{ fontSize: 17, fontWeight: 600, color: '#fff', letterSpacing: '-0.02em', margin: '0 0 10px' }}>¿Prefieres hablar?</h3>
                <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, margin: '0 0 24px' }}>
                  Agenda una llamada con un agente de Herohome cuando mejor te venga.
                </p>
                <AgendarButton />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
