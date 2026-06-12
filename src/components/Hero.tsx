export function Hero() {
  return (
    <header className="relative mx-auto flex max-w-3xl flex-col items-center px-6 pt-28 text-center sm:pt-36">
      {/* Low moon, glowing softly behind the name */}
      <div
        aria-hidden="true"
        className="moon-drift pointer-events-none absolute -top-2 right-2 h-28 w-28 rounded-full sm:right-10 sm:h-36 sm:w-36"
        style={{
          background:
            'radial-gradient(circle at 38% 35%, #fff7e2 0%, #f3e4b8 45%, #cdbb86 100%)',
          boxShadow:
            '0 0 60px 12px rgba(255, 233, 184, 0.25), inset -10px -8px 24px rgba(80, 60, 30, 0.35)',
        }}
      />

      <p
        className="reveal font-body text-sm tracking-[0.35em] text-mist uppercase"
        style={{ '--reveal-delay': '120ms' } as React.CSSProperties}
      >
        Hello there
      </p>

      <h1
        className="reveal mt-5 font-display text-5xl leading-[1.05] font-light text-text sm:text-7xl"
        style={{ '--reveal-delay': '240ms' } as React.CSSProperties}
      >
        Teodor
        <br />
        <span className="italic" style={{ color: 'var(--color-lilac)' }}>
          Vecerdi
        </span>
      </h1>

      <p
        className="reveal mt-7 max-w-md font-body text-lg leading-relaxed text-mist"
        style={{ '--reveal-delay': '380ms' } as React.CSSProperties}
      >
        A software engineer who likes building quiet, careful things —
        somewhere between the backend and the stars.
      </p>
    </header>
  )
}
