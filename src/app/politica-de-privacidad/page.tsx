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
    content: 'El Responsable del tratamiento de los datos es HEROHOME, con domicilio social en C/ Gabriela Mistral 12, 1-C, provista con CIF número 53392945D y contacto hola@herohome.es. HEROHOME tratará los datos facilitados por el usuario con la finalidad de gestionar las operaciones de intermediación de inmuebles que se le soliciten y para informarle, también vía electrónica, sobre novedades de la entidad, sus productos y/o servicios que puedan ser de su interés.',
  },
  {
    title: 'Finalidad',
    content: 'Al efecto, con el fin de poder ofrecer al usuario productos y servicios de HEROHOME de acuerdo con sus intereses, HEROHOME podrá elaborar perfiles en base a la información obtenida del usuario. En los formularios del Sitio Web, será necesario que el usuario cumplimente los campos que HEROHOME requiera como obligatorios ya que, en caso contrario, HEROHOME no podrá atender la solicitud del usuario. El usuario debe facilitar a HEROHOME sus datos personales actuales a fin de que la información contenida en sus ficheros esté actualizada y sin errores. Plazo de conservación: Los datos personales proporcionados por el usuario se conservarán por HEROHOME durante el plazo previsto por la normativa vigente (en especial, en materia de blanqueo de capitales, fiscal y contable), una vez finalice la relación contractual.',
  },
  {
    title: 'Legitimación',
    content: 'La base legal para el tratamiento de datos es la ejecución de la relación contractual con HEROHOME, el consentimiento explícito para las elaboraciones de perfiles y el cumplimiento de obligaciones legales impuestas a HEROHOME. Origen: Los datos personales del usuario proceden del formulario cumplimentado por el usuario y aquellos proporcionados por el mismo a través del área privada. Categoría de datos: Los datos personales objeto de tratamiento son el nombre y apellidos, número de DNI/NIE o pasaporte, la dirección postal, el correo electrónico, el teléfono y la firma, así como información relativa al empleo, su actividad profesional y los datos bancarios.',
  },
  {
    title: 'Destinatarios',
    content: 'Los datos podrán comunicarse a entidades del Grupo con finalidades administrativas internas y comerciales, a las Administraciones Públicas en los supuestos previstos legalmente y a las entidades colaboradoras de HEROHOME para la gestión de los servicios que se les contraten. Asimismo, los datos personales del usuario también pueden tratarse por proveedores de fuera de la Unión Europea, en condiciones de seguridad y confidencialidad, de conformidad con las oportunas garantías jurídicas. Si el usuario requiere más información al respecto, puede solicitarla por correo electrónico a la dirección hola@herohome.es.',
  },
  {
    title: 'Derechos',
    content: 'El usuario puede ejercer su derecho de acceso a los datos personales, así como solicitar la rectificación de los datos inexactos o, en su caso, su supresión cuando los datos ya no sean necesarios para los fines que fueron recogidos. También podrá solicitar la limitación, portabilidad y oposición del tratamiento de sus datos, en determinadas circunstancias y por motivos relacionados con su situación particular, así como a no ser objeto de decisiones basadas únicamente en el tratamiento automatizado de datos. Igualmente, tiene derecho a revocar el consentimiento prestado en cualquier momento sin que ello afecte de forma retroactiva al tratamiento de datos personales realizado hasta ese momento. El usuario podrá ejercitar los derechos referidos anteriormente, en los términos y condiciones previstos en la legislación vigente, en el domicilio social de HEROHOME o solicitarlo mediante el envío de correo electrónico a hola@herohome.es. En el supuesto de que no obtenga una respuesta satisfactoria y desee formular una reclamación u obtener mayor información al respecto de cualquiera de estos derechos, puede acudirse a la Agencia Española de Protección de Datos (www.aepd.es).',
  },
  {
    title: 'Medidas de Seguridad',
    content: 'HEROHOME garantiza que ha adoptado los niveles de seguridad de protección de los datos personales legalmente requeridos, acordes al tipo de datos recabados y ha instalado todos los medios y medidas de índole técnica, personal y organizativa para garantizar la confidencialidad, integridad y calidad de la información, así como para evitar la pérdida, mal uso, alteración, acceso no autorizado y robo de los datos personales facilitados.',
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
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', marginBottom: 56 }}>Última actualización: julio 2026</p>
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
