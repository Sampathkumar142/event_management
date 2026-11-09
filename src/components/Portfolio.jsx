import React, { useState, useEffect } from 'react';
import { GALLERY_ITEMS, CONTENT, CONTACT_INFO } from '../data/content';
import { MapPin, MessageCircle, X, Sparkles, ZoomIn, Play, Video } from 'lucide-react';

export default function Portfolio({ lang, onSelectWork }) {
  const section = CONTENT[lang].gallerySection;
  const [filter, setFilter] = useState('All');
  const [activeItem, setActiveItem] = useState(null);

  const tags = ['All', 'Videos', 'Wedding', 'Reception', 'Haldi', 'Birthday', 'Catering'];

  const filteredItems = filter === 'All' 
    ? GALLERY_ITEMS 
    : filter === 'Videos'
    ? GALLERY_ITEMS.filter(item => item.isVideo)
    : GALLERY_ITEMS.filter(item => item.tag === filter);

  // Close modal on ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setActiveItem(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section id="portfolio" className="py-14 sm:py-20 bg-[#12080c] border-b border-amber-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/15 text-amber-300 border border-amber-500/30 flex items-center justify-center gap-1.5 w-max mx-auto">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>{section.tag}</span>
          </span>
          <h2 className="mt-3 text-2xl sm:text-4xl font-extrabold text-white">
            {section.title}
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#ded4c5] leading-relaxed">
            {section.sub}
          </p>
        </div>

        {/* Filter Pills - Fully Mobile Responsive */}
        <div className="mt-7 sm:mt-8 flex flex-wrap items-center justify-center gap-2 px-1">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className={`px-3.5 py-2 rounded-full text-xs font-medium transition-all cursor-pointer flex items-center gap-1.5 active:scale-95 ${
                filter === tag
                  ? 'bg-amber-400 text-[#2a0812] font-bold shadow-md shadow-amber-500/20'
                  : 'bg-[#220d18] text-[#ded4c5] hover:text-white border border-amber-500/25 hover:border-amber-400/50'
              }`}
            >
              {tag === 'Videos' && <Video className="w-3.5 h-3.5 shrink-0" />}
              <span>
                {tag === 'All' && (lang === 'te' ? 'అన్నీ (All)' : 'All')}
                {tag === 'Videos' && (lang === 'te' ? 'వీడియోలు (Videos)' : 'Videos')}
                {tag === 'Wedding' && (lang === 'te' ? 'పెళ్లి మండపాలు' : 'Weddings')}
                {tag === 'Reception' && (lang === 'te' ? 'రిసెప్షన్ స్టేజ్' : 'Reception')}
                {tag === 'Birthday' && (lang === 'te' ? 'బర్త్‌డే ఈవెంట్స్' : 'Birthdays')}
                {tag === 'Haldi' && (lang === 'te' ? 'పసుపు / హల్దీ' : 'Haldi')}
                {tag === 'Catering' && (lang === 'te' ? 'క్యాటరింగ్' : 'Catering')}
              </span>
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={idx}
              className={`godavari-card rounded-2xl overflow-hidden group transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 ${
                item.isVideo 
                  ? 'border-amber-500/50 bg-[#250d1a] shadow-lg shadow-amber-500/10' 
                  : item.badge 
                  ? 'border-amber-400/60 shadow-lg' 
                  : ''
              }`}
            >
              {/* Media Preview Box */}
              <div 
                className="relative h-60 sm:h-72 overflow-hidden bg-black cursor-pointer"
                onClick={() => setActiveItem(item)}
              >
                <img
                  src={item.image}
                  alt={lang === 'te' ? item.titleTe : item.titleEn}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-95 group-hover:brightness-100"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#14060c] via-transparent to-black/20" />
                
                {/* Badges Bar */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                  {item.isVideo ? (
                    <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-rose-600 text-white shadow-md animate-pulse">
                      <Play className="w-3 h-3 fill-current" />
                      <span>{lang === 'te' ? 'లైవ్ వీడియో' : 'Live Video'}</span>
                    </span>
                  ) : item.badge ? (
                    <span className="flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-amber-400 text-[#2a0812] shadow-md">
                      <Sparkles className="w-3 h-3 fill-current" />
                      <span>{lang === 'te' ? 'రియల్ వర్క్' : 'Real Setup'}</span>
                    </span>
                  ) : <span />}

                  <div className="flex items-center gap-1.5">
                    {item.duration && (
                      <span className="px-2 py-0.5 rounded-md text-[10px] font-mono font-bold bg-black/75 text-amber-300 border border-white/20">
                        {item.duration}
                      </span>
                    )}
                    <span className="flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#310c1a]/90 text-amber-300 border border-amber-500/40 backdrop-blur-sm">
                      <MapPin className="w-3 h-3" />
                      <span>{item.location}</span>
                    </span>
                  </div>
                </div>

                {/* Central Play Icon Overlay for Videos */}
                {item.isVideo && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-amber-400/90 text-[#2a0812] flex items-center justify-center shadow-[0_0_25px_rgba(245,158,11,0.6)] group-hover:scale-115 transition-transform">
                      <Play className="w-6 h-6 sm:w-7 sm:h-7 fill-current ml-1" />
                    </div>
                  </div>
                )}

                {/* Hover / Tap Action Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]">
                  <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold bg-amber-400 text-[#2a0812] shadow-lg">
                    {item.isVideo ? (
                      <>
                        <Play className="w-4 h-4 fill-current" />
                        <span>{lang === 'te' ? 'వీడియో చూడండి' : 'Watch Video'}</span>
                      </>
                    ) : (
                      <>
                        <ZoomIn className="w-4 h-4" />
                        <span>{lang === 'te' ? 'పెద్దగా చూడండి' : 'View Photo'}</span>
                      </>
                    )}
                  </span>
                </div>
              </div>

              {/* Title & Action */}
              <div className="p-3.5 sm:p-4 flex items-center justify-between gap-2.5">
                <h3 className="text-xs sm:text-sm font-bold text-white group-hover:text-amber-400 transition-colors line-clamp-2 leading-snug flex-1">
                  {lang === 'te' ? item.titleTe : item.titleEn}
                </h3>

                <button
                  onClick={() => onSelectWork(lang === 'te' ? item.titleTe : item.titleEn)}
                  className="px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-lg text-xs font-semibold bg-amber-400/15 hover:bg-amber-400 text-amber-300 hover:text-[#2a0812] border border-amber-500/30 transition-all shrink-0 cursor-pointer active:scale-95"
                >
                  {lang === 'te' ? 'ఇదే కావాలి' : 'Select'}
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Lightbox / Video Modal - Fully Mobile Optimized */}
      {activeItem && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-fade-in overflow-y-auto"
          onClick={() => setActiveItem(null)}
        >
          <div 
            className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto bg-[#1a0913] border-2 border-amber-500/50 rounded-2xl shadow-2xl p-3 sm:p-6 my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveItem(null)}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 p-2 rounded-full bg-black/80 text-amber-300 hover:text-white hover:bg-amber-600 transition-colors cursor-pointer"
              aria-label="Close preview"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Media Container (Video or Photo) */}
            <div className="relative rounded-xl overflow-hidden bg-black max-h-[55vh] sm:max-h-[68vh] flex items-center justify-center">
              {activeItem.isVideo ? (
                <video
                  src={activeItem.video}
                  poster={activeItem.image}
                  controls
                  autoPlay
                  playsInline
                  className="max-h-[54vh] sm:max-h-[66vh] w-auto mx-auto rounded-lg shadow-2xl"
                />
              ) : (
                <img
                  src={activeItem.image}
                  alt={lang === 'te' ? activeItem.titleTe : activeItem.titleEn}
                  className="max-h-[54vh] sm:max-h-[66vh] w-auto mx-auto object-contain"
                />
              )}
            </div>

            {/* Details & Responsive Action Buttons */}
            <div className="mt-3.5 sm:mt-4 pt-3 border-t border-amber-500/25 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <span className="flex items-center gap-1 text-xs font-semibold text-amber-400">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{activeItem.location}</span>
                  </span>
                  {activeItem.isVideo ? (
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-rose-600 text-white">
                      {lang === 'te' ? 'లైవ్ వీడియో' : 'Live Video'}
                    </span>
                  ) : activeItem.badge ? (
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-400 text-black">
                      {lang === 'te' ? 'రియల్ సెటప్' : 'Real Setup'}
                    </span>
                  ) : null}
                </div>
                <h3 className="text-sm sm:text-lg font-bold text-white mt-1 leading-snug">
                  {lang === 'te' ? activeItem.titleTe : activeItem.titleEn}
                </h3>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-2.5 w-full sm:w-auto shrink-0">
                <a
                  href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(
                    lang === 'te' 
                      ? `నమస్తే సురేష్ ఈవెంట్స్! గ్యాలరీలోని ఈ ${activeItem.isVideo ? 'వీడియో' : 'ఫోటో'} సెటప్ ("${activeItem.titleTe}") గురించి కొటేషన్ కావాలి.` 
                      : `Hello Suresh Events! I want price details for this ${activeItem.isVideo ? 'video' : 'photo'} setup: "${activeItem.titleEn}".`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold bg-emerald-500 hover:bg-emerald-400 text-black transition-colors"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>{lang === 'te' ? 'ఇలాంటిదే కావాలి (WhatsApp)' : 'Inquire on WhatsApp'}</span>
                </a>

                <button
                  onClick={() => {
                    const title = lang === 'te' ? activeItem.titleTe : activeItem.titleEn;
                    setActiveItem(null);
                    onSelectWork(title);
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-2.5 rounded-full text-xs font-bold bg-amber-400 hover:bg-amber-300 text-[#2a0812] transition-colors cursor-pointer"
                >
                  <span>{lang === 'te' ? 'బుకింగ్ ఫారమ్' : 'Book Setup'}</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
