import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://herohome.es'
  const now = new Date('2026-07-10')

  return [
    { url: base, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/honorarios`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/valoracion`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/hero-ia`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/mi-app`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
  ]
}
