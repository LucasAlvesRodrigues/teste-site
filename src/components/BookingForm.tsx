import React, { useState } from 'react';
import { Calendar, Check, Send, AlertCircle, Sparkles, Copy, CheckCheck } from 'lucide-react';
import { BookingFormData, ServiceType } from '../types';
import { CONTACT_INFO } from '../data/content';

interface BookingFormProps {
  initialService?: ServiceType;
  initialVisits?: number;
  initialDays?: number;
  initialCity?: string;
  isModal?: boolean;
  onClose?: () => void;
}

export const BookingForm: React.FC<BookingFormProps> = ({
  initialService = 'pet_sitter',
  initialVisits = 1,
  initialCity = 'Valinhos',
  isModal = false,
  onClose,
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    tutorName: '',
    tutorPhone: '',
    tutorEmail: '',
    city: (initialCity as any) || 'Valinhos',
    neighborhood: '',
    petName: '',
    petSpecies: 'Gato',
    petAge: '',
    petBreed: '',
    petBehavior: 'Sociável e tranquilo',
    requiresMedication: false,
    medicationDetails: '',
    serviceType: initialService,
    startDate: '',
    endDate: '',
    visitsPerDay: initialVisits || 1,
    specialInstructions: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submittedData, setSubmittedData] = useState<BookingFormData | null>(null);
  const [copied, setCopied] = useState(false);

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.tutorName.trim()) {
      newErrors.tutorName = 'Informe seu nome completo';
    }
    if (!formData.tutorPhone.trim() || formData.tutorPhone.length < 9) {
      newErrors.tutorPhone = 'Informe um número de WhatsApp válido';
    }
    if (!formData.neighborhood.trim()) {
      newErrors.neighborhood = 'Informe o bairro da residência';
    }
    if (!formData.petName.trim()) {
      newErrors.petName = 'Informe o nome do seu pet';
    }
    if (!formData.startDate) {
      newErrors.startDate = 'Selecione a data de início';
    }
    if (!formData.endDate) {
      newErrors.endDate = 'Selecione a data de término';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmittedData({ ...formData });
  };

  const getServiceLabel = (type: ServiceType): string => {
    switch (type) {
      case 'pet_sitter':
        return 'Pet Sitter Domiciliar';
      case 'vet_care':
        return 'Cuidados Clínicos & Medicação';
      case 'dog_walking':
        return 'Dog Walker (Passeios)';
      case 'hosting':
        return 'Hospedagem Familiar';
    }
  };

  const generateSummaryText = (data: BookingFormData): string => {
    return (
      `*Solicitação de Agendamento - MedVet Gabrielly*\n\n` +
      `👤 *Tutor(a):* ${data.tutorName}\n` +
      `📱 *WhatsApp:* ${data.tutorPhone}\n` +
      `📍 *Endereço:* ${data.neighborhood}, ${data.city} (SP)\n\n` +
      `🐾 *Pet:* ${data.petName} (${data.petSpecies}${data.petBreed ? ` - ${data.petBreed}` : ''}${data.petAge ? `, ${data.petAge}` : ''})\n` +
      `🧠 *Comportamento:* ${data.petBehavior}\n` +
      `💊 *Medicação especial:* ${data.requiresMedication ? `Sim (${data.medicationDetails || 'Conforme receita'})` : 'Não'}\n\n` +
      `📋 *Serviço Escolhido:* ${getServiceLabel(data.serviceType)}\n` +
      `📅 *Período:* De ${data.startDate} até ${data.endDate}\n` +
      `⏰ *Frequência:* ${data.visitsPerDay} visita(s) por dia\n` +
      (data.specialInstructions ? `📝 *Observações adicionais:* ${data.specialInstructions}\n\n` : '\n') +
      `Gostaria de agendar a visita prévia presencial para nos conhecermos!`
    );
  };

  const handleSendToWhatsApp = () => {
    if (!submittedData) return;
    const message = generateSummaryText(submittedData);
    window.open(`https://wa.me/${CONTACT_INFO.phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleCopySummary = () => {
    if (!submittedData) return;
    navigator.clipboard.writeText(generateSummaryText(submittedData));
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="agendamento" className={`${isModal ? 'p-0' : 'py-20 bg-white border-b border-emerald-950/10'}`}>
      <div className={`${isModal ? 'max-w-2xl' : 'max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'}`}>
        
        {!isModal && (
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <div className="text-xs font-semibold tracking-wider text-emerald-800 uppercase">
              Agendamento de Atendimento
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif-display text-emerald-950 tracking-tight [text-wrap:balance]">
              Solicite uma Visita de Avaliação
            </h2>
            <p className="text-emerald-900/80 text-base">
              Preencha os dados do seu pet e o período desejado. Entraremos em contato com rapidez para confirmar os horários e realizar a visita prévia de adaptação.
            </p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="bg-stone-50/70 border border-emerald-950/10 rounded-2xl p-6 sm:p-10 space-y-8 shadow-xs">
          
          {/* Section 1: Tutor details */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-950 flex items-center gap-2 mb-4 pb-2 border-b border-emerald-950/10">
              <span className="w-5 h-5 rounded-full bg-emerald-800 text-white text-xs flex items-center justify-center font-mono">1</span>
              <span>Dados do Tutor</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-emerald-950 mb-1">
                  Seu nome completo *
                </label>
                <input
                  type="text"
                  placeholder="Ex: Mariana Duarte"
                  value={formData.tutorName}
                  onChange={(e) => setFormData({ ...formData, tutorName: e.target.value })}
                  className={`w-full px-3.5 py-2.5 rounded-xl border bg-white text-sm focus:outline-hidden focus:border-emerald-800 transition-colors ${
                    errors.tutorName ? 'border-rose-400 bg-rose-50/30' : 'border-stone-200'
                  }`}
                />
                {errors.tutorName && (
                  <p className="text-[11px] text-rose-600 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.tutorName}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-xs font-medium text-emerald-950 mb-1">
                  WhatsApp com DDD *
                </label>
                <input
                  type="tel"
                  placeholder="Ex: (19) 99874-0000"
                  value={formData.tutorPhone}
                  onChange={(e) => setFormData({ ...formData, tutorPhone: e.target.value })}
                  className={`w-full px-3.5 py-2.5 rounded-xl border bg-white text-sm focus:outline-hidden focus:border-emerald-800 transition-colors ${
                    errors.tutorPhone ? 'border-rose-400 bg-rose-50/30' : 'border-stone-200'
                  }`}
                />
                {errors.tutorPhone && (
                  <p className="text-[11px] text-rose-600 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.tutorPhone}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-xs font-medium text-emerald-950 mb-1">
                  Cidade *
                </label>
                <select
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value as any })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 bg-white text-sm focus:outline-hidden focus:border-emerald-800 transition-colors"
                >
                  <option value="Valinhos">Valinhos (SP)</option>
                  <option value="Vinhedo">Vinhedo (SP)</option>
                  <option value="Campinas">Campinas (SP)</option>
                  <option value="Outra região">Outra cidade da região</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-emerald-950 mb-1">
                  Bairro ou Condomínio *
                </label>
                <input
                  type="text"
                  placeholder="Ex: Jardim Paiquerê, Cond. Sans Souci"
                  value={formData.neighborhood}
                  onChange={(e) => setFormData({ ...formData, neighborhood: e.target.value })}
                  className={`w-full px-3.5 py-2.5 rounded-xl border bg-white text-sm focus:outline-hidden focus:border-emerald-800 transition-colors ${
                    errors.neighborhood ? 'border-rose-400 bg-rose-50/30' : 'border-stone-200'
                  }`}
                />
                {errors.neighborhood && (
                  <p className="text-[11px] text-rose-600 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.neighborhood}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Section 2: Pet Details */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-950 flex items-center gap-2 mb-4 pb-2 border-b border-emerald-950/10">
              <span className="w-5 h-5 rounded-full bg-emerald-800 text-white text-xs flex items-center justify-center font-mono">2</span>
              <span>Sobre o seu Pet</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-medium text-emerald-950 mb-1">
                  Nome do pet *
                </label>
                <input
                  type="text"
                  placeholder="Ex: Bento"
                  value={formData.petName}
                  onChange={(e) => setFormData({ ...formData, petName: e.target.value })}
                  className={`w-full px-3.5 py-2.5 rounded-xl border bg-white text-sm focus:outline-hidden focus:border-emerald-800 transition-colors ${
                    errors.petName ? 'border-rose-400 bg-rose-50/30' : 'border-stone-200'
                  }`}
                />
                {errors.petName && (
                  <p className="text-[11px] text-rose-600 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.petName}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-xs font-medium text-emerald-950 mb-1">
                  Espécie
                </label>
                <select
                  value={formData.petSpecies}
                  onChange={(e) => setFormData({ ...formData, petSpecies: e.target.value as any })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 bg-white text-sm focus:outline-hidden focus:border-emerald-800 transition-colors"
                >
                  <option value="Gato">Gato (Felino)</option>
                  <option value="Cachorro">Cachorro (Canino)</option>
                  <option value="Ambos / Múltiplos">Ambos / Múltiplos Pets</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-emerald-950 mb-1">
                  Idade aproximada
                </label>
                <input
                  type="text"
                  placeholder="Ex: 3 anos, 11 meses"
                  value={formData.petAge}
                  onChange={(e) => setFormData({ ...formData, petAge: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 bg-white text-sm focus:outline-hidden focus:border-emerald-800 transition-colors"
                >
                </input>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <div>
                <label className="block text-xs font-medium text-emerald-950 mb-1">
                  Raça ou porte
                </label>
                <input
                  type="text"
                  placeholder="Ex: SRD (vira-lata), Golden, Siamês"
                  value={formData.petBreed}
                  onChange={(e) => setFormData({ ...formData, petBreed: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 bg-white text-sm focus:outline-hidden focus:border-emerald-800 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-emerald-950 mb-1">
                  Temperamento habitual
                </label>
                <select
                  value={formData.petBehavior}
                  onChange={(e) => setFormData({ ...formData, petBehavior: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 bg-white text-sm focus:outline-hidden focus:border-emerald-800 transition-colors"
                >
                  <option value="Sociável e tranquilo">Sociável e dócil</option>
                  <option value="Tímido / Precisa de tempo para se aproximar">Tímido / Medroso com estranhos</option>
                  <option value="Muito ativo / Enérgico">Muito ativo / Enérgico</option>
                  <option value="Idosinho / Calmo">Idosinho / Necessita de calma</option>
                  <option value="Reativo na guia (se for cão)">Reativo a outros cães na guia</option>
                </select>
              </div>
            </div>

            {/* Health / Medication toggle */}
            <div className="mt-4 p-4 rounded-xl bg-white border border-stone-200/80 space-y-2">
              <label className="flex items-center gap-2.5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.requiresMedication}
                  onChange={(e) => setFormData({ ...formData, requiresMedication: e.target.checked })}
                  className="w-4 h-4 text-emerald-800 accent-emerald-800 rounded-xs"
                />
                <span className="text-xs sm:text-sm font-semibold text-emerald-950">
                  Meu pet necessita de medicação prescrita, colírio, curativo ou cuidados especiais
                </span>
              </label>

              {formData.requiresMedication && (
                <div className="pt-2">
                  <textarea
                    rows={2}
                    placeholder="Descreva brevemente o medicamento, horários habituais e dosagem recomendada pelo seu veterinário..."
                    value={formData.medicationDetails}
                    onChange={(e) => setFormData({ ...formData, medicationDetails: e.target.value })}
                    className="w-full p-2.5 rounded-lg border border-stone-200 text-xs focus:outline-hidden focus:border-emerald-800"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Section 3: Service & Dates */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-950 flex items-center gap-2 mb-4 pb-2 border-b border-emerald-950/10">
              <span className="w-5 h-5 rounded-full bg-emerald-800 text-white text-xs flex items-center justify-center font-mono">3</span>
              <span>Serviço &amp; Período de Atendimento</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-emerald-950 mb-1">
                  Serviço pretendido
                </label>
                <select
                  value={formData.serviceType}
                  onChange={(e) => setFormData({ ...formData, serviceType: e.target.value as ServiceType })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 bg-white text-sm focus:outline-hidden focus:border-emerald-800 transition-colors"
                >
                  <option value="pet_sitter">Pet Sitter Domiciliar (45-60min)</option>
                  <option value="vet_care">Cuidados Clínicos &amp; Medicação</option>
                  <option value="dog_walking">Dog Walker &amp; Passeio Educativo</option>
                  <option value="hosting">Hospedagem Familiar Selecionada</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-emerald-950 mb-1">
                  Frequência de visitas
                </label>
                <select
                  value={formData.visitsPerDay}
                  onChange={(e) => setFormData({ ...formData, visitsPerDay: Number(e.target.value) })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 bg-white text-sm focus:outline-hidden focus:border-emerald-800 transition-colors"
                >
                  <option value={1}>1 visita por dia</option>
                  <option value={2}>2 visitas por dia (manhã e noite)</option>
                  <option value={3}>3 visitas por dia</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-emerald-950 mb-1">
                  Data de início do atendimento *
                </label>
                <input
                  type="date"
                  value={formData.startDate}
                  onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                  className={`w-full px-3.5 py-2.5 rounded-xl border bg-white text-sm focus:outline-hidden focus:border-emerald-800 transition-colors ${
                    errors.startDate ? 'border-rose-400' : 'border-stone-200'
                  }`}
                />
                {errors.startDate && (
                  <p className="text-[11px] text-rose-600 mt-1">{errors.startDate}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-medium text-emerald-950 mb-1">
                  Data de término do atendimento *
                </label>
                <input
                  type="date"
                  value={formData.endDate}
                  onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                  className={`w-full px-3.5 py-2.5 rounded-xl border bg-white text-sm focus:outline-hidden focus:border-emerald-800 transition-colors ${
                    errors.endDate ? 'border-rose-400' : 'border-stone-200'
                  }`}
                />
                {errors.endDate && (
                  <p className="text-[11px] text-rose-600 mt-1">{errors.endDate}</p>
                )}
              </div>
            </div>

            <div className="mt-4">
              <label className="block text-xs font-medium text-emerald-950 mb-1">
                Instruções complementares ou recado para a Gabrielly (opcional):
              </label>
              <textarea
                rows={3}
                placeholder="Ex: Ele tem medo de trovão, a chave fica com a portaria, gosta de sachê com água morna..."
                value={formData.specialInstructions}
                onChange={(e) => setFormData({ ...formData, specialInstructions: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 bg-white text-sm focus:outline-hidden focus:border-emerald-800 transition-colors"
              />
            </div>
          </div>

          {/* Submit Action */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-emerald-950/10">
            <div className="text-xs text-stone-600 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-emerald-700 shrink-0" />
              <span>Resposta ágil para agendar a visita prévia presencial.</span>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              {isModal && onClose && (
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-3 text-sm font-medium text-stone-600 hover:text-stone-900 rounded-xl"
                >
                  Cancelar
                </button>
              )}
              <button
                type="submit"
                className="w-full sm:w-auto px-7 py-3 text-sm font-semibold text-white bg-emerald-800 hover:bg-emerald-900 rounded-xl transition-all shadow-md shadow-emerald-950/10 cursor-pointer flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Confirmar &amp; Agendar Visita</span>
              </button>
            </div>
          </div>

        </form>

      </div>

      {/* Confirmation Modal */}
      {submittedData && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 space-y-5 border border-emerald-950/10 shadow-2xl relative">
            <div className="text-center space-y-2">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto">
                <Check className="w-6 h-6 stroke-3" />
              </div>
              <h3 className="text-2xl font-bold font-serif-display text-emerald-950">
                Solicitação Pronta!
              </h3>
              <p className="text-xs sm:text-sm text-stone-600">
                Seus dados foram reunidos com sucesso. Envie diretamente para o WhatsApp da Gabrielly para confirmar datas e agendar a visita prévia.
              </p>
            </div>

            {/* Formatted summary review */}
            <div className="bg-stone-50 rounded-xl p-4 text-xs font-mono text-stone-800 space-y-1.5 border border-stone-200 max-h-48 overflow-y-auto">
              <div><strong>Tutor:</strong> {submittedData.tutorName}</div>
              <div><strong>Contato:</strong> {submittedData.tutorPhone}</div>
              <div><strong>Endereço:</strong> {submittedData.neighborhood}, {submittedData.city}</div>
              <div><strong>Pet:</strong> {submittedData.petName} ({submittedData.petSpecies})</div>
              <div><strong>Serviço:</strong> {getServiceLabel(submittedData.serviceType)}</div>
              <div><strong>Período:</strong> {submittedData.startDate} até {submittedData.endDate} ({submittedData.visitsPerDay}x/dia)</div>
              {submittedData.requiresMedication && (
                <div><strong>Medicação:</strong> {submittedData.medicationDetails || 'Sim (prescrita)'}</div>
              )}
            </div>

            {/* Actions */}
            <div className="space-y-2.5 pt-2">
              <button
                type="button"
                onClick={handleSendToWhatsApp}
                className="w-full py-3.5 px-4 bg-emerald-800 hover:bg-emerald-900 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-colors cursor-pointer text-sm shadow-sm"
              >
                <span>Enviar Solicitação no WhatsApp</span>
                <Send className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={handleCopySummary}
                className="w-full py-2.5 px-4 bg-stone-100 hover:bg-stone-200 text-stone-700 font-medium rounded-xl flex items-center justify-center gap-2 transition-colors cursor-pointer text-xs"
              >
                {copied ? (
                  <>
                    <CheckCheck className="w-4 h-4 text-emerald-700" />
                    <span className="text-emerald-700 font-semibold">Resumo Copiado para a Área de Transferência!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copiar Resumo dos Dados</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={() => {
                  setSubmittedData(null);
                  if (onClose) onClose();
                }}
                className="w-full py-2 text-xs text-stone-500 hover:text-stone-800 cursor-pointer text-center"
              >
                Fechar janela
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
