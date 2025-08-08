'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function HowWeWorkPage() {
  const [activeStep, setActiveStep] = useState(0)

  const steps = [
    {
      number: "01",
      title: "Source & Identify",
      subtitle: "Identificacion de Oportunidades",
      description: "Buscamos PYMES establecidas con 15+ años de historia, sólidos fundamentales financieros y necesidades de sucesión generacional.",
      details: [
        "PYMES con facturación entre €1-5M anuales",
        "Márgenes EBITDA superiores al 15%",
        "Historial probado de rentabilidad",
        "Mercados estables con potencial de crecimiento",
        "Propietarios cerca de la jubilación o transición"
      ],
      timeline: "Proceso continuo"
    },
    {
      number: "02", 
      title: "Rigorous Analysis",
      subtitle: "Due Diligence Exhaustivo",
      description: "Realizamos un análisis profundo de los aspectos financieros, operativos, comerciales y legales de cada oportunidad.",
      details: [
        "Auditoría financiera detallada (3-5 años)",
        "Análisis de mercado y competencia",
        "Evaluación del equipo directivo y empleados", 
        "Revisión de contratos y aspectos legales",
        "Identificación de oportunidades de mejora"
      ],
      timeline: "4-6 semanas"
    },
    {
      number: "03",
      title: "Negotiate & Acquire", 
      subtitle: "Negociación y Adquisición",
      description: "Estructuramos operaciones con financiación mediante deuda, valoraciones justas que respetan el legado de la empresa.",
      details: [
        "Valoración basada en múltiplos de EBITDA (3-5x)",
        "Financiación principalmente con deuda bancaria",
        "Términos justos para vendedores y compradores",
        "Transición gradual cuando sea necesario",
        "Preservación del equipo clave"
      ],
      timeline: "6-8 semanas"
    },
    {
      number: "04",
      title: "Operate & Scale",
      subtitle: "Gestión Activa y Crecimiento",
      description: "Implementamos mejoras operativas hands-on: digitalización, optimización de procesos y crecimiento comercial.",
      details: [
        "Digitalización de procesos clave",
        "Optimización de la cadena de suministro",
        "Expansión comercial y marketing digital",
        "Mejora de sistemas de gestión",
        "Desarrollo del equipo humano"
      ],
      timeline: "2-3 años"
    },
    {
      number: "05",
      title: "Generate Returns",
      subtitle: "Generación de Retornos",
      description: "Objetivo de 18-24% IRR con múltiplos de 1.5x en 5-7 años, preservando la cultura empresarial.",
      details: [
        "Target IRR: 18-24% anualizado",
        "Múltiplo objetivo: 1.5x en 5-7 años",
        "Salida mediante venta estratégica o financiera",
        "Preservación de cultura y valores",
        "Continuidad para empleados y clientes"
      ],
      timeline: "5-7 años"
    }
  ]

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
              <Link href="/como-trabajamos" className="text-gray-900 hover:text-emerald-600 font-medium">Como Trabajamos</Link>
              <Link href="/sobre-nosotros" className="text-gray-600 hover:text-emerald-600 font-medium">Sobre Nosotros</Link>
              <Link href="/contacto" className="text-gray-600 hover:text-emerald-600 font-medium">Contacto</Link>
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
              Como 
              <span className="block text-emerald-600">Trabajamos</span>
            </h1>
            <p className="text-xl text-gray-600">
              Nuestro proceso estructurado de 5 etapas garantiza transiciones exitosas 
              y crecimiento sostenible para cada PYME que adquirimos.
            </p>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Proceso de 5 Etapas</h2>
            <p className="text-xl text-gray-600">
              De la identificación inicial hasta la generación de retornos
            </p>
          </div>

          {/* Steps Navigation */}
          <div className="flex justify-center space-x-4 mb-12 overflow-x-auto">
            {steps.map((step, index) => (
              <button
                key={index}
                onClick={() => setActiveStep(index)}
                className={`flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center font-bold text-lg transition-all duration-300 ${
                  index === activeStep
                    ? 'bg-emerald-600 text-white scale-110 shadow-lg'
                    : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                }`}
              >
                {step.number}
              </button>
            ))}
          </div>

          {/* Active Step Details */}
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <div className="text-emerald-600 font-bold text-lg mb-2">
                Etapa {steps[activeStep].number}
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">
                {steps[activeStep].title}
              </h3>
              <p className="text-xl text-emerald-600 font-semibold mb-4">
                {steps[activeStep].subtitle}
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                {steps[activeStep].description}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-gray-900 mb-4">Actividades Clave:</h4>
                <ul className="space-y-3">
                  {steps[activeStep].details.map((detail, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-emerald-50 rounded-xl p-6">
                <h4 className="font-bold text-gray-900 mb-2">Duración Típica</h4>
                <div className="text-2xl font-bold text-emerald-600 mb-4">
                  {steps[activeStep].timeline}
                </div>
                
                <div className="space-y-2">
                  <div className="text-sm text-gray-600">Progreso actual:</div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-emerald-600 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
                    ></div>
                  </div>
                  <div className="text-sm text-gray-500">
                    Etapa {activeStep + 1} de {steps.length}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Profile */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Perfil de Empresas Objetivo</h2>
            <p className="text-xl text-gray-600">
              Buscamos PYMES con características específicas que garanticen el éxito de la transición
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Criterios Financieros</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Facturación Anual:</span>
                  <span className="font-bold text-emerald-600">€1-5M</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Margen EBITDA:</span>
                  <span className="font-bold text-emerald-600">&gt;15%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Historial:</span>
                  <span className="font-bold text-emerald-600">15+ años</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Rentabilidad:</span>
                  <span className="font-bold text-emerald-600">Consistente</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Características Deseables</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2"></div>
                  <span className="text-gray-600">Mercado estable o en crecimiento</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2"></div>
                  <span className="text-gray-600">Equipo directivo competente</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2"></div>
                  <span className="text-gray-600">Oportunidades de digitalización</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2"></div>
                  <span className="text-gray-600">Potencial de expansión comercial</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2"></div>
                  <span className="text-gray-600">Propietario motivado para vender</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Strategy */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Estrategia de Inversión</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-emerald-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Estructura Financiera</h3>
              <p className="text-gray-600">
                Financiación mayoritaria mediante deuda bancaria, 
                minimizando la dilución y maximizando retornos.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-emerald-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Creación de Valor</h3>
              <p className="text-gray-600">
                Digitalización, optimización operativa y 
                crecimiento comercial para aumentar la rentabilidad.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-emerald-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Salida Estratégica</h3>
              <p className="text-gray-600">
                Venta a compradores estratégicos o financieros 
                en 5-7 años con múltiplos atractivos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            ¿Tu Empresa Encaja con Nuestro Perfil?
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            Si tienes una PYME establecida y estás considerando opciones de sucesión, 
            evaluemos juntos las oportunidades.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacto" className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Evaluar Mi Empresa
            </Link>
            <Link href="/sobre-nosotros" className="border-2 border-white text-white hover:bg-emerald-700 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Conocer Más
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