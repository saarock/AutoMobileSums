import { useState } from 'react';
import { Menu, X, Phone, MapPin, Clock } from 'lucide-react';
import { Button } from './ui/button';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const callNow = () => {
    window.location.href = 'tel:0481374525';
  };

  return (
    <>
      {/* Emergency Contact Bar */}
      <div className="bg-slate-900 text-white py-2">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Clock size={14} className="text-green-400" />
              <span>24/7 Emergency Service</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={14} className="text-green-400" />
              <span>All Canberra Suburbs</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-green-400">
            <Phone size={14} />
            <a href="tel:0481374525" className="hover:text-white transition-colors">
              0481 374 525
            </a>
          </div>
        </div>
      </div>
      =

      {/* Main Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="bg-red-500 text-white rounded-lg p-2 font-bold text-xl">
                <img src="./logo.jpeg" alt="logo" />
              </div>
              <div>
                <h1 className="text-slate-900 text-xl font-bold">Alfa Automotive</h1>
                <p className="text-gray-600 text-sm">Mobile Mechanics</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <a href="#services" className="text-gray-600 hover:text-slate-900 transition-colors font-medium">Services</a>
              <a href="#about" className="text-gray-600 hover:text-slate-900 transition-colors font-medium">Why Choose Us</a>
              <a href="#contact" className="text-gray-600 hover:text-slate-900 transition-colors font-medium">Contact</a>
              
              <div className="flex items-center gap-3 ml-4">
                <Button 
                  variant="outline" 
                  onClick={callNow}
                  className="border-red-500 text-red-500 hover:bg-red-50"
                >
                  <Phone size={16} className="mr-2" />
                  Call Now
                </Button>
                <Button 
                  onClick={scrollToContact}
                  className="bg-red-500 hover:bg-red-600 text-white shadow-lg hover:shadow-xl transition-all"
                >
                  Book Service
                </Button>
              </div>
            </nav>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center gap-3">
              <Button size="sm" onClick={callNow} className="bg-red-500 hover:bg-red-600 text-white">
                <Phone size={16} />
              </Button>
              <button
                onClick={toggleMenu}
                className="p-2 text-gray-600 hover:text-slate-900"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="lg:hidden mt-6 pb-6 border-t pt-6">
              <div className="flex flex-col gap-4">
                <a href="#services" onClick={() => setIsMenuOpen(false)} className="text-gray-600 hover:text-slate-900 transition-colors font-medium py-2">Services</a>
                <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-gray-600 hover:text-slate-900 transition-colors font-medium py-2">Why Choose Us</a>
                <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-gray-600 hover:text-slate-900 transition-colors font-medium py-2">Contact</a>
                
                <div className="flex flex-col gap-3 pt-4 border-t">
                  <Button 
                    variant="outline" 
                    onClick={callNow}
                    className="border-red-500 text-red-500 hover:bg-red-50"
                  >
                    <Phone size={16} className="mr-2" />
                    Call Now
                  </Button>
                  <Button 
                    onClick={scrollToContact}
                    className="bg-red-500 hover:bg-red-600 text-white"
                  >
                    Book Service
                  </Button>
                </div>
              </div>
            </nav>
          )}
        </div>
      </header>
    </>
  );
}