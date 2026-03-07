'use client'

import { useLanguage } from '@/lib/i18n/context'
import { LanguageSwitcher } from './LanguageSwitcher'
import ThemeToggle from './ThemeToggle'

export function Header() {
  const { t } = useLanguage()

  return (
    <header className="w-full border-b bg-transparent/50 dark:bg-transparent/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="/" className="text-lg font-bold">Athos Backend</a>
        <div className="flex items-center gap-3">
          <nav className="hidden sm:flex gap-4">
            <a href="/#projects" className="text-sm text-gray-700 dark:text-gray-200 hover:underline">
              {t.nav.projects}
            </a>
            <a href="/#contact" className="text-sm text-gray-700 dark:text-gray-200 hover:underline">
              {t.nav.contact}
            </a>
          </nav>
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
