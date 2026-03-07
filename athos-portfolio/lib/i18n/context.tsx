'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { Language, translations } from './translations'

type LanguageContextType = {
  lang: Language
  t: typeof translations['pt']
  setLang: (l: Language) => void
}

const LanguageContext = createContext<LanguageContextType | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>('pt')

  useEffect(() => {
    const saved = localStorage.getItem('lang')
    if (saved === 'en') setLangState('en')
  }, [])

  function setLang(l: Language) {
    setLangState(l)
    localStorage.setItem('lang', l)
    document.documentElement.lang = l === 'pt' ? 'pt-BR' : 'en'
  }

  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang], setLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used inside LanguageProvider')
  return ctx
}
