import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const body = await req.json()
  const webhookUrl = process.env.MAKE_WEBHOOK_URL

  if (webhookUrl && !webhookUrl.includes('PLACEHOLDER')) {
    try {
      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ source: 'web-valoracion', ...body }),
      })
    } catch (err) {
      console.error('[valoracion] webhook error:', err)
    }
  } else {
    console.log('[valoracion] webhook not configured — payload:', body)
  }

  return NextResponse.json({ ok: true })
}
