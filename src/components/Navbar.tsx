import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Menu, X, Globe } from 'lucide-react';

const Navbar: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'sr' : 'en');
  };

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
            {language === 'sr' ? 'Početna' : 'Home'}
          </a>
          <a href="#services" className="text-[#E9EAEC] hover:text-white transition-colors">
            {language === 'sr' ? 'Usluge' : 'Services'}
          </a>
          <a href="#cases" className="text-[#E9EAEC] hover:text-white transition-colors">
            {language === 'sr' ? 'Studije Slučaja' : 'Case Studies'}
          </a>
          <a href="#results" className="text-[#E9EAEC] hover:text-white transition-colors">
            {language === 'sr' ? 'Rezultati Klijenata' : 'Client Results'}
          </a>
          <a href="#contact" className="text-[#E9EAEC] hover:text-white transition-colors">
            {language === 'sr' ? 'Kontakt' : 'Contact'}
          </a>
          
          <button 
            onClick={toggleLanguage}
            className="flex items-center space-x-1 bg-[#3D3D3D] hover:bg-[#4D4D4D] text-[#E9EAEC] px-4 py-2 rounded-full transition-colors"
            aria-label={`Switch to ${language === 'en' ? 'Serbian' : 'English'}`}
          >
            <Globe size={16} />
            <span>{language === 'en' ? 'SR' : 'EN'}</span>
          </button>
        </nav>

        {/* Mobile Navigation Icon */}
        <div className="flex items-center space-x-4 md:hidden">
          <button 
            onClick={toggleLanguage}
            className="flex items-center space-x-1 bg-[#3D3D3D] hover:bg-[#4D4D4D] text-[#E9EAEC] px-3 py-2 rounded-full transition-colors"
            aria-label={`Switch to ${language === 'en' ? 'Serbian' : 'English'}`}
          >
            <Globe size={14} />
            <span className="text-sm">{language === 'en' ? 'SR' : 'EN'}</span>
          </button>
          
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
              {language === 'sr' ? 'Početna' : 'Home'}
            </a>
            <a 
              href="#services" 
              className="text-[#E9EAEC] hover:text-white text-xl transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {language === 'sr' ? 'Usluge' : 'Services'}
            </a>
            <a 
              href="#cases" 
              className="text-[#E9EAEC] hover:text-white text-xl transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {language === 'sr' ? 'Studije Slučaja' : 'Case Studies'}
            </a>
            <a 
              href="#results" 
              className="text-[#E9EAEC] hover:text-white text-xl transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {language === 'sr' ? 'Rezultati Klijenata' : 'Client Results'}
            </a>
            <a 
              href="#contact" 
              className="text-[#E9EAEC] hover:text-white text-xl transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {language === 'sr' ? 'Kontakt' : 'Contact'}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;