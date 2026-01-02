import { Link } from 'react-router-dom'
import { PhilosophyPrinciple } from '../types'

interface PhilosophySectionProps {
  principles: PhilosophyPrinciple[]
}

export default function PhilosophySection({
  principles,
}: PhilosophySectionProps) {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">개발 철학</h2>
      <div className="space-y-8">
        {principles.map((principle, index) => (
          <div key={index} className="grid md:grid-cols-2 gap-6">
            <div className="border-l-4 border-gray-200 pl-4">
              <p className="text-gray-600 italic whitespace-pre-line leading-loose">
                {principle.poem}
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                {principle.principle}
              </h3>
              <p className="text-gray-700 mb-3">{principle.description}</p>
              <Link
                to={`/projects/${principle.linkedProject}`}
                className="text-sm text-gray-600 hover:text-gray-900 hover:underline"
              >
                → 관련 프로젝트 보기
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
