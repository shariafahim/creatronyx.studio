
import React from 'react';
import * as Icons from 'lucide-react';
import { SERVICES } from '../constants';
import { Service } from '../types';

interface ServicesProps {
  onServiceClick: (service: Service) => void;
}

const Services: React.FC<ServicesProps> = ({ onServiceClick }) => {
  return (
    <section id="services" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black font-display mb-6">Our Services</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg font-light">
            We provide high-end digital solutions designed to convert your audience into loyal customers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => {
            const IconComponent = (Icons as any)[service.icon];
            return (
              <div 
                key={service.id}
                onClick={() => onServiceClick(service)}
                className="group p-8 bg-slate-900/50 border border-slate-800 rounded-3xl hover:border-cyan-500/50 transition-all duration-300 cursor-pointer hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/5"
              >
                <div className="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors">
                  {IconComponent && <IconComponent size={28} />}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">{service.title}</h3>
                <p className="text-slate-400 leading-relaxed mb-6">{service.description}</p>
                <div className="flex items-center text-cyan-400 font-bold text-sm">
                  View Service Details <Icons.ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
