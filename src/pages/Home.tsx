import { Link } from 'react-router-dom'
import { personalInfo } from '../data/personalInfo'
import { projects } from '../data/projects'
import { careerSummary, coreSkills, coreStrengths, kiaIntegratedProject, otherSkills } from '../data/summary'
import { aboutSections, aboutSummary } from '../data/about'

export default function Home() {
  // 대표 프로젝트: KB, 삼성, KIA 통합
  const kbProject = projects[0] // KB Tableau DRM
  const samsungProject = projects[1] // Samsung Digital Marketing

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* Hero - 경력 정보 통합 */}
      <section className="mb-12 md:mb-20">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 md:items-stretch items-center">
          <img
            src="/images/seungjun-1.jpeg"
            alt={personalInfo.name}
            className="w-32 h-44 md:w-[17rem] md:h-[22.5rem] rounded-lg object-cover shadow-lg flex-shrink-0"
          />
          <div className="flex-1 flex flex-col justify-between">
            <h1 className="text-3xl md:text-4xl font-bold leading-tight text-gray-900 mb-3">
              {personalInfo.name}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-4 md:mb-5">
              {personalInfo.title}
            </p>
            <p className="text-xl md:text-2xl text-gray-900 font-semibold leading-relaxed mb-3 md:mb-4">
              {coreStrengths.title}
            </p>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4 md:mb-6">
              {coreStrengths.description}
            </p>

            {/* 핵심 수치 */}
            <div className="flex gap-6 md:gap-8 mb-4 md:mb-6 pt-4 md:pt-6 border-t border-gray-200">
              <div>
                <p className="text-xl md:text-2xl font-bold text-gray-900">4년차</p>
                <p className="text-xs md:text-sm text-gray-500">경력 (2022~)</p>
              </div>
              <div>
                <p className="text-xl md:text-2xl font-bold text-gray-900">만 30세</p>
                <p className="text-xs md:text-sm text-gray-500">1996년생</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#about"
                className="text-base text-gray-600 hover:text-gray-900 hover:underline inline-flex items-center gap-1 py-2 px-1"
              >
                더 알아보기
                <span className="text-sm">→</span>
              </a>
              <span className="text-gray-300 hidden md:inline">|</span>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-base text-gray-600 hover:text-gray-900 hover:underline inline-flex items-center gap-2 py-2 px-1"
              >
                {personalInfo.email}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Projects - 대표 프로젝트 3개 */}
      <section className="mb-12 md:mb-20">
        <div className="mb-6 md:mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            대표 프로젝트
          </h2>
          <p className="text-base text-gray-600">
            설계부터 운영까지 1인 Full Stack으로 담당한 프로젝트입니다.
          </p>
        </div>
        <div className="space-y-4 md:space-y-6">
          {/* KB 프로젝트 */}
          <div className="p-4 md:p-6 border border-gray-200 rounded-lg hover:border-gray-400 hover:shadow-sm transition-all bg-white">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2 md:mb-3">
              <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-1 md:mb-0">
                {kbProject.title}
              </h3>
              <span className="text-xs md:text-sm text-gray-500">
                {kbProject.period.split('(')[0].trim()}
              </span>
            </div>
            <p className="text-sm text-gray-600 mb-3">{kbProject.description}</p>

            <div className="flex flex-wrap gap-1.5">
              {kbProject.tags.slice(0, 4).map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* 삼성 프로젝트 */}
          <div className="p-4 md:p-6 border border-gray-200 rounded-lg hover:border-gray-400 hover:shadow-sm transition-all bg-white">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2 md:mb-3">
              <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-1 md:mb-0">
                {samsungProject.title}
              </h3>
              <span className="text-xs md:text-sm text-gray-500">
                {samsungProject.period.split('(')[0].trim()}
              </span>
            </div>
            <p className="text-sm text-gray-600 mb-3">{samsungProject.description}</p>

            <div className="flex flex-wrap gap-1.5">
              {samsungProject.tags.slice(0, 4).map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* KIA 통합 프로젝트 */}
          <div className="p-4 md:p-6 border border-gray-200 rounded-lg hover:border-gray-400 hover:shadow-sm transition-all bg-white">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2 md:mb-3">
              <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-1 md:mb-0">
                {kiaIntegratedProject.title}
              </h3>
              <span className="text-xs md:text-sm text-gray-500">
                {kiaIntegratedProject.period}
              </span>
            </div>
            <p className="text-sm text-gray-600 mb-3">{kiaIntegratedProject.description}</p>

            <div className="flex flex-wrap gap-1.5">
              {kiaIntegratedProject.tags.slice(0, 4).map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills - 주요 스킬 */}
      <section className="mb-12 md:mb-20">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">
          주요 스킬
        </h2>

        {/* Core 스킬 */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
            Core
          </h3>
          <div className="flex flex-wrap gap-2">
            {coreSkills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1.5 bg-gray-900 text-white text-sm rounded"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* 기타 스킬 */}
        <div>
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
            Others
          </h3>
          <div className="flex flex-wrap gap-2">
            {otherSkills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm rounded"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mb-12 md:mb-20">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8">About</h2>

        {/* 한줄 총평 */}
        {/* <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8 md:mb-12 border-l-4 border-gray-300 pl-4">
          {aboutSummary}
        </p> */}

        {/* 타임라인 스타일 섹션 */}
        <div className="relative">
          {/* 왼쪽 수직 라인 - 모바일에서 숨김 */}
          <div className="hidden md:block absolute left-0 top-0 bottom-0 w-px bg-gray-200" />

          {aboutSections.map((section, index) => (
            <section key={index} className="relative pl-0 md:pl-8 pb-6 md:pb-8 last:pb-0">
              {/* 도트 - 모바일에서 숨김 */}
              <div className="hidden md:block absolute left-0 top-1 w-2 h-2 bg-gray-400 rounded-full -translate-x-1/2" />

              <h3 className="text-base md:text-lg font-semibold leading-snug text-gray-900 mb-2 md:mb-3">
                {section.title}
              </h3>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                {section.content}
              </p>
            </section>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8">Contact</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">Email</h3>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-sm md:text-base text-gray-600 hover:text-gray-900 hover:underline"
            >
              {personalInfo.email}
            </a>
          </div>

          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">Phone</h3>
            <a
              href={`tel:${personalInfo.phone}`}
              className="text-sm md:text-base text-gray-600 hover:text-gray-900 hover:underline"
            >
              {personalInfo.phone}
            </a>
          </div>

          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">GitHub</h3>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm md:text-base text-gray-600 hover:text-gray-900 hover:underline break-all"
            >
              {personalInfo.github}
            </a>
          </div>

          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">Blog</h3>
            <a
              href={personalInfo.blog}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm md:text-base text-gray-600 hover:text-gray-900 hover:underline break-all"
            >
              {personalInfo.blog}
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
