import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useInView } from '../hooks/useInView';
import { Clock, PiggyBank, TrendingUp, Users, Network, LineChart } from 'lucide-react';

const Benefits: React.FC = () => {
  const { t } = useLanguage();
  const [ref, inView] = useInView({ threshold: 0.2 });

  const benefits = [
    {
      icon: <Clock className="w-8 h-8 text-[#3D3D3D]" />,
      title: t('benefits.metric1.title'),
      description: t('benefits.metric1.description'),
    },
    {
      icon: <PiggyBank className="w-8 h-8 text-[#3D3D3D]" />,
      title: t('benefits.metric2.title'),
      description: t('benefits.metric2.description'),
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-[#3D3D3D]" />,
      title: t('benefits.metric3.title'),
      description: t('benefits.metric3.description'),
    },
    {
      icon: <Users className="w-8 h-8 text-[#3D3D3D]" />,
      title: t('benefits.metric4.title'),
      description: t('benefits.metric4.description'),
    },
    {
      icon: <Network className="w-8 h-8 text-[#3D3D3D]" />,
      title: t('benefits.metric5.title'),
      description: t('benefits.metric5.description'),
    },
    {
      icon: <LineChart className="w-8 h-8 text-[#3D3D3D]" />,
      title: t('benefits.metric6.title'),
      description: t('benefits.metric6.description'),
    },
  ];

  return (
    <section 
      id="benefits" 
      ref={ref}
      className="py-20 bg-[#0a0a0a]"
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#E9EAEC]">
            {t('benefits.title')}
          </h2>
          <p className="text-xl text-[#BCBCBC]">
            {t('benefits.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className={`bg-[#111] p-8 rounded-lg border border-[#222] transition-all duration-700 ease-out transform ${
                inView 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="mb-6">{benefit.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-[#E9EAEC]">
                {benefit.title}
              </h3>
              <p className="text-[#BCBCBC]">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;