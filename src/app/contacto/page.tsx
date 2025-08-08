'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    revenue: '',
    message: '',
    contactReason: 'sell'
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.')
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-emerald-600">🐢</div>
              <span className="ml-2 text-xl font-bold text-gray-900">Turtle Pond Ventures</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-600 hover:text-emerald-600 font-medium">Inicio</Link>
              <Link href="/como-trabajamos" className="text-gray-600 hover:text-emerald-600 font-medium">Como Trabajamos</Link>
              <Link href="/sobre-nosotros" className="text-gray-600 hover:text-emerald-600 font-medium">Sobre Nosotros</Link>
              <Link href="/contacto" className="text-gray-900 hover:text-emerald-600 font-medium">Contacto</Link>
              <Link href="/inversores" className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 font-medium">Inversores</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-16 bg-gradient-to-br from-emerald-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Hablemos sobre el Futuro 
              <span className="block text-emerald-600">de tu Empresa</span>
            </h1>
            <p className="text-xl text-gray-600">
              Tienes una PYME establecida? Exploremos juntos las oportunidades para su proximo capitulo.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Informacion de Contacto</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="text-2xl">📧</div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Email</h3>
                      <p className="text-gray-600">info@turtlepondventures.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="text-2xl">🌍</div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Ubicacion</h3>
                      <p className="text-gray-600">España</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="text-2xl">🎯</div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Enfoque</h3>
                      <p className="text-gray-600">PYMES con 15+ años, €1-5M facturacion, &gt;15% EBITDA</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* What to Expect */}
              <div className="bg-emerald-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-4">Que Esperar</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start space-x-2">
                    <span className="text-emerald-600 font-bold">1.</span>
                    <span>Respuesta inicial en 48 horas</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-emerald-600 font-bold">2.</span>
                    <span>Llamada inicial de 30 minutos (sin compromiso)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-emerald-600 font-bold">3.</span>
                    <span>Evaluacion preliminar confidencial</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-emerald-600 font-bold">4.</span>
                    <span>Propuesta personalizada si hay encaje</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-xl border border-gray-200 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Envianos un Mensaje</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="contactReason" className="block text-sm font-medium text-gray-700 mb-2">
                    Estoy interesado en:
                  </label>
                  <select
                    id="contactReason"
                    name="contactReason"
                    value={formData.contactReason}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    required
                  >
                    <option value="sell">Vender mi empresa</option>
                    <option value="invest">Oportunidades de inversion</option>
                    <option value="partnership">Partnership estrategico</option>
                    <option value="other">Otro</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Empresa
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label htmlFor="revenue" className="block text-sm font-medium text-gray-700 mb-2">
                    Facturacion anual (opcional)
                  </label>
                  <select
                    id="revenue"
                    name="revenue"
                    value={formData.revenue}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  >
                    <option value="">Seleccionar rango</option>
                    <option value="<500k">Menos de €500K</option>
                    <option value="500k-1m">€500K - €1M</option>
                    <option value="1m-3m">€1M - €3M</option>
                    <option value="3m-5m">€3M - €5M</option>
                    <option value="5m+">Mas de €5M</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Cuentanos sobre tu empresa y tus objetivos..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-emerald-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
                >
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center mb-4">
                <div className="text-2xl font-bold text-emerald-400">🐢</div>
                <span className="ml-2 text-xl font-bold">Turtle Pond Ventures</span>
              </div>
              <p className="text-gray-400 mb-4">
                Lideramos transiciones generacionales para asegurar el futuro de PYMES maduras, 
                generando retornos solidos y impacto positivo para todos los stakeholders.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Enlaces</h4>
              <ul className="space-y-2">
                <li><Link href="/como-trabajamos" className="text-gray-400 hover:text-white">Como Trabajamos</Link></li>
                <li><Link href="/sobre-nosotros" className="text-gray-400 hover:text-white">Sobre Nosotros</Link></li>
                <li><Link href="/contacto" className="text-gray-400 hover:text-white">Contacto</Link></li>
                <li><Link href="/inversores" className="text-gray-400 hover:text-white">Inversores</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Contacto</h4>
              <p className="text-gray-400">España</p>
              <p className="text-gray-400">info@turtlepondventures.com</p>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Turtle Pond Ventures. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}