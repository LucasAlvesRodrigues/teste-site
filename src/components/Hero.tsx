import React, { useState } from 'react';
import { ArrowRight, ShieldCheck, Stethoscope, Sparkles } from 'lucide-react';
import { IMAGES, CONTACT_INFO } from '../data/content';

interface HeroProps {
  onOpenBooking: () => void;
  onScrollToCalculator: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onScrollToCalculator }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="relative overflow-hidden bg-radial from-amber-50/40 via-white to-emerald-50/30 pt-10 pb-16 lg:pt-14 lg:pb-20 border-b border-emerald-950/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 2-column hero split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Text proposition */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Unboxed clean metadata kicker (Zero-Pill Rule) */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-emerald-800 tracking-wider uppercase">
              <span>Medicina Veterinária &amp; Cuidado Domiciliar</span>
              <span aria-hidden="true" className="text-emerald-400">·</span>
              <span>Valinhos, Vinhedo &amp; Campinas</span>
            </div>

            {/* Main Headline with text-wrap: balance */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-emerald-950 font-serif-display leading-[1.12] [text-wrap:balance]">
              O cuidado veterinário e o afeto que seu pet merece, sem sair de casa.
            </h1>

            {/* Value Proposition Description */}
            <p className="text-lg sm:text-xl text-emerald-900/80 leading-relaxed font-normal max-w-2xl">
              Visitas domiciliares para gatos e cães, pet sitter com olhar clínico apurado, passeios educativos e administração rigorosa de medicamentos com o carinho e a responsabilidade de quem estuda e vive a Medicina Veterinária.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-base font-semibold text-white bg-emerald-800 rounded-xl hover:bg-emerald-900 shadow-md shadow-emerald-900/10 active:scale-98 transition-all cursor-pointer"
              >
                <span>Agendar Visita de Avaliação</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onScrollToCalculator}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-emerald-900 bg-white border border-emerald-950/15 rounded-xl hover:bg-emerald-50/70 active:scale-98 transition-all cursor-pointer shadow-xs"
              >
                <span>Simular Valores &amp; Visitas</span>
              </button>
            </div>

            {/* Sub-CTA Trust Note */}
            <div className="pt-3 flex items-center gap-2 text-xs text-emerald-900/70">
              <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
              <span>Visita prévia presencial para apresentação, adaptação e alinhamento de rotina.</span>
            </div>
          </div>

          {/* Right Column: Visual Focal Carrier */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-emerald-950/10 border border-emerald-950/10 aspect-4/3 lg:aspect-5/4 bg-emerald-100">
              {!imageError ? (
                <img
                  src={IMAGES.hero}
                  alt="Gabrielly Kind cuidando com carinho de um cão e gato em atendimento veterinário domiciliar"
                  referrerPolicy="no-referrer"
                  onError={() => setImageError(true)}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-102"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-gradient-to-br from-emerald-800 to-teal-900 text-white text-center">
                  <Stethoscope className="w-12 h-12 mb-3 text-emerald-300" />
                  <p className="font-serif-display text-xl font-bold">MedVet Gabrielly</p>
                  <p className="text-sm text-emerald-100 mt-1">Cuidados Veterinários &amp; Pet Sitter</p>
                </div>
              )}

              {/* Discreet overlay trust ribbon */}
              <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md rounded-xl p-3 border border-emerald-950/10 shadow-sm flex items-center justify-between text-xs text-emerald-950">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                  <span className="font-semibold">{CONTACT_INFO.brandName}</span>
                </div>
                <div className="text-emerald-800 font-medium">
                  {CONTACT_INFO.displayPhone}
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 4-column KPI / Trust Strip below the hero split */}
        <div className="mt-14 pt-8 border-t border-emerald-950/10 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="space-y-1">
            <p className="font-mono text-2xl sm:text-3xl font-bold text-emerald-950 tabular-nums">
              +350
            </p>
            <p className="text-xs sm:text-sm text-emerald-900/80 font-medium">
              Visitas &amp; atendimentos realizados com sucesso
            </p>
          </div>

          <div className="space-y-1">
            <p className="font-mono text-2xl sm:text-3xl font-bold text-emerald-950 tabular-nums flex items-center gap-1">
              5.0 <Sparkles className="w-5 h-5 text-amber-500 fill-amber-400 inline" />
            </p>
            <p className="text-xs sm:text-sm text-emerald-900/80 font-medium">
              Avaliações máximas no Sittsy &amp; PetHost
            </p>
          </div>

          <div className="space-y-1">
            <p className="font-mono text-2xl sm:text-3xl font-bold text-emerald-950">
              100%
            </p>
            <p className="text-xs sm:text-sm text-emerald-900/80 font-medium">
              Relatórios diários com fotos e vídeos via WhatsApp
            </p>
          </div>

          <div className="space-y-1">
            <p className="font-mono text-2xl sm:text-3xl font-bold text-emerald-950">
              Fear-Free
            </p>
            <p className="text-xs sm:text-sm text-emerald-900/80 font-medium">
              Manejo gentil e livre de estresse para cães e felinos
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
