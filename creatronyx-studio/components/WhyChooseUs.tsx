
import React from 'react';
import { Award, Zap, Lightbulb, Heart, Globe } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      icon: <Award className="text-cyan-400" />,
      title: "Upwork Top Rated Seller",
      desc: "Proven track record of excellence on the world's largest talent platform."
    },
    {
      icon: <Zap className="text-cyan-400" />,
      title: "Fast Delivery",
      desc: "We respect your timelines without ever compromising on premium quality."
    },
    {
      icon: <Lightbulb className="text-cyan-400" />,
      title: "Creative & Technical",
      desc: "The perfect blend of aesthetic design and robust technical implementation."
    },
    {
      icon: <Heart className="text-cyan-400" />,
      title: "100% Satisfaction",
      desc: "Your vision is our priority. We iterate until your goal is fully realized."
    },
    {
      icon: <Globe className="text-cyan-400" />,
      title: "Global Clients",
      desc: "Experience working with diverse brands across US, UK, Europe, and Asia."
    }
  ];

  return (
    <section className="py-24 bg-slate-950 border-y border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5">
            <h2 className="text-4xl md:text-5xl font-black font-display mb-8">Why Choose <br /><span className="text-cyan-400">Creatronyx Studio?</span></h2>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              We aren't just another agency. We are your partners in growth, focusing on premium quality that converts viewers into fans.
            </p>
            <div className="p-8 bg-slate-900 rounded-3xl border border-slate-800">
              <p className="text-slate-100 italic mb-4">"Their attention to detail and ability to understand the brand voice is unparalleled."</p>
              <p className="text-sm font-bold text-cyan-400">— Project Outcome Review</p>
            </div>
          </div>
          
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            {reasons.map((reason, idx) => (
              <div key={idx} className="p-6 bg-slate-900/50 rounded-2xl border border-slate-800 hover:border-cyan-500/20 transition-all">
                <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center mb-4">
                  {reason.icon}
                </div>
                <h4 className="text-lg font-bold mb-2">{reason.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{reason.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
