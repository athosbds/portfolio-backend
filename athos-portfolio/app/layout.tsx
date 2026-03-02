import type { Metadata } from 'next'
import './globals.css'
import ThemeToggle from '@/components/layout/ThemeToggle'

export const metadata: Metadata = {
  title: 'Portfólio Backend Developer - Athos Barbosa De Sousa',
  description: 'Portfolio profissional — especialidade em Python, FastAPI e arquitetura de APIs',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100`}> 
        <header className="w-full border-b bg-transparent/50 dark:bg-transparent/50 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <a href="/" className="text-lg font-bold">Athos Backend</a>
            <div className="flex items-center gap-3">
              <nav className="hidden sm:flex gap-4">
                <a href="#projects" className="text-sm text-gray-700 dark:text-gray-200 hover:underline">Projetos</a>
                <a href="#contact" className="text-sm text-gray-700 dark:text-gray-200 hover:underline">Contato</a>
              </nav>
              <ThemeToggle />
            </div>
          </div>
        </header>

        <main className="min-h-screen">
          {children}
        </main>

        <footer className="w-full border-t py-6">
          <div className="container mx-auto px-4 text-center text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Athos — Backend Developer
          </div>
        </footer>
      </body>
    </html>
  )
}
