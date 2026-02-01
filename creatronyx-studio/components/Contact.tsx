
import React, { useState } from 'react';
import { Mail, Phone, Facebook, Instagram, Send, Music } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Professional Video Editing',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}! Your request for ${formData.service} has been received. We'll be in touch soon.`);
  };

  return (
    <section id="contact" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <div className="inline-block px-4 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-xs font-bold uppercase tracking-widest mb-6">
              Get In Touch
            </div>
            <h2 className="text-4xl md:text-6xl font-black font-display mb-8 leading-tight">
              Let's Build <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
                Something Powerful
              </span>
            </h2>
            <p className="text-slate-400 text-lg mb-12 max-w-md leading-relaxed">
              Have a project in mind? We'd love to hear from you. Reach out via form or any of our official channels.
            </p>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center border border-slate-800 flex-shrink-0">
                  <Mail className="text-cyan-400" />
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Primary Support</p>
                    <a href={`mailto:${CONTACT_INFO.emailPrimary}`} className="text-lg md:text-xl font-bold hover:text-cyan-400 transition-colors break-all">
                      {CONTACT_INFO.emailPrimary}
                    </a>
                  </div>
                  <div className="pt-2">
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Creative Inquiries</p>
                    <a href={`mailto:${CONTACT_INFO.emailSecondary}`} className="text-lg md:text-xl font-bold hover:text-cyan-400 transition-colors break-all">
                      {CONTACT_INFO.emailSecondary}
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center border border-slate-800 flex-shrink-0">
                  <Phone className="text-cyan-400" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">WhatsApp</p>
                  <a href={`https://wa.me/${CONTACT_INFO.whatsapp}`} target="_blank" className="text-lg md:text-xl font-bold hover:text-cyan-400 transition-colors">
                    +{CONTACT_INFO.whatsapp}
                  </a>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <a href={CONTACT_INFO.socials.facebook} target="_blank" className="p-4 bg-slate-900 text-slate-400 hover:text-cyan-400 rounded-2xl hover:border-cyan-500/50 border border-slate-800 transition-all">
                <Facebook size={24} />
              </a>
              <a href={CONTACT_INFO.socials.instagram} target="_blank" className="p-4 bg-slate-900 text-slate-400 hover:text-cyan-400 rounded-2xl hover:border-cyan-500/50 border border-slate-800 transition-all">
                <Instagram size={24} />
              </a>
              <a href={CONTACT_INFO.socials.tiktok} target="_blank" className="p-4 bg-slate-900 text-slate-400 hover:text-cyan-400 rounded-2xl hover:border-cyan-500/50 border border-slate-800 transition-all">
                <Music size={24} />
              </a>
            </div>
          </div>
          
          <div className="bg-slate-900 p-8 md:p-12 rounded-[3rem] border border-slate-800 relative">
            <div className="absolute top-0 right-10 -translate-y-1/2 bg-cyan-500 text-slate-950 px-6 py-2 rounded-full font-black text-xs uppercase tracking-widest shadow-xl">
              Quick Response
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Full Name</label>
                  <input 
                    type="text" 
                    required
                    placeholder="John Doe"
                    className="w-full bg-slate-950 border border-slate-800 rounded-2xl p-5 focus:border-cyan-500 outline-none transition-all placeholder:text-slate-700 font-medium"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Email Address</label>
                  <input 
                    type="email" 
                    required
                    placeholder="john@example.com"
                    className="w-full bg-slate-950 border border-slate-800 rounded-2xl p-5 focus:border-cyan-500 outline-none transition-all placeholder:text-slate-700 font-medium"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>
              
              <div className="space-y-3">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Service Required</label>
                <div className="relative">
                  <select 
                    className="w-full bg-slate-950 border border-slate-800 rounded-2xl p-5 focus:border-cyan-500 outline-none transition-all appearance-none font-medium cursor-pointer"
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                  >
                    <option>Professional Video Editing</option>
                    <option>Web Developer</option>
                    <option>Social Media Expert</option>
                    <option>Script Writing</option>
                    <option>Digital Marketing</option>
                  </select>
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-600">
                    <Send size={16} className="rotate-90" />
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Project Message</label>
                <textarea 
                  rows={5}
                  required
                  placeholder="Tell us about your brand goals and how we can help..."
                  className="w-full bg-slate-950 border border-slate-800 rounded-2xl p-5 focus:border-cyan-500 outline-none transition-all placeholder:text-slate-700 font-medium resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full py-6 bg-cyan-500 text-slate-950 font-black rounded-2xl flex items-center justify-center gap-3 hover:bg-cyan-400 hover:scale-[1.02] transition-all shadow-xl shadow-cyan-500/10 active:scale-95 uppercase tracking-widest"
              >
                Send Message
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
