import Link from 'next/link'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Github, ExternalLink } from 'lucide-react'
import type { Project } from '@/lib/projects'
import Image from 'next/image'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="flex flex-col justify-between h-full hover:shadow-lg transition-shadow overflow-hidden group">
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
        {project.tech.map((tech) => (
          <Badge key={tech} variant="secondary" className="text-xs">
            {tech}
          </Badge>
        ))}
      </CardContent>

      <CardFooter className="gap-3">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
        )}
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            Demo
          </a>
        )}
      </CardFooter>
    </Card>
  )
}
