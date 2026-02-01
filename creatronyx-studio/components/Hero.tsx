
import React from 'react';
import { ChevronRight, CheckCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-slate-800/50 border border-slate-700 px-4 py-2 rounded-full mb-8 backdrop-blur-sm animate-bounce-slow">
            <CheckCircle size={16} className="text-cyan-400" />
            <span className="text-xs sm:text-sm font-semibold text-slate-200">Upwork Top Rated Seller</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black font-display leading-[1.1] mb-6 tracking-tight">
            We Build Powerful <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
              Digital Brands
            </span> <br />
            That Grow Online
          </h1>

          <p className="text-lg md:text-xl text-slate-400 mb-10 leading-relaxed font-light max-w-2xl mx-auto">
            Video Editing • Web Development • Digital Marketing • Social Media Growth
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-2xl transition-all flex items-center justify-center group"
            >
              Order Now
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <div className="w-[1px] h-12 bg-gradient-to-b from-cyan-400 to-transparent"></div>
        <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Scroll</span>
      </div>
    </section>
  );
};

export default Hero;
