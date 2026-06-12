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
    title: 'Unity and .NET Developer',
    period: 'Oct 2021 — Dec 2025',
    blurb:
      'Built VR language-learning experiences in Unity and C#, backed by .NET cloud services. On a small team I owned a lot of the surface area — system architecture, backend and LiveOps infrastructure, gameplay, and UI — shipping and maintaining features end-to-end across several years of releases.',
  },
]
