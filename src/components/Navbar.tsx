'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Logo from './Logo'

const NAV_LINKS = [
  { label: 'Cómo funciona', href: '/#como-funciona' },
  { label: 'Comisión', href: '/#precios' },
  { label: 'Hero IA', href: '/hero-ia' },
  { label: 'Mi app', href: '/mi-app' },
  { label: 'FAQ', href: '/#faq' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: 'background 0.2s, backdrop-filter 0.2s, border-color 0.2s',
          background: scrolled ? 'rgba(10,14,23,0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : '1px solid transparent',
        }}
      >
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
          <Link href="/" style={{ textDecoration: 'none', color: '#fff' }}>
            <Logo />
          </Link>

          {/* Desktop nav */}
          <div style={{ alignItems: 'center', gap: 32 }} className="hidden md:flex">
            {NAV_LINKS.map(link => (
              <Link
                key={link.href}
                href={link.href}
                style={{ fontSize: 14, fontWeight: 500, color: 'rgba(255,255,255,0.75)', textDecoration: 'none', letterSpacing: '-0.01em', transition: 'color 0.15s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.75)')}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/valoracion"
              className="btn-primary"
              style={{ fontSize: 14, padding: '9px 18px' }}
              data-gtm="cta-valorar-nav"
            >
              Valorar mi vivienda
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8, color: '#fff', flexDirection: 'column', gap: 5 }}
            className="flex md:hidden"
          >
            <span style={{ display: 'block', width: 22, height: 2, background: '#fff', transition: 'transform 0.2s', transform: open ? 'rotate(45deg) translate(4px, 7px)' : 'none' }}/>
            <span style={{ display: 'block', width: 22, height: 2, background: '#fff', transition: 'opacity 0.2s', opacity: open ? 0 : 1 }}/>
            <span style={{ display: 'block', width: 22, height: 2, background: '#fff', transition: 'transform 0.2s', transform: open ? 'rotate(-45deg) translate(4px, -7px)' : 'none' }}/>
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      {open && (
        <div
          style={{
            position: 'fixed', inset: 0, zIndex: 40,
            background: 'var(--color-ink)',
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            gap: 40,
          }}
        >
          {NAV_LINKS.map(link => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{ fontSize: 24, fontWeight: 600, color: '#fff', textDecoration: 'none', letterSpacing: '-0.02em' }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/valoracion"
            className="btn-primary"
            onClick={() => setOpen(false)}
            data-gtm="cta-valorar-nav"
            style={{ fontSize: 16, padding: '14px 32px', marginTop: 16 }}
          >
            Valorar mi vivienda
          </Link>
        </div>
      )}
    </>
  )
}
