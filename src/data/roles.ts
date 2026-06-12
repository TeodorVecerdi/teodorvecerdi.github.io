export type Role = {
  company: string
  title: string
  period: string
  blurb: string
}

export const roles: Role[] = [
  {
    company: 'Pearson Labs',
    title: 'Software Engineer',
    period: '2026 — present',
    blurb:
      "Engineering inside Pearson's applied research lab — prototyping and building to imagine the future of education. Lately: AI-powered language learning on wearables, where I work full-stack across a .NET backend, a React web app, and a Kotlin Android client.",
  },
  {
    company: 'Mondly by Pearson',
    title: 'VR / Unity / .NET Developer',
    period: 'Oct 2021 — Dec 2025',
    blurb:
      'A small team, so I wore every hat — UI & game design, architecture, cloud services, and LiveOps — building VR language-learning experiences in Unity and .NET.',
  },
]
