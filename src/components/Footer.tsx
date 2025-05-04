import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Github, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] py-12 border-t border-[#222]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="https://i.imgur.com/FJxMfup.png" 
                alt="AixonTech Logo" 
                className="h-8 w-auto mr-2"
              />
              <h3 className="text-xl font-bold text-[#E9EAEC]">AixonTech</h3>
            </div>
            <p className="text-[#BCBCBC] max-w-xs">
              Transforming businesses through intelligent AI solutions since 2023.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#E9EAEC]">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-[#BCBCBC] hover:text-[#E9EAEC] transition-colors">AI Automation</a></li>
              <li><a href="#" className="text-[#BCBCBC] hover:text-[#E9EAEC] transition-colors">AI Agents</a></li>
              <li><a href="#" className="text-[#BCBCBC] hover:text-[#E9EAEC] transition-colors">Integrations</a></li>
              <li><a href="#" className="text-[#BCBCBC] hover:text-[#E9EAEC] transition-colors">Consulting</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#E9EAEC]">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-[#BCBCBC] hover:text-[#E9EAEC] transition-colors">About Us</a></li>
              <li><a href="#" className="text-[#BCBCBC] hover:text-[#E9EAEC] transition-colors">Careers</a></li>
              <li><a href="#" className="text-[#BCBCBC] hover:text-[#E9EAEC] transition-colors">Blog</a></li>
              <li><a href="#" className="text-[#BCBCBC] hover:text-[#E9EAEC] transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#E9EAEC]">Connect</h4>
            <div className="flex space-x-4 mb-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full flex items-center justify-center bg-[#111] hover:bg-[#222] text-[#BCBCBC] hover:text-[#E9EAEC] transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full flex items-center justify-center bg-[#111] hover:bg-[#222] text-[#BCBCBC] hover:text-[#E9EAEC] transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full flex items-center justify-center bg-[#111] hover:bg-[#222] text-[#BCBCBC] hover:text-[#E9EAEC] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
            <p className="text-[#BCBCBC]">
              {t('footer.email')}
            </p>
          </div>
        </div>
        
        <div className="pt-8 border-t border-[#222] flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#BCBCBC] mb-4 md:mb-0">
            {t('footer.rights')}
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-[#BCBCBC] hover:text-[#E9EAEC] transition-colors">
              {t('footer.privacy')}
            </a>
            <a href="#" className="text-[#BCBCBC] hover:text-[#E9EAEC] transition-colors">
              {t('footer.terms')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;