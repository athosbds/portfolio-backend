import { projects } from '@/lib/projects'
import { notFound } from 'next/navigation'
import { ProjectDetailClient } from '@/components/projects/ProjectDetailClient'

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.id }))
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.id === params.slug)
  if (!project) notFound()
  return <ProjectDetailClient project={project!} />
}
