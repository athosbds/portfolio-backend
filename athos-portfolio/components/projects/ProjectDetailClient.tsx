'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Github, Lock, ArrowLeft, CheckCircle2, Layers, Zap } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from '@/lib/i18n/context'
import { getProjectContent, Project } from '@/lib/projects'

export function ProjectDetailClient({ project }: { project: Project }) {
  const { t, lang } = useLanguage()
  const p = getProjectContent(project, lang)

  const fullDescriptionParagraphs = p.fullDescription
    ? p.fullDescription.trim().split(/\n\s*\n/)
    : []

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-12">
      <div className="container mx-auto px-4 max-w-4xl">

        {/* Back button */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white mb-8 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          {t.projects.back}
        </Link>

        {/* Cover image */}
        {project.image && (
          <div className="relative w-full h-56 md:h-80 rounded-2xl overflow-hidden mb-10 shadow-md">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
        )}

        {/* Title + tagline */}
        <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          {project.title}
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
          {p.description}
        </p>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech.map((tech) => (
            <Badge key={tech} variant="secondary" className="text-sm py-1 px-3">
              {tech}
            </Badge>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="flex gap-3 mb-12">
          {project.github ? (
            <Button asChild>
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                {t.projects.viewCode}
              </a>
            </Button>
          ) : (
            <Button variant="outline" disabled className="cursor-not-allowed">
              <Lock className="w-4 h-4 mr-2" />
              {t.projects.privateRepo}
            </Button>
          )}
        </div>

        <hr className="border-gray-200 dark:border-gray-700 mb-12" />

        {/* Full description */}
        {fullDescriptionParagraphs.length > 0 && (
          <section className="mb-12">
            <div className="space-y-4">
              {fullDescriptionParagraphs.map((paragraph, i) => (
                <p key={i} className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {paragraph.trim()}
                </p>
              ))}
            </div>
          </section>
        )}

        {/* Features */}
        {p.features && p.features.length > 0 && (
          <section className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <Zap className="w-5 h-5 text-blue-500" />
              <h2 className="text-2xl font-bold">{t.projects.featuresTitle}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {p.features.map((feature, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 bg-white dark:bg-gray-900 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-800"
                >
                  <CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                  <span className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Architecture */}
        {p.architecture && (
          <section className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <Layers className="w-5 h-5 text-purple-500" />
              <h2 className="text-2xl font-bold">{t.projects.architectureTitle}</h2>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-800">
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                {p.architecture}
              </p>
            </div>
          </section>
        )}

        {/* Bottom back link */}
        <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            {t.projects.viewOthers}
          </Link>
        </div>

      </div>
    </div>
  )
}
