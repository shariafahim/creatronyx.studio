
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Works', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-slate-950/95 backdrop-blur-xl py-4 border-b border-slate-800/50' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="flex items-center gap-2 group transition-all duration-300">
              <div className="relative w-10 h-10 flex items-center justify-center">
                <div className="absolute inset-0 bg-cyan-500 rounded-xl rotate-6 group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300"></div>
                <div className="absolute inset-0 bg-slate-950 rounded-xl border border-cyan-500/50 flex items-center justify-center z-10">
                  <span className="text-cyan-400 font-black text-xl font-display">C</span>
                </div>
              </div>
              <div className="flex flex-col -space-y-1">
                <span className="text-xl font-black tracking-tighter font-display leading-none">
                  <span className="text-white">CREATRONYX</span>
                  <span className="text-cyan-400">.</span>
                </span>
                <span className="text-[10px] font-bold tracking-[0.3em] text-slate-500 uppercase">Studio</span>
              </div>
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-slate-400 hover:text-cyan-400 transition-colors uppercase tracking-widest"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-6 py-2.5 rounded-xl text-sm font-bold transition-all shadow-lg shadow-cyan-500/20 active:scale-95"
            >
              Order Now
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-slate-950 border-b border-slate-800 animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-4 text-lg font-bold text-slate-300 hover:text-cyan-400 hover:bg-slate-900 rounded-2xl transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4">
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="block text-center bg-cyan-500 text-slate-950 px-5 py-4 rounded-2xl font-bold text-lg"
              >
                Order Now
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
