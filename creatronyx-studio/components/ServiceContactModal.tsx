
import React from 'react';
import { X, Mail, MessageCircle } from 'lucide-react';
import { Service } from '../types';
import { CONTACT_INFO } from '../constants';

interface ServiceContactModalProps {
  service: Service;
  onClose: () => void;
}

const ServiceContactModal: React.FC<ServiceContactModalProps> = ({ service, onClose }) => {
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      <div className="relative bg-slate-900 w-full max-w-lg p-8 md:p-12 rounded-[2.5rem] border border-slate-800 shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-300">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 bg-slate-800 rounded-full text-slate-400 hover:text-white"
        >
          <X size={20} />
        </button>
        
        <div className="text-center">
          <div className="w-20 h-20 bg-cyan-500/10 text-cyan-400 rounded-3xl flex items-center justify-center mx-auto mb-6">
            <MessageCircle size={40} />
          </div>
          <h2 className="text-3xl font-black font-display mb-4">{service.title}</h2>
          <p className="text-slate-400 mb-8 leading-relaxed">
            Ready to start with our {service.title.toLowerCase()} service? Contact us directly for a custom quote or more information.
          </p>
          
          <div className="space-y-4 mb-8">
            <div className="p-4 bg-slate-950 border border-slate-800 rounded-2xl">
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Direct Email</p>
              <p className="text-lg font-bold text-cyan-400">{CONTACT_INFO.emailPrimary}</p>
            </div>
          </div>
          
          <div className="flex flex-col gap-4">
            <a 
              href={`mailto:${CONTACT_INFO.emailPrimary}?subject=Inquiry for ${service.title}`}
              className="w-full py-4 bg-cyan-500 text-slate-950 font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-cyan-400 transition-all"
            >
              <Mail size={18} />
              Contact for This Service
            </a>
            <button 
              onClick={onClose}
              className="text-slate-500 font-bold text-sm hover:text-slate-300 transition-colors"
            >
              Maybe Later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceContactModal;
