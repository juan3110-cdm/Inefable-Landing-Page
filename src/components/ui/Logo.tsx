import logoSrc from '../../assets/brand/logo-inefable.png'

export default function Logo({ size = 20 }: { size?: number }) {
  return <img src={logoSrc} alt="Inefable — Agencia de IA" style={{ height: size, width: 'auto', display: 'block' }} />
}
