import React, { useState, useEffect, useCallback } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useInView } from '../hooks/useInView';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const CaseStudies: React.FC = () => {
  const { t } = useLanguage();
  const [ref, inView] = useInView({ threshold: 0.1 });
  const [selectedCase, setSelectedCase] = useState('finance');
  const [isAutoRotating, setIsAutoRotating] = useState(true);

  const cases = [
    {
      id: 'finance',
      title: t('cases.finance.title'),
      industry: t('cases.finance.industry'),
      problem: t('cases.finance.problem'),
      solution: t('cases.finance.solution'),
      results: [
        t('cases.finance.results.time'),
        t('cases.finance.results.savings'),
        t('cases.finance.results.roi'),
      ],
      conclusion: t('cases.finance.conclusion'),
    },
    {
      id: 'marketing',
      title: t('cases.marketing.title'),
      industry: t('cases.marketing.industry'),
      problem: t('cases.marketing.problem'),
      solution: t('cases.marketing.solution'),
      results: [
        t('cases.marketing.results.time'),
        t('cases.marketing.results.savings'),
        t('cases.marketing.results.productivity'),
        t('cases.marketing.results.conversion'),
      ],
      conclusion: t('cases.marketing.conclusion'),
    },
    {
      id: 'ecommerce',
      title: t('cases.ecommerce.title'),
      industry: t('cases.ecommerce.industry'),
      problem: t('cases.ecommerce.problem'),
      solution: t('cases.ecommerce.solution'),
      results: [
        t('cases.ecommerce.results.response'),
        t('cases.ecommerce.results.satisfaction'),
        t('cases.ecommerce.results.savings'),
        t('cases.ecommerce.results.roi'),
      ],
      conclusion: t('cases.ecommerce.conclusion'),
    },
  ];

  const getNextCase = useCallback(() => {
    const currentIndex = cases.findIndex(c => c.id === selectedCase);
    const nextIndex = (currentIndex + 1) % cases.length;
    return cases[nextIndex].id;
  }, [cases, selectedCase]);

  const getPrevCase = useCallback(() => {
    const currentIndex = cases.findIndex(c => c.id === selectedCase);
    const prevIndex = (currentIndex - 1 + cases.length) % cases.length;
    return cases[prevIndex].id;
  }, [cases, selectedCase]);

  useEffect(() => {
    let rotationTimer: number;

    if (isAutoRotating && inView) {
      rotationTimer = window.setInterval(() => {
        setSelectedCase(getNextCase());
      }, 8000);
    }

    return () => {
      if (rotationTimer) {
        clearInterval(rotationTimer);
      }
    };
  }, [isAutoRotating, getNextCase, inView]);

  return (
    <section 
      id="cases" 
      ref={ref}
      className="py-20 bg-[#0a0a0a]"
      onMouseEnter={() => setIsAutoRotating(false)}
      onMouseLeave={() => setIsAutoRotating(true)}
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#E9EAEC]">
            {t('cases.title')}
          </h2>
          <p className="text-xl text-[#BCBCBC]">
            {t('cases.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="bg-[#111] p-6 rounded-lg border border-[#222]">
              <h3 className="text-xl font-bold mb-6 text-[#E9EAEC]">
                {t('cases.sidebar.title')}
              </h3>
              
              <div className="space-y-3">
                {cases.map((caseItem) => (
                  <button
                    key={caseItem.id}
                    onClick={() => {
                      setSelectedCase(caseItem.id);
                      setIsAutoRotating(false);
                    }}
                    className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
                      selectedCase === caseItem.id
                        ? 'bg-[#3D3D3D] text-white'
                        : 'bg-[#0a0a0a] text-[#BCBCBC] hover:bg-[#1a1a1a]'
                    }`}
                  >
                    <h4 className="font-semibold mb-1">{caseItem.title}</h4>
                    <p className="text-sm opacity-80">{caseItem.industry}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="lg:col-span-8 relative">
            <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 z-10">
              <button
                onClick={() => {
                  setSelectedCase(getPrevCase());
                  setIsAutoRotating(false);
                }}
                className="p-2 rounded-full bg-[#111]/80 hover:bg-[#222] text-[#E9EAEC] transition-colors"
                aria-label="Previous case study"
              >
                <ChevronLeft size={24} />
              </button>
            </div>
            
            <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
              <button
                onClick={() => {
                  setSelectedCase(getNextCase());
                  setIsAutoRotating(false);
                }}
                className="p-2 rounded-full bg-[#111]/80 hover:bg-[#222] text-[#E9EAEC] transition-colors"
                aria-label="Next case study"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            <div className="relative overflow-hidden">
              {cases.map((caseItem) => (
                <div
                  key={caseItem.id}
                  className={`bg-[#111] p-8 rounded-lg border border-[#222] transition-all duration-500 ${
                    selectedCase === caseItem.id 
                      ? 'opacity-100 translate-x-0' 
                      : 'opacity-0 translate-x-full absolute top-0 left-0 right-0'
                  }`}
                >
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold mb-2 text-[#E9EAEC]">{caseItem.title}</h3>
                    <p className="text-[#BCBCBC]">{caseItem.industry}</p>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold mb-2 text-[#E9EAEC]">Problem</h4>
                      <p className="text-[#BCBCBC]">{caseItem.problem}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold mb-2 text-[#E9EAEC]">Solution</h4>
                      <p className="text-[#BCBCBC]">{caseItem.solution}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold mb-2 text-[#E9EAEC]">Results</h4>
                      <ul className="space-y-2">
                        {caseItem.results.map((result, index) => (
                          <li key={index} className="flex items-center text-[#BCBCBC]">
                            <span className="mr-2 text-[#3D3D3D]">•</span>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="pt-4 border-t border-[#222]">
                      <p className="text-[#E9EAEC] italic">{caseItem.conclusion}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation dots */}
            <div className="flex justify-center mt-6 space-x-2">
              {cases.map((caseItem) => (
                <button
                  key={caseItem.id}
                  onClick={() => {
                    setSelectedCase(caseItem.id);
                    setIsAutoRotating(false);
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    selectedCase === caseItem.id
                      ? 'bg-[#3D3D3D] w-4'
                      : 'bg-[#333] hover:bg-[#444]'
                  }`}
                  aria-label={`Switch to ${caseItem.title}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;