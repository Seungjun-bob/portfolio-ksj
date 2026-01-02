import { Link } from 'react-router-dom'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white border-b border-gray-200">
        <nav className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-xl font-bold text-gray-900">
              강승준
            </Link>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900"
                onClick={(e) => {
                  e.preventDefault()
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
              >
                Home
              </a>
              <a
                href="#about"
                className="text-gray-600 hover:text-gray-900"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                About
              </a>
              <a
                href="#contact"
                className="text-gray-600 hover:text-gray-900"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Contact
              </a>
            </div>
          </div>
        </nav>
      </header>

      <main className="flex-1">
        {children}
      </main>

      <footer className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="text-center text-sm text-gray-600">
            <p>&copy; 2025 강승준. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
