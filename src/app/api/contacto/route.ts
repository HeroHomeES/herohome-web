import { NextRequest, NextResponse } from 'next/server'
import { sendLeadEmail, isEmailConfigured } from '@/lib/email'

export async function POST(req: NextRequest) {
  const body = await req.json()

  // 1) Reenvío a Make (best-effort, se mantiene)
  const webhookUrl = process.env.MAKE_WEBHOOK_URL
  if (webhookUrl && !webhookUrl.includes('PLACEHOLDER')) {
    try {
      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ source: 'web-contacto', ...body }),
      })
    } catch (err) {
      console.error('[contacto] webhook error:', err)
    }
  }

  // 2) Email a hola@herohome.es
  if (isEmailConfigured()) {
    try {
      await sendLeadEmail({ subject: 'Nuevo contacto desde la web — Herohome', data: body })
    } catch (err) {
      console.error('[contacto] email error:', err)
      return NextResponse.json({ ok: false, error: 'email_failed' }, { status: 502 })
    }
  } else {
    console.warn('[contacto] RESEND_API_KEY no configurada — email omitido. Payload:', body)
  }

  return NextResponse.json({ ok: true })
}
