import React, { useState, useEffect } from 'react';
import { CONTENT, CONTACT_INFO } from '../data/content';
import { MessageCircle, Send, CheckCircle2, X, PhoneCall } from 'lucide-react';

export default function ContactForm({ 
  lang, 
  isOpenAsModal, 
  onClose, 
  prefillItem 
}) {
  const t = CONTENT[lang].contactSection;

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    town: 'Rajahmundry',
    eventType: 'Telugu Wedding (పెళ్లి)',
    date: '',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [lastWaUrl, setLastWaUrl] = useState('');

  useEffect(() => {
    if (prefillItem) {
      setFormData(prev => ({ ...prev, notes: `Inquiry regarding: ${prefillItem}` }));
    }
  }, [prefillItem]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const buildWhatsAppMessage = () => {
    const formattedDate = formData.date ? formData.date : (lang === 'te' ? 'కన్ఫర్మ్ కాలేదు / అనుకూలమైన తేదీ' : 'Flexible Date');
    const formattedNotes = formData.notes ? formData.notes : (lang === 'te' ? 'దయచేసి కొటేషన్ మరియు ఫోటోలు పంపగలరు' : 'Please send quotation and photos');

    if (lang === 'te') {
      return `నమస్తే సురేష్ ఈవెంట్స్! 🙏\n\nమా ఇంట్లో శుభకార్యం కోసం వివరాలు:\n• పేరు: ${formData.name}\n• ఫోన్: ${formData.phone}\n• ప్రాంతం/ఊరు: ${formData.town}\n• ఈవెంట్: ${formData.eventType}\n• తేదీ: ${formattedDate}\n• బడ్జెట్ / వివరాలు: ${formattedNotes}\n\nదయచేసి త్వరగా కొటేషన్ పంపగలరు.`;
    }
    return `Hello Suresh Events! 🙏\n\nEvent Inquiry Details:\n• Name: ${formData.name}\n• Phone: ${formData.phone}\n• Town/Area: ${formData.town}\n• Event: ${formData.eventType}\n• Date: ${formattedDate}\n• Requirements/Budget: ${formattedNotes}\n\nPlease share price quote and photo options.`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const msg = buildWhatsAppMessage();
    const waUrl = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(msg)}`;
    setLastWaUrl(waUrl);

    // 1. Save lead to local storage backup so no data is lost
    try {
      const existing = JSON.parse(localStorage.getItem('suresh_events_leads') || '[]');
      existing.unshift({
        id: Date.now(),
        dateSubmitted: new Date().toLocaleString(),
        ...formData
      });
      localStorage.setItem('suresh_events_leads', JSON.stringify(existing.slice(0, 50)));
    } catch (err) {
      console.warn('Storage save error:', err);
    }

    setSubmitted(true);

    // 2. Direct automatic launch of WhatsApp
    // Works seamlessly on mobile & desktop
    window.open(waUrl, '_blank');
  };

  const formContent = (
    <div className="godavari-card rounded-2xl p-4 sm:p-7 relative bg-[#1c0a13] border-2 border-amber-500/40 shadow-2xl w-full">
      {isOpenAsModal && (
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2 rounded-full bg-black/70 text-amber-300 hover:text-white transition-colors cursor-pointer z-10"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>
      )}

      {submitted ? (
        <div className="text-center py-6 sm:py-8 space-y-4">
          <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto rounded-full bg-emerald-950/90 border-2 border-emerald-400 flex items-center justify-center text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.3)] animate-bounce">
            <CheckCircle2 className="w-8 h-8 sm:w-9 sm:h-9" />
          </div>
          
          <h3 className="text-xl sm:text-2xl font-extrabold text-white">
            {lang === 'te' ? 'వివరాలు నమోదయ్యాయి! 🎉' : 'Inquiry Submitted! 🎉'}
          </h3>

          <p className="text-xs sm:text-sm text-amber-300 max-w-md mx-auto leading-relaxed">
            {lang === 'te' 
              ? 'మీ వివరాలు నేరుగా సురేష్ గారి వాట్సాప్‌కి పంపబడ్డాయి. ఒకవేళ వాట్సాప్ ఓపెన్ కాకపోతే క్రింది బటన్ నొక్కండి:' 
              : 'Your inquiry has been formatted for WhatsApp. If WhatsApp did not open automatically, tap below:'}
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={lastWaUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold bg-emerald-500 hover:bg-emerald-400 text-black shadow-lg transition-all active:scale-95 cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>{lang === 'te' ? 'వాట్సాప్‌లో పంపండి (Open WhatsApp)' : 'Send via WhatsApp'}</span>
            </a>

            <a
              href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, '')}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-semibold bg-amber-400/20 hover:bg-amber-400/30 text-amber-300 border border-amber-500/40 transition-colors"
            >
              <PhoneCall className="w-4 h-4" />
              <span>{lang === 'te' ? 'డైరెక్ట్ కాల్ చేయండి' : 'Call Directly'}</span>
            </a>
          </div>

          {isOpenAsModal && (
            <div className="pt-2">
              <button
                onClick={onClose}
                className="text-xs text-[#cfc2b2] hover:text-white underline cursor-pointer py-1"
              >
                {lang === 'te' ? 'విండో మూసివేయండి' : 'Close window'}
              </button>
            </div>
          )}
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="text-center mb-5 sm:mb-6">
            <span className="px-3 py-1 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider bg-amber-500/15 text-amber-300 border border-amber-500/30 inline-block">
              {t.tag}
            </span>
            <h3 className="mt-2 text-xl sm:text-2xl font-extrabold text-white">
              {t.title}
            </h3>
            <p className="mt-1 text-xs text-[#ded4c5] max-w-md mx-auto">
              {t.sub}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div>
              <label className="block text-xs font-semibold text-amber-200 mb-1">
                {t.formName} *
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder={lang === 'te' ? 'మీ పూర్తి పేరు' : 'e.g. Ramesh Kumar'}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#2a101d] border border-amber-500/30 text-white text-base sm:text-xs placeholder-white/30 focus:outline-none focus:border-amber-400 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-amber-200 mb-1">
                {t.formPhone} *
              </label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="98480 12345"
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#2a101d] border border-amber-500/30 text-white text-base sm:text-xs placeholder-white/30 focus:outline-none focus:border-amber-400 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-amber-200 mb-1">
                {t.formTown} *
              </label>
              <select
                name="town"
                value={formData.town}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#2a101d] border border-amber-500/30 text-white text-base sm:text-xs focus:outline-none focus:border-amber-400 transition-colors"
              >
                <option value="Rajahmundry">రాజమండ్రి (Rajahmundry)</option>
                <option value="Vemagiri">వేమగిరి (Vemagiri)</option>
                <option value="Chelluru">చెల్లూరు (Chelluru)</option>
                <option value="Rayavaram">రాయవరం (Rayavaram)</option>
                <option value="Kakinada">కాకినాడ (Kakinada)</option>
                <option value="Amalapuram">అమలాపురం (Amalapuram)</option>
                <option value="Mandapeta">మండపేట (Mandapeta)</option>
                <option value="Ravulapalem">రావులపాలెం (Ravulapalem)</option>
                <option value="Samalkota">సామర్లకోట (Samalkota)</option>
                <option value="Peddapuram">పెద్దాపురం (Peddapuram)</option>
                <option value="Tuni / Annavaram">తుని / అన్నవరం (Tuni / Annavaram)</option>
                <option value="Other East Godavari">ఇతర తూర్పు గోదావరి ప్రాంతం (Other Area)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-amber-200 mb-1">
                {t.formType} *
              </label>
              <select
                name="eventType"
                value={formData.eventType}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#2a101d] border border-amber-500/30 text-white text-base sm:text-xs focus:outline-none focus:border-amber-400 transition-colors"
              >
                <option value="Marriage Mandapam (పెళ్లి)">వివాహం / కల్యాణ మండపం (Marriage)</option>
                <option value="Haldi / Pasupu (పసుపు)">హల్దీ / పసుపు వేడుక (Haldi / Mehendi)</option>
                <option value="Half Saree (లంగా వోణి)">హాఫ్ శారీ / లంగా వోణి (Half Saree)</option>
                <option value="Dhothi Function (ధోతీ)">ధోతీ ఫంక్షన్ (Dhothi Function)</option>
                <option value="Cradle / Barasala (బారసాల)">బారసాల / ఉయ్యాల (Cradle Ceremony)</option>
                <option value="Birthday Party (పుట్టినరోజు)">పుట్టినరోజు (Birthday Event)</option>
                <option value="Catering Service (క్యాటరింగ్)">భోజనాలు / క్యాటరింగ్ (Catering Only)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-amber-200 mb-1">
                {t.formDate}
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#2a101d] border border-amber-500/30 text-white text-base sm:text-xs focus:outline-none focus:border-amber-400 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-amber-200 mb-1">
                {t.formMessage}
              </label>
              <input
                type="text"
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                placeholder={lang === 'te' ? 'బడ్జెట్ లేదా వివరాలు (ఉదా: 500 మంది)' : 'e.g. 500 guests, budget ₹1 Lakh'}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#2a101d] border border-amber-500/30 text-white text-base sm:text-xs placeholder-white/30 focus:outline-none focus:border-amber-400 transition-colors"
              />
            </div>
          </div>

          <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-3">
            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full text-xs sm:text-sm font-bold bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:from-amber-300 hover:to-yellow-300 text-[#2a0812] shadow-lg shadow-amber-500/20 active:scale-95 transition-all cursor-pointer"
            >
              <Send className="w-4 h-4 fill-current" />
              <span>{t.submitBtn}</span>
            </button>

            <span className="text-[11px] text-emerald-400 flex items-center gap-1">
              <MessageCircle className="w-3.5 h-3.5 shrink-0" />
              <span>{lang === 'te' ? 'నేరుగా వాట్సాప్ 9912436999 కి చేరుతుంది' : 'Sends directly to WhatsApp 9912436999'}</span>
            </span>
          </div>
        </form>
      )}
    </div>
  );

  if (isOpenAsModal) {
    return (
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-sm animate-fade-in overflow-y-auto"
        onClick={onClose}
      >
        <div 
          className="relative w-full max-w-xl my-auto max-h-[92vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {formContent}
        </div>
      </div>
    );
  }

  return (
    <section id="contact" className="py-14 sm:py-20 bg-[#12080c] border-b border-amber-500/20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {formContent}
      </div>
    </section>
  );
}
