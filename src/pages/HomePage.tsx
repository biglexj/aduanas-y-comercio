import React from 'react';
import '../styles/StylesLogo.css';
import { Link } from 'react-router-dom';


import { 
  Globe, 
  Calculator, 
  Scale, 
  Truck, 
  CheckCircle,
} from 'lucide-react';

const HomePage: React.FC = () => {

  return (
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
              <Link to="/valoracion">
                <button
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  Conocer la OMC
                </button>
              </Link>
              <Link to="/valoracion">
                <button
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  Ver Métodos
                </button>
              </Link>
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
}

export default HomePage;