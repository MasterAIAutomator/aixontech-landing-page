import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useInView } from '../hooks/useInView';
import MultiStepForm from './MultiStepForm';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section 
      id="contact" 
      ref={ref}
      className="py-20 bg-[#0a0a0a]"
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#E9EAEC]">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-[#BCBCBC]">
            {t('contact.subtitle')}
          </p>
        </div>
        
        <div 
          className={`max-w-2xl mx-auto bg-[#111] p-8 md:p-10 rounded-lg border border-[#222] transition-all duration-700 ease-out transform ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <MultiStepForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;