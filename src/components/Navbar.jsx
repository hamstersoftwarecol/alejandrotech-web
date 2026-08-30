import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Zap, ArrowRight } from 'lucide-react'

const navLinks = [
  { to: '/',         label: 'Inicio' },
  { to: '/services', label: 'Servicios' },
  { to: '/about',    label: 'Nosotros' },
  { to: '/contact',  label: 'Contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname }            = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setMenuOpen(false), [pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled ? 'nav-glass shadow-2xl shadow-black/30' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-[4.5rem]">
            <Link to="/" className="flex items-center gap-2.5 group shrink-0">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/25 group-hover:shadow-blue-500/50 transition-shadow duration-300">
                <Zap className="w-4.5 h-4.5 text-white" fill="white" />
              </div>
              <span className="text-white font-bold text-lg tracking-tight">
                alejandro<span className="text-blue-400">tech</span>
              </span>
            </Link>

            <nav className="hidden md:flex items-center gap-7">
              {navLinks.map(link => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `link-accent text-[0.82rem] font-medium ${isActive ? 'text-white after:!w-full' : ''}`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            <div className="hidden md:flex items-center">
              <Link to="/contact"
                className="inline-flex items-center gap-2 text-[0.82rem] font-semibold text-white bg-blue-500/90 hover:bg-blue-500 px-5 py-2 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25"
              >
                Comenzar <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <button
              id="mobile-menu-toggle"
              onClick={() => setMenuOpen(v => !v)}
              className="md:hidden w-10 h-10 rounded-lg flex items-center justify-center text-white/70 hover:text-white hover:bg-white/8 transition-colors"
              aria-label="Abrir menú"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/60 md:hidden"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-16 inset-x-0 z-50 md:hidden nav-glass border-t border-white/8 px-6 py-8 flex flex-col gap-2"
            >
              {navLinks.map(link => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `block py-3 px-4 rounded-xl text-base font-medium transition-all duration-200 ${
                      isActive ? 'text-blue-400 bg-blue-500/8' : 'text-white/70 hover:text-white hover:bg-white/5'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="mt-4 pt-4 border-t border-white/8">
                <Link to="/contact" className="btn-primary w-full justify-center">
                  <span>Comenzar</span> <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
