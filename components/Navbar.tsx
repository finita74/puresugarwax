import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { LOCATION } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo Area */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="flex items-center">
              <img 
                src="/puresugarwax.png" 
                alt="Pure Sugar Wax" 
                className={`h-12 md:h-14 w-auto object-contain transition-all duration-300 ${
                  !scrolled ? 'brightness-0 invert drop-shadow-md' : ''
                }`}
              />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium tracking-wide uppercase hover:text-teal-400 transition-colors ${
                  scrolled ? 'text-stone-600' : 'text-stone-100 hover:text-white drop-shadow-sm'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a 
              href={LOCATION.bookingUrl}
              target="_blank"
              rel="noreferrer"
              className="bg-teal-500 text-white px-6 py-2.5 rounded-full text-sm font-semibold uppercase tracking-wider hover:bg-teal-600 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Book Now
            </a>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden flex items-center">
             <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${scrolled ? 'text-stone-800' : 'text-white'}`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white shadow-lg transition-all duration-300 ease-in-out transform origin-top ${isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'}`}>
        <div className="px-4 pt-2 pb-8 space-y-4 flex flex-col items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block px-3 py-2 text-stone-600 hover:text-teal-500 font-medium text-lg uppercase tracking-wide"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href={LOCATION.bookingUrl}
            target="_blank"
            rel="noreferrer"
            className="w-full max-w-xs text-center bg-teal-500 text-white px-6 py-3 rounded-full font-bold uppercase"
          >
            Book Online
          </a>
          <a href={`tel:${LOCATION.phone}`} className="flex items-center text-stone-500 mt-4">
             <Phone size={16} className="mr-2" /> {LOCATION.phone}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;