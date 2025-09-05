import  { useState } from 'react';
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
  ArrowRight
} from 'lucide-react';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Datos de los métodos de valoración OMC
  const valuationMethods = [
    {
      id: 1,
      title: "Valor de Transacción",
      description: "Se basa en el precio realmente pagado o por pagar por las mercancías, ajustado según el Acuerdo de Valoración de la OMC.",
      icon: Calculator,
      color: "bg-blue-500",
      details: "Es el método principal y preferido. Se utiliza el precio efectivamente pagado o por pagar, incluyendo todos los pagos realizados como condición de venta."
    },
    {
      id: 2,
      title: "Valor de Transacción de Mercancías Idénticas",
      description: "Se utiliza cuando el valor de transacción no puede determinarse, buscando mercancías idénticas vendidas para exportación al mismo país.",
      icon: Scale,
      color: "bg-green-500",
      details: "Las mercancías deben ser idénticas en todos los aspectos: misma descripción comercial, calidad y prestigio comercial."
    },
    {
      id: 3,
      title: "Valor de Transacción de Mercancías Similares",
      description: "Similar al anterior, pero utilizando el valor de transacción de mercancías similares.",
      icon: Globe,
      color: "bg-purple-500",
      details: "Se aplica cuando no se pueden encontrar mercancías idénticas. Las mercancías deben tener características y composición semejantes."
    },
    {
      id: 4,
      title: "Método Deductivo",
      description: "Se calcula restando costos y gastos del país de importación del precio de venta en ese país.",
      icon: ArrowRight,
      color: "bg-orange-500",
      details: "Se parte del precio de venta al por mayor en el país de importación y se deducen los gastos posteriores a la importación."
    },
    {
      id: 5,
      title: "Método Reconstruido",
      description: "Se determina calculando los costos de producción más gastos generales y beneficio en el país de origen.",
      icon: Award,
      color: "bg-red-500",
      details: "Se basa en los costos de materiales y fabricación, más gastos generales y beneficios normales del país de exportación."
    },
    {
      id: 6,
      title: "Método del Último Recurso",
      description: "Se utiliza cuando los métodos anteriores no son aplicables, basándose en criterios razonables y coherentes.",
      icon: Info,
      color: "bg-gray-500",
      details: "Se aplica de manera flexible pero debe ser compatible con los principios y disposiciones generales del Acuerdo de Valoración."
    }
  ];

  // Datos de Incoterms
  const incoterms = [
    {
      id: 'EXW',
      name: 'Ex Works',
      group: 'E',
      description: 'El vendedor entrega cuando pone las mercancías a disposición del comprador en sus instalaciones.',
      responsibilities: {
        seller: ['Entregar mercancías en sus instalaciones', 'Proporcionar factura comercial'],
        buyer: ['Recoger mercancías', 'Asumir todos los costos y riesgos', 'Realizar trámites de exportación e importación']
      },
      transport: ['Cualquier modo'],
      color: 'bg-blue-100 border-blue-300'
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
      transport: ['Marítimo y fluvial'],
      color: 'bg-green-100 border-green-300'
    },
    {
      id: 'CFR',
      name: 'Cost and Freight',
      group: 'C',
      description: 'El vendedor entrega las mercancías a bordo del buque y paga el flete hasta el puerto de destino.',
      responsibilities: {
        seller: ['Entregar mercancías a bordo', 'Pagar flete marítimo', 'Trámites de exportación'],
        buyer: ['Seguro de las mercancías', 'Descarga en destino', 'Trámites de importación']
      },
      transport: ['Marítimo y fluvial'],
      color: 'bg-purple-100 border-purple-300'
    },
    {
      id: 'CIF',
      name: 'Cost, Insurance and Freight',
      group: 'C',
      description: 'El vendedor entrega a bordo del buque, paga flete y seguro hasta puerto de destino.',
      responsibilities: {
        seller: ['Entregar a bordo del buque', 'Pagar flete y seguro', 'Trámites de exportación'],
        buyer: ['Descarga en puerto destino', 'Transporte interno', 'Trámites de importación']
      },
      transport: ['Marítimo y fluvial'],
      color: 'bg-orange-100 border-orange-300'
    },
    {
      id: 'DDP',
      name: 'Delivered Duty Paid',
      group: 'D',
      description: 'El vendedor entrega las mercancías en el lugar acordado en el país del comprador, pagando todos los costos.',
      responsibilities: {
        seller: ['Entregar en destino final', 'Todos los costos y riesgos', 'Trámites de exportación e importación'],
        buyer: ['Recibir mercancías', 'Ayudar con trámites si es necesario']
      },
      transport: ['Cualquier modo'],
      color: 'bg-red-100 border-red-300'
    }
  ];

  const Navigation = () => (
    <nav className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Globe className="h-8 w-8 mr-3" />
            <h1 className="text-xl font-bold">Valoración Aduanera & Incoterms</h1>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => setCurrentPage('home')}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                currentPage === 'home' ? 'bg-blue-700 text-white' : 'text-blue-100 hover:text-white hover:bg-blue-700'
              }`}
            >
              <Home className="inline h-4 w-4 mr-1" />
              Inicio
            </button>
            <button
              onClick={() => setCurrentPage('omc')}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                currentPage === 'omc' ? 'bg-blue-700 text-white' : 'text-blue-100 hover:text-white hover:bg-blue-700'
              }`}
            >
              <BookOpen className="inline h-4 w-4 mr-1" />
              OMC
            </button>
            <button
              onClick={() => setCurrentPage('methods')}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                currentPage === 'methods' ? 'bg-blue-700 text-white' : 'text-blue-100 hover:text-white hover:bg-blue-700'
              }`}
            >
              <Calculator className="inline h-4 w-4 mr-1" />
              Métodos
            </button>
            <button
              onClick={() => setCurrentPage('incoterms')}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                currentPage === 'incoterms' ? 'bg-blue-700 text-white' : 'text-blue-100 hover:text-white hover:bg-blue-700'
              }`}
            >
              <Truck className="inline h-4 w-4 mr-1" />
              Incoterms
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-blue-100 hover:text-white focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-blue-700">
              <button
                onClick={() => { setCurrentPage('home'); setIsMobileMenuOpen(false); }}
                className="block px-3 py-2 text-base font-medium text-blue-100 hover:text-white hover:bg-blue-800 rounded-md w-full text-left"
              >
                <Home className="inline h-4 w-4 mr-2" />
                Inicio
              </button>
              <button
                onClick={() => { setCurrentPage('omc'); setIsMobileMenuOpen(false); }}
                className="block px-3 py-2 text-base font-medium text-blue-100 hover:text-white hover:bg-blue-800 rounded-md w-full text-left"
              >
                <BookOpen className="inline h-4 w-4 mr-2" />
                OMC
              </button>
              <button
                onClick={() => { setCurrentPage('methods'); setIsMobileMenuOpen(false); }}
                className="block px-3 py-2 text-base font-medium text-blue-100 hover:text-white hover:bg-blue-800 rounded-md w-full text-left"
              >
                <Calculator className="inline h-4 w-4 mr-2" />
                Métodos de Valoración
              </button>
              <button
                onClick={() => { setCurrentPage('incoterms'); setIsMobileMenuOpen(false); }}
                className="block px-3 py-2 text-base font-medium text-blue-100 hover:text-white hover:bg-blue-800 rounded-md w-full text-left"
              >
                <Truck className="inline h-4 w-4 mr-2" />
                Incoterms
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );

  const HomePage = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              Valoración Aduanera & Incoterms
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Aprende sobre los métodos de valoración aduanera de la OMC y los términos internacionales 
              de comercio (Incoterms) utilizados en el comercio exterior.
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

      {/* Features Section */}
      <div className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">¿Qué aprenderás?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Esta aplicación te guiará a través de los conceptos fundamentales del comercio internacional
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">OMC</h3>
            <p className="text-gray-600">
              Organización Mundial del Comercio y su papel en la valoración aduanera
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calculator className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">6 Métodos</h3>
            <p className="text-gray-600">
              Los seis métodos de valoración aduanera establecidos por la OMC
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Truck className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Incoterms</h3>
            <p className="text-gray-600">
              Términos internacionales que definen responsabilidades en el comercio
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-orange-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Práctica</h3>
            <p className="text-gray-600">
              Ejemplos prácticos y casos de estudio para reforzar el aprendizaje
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const OMCPage = () => (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <Globe className="h-16 w-16 text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Organización Mundial del Comercio (OMC)
          </h1>
          <p className="text-xl text-gray-600">
            World Trade Organization - La autoridad global en normas comerciales
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
              El objetivo es garantizar que los intercambios comerciales se realicen de la 
              forma más fluida, previsible y libre posible.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">¿Qué hace la OMC?</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <ChevronRight className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                Administra el sistema mundial de normas comerciales
              </li>
              <li className="flex items-start">
                <ChevronRight className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                Ayuda a países en desarrollo a mejorar su capacidad comercial
              </li>
              <li className="flex items-start">
                <ChevronRight className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                Constituye un foro para negociar acuerdos comerciales
              </li>
              <li className="flex items-start">
                <ChevronRight className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                Resuelve problemas comerciales entre miembros
              </li>
              <li className="flex items-start">
                <ChevronRight className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                Eleva niveles de vida y crea empleo a través del comercio
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Proceso de Adhesión a la OMC</h2>
          <p className="text-gray-700 mb-6">
            Todo Estado o territorio aduanero que disfrute de plena autonomía en la aplicación 
            de sus políticas comerciales puede adherirse a la OMC. El proceso incluye cuatro etapas:
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-bold text-blue-700 mb-2">1ª Etapa</h3>
              <p className="text-sm text-gray-600">
                "Háblenos de su régimen de comercio" - Presentación de memorándum sobre 
                políticas comerciales y económicas.
              </p>
            </div>
            
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-bold text-green-700 mb-2">2ª Etapa</h3>
              <p className="text-sm text-gray-600">
                "Examine con cada uno de nosotros lo que puede ofrecer" - Conversaciones 
                bilaterales sobre acceso a mercados.
              </p>
            </div>
            
            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-bold text-purple-700 mb-2">3ª Etapa</h3>
              <p className="text-sm text-gray-600">
                "Establezcamos las condiciones de adhesión" - Finalización de condiciones 
                en informe y protocolo de adhesión.
              </p>
            </div>
            
            <div className="border-l-4 border-orange-500 pl-4">
              <h3 className="font-bold text-orange-700 mb-2">Etapa Final</h3>
              <p className="text-sm text-gray-600">
                "La decisión" - Votación por mayoría de dos tercios de los miembros 
                y ratificación nacional.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl shadow-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Organización dirigida por los Miembros</h2>
          <p className="text-lg mb-4">
            La OMC es una organización "dirigida por los Miembros" donde las decisiones 
            se adoptan por consenso entre los gobiernos de todos los países Miembros.
          </p>
          <p className="text-blue-100">
            Las decisiones importantes son adoptadas por Ministros (reuniones bianuales) 
            o por Embajadores y delegados (reuniones regulares en Ginebra).
          </p>
        </div>
      </div>
    </div>
  );

  const MethodsPage = () => {
    const [selectedMethod, setSelectedMethod] = useState(null);

    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Calculator className="h-16 w-16 text-blue-600 mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Los 6 Métodos de Valoración Aduanera OMC
            </h1>
            <p className="text-xl text-gray-600">
              Métodos aplicados en orden sucesivo y excluyente para determinar el valor de transacción
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
                  <p className="text-gray-600">Método {selectedMethod.id} de la OMC</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Descripción General</h3>
                  <p className="text-gray-700 mb-4">{selectedMethod.description}</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Detalles de Aplicación</h3>
                  <p className="text-gray-700">{selectedMethod.details}</p>
                </div>
              </div>
              
              <button
                onClick={() => setSelectedMethod(null)}
                className="mt-6 bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors"
              >
                Cerrar detalles
              </button>
            </div>
          )}

          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl shadow-lg p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">Principios Fundamentales</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Orden Sucesivo</h3>
                <p className="text-blue-100">
                  Los métodos se aplican en orden estricto, solo se pasa al siguiente si el anterior no es aplicable.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Criterios Uniformes</h3>
                <p className="text-blue-100">
                  Garantizan un sistema equitativo y uniforme de valoración para todos los miembros de la OMC.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const IncotermsPage = () => {
    const [selectedIncoterm, setSelectedIncoterm] = useState(null);
    const [filterGroup, setFilterGroup] = useState('all');

    const filteredIncoterms = filterGroup === 'all' 
      ? incoterms 
      : incoterms.filter(inc => inc.group === filterGroup);

    const groups = [
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
              Términos Internacionales de Comercio que definen responsabilidades entre comprador y vendedor
            </p>
          </div>

          {/* Filter Buttons */}
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

          {/* Incoterms Grid */}
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
            {filteredIncoterms.map((incoterm) => (
              <div
                key={incoterm.id}
                className={`${incoterm.color} rounded-xl border-2 p-6 cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1 ${
                  selectedIncoterm?.id === incoterm.id ? 'ring-2 ring-blue-500' : ''
                }`}
                onClick={() => setSelectedIncoterm(incoterm)}
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{incoterm.id}</h3>
                    <p className="text-sm text-gray-600">Grupo {incoterm.group}</p>
                  </div>
                  <div className="text-2xl">
                    {incoterm.transport.includes('Marítimo') ? '🚢' : 
                     incoterm.transport.includes('Cualquier') ? '🌐' : '✈️'}
                  </div>
                </div>
                
                <h4 className="font-semibold text-gray-900 mb-2">{incoterm.name}</h4>
                <p className="text-sm text-gray-700 mb-4">{incoterm.description}</p>
                
                <div className="text-xs text-gray-600">
                  <strong>Transporte:</strong> {incoterm.transport.join(', ')}
                </div>
                
                <button className="mt-4 text-blue-600 text-sm font-medium hover:text-blue-700">
                  Ver responsabilidades →
                </button>
              </div>
            ))}
          </div>

          {/* Selected Incoterm Details */}
          {selectedIncoterm && (
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <div className={`${selectedIncoterm.color} rounded-lg p-4 mr-6`}>
                    <h2 className="text-2xl font-bold text-gray-900">{selectedIncoterm.id}</h2>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{selectedIncoterm.name}</h3>
                    <p className="text-gray-600">Grupo {selectedIncoterm.group}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedIncoterm(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <p className="text-gray-700 mb-8 text-lg">{selectedIncoterm.description}</p>

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

              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Modo de Transporte</h4>
                <p className="text-gray-700">{selectedIncoterm.transport.join(', ')}</p>
              </div>
            </div>
          )}

          {/* Information Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 font-bold">E</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Grupo E</h3>
              <p className="text-sm text-gray-600">
                Salida - Mínima obligación para el vendedor
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold">F</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Grupo F</h3>
              <p className="text-sm text-gray-600">
                Transporte principal no pagado por el vendedor
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 font-bold">C</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Grupo C</h3>
              <p className="text-sm text-gray-600">
                Transporte principal pagado por el vendedor
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-red-600 font-bold">D</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Grupo D</h3>
              <p className="text-sm text-gray-600">
                Llegada - Máxima obligación para el vendedor
              </p>
            </div>
          </div>

          {/* Key Information */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-700 rounded-xl shadow-lg p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">Puntos Clave sobre Incoterms</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Función Principal</h3>
                <p className="text-indigo-100">
                  Definen quién es responsable de los costos, riesgos y trámites en cada etapa del transporte internacional.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Aplicación Universal</h3>
                <p className="text-indigo-100">
                  Son reconocidos mundialmente y facilitan las transacciones comerciales internacionales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'omc':
        return <OMCPage />;
      case 'methods':
        return <MethodsPage />;
      case 'incoterms':
        return <IncotermsPage />;
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