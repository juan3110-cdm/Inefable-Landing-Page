import claudeLogo from '../assets/stack/claude.svg'
import openaiLogo from '../assets/stack/openai.svg'
import n8nLogo from '../assets/stack/n8n.svg'
import makeLogo from '../assets/stack/make.svg'
import reactLogo from '../assets/stack/react.svg'
import nodeLogo from '../assets/stack/nodedotjs.svg'
import vercelLogo from '../assets/stack/vercel.svg'
import supabaseLogo from '../assets/stack/supabase.svg'
import twilioLogo from '../assets/stack/twilio.svg'
import metaLogo from '../assets/stack/meta.svg'
import googleAdsLogo from '../assets/stack/googleads.svg'
import stripeLogo from '../assets/stack/stripe.svg'

export type StackCategoryKey = 'ai' | 'automation' | 'frontend' | 'backend' | 'deploy' | 'voice' | 'ads' | 'payments'

export interface StackTool {
  key: string
  name: string
  logo: string
  bg: string
  glow: string
  categoryKey: StackCategoryKey
}

export const STACK_TOOLS: StackTool[] = [
  { key: 'claude', name: 'Claude', logo: claudeLogo, bg: '#d97757', glow: 'rgba(217,119,87,.3)', categoryKey: 'ai' },
  { key: 'openai', name: 'OpenAI', logo: openaiLogo, bg: '#10a37f', glow: 'rgba(16,163,127,.3)', categoryKey: 'ai' },
  { key: 'n8n', name: 'n8n', logo: n8nLogo, bg: '#ea4b71', glow: 'rgba(234,75,113,.3)', categoryKey: 'automation' },
  { key: 'make', name: 'Make.com', logo: makeLogo, bg: '#6d00cc', glow: 'rgba(109,0,204,.3)', categoryKey: 'automation' },
  { key: 'react', name: 'React', logo: reactLogo, bg: '#149eca', glow: 'rgba(20,158,202,.3)', categoryKey: 'frontend' },
  { key: 'node', name: 'Node.js', logo: nodeLogo, bg: '#3c873a', glow: 'rgba(60,135,58,.3)', categoryKey: 'backend' },
  { key: 'vercel', name: 'Vercel', logo: vercelLogo, bg: '#000000', glow: 'rgba(255,255,255,.2)', categoryKey: 'deploy' },
  { key: 'supabase', name: 'Supabase', logo: supabaseLogo, bg: '#3ecf8e', glow: 'rgba(62,207,142,.3)', categoryKey: 'backend' },
  { key: 'twilio', name: 'Twilio', logo: twilioLogo, bg: '#f22f46', glow: 'rgba(242,47,70,.3)', categoryKey: 'voice' },
  { key: 'meta', name: 'Meta Ads', logo: metaLogo, bg: '#0866ff', glow: 'rgba(8,102,255,.3)', categoryKey: 'ads' },
  { key: 'googleads', name: 'Google Ads', logo: googleAdsLogo, bg: '#ea4335', glow: 'rgba(234,67,53,.3)', categoryKey: 'ads' },
  { key: 'stripe', name: 'Stripe', logo: stripeLogo, bg: '#635bff', glow: 'rgba(99,91,255,.3)', categoryKey: 'payments' },
]
