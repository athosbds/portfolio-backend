import Link from 'next/link'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Github, ExternalLink, Lock } from 'lucide-react'
import type { Project } from '@/lib/projects'
import Image from 'next/image'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="flex flex-col justify-between h-full hover:shadow-lg transition-shadow overflow-hidden group">
      {/* Imagem do projeto */}
      {project.image && (
        <div className="relative w-full h-48 bg-gray-100 dark:bg-gray-800">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}

      <CardHeader>
        {/* Título é um link */}
        <Link href={`/projects/${project.id}`}>
          <CardTitle className="text-xl hover:text-blue-600 transition-colors cursor-pointer">
            {project.title}
          </CardTitle>
        </Link>
        <CardDescription className="text-gray-600 dark:text-gray-300">
          {project.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex flex-wrap gap-2">
        {project.tech.slice(0, 5).map((tech) => (
          <Badge key={tech} variant="secondary" className="text-xs">
            {tech}
          </Badge>
        ))}
        {project.tech.length > 5 && (
          <Badge variant="outline" className="text-xs">
            +{project.tech.length - 5}
          </Badge>
        )}
      </CardContent>

      <CardFooter className="gap-3">
        {project.github ? (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
            title={project.github ? "Ver código no GitHub" : "Repositório privado"}
          >
            <Github className="w-4 h-4" />
            <span className="hidden sm:inline">GitHub</span>
          </a>
        ) : (
          <span 
            className="flex items-center gap-1.5 text-sm text-gray-400 cursor-not-allowed"
            title="Repositório privado"
          >
            <Lock className="w-4 h-4" />
            <span className="hidden sm:inline">Privado</span>
          </span>
        )}
        
        <Link 
          href={`/projects/${project.id}`}
          className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors ml-auto"
        >
          <span className="hidden sm:inline">Detalhes</span>
          <ExternalLink className="w-4 h-4" />
        </Link>
      </CardFooter>
    </Card>
  )
}