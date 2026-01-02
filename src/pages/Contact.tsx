import { personalInfo } from '../data/personalInfo'

export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold leading-tight text-gray-900 mb-8">Contact</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-base font-semibold text-gray-900 mb-2">Email</h2>
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-gray-600 hover:text-gray-900"
          >
            {personalInfo.email}
          </a>
        </div>

        <div>
          <h2 className="text-base font-semibold text-gray-900 mb-2">Phone</h2>
          <a
            href={`tel:${personalInfo.phone}`}
            className="text-gray-600 hover:text-gray-900"
          >
            {personalInfo.phone}
          </a>
        </div>

        <div>
          <h2 className="text-base font-semibold text-gray-900 mb-2">GitHub</h2>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900"
          >
            {personalInfo.github}
          </a>
        </div>

        <div>
          <h2 className="text-base font-semibold text-gray-900 mb-2">Blog</h2>
          <a
            href={personalInfo.blog}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900"
          >
            {personalInfo.blog}
          </a>
        </div>
      </div>
    </div>
  )
}
