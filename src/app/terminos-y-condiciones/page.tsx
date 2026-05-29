import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Términos y Condiciones',
  description: 'Términos y condiciones del servicio de Herohome.',
  robots: { index: false, follow: false },
}

const sections = [
  {
    title: 'Objeto',
    content: 'Los presentes Términos y Condiciones regulan el acceso y uso de los servicios ofrecidos por HEROHOME a través de herohome.es, incluyendo la plataforma de intermediación inmobiliaria y el agente IA Hero.',
    pending: false,
  },
  {
    title: 'Condiciones del Servicio',
    content: 'El usuario se compromete a usar los servicios de conformidad con la ley, la moral y el orden público. Herohome se reserva el derecho a modificar, suspender o cancelar el acceso al servicio en cualquier momento y por cualquier causa.',
    pending: true,
  },
  {
    title: 'Propiedad Intelectual',
    content: 'Todos los contenidos, logotipos, marcas, software y demás elementos de herohome.es son propiedad de HEROHOME o de sus licenciantes y están protegidos por la normativa de propiedad intelectual e industrial vigente.',
    pending: true,
  },
  {
    title: 'Limitación de Responsabilidad',
    content: 'Herohome no garantiza la exactitud, completitud o actualidad de la información publicada en la plataforma. En ningún caso Herohome será responsable por daños indirectos, incidentales o consecuentes derivados del uso del servicio.',
    pending: true,
  },
  {
    title: 'Protección de Datos',
    content: 'El tratamiento de datos personales se rige por nuestra Política de Privacidad, disponible en herohome.es/politica-de-privacidad, y por el Reglamento General de Protección de Datos (RGPD).',
    pending: false,
  },
  {
    title: 'Jurisdicción',
    content: 'Las presentes condiciones se rigen por la legislación española. Para la resolución de cualquier conflicto, las partes se someten a los juzgados y tribunales de España, con renuncia expresa a cualquier otro fuero.',
    pending: true,
  },
]

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main style={{ background: 'var(--color-ink)', minHeight: '100vh', paddingTop: 100 }}>
        <div style={{ maxWidth: 720, margin: '0 auto', padding: '48px 24px 96px' }}>
          <Link href="/" className="link-muted" style={{ marginBottom: 40 }}>
            ← Volver al inicio
          </Link>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16, marginBottom: 40, flexWrap: 'wrap' }}>
            <h1 className="h1-text" style={{ color: '#fff', margin: 0 }}>Términos y Condiciones</h1>
            <span style={{ fontSize: 11, fontWeight: 600, color: 'var(--color-warning)', background: 'rgba(194,98,10,0.12)', border: '1px solid rgba(194,98,10,0.3)', borderRadius: 20, padding: '4px 10px', letterSpacing: '0.08em', textTransform: 'uppercase', flexShrink: 0, alignSelf: 'center' }}>
              Pendiente de revisión legal
            </span>
          </div>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', marginBottom: 56 }}>Última actualización: enero 2026</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
            {sections.map(s => (
              <div key={s.title} style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 32 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12, flexWrap: 'wrap' }}>
                  <h2 style={{ fontSize: 16, fontWeight: 600, color: '#fff', letterSpacing: '-0.02em', margin: 0 }}>{s.title}</h2>
                  {s.pending && (
                    <span style={{ fontSize: 10, fontWeight: 600, color: 'var(--color-warning)', background: 'rgba(194,98,10,0.12)', borderRadius: 4, padding: '2px 7px', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                      Revisar
                    </span>
                  )}
                </div>
                <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, margin: 0 }}>{s.content}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
