import React from 'react';
import { TESTIMONIALS } from '../data/content';
import { Star, Quote } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="depoimentos" className="py-20 bg-white border-b border-emerald-950/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="text-xs font-semibold tracking-wider text-emerald-800 uppercase">
              Depoimentos Verificados
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif-display text-emerald-950 tracking-tight [text-wrap:balance]">
              A tranquilidade de quem já confiou na Gabrielly
            </h2>
            <p className="text-emerald-900/80 text-base">
              Avaliações reais de tutores de Valinhos, Vinhedo e Campinas cadastrados em plataformas profissionais e atendimentos particulares.
            </p>
          </div>

          <div className="text-left md:text-right shrink-0">
            <div className="flex items-center gap-1 md:justify-end">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-amber-500 fill-amber-400" />
              ))}
            </div>
            <div className="text-xs font-mono font-medium text-emerald-950 mt-1">
              Nota 5.0 · Sittsy &amp; PetHost
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-stone-50/70 rounded-2xl p-6 sm:p-8 border border-emerald-950/10 flex flex-col justify-between space-y-5 shadow-2xs hover:shadow-xs transition-shadow"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-400" />
                    ))}
                  </div>
                  {/* Clean unboxed metadata (Zero-Pill Rule) */}
                  <div className="text-xs text-stone-500 flex items-center gap-1.5 font-medium">
                    <span>{t.verifiedSource}</span>
                    <span aria-hidden="true">·</span>
                    <span>{t.date}</span>
                  </div>
                </div>

                <p className="text-sm text-stone-700 leading-relaxed italic">
                  "{t.comment}"
                </p>
              </div>

              {/* Attribution */}
              <div className="pt-4 border-t border-stone-200/60 flex items-start justify-between">
                <div>
                  <div className="text-sm font-bold text-emerald-950 font-serif-display">
                    {t.tutorName}
                  </div>
                  <div className="text-xs text-stone-600">
                    Tutor(a) de <strong className="text-emerald-900">{t.petName}</strong> ({t.petSpecies})
                  </div>
                </div>

                <div className="text-right text-[11px] text-stone-500">
                  <div>{t.city}</div>
                  <div className="text-emerald-800 font-medium">{t.service}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
