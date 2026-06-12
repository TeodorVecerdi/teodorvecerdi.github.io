export type SocialLink = {
  id: string
  label: string
  href: string
}

export const links: SocialLink[] = [
  { id: 'github', label: 'GitHub', href: 'https://github.com/TeodorVecerdi' },
  { id: 'linkedin', label: 'LinkedIn', href: 'https://linkedin.com/in/TeodorVecerdi' },
  { id: 'x', label: 'X', href: 'https://x.com/TeodorVecerdi' },
  { id: 'email', label: 'Email', href: 'mailto:teodor@vecerdi.ai' },
]
