import { motion } from 'framer-motion'
import {
  Database, BarChart3, Search, MonitorDown, Brain, Smartphone,
  Globe, Code2, Server, Check, ArrowRight
} from 'lucide-react'
import { Link } from 'react-router-dom'

const services = [
  {
    id: 'data-engineering', icon: Database, title: 'Ingeniería de Datos', accent: 'blue',
    features: ['Diseño e implementación de pipelines de datos','Procesamiento en tiempo real y por lotes','Migración a data warehouse en la nube','Integración con Apache Spark y Kafka','Marcos de calidad y gobernanza de datos'],
    desc: 'Arquitectamos e implementamos pipelines de datos robustos y escalables que son la columna vertebral de tu estrategia de datos.',
  },
  {
    id: 'etl', icon: Server, title: 'Extracción de Datos / ETL', accent: 'cyan',
    features: ['Integración de datos multi-fuente','Ingestión de APIs y webhooks','Migración de sistemas heredados','Estrategias incrementales y de carga completa','Programación y monitoreo automatizado'],
    desc: 'Extraemos datos de cualquier fuente y los transformamos en formatos limpios y estructurados listos para análisis.',
  },
  {
    id: 'visualization', icon: BarChart3, title: 'Visualización de Datos', accent: 'violet',
    features: ['Dashboards interactivos (Tableau, Power BI, D3.js)','Sistemas de reportes ejecutivos','Monitoreo de KPIs en tiempo real','Componentes de gráficos personalizados','Visualización geoespacial y de redes'],
    desc: 'Transformamos datos complejos en visuales claros y convincentes que empoderan decisiones rápidas basadas en evidencia.',
  },
  {
    id: 'data-mining', icon: Search, title: 'Minería y Gestión de Datos', accent: 'indigo',
    features: ['Detección de patrones y anomalías','Segmentación y clustering de clientes','Minería de reglas de asociación','Gestión de datos maestros (MDM)','Catálogo de datos y seguimiento de linaje'],
    desc: 'Descubrimos insights ocultos en tus datos con soluciones de minería y gestión que te dan visibilidad y control total.',
  },
  {
    id: 'desktop', icon: MonitorDown, title: 'Software de Escritorio', accent: 'sky',
    features: ['Aplicaciones para Windows, macOS y Linux','Apps multiplataforma con Electron y Tauri','Integraciones con ERP y CRM','Arquitectura offline-first','Sistemas de actualización y despliegue automático'],
    desc: 'Construimos aplicaciones de escritorio nativas con el rendimiento y la seguridad de nivel empresarial.',
  },
  {
    id: 'ml', icon: Brain, title: 'Machine Learning', accent: 'purple',
    features: ['Analítica predictiva y pronósticos','Modelos de NLP y visión por computadora','Fine-tuning de LLMs y pipelines RAG','MLOps y gestión del ciclo de vida de modelos','Frameworks de A/B testing y experimentación'],
    desc: 'Desplegamos sistemas inteligentes de ML que automatizan decisiones complejas — desde pronósticos hasta procesamiento de documentos.',
  },
  {
    id: 'mobile', icon: Smartphone, title: 'Desarrollo Móvil', accent: 'teal',
    features: ['iOS (Swift / SwiftUI) y Android (Kotlin)','Multiplataforma con React Native y Flutter','PWAs con capacidad offline','Notificaciones push y compras in-app','Optimización para App Store y Play Store'],
    desc: 'Creamos aplicaciones móviles pulidas y de alto rendimiento para iOS y Android que los usuarios usan cada día.',
  },
  {
    id: 'on-demand', icon: Code2, title: 'Sistemas Bajo Demanda', accent: 'amber',
    features: ['Prototipado rápido y entrega de MVPs','Arquitectura de microservicios y serverless','Ingeniería de plataformas SaaS','Diseño API-first y GraphQL','Configuración de DevOps y pipelines CI/CD'],
    desc: '¿Necesitas una solución personalizada — rápido? Arquitectamos y entregamos sistemas adaptados a tus requisitos y plazos.',
  },
  {
    id: 'web', icon: Globe, title: 'Desarrollo Web', accent: 'emerald',
    features: ['Frontends con React, Next.js y Vue.js','Backends con Laravel, Node.js y Django','Plataformas de e-commerce y marketplaces','Optimización de rendimiento (Core Web Vitals)','Integraciones con CMS headless y APIs'],
    desc: 'Diseñamos experiencias web de alto rendimiento — desde landing pages hasta plataformas empresariales complejas.',
  },
]

