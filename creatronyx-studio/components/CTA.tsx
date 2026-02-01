
import React from 'react';
import { MessageSquare, ShoppingBag } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const CTA: React.FC = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-cyan-600 to-emerald-600 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
          {/* Decor */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-white/10 rounded-full blur-[80px]"></div>
          
          <h2 className="text-4xl md:text-6xl font-black font-display text-slate-950 mb-6 relative z-10">
            Ready to Elevate Your Brand?
          </h2>
          <p className="text-slate-900/80 text-xl font-medium mb-12 max-w-2xl mx-auto relative z-10">
            Let’s build something powerful together. Whether it's high-end video or custom web solutions, we've got you covered.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
            <a 
              href="#contact" 
              className="w-full sm:w-auto px-10 py-5 bg-slate-950 text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:scale-105 transition-transform"
            >
              <ShoppingBag size={20} />
              Order Now
            </a>
            <a 
              href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-10 py-5 bg-white text-slate-950 rounded-2xl font-bold flex items-center justify-center gap-2 hover:scale-105 transition-transform"
            >
              <MessageSquare size={20} />
              WhatsApp Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
