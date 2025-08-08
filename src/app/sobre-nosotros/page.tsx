'use client'
import Link from 'next/link'

export default function AboutPage() {
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
              <Link href="/sobre-nosotros" className="text-gray-900 hover:text-emerald-600 font-medium">Sobre Nosotros</Link>
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
              Sobre 
              <span className="block text-emerald-600">Turtle Pond Ventures</span>
            </h1>
            <p className="text-xl text-gray-600">
              Somos especialistas en transiciones generacionales de PYMES maduras, 
              combinando experiencia empresarial con vision estrategica para crear valor sostenible.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Nuestra Historia</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Turtle Pond Ventures nace de la vision de preservar y hacer crecer el legado de las PYMES 
                  españolas que han sido el motor economico del pais durante decadas.
                </p>
                <p>
                  Con años de experiencia en gestion empresarial y transiciones generacionales, 
                  entendemos los desafios unicos que enfrentan los propietarios de empresas familiares 
                  cuando llega el momento de planificar la sucesion.
                </p>
                <p>
                  Nuestro enfoque combina respeto por la historia y cultura empresarial con 
                  estrategias modernas de crecimiento y optimizacion operativa.
                </p>
              </div>
            </div>
            
            <div className="bg-emerald-50 rounded-2xl p-8">
              <div className="text-center">
                <div className="text-6xl mb-4">🐢</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Filosofia Turtle</h3>
                <p className="text-gray-600">
                  Como las tortugas que migran al oceano, ayudamos a las empresas en su travesia 
                  hacia nuevas oportunidades, con paciencia, determinacion y vision a largo plazo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Nuestro Enfoque</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tres pilares fundamentales guian cada una de nuestras adquisiciones y transformaciones empresariales.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Seleccion Rigurosa</h3>
              <p className="text-gray-600">
                Buscamos PYMES con fundamentales solidos, historias de exito comprobadas y 
                potencial de crecimiento a traves de mejoras operativas y comerciales.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="text-3xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Transiciones Respetuosas</h3>
              <p className="text-gray-600">
                Preservamos la cultura empresarial y respetamos el legado mientras introducimos 
                mejoras estrategicas para el crecimiento futuro.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="text-3xl mb-4">📈</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Crecimiento Sostenible</h3>
              <p className="text-gray-600">
                Implementamos estrategias de digitalizacion, optimizacion de procesos y 
                expansion comercial para generar valor a largo plazo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Track Record */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Nuestro Track Record</h2>
          </div>
          
          <div className="bg-emerald-50 rounded-2xl p-8 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Atelier Lab - Caso de Exito</h3>
                <div className="space-y-3 text-gray-600">
                  <p>
                    <strong>Sector:</strong> Laboratorio de Confeccion y Patronaje
                  </p>
                  <p>
                    <strong>Adquisicion:</strong> €950K de facturacion inicial
                  </p>
                  <p>
                    <strong>Transformacion:</strong> Digitalizacion completa y optimizacion de procesos
                  </p>
                  <p>
                    <strong>Resultado:</strong> 30% crecimiento interanual sostenido
                  </p>
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold text-emerald-600 mb-2">30%</div>
                <div className="text-gray-600">Crecimiento Anual</div>
                <div className="text-2xl font-bold text-emerald-600 mt-4 mb-2">€950K</div>
                <div className="text-gray-600">Facturacion Base</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Nuestros Valores</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Transparencia</h3>
                <p className="text-gray-600">
                  Comunicacion clara y honesta en cada etapa del proceso de adquisicion y gestion.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Respeto al Legado</h3>
                <p className="text-gray-600">
                  Valoramos y preservamos la historia y cultura de cada empresa que adquirimos.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Excelencia Operativa</h3>
                <p className="text-gray-600">
                  Buscamos continuamente mejoras en procesos, tecnologia y gestion para maximizar el potencial.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Vision a Largo Plazo</h3>
                <p className="text-gray-600">
                  Pensamos en el futuro sostenible de cada empresa, no en beneficios a corto plazo.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Impacto Positivo</h3>
                <p className="text-gray-600">
                  Generamos valor para todos los stakeholders: empleados, clientes, proveedores e inversores.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Innovacion Responsable</h3>
                <p className="text-gray-600">
                  Introducimos mejoras tecnologicas y procesos modernos respetando la esencia empresarial.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Conoce Mas Sobre Nuestro Proceso
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            Descubre como trabajamos y por que somos la opcion ideal para la transicion de tu empresa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/como-trabajamos" className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Como Trabajamos
            </Link>
            <Link href="/contacto" className="border-2 border-white text-white hover:bg-emerald-700 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Contactanos
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