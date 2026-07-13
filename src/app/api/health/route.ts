import { NextResponse } from 'next/server'

// Diagnóstico temporal: NO expone el valor de la key, solo si está presente.
export const dynamic = 'force-dynamic'

export async function GET() {
  const key = process.env.RESEND_API_KEY
  return NextResponse.json({
    resendKeyPresent: !!key,
    resendKeyLen: key ? key.length : 0,
    makeWebhookPresent: !!process.env.MAKE_WEBHOOK_URL,
    at: new Date().toISOString(),
  })
}
