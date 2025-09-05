import React, { useState } from 'react';
import { 
  ChevronRight, 
  Globe, 
  Calculator, 
  Scale, 
  Truck, 
  Ship, 
  Plane,
  Home,
  BookOpen,
  Award,
  Info,
  Menu,
  X,
  ArrowRight,
  AlertTriangle,
  CheckCircle,
  Clock
} from 'lucide-react';

// Interfaces TypeScript
interface ValuationMethod {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  color: string;
  details: string;
  legalBasis: string;
  example?: string;
}

interface IncotermResponsibilities {
  seller: string[];
  buyer: string[];
}

interface Incoterm {
  id: string;
  name: string;
  group: string;
  description: string;
  responsibilities: IncotermResponsibilities;
  transport: string[];
  color: string;
  riskTransfer: string;
  newIn2020?: boolean;
  changes2020?: string;
}

interface NavigationItem {
  key: string;
  label: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

interface GroupFilter {
  id: string;
  name: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

// Tipos para las páginas
type PageType = 'home' | 'omc' | 'methods' | 'incoterms' | 'regulations';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  // Datos actualizados de los métodos de valoración OMC
  const valuationMethods: ValuationMethod[] = [
    {
      id: 1,
      title: "Valor de Transacción",
      description: "Método principal basado en el precio realmente pagado o por pagar por las mercancías, ajustado según el Acuerdo de Valoración de la OMC.",
      icon: Calculator,
      color: "bg-blue-500",
      details: "Es el método preferido y más utilizado. Se utiliza el precio efectivamente pagado o por pagar, incluyendo todos los pagos realizados como condición de venta de las mercancías.",
      legalBasis: "Artículo 1 del Acuerdo de Valoración de la OMC",
      example: "Una empresa importa maquinaria por $50,000 FOB. Este será el valor base para calcular los tributos aduaneros."
    },
    {
      id: 2,
      title: "Valor de Transacción de Mercancías Idénticas",
      description: "Se utiliza cuando el valor de transacción no puede determinarse, buscando mercancías idénticas vendidas para exportación al mismo país.",
      icon: Scale,
      color: "bg-green-500",
      details: "Las mercancías deben ser idénticas en todos los aspectos: misma descripción comercial, calidad, prestigio comercial y país de origen.",
      legalBasis: "Artículo 2 del Acuerdo de Valoración de la OMC",
      example: "Si no se puede usar el método 1, se busca una importación similar de la misma máquina de la misma marca y modelo."
    },
    {
      id: 3,
      title: "Valor de Transacción de Mercancías Similares", 
      description: "Similar al anterior, pero utilizando el valor de transacción de mercancías similares cuando no se encuentran idécticas.",
      icon: Globe,
      color: "bg-purple-500",
      details: "Se aplica cuando no se pueden encontrar mercancías idénticas. Las mercancías deben tener características y composición semejantes y cumplir la misma función.",
      legalBasis: "Artículo 3 del Acuerdo de Valoración de la OMC",
      example: "Usar el valor de una máquina similar de diferente marca pero con las mismas características técnicas."
    },
    {
      id: 4,
      title: "Método Deductivo",
      description: "Se calcula restando costos y gastos del país de importación del precio de venta de las mercancías en ese país.",
      icon: ArrowRight,
      color: "bg-orange-500",
      details: "Se parte del precio de venta al por mayor en el país de importación y se deducen los gastos posteriores a la importación, beneficios y gastos generales.",
      legalBasis: "Artículo 5 del Acuerdo de Valoración de la OMC",
      example: "Si la máquina se vende a $70,000, se deducen gastos internos, utilidades y se llega al valor en aduana."
    },
    {
      id: 5,
      title: "Método Reconstruido (Valor Computado)",
      description: "Se determina calculando los costos de producción más gastos generales y beneficio normal en el país de origen.",
      icon: Award,
      color: "bg-red-500",
      details: "Se basa en los costos de materiales, fabricación, gastos generales, beneficios normales y gastos de exportación del país de origen.",
      legalBasis: "Artículo 6 del Acuerdo de Valoración de la OMC",
      example: "Sumar: costo de materiales ($30,000) + mano de obra ($10,000) + gastos generales ($5,000) + beneficio normal ($5,000)."
    },
    {
      id: 6,
      title: "Método de Última Instancia (Criterios Razonables)",
      description: "Se utiliza cuando los métodos anteriores no son aplicables, basándose en criterios razonables y coherentes con el Acuerdo.",
      icon: Info,
      color: "bg-gray-500",
      details: "Se aplica de manera flexible pero debe ser compatible con los principios y disposiciones generales del Acuerdo de Valoración. No puede basarse en valores arbitrarios o mínimos.",
      legalBasis: "Artículo 7 del Acuerdo de Valoración de la OMC",
      example: "Usar criterios razonables basados en información disponible, siempre respetando los principios del Acuerdo de la OMC."
    }
  ];

