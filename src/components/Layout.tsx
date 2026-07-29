import { Link } from 'react-router-dom'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white border-b border-gray-200">
        <nav className="max-w-4xl mx-auto px-6 py-4">
          <Link to="/" className="text-xl font-bold text-gray-900">
            강승준
          </Link>
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
