import { useRef, useEffect, useCallback } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Database, BarChart3, Search, MonitorDown, Brain, Smartphone,
  Globe, Code2, Server, ArrowRight, ChevronDown, Play, Shield, Cpu
} from 'lucide-react'

const services = [
  { id: 'data-engineering', icon: Database,   title: 'Ingeniería de Datos',           desc: 'Pipelines escalables e infraestructura en la nube diseñada para cargas de petabytes.', accent: 'blue'    },
  { id: 'etl',              icon: Server,     title: 'Extracción de Datos / ETL',     desc: 'Integración multi-fuente — APIs, bases de datos y archivos en formatos limpios.', accent: 'cyan'    },
  { id: 'visualization',    icon: BarChart3,  title: 'Visualización de Datos',        desc: 'Dashboards interactivos y sistemas KPI que impulsan decisiones basadas en evidencia.', accent: 'violet'  },
  { id: 'data-mining',      icon: Search,     title: 'Minería y Gestión de Datos',    desc: 'Detección de patrones, segmentación y gobernanza empresarial de datos.', accent: 'indigo'  },
  { id: 'desktop',          icon: MonitorDown,title: 'Software de Escritorio',        desc: 'Aplicaciones nativas multiplataforma con arquitectura offline-first.', accent: 'sky'     },
  { id: 'ml',               icon: Brain,      title: 'Machine Learning',              desc: 'Modelos predictivos, NLP, visión por computadora y ciclo de vida MLOps completo.', accent: 'purple'  },
  { id: 'mobile',           icon: Smartphone, title: 'Desarrollo Móvil',              desc: 'Apps para iOS, Android y multiplataforma que los usuarios usan a diario.', accent: 'teal'    },
  { id: 'on-demand',        icon: Code2,      title: 'Sistemas Bajo Demanda',         desc: 'Prototipado rápido, microservicios y plataformas SaaS — entregados con rapidez.', accent: 'amber'   },
  { id: 'web',              icon: Globe,      title: 'Desarrollo Web',                desc: 'Experiencias web de alto rendimiento desde MVPs hasta plataformas empresariales.', accent: 'emerald' },
]

const stats = [
  { value: '150+', label: 'Proyectos Entregados' },
  { value: '98%',  label: 'Satisfacción del Cliente' },
  { value: '12+',  label: 'Años de Experiencia' },
  { value: '40+',  label: 'Ingenieros Expertos' },
]

const highlights = [
  { icon: Shield, title: 'Seguridad Empresarial',    desc: 'Procesos compatibles con SOC 2 y cifrado de extremo a extremo en cada proyecto.' },
  { icon: Cpu,    title: 'Stack de Vanguardia',       desc: 'Usamos las últimas tecnologías probadas — React, Go, Python, Kubernetes y más.' },
  { icon: Play,   title: 'Entrega Ágil',              desc: 'Sprints de dos semanas, despliegue continuo y reportes de progreso transparentes.' },
]

const accentMap = {
  blue:    { bg: 'bg-blue-500/12',   border: 'border-blue-500/20',   text: 'text-blue-400',   glow: 'group-hover:shadow-blue-500/15'    },
  cyan:    { bg: 'bg-cyan-500/12',   border: 'border-cyan-500/20',   text: 'text-cyan-400',   glow: 'group-hover:shadow-cyan-500/15'    },
  violet:  { bg: 'bg-violet-500/12', border: 'border-violet-500/20', text: 'text-violet-400', glow: 'group-hover:shadow-violet-500/15'  },
  indigo:  { bg: 'bg-indigo-500/12', border: 'border-indigo-500/20', text: 'text-indigo-400', glow: 'group-hover:shadow-indigo-500/15'  },
  sky:     { bg: 'bg-sky-500/12',    border: 'border-sky-500/20',    text: 'text-sky-400',    glow: 'group-hover:shadow-sky-500/15'     },
  purple:  { bg: 'bg-purple-500/12', border: 'border-purple-500/20', text: 'text-purple-400', glow: 'group-hover:shadow-purple-500/15'  },
  teal:    { bg: 'bg-teal-500/12',   border: 'border-teal-500/20',   text: 'text-teal-400',   glow: 'group-hover:shadow-teal-500/15'    },
  amber:   { bg: 'bg-amber-500/12',  border: 'border-amber-500/20',  text: 'text-amber-400',  glow: 'group-hover:shadow-amber-500/15'   },
  emerald: { bg: 'bg-emerald-500/12',border: 'border-emerald-500/20',text: 'text-emerald-400',glow: 'group-hover:shadow-emerald-500/15' },
}

