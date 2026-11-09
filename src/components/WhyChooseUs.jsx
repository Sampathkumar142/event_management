import React from 'react';
import { CONTENT, CONTACT_INFO } from '../data/content';
import { Clock, Flower2, HeartHandshake, BadgePercent, Phone } from 'lucide-react';

export default function WhyChooseUs({ lang, onOpenBooking }) {
  const section = CONTENT[lang].whyUsSection;
  const icons = [Clock, Flower2, HeartHandshake, BadgePercent];

  return (
    <section id="why-us" className="py-16 sm:py-20 bg-[#170911] border-b border-amber-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/15 text-amber-300 border border-amber-500/30">
            {section.tag}
          </span>
          <h2 className="mt-3 text-2xl sm:text-4xl font-extrabold text-white">
            {section.title}
          </h2>
        </div>

        {/* 4 Points Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {section.points.map((pt, idx) => {
            const Icon = icons[idx];
            return (
              <div 
                key={idx}
                className="godavari-card rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-500/15 border border-amber-500/40 flex items-center justify-center text-amber-400 mb-4 shadow-sm">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-white mb-2">
                  {pt.title}
                </h3>
                <p className="text-xs text-[#cfc2b2] leading-relaxed">
                  {pt.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Call Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-[#3b0d1e] via-[#4d1027] to-[#3b0d1e] border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-base sm:text-lg font-bold text-white">
              {lang === 'te' ? 'మీ తేదీ ఖాళీగా ఉందో ఇప్పుడే తెలుసుకోండి!' : 'Check if your auspicious date is available!'}
            </h4>
            <p className="text-xs text-[#ded4c5] mt-0.5">
              {lang === 'te' ? 'వేమగిరి (రాజమండ్రి) & చెల్లూరు ఆఫీసులు ప్రతిరోజూ ఉదయం 8 నుండి రాత్రి 10 వరకు అందుబాటులో ఉంటాయి.' : 'Vemagiri (Rajahmundry) & Chelluru offices open daily 8 AM to 10 PM.'}
            </p>
          </div>

          <a
            href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, '')}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-bold bg-amber-400 hover:bg-amber-300 text-[#2a0812] shadow-md transition-all whitespace-nowrap active:scale-95 cursor-pointer"
          >
            <Phone className="w-3.5 h-3.5 fill-current" />
            <span>{CONTACT_INFO.phoneDisplay}</span>
          </a>
        </div>

      </div>
    </section>
  );
}
