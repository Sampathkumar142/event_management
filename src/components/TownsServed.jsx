import React from 'react';
import { TOWNS_SERVED, CONTENT } from '../data/content';
import { MapPin } from 'lucide-react';

export default function TownsServed({ lang }) {
  const t = CONTENT[lang];

  return (
    <div className="bg-[#180911] border-b border-amber-500/20 py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 shrink-0">
            <MapPin className="w-4 h-4 text-amber-400" />
            <span>{t.areasServed}:</span>
          </div>

          <div className="flex flex-wrap items-center justify-center md:justify-end gap-2 text-xs">
            {TOWNS_SERVED.map((town, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-md bg-[#2d0e19] border border-amber-500/30 text-[#f5e8d8] font-medium hover:border-amber-400 transition-colors"
              >
                {lang === 'te' ? town.nameTe : town.nameEn}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
