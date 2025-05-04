import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { 
  ChevronRight, 
  ChevronLeft,
  Briefcase,
  ShoppingCart,
  Code,
  Store,
  Plus,
  ArrowRight
} from 'lucide-react';

interface FormData {
  business_type: string;
  business_type_other?: string;
  business_description: string;
  project_type: string;
  help_details: string;
  monthly_revenue: string;
  website_url: string;
  first_name: string;
  last_name: string;
  email: string;
  company: string;
}

const MAX_CHARS = 250;

const MultiStepForm: React.FC = () => {
  const { t } = useLanguage();
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 9;
  const [formData, setFormData] = useState<FormData>({
    business_type: '',
    business_description: '',
    project_type: '',
    help_details: '',
    monthly_revenue: '',
    website_url: '',
    first_name: '',
    last_name: '',
    email: '',
    company: '',
  });
  const [showThankYou, setShowThankYou] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    if ((name === 'business_description' || name === 'help_details') && value.length > MAX_CHARS) {
      return;
    }

    setFormData(prev => ({ ...prev, [name]: value }));
    setShowThankYou(false);
    setSubmitError(null);
    
    if (validationErrors[name]) {
      setValidationErrors(prev => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const validateStep = () => {
    const errors: Record<string, string> = {};

    switch (currentStep) {
      case 2:
        if (!formData.business_type) {
          errors.business_type = t('form.error.required');
        }
        if (formData.business_type === 'Other' && !formData.business_type_other) {
          errors.business_type_other = t('form.error.required');
        }
        break;
      case 3:
        if (!formData.business_description) {
          errors.business_description = t('form.error.required');
        }
        break;
      case 4:
        if (!formData.project_type) {
          errors.project_type = t('form.error.required');
        }
        break;
      case 5:
        if (!formData.help_details) {
          errors.help_details = t('form.error.required');
        }
        break;
      case 6:
        if (!formData.monthly_revenue) {
          errors.monthly_revenue = t('form.error.required');
        }
        break;
      case 7:
        if (!formData.website_url) {
          errors.website_url = t('form.error.required');
        }
        break;
      case 8:
        if (!formData.first_name) errors.first_name = t('form.error.required');
        if (!formData.last_name) errors.last_name = t('form.error.required');
        if (!formData.email) {
          errors.email = t('form.error.required');
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
          errors.email = t('form.error.email');
        }
        if (!formData.company) errors.company = t('form.error.required');
        break;
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const submitFormData = async () => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const payload = {
        business_type: formData.business_type === 'Other' ? formData.business_type_other : formData.business_type,
        business_description: formData.business_description,
        project_type: formData.project_type,
        help_details: formData.help_details,
        monthly_revenue: formData.monthly_revenue,
        website_url: formData.website_url,
        first_name: formData.first_name,
        last_name: formData.last_name,
        email: formData.email,
        company: formData.company,
      };

      const response = await fetch('https://hook.eu2.make.com/hrrixuvqx4sh49wh43ohmemb8ngxvfai', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`Failed to submit form: ${response.status}`);
      }

      setFormData({
        business_type: '',
        business_description: '',
        project_type: '',
        help_details: '',
        monthly_revenue: '',
        website_url: '',
        first_name: '',
        last_name: '',
        email: '',
        company: '',
      });
      setShowThankYou(true);
      return true;
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError(error instanceof Error ? error.message : 'Failed to submit form. Please try again.');
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNext = async () => {
    if (!validateStep()) return;

    if (currentStep === 8) {
      const success = await submitFormData();
      if (!success) return;
    }
    setCurrentStep(prev => prev + 1);
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const businessTypes = [
    { value: 'Service', label: t('multistepForm.step1.option.service'), icon: <Briefcase className="w-6 h-6" /> },
    { value: 'E-Commerce', label: t('multistepForm.step1.option.ecommerce'), icon: <ShoppingCart className="w-6 h-6" /> },
    { value: 'Software', label: t('multistepForm.step1.option.software'), icon: <Code className="w-6 h-6" /> },
    { value: 'Brick-and-mortar', label: t('multistepForm.step1.option.brickAndMortar'), icon: <Store className="w-6 h-6" /> },
    { value: 'Other', label: t('multistepForm.step1.option.other'), icon: <Plus className="w-6 h-6" /> }
  ];

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">{t('multistepForm.intro.title')}</h2>
            <p className="mb-8">{t('multistepForm.intro.text')}</p>
            <button
              onClick={handleNext}
              className="w-full py-3 px-6 bg-[#3D3D3D] text-white rounded-lg hover:bg-[#4D4D4D] transition-colors flex items-center justify-center"
            >
              {t('multistepForm.intro.startButton')}
              <ChevronRight className="ml-2" size={20} />
            </button>
            <p className="mt-4 text-sm text-[#BCBCBC]">{t('multistepForm.intro.disclaimer')}</p>
          </div>
        );

      case 2:
        return (
          <div>
            <h2 className="text-xl font-bold mb-4">{t('multistepForm.step1.question')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {businessTypes.map((type) => (
                <div key={type.value}>
                  <input
                    type="radio"
                    id={type.value}
                    name="business_type"
                    value={type.value}
                    checked={formData.business_type === type.value}
                    onChange={handleInputChange}
                    className="sr-only"
                  />
                  <label
                    htmlFor={type.value}
                    className={`block p-4 rounded-lg border transition-all cursor-pointer ${
                      formData.business_type === type.value
                        ? 'border-[#3D3D3D] bg-[#3D3D3D]/10'
                        : 'border-[#222] hover:border-[#333] bg-[#111]'
                    }`}
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className={`mb-3 ${
                        formData.business_type === type.value ? 'text-[#3D3D3D]' : 'text-[#666]'
                      }`}>
                        {type.icon}
                      </div>
                      <span className="font-medium">{type.label}</span>
                    </div>
                  </label>
                </div>
              ))}
            </div>
            {formData.business_type === 'Other' && (
              <div className="mb-6">
                <input
                  type="text"
                  name="business_type_other"
                  value={formData.business_type_other || ''}
                  onChange={handleInputChange}
                  placeholder={t('multistepForm.step1.option.other')}
                  className={`w-full p-3 bg-[#111] border rounded-lg transition-colors ${
                    validationErrors.business_type_other ? 'border-red-500' : 'border-[#333]'
                  }`}
                />
                {validationErrors.business_type_other && (
                  <p className="mt-1 text-sm text-red-500">{validationErrors.business_type_other}</p>
                )}
              </div>
            )}
            {validationErrors.business_type && (
              <p className="mt-1 text-sm text-red-500">{validationErrors.business_type}</p>
            )}
            <div className="flex justify-between mt-6">
              <button
                onClick={handleBack}
                className="px-6 py-3 bg-transparent border border-[#333] text-[#E9EAEC] rounded-lg hover:bg-[#111] transition-colors flex items-center"
              >
                <ChevronLeft size={20} className="mr-2" />
                Back
              </button>
              <button
                onClick={handleNext}
                className="px-6 py-3 bg-[#3D3D3D] text-white rounded-lg hover:bg-[#4D4D4D] transition-colors flex items-center"
              >
                Next
                <ChevronRight size={20} className="ml-2" />
              </button>
            </div>
          </div>
        );

      case 3:
        return (
          <div>
            <h2 className="text-xl font-bold mb-2">{t('multistepForm.step2.question')}</h2>
            <p className="text-[#BCBCBC] mb-4">{t('multistepForm.step2.subtext')}</p>
            <div className="relative">
              <textarea
                name="business_description"
                value={formData.business_description}
                onChange={handleInputChange}
                rows={4}
                maxLength={MAX_CHARS}
                className={`w-full p-3 bg-[#111] border rounded-lg resize-none transition-colors ${
                  validationErrors.business_description ? 'border-red-500' : 'border-[#333]'
                }`}
              />
              <div className="absolute bottom-3 right-3 text-sm text-[#666]">
                {formData.business_description.length}/{MAX_CHARS}
              </div>
            </div>
            {validationErrors.business_description && (
              <p className="mt-1 text-sm text-red-500">{validationErrors.business_description}</p>
            )}
            <div className="flex justify-between mt-6">
              <button
                onClick={handleBack}
                className="px-6 py-3 bg-transparent border border-[#333] text-[#E9EAEC] rounded-lg hover:bg-[#111] transition-colors flex items-center"
              >
                <ChevronLeft size={20} className="mr-2" />
                Back
              </button>
              <button
                onClick={handleNext}
                className="px-6 py-3 bg-[#3D3D3D] text-white rounded-lg hover:bg-[#4D4D4D] transition-colors flex items-center"
              >
                Next
                <ChevronRight size={20} className="ml-2" />
              </button>
            </div>
          </div>
        );

      case 4:
        return (
          <div>
            <h2 className="text-xl font-bold mb-2">{t('multistepForm.step3.question')}</h2>
            <p className="text-[#BCBCBC] mb-4">{t('multistepForm.step3.subtext')}</p>
            <div className="flex gap-4 mb-6">
              {[
                { value: 'One-time project', label: t('multistepForm.step3.option.oneTime') },
                { value: 'Ongoing monthly service', label: t('multistepForm.step3.option.ongoing') }
              ].map((type) => (
                <div key={type.value} className="flex-1">
                  <input
                    type="radio"
                    id={type.value}
                    name="project_type"
                    value={type.value}
                    checked={formData.project_type === type.value}
                    onChange={handleInputChange}
                    className="sr-only"
                  />
                  <label
                    htmlFor={type.value}
                    className={`block text-center p-3 rounded-full cursor-pointer transition-all ${
                      formData.project_type === type.value
                        ? 'bg-[#3D3D3D] text-white'
                        : 'bg-[#111] text-[#BCBCBC] hover:bg-[#222]'
                    }`}
                  >
                    {type.label}
                  </label>
                </div>
              ))}
            </div>
            {validationErrors.project_type && (
              <p className="mt-1 text-sm text-red-500">{validationErrors.project_type}</p>
            )}
            <div className="flex justify-between mt-6">
              <button
                onClick={handleBack}
                className="px-6 py-3 bg-transparent border border-[#333] text-[#E9EAEC] rounded-lg hover:bg-[#111] transition-colors flex items-center"
              >
                <ChevronLeft size={20} className="mr-2" />
                Back
              </button>
              <button
                onClick={handleNext}
                className="px-6 py-3 bg-[#3D3D3D] text-white rounded-lg hover:bg-[#4D4D4D] transition-colors flex items-center"
              >
                Next
                <ChevronRight size={20} className="ml-2" />
              </button>
            </div>
          </div>
        );

      case 5:
        return (
          <div>
            <h2 className="text-xl font-bold mb-2">{t('multistepForm.step4.question')}</h2>
            <p className="text-[#BCBCBC] mb-4">{t('multistepForm.step4.subtext')}</p>
            <div className="relative">
              <textarea
                name="help_details"
                value={formData.help_details}
                onChange={handleInputChange}
                rows={5}
                maxLength={MAX_CHARS}
                className={`w-full p-3 bg-[#111] border rounded-lg resize-none transition-colors ${
                  validationErrors.help_details ? 'border-red-500' : 'border-[#333]'
                }`}
              />
              <div className="absolute bottom-3 right-3 text-sm text-[#666]">
                {formData.help_details.length}/{MAX_CHARS}
              </div>
            </div>
            {validationErrors.help_details && (
              <p className="mt-1 text-sm text-red-500">{validationErrors.help_details}</p>
            )}
            <div className="flex justify-between mt-6">
              <button
                onClick={handleBack}
                className="px-6 py-3 bg-transparent border border-[#333] text-[#E9EAEC] rounded-lg hover:bg-[#111] transition-colors flex items-center"
              >
                <ChevronLeft size={20} className="mr-2" />
                Back
              </button>
              <button
                onClick={handleNext}
                className="px-6 py-3 bg-[#3D3D3D] text-white rounded-lg hover:bg-[#4D4D4D] transition-colors flex items-center"
              >
                Next
                <ChevronRight size={20} className="ml-2" />
              </button>
            </div>
          </div>
        );

      case 6:
        return (
          <div>
            <h2 className="text-xl font-bold mb-4">{t('multistepForm.step5.question')}</h2>
            <select
              name="monthly_revenue"
              value={formData.monthly_revenue}
              onChange={handleInputChange}
              className={`w-full p-3 bg-[#111] border rounded-lg appearance-none transition-colors ${
                validationErrors.monthly_revenue ? 'border-red-500' : 'border-[#333]'
              }`}
            >
              <option value="">-- {t('multistepForm.step5.question')} --</option>
              <option value="<$10k">{t('multistepForm.step5.option.a')}</option>
              <option value="$10k – $25k">{t('multistepForm.step5.option.b')}</option>
              <option value="$25k – $50k">{t('multistepForm.step5.option.c')}</option>
              <option value="$50k – $100k">{t('multistepForm.step5.option.d')}</option>
              <option value="$100k – $200k">{t('multistepForm.step5.option.e')}</option>
              <option value="$200k – $500k">{t('multistepForm.step5.option.f')}</option>
              <option value=">$500k">{t('multistepForm.step5.option.g')}</option>
            </select>
            {validationErrors.monthly_revenue && (
              <p className="mt-1 text-sm text-red-500">{validationErrors.monthly_revenue}</p>
            )}
            <div className="flex justify-between mt-6">
              <button
                onClick={handleBack}
                className="px-6 py-3 bg-transparent border border-[#333] text-[#E9EAEC] rounded-lg hover:bg-[#111] transition-colors flex items-center"
              >
                <ChevronLeft size={20} className="mr-2" />
                Back
              </button>
              <button
                onClick={handleNext}
                className="px-6 py-3 bg-[#3D3D3D] text-white rounded-lg hover:bg-[#4D4D4D] transition-colors flex items-center"
              >
                Next
                <ChevronRight size={20} className="ml-2" />
              </button>
            </div>
          </div>
        );

      case 7:
        return (
          <div>
            <h2 className="text-xl font-bold mb-4">{t('multistepForm.step6.question')}</h2>
            <input
              type="text"
              name="website_url"
              value={formData.website_url}
              onChange={handleInputChange}
              className={`w-full p-3 bg-[#111] border rounded-lg transition-colors ${
                validationErrors.website_url ? 'border-red-500' : 'border-[#333]'
              }`}
            />
            {validationErrors.website_url && (
              <p className="mt-1 text-sm text-red-500">{validationErrors.website_url}</p>
            )}
            <div className="flex justify-between mt-6">
              <button
                onClick={handleBack}
                className="px-6 py-3 bg-transparent border border-[#333] text-[#E9EAEC] rounded-lg hover:bg-[#111] transition-colors flex items-center"
              >
                <ChevronLeft size={20} className="mr-2" />
                Back
              </button>
              <button
                onClick={handleNext}
                className="px-6 py-3 bg-[#3D3D3D] text-white rounded-lg hover:bg-[#4D4D4D] transition-colors flex items-center"
              >
                Next
                <ChevronRight size={20} className="ml-2" />
              </button>
            </div>
          </div>
        );

      case 8:
        return (
          <div>
            <h2 className="text-xl font-bold mb-4">{t('multistepForm.step7.question')}</h2>
            {submitError && (
              <div className="mb-4 p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-500">
                {submitError}
              </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  id="first_name"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleInputChange}
                  placeholder={t('multistepForm.step7.field.firstName')}
                  className={`w-full p-3 bg-[#111] border rounded-lg transition-colors ${
                    validationErrors.first_name ? 'border-red-500' : 'border-[#333]'
                  }`}
                />
                {validationErrors.first_name && (
                  <p className="mt-1 text-sm text-red-500">{validationErrors.first_name}</p>
                )}
              </div>
              <div>
                <input
                  type="text"
                  id="last_name"
                  name="last_name"
                  value={formData.last_name}
                  onChange={handleInputChange}
                  placeholder={t('multistepForm.step7.field.lastName')}
                  className={`w-full p-3 bg-[#111] border rounded-lg transition-colors ${
                    validationErrors.last_name ? 'border-red-500' : 'border-[#333]'
                  }`}
                />
                {validationErrors.last_name && (
                  <p className="mt-1 text-sm text-red-500">{validationErrors.last_name}</p>
                )}
              </div>
              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder={t('multistepForm.step7.field.email')}
                  className={`w-full p-3 bg-[#111] border rounded-lg transition-colors ${
                    validationErrors.email ? 'border-red-500' : 'border-[#333]'
                  }`}
                />
                {validationErrors.email && (
                  <p className="mt-1 text-sm text-red-500">{validationErrors.email}</p>
                )}
              </div>
              <div>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder={t('multistepForm.step7.field.company')}
                  className={`w-full p-3 bg-[#111] border rounded-lg transition-colors ${
                    validationErrors.company ? 'border-red-500' : 'border-[#333]'
                  }`}
                />
                {validationErrors.company && (
                  <p className="mt-1 text-sm text-red-500">{validationErrors.company}</p>
                )}
              </div>
            </div>
            <div className="flex justify-between mt-6">
              <button
                onClick={handleBack}
                className="px-6 py-3 bg-transparent border border-[#333] text-[#E9EAEC] rounded-lg hover:bg-[#111] transition-colors flex items-center"
              >
                <ChevronLeft size={20} className="mr-2" />
                Back
              </button>
              <button
                onClick={handleNext}
                disabled={isSubmitting}
                className="px-6 py-3 bg-[#3D3D3D] text-white rounded-lg hover:bg-[#4D4D4D] transition-colors flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <span className="mr-2">{t('form.submitting')}</span>
                    <div className="w-5 h-5 border-t-2 border-b-2 border-white rounded-full animate-spin"></div>
                  </>
                ) : (
                  <>
                    Submit
                    <ArrowRight size={20} className="ml-2" />
                  </>
                )}
              </button>
            </div>
          </div>
        );

      case 9:
        return showThankYou ? (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">{t('multistepForm.calendar.title')}</h2>
            <p className="text-[#BCBCBC] mb-8">{t('multistepForm.calendar.subtext')}</p>
            <div className="w-full overflow-hidden rounded-lg">
              <div 
                className="calendly-inline-widget w-full" 
                data-url="https://calendly.com/aixontech/30min?hide_event_type_details=1&hide_gdpr_banner=1&background_color=1a1a1a&text_color=ffffff&primary_color=abafb3" 
                style={{ minWidth: '320px', height: '700px' }}
              ></div>
            </div>
          </div>
        ) : null;

      default:
        return null;
    }
  };

  useEffect(() => {
    if (currentStep === 9 && showThankYou) {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, [currentStep, showThankYou]);

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-[#BCBCBC]">
            {t('multistepForm.progress', {
              current: currentStep,
              total: totalSteps
            })}
          </span>
          <span className="text-sm text-[#BCBCBC]">{Math.round((currentStep / totalSteps) * 100)}%</span>
        </div>
        <div className="h-2 bg-[#111] rounded-full">
          <div
            className="h-full bg-[#3D3D3D] rounded-full transition-all duration-300"
            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
          ></div>
        </div>
      </div>
      {renderStep()}
    </div>
  );
};

export default MultiStepForm;