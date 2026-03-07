'use client'

import { useLanguage } from '@/lib/i18n/context'

export function LanguageSwitcher() {
  const { lang, setLang } = useLanguage()

  return (
    <div className="flex items-center text-sm border border-gray-200 dark:border-gray-700 rounded-md overflow-hidden">
      <button
        onClick={() => setLang('pt')}
        className={`px-2 py-1 transition-colors ${
          lang === 'pt'
            ? 'bg-blue-600 text-white'
            : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
        }`}
      >
        PT
      </button>
      <button
        onClick={() => setLang('en')}
        className={`px-2 py-1 transition-colors ${
          lang === 'en'
            ? 'bg-blue-600 text-white'
            : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
        }`}
      >
        EN
      </button>
    </div>
  )
}
