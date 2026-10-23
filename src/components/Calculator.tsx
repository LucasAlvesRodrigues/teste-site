import React, { useState } from 'react';
import { Calculator as CalcIcon, MessageCircle, ArrowRight, CheckCircle2, Info } from 'lucide-react';
import { CONTACT_INFO } from '../data/content';
import { ServiceType } from '../types';

interface CalculatorProps {
  onTransferToBooking: (service: ServiceType, visitsPerDay: number, days: number, city: string) => void;
}

export const Calculator: React.FC<CalculatorProps> = ({ onTransferToBooking }) => {
  const [service, setService] = useState<ServiceType>('pet_sitter');
  const [petType, setPetType] = useState<'cats' | 'dogs' | 'both'>('cats');
  const [petCount, setPetCount] = useState<number>(1);
  const [days, setDays] = useState<number>(4);
  const [visitsPerDay, setVisitsPerDay] = useState<number>(1);
  const [city, setCity] = useState<'Valinhos' | 'Vinhedo' | 'Campinas'>('Valinhos');
  const [hasMedication, setHasMedication] = useState<boolean>(false);

  // Pricing formula
  const getBaseRate = (): number => {
    switch (service) {
      case 'pet_sitter':
        return 55;
      case 'vet_care':
        return 75;
      case 'dog_walking':
        return 50;
      case 'hosting':
        return 95;
      default:
        return 55;
    }
  };

  const calculateTotal = (): { total: number; daily: number; perVisit: number } => {
    let perVisit = getBaseRate();

    // Extra pets beyond 2
    if (petCount > 2) {
      perVisit += (petCount - 2) * 15;
    }

    // Medication addition if not already vet_care
    if (hasMedication && service !== 'vet_care') {
      perVisit += 15;
    }

    // Displacement surcharge for certain Campinas areas
    let displacementDaily = 0;
    if (city === 'Campinas') {
      displacementDaily = 15;
    }

    const totalVisits = days * (service === 'hosting' ? 1 : visitsPerDay);
    const serviceTotal = perVisit * totalVisits;
    const total = serviceTotal + (displacementDaily * days);
    const daily = total / days;

    return {
      total,
      daily,
      perVisit: totalVisits > 0 ? (total / totalVisits) : perVisit,
    };
  };

  const { total, daily, perVisit } = calculateTotal();

  const handleSendWhatsApp = () => {
    const serviceName =
      service === 'pet_sitter'
        ? 'Pet Sitter Domiciliar'
        : service === 'vet_care'
        ? 'Cuidados Clínicos & Medicação'
        : service === 'dog_walking'
        ? 'Dog Walker (Passeios)'
        : 'Hospedagem Familiar';

    const petDescription =
      petType === 'cats'
        ? `${petCount} Gato(s)`
        : petType === 'dogs'
        ? `${petCount} Cão(ães)`
        : `${petCount} Pets (Cão & Gato)`;

    const text = encodeURIComponent(
      `Olá Gabrielly! Vi seu site e gostaria de verificar disponibilidade para um atendimento:\n\n` +
      `🐾 *Serviço:* ${serviceName}\n` +
      `🐶 *Pets:* ${petDescription}\n` +
      `📍 *Cidade:* ${city} (SP)\n` +
      `📅 *Duração estimada:* ${days} dias (${visitsPerDay} visita(s)/dia)\n` +
      `💊 *Medicação especial:* ${hasMedication ? 'Sim' : 'Não'}\n` +
      `💰 *Estimativa pelo simulador:* R$ ${total.toFixed(2)}\n\n` +
      `Podemos agendar a visita prévia de adaptação? Obrigado!`
    );

    window.open(`https://wa.me/${CONTACT_INFO.phone}?text=${text}`, '_blank');
  };

  return (
    <section id="simulador" className="py-20 bg-stone-100/70 border-b border-emerald-950/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="max-w-2xl mb-12 space-y-3">
          <div className="text-xs font-semibold tracking-wider text-emerald-800 uppercase flex items-center gap-1.5">
            <CalcIcon className="w-4 h-4 text-emerald-700" />
            <span>Transparência de Valores</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif-display text-emerald-950 tracking-tight [text-wrap:balance]">
            Simulador de Visitas &amp; Estimativa de Orçamento
          </h2>
          <p className="text-emerald-900/80 text-base">
            Monte a combinação exata de dias, visitas e tipo de animal para calcular uma estimativa clara e sem surpresas.
          </p>
        </div>

        {/* Simulator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Box (8 cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-emerald-950/10 shadow-xs space-y-6">
            
            {/* Step 1: Service choice */}
            <div>
              <label className="block text-xs font-semibold text-emerald-950 uppercase tracking-wider mb-2">
                1. Escolha o serviço principal:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  { id: 'pet_sitter', label: 'Pet Sitter Domiciliar' },
                  { id: 'vet_care', label: 'Cuidados Clínicos & Medicação' },
                  { id: 'dog_walking', label: 'Dog Walker (Passeios)' },
                  { id: 'hosting', label: 'Hospedagem Familiar' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setService(item.id as ServiceType)}
                    className={`p-3 text-left rounded-xl border text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                      service === item.id
                        ? 'border-emerald-800 bg-emerald-50/70 text-emerald-950 font-semibold shadow-2xs'
                        : 'border-stone-200 hover:border-stone-300 text-stone-700'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Animal type and count */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div>
                <label className="block text-xs font-semibold text-emerald-950 uppercase tracking-wider mb-2">
                  2. Espécie do pet:
                </label>
                <div className="flex gap-2">
                  {[
                    { id: 'cats', label: 'Gatos' },
                    { id: 'dogs', label: 'Cães' },
                    { id: 'both', label: 'Ambos' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setPetType(item.id as any)}
                      className={`flex-1 py-2 px-3 text-xs font-medium rounded-lg border text-center transition-all cursor-pointer ${
                        petType === item.id
                          ? 'border-emerald-800 bg-emerald-800 text-white font-semibold'
                          : 'border-stone-200 text-stone-700 hover:bg-stone-50'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-emerald-950 uppercase tracking-wider mb-2">
                  3. Quantidade de animais:
                </label>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4].map((count) => (
                    <button
                      key={count}
                      type="button"
                      onClick={() => setPetCount(count)}
                      className={`flex-1 py-2 text-xs font-medium rounded-lg border text-center transition-all cursor-pointer ${
                        petCount === count
                          ? 'border-emerald-800 bg-emerald-800 text-white font-semibold'
                          : 'border-stone-200 text-stone-700 hover:bg-stone-50'
                      }`}
                    >
                      {count === 4 ? '4+' : count}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Step 3: Days & Visits per day */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-semibold text-emerald-950 uppercase tracking-wider">
                    4. Duração: <span className="font-mono text-emerald-800 text-sm">{days} dias</span>
                  </label>
                </div>
                <input
                  type="range"
                  min="1"
                  max="30"
                  value={days}
                  onChange={(e) => setDays(Number(e.target.value))}
                  className="w-full accent-emerald-800 cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-stone-600 mt-1">
                  <span>1 dia</span>
                  <span>15 dias</span>
                  <span>30 dias</span>
                </div>
              </div>

              {service !== 'hosting' ? (
                <div>
                  <label className="block text-xs font-semibold text-emerald-950 uppercase tracking-wider mb-2">
                    5. Frequência diária:
                  </label>
                  <div className="flex gap-2">
                    {[1, 2, 3].map((v) => (
                      <button
                        key={v}
                        type="button"
                        onClick={() => setVisitsPerDay(v)}
                        className={`flex-1 py-2 text-xs font-medium rounded-lg border text-center transition-all cursor-pointer ${
                          visitsPerDay === v
                            ? 'border-emerald-800 bg-emerald-800 text-white font-semibold'
                            : 'border-stone-200 text-stone-700 hover:bg-stone-50'
                        }`}
                      >
                        {v}x ao dia
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div>
                  <label className="block text-xs font-semibold text-emerald-950 uppercase tracking-wider mb-2">
                    Regime de Hospedagem:
                  </label>
                  <div className="py-2 px-3 text-xs bg-stone-50 border border-stone-200 rounded-lg text-emerald-950">
                    Diária de 24h em ambiente residencial
                  </div>
                </div>
              )}
            </div>

            {/* Step 4: City and Medication */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2 border-t border-stone-100">
              <div>
                <label className="block text-xs font-semibold text-emerald-950 uppercase tracking-wider mb-2">
                  6. Cidade do atendimento:
                </label>
                <select
                  value={city}
                  onChange={(e) => setCity(e.target.value as any)}
                  className="w-full p-2.5 bg-stone-50 border border-stone-200 rounded-lg text-xs sm:text-sm text-stone-800 focus:outline-hidden focus:border-emerald-800"
                >
                  <option value="Valinhos">Valinhos (SP) - Sem taxa</option>
                  <option value="Vinhedo">Vinhedo (SP) - Sem taxa</option>
                  <option value="Campinas">Campinas (SP) - Bairros próximos</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-emerald-950 uppercase tracking-wider mb-2">
                  7. Cuidados especiais:
                </label>
                <label className="flex items-center gap-2.5 p-2 bg-stone-50 border border-stone-200 rounded-lg cursor-pointer hover:bg-stone-100 transition-colors">
                  <input
                    type="checkbox"
                    checked={hasMedication}
                    onChange={(e) => setHasMedication(e.target.checked)}
                    className="w-4 h-4 text-emerald-800 accent-emerald-800 rounded-xs"
                  />
                  <span className="text-xs text-emerald-950 font-medium">
                    Exige administração de medicamentos prescritos
                  </span>
                </label>
              </div>
            </div>

          </div>

          {/* Result Card (5 cols) */}
          <div className="lg:col-span-5 bg-emerald-950 text-white rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-800/30 rounded-full blur-2xl pointer-events-none"></div>

            <div className="space-y-1">
              <div className="text-xs font-mono uppercase tracking-wider text-emerald-300">
                Resumo da Simulação
              </div>
              <h3 className="text-2xl font-bold font-serif-display text-white">
                Investimento Estimado
              </h3>
            </div>

            {/* Price display */}
            <div className="py-4 border-y border-emerald-800/60 space-y-2">
              <div className="text-xs text-emerald-200/80">Valor Total para {days} {days === 1 ? 'dia' : 'dias'}:</div>
              <div className="text-4xl sm:text-5xl font-mono font-bold text-white tabular-nums tracking-tight">
                R$ {total.toFixed(2)}
              </div>
              <div className="text-xs text-emerald-300 font-mono flex items-center justify-between pt-1">
                <span>R$ {daily.toFixed(2)} / dia</span>
                {service !== 'hosting' && (
                  <span>· R$ {perVisit.toFixed(2)} por visita</span>
                )}
              </div>
            </div>

            {/* Inclusions checklist */}
            <div className="space-y-2 text-xs text-emerald-100/90">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Visita prévia presencial para conhecer o animal</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Fotos e vídeos no WhatsApp a cada atendimento</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Alimentação, água fresca, limpeza e carinho</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Segurança e olhar clínico veterinário</span>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-2 space-y-3">
              <button
                type="button"
                onClick={handleSendWhatsApp}
                className="w-full py-3.5 px-4 bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-bold rounded-xl flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-sm text-sm"
              >
                <MessageCircle className="w-4 h-4 fill-emerald-950/20" />
                <span>Consultar Vagas no WhatsApp</span>
              </button>

              <button
                type="button"
                onClick={() => onTransferToBooking(service, visitsPerDay, days, city)}
                className="w-full py-2.5 px-4 bg-emerald-900/60 hover:bg-emerald-900 text-emerald-100 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer border border-emerald-700/50"
              >
                <span>Preencher Formulário Detalhado</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="text-[11px] text-emerald-300/70 flex items-start gap-1.5 pt-1">
              <Info className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
              <span>
                Valores de referência para planejamento. O orçamento final é confirmado após a checagem de endereço e particularidades de saúde.
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
