import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import WhatsAppButton from '@/components/WhatsAppButton'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://herohome.es'),
  title: {
    default: 'Herohome — Vende tu piso con IA | Comisión 1%',
    template: '%s | Herohome',
  },
  description: 'Vende tu vivienda con Hero, tu agente inmobiliario IA. Gestiona visitas, filtra compradores y analiza ofertas por ti. Comisión del 1% para vendedor y comprador, sin sorpresas.',
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://herohome.es/' },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://herohome.es',
    siteName: 'Herohome',
    title: 'Herohome — Vende tu piso con IA | Comisión 1%',
    description: 'Vende tu vivienda con Hero, tu agente inmobiliario IA. Comisión del 1% para vendedor y comprador, sin sorpresas.',
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Herohome',
  url: 'https://herohome.es',
  description: 'Plataforma digital para vender viviendas en España con un agente inmobiliario IA. Comisión del 1% para vendedor y comprador.',
  areaServed: 'España',
  serviceType: 'Compraventa inmobiliaria sin intermediarios',
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'hola@herohome.es',
    contactType: 'customer support',
    availableLanguage: 'Spanish',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={inter.variable}>
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">{`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-MG3J7RKZ');
        `}</Script>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body style={{ fontFamily: 'var(--font-inter, Inter, sans-serif)' }}>
        {/* GTM noscript */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MG3J7RKZ"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        {children}
        <WhatsAppButton />
      </body>
    </html>
  )
}
