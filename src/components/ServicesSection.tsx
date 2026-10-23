import React, { useState } from 'react';
import { Check, Clock, Calendar, ArrowRight, Sparkles } from 'lucide-react';
import { SERVICES } from '../data/content';
import { ServiceItem, ServiceType } from '../types';

interface ServicesSectionProps {
  onSelectService: (serviceId: ServiceType) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'cats' | 'dogs' | 'special'>('all');
  const [selectedModalService, setSelectedModalService] = useState<ServiceItem | null>(null);

  const filteredServices = SERVICES.filter(service => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'cats') return service.id === 'pet_sitter' || service.id === 'vet_care';
    if (activeFilter === 'dogs') return service.id === 'dog_walking' || service.id === 'hosting' || service.id === 'pet_sitter';
    if (activeFilter === 'special') return service.id === 'vet_care';
    return true;
  });

  return (
    <section id="servicos" className="py-20 bg-stone-50/60 border-b border-emerald-950/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="text-xs font-semibold tracking-wider text-emerald-800 uppercase">
              Serviços Especializados
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif-display text-emerald-950 tracking-tight [text-wrap:balance]">
              Cuidados sob medida para a rotina e o bem-estar do seu melhor amigo
            </h2>
            <p className="text-emerald-900/75 text-base sm:text-lg">
              Cada animal possui hábitos e necessidades únicas. O atendimento domiciliar preserva o território do pet, reduzindo drasticamente o estresse e a imunidade baixa.
            </p>
          </div>

          {/* Interactive filter tabs (functional buttons with handlers) */}
          <div className="flex items-center gap-1.5 p-1 bg-white border border-emerald-950/10 rounded-xl shrink-0 self-start md:self-end shadow-2xs">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-emerald-800 text-white shadow-xs'
                  : 'text-emerald-900 hover:text-emerald-950 hover:bg-stone-100'
              }`}
            >
              Todos os Serviços
            </button>
            <button
              onClick={() => setActiveFilter('cats')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                activeFilter === 'cats'
                  ? 'bg-emerald-800 text-white shadow-xs'
                  : 'text-emerald-900 hover:text-emerald-950 hover:bg-stone-100'
              }`}
            >
              Para Gatos
            </button>
            <button
              onClick={() => setActiveFilter('dogs')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                activeFilter === 'dogs'
                  ? 'bg-emerald-800 text-white shadow-xs'
                  : 'text-emerald-900 hover:text-emerald-950 hover:bg-stone-100'
              }`}
            >
              Para Cães
            </button>
            <button
              onClick={() => setActiveFilter('special')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                activeFilter === 'special'
                  ? 'bg-emerald-800 text-white shadow-xs'
                  : 'text-emerald-900 hover:text-emerald-950 hover:bg-stone-100'
              }`}
            >
              Medicação &amp; Saúde
            </button>
          </div>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredServices.map((service, index) => {
            const formattedIndex = String(index + 1).padStart(2, '0');
            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl border border-emerald-950/10 overflow-hidden shadow-xs hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Service image slot with clean aspect ratio */}
                  <div className="relative aspect-16/9 w-full bg-emerald-50 overflow-hidden border-b border-emerald-950/5">
                    <img
                      src={service.image}
                      alt={service.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-103"
                    />
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-md text-xs font-semibold text-emerald-950 shadow-2xs">
                      {formattedIndex}. Atendimento
                    </div>
                    <div className="absolute bottom-3 right-3 bg-emerald-900/90 text-white px-3 py-1 rounded-lg text-xs font-medium backdrop-blur-xs flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{service.duration}</span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 sm:p-7 space-y-4">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold font-serif-display text-emerald-950">
                        {service.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-emerald-700 font-medium mt-1">
                        {service.tagline}
                      </p>
                    </div>

                    <p className="text-sm text-emerald-900/80 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Highlights list */}
                    <div className="pt-2 border-t border-emerald-950/5 space-y-2">
                      <div className="text-xs font-semibold uppercase tracking-wider text-emerald-900/70">
                        O que está incluso na visita:
                      </div>
                      <ul className="space-y-1.5">
                        {service.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-emerald-900/85">
                            <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                              <Check className="w-2.5 h-2.5 stroke-3" />
                            </span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-2 text-xs text-stone-600 bg-stone-50 rounded-xl p-3 border border-stone-200/60">
                      <strong className="text-emerald-950 font-medium">Recomendado para: </strong>
                      {service.recommendedFor}
                    </div>
                  </div>
                </div>

                {/* Card Footer with Price and Booking Trigger */}
                <div className="p-6 sm:p-7 pt-0 flex items-center justify-between gap-4 border-t border-emerald-950/5 mt-4">
                  <div>
                    <div className="text-xs text-emerald-900/60">A partir de</div>
                    <div className="text-xl font-bold font-mono text-emerald-950 tabular-nums">
                      R$ {service.basePrice.toFixed(2)}
                      <span className="text-xs font-normal text-emerald-900/70 ml-1">/visita</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setSelectedModalService(service)}
                      className="px-3.5 py-2 text-xs font-semibold text-emerald-900 bg-stone-100 hover:bg-stone-200 rounded-xl transition-colors cursor-pointer"
                    >
                      Ver Detalhes
                    </button>
                    <button
                      onClick={() => onSelectService(service.id)}
                      className="px-4 py-2 text-xs font-semibold text-white bg-emerald-800 hover:bg-emerald-900 rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
                    >
                      <span>Solicitar</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Service Detail Modal */}
      {selectedModalService && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 space-y-5 border border-emerald-950/10 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-xs font-semibold text-emerald-800 uppercase tracking-wider">
                  Guia do Atendimento
                </div>
                <h3 className="text-2xl font-bold font-serif-display text-emerald-950 mt-1">
                  {selectedModalService.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedModalService(null)}
                className="text-stone-400 hover:text-stone-700 p-1 rounded-lg text-lg font-bold"
              >
                ✕
              </button>
            </div>

            <p className="text-sm text-emerald-900/80 leading-relaxed">
              {selectedModalService.description}
            </p>

            <div className="bg-emerald-50/70 p-4 rounded-xl space-y-2 border border-emerald-950/5">
              <div className="text-xs font-semibold text-emerald-950 uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
                <span>Protocolo de Cuidado e Procedimentos:</span>
              </div>
              <ul className="space-y-1.5">
                {selectedModalService.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-emerald-950">
                    <Check className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="p-3 bg-stone-50 rounded-lg border border-stone-200">
                <div className="font-semibold text-emerald-950 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-emerald-700" />
                  Duração estimada:
                </div>
                <div className="text-stone-600 mt-0.5">{selectedModalService.duration}</div>
              </div>
              <div className="p-3 bg-stone-50 rounded-lg border border-stone-200">
                <div className="font-semibold text-emerald-950 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-emerald-700" />
                  Disponibilidade:
                </div>
                <div className="text-stone-600 mt-0.5">Segunda a Domingo &amp; Feriados</div>
              </div>
            </div>

            <div className="pt-3 flex items-center justify-between border-t border-stone-200 gap-4">
              <div>
                <span className="text-xs text-stone-500">Valor de referência</span>
                <div className="text-xl font-bold font-mono text-emerald-950 tabular-nums">
                  R$ {selectedModalService.basePrice.toFixed(2)}
                </div>
              </div>
              <button
                onClick={() => {
                  const id = selectedModalService.id;
                  setSelectedModalService(null);
                  onSelectService(id);
                }}
                className="px-5 py-2.5 text-sm font-semibold text-white bg-emerald-800 hover:bg-emerald-900 rounded-xl transition-colors cursor-pointer shadow-xs"
              >
                Agendar com este Serviço
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
