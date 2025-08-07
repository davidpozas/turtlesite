// src/app/page.tsx
'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function HomePage() {
  const [currentStep, setCurrentStep] = useState(0)
  
  const steps = [
    {
      number: "01",
      title: "Source & Identify",
      description: "We find established SMEs (15+ years) across Spain with strong fundamentals and succession needs."
    },
    {
      number: "02", 
      title: "Rigorous Analysis",
      description: "Deep due diligence on €1-5M revenue businesses with >15% EBITDA margins."
    },
    {
      number: "03",
      title: "Negotiate & Acquire", 
      description: "Debt-financed acquisitions with fair valuations that respect the company's legacy."
    },
    {
      number: "04",
      title: "Operate & Scale",
      description: "Hands-on improvements: digitalization, process optimization, and commercial growth."
    },
    {
      number: "05",
      title: "Generate Returns",
      description: "Target 18-24% IRR with 1.5× return in 5-7 years while preserving company culture."
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [steps.length])

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
              <Link href="/" className="text-gray-900 hover:text-emerald-600 font-medium">Inicio</Link>
              <Link href="/como-trabajamos" className="text-gray-600 hover:text-emerald-600 font-medium">Cómo Trabajamos</Link>
              <Link href="/sobre-nosotros" className="text-gray-600 hover:text-emerald-600 font-medium">Sobre Nosotros</Link>
              <Link href="/contacto" className="text-gray-600 hover:text-emerald-600 font-medium">Contacto</Link>
              <Link href="/inversores" className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 font-medium">Inversores</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-emerald-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Compramos PYMES 
                  <span className="block text-emerald-600">con Historia</span>
                </h1>
                <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed">
                  Lideramos transiciones generacionales para asegurar el futuro de PYMES maduras en España, 
                  generando retornos sólidos y preservando el legado empresarial.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6 py-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600">€1-5M</div>
                  <div className="text-gray-600">Facturación Objetivo</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600">15+</div>
                  <div className="text-gray-600">Años de Historia</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600">&gt;15%</div>
                  <div className="text-gray-600">Margen EBITDA</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600">18-24%</div>
                  <div className="text-gray-600">TIR Objetivo</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contacto" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg text-lg font-semibold text-center transition-colors">
                  Vender Mi Empresa
                </Link>
                <Link href="/como-trabajamos" className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8 py-4 rounded-lg text-lg font-semibold text-center transition-colors">
                  Cómo Trabajamos
                </Link>
              </div>
            </div>
            
            {/* Hero Visual - Placeholder for turtle gif/video */}
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-emerald-400 to-blue-500 rounded-2xl flex items-center justify-center text-white text-center p-8">
                <div>
                  <div className="text-6xl mb-4">🐢🌊</div>
                  <p className="text-lg opacity-90">
                    Placeholder para GIF/Video de tortugas<br/>
                    dirigiéndose al océano
                  </p>
                  <p className="text-sm mt-2 opacity-75">
                    Representa el crecimiento y la transición generacional
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Nuestro Proceso de Adquisición
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un enfoque estructurado de 5 pasos para garantizar transiciones exitosas y rentabilidad sostenible.
            </p>
          </div>

          {/* Dynamic Steps Display */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-12">
            <div className="flex justify-center space-x-4 mb-8">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-bold transition-all duration-500 ${
                    index === currentStep
                      ? 'bg-emerald-600 text-white scale-110'
                      : 'bg-gray-200 text-gray-600'
                  }`}
                >
                  {step.number}
                </div>
              ))}
            </div>
            
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {steps[currentStep].title}
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                {steps[currentStep].description}
              </p>
            </div>
          </div>

          {/* Manual Navigation */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {steps.map((step, index) => (
              <button
                key={index}
                onClick={() => setCurrentStep(index)}
                className={`p-4 rounded-lg text-left transition-all duration-300 ${
                  index === currentStep
                    ? 'bg-emerald-100 border-2 border-emerald-600'
                    : 'bg-white border-2 border-gray-200 hover:border-emerald-300'
                }`}
              >
                <div className="font-bold text-emerald-600 mb-1">{step.number}</div>
                <div className="text-sm font-medium text-gray-900">{step.title}</div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              ¿Por Qué Elegir Turtle Pond Ventures?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Enfoque Especializado</h3>
              <p className="text-gray-600">
                Nos enfocamos exclusivamente en PYMES maduras con 15+ años de historia y sólidos fundamentales financieros.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="text-3xl mb-4">📈</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Track Record Comprobado</h3>
              <p className="text-gray-600">
                Atelier Lab: de €950K a 30% crecimiento interanual bajo nuestra gestión con digitalización y optimización.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="text-3xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Transiciones Respetuosas</h3>
              <p className="text-gray-600">
                Preservamos la cultura y el legado de cada empresa mientras desbloqueamos nuevas oportunidades de crecimiento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Pipeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Pipeline Actual de Inversión
            </h2>
            <p className="text-xl text-gray-600">
              Actualmente levantando €2.1M para cerrar tres adquisiciones estratégicas
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="font-bold text-gray-900 mb-2">Industrial Lifts Co.</h4>
              <p className="text-sm text-gray-600 mb-4">Valencia • 15 años</p>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Inversión:</span>
                  <span className="font-medium">€1.45M</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Múltiplo:</span>
                  <span className="font-medium">4× EBITDA</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">TIR:</span>
                  <span className="font-bold text-emerald-600">22%</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="font-bold text-gray-900 mb-2">Industrial Supplies Co.</h4>
              <p className="text-sm text-gray-600 mb-4">Arévalo • Establecida</p>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Inversión:</span>
                  <span className="font-medium">€1.75M</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Múltiplo:</span>
                  <span className="font-medium">5× EBITDA</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">TIR:</span>
                  <span className="font-bold text-emerald-600">25%</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="font-bold text-gray-900 mb-2">Educational Training Co.</h4>
              <p className="text-sm text-gray-600 mb-4">Formación Pública</p>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Inversión:</span>
                  <span className="font-medium">€1.6M</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Múltiplo:</span>
                  <span className="font-medium">1.8× EBITDA</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">TIR:</span>
                  <span className="font-bold text-emerald-600">58%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            ¿Listo para el Siguiente Capítulo de tu Empresa?
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            Si tienes una PYME establecida y estás considerando opciones de sucesión, 
            hablemos sobre cómo podemos asegurar su futuro juntos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacto" className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Evaluar Mi Empresa
            </Link>
            <Link href="/inversores" className="border-2 border-white text-white hover:bg-emerald-700 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Oportunidades de Inversión
            </Link>
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
                generando retornos sólidos y impacto positivo para todos los stakeholders.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Enlaces</h4>
              <ul className="space-y-2">
                <li><Link href="/como-trabajamos" className="text-gray-400 hover:text-white">Cómo Trabajamos</Link></li>
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