import { links, constellationPath } from '../data/links'
import { Icons } from './icons'

const byId = Object.fromEntries(links.map((l) => [l.id, l]))
const points = constellationPath.map((id) => byId[id])

export function Constellation() {
  return (
    <section
      className="reveal relative mx-auto mt-28 w-full max-w-3xl px-6"
      style={{ '--reveal-delay': '520ms' } as React.CSSProperties}
      aria-label="Find me elsewhere"
    >
      <h2 className="mb-8 text-center font-display text-sm tracking-[0.3em] text-mist uppercase">
        find me among the stars
      </h2>

      <div className="relative aspect-[16/7] w-full">
        {/* Faint lines threading the constellation together */}
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <polyline
            points={points.map((p) => `${p.x},${p.y}`).join(' ')}
            fill="none"
            stroke="var(--color-lilac)"
            strokeOpacity="0.28"
            strokeWidth="0.3"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        {/* Stars as real, focusable links */}
        {links.map((l) => {
          const Icon = Icons[l.id]
          return (
            <a
              key={l.id}
              href={l.href}
              target={l.id === 'email' ? undefined : '_blank'}
              rel="noopener noreferrer"
              aria-label={l.label}
              className="group absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center"
              style={{ left: `${l.x}%`, top: `${l.y}%` }}
            >
              <span
                className="relative grid place-items-center rounded-full text-night transition-transform duration-300 group-hover:scale-110 group-focus-visible:scale-110"
                style={{
                  width: `${2.6 * l.size}rem`,
                  height: `${2.6 * l.size}rem`,
                  background:
                    'radial-gradient(circle at 38% 35%, #fff7e2, #e9d7a4 70%, #c9b884)',
                  boxShadow:
                    '0 0 0 1px rgba(255,233,184,0.4), 0 0 22px 2px rgba(255,233,184,0.18)',
                }}
              >
                <Icon className="h-1/2 w-1/2" />
              </span>
              <span className="mt-3 font-body text-xs tracking-wide text-mist opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                {l.label}
              </span>
            </a>
          )
        })}
      </div>
    </section>
  )
}
