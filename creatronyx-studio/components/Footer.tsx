
import React from 'react';
import { Facebook, Instagram, Music } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-cyan-500 rounded-lg rotate-6"></div>
                <div className="absolute inset-0 bg-slate-950 rounded-lg border border-cyan-500/30 flex items-center justify-center z-10 text-cyan-400 font-black text-sm">C</div>
              </div>
              <span className="text-xl font-black tracking-tighter font-display">
                <span className="text-white">CREATRONYX</span>
                <span className="text-cyan-500">.</span>
              </span>
            </div>
            <p className="text-slate-500 text-sm max-w-xs leading-relaxed">
              We craft high-end digital experiences that convert. Led by an Upwork Top Rated Seller.
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <a href={CONTACT_INFO.socials.facebook} target="_blank" className="p-3 bg-slate-900 text-slate-400 hover:text-cyan-400 rounded-xl border border-slate-800 transition-all">
              <Facebook size={20} />
            </a>
            <a href={CONTACT_INFO.socials.instagram} target="_blank" className="p-3 bg-slate-900 text-slate-400 hover:text-cyan-400 rounded-xl border border-slate-800 transition-all">
              <Instagram size={20} />
            </a>
            <a href={CONTACT_INFO.socials.tiktok} target="_blank" className="p-3 bg-slate-900 text-slate-400 hover:text-cyan-400 rounded-xl border border-slate-800 transition-all">
              <Music size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-bold text-slate-600 uppercase tracking-widest">
          <p>© {new Date().getFullYear()} Creatronyx Studio. All rights reserved.</p>
          <p className="flex items-center gap-2">
            Powered by <span className="text-slate-400">Creatronyx Studio</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
