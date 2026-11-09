import React, { useState } from 'react';
import { CONTACT_INFO, CONTENT } from '../data/content';
import { 
  Phone, 
  MessageCircle, 
  Menu, 
  X, 
  Languages,
  MapPin
} from 'lucide-react';

export default function Navbar({ lang, setLang, onOpenBooking }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = CONTENT[lang];

  const navLinks = [
    { name: t.services, href: '#services' },
    { name: t.packages, href: '#packages' },
    { name: t.portfolio, href: '#portfolio' },
    { name: t.whyUs, href: '#why-us' },
    { name: t.contact, href: '#contact' }
  ];

  const toggleLanguage = () => {
    setLang(lang === 'te' ? 'en' : 'te');
  };

  return (
    <>
      {/* Top Local Area & Contact Strip */}
      <div className="bg-[#480c19] text-[#fef08a] text-xs py-1.5 px-4 border-b border-amber-500/25">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 text-[11px] sm:text-xs">
            <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span className="font-medium">
              {lang === 'te' 
                ? 'తూర్పు గోదావరి: రాజమండ్రి • కాకినాడ • అమలాపురం • మండపేట • రావులపాలెం' 
                : 'Serving East Godavari: Rajahmundry • Kakinada • Amalapuram • Mandapeta • Ravulapalem'}
            </span>
          </div>
          
          <div className="flex items-center gap-4 text-[11px] sm:text-xs">
            <a 
              href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, '')}`} 
              className="flex items-center gap-1 font-bold text-white hover:text-amber-300 transition-colors"
            >
              <Phone className="w-3 h-3 text-amber-400" />
              <span>{CONTACT_INFO.phoneDisplay}</span>
            </a>
            
            {/* Quick Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-400 text-[#3d0914] font-bold text-xs hover:bg-amber-300 transition-colors cursor-pointer shadow-sm"
              title="Switch Language"
            >
              <Languages className="w-3 h-3" />
              <span>{t.switchLabel}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header className="sticky top-0 z-50 bg-[#14060c]/95 backdrop-blur-md border-b border-amber-500/20 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Official Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <img 
              src={`${import.meta.env.BASE_URL}suresh-events-logo.png`} 
              alt="Suresh Events Logo" 
              className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105 drop-shadow-[0_2px_10px_rgba(245,158,11,0.25)]"
            />
            <div className="hidden sm:block border-l border-amber-500/30 pl-2.5">
              <span className="block text-xs font-bold text-amber-400 leading-tight">
                {lang === 'te' ? 'సురేష్ ఈవెంట్స్' : 'Suresh Events'}
              </span>
              <span className="block text-[10px] text-amber-300/80 font-medium">
                {lang === 'te' ? 'తూర్పు గోదావరి' : 'East Godavari'}
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-[#f0e6dc] hover:text-amber-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Quick Actions */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(lang === 'te' ? 'నమస్తే సురేష్ ఈవెంట్స్, మా ఇంట్లో ఫంక్షన్ కోసం వివరాలు కావాలి.' : 'Hello Suresh Events, I need event management details.')}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold text-emerald-300 bg-emerald-950/70 border border-emerald-500/40 hover:bg-emerald-900 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>{t.whatsappChat}</span>
            </a>

            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold text-[#2a0812] bg-gradient-to-r from-amber-400 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 shadow-md transition-all cursor-pointer"
            >
              <Phone className="w-3 h-3" />
              <span>{t.bookEvent}</span>
            </button>
          </div>

          {/* Mobile Menu & Language Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleLanguage}
              className="px-2 py-1 rounded bg-amber-400 text-[#3d0914] font-bold text-xs"
            >
              {t.switchLabel}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-lg text-amber-400 border border-amber-500/30"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#18080f] border-b border-amber-500/30 px-5 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm font-medium py-1.5 text-white hover:text-amber-400"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
              <a
                href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, '')}`}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-full text-xs font-bold bg-amber-400 text-[#2a0812]"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{t.callNow}: {CONTACT_INFO.phoneDisplay}</span>
              </a>
              <a
                href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(lang === 'te' ? 'నమస్తే సురేష్ ఈవెంట్స్!' : 'Hello Suresh Events!')}`}
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-full text-xs font-semibold bg-emerald-900/80 text-emerald-300 border border-emerald-500/40"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>{t.whatsappChat}</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
