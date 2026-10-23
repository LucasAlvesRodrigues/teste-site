import React from 'react';
import { PROTOCOL_STEPS } from '../data/content';
import { ArrowRight } from 'lucide-react';

interface ProtocolSectionProps {
  onOpenBooking: () => void;
}

export const ProtocolSection: React.FC<ProtocolSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="protocolo" className="py-20 bg-stone-50/50 border-b border-emerald-950/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14 space-y-3">
          <div className="text-xs font-semibold tracking-wider text-emerald-800 uppercase">
            Metodologia &amp; Segurança
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif-display text-emerald-950 tracking-tight [text-wrap:balance]">
            Como funciona o atendimento passo a passo
          </h2>
          <p className="text-emerald-900/80 text-base">
            Um processo planejado para garantir que seu animal não sofra quebra de rotina e você tenha total tranquilidade do início ao fim.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROTOCOL_STEPS.map((step) => (
            <div
              key={step.step}
              className="bg-white rounded-2xl p-6 border border-emerald-950/10 shadow-2xs hover:shadow-xs transition-shadow flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="text-3xl font-bold font-mono text-emerald-800/40">
                  {step.step}
                </div>

                <div>
                  <h3 className="text-lg font-bold font-serif-display text-emerald-950">
                    {step.title}
                  </h3>
                  <div className="text-xs font-semibold text-emerald-700 mt-0.5">
                    {step.subtitle}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-stone-100 flex items-center justify-between text-xs text-emerald-950 font-medium">
                <span>Passo obrigatório</span>
                <span className="text-emerald-700">✓</span>
              </div>
            </div>
          ))}
        </div>

        {/* Banner CTA inside protocol */}
        <div className="mt-12 bg-emerald-950 text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-xl font-bold font-serif-display">
              Vai viajar ou precisa de cuidados para seu pet em breve?
            </h4>
            <p className="text-xs sm:text-sm text-emerald-200">
              Agende com antecedência para garantir a visita prévia presencial e a reserva dos melhores horários.
            </p>
          </div>

          <button
            onClick={onOpenBooking}
            className="px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-emerald-950 text-xs sm:text-sm font-bold rounded-xl transition-colors shrink-0 flex items-center gap-2 cursor-pointer"
          >
            <span>Reservar Minha Data</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
