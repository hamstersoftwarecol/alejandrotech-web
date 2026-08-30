import { motion } from 'framer-motion'
import { Users, Target, Lightbulb, Award, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const values = [
  { icon: Target,    title: 'Ingeniería de Precisión', desc: 'Nos obsesionamos con cada detalle técnico — desde decisiones de arquitectura hasta pipelines de despliegue.' },
  { icon: Lightbulb, title: 'Innovación Primero',       desc: 'Nos mantenemos a la vanguardia, adoptando herramientas y metodologías probadas para darte ventaja competitiva.' },
  { icon: Users,     title: 'Centrados en las Personas', desc: 'Cada sistema que construimos sirve a personas reales. Diseñamos tecnología alrededor de necesidades humanas.' },
  { icon: Award,     title: 'Orientados a Resultados',   desc: 'El éxito se mide por resultados de negocio, no solo por código entregado. Nos comprometemos hasta el final.' },
]

const team = [
  { name: 'Alejandro López', role: 'Fundador e Ingeniero Principal', initials: 'AL' },
  { name: 'María González',  role: 'Líder de Ciencia de Datos',      initials: 'MG' },
  { name: 'Carlos Reyes',    role: 'Arquitecto Móvil',               initials: 'CR' },
  { name: 'Sofía Méndez',    role: 'Líder de Ingeniería Frontend',   initials: 'SM' },
]

const fadeUp = {
  hidden:  { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function About() {
  return (
    <>
      {/* Header */}
      <section className="relative pt-28 sm:pt-32 md:pt-36 pb-12 sm:pb-16 md:pb-20 px-5 sm:px-6 text-center overflow-hidden">
        <div className="glow-orb w-[400px] sm:w-[500px] h-[200px] sm:h-[300px] bg-cyan-600/8 top-0 left-1/2 -translate-x-1/2" />
        <div className="absolute inset-x-0 top-0 gradient-line" />
        <div className="dot-grid absolute inset-0 opacity-30" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <motion.span className="section-label mb-5 sm:mb-6 block text-[0.65rem] sm:text-xs" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            Quiénes Somos
          </motion.span>
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black heading-gradient mb-4 sm:mb-5"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
          >
            Creado por Ingenieros,<br />Para Negocios.
          </motion.h1>
          <motion.p
            className="text-white/45 text-sm sm:text-base md:text-lg leading-relaxed px-2 sm:px-0"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16 }}
          >
            AlejandroTech es una firma de tecnología especializada en ingeniería de software
            de alta calidad y soluciones de datos que transforman la manera en que operan los negocios.
          </motion.p>
        </div>
      </section>

      {/* Misión */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-5 sm:px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label mb-4 sm:mb-5 block text-[0.65rem] sm:text-xs">Nuestra Misión</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-4 sm:mb-6 leading-tight">
              Convirtiendo la Complejidad Técnica
              <br className="hidden sm:block" />
              <span className="heading-gradient"> En Claridad de Negocio</span>
            </h2>
            <p className="text-white/45 leading-relaxed mb-4 sm:mb-5 text-xs sm:text-sm md:text-base">
              Fundamos AlejandroTech con una convicción clara: el gran software cambia vidas. Ya sea
              que seas una startup o una empresa modernizando sistemas heredados, traemos la misma dedicación.
            </p>
            <p className="text-white/45 leading-relaxed text-xs sm:text-sm md:text-base">
              Nuestro equipo multidisciplinario abarca ingeniería de datos, ML aplicado, móvil y
              desarrollo full-stack — dándonos una perspectiva amplia sobre cómo la tecnología puede
              servir a tus objetivos de negocio.
            </p>
          </motion.div>

          {/* Stats card */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="service-card relative !p-7 sm:!p-10"
          >
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" />
            <div className="glow-orb w-48 sm:w-64 h-48 sm:h-64 bg-blue-600/8 -top-10 -right-10" />
            <div className="relative z-10 grid grid-cols-2 gap-5 sm:gap-8">
              {[
                { v: '150+', l: 'Proyectos' },
                { v: '12+',  l: 'Años' },
                { v: '40+',  l: 'Ingenieros' },
                { v: '30+',  l: 'Industrias' },
              ].map(({ v, l }) => (
                <div key={l} className="flex flex-col gap-1 sm:gap-1.5">
                  <span className="text-2xl sm:text-3xl md:text-4xl font-black heading-gradient">{v}</span>
                  <span className="text-white/35 text-xs sm:text-sm font-medium">{l}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-14 sm:py-18 md:py-20 lg:py-28 px-5 sm:px-6 relative">
        <div className="absolute inset-x-0 top-0 gradient-line" />
        <div className="absolute inset-x-0 bottom-0 gradient-line" />
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-10 sm:mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-label mb-3 sm:mb-4 block text-[0.65rem] sm:text-xs">Valores Fundamentales</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black heading-gradient">Lo Que Impulsa Todo Lo Que Hacemos</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="service-card group"
              >
                <div className="relative z-10">
                  <div className="icon-wrap mb-4 sm:mb-5 w-10 h-10 sm:w-12 sm:h-12">
                    <v.icon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                  </div>
                  <h3 className="text-white font-bold text-sm sm:text-[0.9rem] mb-1.5 sm:mb-2">{v.title}</h3>
                  <p className="text-white/38 text-xs sm:text-sm leading-relaxed">{v.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipo */}
      <section className="py-14 sm:py-18 md:py-20 lg:py-28 px-5 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-10 sm:mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-label mb-3 sm:mb-4 block text-[0.65rem] sm:text-xs">El Equipo</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black heading-gradient">Conoce a Nuestros Expertos</h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="service-card group text-center"
              >
                <div className="relative z-10 flex flex-col items-center gap-3 sm:gap-4 py-1 sm:py-2">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-500/25 to-cyan-500/15 border border-blue-400/20 flex items-center justify-center text-white font-black text-sm sm:text-lg">
                    {member.initials}
                  </div>
                  <div>
                    <div className="text-white font-bold text-xs sm:text-sm">{member.name}</div>
                    <div className="text-white/35 text-[0.6rem] sm:text-xs mt-0.5 sm:mt-1">{member.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 md:py-20 px-5 sm:px-6 pb-16 sm:pb-20 md:pb-28">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black heading-gradient mb-4 sm:mb-5">¿Listo para trabajar con nosotros?</h2>
            <p className="text-white/40 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base px-2 sm:px-0">
              Hablemos de cómo AlejandroTech puede ayudarte a acelerar tu próximo proyecto.
            </p>
            <Link to="/contact" className="btn-primary w-full sm:w-auto">
              <span>Contactar Nuestro Equipo</span> <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
