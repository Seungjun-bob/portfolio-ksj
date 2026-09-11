import { personalInfo } from '../data/personalInfo'
import { projects } from '../data/projects'
import { kiaIntegratedProject, orgChartProject, weddingMapProject, workPortalProject } from '../data/summary'

// 메인(SNS 랜딩) 표시용 대표 프로젝트 — 이름 + 한 줄 설명만.
// title은 공유용으로 짧게 다듬은 표시명이며, 정식 명칭은 데이터(projects.ts)와 이력서 페이지에 그대로 유지.
// 순서는 이력서 페이지·경력기술서와 같은 시간 역순. url은 외부에서 열어볼 수 있는 공개 서비스에만 둔다.
const featured = [
  { title: '결혼할지도', period: weddingMapProject.period, description: weddingMapProject.description, url: weddingMapProject.url },
  { title: '조직도 SaaS', period: orgChartProject.period, description: orgChartProject.description },
  { title: '사내 HR 시스템 (휴가·근태관리)', period: workPortalProject.period, description: workPortalProject.description },
  { title: 'KB손해보험 Tableau DRM', period: projects[0].period, description: projects[0].description },
  { title: '삼성전자 Digital Marketing 대시보드', period: projects[1].period, description: projects[1].description },
  { title: 'KIA Mexico 사내 업무 시스템', period: kiaIntegratedProject.period, description: kiaIntegratedProject.description },
]

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-10 md:py-16">
      {/* 히어로 배너: 자연 비율 그대로 노출해 인물·배경이 잘리지 않게 함 */}
      <img
        src="/images/seungjun-profile.PNG"
        alt={`${personalInfo.name} — 일상`}
        className="w-full h-auto rounded-xl shadow-sm"
      />

      <div className="mt-8 md:mt-10">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
          {personalInfo.name}
        </h1>
        <p className="mt-3 text-lg text-gray-700 leading-relaxed">
          백엔드·인프라 엔지니어. 여러 기업의 사내 시스템을 1인으로 설계하고 운영합니다.
        </p>
        <p className="mt-2 text-base text-gray-500 leading-relaxed">
          {personalInfo.coreMessage}
        </p>

        {/* 링크 */}
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-gray-300 text-gray-700 text-sm md:text-base rounded-lg hover:border-gray-900 hover:text-gray-900 transition-colors"
          >
            GitHub
          </a>
          <a
            href={personalInfo.blog}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-gray-300 text-gray-700 text-sm md:text-base rounded-lg hover:border-gray-900 hover:text-gray-900 transition-colors"
          >
            Blog
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="px-4 py-2 border border-gray-300 text-gray-700 text-sm md:text-base rounded-lg hover:border-gray-900 hover:text-gray-900 transition-colors"
          >
            Email
          </a>
        </div>

        {/* 만든 것 */}
        <div className="mt-10 md:mt-12">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-4">
            Projects
          </h2>
          <ul className="space-y-5">
            {featured.map((project) => (
              <li key={project.title}>
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="text-base font-semibold text-gray-900">
                    {project.url ? (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline underline-offset-4 decoration-gray-300 hover:decoration-gray-900"
                      >
                        {project.title} ↗
                      </a>
                    ) : (
                      project.title
                    )}
                  </h3>
                  <span className="flex-shrink-0 text-xs text-gray-400">
                    {project.period.split('(')[0].trim()}
                  </span>
                </div>
                <p className="mt-1 text-sm text-gray-600 leading-relaxed">
                  {project.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
