import type { Metadata } from 'next'
import './globals.css'
import { LanguageProvider } from '@/lib/i18n/context'
import { Header } from '@/components/layout/Header'

export const metadata: Metadata = {
  title: 'Backend Developer Portfolio - Athos Barbosa De Sousa',
  description: 'Professional portfolio — specializing in Python, FastAPI, and API architecture',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <LanguageProvider>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <footer className="w-full border-t py-6">
            <div className="container mx-auto px-4 text-center text-sm text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} Athos — Backend Developer
            </div>
          </footer>
        </LanguageProvider>
      </body>
    </html>
  )
}
