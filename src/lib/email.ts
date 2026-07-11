import { Resend } from 'resend'

const FROM = process.env.LEAD_EMAIL_FROM || 'Herohome <onboarding@resend.dev>'
const TO = process.env.LEAD_EMAIL_TO || 'hola@herohome.es'

/** true si hay API key de Resend configurada (envío de email activo). */
export function isEmailConfigured() {
  return !!process.env.RESEND_API_KEY
}

const LABELS: Record<string, string> = {
  nombre: 'Nombre',
  telefono: 'Teléfono',
  email: 'Email',
  ciudad: 'Ciudad',
  tipo: 'Tipo de vivienda',
  direccion: 'Dirección',
  metros: 'Superficie (m²)',
  precio_estimado: 'Precio estimado',
  origen: 'Origen',
}

function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, c => (
    { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c] as string
  ))
}

/**
 * Envía un email con los datos de un lead a hola@herohome.es (o LEAD_EMAIL_TO).
 * Lanza si RESEND_API_KEY no está configurada o si el envío falla.
 */
export async function sendLeadEmail(opts: { subject: string; data: Record<string, unknown> }) {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) throw new Error('RESEND_API_KEY no configurada')

  const resend = new Resend(apiKey)

  const rows = Object.entries(opts.data)
    .filter(([, v]) => v !== undefined && v !== null && String(v).trim() !== '')
    .map(([k, v]) => ({ label: LABELS[k] || k, value: String(v) }))

  const html = `
    <div style="font-family:Inter,Arial,sans-serif;font-size:14px;color:#0A0E17;line-height:1.6">
      <h2 style="margin:0 0 16px;font-size:18px">${escapeHtml(opts.subject)}</h2>
      <table style="border-collapse:collapse">
        ${rows.map(r => `<tr>
          <td style="padding:6px 16px 6px 0;color:#64748B;vertical-align:top;white-space:nowrap">${escapeHtml(r.label)}</td>
          <td style="padding:6px 0;font-weight:600">${escapeHtml(r.value)}</td>
        </tr>`).join('')}
      </table>
    </div>`

  const text = rows.map(r => `${r.label}: ${r.value}`).join('\n')

  const leadEmail = typeof opts.data.email === 'string' ? opts.data.email.trim() : ''

  const { error } = await resend.emails.send({
    from: FROM,
    to: TO,
    subject: opts.subject,
    html,
    text,
    ...(leadEmail ? { replyTo: leadEmail } : {}),
  })

  if (error) throw new Error(`Resend: ${error.message}`)
}
