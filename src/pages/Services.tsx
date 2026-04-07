import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Droplets, ShieldCheck, Hammer, Settings, Waves, Sparkles, Smartphone, ChevronRight } from 'lucide-react';
import CTASection from '../components/CTASection';
import PageHeader from '../components/PageHeader';

interface Service {
  id: string;
  title: string;
  icon: React.ReactNode;
  desc: string;
  priority?: boolean;
  externalLink?: string;
}

export default function Services() {
  const { t } = useLanguage();

  const services: Service[] = [
    {
      id: 'leak-detection',
      title: t('service_leak_title'),
      icon: <img src="https://i.postimg.cc/KckXhL1D/water-leak-detector.png" alt="Logo" className="w-[100px] h-[100px] object-contain mix-blend-multiply" referrerPolicy="no-referrer" />,
      desc: t('service_leak_desc'),
      priority: false,
      externalLink: 'https://intensiva.com.br/projetos/waterland/pool-leak-detection/'
    },
    {
      id: 'cleaning',
      title: t('service_cleaning_title'),
      icon: <img src="https://lh3.googleusercontent.com/d/1crlB1Q9AxAK9sxIL4a45rMWIbQBhB6Ch=w200?authuser=0" alt="Logo" className="w-[100px] h-[100px] object-contain mix-blend-multiply" referrerPolicy="no-referrer" />,
      desc: t('service_cleaning_desc'),
      externalLink: 'https://intensiva.com.br/projetos/waterland/pool-cleaning-maintenance/'
    },
    {
      id: 'renovations',
      title: t('service_renovations_title'),
      icon: <img src="https://lh3.googleusercontent.com/d/1KAtvGrDfRpj5nUm6Z414uoBDxbFRXNqN=w200?authuser=0" alt="Logo" className="w-[100px] h-[100px] object-contain mix-blend-multiply" referrerPolicy="no-referrer" />,
      desc: t('service_renovations_desc'),
      externalLink: 'https://intensiva.com.br/projetos/waterland/pool-deck-renovation/'
    },
    {
      id: 'equipment',
      title: t('service_equipment_title'),
      icon: <img src="https://lh3.googleusercontent.com/d/1-pPSPyVffOBBFxsub6_H-alVApPDgp3W=w200?authuser=0" alt="Logo" className="w-[100px] h-[100px] object-contain mix-blend-multiply" referrerPolicy="no-referrer" />,
      desc: t('service_equipment_desc'),
      externalLink: 'https://intensiva.com.br/projetos/waterland/equipment-repair-installation/'
    },
    {
      id: 'sealing',
      title: t('service_sealing_title'),
      icon: <img src="https://i.postimg.cc/sfwMqkZY/pool-paver-selling.png" alt="Logo" className="w-[100px] h-[100px] object-contain mix-blend-multiply" referrerPolicy="no-referrer" />,
      desc: t('service_sealing_desc'),
      externalLink: 'https://intensiva.com.br/projetos/waterland/paver-sealing-for-pool-decks/'
    },
    {
      id: 'acid-wash',
      title: t('service_acid_wash_title'),
      icon: <img src="https://lh3.googleusercontent.com/d/1GZ31v4deLDAuHUl2GPcfj0t2yMGmAQxl=w200?authuser=0" alt="Logo" className="w-[100px] h-[100px] object-contain mix-blend-multiply" referrerPolicy="no-referrer" />,
      desc: t('service_acid_wash_desc'),
      externalLink: 'https://intensiva.com.br/projetos/waterland/acid-wash-deep-pool-cleaning/'
    },
    {
      id: 'automation',
      title: t('service_automation_title'),
      icon: <img src="https://i.postimg.cc/QxDrgCMQ/pool-automation.png" alt="Logo" className="w-[100px] h-[100px] object-contain mix-blend-multiply" referrerPolicy="no-referrer" />,
      desc: t('service_automation_desc'),
      externalLink: 'https://intensiva.com.br/projetos/waterland/pool-automation-control-systems/'
    }
  ];

  return (
    <div>
      <PageHeader 
        title={t('services_hero_title')}
        subtitle={t('services_hero_subtitle')}
        backgroundImage="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&q=80&w=2000"
      />
      
      <section className="py-24 bg-white relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`p-10 rounded-3xl bg-slate-50 border-2 transition-all hover:shadow-xl hover:bg-white ${service.priority ? 'border-brand-light' : 'border-transparent'}`}
              >
                <div className={`${(service.id === 'renovations' || service.id === 'cleaning' || service.id === 'equipment' || service.id === 'acid-wash' || service.id === 'leak-detection' || service.id === 'sealing' || service.id === 'automation') ? 'w-[100px] h-[100px]' : 'w-14 h-14 rounded-2xl flex items-center justify-center ' + (service.priority ? 'bg-brand-light text-white' : 'bg-brand-dark text-white')} mb-8`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-brand-dark mb-4">{service.title}</h3>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  {service.desc}
                </p>
                {service.externalLink ? (
                  <a 
                    href={service.externalLink}
                    className="inline-flex items-center font-bold text-brand-light hover:underline"
                  >
                    {t('cta_view_details')} <ChevronRight size={20} />
                  </a>
                ) : (
                  <Link 
                    to={`/services/${service.id}`}
                    className="inline-flex items-center font-bold text-brand-light hover:underline"
                  >
                    {t('cta_view_details')} <ChevronRight size={20} />
                  </Link>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </div>
  );
}
