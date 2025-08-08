'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function InvestorsPage() {
  const [selectedDeal, setSelectedDeal] = useState(0)

  const currentPipeline = [
    {
      name: "Industrial Lifts Co.",
      location: "Valencia",
      sector: "Equipos Industriales",
      years: "15 años",
      revenue: "€2.8M",
      ebitda: "€420K (15%)",
      investment: "€1.45M",
      multiple: "4.0× EBITDA",
      irr: "22%",
      description: "Empresa líder en mantenimiento y venta de equipos de elevación industrial con contratos recurrentes.",
      highlights: [
        "Base de clientes fiel con contratos de mantenimiento",
        "Oportunidades de digitalización del servicio",
        "Potencial expansión geográfica",
        "Equipo técnico experimentado"
      ]
    },
    {
      name: "Industrial Supplies Co.",
      location: "Arévalo",
      sector: "Suministros Industriales",
      years: "Establecida",
      revenue: "€3.2M", 
      ebitda: "€350K (11%)",
      investment: "€1.75M",
      multiple: "5.0× EBITDA",
      irr: "25%",
      description: "Distribuidor especializado de suministros industriales con red consolidada de proveedores.",
      highlights: [
        "Relaciones sólidas con proveedores clave",
        "Margen de mejora en márgenes EBITDA",
        "Oportunidades de e-commerce",
        "Potencial de cross-selling"
      ]
    },
    {
      name: "Educational Training Co.",
      location: "Madrid",
      sector: "Formación Pública",
      years: "10+ años",
      revenue: "€1.8M",
      ebitda: "€900K (50%)",
      investment: "€1.6M",
      multiple: "1.8× EBITDA", 
      irr: "58%",
      description: "Centro de formación especializado en cursos públicos con alta rentabilidad y crecimiento sostenido.",
      highlights: [
        "Márgenes excepcionales (50% EBITDA)",
        "Contratos públicos estables",
        "Posibilidad de expansión online",
        "Diversificación a formación privada"
      ]
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
              <Link href="/como-trabajamos" className="text-gray-600 hover:text-emerald-600 font-medium">Como Trabajamos</Link>
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
              Oportunidades de 
              <span className="block text-emerald-600">Inversión</span>
            </h1>
            <p className="text-xl text-gray-600">
              Participa en la transformación de PYMES españolas con retornos atractivos 
              y impacto positivo en la economía real.
            </p>
          </div>
        </div>
      </section>

      {/* Investment Thesis */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Por Qué Invertir con Nosotros</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-emerald-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-emerald-600">22%</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Target IRR</h3>
              <p className="text-gray-600">
                Objetivo de retorno anualizado del 18-24% basado en mejoras operativas reales.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-emerald-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-emerald-600">5-7</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Años Típicos</h3>
              <p className="text-gray-600">
                Horizonte de inversión medio que permite transformaciones profundas y sostenibles.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-emerald-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-emerald-600">1.5×</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Múltiplo Objetivo</h3>
              <p className="text-gray-600">
                Retorno total objetivo mediante crecimiento orgánico y mejoras de márgenes.
              </p>
            </div>
          </div>

          <div className="bg-emerald-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Ventajas Competitivas</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-gray-900 mb-4">🎯 Enfoque Especializado</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• PYMES maduras con historial probado</li>
                  <li>• Mercados estables y predecibles</li>
                  <li>• Criterios de selección estrictos</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-gray-900 mb-4">⚡ Creación de Valor Activa</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Digitalización y automatización</li>
                  <li>• Optimización de procesos</li>
                  <li>• Expansión comercial estratégica</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-gray-900 mb-4">💰 Estructura Financiera Eficiente</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Uso inteligente de deuda bancaria</li>
                  <li>• Minimización de dilución</li>
                  <li>• Maximización de retornos</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-gray-900 mb-4">🤝 Gestión Responsable</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Preservación de cultura empresarial</li>
                  <li>• Continuidad para empleados</li>
                  <li>• Impacto positivo en comunidades</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Pipeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Pipeline Actual de Inversión</h2>
            <p className="text-xl text-gray-600">
              Actualmente levantando €2.1M para cerrar tres adquisiciones estratégicas
            </p>
          </div>

          {/* Deal Selection */}
          <div className="flex justify-center space-x-4 mb-8 overflow-x-auto">
            {currentPipeline.map((deal, index) => (
              <button
                key={index}
                onClick={() => setSelectedDeal(index)}
                className={`flex-shrink-0 px-6 py-3 rounded-lg font-medium transition-colors ${
                  index === selectedDeal
                    ? 'bg-emerald-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                {deal.name}
              </button>
            ))}
          </div>

          {/* Deal Details */}
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {currentPipeline[selectedDeal].name}
                  </h3>
                  <div className="text-gray-600">
                    {currentPipeline[selectedDeal].location} • {currentPipeline[selectedDeal].sector} • {currentPipeline[selectedDeal].years}
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {currentPipeline[selectedDeal].description}
                </p>

                <div>
                  <h4 className="font-bold text-gray-900 mb-4">Puntos Destacados:</h4>
                  <ul className="space-y-2">
                    {currentPipeline[selectedDeal].highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-bold text-gray-900 mb-4">Datos Financieros</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Facturación:</span>
                      <span className="font-medium">{currentPipeline[selectedDeal].revenue}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">EBITDA:</span>
                      <span className="font-medium">{currentPipeline[selectedDeal].ebitda}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Inversión:</span>
                      <span className="font-medium">{currentPipeline[selectedDeal].investment}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Múltiplo:</span>
                      <span className="font-medium">{currentPipeline[selectedDeal].multiple}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-emerald-50 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">
                    {currentPipeline[selectedDeal].irr}
                  </div>
                  <div className="text-gray-600 font-medium">IRR Proyectado</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Process */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Proceso de Inversión</h2>
            <p className="text-xl text-gray-600">
              Un proceso transparente y estructurado para inversores cualificados
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-start space-x-6">
              <div className="bg-emerald-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Presentación Inicial</h3>
                <p className="text-gray-600">
                  Reunión para entender tus objetivos de inversión y presentar nuestra estrategia y pipeline actual.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="bg-emerald-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Due Diligence del Inversor</h3>
                <p className="text-gray-600">
                  Verificación de cualificación como inversor sofisticado y alineación con nuestros valores.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="bg-emerald-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Acceso al Data Room</h3>
                <p className="text-gray-600">
                  Acceso completo a información detallada sobre las oportunidades de inversión actuales.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="bg-emerald-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Compromiso de Inversión</h3>
                <p className="text-gray-600">
                  Formalización del compromiso de inversión con documentación legal completa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investor Profile */}
      <section className="py-20 bg-emerald-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Perfil de Inversor Ideal</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Características Deseables</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2"></div>
                  <span className="text-gray-600">Inversor cualificado o sofisticado</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2"></div>
                  <span className="text-gray-600">Horizonte de inversión 5-7 años</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2"></div>
                  <span className="text-gray-600">Interés en la economía real española</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2"></div>
                  <span className="text-gray-600">Alineación con inversión responsable</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2"></div>
                  <span className="text-gray-600">Ticket mínimo: €50K</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Lo Que Ofrecemos</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2"></div>
                  <span className="text-gray-600">Reportes trimestrales detallados</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2"></div>
                  <span className="text-gray-600">Acceso a reuniones de seguimiento</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2"></div>
                  <span className="text-gray-600">Transparencia total en la gestión</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2"></div>
                  <span className="text-gray-600">Derechos de información amplios</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2"></div>
                  <span className="text-gray-600">Network de coinversores cualificados</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            ¿Listo para Participar?
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            Únete a nosotros en la transformación del tejido empresarial español 
            con retornos atractivos e impacto positivo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacto" className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Solicitar Información
            </Link>
            <Link href="/como-trabajamos" className="border-2 border-white text-white hover:bg-emerald-700 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Conocer Nuestro Proceso
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