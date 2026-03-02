import React from 'react';
import { MapPin, Mail, Phone, Calendar } from 'lucide-react';
import { HOURS, LOCATION } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-stone-100">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-4xl md:text-5xl text-stone-800 text-center mb-16">Visit Us</h2>
        
        <div className="grid lg:grid-cols-3 gap-8 bg-white rounded-3xl shadow-xl overflow-hidden">
          
          {/* Info Column */}
          <div className="p-8 md:p-12 bg-teal-600 text-white flex flex-col justify-center">
             <h3 className="font-serif text-3xl mb-8">Contact Info</h3>
             
             <div className="space-y-8">
                <div className="flex items-start">
                    <MapPin className="mt-1 mr-4 shrink-0 text-teal-200" />
                    <div>
                        <p className="font-bold text-lg">Pure Sugar Wax</p>
                        <p className="opacity-90">{LOCATION.address}</p>
                        <p className="opacity-80 text-sm">{LOCATION.subLocation}</p>
                        <p className="opacity-90">{LOCATION.city}, {LOCATION.state} {LOCATION.zip}</p>
                    </div>
                </div>

                <div className="flex items-center">
                    <Phone className="mr-4 shrink-0 text-teal-200" />
                    <a href={`tel:${LOCATION.phone}`} className="hover:underline text-lg">{LOCATION.phone}</a>
                </div>

                <div className="flex items-center">
                    <Mail className="mr-4 shrink-0 text-teal-200" />
                    <a href={`mailto:${LOCATION.email}`} className="hover:underline">{LOCATION.email}</a>
                </div>
             </div>
          </div>

          {/* Hours Column */}
          <div className="p-8 md:p-12 bg-white">
            <div className="flex items-center mb-8">
                <Calendar className="text-teal-500 mr-3" size={28} />
                <h3 className="font-serif text-2xl text-stone-800">Opening Hours</h3>
            </div>
            <ul className="space-y-4">
                {HOURS.map((h, i) => (
                    <li key={i} className="flex justify-between items-center border-b border-stone-100 pb-2">
                        <span className={`font-medium ${h.time === 'Closed' ? 'text-stone-400' : 'text-stone-600'}`}>
                            {h.day}
                        </span>
                        <span className={`font-semibold ${h.time === 'Closed' ? 'text-amber-500' : 'text-stone-800'}`}>
                            {h.time}
                        </span>
                    </li>
                ))}
            </ul>
          </div>

          {/* Map Column */}
          <div className="h-64 lg:h-auto bg-stone-200 relative group overflow-hidden min-h-[300px]">
             {/* 
                NOTE: Replaced Google Maps API iframe with a static image.
                You can replace the src below with a screenshot of your actual map location or shop front.
             */}
            <img 
                src="https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&q=80&w=800" 
                alt="Spa Interior" 
                className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 scale-100 group-hover:scale-105"
            />
            
            <div className="absolute inset-0 z-10 flex items-center justify-center bg-stone-900/10 hover:bg-stone-900/0 transition-colors">
                 <a 
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${LOCATION.address} ${LOCATION.city} ${LOCATION.state} ${LOCATION.zip}`)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-white/90 backdrop-blur-md px-6 py-3 rounded-full shadow-lg text-sm font-bold text-stone-700 hover:text-teal-600 hover:scale-105 transition-all duration-300 flex items-center gap-2"
                >
                    <MapPin size={18} className="text-teal-500" />
                    Open in Google Maps
                </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;