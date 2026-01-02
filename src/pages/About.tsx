import { aboutSections, aboutSummary } from '../data/about'

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-6 pt-8 pb-12 md:py-12">
      <h1 className="text-2xl md:text-3xl font-bold leading-tight text-gray-900 mb-4">About</h1>

      {/* 한줄 총평 */}
      <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-12 md:mb-16 border-l-4 border-gray-300 pl-4">
        {aboutSummary}
      </p>

      {/* 타임라인 스타일 섹션 */}
      <div className="relative">
        {/* 왼쪽 수직 라인 - 모바일에서 숨김 */}
        <div className="hidden md:block absolute left-0 top-0 bottom-0 w-px bg-gray-200" />

        {aboutSections.map((section, index) => (
          <section key={index} className="relative pl-0 md:pl-8 pb-8 md:pb-10 last:pb-0">
            {/* 도트 - 모바일에서 숨김 */}
            <div className="hidden md:block absolute left-0 top-1 w-2 h-2 bg-gray-400 rounded-full -translate-x-1/2" />

            <h2 className="text-base md:text-lg font-semibold leading-snug text-gray-900 mb-2 md:mb-3">
              {section.title}
            </h2>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              {section.content}
            </p>
          </section>
        ))}
      </div>
    </div>
  )
}
