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
    period: 'Jan 2026 — present',
    blurb:
      "Engineering inside Pearson's applied research lab, where we prototype and build to imagine the future of education. I've worked on immersive learning experiences that give teachers new ways to engage their students, and most recently on AI-powered language learning for wearables — full-stack across a .NET backend, a React web app, and a Kotlin Android client.",
  },
  {
    company: 'Mondly by Pearson',
    title: 'Unity and .NET Developer',
    period: 'Oct 2021 — Dec 2025',
    blurb:
      'Built VR language-learning experiences in Unity and C# as part of a tight two-engineer team. With that much ground to cover, we each wore every hat — I worked across system architecture, backend and LiveOps infrastructure, gameplay, and UI, shipping and maintaining features end-to-end across several years of releases.',
  },
]
