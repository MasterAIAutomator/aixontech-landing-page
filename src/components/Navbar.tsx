import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { Menu, X, Globe } from 'lucide-react';

const Navbar: React.FC = () => {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isSerbian = location.pathname.startsWith('/sr');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#080808]/90 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <img 
            src="https://i.imgur.com/FJxMfup.png" 
            alt="AixonTech Logo" 
            className="h-8 w-auto mr-2"
          />
          <span className="text-[#E9EAEC] text-xl font-bold">AixonTech</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-[#E9EAEC] hover:text-white transition-colors">
            {isSerbian ? 'Početna' : 'Home'}
          </a>
          <a href="#services" className="text-[#E9EAEC] hover:text-white transition-colors">
            {isSerbian ? 'Usluge' : 'Services'}
          </a>
          <a href="#cases" className="text-[#E9EAEC] hover:text-white transition-colors">
            {isSerbian ? 'Studije Slučaja' : 'Case Studies'}
          </a>
          <a href="#results" className="text-[#E9EAEC] hover:text-white transition-colors">
            {isSerbian ? 'Rezultati Klijenata' : 'Client Results'}
          </a>
          <a href="#contact" className="text-[#E9EAEC] hover:text-white transition-colors">
            {isSerbian ? 'Kontakt' : 'Contact'}
          </a>
          
          <Link 
            to={isSerbian ? '/' : '/sr'}
            className="flex items-center space-x-1 bg-[#3D3D3D] hover:bg-[#4D4D4D] text-[#E9EAEC] px-4 py-2 rounded-full transition-colors"
            aria-label={`Switch to ${isSerbian ? 'English' : 'Serbian'}`}
          >
            <Globe size={16} />
            <span>{isSerbian ? 'EN' : 'SR'}</span>
          </Link>
        </nav>

        {/* Mobile Navigation Icon */}
        <div className="flex items-center space-x-4 md:hidden">
          <Link 
            to={isSerbian ? '/' : '/sr'}
            className="flex items-center space-x-1 bg-[#3D3D3D] hover:bg-[#4D4D4D] text-[#E9EAEC] px-3 py-2 rounded-full transition-colors"
            aria-label={`Switch to ${isSerbian ? 'English' : 'Serbian'}`}
          >
            <Globe size={14} />
            <span className="text-sm">{isSerbian ? 'EN' : 'SR'}</span>
          </Link>
          
          <button 
            onClick={toggleMobileMenu}
            className="text-[#E9EAEC] hover:text-white"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#080808] pt-20">
          <nav className="container mx-auto px-4 py-6 flex flex-col space-y-6">
            <a 
              href="#home" 
              className="text-[#E9EAEC] hover:text-white text-xl transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {isSerbian ? 'Početna' : 'Home'}
            </a>
            <a 
              href="#services" 
              className="text-[#E9EAEC] hover:text-white text-xl transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {isSerbian ? 'Usluge' : 'Services'}
            </a>
            <a 
              href="#cases" 
              className="text-[#E9EAEC] hover:text-white text-xl transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {isSerbian ? 'Studije Slučaja' : 'Case Studies'}
            </a>
            <a 
              href="#results" 
              className="text-[#E9EAEC] hover:text-white text-xl transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {isSerbian ? 'Rezultati Klijenata' : 'Client Results'}
            </a>
            <a 
              href="#contact" 
              className="text-[#E9EAEC] hover:text-white text-xl transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {isSerbian ? 'Kontakt' : 'Contact'}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;