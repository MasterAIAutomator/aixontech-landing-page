import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useInView } from '../hooks/useInView';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const ClientResults: React.FC = () => {
  const { t } = useLanguage();
  const [ref, inView] = useInView({ threshold: 0.1 });
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(true);

  const categories = [
    { id: 'all', label: t('results.categories.all') },
    { id: 'saas', label: t('results.categories.saas') },
    { id: 'coaching', label: t('results.categories.coaching') },
    { id: 'finance', label: t('results.categories.finance') },
  ];

  const testimonials = [
    {
      id: 1,
      category: 'saas',
      name: 'Will Nitze',
      title: 'CEO @ IQBAR',
      image: 'https://i.imgur.com/sxeY2Sw.jpeg',
      quote: t('results.testimonials.willnitze'),
      result: null
    },
    {
      id: 2,
      category: 'saas',
      name: 'Alex Brodsky',
      title: 'CEO @ Iteright',
      image: 'https://i.imgur.com/A7pSDyD.jpeg',
      quote: t('results.testimonials.alexbrodsky'),
      result: null
    },
    {
      id: 3,
      category: 'saas',
      name: 'Sudhanshu Heda',
      title: 'CEO @ Sidecar',
      image: 'https://i.imgur.com/PWhlqbH.jpeg',
      quote: t('results.testimonials.sudhanshuheda'),
      result: null
    },
    {
      id: 4,
      category: 'saas',
      name: 'Dennis Goedheid',
      title: 'CEO @ Casiola Homes',
      image: 'https://i.imgur.com/6LZcxrm.jpeg',
      quote: t('results.testimonials.dennisgoedheid'),
      result: null
    },
    {
      id: 5,
      category: 'saas',
      name: 'Dogan Ergun',
      title: 'CEO @ D4D Exhibits',
      image: 'https://i.imgur.com/BMVPOhW.jpeg',
      quote: t('results.testimonials.doganergun'),
      result: null
    },
    {
      id: 6,
      category: 'saas',
      name: 'Lars Letonoff',
      title: 'CEO @ Guardare Inc.',
      image: 'https://i.imgur.com/3Sir0QC.jpeg',
      quote: t('results.testimonials.larsletonoff'),
      result: null
    },
    {
      id: 7,
      category: 'coaching',
      name: 'Gwen Gottlieb',
      title: 'CEO @ Gwen Lives Well',
      image: 'https://i.imgur.com/jz9r2PO.jpeg',
      quote: t('results.testimonials.gwengottlieb'),
      result: null
    },
    {
      id: 8,
      category: 'coaching',
      name: 'Danielle Wolfe',
      title: 'Executive Coach @ Strong Training & Coaching',
      image: 'https://i.imgur.com/xKvEtiD.jpeg',
      quote: t('results.testimonials.daniellewolfe'),
      result: t('results.testimonials.daniellewolfe.result')
    },
    {
      id: 9,
      category: 'coaching',
      name: 'Rashelle Isip',
      title: 'Productivity Coach @ The Order Expert®',
      image: 'https://i.imgur.com/IXUSWdL.jpeg',
      quote: t('results.testimonials.rashelleisip'),
      result: t('results.testimonials.rashelleisip.result')
    },
    {
      id: 10,
      category: 'coaching',
      name: 'Bisila Bokoko',
      title: 'CEO @ BB Embassy International',
      image: 'https://i.imgur.com/eB9GpEL.jpeg',
      quote: t('results.testimonials.bisilabokoko'),
      result: t('results.testimonials.bisilabokoko.result')
    },
    {
      id: 11,
      category: 'saas',
      name: 'Cathy White',
      title: 'CEO @ CEW Communications',
      image: 'https://i.imgur.com/QNyIz6U.jpeg',
      quote: t('results.testimonials.cathywhite'),
      result: t('results.testimonials.cathywhite.result')
    },
    {
      id: 12,
      category: 'finance',
      name: 'Ram Ahluwalia',
      title: 'CEO @ Lumida Wealth',
      image: 'https://i.imgur.com/agfmk7V.jpeg',
      quote: t('results.testimonials.ramahluwalia'),
      result: t('results.testimonials.ramahluwalia.result')
    },
    {
      id: 13,
      category: 'finance',
      name: 'Zach Walsh',
      title: 'CEO @ HIFI',
      image: 'https://i.imgur.com/zAtMV5f.jpeg',
      quote: t('results.testimonials.zachwalsh'),
      result: t('results.testimonials.zachwalsh.result')
    },
    {
      id: 14,
      category: 'finance',
      name: 'Alejandro Litovsky',
      title: 'CEO @ Earth Security',
      image: 'https://i.imgur.com/ylRHh5r.jpeg',
      quote: t('results.testimonials.alejandrolitovsky'),
      result: t('results.testimonials.alejandrolitovsky.result')
    },
    {
      id: 15,
      category: 'finance',
      name: 'Conor Svensson',
      title: 'CEO @ Web3 Labs',
      image: 'https://i.imgur.com/vCGgbtL.jpeg',
      quote: t('results.testimonials.conorsvensson'),
      result: t('results.testimonials.conorsvensson.result')
    },
    {
      id: 16,
      category: 'finance',
      name: 'Mustafa Siddiqui',
      title: 'CEO @ SQ Capital',
      image: 'https://i.imgur.com/SDbdNwp.jpeg',
      quote: t('results.testimonials.mustafasiddiqui'),
      result: t('results.testimonials.mustafasiddiqui.result')
    },
  ];

  const filteredTestimonials = activeCategory === 'all' 
    ? testimonials 
    : testimonials.filter(t => t.category === activeCategory);

  const itemsPerPage = 3;
  const totalPages = Math.ceil(filteredTestimonials.length / itemsPerPage);
  const currentTestimonials = filteredTestimonials.slice(
    currentPage * itemsPerPage,
    (currentPage * itemsPerPage) + itemsPerPage
  );

  useEffect(() => {
    let rotationTimer: number;

    if (isAutoRotating && inView) {
      rotationTimer = window.setInterval(() => {
        setCurrentPage(prev => (prev + 1) % totalPages);
      }, 5000);
    }

    return () => {
      if (rotationTimer) {
        clearInterval(rotationTimer);
      }
    };
  }, [isAutoRotating, totalPages, inView]);

  const handlePrevPage = () => {
    setCurrentPage(prev => (prev - 1 + totalPages) % totalPages);
    setIsAutoRotating(false);
  };

  const handleNextPage = () => {
    setCurrentPage(prev => (prev + 1) % totalPages);
    setIsAutoRotating(false);
  };

  return (
    <section 
      id="results" 
      ref={ref}
      className="py-20 bg-[#080808] relative overflow-hidden"
      onMouseEnter={() => setIsAutoRotating(false)}
      onMouseLeave={() => setIsAutoRotating(true)}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-[#3D3D3D] blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-[#3D3D3D] blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#E9EAEC]">
            {t('results.title')}
          </h2>
          <p className="text-xl text-[#BCBCBC]">
            {t('results.subtitle')}
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => {
                setActiveCategory(category.id);
                setCurrentPage(0);
              }}
              className={`px-6 py-2 rounded-full transition-all ${
                activeCategory === category.id
                  ? 'bg-[#3D3D3D] text-white'
                  : 'bg-[#111] text-[#BCBCBC] hover:bg-[#222]'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Testimonials grid */}
        <div className="relative">
          {/* Navigation buttons */}
          <button
            onClick={handlePrevPage}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-[#111]/80 hover:bg-[#222] text-[#E9EAEC] transition-colors"
            aria-label="Previous testimonials"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            onClick={handleNextPage}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-[#111]/80 hover:bg-[#222] text-[#E9EAEC] transition-colors"
            aria-label="Next testimonials"
          >
            <ChevronRight size={24} />
          </button>

          {/* Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
            {currentTestimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`bg-gradient-to-br from-[#111] to-[#0a0a0a] p-8 rounded-lg border border-[#222] transition-all duration-700 ease-out transform ${
                  inView 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="text-[#E9EAEC] font-semibold">{testimonial.name}</h4>
                    <p className="text-[#BCBCBC] text-sm">{testimonial.title}</p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="flex mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="text-[#FF9808] fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-[#E9EAEC] italic">"{testimonial.quote}"</p>
                </div>

                {testimonial.result && (
                  <div className="mt-4 p-4 bg-[#3D3D3D]/10 rounded-lg border border-[#3D3D3D]/20">
                    <p className="text-[#E9EAEC] font-medium">
                      {testimonial.result}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Pagination dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setCurrentPage(i);
                  setIsAutoRotating(false);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentPage === i
                    ? 'bg-[#3D3D3D] w-4'
                    : 'bg-[#222] hover:bg-[#333]'
                }`}
                aria-label={`Go to page ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientResults;