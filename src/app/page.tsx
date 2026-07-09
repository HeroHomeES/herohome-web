import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SavingsCalculator from '@/components/SavingsCalculator'
import FAQAccordion from '@/components/FAQAccordion'
import { FAQS } from '@/lib/faq-data'
import NotificationCards from '@/components/NotificationCard'
import PhoneCaptureForm from '@/components/PhoneCaptureForm'
import ScrollFadeIn from '@/components/ScrollFadeIn'

export const metadata: Metadata = {
  title: 'Herohome — Vende tu piso con IA | Comisión 1%',
  description: 'Vende tu vivienda con Hero, tu agente inmobiliario IA. Gestiona visitas, filtra compradores y analiza ofertas por ti. Comisión del 1% para vendedor y comprador, sin sorpresas.',
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
  { n: '01', title: 'Publicas en 48h', desc: 'Subes los datos de tu vivienda. Hero analiza el mercado, redacta el anuncio y lo publica en todos los portales en menos de 48 horas.' },
  { n: '02', title: 'Hero filtra los compradores', desc: 'Cada interesado pasa por Hero antes de llegar a ti. Responde preguntas, agenda visitas y descarta perfiles no serios.' },
  { n: '03', title: 'Gestionas desde el móvil', desc: 'Confirmas visitas, recibes ofertas y hablas con Hero en tiempo real. Sin llamadas de agente, sin emails interminables.' },
  { n: '04', title: 'Cierras la venta', desc: 'Cuando aceptas una oferta, un agente humano gestiona el contrato de arras y la firma digital. Tú solo firmas desde tu sofá.' },
]

const HERO_FEATURES = [
  'Disponible 24/7, responde a interesados en menos de 1 minuto.',
  'Gestiona la agenda de visitas automáticamente.',
  'Reagenda citas en tu lugar.',
  'Escala a un agente humano cuando lo necesitas.',
]

const INCLUIDO = [
  'Publicación en todos los portales',
  'Agente Hero IA disponible 24/7',
  'Gestión de visitas y ofertas',
  'Firma digital del contrato de arras',
  'Agente humano para el cierre',
  'Seguimiento personalizado hasta la firma',
]

const TESTIMONIALS = [
  { quote: 'Hero me avisó de una oferta a las 11 de la noche. La confirmé desde el sofá en 30 segundos. Nunca había vendido tan rápido.', name: 'María G.', loc: 'Madrid', detail: 'Vendió en 18 días' },
  { quote: 'Un agente que trabaja para ti a todas horas por solo un 1%. Sin sorpresas ni comisiones ocultas.', name: 'Javier R.', loc: 'Barcelona', detail: 'Ahorró 9.200 €' },
  { quote: 'Lo que más me sorprendió fue tener toda la información en tiempo real. Sabía exactamente qué pasaba con mi piso.', name: 'Ana M.', loc: 'Valencia', detail: 'Comisión del 1%' },
]

const WA_MSGS: { from: 'user' | 'hero'; text: string; time: string }[] = [
  { from: 'user', text: 'Oye Hero, me han puesto un viaje la semana que viene, ¿tenía alguna visita?', time: '10:14' },
  { from: 'hero', text: 'Sí, tienes una visita confirmada el miércoles a las 18:00h con Juan y el jueves a las 19:00h con Marta. ¿Quieres que las reagende?', time: '10:14' },
  { from: 'user', text: 'Sí por favor.', time: '10:15' },
  { from: 'hero', text: 'De acuerdo, contactaré con ellos y las reagendaré a la semana próxima teniendo en cuenta tu disponibilidad. ¡Que tengas buen viaje! ✈️', time: '10:15' },
]

