import React from 'react';
import { TESTIMONIALS_DATA, CONTENT } from '../data/content';
import { Star, MapPin, Quote } from 'lucide-react';

export default function Testimonials({ lang }) {
  return (
    <section className="py-16 sm:py-20 bg-[#12080c] border-b border-amber-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/15 text-amber-300 border border-amber-500/30">
            {lang === 'te' ? 'కస్టమర్ల మాటల్లో' : 'Customer Reviews'}
          </span>
          <h2 className="mt-3 text-2xl sm:text-4xl font-extrabold text-white">
            {lang === 'te' ? 'గోదావరి ప్రజల అభిప్రాయాలు' : 'Trusted by Families Across East Godavari'}
          </h2>
        </div>

        {/* 3 Review Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS_DATA.map((rev, idx) => (
            <div
              key={idx}
              className="godavari-card rounded-2xl p-6 flex flex-col justify-between"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <Quote className="w-6 h-6 text-amber-400/30 mb-2" />

                <p className="text-xs sm:text-sm text-[#ded4c5] italic leading-relaxed">
                  "{lang === 'te' ? rev.reviewTe : rev.reviewEn}"
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-white/10">
                <h4 className="text-sm font-bold text-white">
                  {lang === 'te' ? rev.nameTe : rev.nameEn}
                </h4>
                <div className="flex items-center gap-1 text-[11px] text-amber-400 mt-0.5">
                  <MapPin className="w-3 h-3 shrink-0" />
                  <span>{lang === 'te' ? rev.townTe : rev.townEn}</span>
                </div>
                <div className="text-[11px] text-[#a89d8f] mt-0.5">
                  {lang === 'te' ? rev.eventTe : rev.eventEn}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
