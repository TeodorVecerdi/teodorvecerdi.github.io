export function Footer() {
  return (
    <footer
      className="reveal mx-auto mt-28 mb-16 flex max-w-2xl flex-col items-center gap-3 px-6 text-center"
      style={{ '--reveal-delay': '760ms' } as React.CSSProperties}
    >
      <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M12 2l1.6 6.4L20 10l-6.4 1.6L12 18l-1.6-6.4L4 10l6.4-1.6L12 2z"
          fill="var(--color-star)"
          opacity="0.8"
        />
      </svg>
      <p className="font-body text-xs tracking-wide text-mist">
        © {new Date().getFullYear()} Teodor Vecerdi · made under a quiet sky
      </p>
    </footer>
  )
}