  // Datos actualizados de Incoterms 2020
  const incoterms: Incoterm[] = [
    {
      id: 'EXW',
      name: 'Ex Works',
      group: 'E',
      description: 'El vendedor pone las mercancías a disposición del comprador en sus instalaciones o lugar convenido.',
      responsibilities: {
        seller: ['Entregar mercancías en sus instalaciones', 'Proporcionar factura comercial', 'Embalaje adecuado'],
        buyer: ['Recoger mercancías', 'Todos los costos y riesgos desde origen', 'Trámites de exportación e importación', 'Transporte y seguro']
      },
      transport: ['Cualquier modo de transporte'],
      color: 'bg-blue-100 border-blue-300',
      riskTransfer: 'En las instalaciones del vendedor'
    },
    {
      id: 'FCA',
      name: 'Free Carrier',
      group: 'F',
      description: 'El vendedor entrega las mercancías al transportista designado por el comprador en el lugar convenido.',
      responsibilities: {
        seller: ['Entregar mercancías al transportista', 'Trámites de exportación', 'Costos hasta lugar convenido', 'Posibilidad de emitir BL (novedad 2020)'],
        buyer: ['Designar transportista', 'Flete principal', 'Seguro', 'Trámites de importación']
      },
      transport: ['Cualquier modo de transporte'],
      color: 'bg-green-100 border-green-300',
      riskTransfer: 'Al entregar al transportista designado',
      changes2020: 'Ahora permite al vendedor emitir el Bill of Lading con anotación a bordo cuando así lo requiera el comprador'
    },
    {
      id: 'FOB',
      name: 'Free On Board',
      group: 'F',
      description: 'El vendedor entrega las mercancías a bordo del buque designado por el comprador en el puerto de embarque.',
      responsibilities: {
        seller: ['Entregar mercancías a bordo del buque', 'Trámites de exportación', 'Costos hasta puerto de origen'],
        buyer: ['Designar buque y puerto', 'Flete marítimo', 'Seguro', 'Trámites de importación']
      },
      transport: ['Marítimo y fluvial únicamente'],
      color: 'bg-green-100 border-green-300',
      riskTransfer: 'Cuando las mercancías pasan la borda del buque'
    },
    {
      id: 'CIF',
      name: 'Cost, Insurance and Freight',
      group: 'C',
      description: 'El vendedor entrega a bordo del buque, paga flete y seguro hasta puerto de destino.',
      responsibilities: {
        seller: ['Entregar a bordo del buque', 'Pagar flete y seguro mínimo', 'Trámites de exportación'],
        buyer: ['Descarga en puerto destino', 'Transporte interno', 'Trámites de importación', 'Seguro adicional si desea']
      },
      transport: ['Marítimo y fluvial únicamente'],
      color: 'bg-orange-100 border-orange-300',
      riskTransfer: 'A bordo del buque en puerto de origen'
    },
    {
      id: 'DPU',
      name: 'Delivered at Place Unloaded',
      group: 'D',
      description: 'El vendedor entrega cuando las mercancías, una vez descargadas, se ponen a disposición del comprador en el lugar acordado.',
      responsibilities: {
        seller: ['Entregar y descargar en lugar acordado', 'Todos los costos hasta descarga', 'Trámites de exportación'],
        buyer: ['Trámites de importación', 'Tributos de importación']
      },
      transport: ['Cualquier modo de transporte'],
      color: 'bg-red-100 border-red-300',
      riskTransfer: 'Una vez descargada en el lugar acordado',
      newIn2020: true,
      changes2020: 'Reemplaza al anterior DAT. Permite pactar la entrega en cualquier lugar, no solo terminales'
    },
    {
      id: 'DDP',
      name: 'Delivered Duty Paid',
      group: 'D',
      description: 'El vendedor entrega las mercancías en el lugar acordado, pagando todos los costos incluyendo tributos de importación.',
      responsibilities: {
        seller: ['Entregar en destino final', 'Todos los costos y riesgos', 'Trámites de exportación e importación', 'Tributos de importación'],
        buyer: ['Recibir mercancías', 'Proporcionar asistencia para trámites si es necesario']
      },
      transport: ['Cualquier modo de transporte'],
      color: 'bg-red-100 border-red-300',
      riskTransfer: 'En el lugar de destino final acordado'
    }
  ];

