import React from 'react';
import { Helmet } from 'react-helmet-async';
import { LanguageProvider } from '../../contexts/LanguageContext';
import JsonLd from '../../components/JsonLd';
import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero';
import ClientResults from '../../components/ClientResults';
import TrustedBy from '../../components/TrustedBy';
import Benefits from '../../components/Benefits';
import Services from '../../components/Services';
import CaseStudies from '../../components/CaseStudies';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';

const EnLayout: React.FC = () => {
  return (
    <LanguageProvider initialLanguage="en">
      <Helmet>
        <html lang="en" />
        <title>AixonTech - AI Automation Solutions for Business Growth</title>
        <meta name="description" content="Transform your business with AI automation. Save $50,000+ yearly, reduce manual work by 80%, and scale operations without stress. Trusted by industry leaders." />
        <link rel="canonical" href="https://aixontech.com/" />
        <link rel="alternate" hrefLang="sr" href="https://aixontech.com/sr" />
        <link rel="alternate" hrefLang="en" href="https://aixontech.com/" />
        <link rel="alternate" hrefLang="x-default" href="https://aixontech.com/" />
      </Helmet>
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

export default EnLayout;