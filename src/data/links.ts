export type SocialLink = {
  id: string
  label: string
  href: string
  /** Position on the constellation canvas, in 0–100 viewBox units. */
  x: number
  y: number
  /** Relative star size. */
  size: number
}

export const links: SocialLink[] = [
  { id: 'github', label: 'GitHub', href: 'https://github.com/TeodorVecerdi', x: 14, y: 30, size: 1.15 },
  { id: 'bluesky', label: 'Bluesky', href: 'https://bsky.app/profile/vecerdi.dev', x: 35, y: 58, size: 1 },
  { id: 'linkedin', label: 'LinkedIn', href: 'https://linkedin.com/in/TeodorVecerdi', x: 56, y: 26, size: 1.1 },
  { id: 'twitter', label: 'Twitter', href: 'https://twitter.com/TeodorVecerdi', x: 74, y: 56, size: 0.95 },
  { id: 'email', label: 'Email', href: 'mailto:teodor@vecerdi.ai', x: 90, y: 34, size: 1.2 },
]

/** Order of star ids the constellation line threads through. */
export const constellationPath = ['github', 'bluesky', 'linkedin', 'twitter', 'email']
