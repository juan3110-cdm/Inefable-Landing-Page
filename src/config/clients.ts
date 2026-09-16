import martiLogo from '../assets/clients/proyecto-marti.webp'
import vcrLogo from '../assets/clients/vcr.webp'

export interface ClientLogoConfig {
  name: string
  src: string
  shape: 'circle' | 'card'
}

export const CLIENTS: ClientLogoConfig[] = [
  { name: 'Proyecto Martí', src: martiLogo, shape: 'circle' },
  { name: 'VCR', src: vcrLogo, shape: 'card' },
]
