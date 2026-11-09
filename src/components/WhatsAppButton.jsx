import React from 'react';
import { MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../data/content';

export default function WhatsAppButton({ lang }) {
  const text = encodeURIComponent(
    lang === 'te' 
      ? 'నమస్తే సురేష్ ఈవెంట్స్! మా ఇంట్లో ఫంక్షన్ కోసం వివరాలు కావాలి.' 
      : 'Hello Suresh Events! I need details for an upcoming function.'
  );

  return (
    <div className="fixed bottom-5 right-5 z-40 flex items-center gap-2">
      <a
        href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=${text}`}
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl shadow-emerald-950/60 transition-all hover:scale-105 active:scale-95 border-2 border-white/20"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-5 h-5 fill-current" />
        <span className="text-xs font-bold hidden sm:inline">
          {lang === 'te' ? 'వాట్సాప్ మెసేజ్' : 'WhatsApp'}
        </span>
      </a>
    </div>
  );
}
