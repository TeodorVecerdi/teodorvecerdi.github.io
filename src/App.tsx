import { useEffect, useState } from 'react'
import { Intro } from './components/Intro'
import { Work } from './components/Work'

type Theme = 'paper' | 'dark'

const getInitialTheme = (): Theme =>
  window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'paper'

function App() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  return (
    <div className="relative min-h-[100dvh] w-full lg:flex lg:items-center lg:overflow-hidden">
      {/* Theme toggle — defaults to the OS preference */}
      <button
        onClick={() => setTheme((t) => (t === 'paper' ? 'dark' : 'paper'))}
        className="fixed top-5 right-5 z-10 rounded-full border px-3 py-1.5 font-sans text-xs tracking-wide transition-colors"
        style={{ borderColor: 'var(--faint)', color: 'var(--muted)' }}
        aria-label="Toggle theme"
      >
        {theme === 'paper' ? '◐ dark' : '◑ paper'}
      </button>

      <main className="mx-auto w-full max-w-5xl px-7 py-16 sm:px-10 lg:py-0">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-[1fr_1px_1fr] lg:gap-y-0 lg:gap-x-14">
          {/* Left: intro + links */}
          <section className="lg:py-4">
            <Intro />
          </section>

          {/* Divider rule (desktop only) */}
          <div
            aria-hidden="true"
            className="hidden lg:block"
            style={{ background: 'var(--faint)' }}
          />

          {/* Right: work */}
          <section className="lg:py-4">
            <Work />
          </section>
        </div>

        <footer
          className="settle mt-16 font-sans text-xs lg:absolute lg:bottom-6 lg:left-1/2 lg:mt-0 lg:-translate-x-1/2"
          style={
            {
              '--settle-delay': '520ms',
              color: 'var(--muted)',
            } as React.CSSProperties
          }
        >
          © {new Date().getFullYear()} Teodor Vecerdi
        </footer>
      </main>
    </div>
  )
}

export default App
