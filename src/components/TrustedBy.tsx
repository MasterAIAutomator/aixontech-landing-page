import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useInView } from '../hooks/useInView';

const TrustedBy: React.FC = () => {
  const { t } = useLanguage();
  const [ref, inView] = useInView({ threshold: 0.1 });

  const logos = [
    'https://i.imgur.com/8QBOXnt.jpeg',
    'https://i.imgur.com/w2AXBWo.jpeg',
    'https://i.imgur.com/xq2mGDs.jpeg',
    'https://i.imgur.com/VSOHrwk.jpeg',
    'https://i.imgur.com/l2EXLQI.jpeg',
    'https://i.imgur.com/fo4NjXp.jpeg',
    'https://i.imgur.com/tR2gcCn.jpeg',
    'https://i.imgur.com/fsbhMXB.jpeg',
    'https://i.imgur.com/zhdzO7F.jpeg',
    'https://i.imgur.com/JKXdQaj.jpeg',
    'https://i.imgur.com/cTBjX6A.jpeg',
    'https://i.imgur.com/9ihG2WG.jpeg',
    'https://i.imgur.com/bszhXFE.jpeg',
    'https://i.imgur.com/vboV4qw.jpeg',
    'https://i.imgur.com/kKG0fil.jpeg',
    'https://i.imgur.com/eNy5GLH.jpeg',
    'https://i.imgur.com/Dwvihpt.jpeg',
    'https://i.imgur.com/jOqQpqe.jpeg',
    'https://i.imgur.com/iBogJjW.jpeg',
    'https://i.imgur.com/lhwWvtl.jpeg',
    'https://i.imgur.com/TyMx36Q.jpeg',
    'https://i.imgur.com/DYvXpca.jpeg',
  ];

  return (
    <section className="py-16 bg-[#080808]">
      <div className="container mx-auto px-4 max-w-[1200px]">
        <div 
          ref={ref}
          className={`text-center mb-12 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[#E9EAEC]">
            {t('trustedby.title')}
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-12">
          {logos.map((logo, index) => (
            <div
              key={index}
              className={`flex items-center justify-center transition-all duration-700 ${
                inView 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ 
                transitionDelay: `${index * 50}ms`,
              }}
            >
              <img
                src={logo}
                alt={`${t('trustedby.client')} ${index + 1}`}
                className="h-[40px] md:h-[60px] w-auto object-contain filter grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300 transform hover:scale-110"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;