'use client'

import { pushEvent } from '@/lib/gtm'

export default function AgendarButton() {
  return (
    <a
      href="https://calendar.app.google/FpfGsprsuqozfMUz7"
      target="_blank"
      rel="noopener noreferrer"
      className="btn-outline-violet"
      data-gtm="cta-agendar-llamada"
      onClick={() => pushEvent('conversion_agendar', { cta: 'agendar-llamada' })}
    >
      Agendar llamada →
    </a>
  )
}