/* ── Pulse mark (logo) ── */
function PulseMark({ size = 32 }: { size?: number }) {
  return (
    <svg width={size * 0.66} height={size} viewBox="7 3 38 58" fill="none" aria-hidden="true" style={{ display: 'block' }}>
      <defs>
        <linearGradient id="home-pl" x1="0" y1="6" x2="0" y2="58" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#A5A6FF" /><stop offset="100%" stopColor="#3C3ECC" />
        </linearGradient>
        <linearGradient id="home-pr" x1="0" y1="18" x2="0" y2="58" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#5B5CFF" /><stop offset="100%" stopColor="#282999" />
        </linearGradient>
      </defs>
      <rect x="10" y="6" width="12" height="52" rx="5" fill="url(#home-pl)" />
      <rect x="30" y="18" width="12" height="40" rx="5" fill="url(#home-pr)" />
    </svg>
  )
}

/* ── Hero "agente IA" badge ── */
function HeroBadge() {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12, background: 'rgba(91,92,255,0.07)', border: '1px solid rgba(91,92,255,0.2)', borderRadius: 14, padding: '12px 18px' }}>
      <div style={{ position: 'relative', width: 44, height: 44, flexShrink: 0 }}>
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
          <circle cx="22" cy="22" r="20" stroke="rgba(91,92,255,0.3)" strokeWidth="1" />
          <circle cx="22" cy="22" r="20" stroke="url(#badgeRing)" strokeWidth="1.5" strokeDasharray="6 4" strokeLinecap="round" />
          <circle cx="22" cy="22" r="10" fill="rgba(91,92,255,0.15)" />
          <circle cx="22" cy="22" r="6" fill="#5B5CFF" opacity="0.9" />
          <circle cx="22" cy="4" r="2.5" fill="#5B5CFF" />
          <circle cx="38" cy="30" r="2" fill="#0EA5A0" />
          <circle cx="7" cy="30" r="1.8" fill="rgba(91,92,255,0.6)" />
          <line x1="22" y1="12" x2="22" y2="6.5" stroke="rgba(91,92,255,0.4)" strokeWidth="1" />
          <line x1="30" y1="26" x2="36" y2="30" stroke="rgba(14,165,160,0.4)" strokeWidth="1" />
          <line x1="14" y1="26" x2="8.5" y2="30" stroke="rgba(91,92,255,0.3)" strokeWidth="1" />
          <defs>
            <linearGradient id="badgeRing" x1="0" y1="0" x2="44" y2="44" gradientUnits="userSpaceOnUse">
              <stop stopColor="#5B5CFF" stopOpacity="0.8" />
              <stop offset="0.5" stopColor="#0EA5A0" stopOpacity="0.6" />
              <stop offset="1" stopColor="#5B5CFF" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>
        <div style={{ position: 'absolute', inset: -4, borderRadius: 99, border: '1px solid rgba(91,92,255,0.15)', animation: 'pulseDot 2.4s ease-in-out infinite' }} />
      </div>
      <div>
        <p style={{ fontSize: 12, fontWeight: 600, color: '#F8FAFC', margin: 0 }}>Hero — Agente IA</p>
        <p style={{ fontSize: 11, color: 'rgba(248,250,252,0.45)', margin: '1px 0 0' }}>Activo · Analizando mercado</p>
      </div>
      <div style={{ marginLeft: 4, display: 'flex', gap: 3, alignItems: 'center' }}>
        {[0, 0.3, 0.6].map((d, i) => (
          <span key={i} style={{ width: 4, height: 4, borderRadius: 99, background: 'var(--color-teal)', animation: `pulseDot 1.4s ease-in-out ${d}s infinite` }} />
        ))}
      </div>
    </div>
  )
}

