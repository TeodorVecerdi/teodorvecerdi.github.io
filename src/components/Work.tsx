import { roles } from '../data/roles'

export function Work() {
  return (
    <div className="flex h-full flex-col">
      <p
        className="settle eyebrow"
        style={{ '--settle-delay': '200ms' } as React.CSSProperties}
      >
        Work
      </p>

      <ol className="mt-8 flex flex-col">
        {roles.map((role, i) => (
          <li
            key={role.company}
            className="settle border-t py-6 first:pt-0 first:border-t-0"
            style={
              {
                '--settle-delay': `${300 + i * 90}ms`,
                borderColor: 'var(--faint)',
              } as React.CSSProperties
            }
          >
            <div className="flex items-baseline justify-between gap-4">
              <h2 className="font-serif text-2xl leading-tight font-normal">
                {role.title}
              </h2>
              <span
                className="shrink-0 font-sans text-xs tracking-wide tabular-nums"
                style={{ color: 'var(--muted)' }}
              >
                {role.period}
              </span>
            </div>

            <p
              className="mt-1 font-sans text-sm font-medium"
              style={{ color: 'var(--accent)' }}
            >
              {role.company}
            </p>

            <p
              className="mt-3 max-w-prose font-sans text-[14.5px] leading-relaxed"
              style={{ color: 'var(--muted)' }}
            >
              {role.blurb}
            </p>
          </li>
        ))}
      </ol>
    </div>
  )
}
