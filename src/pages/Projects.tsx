import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import type { ProjectType } from '../types'

export default function Projects() {
  const projectTypeLabel: Record<ProjectType, string> = {
    development: '개발',
    maintenance: '운영',
    both: '개발/운영'
  }

  const projectTypeStyle: Record<ProjectType, string> = {
    development: 'bg-blue-100 text-blue-700',
    maintenance: 'bg-green-100 text-green-700',
    both: 'bg-purple-100 text-purple-700'
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Projects</h1>
      <div className="space-y-6">
        {projects.map((project) => (
          <Link
            key={project.id}
            to={`/projects/${project.id}`}
            className="block p-6 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors"
          >
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center gap-2 flex-1">
                <h2 className="text-xl font-semibold text-gray-900">
                  {project.title}
                </h2>
                <span className={`px-2 py-0.5 text-xs rounded whitespace-nowrap ${projectTypeStyle[project.projectType]}`}>
                  {projectTypeLabel[project.projectType]}
                </span>
              </div>
              <span className="text-sm text-gray-500 whitespace-nowrap ml-4">
                {project.period}
              </span>
            </div>
            <p className="text-sm text-gray-500 mb-3">{project.company}</p>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
