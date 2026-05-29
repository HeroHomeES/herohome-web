'use client'

import { useState } from 'react'
import { FAQS } from '@/lib/faq-data'

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div>
      {FAQS.map((faq, i) => (
        <div
          key={i}
          style={{
            borderBottom: i < FAQS.length - 1 ? '1px solid var(--color-border)' : 'none',
          }}
        >
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            aria-expanded={openIndex === i}
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 16,
              padding: '20px 0',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              textAlign: 'left',
            }}
          >
            <span style={{ fontSize: 16, fontWeight: 500, color: 'var(--color-ink)', letterSpacing: '-0.01em', lineHeight: 1.4 }}>
              {faq.question}
            </span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              aria-hidden="true"
              style={{
                flexShrink: 0,
                color: 'var(--color-violet)',
                transition: 'transform 0.25s ease',
                transform: openIndex === i ? 'rotate(180deg)' : 'rotate(0deg)',
              }}
            >
              <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <div
            style={{
              overflow: 'hidden',
              maxHeight: openIndex === i ? 500 : 0,
              transition: 'max-height 0.3s ease',
            }}
          >
            <p style={{ fontSize: 14, color: 'var(--color-slate)', lineHeight: 1.75, margin: 0, paddingBottom: 24 }}>
              {faq.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

