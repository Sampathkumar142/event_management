import React from 'react';
import { CONTENT, CONTACT_INFO } from '../data/content';
import { Check, Phone, MessageCircle, Star, UtensilsCrossed } from 'lucide-react';

export default function Packages({ lang, onSelectPackage }) {
  const section = CONTENT[lang].packagesSection;

  return (
    <section id="packages" className="py-16 sm:py-20 bg-[#170911] border-b border-amber-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/15 text-amber-300 border border-amber-500/30">
            {section.tag}
          </span>
          <h2 className="mt-3 text-2xl sm:text-4xl font-extrabold text-white">
            {section.title}
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#ded4c5] leading-relaxed">
            {section.sub}
          </p>
        </div>

        {/* 4 Package Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {section.plans.map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 relative ${
                plan.featured 
                  ? 'bg-[#310c1a] border-2 border-amber-400 shadow-xl shadow-amber-500/10 md:-translate-y-2' 
                  : plan.cateringHighlight
                  ? 'bg-[#29101d] border-2 border-amber-500/50 shadow-lg'
                  : 'godavari-card border border-amber-500/25'
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-amber-400 text-[#2a0812] shadow-md flex items-center gap-1">
                    <Star className="w-3 h-3 fill-current" />
                    <span>{section.popularBadge}</span>
                  </span>
                </div>
              )}

              {plan.cateringHighlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-emerald-500 text-black shadow-md flex items-center gap-1 whitespace-nowrap">
                    <UtensilsCrossed className="w-3 h-3" />
                    <span>{lang === 'te' ? 'వెల్లంగి & సిటీ చెఫ్స్' : 'Vellangi & City Chefs'}</span>
                  </span>
                </div>
              )}

              <div>
                <h3 className="text-lg font-bold text-white">
                  {plan.name}
                </h3>
                <p className="text-xs text-[#cfc2b2] mt-1 leading-snug">
                  {plan.target}
                </p>

                <div className="mt-4 pt-4 border-t border-white/10">
                  <span className="text-xs text-amber-300/80 block">
                    {lang === 'te' ? 'అంచనా ధర' : 'Estimated Price'}
                  </span>
                  <div className="text-xl sm:text-2xl font-extrabold text-amber-400 mt-0.5">
                    {plan.price}
                  </div>
                  {plan.priceUnit && (
                    <span className="text-[11px] text-[#ded4c5] block mt-0.5">
                      ({plan.priceUnit})
                    </span>
                  )}
                </div>

                {/* Features List */}
                <div className="mt-5 space-y-2.5">
                  {plan.includes.map((inc, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-[#ded4c5]">
                      <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span className="leading-snug">{inc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-6 pt-4 border-t border-white/10 flex flex-col gap-2">
                <button
                  onClick={() => onSelectPackage(plan.name)}
                  className={`w-full py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    plan.featured 
                      ? 'bg-amber-400 hover:bg-amber-300 text-[#2a0812] shadow-md' 
                      : plan.cateringHighlight
                      ? 'bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold'
                      : 'bg-white/10 hover:bg-white/20 text-white'
                  }`}
                >
                  {lang === 'te' ? 'ఈ ప్యాకేజ్ ఎంచుకోండి' : 'Book This Package'}
                </button>

                <a
                  href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(lang === 'te' ? `నమస్తే సురేష్ ఈవెంట్స్! "${plan.name}" ప్యాకేజ్ గురించి మాట్లాడాలి.` : `Hello Suresh Events! I am interested in "${plan.name}" package.`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-center gap-1.5 py-1.5 rounded-full text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp Enquiry</span>
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
