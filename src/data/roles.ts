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
    period: 'Jan 2026 — Jul 2026',
    blurb:
      "Worked in Pearson's applied research lab, where small teams prototype new educational products ahead of the main portfolio. Built immersive classroom learning experiences for teachers and students, then an AI-powered language-learning app for wearables — full-stack across a .NET backend, a React web app, and a Kotlin Android client.",
  },
  {
    company: 'Mondly by Pearson',
    title: 'Unity and .NET Developer',
    period: 'Oct 2021 — Dec 2025',
    blurb:
      'Built VR language-learning experiences in Unity and C# on a two-engineer team, which meant covering everything: system architecture, backend and LiveOps infrastructure, gameplay, and UI. Shipped and maintained features end-to-end across several years of releases.',
  },
]
