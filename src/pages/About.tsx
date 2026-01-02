import { aboutSections, aboutSummary } from '../data/about'

export default function About() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">About</h1>

      {/* 한줄 총평 */}
      <p className="text-lg text-gray-600 mb-12 border-l-4 border-gray-300 pl-4">
        {aboutSummary}
      </p>

      {/* 타임라인 스타일 섹션 */}
      <div className="relative">
        {/* 왼쪽 수직 라인 */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-200" />

        {aboutSections.map((section, index) => (
          <section key={index} className="relative pl-8 pb-12 last:pb-0">
            {/* 도트 */}
            <div className="absolute left-0 top-1 w-2 h-2 bg-gray-400 rounded-full -translate-x-1/2" />

            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              {section.title}
            </h2>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
              {section.content}
            </p>
          </section>
        ))}
      </div>
    </div>
  )
}
