import React, { useEffect, useState } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ClientResults from './components/ClientResults';
import TrustedBy from './components/TrustedBy';
import Benefits from './components/Benefits';
import Services from './components/Services';
import CaseStudies from './components/CaseStudies';
import Contact from './components/Contact';
import Footer from './components/Footer';
import JsonLd from './components/JsonLd';
import { detectUserCountry } from './utils/geolocation';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [initialLanguage, setInitialLanguage] = useState('en');

  useEffect(() => {
    const detectLanguage = async () => {
      try {
        const country = await detectUserCountry();
        const balkanCountries = ['ME', 'RS', 'BA', 'XK', 'HR'];
        
        if (balkanCountries.includes(country)) {
          setInitialLanguage('sr');
        }
      } catch (error) {
        console.error('Error in language detection:', error);
        // Keep default 'en' language on error
      } finally {
        // Always set loading to false, regardless of success or failure
        setIsLoading(false);
      }
    };
    
    detectLanguage();
  }, []);

  if (isLoading) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-[#080808]">
        <div className="animate-pulse text-[#E9EAEC] text-2xl">
          <div className="h-8 w-8 border-t-2 border-b-2 border-[#E9EAEC] rounded-full animate-spin mx-auto"></div>
        </div>
      </div>
    );
  }

  return (
    <LanguageProvider initialLanguage={initialLanguage}>
      <div className="min-h-screen bg-[#080808] text-[#E9EAEC]">
        <JsonLd />
        <Navbar />
        <main>
          <Hero />
          <ClientResults />
          <TrustedBy />
          <Benefits />
          <Services />
          <CaseStudies />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default App;