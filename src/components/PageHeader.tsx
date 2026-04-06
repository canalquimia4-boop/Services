import React from 'react';
import { motion } from 'motion/react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

export default function PageHeader({ 
  title, 
  subtitle, 
  backgroundImage = "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&q=80&w=2000" 
}: PageHeaderProps) {
  return (
    <section className="relative h-[40vh] min-h-[400px] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src={backgroundImage} 
          className="w-full h-full object-cover"
          alt={title}
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-brand-dark/70 backdrop-blur-[2px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl text-slate-100 max-w-3xl mx-auto leading-relaxed font-medium">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>

      {/* Wave Effect */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
        <svg className="relative block w-full h-[40px] md:h-[60px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C58.47,104.7,128.22,113.5,197.39,107.47,248.43,103.05,284.41,75.07,321.39,56.44Z" fill="#ffffff"></path>
        </svg>
      </div>
    </section>
  );
}
