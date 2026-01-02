import { Link } from 'react-router-dom'
import { personalInfo } from '../data/personalInfo'
import { skills } from '../data/skills'
import { projects } from '../data/projects'
import type { ProjectType } from '../types'

export default function Home() {
  const featuredProjects = projects.slice(0, 2)

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
      <section className="mb-16">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <img
            src="/images/seungjun-1.jpeg"
            alt={personalInfo.name}
            className="w-48 h-64 md:w-64 md:h-80 rounded-lg object-cover shadow-lg"
          />
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {personalInfo.name}
            </h1>
            <p className="text-lg text-gray-600 mb-4">
              {personalInfo.title}
            </p>
            <p className="text-xl text-gray-800 mb-6 leading-relaxed">
              {personalInfo.tagline}
            </p>
            <Link
              to="/about"
              className="text-gray-600 hover:text-gray-900 hover:underline"
            >
              더 알아보기 →
            </Link>
          </div>
        </div>
      </section>

      <section className="mb-16 p-6 bg-gray-50 rounded-lg">
        <p className="text-xl font-medium text-gray-800 mb-3">
          "{personalInfo.coreMessage}"
        </p>
        <p className="text-gray-600">
          {personalInfo.coreMessageContext}
        </p>
      </section>

      <section className="mb-16">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Projects</h2>
          <Link
            to="/projects"
            className="text-sm text-gray-600 hover:text-gray-900"
          >
            모든 프로젝트 보기 →
          </Link>
        </div>
        <div className="space-y-6">
          {featuredProjects.map((project) => (
            <Link
              key={project.id}
              to={`/projects/${project.id}`}
              className="block p-6 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors"
            >
              <p className="text-lg font-medium text-gray-800 mb-3">
                "{project.keyTakeaway}"
              </p>
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-xl font-semibold text-gray-900">
                  {project.title}
                </h3>
                <span className={`px-2 py-0.5 text-xs rounded ${projectTypeStyle[project.projectType]}`}>
                  {projectTypeLabel[project.projectType]}
                </span>
              </div>
              <p className="text-sm text-gray-500 mb-4">
                {project.period} | {project.company}
              </p>
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
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill) => (
            <div key={skill.category} className="space-y-2">
              <h3 className="text-sm font-semibold text-gray-700">
                {skill.category}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="flex gap-4">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900"
          >
            GitHub
          </a>
          <a
            href={personalInfo.blog}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900"
          >
            Blog
          </a>
          <Link to="/contact" className="text-gray-600 hover:text-gray-900">
            Contact
          </Link>
        </div>
      </section>
    </div>
  )
}