const accentColors = {
  blue:    { bg: 'bg-blue-500/12',    border: 'border-blue-500/20',    icon: 'text-blue-400',    check: 'text-blue-400'    },
  cyan:    { bg: 'bg-cyan-500/12',    border: 'border-cyan-500/20',    icon: 'text-cyan-400',    check: 'text-cyan-400'    },
  violet:  { bg: 'bg-violet-500/12',  border: 'border-violet-500/20',  icon: 'text-violet-400',  check: 'text-violet-400'  },
  indigo:  { bg: 'bg-indigo-500/12',  border: 'border-indigo-500/20',  icon: 'text-indigo-400',  check: 'text-indigo-400'  },
  sky:     { bg: 'bg-sky-500/12',     border: 'border-sky-500/20',     icon: 'text-sky-400',     check: 'text-sky-400'     },
  purple:  { bg: 'bg-purple-500/12',  border: 'border-purple-500/20',  icon: 'text-purple-400',  check: 'text-purple-400'  },
  teal:    { bg: 'bg-teal-500/12',    border: 'border-teal-500/20',    icon: 'text-teal-400',    check: 'text-teal-400'    },
  amber:   { bg: 'bg-amber-500/12',   border: 'border-amber-500/20',   icon: 'text-amber-400',   check: 'text-amber-400'   },
  emerald: { bg: 'bg-emerald-500/12', border: 'border-emerald-500/20', icon: 'text-emerald-400', check: 'text-emerald-400' },
}

const fadeUp = {
  hidden:  { opacity: 0, y: 36 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Services() {
  return (
    <>
      {/* Header */}
      <section className="relative pt-28 sm:pt-32 md:pt-36 pb-12 sm:pb-16 md:pb-20 px-5 sm:px-6 text-center overflow-hidden">
        <div className="glow-orb w-[400px] sm:w-[600px] h-[250px] sm:h-[350px] bg-blue-600/10 top-0 left-1/2 -translate-x-1/2" />
        <div className="absolute inset-x-0 top-0 gradient-line" />
        <div className="dot-grid absolute inset-0 opacity-30" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.span
            className="section-label mb-5 sm:mb-6 block text-[0.65rem] sm:text-xs"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Nuestra Experiencia
          </motion.span>
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black heading-gradient mb-4 sm:mb-5"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
          >
            Servicios de Alta Calidad
          </motion.h1>
          <motion.p
            className="text-white/45 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto px-2 sm:px-0"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16 }}
          >
            Nuestras soluciones de software de alta calidad, soluciones de TI y servicios te ayudan a mejorar tu negocio.
          </motion.p>
        </div>
      </section>

      {/* Service cards */}
      <section className="py-6 sm:py-8 md:py-12 px-5 sm:px-6 pb-16 sm:pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto flex flex-col gap-5 sm:gap-6 md:gap-8">
          {services.map((svc, i) => {
            const a = accentColors[svc.accent]
            return (
              <motion.div
                key={svc.id}
                id={`service-${svc.id}`}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                className="service-card group"
              >
                <div className="relative z-10 p-0 sm:p-1 md:p-2">
                  <div className="flex flex-col lg:flex-row gap-5 sm:gap-6 md:gap-8">
                    {/* Left info */}
                    <div className="flex flex-col gap-3 sm:gap-4 lg:w-2/5">
                      <div className={`w-12 h-12 sm:w-13 sm:h-13 rounded-xl flex items-center justify-center ${a.bg} border ${a.border}`}>
                        <svc.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${a.icon}`} />
                      </div>
                      <h2 className="text-white text-lg sm:text-xl md:text-2xl font-black leading-snug">{svc.title}</h2>
                      <p className="text-white/42 text-xs sm:text-sm leading-relaxed">{svc.desc}</p>
                      <Link to="/contact" className="btn-primary text-sm self-start mt-1 w-full sm:w-auto">
                        <span>Solicitar Cotización</span> <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                    {/* Right features */}
                    <div className="lg:w-3/5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                        {svc.features.map(f => (
                          <div
                            key={f}
                            className="flex items-start gap-2.5 sm:gap-3 p-3 sm:p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] transition-colors duration-200"
                          >
                            <Check className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${a.check} shrink-0 mt-0.5`} />
                            <span className="text-white/60 text-xs sm:text-sm leading-snug">{f}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </section>
    </>
  )
}
