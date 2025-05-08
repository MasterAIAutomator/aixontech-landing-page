import React, { useEffect, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#080808] via-[#080808] to-[#0a0a0a]"></div>
      
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-12 h-full">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="border-r border-[#333333]"></div>
          ))}
        </div>
        <div className="grid grid-rows-12 h-full w-full absolute top-0">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="border-b border-[#333333]"></div>
          ))}
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-1/4 left-1/4 w-40 h-40 rounded-full bg-[#3D3D3D]/10 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/4 w-60 h-60 rounded-full bg-[#3D3D3D]/10 blur-3xl animate-pulse delay-1000"></div>
      
      {/* Content container */}
      <div className="container mx-auto px-4 relative z-10">
        <div 
          className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center transition-all duration-1000 ease-out transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Left column */}
          <div className="text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-[#E9EAEC]">
              {t('hero.title')}
            </h1>
            <p className="text-xl text-[#BCBCBC] mb-10">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <a 
                href="#contact" 
                className="px-8 py-3 bg-gradient-to-r from-[#3D3D3D] to-[#3D3D3D] text-white font-medium rounded-full hover:shadow-lg hover:shadow-[#3D3D3D]/20 transition-all duration-300 transform hover:-translate-y-1"
              >
                {t('hero.cta')}
              </a>
              <a 
                href="#cases" 
                className="px-8 py-3 bg-transparent border border-[#333] text-[#E9EAEC] font-medium rounded-full hover:bg-[#111] transition-all duration-300"
              >
                {t('hero.secondary')}
              </a>
            </div>
          </div>

          {/* Right column */}
          <div className="bg-[#111]/50 backdrop-blur-sm rounded-lg p-8 border border-[#222]">
            <h2 className="text-2xl font-bold mb-6 text-[#E9EAEC]">{t('hero.rightTitle')}</h2>
            
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[#3D3D3D] font-bold">1</span>
                  <h3 className="text-[#E9EAEC] font-semibold">{t('hero.benefit1.title')}</h3>
                </div>
                <p className="text-[#BCBCBC] pl-7">{t('hero.benefit1.description')}</p>
              </div>
              
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[#3D3D3D] font-bold">2</span>
                  <h3 className="text-[#E9EAEC] font-semibold">{t('hero.benefit2.title')}</h3>
                </div>
                <p className="text-[#BCBCBC] pl-7">{t('hero.benefit2.description')}</p>
              </div>
              
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[#3D3D3D] font-bold">3</span>
                  <h3 className="text-[#E9EAEC] font-semibold">{t('hero.benefit3.title')}</h3>
                </div>
                <p className="text-[#BCBCBC] pl-7">{t('hero.benefit3.description')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#benefits" aria-label="Scroll to next section">
          <ChevronDown size={30} className="text-[#E9EAEC] opacity-60" />
        </a>
      </div>
    </section>
  );
};

export default Hero;