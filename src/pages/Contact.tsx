import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import EstimateForm from '../components/EstimateForm';
import PageHeader from '../components/PageHeader';

export default function Contact() {
  const { t } = useLanguage();

  return (
    <div>
      <PageHeader 
        title={t('contact_hero_title')}
        subtitle={t('contact_hero_subtitle')}
        backgroundImage="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?auto=format&fit=crop&q=80&w=2000"
      />
      
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Info */}
            <div className="space-y-12">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-brand-dark">{t('contact_info_title')}</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-brand-light/10 text-brand-light rounded-lg flex items-center justify-center shrink-0">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="font-bold text-brand-dark">{t('contact_phone_label')}</p>
                      <p className="text-slate-600">+1 (407) 722-2606</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-brand-light/10 text-brand-light rounded-lg flex items-center justify-center shrink-0">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="font-bold text-brand-dark">{t('contact_email_label')}</p>
                      <p className="text-slate-600">sales@waterlandpoolsfl.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-brand-light/10 text-brand-light rounded-lg flex items-center justify-center shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="font-bold text-brand-dark">{t('contact_address_label')}</p>
                      <p className="text-slate-600">5973 Windhover Drive, Orlando, FL 32819</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-brand-dark">{t('contact_hours_title')}</h2>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-brand-light/10 text-brand-light rounded-lg flex items-center justify-center shrink-0">
                    <Clock size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-brand-dark">{t('contact_mon_fri_label')}</p>
                    <p className="text-slate-600">8:00 AM – 5:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                <h3 className="text-xl font-bold text-brand-dark mb-2">{t('contact_estimates_title')}</h3>
                <p className="text-slate-600 text-sm">{t('contact_estimates_text')}</p>
              </div>
            </div>

            {/* Form */}
            <div>
              <EstimateForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
