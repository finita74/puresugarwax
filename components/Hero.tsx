import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, CalendarClock } from 'lucide-react';
import { ALERTS, LOCATION } from '../constants';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1920" 
          alt="Tropical beach with clear blue water and white sand"
          className="w-full h-full object-cover brightness-75 md:brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-teal-900/60 to-transparent"></div>
        <div className="absolute inset-0 bg-teal-900/10 mix-blend-overlay"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center mt-16">
        
        {/* Alerts Stack */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mb-8 flex flex-col items-center gap-2"
        >
            {ALERTS.map((alert, index) => (
               <div key={index} className="bg-red-50/95 backdrop-blur-sm border border-red-200 text-red-600 px-4 py-2 rounded-full text-sm md:text-base font-semibold flex items-center shadow-sm max-w-2xl">
                  {index === 2 ? <CalendarClock size={18} className="mr-2 shrink-0" /> : <AlertCircle size={18} className="mr-2 shrink-0" />}
                  {alert}
               </div>
            ))}
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-bold mb-6 drop-shadow-xl"
        >
          Pure Sugar Wax
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-teal-50 text-lg md:text-2xl font-medium mb-10 max-w-3xl mx-auto tracking-wide drop-shadow-md"
        >
          Organic. Gentle. Effective. <br/>
          Get beach-ready skin with our natural sugaring techniques.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col md:flex-row gap-4 justify-center items-center"
        >
          <a 
            href={LOCATION.bookingUrl}
            target="_blank"
            rel="noreferrer"
            className="bg-teal-500 hover:bg-teal-600 text-white min-w-[200px] px-8 py-4 rounded-full text-lg font-semibold uppercase tracking-widest transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 border-2 border-transparent hover:border-teal-400"
          >
            Book Appointment
          </a>
          <span className="text-white/90 text-sm font-medium uppercase tracking-wide mt-2 md:mt-0 drop-shadow-md">
            By Appointment Only
          </span>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;