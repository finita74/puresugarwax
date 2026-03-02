import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
            
          {/* Image Side */}
          <div className="w-full lg:w-1/3 hidden lg:block sticky top-24">
             <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[600px]">
                <img 
                    src="/1234.jpeg" 
                    alt="Professional spa treatment and skincare" 
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-stone-900/10"></div>
                <div className="absolute bottom-8 left-8 right-8 text-white">
                    <h3 className="font-serif text-3xl mb-2">Pure & Natural</h3>
                    <p className="text-stone-100 font-light">Experience the difference of chemical-free hair removal.</p>
                </div>
             </div>
          </div>

          {/* Menu Side */}
          <div className="w-full lg:w-2/3">
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
            >
                <h2 className="font-serif text-4xl md:text-5xl text-stone-800 mb-2">Service Menu</h2>
                <p className="text-teal-500 font-medium mb-12 uppercase tracking-wider text-sm">Transparent Pricing</p>

                <div className="space-y-6">
                {SERVICES.map((service, index) => (
                    <div 
                        key={index}
                        className="group flex flex-col md:flex-row md:items-end md:justify-between border-b border-stone-100 pb-4 hover:bg-stone-50 transition-colors rounded-lg px-2"
                    >
                        <div className="mb-2 md:mb-0 flex-grow flex items-baseline">
                            <h4 className="font-serif text-xl text-stone-800 font-medium group-hover:text-teal-500 transition-colors whitespace-nowrap mr-4">
                                {service.name}
                            </h4>
                            <div className="hidden md:block h-px bg-stone-200 flex-grow w-full"></div>
                        </div>
                        
                        <div className="flex flex-col items-end min-w-fit md:ml-4">
                            <span className="font-sans font-semibold text-lg text-stone-600">
                                {service.price}
                            </span>
                            {service.note && (
                                <p className="text-sm text-stone-500 italic mt-0.5 text-right max-w-[200px]">
                                    {service.note}
                                </p>
                            )}
                        </div>
                    </div>
                ))}
                </div>
                
                <div className="mt-12 bg-teal-50 border border-teal-100 p-6 rounded-lg text-center">
                    <p className="text-stone-600 mb-4">Ready to feel confident in your skin?</p>
                    <a 
                        href="https://my.setmore.com/shortBookingPage/ffbfc454-f6ce-425d-8737-bcd4336e1493" 
                        target="_blank" 
                        rel="noreferrer"
                        className="inline-block border-2 border-teal-400 text-teal-600 hover:bg-teal-500 hover:text-white px-8 py-3 rounded-full font-bold uppercase transition-all duration-300"
                    >
                        Book Your Session
                    </a>
                </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;