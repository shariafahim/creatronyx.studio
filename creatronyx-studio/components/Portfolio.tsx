
import React from 'react';
import { PORTFOLIO } from '../constants';
import { Project } from '../types';
import { ExternalLink, Plus } from 'lucide-react';

interface PortfolioProps {
  onProjectClick: (project: Project) => void;
}

const Portfolio: React.FC<PortfolioProps> = ({ onProjectClick }) => {
  return (
    <section id="portfolio" className="py-24 bg-slate-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-black font-display mb-4 text-white">Selected Works That Tell Our Story</h2>
            <p className="text-slate-400 text-lg font-light">Each project tells a story of conversion and growth.</p>
          </div>
          <button className="text-cyan-400 font-black text-sm uppercase tracking-widest border-b-2 border-cyan-400/20 hover:border-cyan-400 transition-all pb-1">
            Explore Archive
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {PORTFOLIO.map((project) => (
            <div 
              key={project.id}
              onClick={() => onProjectClick(project)}
              className="group relative cursor-pointer overflow-hidden rounded-[2.5rem] bg-slate-900"
            >
              {/* Image Container - Explicitly Clickable */}
              <div className="aspect-[4/3] overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
                
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Plus Icon centered on hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-50 group-hover:scale-100">
                  <div className="bg-white text-slate-950 p-4 rounded-full shadow-2xl">
                    <Plus size={24} strokeWidth={3} />
                  </div>
                </div>
              </div>

              {/* Text Content */}
              <div className="p-8 pb-10">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-cyan-400 text-[10px] font-black uppercase tracking-[0.2em] mb-1 block">
                      {project.category}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold group-hover:text-cyan-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>
                </div>
                
                <div className="flex items-center text-sm font-bold text-slate-500">
                  View Case Study <ExternalLink size={14} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
