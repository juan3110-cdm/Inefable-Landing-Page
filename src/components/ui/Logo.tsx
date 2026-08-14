export default function Logo({ size = 20 }: { size?: number }) {
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'baseline',
        gap: 6,
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: size,
        letterSpacing: '-.02em',
      }}
    >
      <span className="gradient-text">Inefable</span>
      <span
        style={{
          fontFamily: 'var(--font-sans)',
          fontWeight: 700,
          fontSize: size * 0.32,
          color: 'var(--color-accent-purple-light)',
          letterSpacing: '.02em',
          alignSelf: 'flex-start',
          marginTop: 2,
        }}
      >
        Agencia de IA
      </span>
    </span>
  )
}
