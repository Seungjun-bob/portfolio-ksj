import { useParams, Link, Navigate } from 'react-router-dom'
import { projects } from '../data/projects'

// 접근 방법 텍스트를 파싱하여 리스트 항목으로 분리
function parseApproachSteps(text: string): string[] {
  // 1), 2), 3) 등의 패턴으로 분리
  const regex = /\d+\)\s*/g
  const parts = text.split(regex).filter(Boolean)

  // 숫자 패턴이 없으면 원본 텍스트를 그대로 반환
  if (parts.length <= 1) {
    return [text]
  }

  return parts.map(part => part.trim())
}

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>()
  const project = projects.find((p) => p.id === id)

  if (!project) {
    return <Navigate to="/projects" replace />
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <Link
        to="/projects"
        className="inline-block text-gray-600 hover:text-gray-900 mb-8"
      >
        ← 프로젝트 목록으로
      </Link>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-3">
          {project.title}
        </h1>
        <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
          <span>{project.company}</span>
          <span>•</span>
          <span>{project.period}</span>
        </div>
        <p className="text-gray-700 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Context</h2>
          <p className="text-gray-700 leading-relaxed">{project.context}</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Problem</h2>
          <ul className="space-y-2">
            {project.problem.map((item, index) => (
              <li key={index} className="flex gap-3 text-gray-700">
                <span className="text-gray-400 mt-1">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">My Role</h2>
          <p className="text-gray-700 leading-relaxed">{project.myRole}</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Decision & Architecture
          </h2>
          <div className="space-y-6">
            {project.decisionAndArchitecture.map((decision, index) => (
              <div key={index} className="border-l-4 border-gray-200 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {decision.title}
                </h3>
                <p className="text-gray-700 mb-2">{decision.description}</p>
                <p className="text-sm text-gray-600">
                  <span className="font-medium">이유:</span> {decision.reason}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Challenges</h2>
          <div className="space-y-8">
            {project.challenges.map((challenge, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {challenge.title}
                </h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-1">
                      상황
                    </h4>
                    <p className="text-gray-600">{challenge.situation}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-1">
                      접근 방법
                    </h4>
                    <ul className="space-y-2">
                      {parseApproachSteps(challenge.approach).map((step, stepIndex) => (
                        <li key={stepIndex} className="flex gap-2 text-gray-600">
                          <span className="text-gray-400 mt-0.5">{stepIndex + 1}.</span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-1">
                      결과
                    </h4>
                    <p className="text-gray-600">{challenge.outcome}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Results</h2>
          <div className="space-y-3">
            {project.results.map((result, index) => (
              <div key={index} className="flex gap-3">
                <span className="text-gray-400 mt-1">
                  {result.type === 'quantitative' ? '📊' : '✓'}
                </span>
                <div>
                  <p className="text-gray-700">{result.description}</p>
                  {result.metric && (
                    <p className="text-sm text-gray-600 font-medium">
                      {result.metric}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Retrospective
          </h2>
          <ul className="space-y-3">
            {project.retrospective.map((item, index) => (
              <li key={index} className="flex gap-3 text-gray-700 leading-relaxed">
                <span className="text-gray-400 mt-1">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <div className="mt-12 pt-8 border-t border-gray-200">
        <Link
          to="/projects"
          className="inline-block text-gray-600 hover:text-gray-900"
        >
          ← 프로젝트 목록으로
        </Link>
      </div>
    </div>
  )
}
