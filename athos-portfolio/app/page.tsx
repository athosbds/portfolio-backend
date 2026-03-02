import { projects } from '@/lib/projects'
import { ProjectCard } from '@/components/projects/ProjectCard'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Github, Linkedin, Mail, 
  Server, Shield, TestTube, 
  BookOpen, Cloud, Zap, Database,
  Code, Lock
} from 'lucide-react'

export default function Home() {
  const stackCategories = [
    {
      icon: <Code className="w-5 h-5 text-blue-500" />,
      title: "🐍 Backend – Python",
      items: [
        "Python avançado (POO, async, generators)",
        "FastAPI, Flask",
        "Type hints, Pydantic",
        "Estruturas de dados e algoritmos"
      ]
    },
    {
      icon: <Database className="w-5 h-5 text-green-500" />,
      title: "🗄 Banco de Dados",
      items: [
        "PostgreSQL",
        "MySQL",
        "SQLAlchemy ORM",
        "Alembic (migrations)",
        "Redis (cache)"
      ]
    },
    {
      icon: <Lock className="w-5 h-5 text-red-500" />,
      title: "🔐 Segurança & API",
      items: [
        "JWT, HMAC",
        "Rate limiting",
        "CORS, CSP Headers",
        "Idempotência",
        "problem+json (RFC 9457)"
      ]
    },
    {
      icon: <TestTube className="w-5 h-5 text-purple-500" />,
      title: "🧪 Testes & Performance",
      items: [
        "Testes unitários e E2E",
        "Mocks",
        "Load testing (Locust)",
        "Otimização de queries"
      ]
    },
    {
      icon: <Cloud className="w-5 h-5 text-cyan-500" />,
      title: "🐳 DevOps & Infra",
      items: [
        "Docker",
        "VPS, Linux, SSH",
        "Gerenciamento de processos",
        "Monitoramento básico"
      ]
    },
    {
      icon: <BookOpen className="w-5 h-5 text-indigo-500" />,
      title: "📄 Arquitetura",
      items: [
        "APIs RESTful",
        "Webhooks",
        "Filas assíncronas",
        "Organização modular",
        "Documentação OpenAPI"
      ]
    }
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Portfólio Backend Developer
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
          Athos Barbosa De Sousa
        </p>
        <div className="flex justify-center gap-4">
          <Button asChild>
            <a href="#projects">Ver Projetos</a>
          </Button>
          <Button variant="outline" asChild>
            <a href="#contact">Contato</a>
          </Button>
        </div>
        
        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-8">
          <a href="https://github.com/athosbds" target="_blank" rel="noopener noreferrer" 
             className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/athos-barbosa-de-sousa/" target="_blank" rel="noopener noreferrer"
             className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
            <Linkedin className="w-6 h-6" />
          </a>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Projetos em Destaque</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="container mx-auto px-4 py-20 bg-gray-50 dark:bg-gray-800/50">
        <h2 className="text-3xl font-bold text-center mb-4">Stacks e Habilidades</h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          Especialidades técnicas e ferramentas que utilizo no dia a dia
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {stackCategories.map((category, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-4">
                {category.icon}
                <h3 className="font-semibold text-lg">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.items.map((item, i) => (
                  <li key={i} className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Badges rápidas */}
        <div className="mt-12">
          <h3 className="text-xl font-semibold text-center mb-6">Principais Tecnologias</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {['Python', 'FastAPI', 'Flask', 'PostgreSQL', 'MySQL', 'Docker', 'Redis', 'JWT', 'SQLAlchemy', 'Pydantic', 'Locust'].map((tech) => (
              <Badge key={tech} variant="outline" className="text-sm py-1 px-3">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-6">Contato</h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
          Estou disponível para oportunidades Backend e consultoria em arquitetura. Envie uma mensagem ou acesse meus perfis abaixo.
        </p>
        <div className="flex justify-center gap-6">
          <a href="https://github.com/athosbds" target="_blank" rel="noopener noreferrer"
             className="flex items-center gap-2 px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-800 hover:opacity-90 transition-opacity">
            <Github className="w-5 h-5" />
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/athos-barbosa-de-sousa/" target="_blank" rel="noopener noreferrer"
             className="flex items-center gap-2 px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-800 hover:opacity-90 transition-opacity">
            <Linkedin className="w-5 h-5" />
            LinkedIn
          </a>
          <a href="mailto:athos@email.com"
             className="flex items-center gap-2 px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-800 hover:opacity-90 transition-opacity">
            <Mail className="w-5 h-5" />
            Email
          </a>
        </div>
      </section>
    </main>
  )
}