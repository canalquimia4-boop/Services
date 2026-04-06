import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function CTASection() {
  const { t } = useLanguage();

  return (
    <section className="relative py-24 bg-brand-dark text-white overflow-hidden">
      {/* Top Wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10 rotate-180">
        <svg className="relative block w-full h-[40px] md:h-[60px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C58.47,104.7,128.22,113.5,197.39,107.47,248.43,103.05,284.41,75.07,321.39,56.44Z" fill="currentColor" className="text-white"></path>
        </svg>
      </div>

      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=2070&auto=format&fit=crop" 
          alt="Pool background"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-brand-dark/80 backdrop-blur-[2px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <h2 className="text-4xl md:text-5xl font-bold">{t('home_ready_title')}</h2>
        <p className="text-xl text-slate-200 max-w-2xl mx-auto font-medium">
          {t('home_ready_subtitle')}
        </p>
        <Link 
          to="/contact" 
          className="inline-block bg-brand-light hover:bg-brand-light/90 text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all shadow-lg hover:shadow-brand-light/20 active:scale-95"
        >
          {t('cta_schedule')}
        </Link>
      </div>
    </section>
  );
}
