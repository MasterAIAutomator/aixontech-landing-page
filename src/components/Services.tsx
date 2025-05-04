import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useInView } from '../hooks/useInView';
import { Bot, Workflow, LineChart, Brain, Layout, Cloud } from 'lucide-react';

const Services: React.FC = () => {
  const { t } = useLanguage();
  const [ref, inView] = useInView({ threshold: 0.1 });

  const services = [
    {
      icon: <Bot className="w-10 h-10 text-[#3D3D3D]" />,
      title: t('services.item1.title'),
      description: t('services.item1.description'),
      features: [
        t('services.item1.feature1'),
        t('services.item1.feature2'),
        t('services.item1.feature3'),
        t('services.item1.feature4'),
      ],
    },
    {
      icon: <Workflow className="w-10 h-10 text-[#3D3D3D]" />,
      title: t('services.item2.title'),
      description: t('services.item2.description'),
      features: [
        t('services.item2.feature1'),
        t('services.item2.feature2'),
        t('services.item2.feature3'),
        t('services.item2.feature4'),
      ],
    },
    {
      icon: <LineChart className="w-10 h-10 text-[#3D3D3D]" />,
      title: t('services.item3.title'),
      description: t('services.item3.description'),
      features: [
        t('services.item3.feature1'),
        t('services.item3.feature2'),
        t('services.item3.feature3'),
        t('services.item3.feature4'),
      ],
    },
    {
      icon: <Brain className="w-10 h-10 text-[#3D3D3D]" />,
      title: t('services.item4.title'),
      description: t('services.item4.description'),
      features: [
        t('services.item4.feature1'),
        t('services.item4.feature2'),
        t('services.item4.feature3'),
        t('services.item4.feature4'),
      ],
    },
    {
      icon: <Layout className="w-10 h-10 text-[#3D3D3D]" />,
      title: t('services.item5.title'),
      description: t('services.item5.description'),
      features: [
        t('services.item5.feature1'),
        t('services.item5.feature2'),
        t('services.item5.feature3'),
        t('services.item5.feature4'),
      ],
    },
    {
      icon: <Cloud className="w-10 h-10 text-[#3D3D3D]" />,
      title: t('services.item6.title'),
      description: t('services.item6.description'),
      features: [
        t('services.item6.feature1'),
        t('services.item6.feature2'),
        t('services.item6.feature3'),
        t('services.item6.feature4'),
      ],
    },
  ];

  return (
    <section 
      id="services" 
      ref={ref}
      className="py-20 bg-[#080808]"
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#E9EAEC]">
            {t('services.title')}
          </h2>
          <p className="text-xl text-[#BCBCBC]">
            {t('services.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`relative bg-gradient-to-b from-[#111] to-[#0a0a0a] p-8 rounded-lg border border-[#222] transition-all duration-700 ease-out transform hover:-translate-y-2 hover:shadow-lg hover:shadow-[#3D3D3D]/10 ${
                inView 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative z-10">
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-[#E9EAEC]">
                  {service.title}
                </h3>
                <p className="text-[#BCBCBC] mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-[#BCBCBC]">
                      <span className="mr-2 text-[#3D3D3D]">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a 
                  href="#contact" 
                  className="inline-block mt-6 text-[#3D3D3D] hover:text-[#4D4D4D] transition-colors"
                >
                  {t('services.cta')} →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;