import React, { useState } from 'react';
import { Calculator, Scale, Globe, ArrowRight, Award, Info} from 'lucide-react';

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

  type ValoracionPageType = 'omc' | 'methods';

  const ValoracionPage: React.FC = () => {
    const [currentPage, setCurrentPage] = useState<ValoracionPageType>('omc');

    return (
        <div>
            <div className="flex justify-center gap-4 my-4">
                <button onClick={() => setCurrentPage('omc')} className={`px-4 py-2 rounded-lg font-medium transition-colors ${currentPage === 'omc' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}>OMC</button>
                <button onClick={() => setCurrentPage('methods')} className={`px-4 py-2 rounded-lg font-medium transition-colors ${currentPage === 'methods' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}>Métodos</button>
            </div>
            {currentPage === 'omc' ? <OMCPage /> : <MethodsPage />}
        </div>
    )
  }

  export default ValoracionPage;