  const navigationItems: NavigationItem[] = [
    { key: 'home', label: 'Inicio', icon: Home },
    { key: 'omc', label: 'OMC', icon: BookOpen },
    { key: 'methods', label: 'Métodos', icon: Calculator },
    { key: 'incoterms', label: 'Incoterms', icon: Truck },
    { key: 'regulations', label: 'Normativa', icon: Scale }
  ];

  const Navigation: React.FC = () => (
    <nav className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Globe className="h-8 w-8 mr-3" />
            <h1 className="text-xl font-bold">Valoración Aduanera & Incoterms 2020</h1>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <button
                  key={item.key}
                  onClick={() => setCurrentPage(item.key as PageType)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    currentPage === item.key ? 'bg-blue-700 text-white' : 'text-blue-100 hover:text-white hover:bg-blue-700'
                  }`}
                >
                  <IconComponent className="inline h-4 w-4 mr-1" />
                  {item.label}
                </button>
              );
            })}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-blue-100 hover:text-white focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-blue-700">
              {navigationItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <button
                    key={item.key}
                    onClick={() => { setCurrentPage(item.key as PageType); setIsMobileMenuOpen(false); }}
                    className="block px-3 py-2 text-base font-medium text-blue-100 hover:text-white hover:bg-blue-800 rounded-md w-full text-left"
                  >
                    <IconComponent className="inline h-4 w-4 mr-2" />
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );

  const HomePage: React.FC = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              Valoración Aduanera & Incoterms 2020
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Aprende sobre los 6 métodos de valoración aduanera de la OMC y los términos internacionales 
              de comercio actualizados a la versión 2020, con información verificada y casos prácticos.
            </p>
            <div className="space-x-4">
              <button
                onClick={() => setCurrentPage('omc')}
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Conocer la OMC
              </button>
              <button
                onClick={() => setCurrentPage('methods')}
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Ver Métodos
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">¿Qué aprenderás?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Esta aplicación te guiará a través de los conceptos fundamentales del comercio internacional actualizado a 2024
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">OMC 2024</h3>
            <p className="text-gray-600">
              Organización Mundial del Comercio y su papel actual en la valoración aduanera
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calculator className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">6 Métodos</h3>
            <p className="text-gray-600">
              Los seis métodos de valoración aduanera actualizados según el Acuerdo de la OMC
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Truck className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Incoterms 2020</h3>
            <p className="text-gray-600">
              Términos actualizados incluyendo DPU y cambios en FCA y CIP
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Scale className="h-8 w-8 text-orange-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Normativa</h3>
            <p className="text-gray-600">
              Marco legal aduanero actualizado y procedimientos vigentes
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-500 to-teal-600 rounded-xl shadow-lg p-8 text-white">
          <div className="flex items-center mb-4">
            <CheckCircle className="h-8 w-8 mr-3" />
            <h2 className="text-2xl font-bold">Actualizado a Incoterms 2020</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">DAT → DPU</h3>
              <p className="text-green-100">
                Desaparece la regla DAT y pasa a denominarse DPU (Delivered at Place Unloaded)
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">FCA Mejorado</h3>
              <p className="text-green-100">
                FCA incluye ahora la posibilidad de emitir el Bill of Lading
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Mayor Seguridad</h3>
              <p className="text-green-100">
                Se han reforzado aspectos de asignación de costes y seguridad
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const OMCPage: React.FC = () => (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <Globe className="h-16 w-16 text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Organización Mundial del Comercio (OMC)
          </h1>
          <p className="text-xl text-gray-600">
            World Trade Organization - La autoridad global en normas comerciales y valoración aduanera
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">¿Qué es la OMC?</h2>
            <p className="text-gray-700 mb-4">
              La Organización Mundial del Comercio (OMC) es la única organización internacional 
              que se ocupa de las normas que rigen el comercio entre los países.
            </p>
            <p className="text-gray-700 mb-4">
              Los pilares sobre los que descansa son los Acuerdos de la OMC, que han sido 
              negociados y firmados por la mayoría de los países que participan en el comercio 
              mundial y ratificados por sus respectivos Parlamentos.
            </p>
            <p className="text-gray-700">
              Su función principal es asegurar que el comercio global fluya de manera fluida, predecible y libre como sea posible.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Acuerdo de Valoración OMC</h2>
            <p className="text-gray-700 mb-4">
              El Acuerdo de Valoración de la OMC establece 6 métodos para determinar el valor en aduana de las mercancías importadas.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-900 mb-2">Métodos en orden sucesivo:</h3>
              <ol className="text-sm text-blue-800 space-y-1">
                <li>1. Valor de transacción</li>
                <li>2. Valor de transacción de mercancías idénticas</li>
                <li>3. Valor de transacción de mercancías similares</li>
                <li>4. Método deductivo</li>
                <li>5. Método del valor reconstruido</li>
                <li>6. Método de última instancia</li>
              </ol>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl shadow-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">164 Miembros de la OMC</h2>
          <p className="text-lg mb-4">
            La OMC cuenta actualmente con 164 miembros que representan más del 98% del comercio mundial.
          </p>
          <p className="text-blue-100">
            Las decisiones se adoptan por consenso, garantizando que todos los miembros 
            tengan voz en las normas que rigen el comercio internacional.
          </p>
        </div>
      </div>
    </div>
  );

  const MethodsPage: React.FC = () => {
    const [selectedMethod, setSelectedMethod] = useState<ValuationMethod | null>(null);

    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Calculator className="h-16 w-16 text-blue-600 mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Los 6 Métodos de Valoración Aduanera OMC
            </h1>
            <p className="text-xl text-gray-600">
              Métodos aplicados en orden sucesivo y excluyente según el Acuerdo de Valoración de la OMC
            </p>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
            {valuationMethods.map((method) => {
              const IconComponent = method.icon;
              return (
                <div
                  key={method.id}
                  className={`bg-white rounded-xl shadow-lg p-6 cursor-pointer transition-all hover:shadow-xl hover:-translate-y-1 ${
                    selectedMethod?.id === method.id ? 'ring-2 ring-blue-500' : ''
                  }`}
                  onClick={() => setSelectedMethod(method)}
                >
                  <div className="flex items-center mb-4">
                    <div className={`${method.color} w-12 h-12 rounded-lg flex items-center justify-center mr-4`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-500">Método {method.id}</span>
                      <h3 className="text-lg font-bold text-gray-900">{method.title}</h3>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{method.description}</p>
                  <div className="text-xs text-gray-500 mb-3">
                    <strong>Base legal:</strong> {method.legalBasis}
                  </div>
                  <button className="text-blue-600 text-sm font-medium hover:text-blue-700">
                    Ver detalles →
                  </button>
                </div>
              );
            })}
          </div>

          {selectedMethod && (
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <div className="flex items-center mb-6">
                <div className={`${selectedMethod.color} w-16 h-16 rounded-lg flex items-center justify-center mr-6`}>
                  <selectedMethod.icon className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{selectedMethod.title}</h2>
                  <p className="text-gray-600">Método {selectedMethod.id} - {selectedMethod.legalBasis}</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Descripción y Aplicación</h3>
                  <p className="text-gray-700 mb-4">{selectedMethod.details}</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Ejemplo Práctico</h3>
                  {selectedMethod.example && (
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="text-blue-800 text-sm">{selectedMethod.example}</p>
                    </div>
                  )}
                </div>
              </div>
              
              <button
                onClick={() => setSelectedMethod(null)}
                className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors"
              >
                Cerrar detalles
              </button>
            </div>
          )}
        </div>
      </div>
    );
  };

  const IncotermsPage: React.FC = () => {
    const [selectedIncoterm, setSelectedIncoterm] = useState<Incoterm | null>(null);
    const [filterGroup, setFilterGroup] = useState<string>('all');

    const filteredIncoterms = filterGroup === 'all' 
      ? incoterms 
      : incoterms.filter(inc => inc.group === filterGroup);

    const groups: GroupFilter[] = [
      { id: 'all', name: 'Todos', icon: Globe },
      { id: 'E', name: 'Grupo E', icon: Home },
      { id: 'F', name: 'Grupo F', icon: Ship },
      { id: 'C', name: 'Grupo C', icon: Plane },
      { id: 'D', name: 'Grupo D', icon: Truck }
    ];

    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Truck className="h-16 w-16 text-blue-600 mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Incoterms 2020
            </h1>
            <p className="text-xl text-gray-600">
              Términos Internacionales de Comercio actualizados con cambios significativos y nuevas reglas
            </p>
          </div>

          <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl shadow-lg p-6 mb-8 text-white">
            <div className="flex items-center mb-4">
              <Clock className="h-6 w-6 mr-3" />
              <h2 className="text-xl font-bold">Principales Cambios en Incoterms 2020</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="bg-green-600 p-3 rounded">
                <h3 className="font-semibold mb-1">DAT → DPU</h3>
                <p className="text-green-100">Delivered at Place Unloaded permite entrega en cualquier lugar</p>
              </div>
              <div className="bg-green-600 p-3 rounded">
                <h3 className="font-semibold mb-1">FCA Mejorado</h3>
                <p className="text-green-100">Posibilidad de emitir Bill of Lading a bordo cuando se requiera</p>
              </div>
              <div className="bg-green-600 p-3 rounded">
                <h3 className="font-semibold mb-1">CIP Actualizado</h3>
                <p className="text-green-100">Mayor cobertura de seguro requerida (Cláusulas A)</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {groups.map(group => {
              const IconComponent = group.icon;
              return (
                <button
                  key={group.id}
                  onClick={() => setFilterGroup(group.id)}
                  className={`flex items-center px-4 py-2 rounded-lg font-medium transition-colors ${
                    filterGroup === group.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <IconComponent className="h-4 w-4 mr-2" />
                  {group.name}
                </button>
              );
            })}
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
            {filteredIncoterms.map((incoterm) => (
              <div
                key={incoterm.id}
                className={`${incoterm.color} rounded-xl border-2 p-6 cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1 relative ${
                  selectedIncoterm?.id === incoterm.id ? 'ring-2 ring-blue-500' : ''
                }`}
                onClick={() => setSelectedIncoterm(incoterm)}
              >
                {incoterm.newIn2020 && (
                  <div className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                    Nuevo 2020
                  </div>
                )}
                
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{incoterm.id}</h3>
                    <p className="text-sm text-gray-600">Grupo {incoterm.group}</p>
                  </div>
                </div>
                
                <h4 className="font-semibold text-gray-900 mb-2">{incoterm.name}</h4>
                <p className="text-sm text-gray-700 mb-4">{incoterm.description}</p>
                
                <div className="text-xs text-gray-600 mb-2">
                  <strong>Transporte:</strong> {incoterm.transport.join(', ')}
                </div>
                
                <div className="text-xs text-gray-600 mb-4">
                  <strong>Transferencia de riesgo:</strong> {incoterm.riskTransfer}
                </div>

                {incoterm.changes2020 && (
                  <div className="bg-yellow-100 border-l-2 border-yellow-400 p-2 mb-4">
                    <p className="text-xs text-yellow-800">
                      <strong>Cambio 2020:</strong> {incoterm.changes2020}
                    </p>
                  </div>
                )}
                
                <button className="text-blue-600 text-sm font-medium hover:text-blue-700">
                  Ver responsabilidades →
                </button>
              </div>
            ))}
          </div>

          {selectedIncoterm && (
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <div className={`${selectedIncoterm.color} rounded-lg p-4 mr-6 relative`}>
                    <h2 className="text-2xl font-bold text-gray-900">{selectedIncoterm.id}</h2>
                    {selectedIncoterm.newIn2020 && (
                      <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-1 py-1 rounded">
                        Nuevo
                      </div>
                    )}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{selectedIncoterm.name}</h3>
                    <p className="text-gray-600">Grupo {selectedIncoterm.group} - Incoterms 2020</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedIncoterm(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <p className="text-gray-700 mb-6 text-lg">{selectedIncoterm.description}</p>

              {selectedIncoterm.changes2020 && (
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                  <div className="flex">
                    <AlertTriangle className="h-5 w-5 text-yellow-400 mr-2 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-yellow-800 mb-2">Actualización 2020</h4>
                      <p className="text-yellow-700">{selectedIncoterm.changes2020}</p>
                    </div>
                  </div>
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-8 mb-6">
                <div className="bg-red-50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-red-700 mb-4 flex items-center">
                    <span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span>
                    Responsabilidades del Vendedor
                  </h4>
                  <ul className="space-y-2">
                    {selectedIncoterm.responsibilities.seller.map((resp, index) => (
                      <li key={index} className="flex items-start text-sm text-gray-700">
                        <ChevronRight className="h-4 w-4 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-blue-50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-blue-700 mb-4 flex items-center">
                    <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                    Responsabilidades del Comprador
                  </h4>
                  <ul className="space-y-2">
                    {selectedIncoterm.responsibilities.buyer.map((resp, index) => (
                      <li key={index} className="flex items-start text-sm text-gray-700">
                        <ChevronRight className="h-4 w-4 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Modo de Transporte</h4>
                  <p className="text-gray-700">{selectedIncoterm.transport.join(', ')}</p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Transferencia de Riesgo</h4>
                  <p className="text-gray-700">{selectedIncoterm.riskTransfer}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  const RegulationsPage: React.FC = () => (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <Scale className="h-16 w-16 text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Marco Normativo Aduanero
          </h1>
          <p className="text-xl text-gray-600">
            Normativa legal vigente para la operatividad aduanera en el comercio exterior
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Principales Normas</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Normativa Nacional (Perú)</h3>
              <ul className="space-y-3">
                <li className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-bold text-blue-700">Ley General de Aduanas</h4>
                  <p className="text-sm text-gray-600">Decreto Legislativo N° 1053</p>
                </li>
                <li className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-bold text-green-700">Reglamento de la LGA</h4>
                  <p className="text-sm text-gray-600">Decreto Supremo N° 010-2009-EF</p>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Normativa Internacional</h3>
              <ul className="space-y-3">
                <li className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-bold text-orange-700">Acuerdo de Valoración OMC</h4>
                  <p className="text-sm text-gray-600">Artículos I-VII</p>
                </li>
                <li className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-bold text-purple-700">Incoterms ICC</h4>
                  <p className="text-sm text-gray-600">Cámara de Comercio Internacional</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderCurrentPage = (): React.ReactNode => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'omc':
        return <OMCPage />;
      case 'methods':
        return <MethodsPage />;
      case 'incoterms':
        return <IncotermsPage />;
      case 'regulations':
        return <RegulationsPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      {renderCurrentPage()}
    </div>
  );
};

export default App;