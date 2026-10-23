import React from 'react';
import { Heart, Instagram, Phone, Mail, MapPin } from 'lucide-react';
import { CONTACT_INFO } from '../data/content';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-emerald-950 text-white pt-16 pb-12 border-t border-emerald-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-emerald-900/60">
          
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-lg bg-emerald-800 text-white flex items-center justify-center">
                <Heart className="w-4 h-4 fill-emerald-200/30 text-white" />
              </span>
              <span className="font-serif-display text-2xl font-bold tracking-tight text-white">
                MedVet Gabrielly
              </span>
            </div>

            <p className="text-xs sm:text-sm text-emerald-200/80 max-w-md leading-relaxed font-normal">
              Atendimento veterinário domiciliar, pet sitter com olhar clínico, dog walker e administração segura de medicações em Valinhos, Vinhedo e Campinas por Gabrielly Kind de Souza.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={CONTACT_INFO.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-emerald-900/80 hover:bg-emerald-800 flex items-center justify-center text-emerald-200 hover:text-white transition-colors"
                aria-label="Instagram @medvetgabrielly"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${CONTACT_INFO.phone}`}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-emerald-900/80 hover:bg-emerald-800 flex items-center justify-center text-emerald-200 hover:text-white transition-colors"
                aria-label="WhatsApp"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <div className="text-xs font-semibold text-emerald-300 uppercase tracking-wider">
              Navegação
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-emerald-200/80">
              <li>
                <a href="#servicos" className="hover:text-white transition-colors">Serviços Oferecidos</a>
              </li>
              <li>
                <a href="#protocolo" className="hover:text-white transition-colors">Como Funciona</a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-white transition-colors">Sobre a Gabrielly</a>
              </li>
              <li>
                <a href="#depoimentos" className="hover:text-white transition-colors">Depoimentos &amp; Avaliações</a>
              </li>
              <li>
                <a href="#simulador" className="hover:text-white transition-colors">Simulador de Valores</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">Perguntas Frequentes</a>
              </li>
            </ul>
          </div>

          {/* Regions & Contacts */}
          <div className="space-y-3">
            <div className="text-xs font-semibold text-emerald-300 uppercase tracking-wider">
              Regiões Atendidas
            </div>
            <div className="space-y-2 text-xs text-emerald-200/80">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>Valinhos (todos os bairros e condomínios)</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>Vinhedo (região central e bairros)</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>Campinas (bairros limítrofes e proximidades)</span>
              </div>
              <div className="pt-2 text-[11px] text-emerald-300/70 border-t border-emerald-900/60">
                Horários de visitação combinados de acordo com a rotina prévia do animal.
              </div>
            </div>
          </div>

        </div>

        {/* Quiet copyright & ethics disclosure */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-emerald-300/60 gap-4">
          <div>
            © {new Date().getFullYear()} MedVet Gabrielly · Gabrielly Kind de Souza. Todos os direitos reservados.
          </div>
          <div className="text-[11px] max-w-md text-center sm:text-right">
            Cuidados domiciliares e bem-estar animal. Procedimentos médicos invasivos e diagnósticos são sempre direcionados e acompanhados pelo médico veterinário prescritor.
          </div>
        </div>

      </div>
    </footer>
  );
};
