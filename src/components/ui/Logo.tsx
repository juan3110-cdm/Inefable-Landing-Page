import logoSrc from '../../assets/brand/logo-inefable.webp'

export default function Logo({ size = 20, loading = 'eager' }: { size?: number; loading?: 'eager' | 'lazy' }) {
  return (
    <img
      src={logoSrc}
      alt="Inefable — Agencia de IA"
      loading={loading}
      decoding="async"
      width={Math.round((size * 480) / 104)}
      height={size}
      style={{ height: size, width: 'auto', display: 'block' }}
    />
  )
}
