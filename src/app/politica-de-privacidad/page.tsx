import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Política de Privacidad',
  description: 'Información sobre el tratamiento de datos personales por parte de Herohome.',
  robots: { index: false, follow: false },
}

const sections = [
  {
    title: 'Responsable del Tratamiento',
    content: 'HEROHOME, C/ Gabriela Mistral 12, 1-C, CIF 53392945D, hola@herohome.es',
  },
  {
    title: 'Finalidad',
    content: 'Gestionar operaciones de intermediación inmobiliaria e informar sobre novedades. Plazo de conservación: según normativa vigente en materia de blanqueo de capitales, fiscal y contable.',
  },
  {
    title: 'Legitimación',
    content: 'Ejecución de relación contractual, consentimiento explícito del interesado y cumplimiento de obligaciones legales. Datos tratados: nombre, apellidos, DNI/NIE, dirección, email, teléfono, firma y datos bancarios cuando corresponda.',
  },
  {
    title: 'Destinatarios',
    content: 'Entidades del Grupo, Administraciones Públicas, entidades colaboradoras y proveedores fuera de la UE que ofrezcan las garantías jurídicas adecuadas conforme al RGPD.',
  },
  {
    title: 'Derechos',
    content: 'Puedes ejercer tus derechos de acceso, rectificación, supresión, limitación, portabilidad y oposición dirigiéndote a hola@herohome.es o al domicilio social. Si consideras que el tratamiento no es conforme a la normativa, puedes presentar una reclamación ante la Agencia Española de Protección de Datos (www.aepd.es).',
  },
  {
    title: 'Medidas de Seguridad',
    content: 'Herohome aplica los niveles de seguridad legalmente requeridos e implementa medidas técnicas, personales y organizativas adecuadas para garantizar la confidencialidad, integridad y calidad de los datos personales.',
  },
]

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main style={{ background: 'var(--color-ink)', minHeight: '100vh', paddingTop: 100 }}>
        <div style={{ maxWidth: 720, margin: '0 auto', padding: '48px 24px 96px' }}>
          <Link href="/" className="link-muted" style={{ marginBottom: 40 }}>
            ← Volver al inicio
          </Link>
          <h1 className="h1-text" style={{ color: '#fff', marginBottom: 12 }}>Política de Privacidad</h1>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', marginBottom: 56 }}>Última actualización: enero 2026</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
            {sections.map(s => (
              <div key={s.title} style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 32 }}>
                <h2 style={{ fontSize: 16, fontWeight: 600, color: '#fff', letterSpacing: '-0.02em', marginBottom: 12 }}>{s.title}</h2>
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
