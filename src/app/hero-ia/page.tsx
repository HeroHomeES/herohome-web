import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PhoneMockup from '@/components/PhoneMockup'
import NotificationCards from '@/components/NotificationCard'
import ScrollFadeIn from '@/components/ScrollFadeIn'

export const metadata: Metadata = {
  title: 'Hero IA — Tu agente inmobiliario inteligente',
  description: 'Hero es el agente IA de Herohome. Gestiona visitas, filtra compradores y analiza ofertas por ti. Disponible 24/7, actúa en tiempo real.',
  alternates: { canonical: 'https://herohome.es/hero-ia' },
}

const FEATURES = [
  {
    title: 'Filtrado de compradores',
    desc: 'Antes de cada visita, Hero verifica el perfil financiero del interesado. Solo llegan a tu piso compradores con capacidad real de compra.',
    icon: '🔍',
  },
  {
    title: 'Coordinación de agenda',
    desc: 'Hero organiza las visitas según tu disponibilidad. Sin llamadas perdidas, sin email que no ves. Todo sincronizado.',
    icon: '📅',
  },
  {
    title: 'Análisis de ofertas',
    desc: 'Cuando llega una oferta, Hero la compara con operaciones recientes en tu zona y te da un dictamen claro: ¿está bien o hay margen para negociar?',
    icon: '📊',
  },
  {
    title: 'Notificaciones WhatsApp',
    desc: 'No tienes que entrar a ninguna app. Hero te avisa por WhatsApp de cada visita, oferta y novedad en tiempo real.',
    icon: '💬',
  },
  {
    title: 'Respuesta 24/7',
    desc: 'Hero responde las preguntas de los compradores a cualquier hora. Tú descansas. Los interesados obtienen respuesta al momento.',
    icon: '⚡',
  },
  {
    title: 'Contexto completo de tu venta',
    desc: 'Hero no olvida nada. Sabe qué visitas hubo, qué oferta llegó y qué acordaste. No tienes que repetirle el contexto cada vez.',
    icon: '🧠',
  },
]

export default function HeroIAPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero section */}
        <section style={{ background: 'var(--color-ink)', paddingTop: 120, paddingBottom: 80, minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', width: '100%' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 64, alignItems: 'center' }}>
              <div>
                <p className="eyebrow" style={{ color: 'rgba(165,166,255,0.9)', marginBottom: 20 }}>Agente IA</p>
                <h1 className="display-text" style={{ color: '#fff', marginBottom: 20 }}>
                  Conoce a{' '}
                  <span style={{ color: 'var(--color-violet)' }}>Hero</span>
                </h1>
                <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, marginBottom: 32, maxWidth: 480 }}>
                  Hero no es un chatbot. Es un agente que trabaja activamente en tu venta las 24 horas: filtra compradores, coordina visitas, analiza ofertas y te notifica por tu app en tiempo real.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
                  <a href="https://app.herohome.es" className="btn-primary" style={{ fontSize: 15, padding: '13px 24px' }} data-gtm="cta-app">
                    Empezar con Hero →
                  </a>
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <PhoneMockup />
              </div>
            </div>
          </div>
        </section>

        {/* Notificaciones en tiempo real */}
        <section style={{ background: 'var(--color-ink-2)', padding: '96px 24px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 64, alignItems: 'center' }}>
              <ScrollFadeIn>
                <p className="eyebrow" style={{ color: 'rgba(165,166,255,0.9)', marginBottom: 12 }}>Tiempo real</p>
                <h2 className="h1-text" style={{ color: '#fff', marginBottom: 16 }}>
                  Te avisa antes de que necesites preguntar
                </h2>
                <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.6)', lineHeight: 1.75 }}>
                  Hero monitoriza tu venta constantemente. Cada visita, oferta o novedad te llega a tu aplicación al instante, con el contexto que necesitas para tomar la mejor decisión.
                </p>
              </ScrollFadeIn>
              <div>
                <NotificationCards />
              </div>
            </div>
          </div>
        </section>

        {/* Features grid */}
        <section style={{ background: 'var(--color-surface)', padding: '96px 24px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <ScrollFadeIn>
              <p className="eyebrow" style={{ marginBottom: 12, textAlign: 'center' }}>Capacidades</p>
              <h2 className="h1-text" style={{ textAlign: 'center', marginBottom: 16 }}>Todo lo que hace Hero por ti</h2>
              <p style={{ fontSize: 16, color: 'var(--color-slate)', textAlign: 'center', maxWidth: 500, margin: '0 auto 56px' }}>
                Mientras tú te ocupas de tu vida, Hero gestiona el 80% del proceso de venta.
              </p>
            </ScrollFadeIn>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
              {FEATURES.map((f, i) => (
                <ScrollFadeIn key={f.title} delay={i * 70}>
                  <div className="card" style={{ padding: '28px 24px', height: '100%' }}>
                    <span style={{ fontSize: 28, display: 'block', marginBottom: 16 }}>{f.icon}</span>
                    <h3 className="h3-text" style={{ color: 'var(--color-ink)', marginBottom: 10 }}>{f.title}</h3>
                    <p style={{ fontSize: 14, color: 'var(--color-slate)', lineHeight: 1.75, margin: 0 }}>{f.desc}</p>
                  </div>
                </ScrollFadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: 'var(--color-violet)', padding: '80px 24px', textAlign: 'center' }}>
          <div style={{ maxWidth: 600, margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(24px,3vw,32px)', fontWeight: 700, color: '#fff', letterSpacing: '-0.03em', marginBottom: 16 }}>
              Empieza a vender con Hero hoy
            </h2>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.8)', marginBottom: 32 }}>
              Valoramos tu vivienda gratis. Sin compromiso.
            </p>
            <Link href="/valoracion" className="btn-primary" style={{ background: '#fff', color: 'var(--color-violet)', fontSize: 15, padding: '14px 28px' }}>
              Valorar mi vivienda →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
