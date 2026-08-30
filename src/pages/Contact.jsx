import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react'

const contactInfo = [
  { icon: Mail,   label: 'Correo',    value: 'contacto@alejandrotech.com' },
  { icon: Phone,  label: 'Teléfono',  value: '+1 (555) 000-0000' },
  { icon: MapPin, label: 'Ubicación', value: 'Estados Unidos' },
]

const serviceList = [
  'Ingeniería de Datos',
  'Extracción de Datos / ETL',
  'Visualización de Datos',
  'Minería y Gestión de Datos',
  'Desarrollo de Software de Escritorio',
  'Machine Learning',
  'Desarrollo Móvil',
  'Sistemas de Software Bajo Demanda',
  'Desarrollo Web',
  'Otro',
]

export default function Contact() {
  const [form, setForm]        = useState({ name: '', email: '', service: '', message: '' })
  const [submitted, setSubmit] = useState(false)
  const [loading, setLoading]  = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    await new Promise(r => setTimeout(r, 1500))
    setLoading(false)
    setSubmit(true)
  }

  const inputClass =
    'w-full px-3.5 sm:px-4 py-3 sm:py-3.5 rounded-xl text-sm outline-none transition-all duration-200 ' +
    'bg-white/[0.03] border border-white/[0.08] text-white placeholder-white/20 ' +
    'focus:border-blue-500/40 focus:bg-white/[0.05] focus:ring-1 focus:ring-blue-500/25'

  return (
    <>
      {/* Header */}
      <section className="relative pt-28 sm:pt-32 md:pt-36 pb-10 sm:pb-12 md:pb-16 px-5 sm:px-6 text-center overflow-hidden">
        <div className="glow-orb w-[400px] sm:w-[500px] h-[200px] sm:h-[300px] bg-blue-600/10 top-0 left-1/2 -translate-x-1/2" />
        <div className="absolute inset-x-0 top-0 gradient-line" />
        <div className="dot-grid absolute inset-0 opacity-30" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <motion.span className="section-label mb-5 sm:mb-6 block text-[0.65rem] sm:text-xs" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            Contáctanos
          </motion.span>
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black heading-gradient mb-4 sm:mb-5"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
          >
            Comencemos Tu Proyecto
          </motion.h1>
          <motion.p
            className="text-white/45 text-sm sm:text-base md:text-lg px-2 sm:px-0"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16 }}
          >
            Cuéntanos sobre tu proyecto y te responderemos en las próximas 24 horas.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-4 sm:py-6 md:py-8 px-5 sm:px-6 pb-16 sm:pb-20 md:pb-28">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-6 sm:gap-8 md:gap-10">
          {/* Sidebar info */}
          <motion.div
            className="lg:col-span-2 flex flex-col gap-4 sm:gap-5 md:gap-6"
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="service-card !p-6 sm:!p-8 relative">
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" />
              <div className="glow-orb w-36 sm:w-48 h-36 sm:h-48 bg-blue-600/8 -top-10 -right-10" />
              <div className="relative z-10">
                <h3 className="text-white font-bold text-base sm:text-lg mb-5 sm:mb-6">Información de Contacto</h3>
                <div className="flex flex-col gap-5 sm:gap-6">
                  {contactInfo.map(item => (
                    <div key={item.label} className="flex items-start gap-3 sm:gap-4">
                      <div className="icon-wrap w-9 h-9 sm:w-10 sm:h-10 shrink-0">
                        <item.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-400" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-white/30 text-[0.6rem] sm:text-[0.65rem] font-semibold uppercase tracking-[0.12em] mb-0.5 sm:mb-1">
                          {item.label}
                        </div>
                        <div className="text-white/75 text-xs sm:text-sm break-all sm:break-normal">{item.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="service-card !p-5 sm:!p-6">
              <div className="relative z-10">
                <h4 className="text-white font-semibold text-sm mb-2 sm:mb-2.5">Tiempo de Respuesta</h4>
                <p className="text-white/38 text-xs sm:text-sm leading-relaxed">
                  Normalmente respondemos en <span className="text-blue-400 font-semibold">24 horas</span> en días hábiles.
                  Para consultas urgentes, contáctanos por teléfono.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="service-card !p-6 sm:!p-8 md:!p-10 relative">
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-400/25 to-transparent" />

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col items-center text-center py-10 sm:py-14 gap-4 sm:gap-5 relative z-10"
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10 text-emerald-400" />
                  </div>
                  <h3 className="text-white text-xl sm:text-2xl font-bold">¡Mensaje Enviado!</h3>
                  <p className="text-white/42 max-w-sm leading-relaxed text-sm">
                    Gracias por contactarnos. Nuestro equipo te responderá en las próximas 24 horas.
                  </p>
                  <button
                    onClick={() => { setSubmit(false); setForm({ name: '', email: '', service: '', message: '' }) }}
                    className="btn-ghost text-sm mt-2"
                  >
                    Enviar Otro Mensaje
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-5 relative z-10">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div className="flex flex-col gap-1.5 sm:gap-2">
                      <label htmlFor="contact-name" className="text-white/50 text-[0.6rem] sm:text-[0.65rem] font-semibold uppercase tracking-[0.12em]">
                        Nombre Completo
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Juan Pérez"
                        className={inputClass}
                      />
                    </div>
                    <div className="flex flex-col gap-1.5 sm:gap-2">
                      <label htmlFor="contact-email" className="text-white/50 text-[0.6rem] sm:text-[0.65rem] font-semibold uppercase tracking-[0.12em]">
                        Correo Electrónico
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="juan@empresa.com"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5 sm:gap-2">
                    <label htmlFor="contact-service" className="text-white/50 text-[0.6rem] sm:text-[0.65rem] font-semibold uppercase tracking-[0.12em]">
                      Servicio Requerido
                    </label>
                    <select
                      id="contact-service"
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className={`${inputClass} appearance-none cursor-pointer`}
                    >
                      <option value="" className="bg-[hsl(220_23%_10%)]">Selecciona un servicio...</option>
                      {serviceList.map(s => (
                        <option key={s} value={s} className="bg-[hsl(220_23%_10%)]">{s}</option>
                      ))}
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5 sm:gap-2">
                    <label htmlFor="contact-message" className="text-white/50 text-[0.6rem] sm:text-[0.65rem] font-semibold uppercase tracking-[0.12em]">
                      Detalles del Proyecto
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Cuéntanos sobre tu proyecto, plazos y objetivos..."
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    id="contact-submit"
                    disabled={loading}
                    className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed disabled:!transform-none mt-1"
                  >
                    {loading ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Enviando…</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Enviar Mensaje</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
