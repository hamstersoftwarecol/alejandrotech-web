import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Zap } from 'lucide-react'

const footerLinks = {
  Servicios: [
    { label: 'Ingeniería de Datos', to: '/services' },
    { label: 'Machine Learning',    to: '/services' },
    { label: 'Desarrollo Web',      to: '/services' },
    { label: 'Desarrollo Móvil',    to: '/services' },
    { label: 'Software de Escritorio', to: '/services' },
  ],
  Empresa: [
    { label: 'Nosotros',  to: '/about' },
    { label: 'Servicios', to: '/services' },
    { label: 'Contacto',  to: '/contact' },
  ],
}

export default function Footer() {
  return (
    <footer className="relative bg-[hsl(220_27%_4%)]">
      <div className="gradient-line" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2.5 mb-5 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
                <Zap className="w-4.5 h-4.5 text-white" fill="white" />
              </div>
              <span className="text-white font-bold text-lg tracking-tight">
                alejandro<span className="text-blue-400">tech</span>
              </span>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed max-w-sm mb-6">
              Soluciones de software de alta calidad, soluciones de TI y servicios que te
              ayudan a mejorar y hacer crecer tu negocio.
            </p>
            <div className="flex flex-col gap-3 text-sm text-white/35">
              <span className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 text-blue-400/70" /> contacto@alejandrotech.com
              </span>
              <span className="flex items-center gap-2.5">
                <Phone className="w-3.5 h-3.5 text-blue-400/70" /> +1 (555) 000-0000
              </span>
              <span className="flex items-center gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-blue-400/70" /> Estados Unidos
              </span>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white/80 font-semibold text-xs uppercase tracking-[0.12em] mb-5">
                {title}
              </h4>
              <ul className="flex flex-col gap-3">
                {links.map(l => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="text-white/35 hover:text-blue-400 text-sm transition-colors duration-200"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-white/6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs">
            © {new Date().getFullYear()} AlejandroTech. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-3">
            {[
              {
                label: 'LinkedIn',
                d: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z',
                extras: [
                  { el: 'rect', props: { x: 2, y: 9, width: 4, height: 12 } },
                  { el: 'circle', props: { cx: 4, cy: 4, r: 2 } },
                ],
              },
              {
                label: 'GitHub',
                d: 'M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22',
              },
              {
                label: 'X',
                d: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z',
                fill: true,
              },
            ].map(icon => (
              <a
                key={icon.label}
                href="#"
                aria-label={icon.label}
                className="w-8 h-8 rounded-lg flex items-center justify-center text-white/25 hover:text-blue-400 hover:bg-blue-500/8 transition-all duration-200"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill={icon.fill ? 'currentColor' : 'none'} stroke={icon.fill ? 'none' : 'currentColor'} strokeWidth={icon.fill ? 0 : 2} strokeLinecap="round" strokeLinejoin="round">
                  <path d={icon.d} />
                  {icon.extras?.map((e, i) => {
                    const El = e.el
                    return <El key={i} {...e.props} />
                  })}
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
