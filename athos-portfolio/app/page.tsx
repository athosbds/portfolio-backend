'use client'

import { projects } from '@/lib/projects'
import { getProjectContent } from '@/lib/projects'
import { ProjectCard } from '@/components/projects/ProjectCard'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useLanguage } from '@/lib/i18n/context'
import {
  Github, Linkedin, Mail,
  TestTube, BookOpen, Cloud, Database,
  Code, Lock, Languages
} from 'lucide-react'

const categoryIcons = [
  <Code key="py" className="w-5 h-5 text-blue-500" />,
  <Database key="db" className="w-5 h-5 text-green-500" />,
  <Lock key="sec" className="w-5 h-5 text-red-500" />,
  <TestTube key="test" className="w-5 h-5 text-purple-500" />,
  <Cloud key="infra" className="w-5 h-5 text-cyan-500" />,
  <BookOpen key="arch" className="w-5 h-5 text-indigo-500" />,
]

export default function Home() {
  const { t, lang } = useLanguage()

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Athos Barbosa De Sousa
        </h1>
        <p className="text-lg font-medium text-gray-500 dark:text-gray-400 mb-4">
          {t.hero.role}
        </p>
        <p className="text-base text-gray-600 dark:text-gray-300 max-w-xl mx-auto mb-6">
          {t.hero.bio}
        </p>
        <div className="flex justify-center gap-4">
          <Button asChild>
            <a href="#projects">{t.hero.viewProjects}</a>
          </Button>
          <Button variant="outline" asChild>
            <a href="#contact">{t.hero.contact}</a>
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center items-center gap-6 mt-6">
          <a href="https://github.com/athosbds" target="_blank" rel="noopener noreferrer"
             className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/athos-barbosa-de-sousa/" target="_blank" rel="noopener noreferrer"
             className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">{t.projects.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={getProjectContent(project, lang)} />
          ))}
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="container mx-auto px-4 py-20 bg-gray-50 dark:bg-gray-800/50">
        <h2 className="text-3xl font-bold text-center mb-4">{t.stack.title}</h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          {t.stack.subtitle}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {t.stack.categories.map((category, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-4">
                {categoryIcons[index]}
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

        {/* Tech badges */}
        <div className="mt-12">
          <h3 className="text-xl font-semibold text-center mb-6">{t.stack.mainTech}</h3>
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
        <h2 className="text-3xl font-bold text-center mb-6">{t.contact.title}</h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
          {t.contact.description}
        </p>

        {/* Languages */}
        <div className="flex justify-center items-center gap-3 mb-8">
          <Languages className="w-4 h-4 text-gray-400" />
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {t.contact.languages}
          </span>
        </div>

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
    </div>
  )
}
