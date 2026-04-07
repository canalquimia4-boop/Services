import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import CTASection from '../components/CTASection';
import PageHeader from '../components/PageHeader';

interface ServiceDetailProps {
  title: string;
  subtitle: string;
  description: string;
  included: string[];
  forWho: string[];
  whyUs: string;
  gallery?: string[];
}

export default function ServiceDetail({ title, subtitle, description, included, forWho, whyUs, gallery }: ServiceDetailProps) {
  const { t } = useLanguage();

  return (
    <div>
      <PageHeader 
        title={title}
        subtitle={subtitle}
        backgroundImage={gallery && gallery.length > 0 ? gallery[0] : undefined}
      />
      
      <section className="py-24 bg-white relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-12">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-brand-dark">{t('service_overview')}</h2>
                <p className="text-slate-600 leading-relaxed text-lg">
                  {description}
                </p>
                <a href="https://intensiva.com.br/projetos/waterland/contact/" target="_blank" rel="noopener noreferrer" className="btn-primary inline-block">
                  {t('cta_estimate')}
                </a>
              </div>

              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-brand-dark">{t('service_included')}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {included.map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-3 text-slate-600">
                      <CheckCircle2 className="text-brand-light shrink-0" size={20} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {gallery && gallery.length > 0 && (
                <div className="space-y-8 pt-8 border-t border-slate-100">
                  <h2 className="text-3xl font-bold text-brand-dark">{t('service_gallery')}</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {gallery.map((img, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg group cursor-pointer relative"
                      >
                        <img 
                          src={img} 
                          alt={`${title} gallery ${idx + 1}`}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-brand-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-8">
              <div className="bg-slate-50 p-8 rounded-3xl space-y-6">
                <h3 className="text-xl font-bold text-brand-dark">{t('service_for_who')}</h3>
                <ul className="space-y-3">
                  {forWho.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-3 text-sm text-slate-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-light mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-brand-dark p-8 rounded-3xl text-white space-y-4">
                <h3 className="text-xl font-bold">{t('service_why_us')}</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {whyUs}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
