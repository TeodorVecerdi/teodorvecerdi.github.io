import { roles } from '../data/roles'

export function WorkTrail() {
  return (
    <section
      className="reveal mx-auto mt-32 w-full max-w-2xl px-6"
      style={{ '--reveal-delay': '640ms' } as React.CSSProperties}
      aria-label="Work experience"
    >
      <h2 className="mb-12 text-center font-display text-sm tracking-[0.3em] text-mist uppercase">
        a trail through the years
      </h2>

      <ol className="relative">
        {/* The comet trail line */}
        <span
          aria-hidden="true"
          className="absolute top-2 bottom-2 left-[7px] w-px"
          style={{
            background:
              'linear-gradient(to bottom, transparent, var(--color-lilac) 12%, var(--color-lilac) 88%, transparent)',
            opacity: 0.4,
          }}
        />

        {roles.map((role) => (
          <li key={role.company} className="relative mb-12 pl-10 last:mb-0">
            {/* Glowing node */}
            <span
              aria-hidden="true"
              className="absolute top-1.5 left-0 h-3.5 w-3.5 rounded-full"
              style={{
                background:
                  'radial-gradient(circle at 35% 35%, #fff7e2, #ffe9b8 60%, #d8c389)',
                boxShadow: '0 0 14px 2px rgba(255,233,184,0.4)',
              }}
            />
            <p className="font-body text-xs tracking-[0.2em] text-mist uppercase">
              {role.period}
            </p>
            <h3 className="mt-1 font-display text-2xl font-light text-text">
              {role.title}
            </h3>
            <p
              className="font-body text-base font-medium"
              style={{ color: 'var(--color-lilac)' }}
            >
              {role.company}
            </p>
            <p className="mt-3 font-body text-[15px] leading-relaxed text-mist">
              {role.blurb}
            </p>
          </li>
        ))}
      </ol>
    </section>
  )
}