const fadeUp = {
  hidden:  { opacity: 0, y: 36 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
}

function useMouseGlow(containerRef) {
  const onMove = useCallback((e) => {
    if (!containerRef.current) return
    const cards = containerRef.current.querySelectorAll('.service-card')
    cards.forEach(card => {
      const rect = card.getBoundingClientRect()
      card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`)
      card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`)
    })
  }, [containerRef])

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    el.addEventListener('mousemove', onMove)
    return () => el.removeEventListener('mousemove', onMove)
  }, [onMove, containerRef])
}

export default function Home() {
  const heroRef     = useRef(null)
  const servicesRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0])
  const heroScale   = useTransform(scrollYProgress, [0, 1], [1, 1.08])

  useMouseGlow(servicesRef)

  return (
    <>
      {/* ═══════════════════ HERO CON VIDEO ═══════════════════ */}
      <section ref={heroRef} className="relative min-h-[100dvh] flex flex-col items-center justify-center text-center overflow-hidden pt-24 sm:pt-28 md:pt-20 pb-10">
        {/* Video */}
        <motion.div className="hero-video-wrap" style={{ scale: heroScale }}>
          <video autoPlay loop muted playsInline className="w-full h-full object-cover">
            <source src="/hero-bg.mp4" type="video/mp4" />
          </video>
        </motion.div>
        <div className="hero-video-overlay" />
        <div className="absolute inset-0 z-[2] bg-gradient-to-b from-[hsl(220_27%_6%)] via-transparent to-transparent opacity-60" />
        <div className="absolute inset-0 z-[2] dot-grid opacity-[0.15]" />
        <div className="absolute top-0 left-0 right-0 z-[3] gradient-line" />

        <motion.div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-6 w-full" style={{ opacity: heroOpacity }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="section-label mb-6 sm:mb-8 inline-flex text-[0.65rem] sm:text-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              Servicios de Alta Calidad
            </span>
          </motion.div>

          <motion.h1
            className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-black leading-[0.92] tracking-tight mb-5 sm:mb-7"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="heading-gradient">Software Que</span>
            <br />
            <span className="text-white">Impulsa tu Crecimiento.</span>
          </motion.h1>

          <motion.p
            className="text-white/50 text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed px-2 sm:px-0"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
          >
            Nuestras soluciones de software de alta calidad, soluciones de TI y servicios
            te ayudan a mejorar tu negocio — desde ingeniería de datos hasta desarrollo móvil.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.36 }}
          >
            <Link to="/services" className="btn-primary w-full sm:w-auto">
              <span>Explorar Servicios</span> <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/contact" className="btn-ghost w-full sm:w-auto">
              Hablar con un Experto
            </Link>
          </motion.div>

          {/* Scroll cue — oculto en móvil pequeño */}
          <motion.div
            className="mt-12 sm:mt-16 md:mt-20 flex-col items-center gap-2 text-white/25 hidden sm:flex"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
          >
            <span className="text-[10px] tracking-[0.2em] uppercase font-medium">Desplazar</span>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </motion.div>
        </motion.div>
      </section>

      {/* ═══════════════════ ESTADÍSTICAS ═══════════════════ */}
      <section className="relative py-14 sm:py-18 md:py-20 lg:py-24">
        <div className="absolute inset-x-0 top-0 gradient-line" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/4 via-transparent to-cyan-600/4" />
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-0 md:divide-x divide-white/8">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-col items-center gap-1.5 sm:gap-2 px-4 sm:px-8"
              >
                <div className="stat-number text-4xl sm:text-5xl md:text-5xl lg:text-6xl">{s.value}</div>
                <div className="text-white/40 text-xs sm:text-sm font-medium tracking-wide text-center">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 gradient-line" />
      </section>

      {/* ═══════════════════ SERVICIOS ═══════════════════ */}
      <section className="py-16 sm:py-20 md:py-28 lg:py-36 px-5 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12 sm:mb-16 md:mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label mb-4 sm:mb-5 block text-[0.65rem] sm:text-xs">Lo Que Construimos</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-black heading-gradient mb-4 sm:mb-5 leading-tight">
              Servicios Tecnológicos Integrales
            </h2>
            <p className="text-white/40 max-w-lg mx-auto text-sm sm:text-base leading-relaxed px-2 sm:px-0">
              Desde datos en bruto hasta productos pulidos — cubrimos cada capa del stack tecnológico moderno.
            </p>
          </motion.div>

          <div ref={servicesRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {services.map((svc, i) => {
              const a = accentMap[svc.accent]
              return (
                <motion.div
                  key={svc.id}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-40px' }}
                  id={`service-${svc.id}`}
                >
                  <div className={`service-card h-full group cursor-default ${a.glow}`}>
                    <div className="relative z-10 flex flex-col h-full">
                      <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center mb-4 sm:mb-5 ${a.bg} border ${a.border}`}>
                        <svc.icon className={`w-4 h-4 sm:w-5 sm:h-5 ${a.text}`} />
                      </div>
                      <h3 className="text-white font-bold text-sm sm:text-[0.95rem] mb-2 sm:mb-2.5 leading-snug">{svc.title}</h3>
                      <p className="text-white/40 text-xs sm:text-sm leading-relaxed flex-1">{svc.desc}</p>
                      <div className="mt-4 sm:mt-5 pt-3 sm:pt-4 border-t border-white/6">
                        <Link
                          to="/services"
                          className={`text-xs font-semibold ${a.text} flex items-center gap-1.5 group/link hover:gap-2.5 transition-all duration-300`}
                        >
                          Saber más <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          <motion.div
            className="text-center mt-10 sm:mt-14"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Link to="/services" className="btn-ghost inline-flex">
              Ver Todos los Servicios <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════ POR QUÉ NOSOTROS ═══════════════════ */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 px-5 sm:px-6 relative">
        <div className="absolute inset-x-0 top-0 gradient-line" />
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="section-label mb-4 sm:mb-5 block text-[0.65rem] sm:text-xs">Por Qué AlejandroTech</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-5 sm:mb-6 leading-tight">
                Tecnología Que<br />
                <span className="heading-gradient">Impulsa Tu Negocio.</span>
              </h2>
              <p className="text-white/45 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
                Combinamos experiencia profunda en ingeniería con una aguda intuición de negocio.
                Cada línea de código cumple un propósito claro — generar resultados medibles
                para tu organización.
              </p>
              <Link to="/about" className="btn-primary w-full sm:w-auto">
                <span>Sobre Nuestro Equipo</span> <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <div className="flex flex-col gap-4 sm:gap-5">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.title}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="service-card group"
                >
                  <div className="relative z-10 flex gap-4 sm:gap-5">
                    <div className="icon-wrap shrink-0 w-10 h-10 sm:w-12 sm:h-12">
                      <h.icon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-white font-bold text-sm mb-1 sm:mb-1.5">{h.title}</h3>
                      <p className="text-white/40 text-xs sm:text-sm leading-relaxed">{h.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ CTA ═══════════════════ */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-28 px-5 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative rounded-2xl sm:rounded-3xl p-8 sm:p-10 md:p-14 overflow-hidden text-center"
            style={{
              background: 'linear-gradient(145deg, hsl(220 23% 12%), hsl(220 27% 7%))',
              border: '1px solid hsl(217 91% 60% / 0.15)',
              boxShadow: '0 0 80px hsl(217 91% 60% / 0.08), inset 0 1px 0 hsl(217 91% 60% / 0.1)',
            }}
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />
            <div className="glow-orb w-[400px] sm:w-[500px] h-[200px] sm:h-[250px] bg-blue-600/12 -top-28 left-1/2 -translate-x-1/2" />

            <div className="relative z-10">
              <span className="section-label mb-5 sm:mb-6 block text-[0.65rem] sm:text-xs">¿Listo para Empezar?</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 sm:mb-5 leading-tight">
                Construyamos Algo<br />
                <span className="heading-gradient">Extraordinario Juntos</span>
              </h2>
              <p className="text-white/38 max-w-lg mx-auto mb-7 sm:mb-9 leading-relaxed text-sm sm:text-base px-2 sm:px-0">
                Contáctanos hoy y descubre cómo AlejandroTech puede transformar tus
                operaciones con software diseñado con precisión.
              </p>
              <Link to="/contact" className="btn-primary w-full sm:w-auto">
                <span>Iniciar Tu Proyecto</span> <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
