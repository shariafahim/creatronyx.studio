
import React from 'react';
import { X, Target, Wrench, Trophy } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      <div className="relative bg-slate-900 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[2.5rem] border border-slate-800 shadow-2xl animate-in fade-in zoom-in duration-300">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 bg-slate-800 rounded-full text-slate-400 hover:text-white z-20"
        >
          <X size={20} />
        </button>
        
        <div className="grid md:grid-cols-2">
          <div className="h-64 md:h-auto overflow-hidden">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="p-8 md:p-12">
            <p className="text-cyan-400 text-xs font-black uppercase tracking-widest mb-2">{project.category}</p>
            <h2 className="text-3xl font-black font-display mb-8">{project.title}</h2>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center text-cyan-400">
                  <Target size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-200 mb-1">Client Goal</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{project.goal}</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center text-cyan-400">
                  <Wrench size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-200 mb-1">Tools Used</h4>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tools.map(tool => (
                      <span key={tool} className="text-[10px] font-bold uppercase tracking-wider bg-slate-800 px-3 py-1 rounded-full text-slate-300">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center text-cyan-400">
                  <Trophy size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-200 mb-1">Outcome</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{project.result}</p>
                </div>
              </div>
            </div>
            
            <a 
              href="#contact" 
              onClick={onClose}
              className="mt-12 w-full py-4 bg-cyan-500 text-slate-950 font-bold rounded-xl block text-center hover:bg-cyan-400 transition-all"
            >
              Start Your Project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
