import { useEffect } from 'react'
import { SITE } from '../config/site'

function setMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setCanonical(path: string) {
  let el = document.querySelector('link[rel="canonical"]')
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', 'canonical')
    document.head.appendChild(el)
  }
  el.setAttribute('href', `${SITE.url}${path}`)
}

/**
 * Overrides document title/description/canonical for a specific route.
 * LanguageProvider owns these for "/"; this hook is for the sub-pages
 * (legal, 404) that aren't part of the bilingual Translations object.
 */
export function useDocumentHead(title: string, description: string, path: string) {
  useEffect(() => {
    const prevTitle = document.title
    document.title = title
    setMeta('name', 'description', description)
    setMeta('property', 'og:title', title)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:url', `${SITE.url}${path}`)
    setMeta('name', 'twitter:title', title)
    setMeta('name', 'twitter:description', description)
    setCanonical(path)
    return () => {
      document.title = prevTitle
    }
  }, [title, description, path])
}
