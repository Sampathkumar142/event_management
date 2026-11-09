import React from 'react';
import { CONTACT_INFO, TOWNS_SERVED, CONTENT } from '../data/content';
import { Phone, MapPin, ArrowUp, Heart } from 'lucide-react';

export default function Footer({ lang, onOpenBooking }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0b0306] text-[#ded4c5] pt-14 pb-10 border-t-2 border-amber-500/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-3">
            <a href="#" className="inline-block">
              <img 
                src={`${import.meta.env.BASE_URL}suresh-events-logo.png`} 
                alt="Suresh Events Logo" 
                className="h-14 sm:h-16 w-auto object-contain drop-shadow-[0_2px_15px_rgba(245,158,11,0.25)]"
              />
            </a>
            <p className="text-xs text-[#b8ab9a] leading-relaxed max-w-sm">
              {lang === 'te' 
                ? 'తూర్పు గోదావరి జిల్లా వ్యాప్తంగా రాజమండ్రి, కాకినాడ, అమలాపురం, మండపేటలలో వివాహాలు, పసుపు వేడుకలు, లంగా వోణి, బారసాల మరియు కాకినాడ వెల్లంగి చెఫ్స్ వెజ్ & సిటీ టాప్ చెఫ్స్ నాన్-వెజ్ క్యాటరింగ్ నిర్వహించే నెం.1 ఈవెంట్ మేనేజ్మెంట్.' 
                : 'Top-rated Event Management, Wedding Decorators & Authentic Food Catering serving Rajahmundry, Kakinada, Amalapuram, Mandapeta and all areas in East Godavari, Andhra Pradesh.'}
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, '')}`}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold bg-amber-400 text-[#2a0812] hover:bg-amber-300 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 fill-current" />
                <span>{CONTACT_INFO.phoneDisplay}</span>
              </a>

              <a
                href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(lang === 'te' ? 'నమస్తే సురేష్ ఈవెంట్స్!' : 'Hello Suresh Events!')}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-emerald-300 bg-emerald-950/70 border border-emerald-500/30"
              >
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300">
              {lang === 'te' ? 'ముఖ్య సర్వీసులు' : 'Key Services'}
            </h4>
            <ul className="space-y-1.5 text-xs text-[#cfc2b2]">
              <li><a href="#services" className="hover:text-amber-400">{lang === 'te' ? 'తెలుగు పెళ్లి మండపాలు' : 'Telugu Wedding Mandapam'}</a></li>
              <li><a href="#services" className="hover:text-amber-400">{lang === 'te' ? 'పసుపు / హల్దీ డెకరేషన్' : 'Haldi & Pasupu Decor'}</a></li>
              <li><a href="#services" className="hover:text-amber-400">{lang === 'te' ? 'హాఫ్ శారీ (లంగా వోణి)' : 'Half Saree & Dhothi Functions'}</a></li>
              <li><a href="#services" className="hover:text-amber-400">{lang === 'te' ? 'పూల ఉయ్యాల & బారసాల' : 'Cradle Ceremony / Barasala'}</a></li>
              <li><a href="#services" className="hover:text-amber-400 text-amber-300">{lang === 'te' ? 'గోదావరి రుచులు క్యాటరింగ్' : 'Godavari Ruchulu Catering'}</a></li>
              <li><a href="#packages" className="hover:text-amber-400 text-amber-300">{lang === 'te' ? 'బడ్జెట్ ప్యాకేజీలు' : 'Budget Packages'}</a></li>
            </ul>
          </div>

          {/* Local Offices */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300">
              {lang === 'te' ? 'మా ఆఫీస్ అడ్రస్ లు' : 'Our Office Addresses'}
            </h4>
            
            <div className="text-xs space-y-3 text-[#cfc2b2]">
              {/* Main Office */}
              <div className="flex items-start gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">
                    {lang === 'te' ? 'ప్రధాన ఆఫీస్ (వేమగిరి - రాజమండ్రి):' : 'Main Office (Vemagiri - Rajahmundry):'}
                  </span>
                  <span className="leading-relaxed">
                    {lang === 'te' ? CONTACT_INFO.mainOfficeTe : CONTACT_INFO.mainOfficeEn}
                  </span>
                </div>
              </div>

              {/* Branch Office */}
              <div className="flex items-start gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">
                    {lang === 'te' ? 'బ్రాంచ్ ఆఫీస్ (చెల్లూరు - రాయవరం):' : 'Branch Office (Chelluru - Rayavaram):'}
                  </span>
                  <span className="leading-relaxed">
                    {lang === 'te' ? CONTACT_INFO.branchOfficeTe : CONTACT_INFO.branchOfficeEn}
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* SEO Towns Footer Tag Cloud */}
        <div className="py-6 border-b border-white/10">
          <p className="text-[11px] text-amber-400/90 font-bold mb-2">
            {lang === 'te' ? 'తూర్పు గోదావరి సర్వీస్ ప్రాంతాలు:' : 'East Godavari Service Locations:'}
          </p>
          <div className="flex flex-wrap gap-x-3 gap-y-1 text-[11px] text-[#a89d8f]">
            {TOWNS_SERVED.map((t, i) => (
              <span key={i} className="hover:text-white">
                {lang === 'te' ? t.nameTe : t.nameEn} •
              </span>
            ))}
            <span>ఆత్రేయపురం (Atreyapuram) •</span>
            <span>అనపర్తి (Anaparthi) •</span>
            <span>పిఠాపురం (Pithapuram)</span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#8c8274]">
          <div>
            © {new Date().getFullYear()} {CONTACT_INFO.name}. {lang === 'te' ? 'సర్వ హక్కులూ ప్రత్యేకించబడ్డాయి.' : 'All Rights Reserved.'}
          </div>

          <div className="flex items-center gap-1">
            <span>{lang === 'te' ? 'గోదావరి ఆత్మీయతతో' : 'Made with love in East Godavari'}</span>
            <span className="text-amber-400">🪷</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 text-amber-400 hover:text-white transition-colors cursor-pointer"
          >
            <span>{lang === 'te' ? 'పైకి వెళ్లండి' : 'Back to top'}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
