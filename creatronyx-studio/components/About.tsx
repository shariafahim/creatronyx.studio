
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-cyan-500/30"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-cyan-500/30"></div>
            <img 
              src="https://picsum.photos/seed/about-agency/800/1000" 
              alt="Creative Studio" 
              className="rounded-3xl shadow-2xl relative z-10 grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
          
          <div>
            <h4 className="text-cyan-400 font-bold tracking-widest uppercase text-sm mb-4">About Creatronyx Studio</h4>
            <h2 className="text-4xl md:text-5xl font-black font-display mb-8 leading-tight">
              Crafting Results-Driven <br />Digital Excellence
            </h2>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              Creatronyx Studio is a results-driven digital agency specializing in creative media, web development, and digital marketing. Led by an Upwork Top Rated Seller, we help brands stand out, engage audiences, and scale faster in the digital world.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="text-3xl font-black font-display text-white mb-1">500+</p>
                <p className="text-sm text-slate-500 uppercase font-bold tracking-wider">Projects Delivered</p>
              </div>
              <div>
                <p className="text-3xl font-black font-display text-white mb-1">98%</p>
                <p className="text-sm text-slate-500 uppercase font-bold tracking-wider">Client Retention</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
