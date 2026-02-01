
import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black font-display mb-4">Global Praise</h2>
          <p className="text-slate-400">Trusted by brands worldwide for high-end results.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="p-10 bg-slate-900 rounded-3xl border border-slate-800 flex flex-col h-full relative group">
              <Quote className="absolute top-6 right-8 text-slate-800 group-hover:text-cyan-500/10 transition-colors" size={48} />
              
              <div className="flex mb-6 text-yellow-500">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              
              <p className="text-slate-300 leading-relaxed mb-8 flex-grow">"{t.content}"</p>
              
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover ring-2 ring-cyan-500/20" />
                <div>
                  <h4 className="font-bold text-white">{t.name}</h4>
                  <p className="text-xs text-slate-500 uppercase tracking-wider font-bold">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
