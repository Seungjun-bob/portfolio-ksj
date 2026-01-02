import { Link } from 'react-router-dom'
import { personalInfo } from '../data/personalInfo'
import { skills } from '../data/skills'
import { projects } from '../data/projects'
import PhilosophySection from '../components/PhilosophySection'

export default function Home() {
  const featuredProjects = projects.slice(0, 2)

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <section className="mb-16">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <img
            src="/images/seungjun-picture.png"
            alt={personalInfo.name}
            className="w-56 h-56 rounded-lg object-contain border-4 border-gray-100 shadow-lg bg-white"
          />
          <div className="flex-1">
            <p className="text-2xl md:text-3xl font-medium text-gray-800 mb-4 leading-relaxed">
              "{personalInfo.coreMessage}"
            </p>
            <p className="text-lg text-gray-600">
              {personalInfo.name} | {personalInfo.title}
            </p>
          </div>
        </div>
      </section>

      <PhilosophySection principles={personalInfo.philosophyPrinciples} />

      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Skills</h2>
        <div className="space-y-4">
          {skills.map((skill) => (
            <div key={skill.category}>
              <h3 className="text-sm font-semibold text-gray-900 mb-2">
                {skill.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Featured Projects</h2>
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
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {project.title}
              </h3>
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
