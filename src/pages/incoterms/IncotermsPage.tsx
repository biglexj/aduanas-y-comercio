import React, { useState } from 'react';
import { ChevronRight, Globe, Home, Ship, Plane, Truck, X, AlertTriangle, Clock } from 'lucide-react';

// Interfaces TypeScript
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

interface GroupFilter {
    id: string;
    name: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

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

  export default IncotermsPage;