import React from 'react';
import { CONTACT_INFO, CONTENT } from '../data/content';
import { Phone, MessageCircle, Star, CheckCircle2, MapPin } from 'lucide-react';

export default function Hero({ lang, onOpenBooking }) {
  const t = CONTENT[lang].hero;

  return (
    <section className="relative py-12 sm:py-20 bg-gradient-to-b from-[#1b0710] via-[#240a15] to-[#12080c] border-b border-amber-500/20 overflow-hidden">
      
      {/* Background Subtle Floral Watermark Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Official Brand Logo */}
        <div className="mb-4 sm:mb-6 flex justify-center">
          <img
            src={`${import.meta.env.BASE_URL}suresh-events-logo.png`}
            alt="Suresh Events - East Godavari"
            className="h-20 sm:h-32 md:h-36 w-auto object-contain drop-shadow-[0_4px_30px_rgba(245,158,11,0.35)] hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Local Trust Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/40 text-amber-300 text-xs sm:text-sm font-semibold mb-5 sm:mb-6 shadow-sm">
          <span>✨</span>
          <span>{t.badge}</span>
          <span className="hidden sm:inline">• Rajahmundry & Kakinada</span>
        </div>

        {/* SEO H1 Heading */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-snug sm:leading-tight">
          {t.title} <span className="gold-gradient-text">{t.titleHighlight}</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-4 sm:mt-5 text-xs sm:text-base md:text-lg text-[#ded4c5] max-w-2xl mx-auto leading-relaxed">
          {t.sub}
        </p>

        {/* Quick Action CTAs */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <a
            href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, '')}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold text-[#2a0812] bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:from-amber-300 hover:to-yellow-300 shadow-lg shadow-amber-500/20 hover:scale-105 active:scale-95 transition-all"
          >
            <Phone className="w-4 h-4 fill-current" />
            <span>{t.ctaPrimary} ({CONTACT_INFO.phoneDisplay})</span>
          </a>

          <a
            href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(lang === 'te' ? 'నమస్తే సురేష్ ఈవెంట్స్! మా ఇంట్లో ఫంక్షన్ కోసం ఫోటోలు మరియు కొటేషన్ పంపండి.' : 'Hello Suresh Events! Please send photos and price quote for my upcoming event.')}`}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-emerald-300 bg-emerald-950/80 border border-emerald-500/50 hover:bg-emerald-900 transition-colors shadow-md"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>WhatsApp Quotation</span>
          </a>

          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-medium text-amber-200 hover:text-white border border-amber-500/30 hover:border-amber-400 transition-colors cursor-pointer"
          >
            <span>{t.ctaSecondary}</span>
            <span>↓</span>
          </button>
        </div>

        {/* 4 Clean Stats */}
        <div className="mt-12 max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 text-center">
          <div className="godavari-card p-4 rounded-xl">
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-400">{CONTACT_INFO.eventsCompleted}</div>
            <div className="text-xs text-[#cfc2b2] mt-0.5">{t.stat1Label}</div>
          </div>
          <div className="godavari-card p-4 rounded-xl">
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-400">{CONTACT_INFO.experienceYears}</div>
            <div className="text-xs text-[#cfc2b2] mt-0.5">{t.stat2Label}</div>
          </div>
          <div className="godavari-card p-4 rounded-xl">
            <div className="flex items-center justify-center gap-1 text-2xl sm:text-3xl font-extrabold text-amber-400">
              <span>{CONTACT_INFO.rating}</span>
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            </div>
            <div className="text-xs text-[#cfc2b2] mt-0.5">{t.stat3Label}</div>
          </div>
          <div className="godavari-card p-4 rounded-xl">
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-400">10+</div>
            <div className="text-xs text-[#cfc2b2] mt-0.5">{t.stat4Label}</div>
          </div>
        </div>

      </div>
    </section>
  );
}
