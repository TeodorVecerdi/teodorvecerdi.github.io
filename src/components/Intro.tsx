import { links } from '../data/links'
import { Icons } from './icons'

export function Intro() {
  return (
    <div className="flex h-full flex-col justify-between">
      <div>
        <p
          className="settle eyebrow"
          style={{ '--settle-delay': '60ms' } as React.CSSProperties}
        >
          About me
        </p>

        <h1
          className="settle mt-8 font-serif text-6xl leading-[0.98] font-light tracking-[-0.02em] sm:text-7xl"
          style={{ '--settle-delay': '140ms' } as React.CSSProperties}
        >
          Teodor
          <br />
          Vecerdi
        </h1>

        <p
          className="settle mt-8 max-w-sm font-sans text-[15px] leading-relaxed"
          style={
            {
              '--settle-delay': '240ms',
              color: 'var(--muted)',
            } as React.CSSProperties
          }
        >
          I'm a software engineer who cares about building things well —
          solid architecture, systems that hold up, and the small details that
          make software feel considered. I work comfortably across the stack,
          but engineering is where I'm most at home.
        </p>
      </div>

      <nav
        className="settle mt-12 flex flex-wrap gap-x-6 gap-y-3"
        style={{ '--settle-delay': '340ms' } as React.CSSProperties}
        aria-label="Links"
      >
        {links.map((l) => {
          const Icon = Icons[l.id]
          return (
            <a
              key={l.id}
              href={l.href}
              target={l.id === 'email' ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 font-sans text-sm"
            >
              <Icon className="h-4 w-4" style={{ color: 'var(--muted)' }} />
              <span
                className="border-b pb-0.5 transition-colors"
                style={{ borderColor: 'var(--faint)' }}
              >
                {l.label}
              </span>
            </a>
          )
        })}
      </nav>
    </div>
  )
}
