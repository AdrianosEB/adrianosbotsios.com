import { Link } from 'react-router-dom'

const footerLinks = [
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Experience', path: '/experience' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-dark-light border-t border-dark-border">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-text-secondary text-sm font-medium">
          Adrianos Botsios
        </p>

        <div className="flex items-center gap-6">
          {footerLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="text-text-muted text-sm hover:text-text-primary transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <p className="text-text-muted text-sm">
          Built with React & Tailwind
        </p>
      </div>

      <div className="border-t border-dark-border">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <p className="text-text-muted text-xs text-center">
            &copy; 2025 Adrianos Botsios. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
