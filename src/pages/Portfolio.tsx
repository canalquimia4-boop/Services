import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';
import { serviceData } from '../data/services';
import CTASection from '../components/CTASection';
import PageHeader from '../components/PageHeader';

export default function Portfolio() {
  const { t } = useLanguage();

  // Generate projects from service galleries
  const projects = Object.entries(serviceData).flatMap(([id, service]) => {
    const category = service.title.split(' in ')[0] || service.title;
    return (service.gallery || []).map((image, idx) => ({
      title: `${category} Project`,
      location: 'Central Florida',
      image,
      type: category
    }));
  });

  return (
    <div>
      <PageHeader 
        title={t('portfolio_hero_title')}
        subtitle={t('portfolio_hero_subtitle')}
        backgroundImage="https://images.unsplash.com/photo-1562133567-b6a0a9c7e6eb?auto=format&fit=crop&q=80&w=2000"
      />
      
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-3xl shadow-xl aspect-[4/3]"
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <span className="text-brand-light font-bold text-sm uppercase tracking-widest mb-2">{project.type}</span>
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  <p className="text-slate-300 text-sm">{project.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