/* ── Login phone mockup (hero right) ── */
function LoginMockup() {
  return (
    <div style={{ width: 284, borderRadius: 38, border: '4px solid var(--color-ink-2)', background: 'var(--color-ink)', padding: 10, boxShadow: '0 0 70px rgba(91,92,255,0.12), 0 40px 80px rgba(0,0,0,0.45)', flexShrink: 0 }}>
      <div style={{ background: 'var(--color-surface)', borderRadius: 28, overflow: 'hidden', height: 568, display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '13px 22px 0' }}>
          <span style={{ fontSize: 11, fontWeight: 600, color: 'var(--color-ink)' }}>9:41</span>
          <div style={{ width: 17, height: 9, borderRadius: 2.5, border: '1px solid #94A3B8', position: 'relative' }}>
            <div style={{ position: 'absolute', inset: 1, right: 5, borderRadius: 1, background: 'var(--color-ink)' }} />
          </div>
        </div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '0 30px', position: 'relative' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '48%', background: 'radial-gradient(80% 100% at 50% 0%, rgba(91,92,255,0.10) 0%, rgba(91,92,255,0) 100%)', pointerEvents: 'none' }} />
          <div style={{ position: 'relative', width: '100%', maxWidth: 236, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <PulseMark size={54} />
            <p style={{ fontSize: 22, fontWeight: 600, letterSpacing: '-0.03em', color: 'var(--color-ink)', margin: '16px 0 0' }}>Herohome</p>
            <p style={{ fontSize: 13, color: 'var(--color-slate)', margin: '6px 0 30px' }}>Portal del vendedor</p>
            <label style={{ alignSelf: 'flex-start', fontSize: 12, fontWeight: 600, color: 'var(--color-slate)', marginBottom: 6 }}>Correo electrónico</label>
            <div style={{ width: '100%', border: '1px solid var(--color-border)', borderRadius: 9, padding: '12px 14px', fontSize: 14, color: '#94A3B8', background: '#fff' }}>tu@email.com</div>
            <div style={{ width: '100%', marginTop: 12, background: 'var(--color-violet)', color: '#fff', borderRadius: 9, padding: 12, fontSize: 14, fontWeight: 500, textAlign: 'center' }}>Enviar enlace de acceso</div>
            <p style={{ fontSize: 12, color: '#94A3B8', textAlign: 'center', lineHeight: 1.6, marginTop: 30 }}>Sin contraseñas. Te enviamos un enlace y entras con un toque.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ── WhatsApp chat mockup ── */
function WhatsAppChatMockup() {
  return (
    <div style={{ width: 296, borderRadius: 36, border: '4px solid #1a1a1a', background: '#111', padding: 12, boxShadow: '0 0 60px rgba(0,0,0,0.5), 0 0 40px rgba(91,92,255,0.06)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 8px', marginBottom: 10 }}>
        <span style={{ fontSize: 10, fontWeight: 500, color: 'rgba(255,255,255,0.45)' }}>9:41</span>
        <div style={{ display: 'flex', gap: 3 }}>
          <span style={{ width: 3, height: 3, borderRadius: 99, background: 'rgba(255,255,255,0.4)' }} />
          <span style={{ width: 3, height: 3, borderRadius: 99, background: 'rgba(255,255,255,0.4)' }} />
        </div>
      </div>
      <div style={{ background: '#1F2C34', borderRadius: 12, padding: '10px 14px', marginBottom: 2, display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{ width: 36, height: 36, borderRadius: 99, background: '#25D366', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: 16 }}>🤖</div>
        <div>
          <p style={{ fontSize: 13, fontWeight: 600, color: '#fff', margin: 0 }}>Hero · Herohome</p>
          <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', margin: 0 }}>en línea</p>
        </div>
      </div>
      <div style={{ background: '#0B141A', borderRadius: 12, padding: '14px 10px', display: 'flex', flexDirection: 'column', gap: 8 }}>
        <div style={{ alignSelf: 'center', background: 'rgba(255,255,255,0.07)', borderRadius: 99, padding: '3px 10px', fontSize: 10, color: 'rgba(255,255,255,0.45)', marginBottom: 4 }}>Hoy</div>
        {WA_MSGS.map((msg, i) => (
          <div key={i} style={{
            alignSelf: msg.from === 'user' ? 'flex-end' : 'flex-start',
            maxWidth: '86%',
            background: msg.from === 'user' ? '#005C4B' : '#1F2C34',
            borderRadius: msg.from === 'user' ? '12px 12px 2px 12px' : '12px 12px 12px 2px',
            padding: '8px 12px',
            boxShadow: '0 1px 2px rgba(0,0,0,0.3)',
          }}>
            {msg.from === 'hero' && <p style={{ fontSize: 11, fontWeight: 600, color: '#25D366', margin: '0 0 3px' }}>Hero</p>}
            <p style={{ fontSize: 12, lineHeight: 1.6, color: 'rgba(255,255,255,0.92)', margin: 0 }}>{msg.text}</p>
            <p style={{ fontSize: 10, color: 'rgba(255,255,255,0.35)', textAlign: 'right', margin: '3px 0 0' }}>
              {msg.time}{msg.from === 'user' && <span style={{ marginLeft: 4, color: '#53BDEB' }}>✓✓</span>}
            </p>
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 8, background: '#1F2C34', borderRadius: 99, padding: '8px 12px' }}>
        <span style={{ flex: 1, fontSize: 11, color: 'rgba(255,255,255,0.3)' }}>Mensaje</span>
        <div style={{ width: 28, height: 28, borderRadius: 99, background: '#25D366', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
        </div>
      </div>
    </div>
  )
}

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <main>
        {/* ── S1: Hero ── */}
        <section style={{ background: 'var(--color-ink)', minHeight: '100vh', overflow: 'hidden', position: 'relative' }}>
          <div style={{ position: 'absolute', top: '-10%', left: '50%', transform: 'translateX(-50%)', width: 800, height: 600, background: 'radial-gradient(ellipse, rgba(91,92,255,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 48, padding: '160px 24px 100px', justifyContent: 'space-between' }}>
            <div style={{ flex: '1 1 400px', minWidth: 0 }}>
              <p className="eyebrow" style={{ marginBottom: 20 }}>Agente inmobiliario IA · España</p>
              <h1 className="display-text" style={{ color: '#F8FAFC', marginBottom: 20 }}>
                Tu vivienda, vendida<br />
                <span style={{ color: 'var(--color-violet)' }}>por inteligencia artificial.</span>
              </h1>
              <p style={{ fontSize: 16, lineHeight: 1.75, color: 'rgba(248,250,252,0.55)', maxWidth: 520, marginBottom: 28 }}>
                Hero es el agente IA de Herohome. Gestiona visitas, filtra compradores, analiza ofertas y te mantiene informado en tiempo real sin que tengas que mover un dedo.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 20 }}>
                <Link href="/valoracion" className="btn-primary" data-gtm="cta-valorar-hero" style={{ padding: '12px 28px' }}>
                  Obtener valoración gratuita →
                </Link>
                <Link href="#como-funciona" className="btn-secondary" style={{ padding: '12px 28px', color: '#F8FAFC', borderColor: 'rgba(255,255,255,0.14)' }}>
                  Ver cómo funciona Hero
                </Link>
              </div>
              <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', marginBottom: 24 }}>
                Comisión del 1% para vendedor y comprador · Sin sorpresas
              </p>
              <HeroBadge />
            </div>
            <div style={{ flex: '0 0 auto', display: 'flex', justifyContent: 'center' }}>
              <LoginMockup />
            </div>
          </div>
        </section>

        {/* ── S2: Portales (marquee) ── */}
        <section style={{ background: '#111827', padding: '48px 0', overflow: 'hidden' }}>
          <p className="eyebrow" style={{ textAlign: 'center', marginBottom: 28 }}>Publicamos tu vivienda en</p>
          <div className="marquee-mask" style={{ overflow: 'hidden' }}>
            <div className="scrollbar-hide" style={{ display: 'flex', gap: 56, width: 'max-content', animation: 'scrollX 18s linear infinite' }}>
              {[...PORTALS, ...PORTALS].map((n, i) => (
                <span key={i} style={{ fontSize: 15, fontWeight: 600, color: '#F8FAFC', opacity: 0.4, letterSpacing: '-0.02em', whiteSpace: 'nowrap' }}>{n}</span>
              ))}
            </div>
          </div>
        </section>

        {/* ── S3: Cómo funciona ── */}
        <section id="como-funciona" style={{ background: 'var(--color-surface)', padding: '96px 24px' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <ScrollFadeIn>
              <div style={{ textAlign: 'center', marginBottom: 64 }}>
                <p className="eyebrow" style={{ marginBottom: 14 }}>Cómo funciona</p>
                <h2 className="h1-text">Hero trabaja. Tú decides.</h2>
                <p style={{ marginTop: 8, fontSize: 16, color: 'var(--color-slate)' }}>Cuatro pasos. Todo desde el móvil.</p>
              </div>
            </ScrollFadeIn>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 32 }}>
              {STEPS.map((s, i) => (
                <ScrollFadeIn key={s.n} delay={i * 80}>
                  <div style={{ position: 'relative', padding: '0 8px' }}>
                    <span style={{ position: 'absolute', top: -14, left: 8, fontSize: 80, fontWeight: 700, color: 'var(--color-violet)', opacity: 0.08, lineHeight: 1, pointerEvents: 'none', userSelect: 'none' }}>{s.n}</span>
                    <div style={{ position: 'relative', paddingTop: 48 }}>
                      <h3 className="h3-text" style={{ color: 'var(--color-ink)', marginBottom: 8 }}>{s.title}</h3>
                      <p style={{ fontSize: 13, lineHeight: 1.7, color: 'var(--color-slate)', margin: 0 }}>{s.desc}</p>
                    </div>
                  </div>
                </ScrollFadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── S4: Hero IA + notificaciones ── */}
        <section id="hero-ia" style={{ background: 'var(--color-ink)', padding: '96px 24px' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 64, alignItems: 'center' }}>
            <ScrollFadeIn>
              <p className="eyebrow" style={{ marginBottom: 14 }}>Hero IA</p>
              <h2 className="h1-text" style={{ color: '#F8FAFC', marginBottom: 16 }}>No es un chatbot,<br />es tu agente.</h2>
              <p style={{ fontSize: 15, lineHeight: 1.75, color: 'rgba(248,250,252,0.55)', marginBottom: 24 }}>
                Hero entiende el contexto de tu venta. Sabe qué visitas has tenido y qué ofertas han llegado. Responde en lenguaje natural, actúa en tiempo real y te avisa antes de que necesites preguntar.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px', display: 'flex', flexDirection: 'column', gap: 12 }}>
                {HERO_FEATURES.map(f => (
                  <li key={f} style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 14, color: 'rgba(255,255,255,0.75)' }}>
                    <span style={{ width: 6, height: 6, borderRadius: 99, background: 'var(--color-violet)', flexShrink: 0 }} />
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/hero-ia" className="btn-outline-violet">Conocer más sobre Hero →</Link>
            </ScrollFadeIn>
            <NotificationCards />
          </div>
        </section>

        {/* ── S5: Comisión (1% + 1%) + calculadora ── */}
        <section id="precios" style={{ background: 'var(--color-surface)', padding: '96px 24px' }}>
          <div style={{ maxWidth: 1080, margin: '0 auto' }}>
            <ScrollFadeIn>
              <div style={{ textAlign: 'center', marginBottom: 52 }}>
                <p className="eyebrow" style={{ marginBottom: 14 }}>Comisión</p>
                <h2 className="h1-text">Una comisión justa.<br />Para las dos partes.</h2>
                <p style={{ marginTop: 16, fontSize: 16, lineHeight: 1.7, color: 'var(--color-slate)', maxWidth: 560, margin: '16px auto 0' }}>
                  Cobramos lo mismo a quien vende y a quien compra: un 1% transparente, sin letra pequeña ni comisiones ocultas.
                </p>
              </div>
            </ScrollFadeIn>

            <ScrollFadeIn>
              <div className="card" style={{ overflow: 'hidden', boxShadow: '0 1px 3px rgba(10,14,23,0.04)' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', position: 'relative' }}>
                  {[
                    { pct: '1%', who: 'Para quien vende', note: 'sobre el precio de venta' },
                    { pct: '1%', who: 'Para quien compra', note: 'sobre el precio de compra' },
                  ].map((s, i) => (
                    <div key={i} style={{ padding: '44px 32px', textAlign: 'center', borderRight: i === 0 ? '1px solid var(--color-border)' : 'none' }}>
                      <div style={{ fontSize: 'clamp(56px,7vw,72px)', fontWeight: 700, letterSpacing: '-0.04em', color: 'var(--color-violet)', lineHeight: 1 }}>{s.pct}</div>
                      <p style={{ fontSize: 15, fontWeight: 600, color: 'var(--color-ink)', margin: '14px 0 0' }}>{s.who}</p>
                      <p style={{ fontSize: 13, color: 'var(--color-slate)', margin: '4px 0 0' }}>{s.note}</p>
                    </div>
                  ))}
                </div>
                <div style={{ borderTop: '1px solid var(--color-border)', background: 'var(--color-surface)', padding: '15px 24px', textAlign: 'center' }}>
                  <p style={{ fontSize: 13, fontWeight: 500, color: 'var(--color-slate)', margin: 0 }}>Sabes exactamente lo que pagas desde el primer día. Sin comisiones ocultas.</p>
                </div>
                <div style={{ padding: '36px 32px 40px' }}>
                  <p className="eyebrow" style={{ color: '#94A3B8', marginBottom: 22, textAlign: 'center' }}>Todo incluido en tu 1%</p>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px,1fr))', gap: '15px 36px', maxWidth: 780, margin: '0 auto' }}>
                    {INCLUIDO.map(f => (
                      <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 11, fontSize: 14, color: 'var(--color-ink)' }}>
                        <span style={{ flexShrink: 0, width: 22, height: 22, borderRadius: 99, background: 'var(--color-violet-light)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--color-violet-dark)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                        </span>
                        {f}
                      </div>
                    ))}
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 34 }}>
                    <Link href="/valoracion" className="btn-primary" data-gtm="cta-valorar-precios" style={{ padding: '13px 32px' }}>
                      Valorar mi vivienda gratis →
                    </Link>
                    <p style={{ marginTop: 16, fontSize: 12, color: 'var(--color-slate)', textAlign: 'center' }}>Sin permanencia · Sin exclusividad forzosa · Cancela cuando quieras</p>
                  </div>
                </div>
              </div>
            </ScrollFadeIn>

            {/* Calculadora de ahorro */}
            <ScrollFadeIn>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 40, alignItems: 'center', marginTop: 72 }}>
                <div>
                  <p className="eyebrow" style={{ marginBottom: 12 }}>Tu ahorro</p>
                  <h3 className="h1-text" style={{ marginBottom: 12 }}>Calcula cuánto te ahorras frente a una agencia</h3>
                  <p style={{ fontSize: 15, color: 'var(--color-slate)', lineHeight: 1.7, margin: 0 }}>
                    Las agencias tradicionales cobran entre un 4% y un 6% al vendedor. Con Herohome pagas solo un 1%. Mueve el precio y compruébalo.
                  </p>
                </div>
                <SavingsCalculator />
              </div>
            </ScrollFadeIn>
          </div>
        </section>

        {/* ── S6: Testimonios (placeholder) ── */}
        <section style={{ background: '#111827', padding: '96px 24px' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <ScrollFadeIn>
              <div style={{ textAlign: 'center', marginBottom: 20 }}>
                <p className="eyebrow" style={{ marginBottom: 14 }}>Propietarios</p>
                <h2 className="h1-text" style={{ color: '#F8FAFC' }}>Lo que dicen quienes ya vendieron</h2>
              </div>
              <p style={{ textAlign: 'center', marginBottom: 48 }}>
                <span style={{ display: 'inline-block', fontSize: 11, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#C2620A', background: 'rgba(194,98,10,0.12)', border: '1px solid rgba(194,98,10,0.3)', borderRadius: 99, padding: '4px 12px' }}>
                  Ejemplos ilustrativos · pendiente de testimonios reales
                </span>
              </p>
            </ScrollFadeIn>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px,1fr))', gap: 20 }}>
              {TESTIMONIALS.map((t, i) => (
                <ScrollFadeIn key={t.name} delay={i * 80}>
                  <div style={{ background: 'var(--color-ink-2)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, padding: 24, height: '100%' }}>
                    <div style={{ display: 'flex', gap: 2, marginBottom: 16 }}>
                      {[...Array(5)].map((_, s) => (
                        <svg key={s} width="14" height="14" viewBox="0 0 24 24" fill="var(--color-violet)"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                      ))}
                    </div>
                    <p style={{ fontSize: 14, lineHeight: 1.7, color: 'rgba(248,250,252,0.75)', margin: 0 }}>“{t.quote}”</p>
                    <div style={{ marginTop: 16 }}>
                      <p style={{ fontSize: 13, fontWeight: 500, color: '#F8FAFC', margin: 0 }}>— {t.name}, {t.loc}</p>
                      <p style={{ fontSize: 12, color: 'rgba(248,250,252,0.35)', margin: '2px 0 0' }}>{t.detail}</p>
                    </div>
                  </div>
                </ScrollFadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── S7: WhatsApp ── */}
        <section style={{ background: '#111827', padding: '0 24px 96px' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px,1fr))', gap: 64, alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 96 }}>
            <ScrollFadeIn>
              <p className="eyebrow" style={{ marginBottom: 14 }}>Siempre disponible</p>
              <h2 className="h1-text" style={{ color: '#F8FAFC', marginBottom: 16 }}>Hero no descansa.<br />Tú sí puedes.</h2>
              <p style={{ fontSize: 15, lineHeight: 1.75, color: 'rgba(248,250,252,0.55)', marginBottom: 24 }}>
                Habla con Hero por WhatsApp como lo harías con cualquier persona. Pregunta, cambia planes, pide información — a cualquier hora del día.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {['Disponible 24/7, incluso festivos', 'Responde en segundos, no en horas', 'Gestiona cambios sin llamadas ni emails'].map(f => (
                  <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, color: 'rgba(255,255,255,0.7)' }}>
                    <span style={{ width: 6, height: 6, borderRadius: 99, background: 'var(--color-teal)', flexShrink: 0 }} />
                    {f}
                  </div>
                ))}
              </div>
            </ScrollFadeIn>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <WhatsAppChatMockup />
            </div>
          </div>
        </section>

        {/* ── S8: FAQ ── */}
        <section id="faq" style={{ background: 'var(--color-surface)', padding: '80px 24px' }}>
          <div style={{ maxWidth: 720, margin: '0 auto' }}>
            <ScrollFadeIn>
              <p className="eyebrow" style={{ marginBottom: 12 }}>Preguntas frecuentes</p>
              <h2 className="h1-text" style={{ marginBottom: 48 }}>Lo que suelen preguntar.</h2>
            </ScrollFadeIn>
            <FAQAccordion />
          </div>
        </section>

        {/* ── S9: CTA final ── */}
        <section id="contacto" style={{ background: 'var(--color-ink)', padding: '96px 24px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'relative', maxWidth: 600, margin: '0 auto', textAlign: 'center' }}>
            <h2 className="h1-text" style={{ color: '#F8FAFC', marginBottom: 16 }}>¿Listo para que Hero trabaje para ti?</h2>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.45)', marginBottom: 32 }}>
              Déjanos tu teléfono y te llamamos sin compromiso.
            </p>
            <PhoneCaptureForm />
            <p style={{ marginTop: 16, fontSize: 12, color: 'rgba(255,255,255,0.3)' }}>
              Sin compromiso · Sin tarjeta de crédito · Respuesta en menos de 24 h
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
