export type Role = {
  company: string
  title: string
  period: string
  blurb: string
}

export const roles: Role[] = [
  {
    company: 'Mondly by Pearson',
    title: 'VR / Unity / .NET Developer',
    period: 'Oct 2021 — Dec 2025',
    blurb:
      'A small team, so I wore every hat — UI & game design, architecture, cloud services, and LiveOps — building VR language-learning experiences in Unity and .NET.',
  },
  {
    company: 'Pearson Labs',
    title: 'Software Engineer',
    period: '2026 — present',
    blurb:
      'Full-stack engineering across a .NET backend and a React frontend: services, APIs, and the interfaces that sit on top of them.',
  },
]
