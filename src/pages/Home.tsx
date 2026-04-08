import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Droplets, ShieldCheck, Clock, Users, ChevronRight } from 'lucide-react';
import EstimateForm from '../components/EstimateForm';
import CTASection from '../components/CTASection';

export default function Home() {
  const { t } = useLanguage();

  const services = [
    { 
      title: t('service_leak_title'), 
      icon: <Droplets />, 
      priority: true, 
      path: '/services/leak-detection',
      externalLink: 'https://intensiva.com.br/projetos/waterland/pool-leak-detection/'
    },
    { 
      title: t('service_cleaning_title'), 
      icon: <ShieldCheck />, 
      path: '/services/cleaning',
      externalLink: 'https://intensiva.com.br/projetos/waterland/pool-cleaning-maintenance/'
    },
    { 
      title: t('service_renovations_title'), 
      icon: <Users />, 
      path: '/services/renovations',
      externalLink: 'https://intensiva.com.br/projetos/waterland/pool-deck-renovation/'
    },
    { 
      title: t('service_equipment_title'), 
      icon: <Clock />, 
      path: '/services/equipment',
      externalLink: 'https://intensiva.com.br/projetos/waterland/equipment-repair-installation/'
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover"
            alt="Luxury Pool"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-brand-dark/70 backdrop-blur-[2px]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white space-y-6"
          >
            <span className="inline-block px-4 py-1 bg-brand-light/20 border border-brand-light/30 rounded-full text-brand-light font-bold text-sm tracking-widest uppercase">
              {t('home_years_excellence')}
            </span>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              {t('hero_title')}
            </h1>
            <p className="text-xl text-slate-100 max-w-xl leading-relaxed font-medium">
              {t('hero_subtitle')}
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="https://intensiva.com.br/projetos/waterland/contact/" target="_blank" rel="noopener noreferrer" className="btn-primary">
                {t('cta_estimate')}
              </a>
              <Link to="/" className="btn-secondary border-white text-white hover:bg-white hover:text-brand-dark">
                {t('nav_services')}
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            id="estimate"
          >
            <EstimateForm />
          </motion.div>
        </div>

        {/* Wave Effect */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
          <svg className="relative block w-full h-[40px] md:h-[80px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C58.47,104.7,128.22,113.5,197.39,107.47,248.43,103.05,284.41,75.07,321.39,56.44Z" fill="#ffffff"></path>
          </svg>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-brand-dark leading-tight">
                {t('home_intro_title')}
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                {t('home_intro_text')}
              </p>
              <Link to="/about" className="inline-flex items-center text-brand-light font-bold hover:underline">
                {t('home_learn_more')} <ChevronRight size={20} />
              </Link>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1562133567-b6a0a9c7e6eb?auto=format&fit=crop&q=80&w=1000" 
                className="rounded-3xl shadow-2xl"
                alt="Family enjoying pool"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -left-6 bg-brand-light text-white p-8 rounded-2xl shadow-xl hidden md:block">
                <p className="text-3xl font-bold">{t('home_trusted_count')}</p>
                <p className="text-sm font-medium opacity-90">{t('home_trusted_label')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold text-brand-dark">{t('home_services_title')}</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">{t('home_services_subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className={`p-8 rounded-2xl bg-white shadow-lg border-t-4 ${service.priority ? 'border-brand-light' : 'border-brand-dark'}`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${service.priority ? 'bg-brand-light text-white' : 'bg-brand-dark/10 text-brand-dark'}`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-4">{service.title}</h3>
                {service.externalLink ? (
                  <a 
                    href={service.externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-light font-semibold text-sm hover:underline flex items-center"
                  >
                    {t('cta_view_details')} <ChevronRight size={16} />
                  </a>
                ) : (
                  <Link 
                    to={service.path} 
                    target="_blank"
                    className="text-brand-light font-semibold text-sm hover:underline flex items-center"
                  >
                    {t('cta_view_details')} <ChevronRight size={16} />
                  </Link>
                )}
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/" className="btn-secondary">
              {t('cta_view_all')}
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-brand-dark text-white overflow-hidden relative">
        {/* Top Wave */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10 rotate-180">
          <svg className="relative block w-full h-[40px] md:h-[60px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C58.47,104.7,128.22,113.5,197.39,107.47,248.43,103.05,284.41,75.07,321.39,56.44Z" fill="#f8fafc"></path>
          </svg>
        </div>

        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.postimg.cc/cLWHcncT/piscina.png" 
            className="w-full h-full object-cover"
            alt="Pool Background"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-brand-dark/70 backdrop-blur-[2px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold leading-tight">{t('section_why_title')}</h2>
              <div className="space-y-6">
                {[
                  { title: t('home_why_1_title'), desc: t('home_why_1_desc') },
                  { title: t('home_why_2_title'), desc: t('home_why_2_desc') },
                  { title: t('home_why_3_title'), desc: t('home_why_3_desc') },
                  { title: t('home_why_4_title'), desc: t('home_why_4_desc') }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-4">
                    <div className="mt-1 w-6 h-6 rounded-full bg-brand-light flex items-center justify-center shrink-0">
                      <ShieldCheck size={14} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{item.title}</h4>
                      <p className="text-slate-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-lg p-12 rounded-3xl border border-white/10 text-center space-y-6">
              <h3 className="text-3xl font-bold">{t('home_ready_title')}</h3>
              <p className="text-slate-300">{t('home_ready_subtitle')}</p>
              <a href="https://intensiva.com.br/projetos/waterland/contact/" target="_blank" rel="noopener noreferrer" className="btn-primary inline-block w-full">
                {t('cta_schedule')}
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
