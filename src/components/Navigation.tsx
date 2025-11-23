import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Globe, Menu, X, Home, BookOpen, Truck, Scale } from 'lucide-react';

interface NavigationItem {
    key: string;
    label: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    path: string;
  }

const navigationItems: NavigationItem[] = [
    { key: 'home', label: 'Inicio', icon: Home, path: '/' },
    { key: 'valoracion', label: 'Valoración', icon: BookOpen, path: '/valoracion' },
    { key: 'incoterms', label: 'Incoterms', icon: Truck, path: '/incoterms' },
    { key: 'legislacion', label: 'Normativa', icon: Scale, path: '/legislacion' }
  ];

const Navigation: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

    return (
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
                <Link to={item.path} key={item.key}>
                    <button
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors text-blue-100 hover:text-white hover:bg-blue-700'
                    }`}
                    >
                    <IconComponent className="inline h-4 w-4 mr-1" />
                    {item.label}
                    </button>
                </Link>
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
                    <Link to={item.path} key={item.key}>
                        <button
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block px-3 py-2 text-base font-medium text-blue-100 hover:text-white hover:bg-blue-800 rounded-md w-full text-left"
                        >
                            <IconComponent className="inline h-4 w-4 mr-2" />
                            {item.label}
                        </button>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
    )
}

export default Navigation;