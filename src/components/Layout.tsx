import { Link, useLocation } from 'react-router-dom'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation()

  const isActive = (path: string) => {
    return location.pathname === path
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white border-b border-gray-200">
        <nav className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-xl font-bold text-gray-900">
              강승준
            </Link>
            <div className="flex gap-6">
              <Link
                to="/"
                className={`${isActive('/') ? 'text-gray-900 font-medium' : 'text-gray-600 hover:text-gray-900'}`}
              >
                Home
              </Link>
              <Link
                to="/projects"
                className={`${isActive('/projects') || location.pathname.startsWith('/projects/') ? 'text-gray-900 font-medium' : 'text-gray-600 hover:text-gray-900'}`}
              >
                Projects
              </Link>
              <Link
                to="/contact"
                className={`${isActive('/contact') ? 'text-gray-900 font-medium' : 'text-gray-600 hover:text-gray-900'}`}
              >
                Contact
              </Link>
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
