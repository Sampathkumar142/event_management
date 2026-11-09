import React from 'react';
import { CONTENT, CONTACT_INFO } from '../data/content';
import { Check, ArrowRight, MessageCircle, UtensilsCrossed } from 'lucide-react';

export default function Services({ lang, onSelectService }) {
  const section = CONTENT[lang].servicesSection;

  return (
    <section id="services" className="py-16 sm:py-20 bg-[#12080c] border-b border-amber-500/20">
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

        {/* 6 Services Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {section.items.map((svc) => (
            <div
              key={svc.id}
              className={`rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 group ${
                svc.id === 'catering'
                  ? 'bg-[#29101d] border-2 border-amber-400/80 shadow-lg shadow-amber-500/10'
                  : 'godavari-card'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                    {svc.title}
                  </h3>
                  {svc.id === 'catering' && (
                    <span className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-400 shrink-0">
                      <UtensilsCrossed className="w-4 h-4" />
                    </span>
                  )}
                </div>

                <div className="mt-1.5 text-xs font-bold text-amber-400">
                  {svc.startingPrice}
                </div>

                <p className="mt-3 text-xs sm:text-sm text-[#cac0b0] leading-relaxed">
                  {svc.desc}
                </p>

                {/* Features List */}
                <div className="mt-4 pt-4 border-t border-white/10 space-y-2">
                  {svc.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-[#e5dcd0]">
                      <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 pt-4 border-t border-amber-500/20 flex items-center justify-between gap-3">
                <button
                  onClick={() => onSelectService(svc.title)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 transition-colors cursor-pointer"
                >
                  <span>{lang === 'te' ? 'వివరాలు పొందండి' : 'Get Quote'}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>

                <a
                  href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(lang === 'te' ? `నమస్తే సురేష్ ఈవెంట్స్! "${svc.title}" గురించి ఫోటోలు, కొటేషన్ కావాలి.` : `Hello Suresh Events! Please send quote and photos for "${svc.title}".`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-900 transition-colors"
                  title="WhatsApp"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
