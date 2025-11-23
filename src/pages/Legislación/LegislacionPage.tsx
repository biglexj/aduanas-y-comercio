import React from 'react';
import { Scale } from 'lucide-react';

const LegislacionPage: React.FC = () => (
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

  export default LegislacionPage;