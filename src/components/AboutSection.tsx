import React, { useState } from 'react';
import { Award, Heart, Stethoscope, Instagram, ExternalLink, Check } from 'lucide-react';
import { IMAGES, CONTACT_INFO } from '../data/content';

export const AboutSection: React.FC = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="sobre" className="py-20 bg-white border-b border-emerald-950/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Portrait Column (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-emerald-950/10 bg-emerald-50 aspect-3/4 max-w-md mx-auto">
              {!imageError ? (
                <img
                  src={IMAGES.portrait}
                  alt="Gabrielly Kind de Souza - Estudante de Medicina Veterinária e Cuidadora de Pets"
                  referrerPolicy="no-referrer"
                  onError={() => setImageError(true)}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-102"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-emerald-900 text-white text-center">
                  <Heart className="w-12 h-12 text-emerald-300 mb-2" />
                  <p className="font-serif-display text-2xl font-bold">Gabrielly Kind</p>
                  <p className="text-xs text-emerald-200 mt-1">Medicina Veterinária &amp; Cuidados Domiciliares</p>
                </div>
              )}

              {/* Bio badge at the bottom */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-xl p-4 border border-emerald-950/10 shadow-sm space-y-1">
                <div className="flex items-center justify-between">
                  <div className="font-serif-display text-base font-bold text-emerald-950">
                    Gabrielly Kind de Souza
                  </div>
                  <span className="text-[11px] font-mono text-emerald-800 bg-emerald-100/80 px-2 py-0.5 rounded-sm">
                    Valinhos · SP
                  </span>
                </div>
                <div className="text-xs text-emerald-900/80 flex items-center gap-1.5">
                  <Stethoscope className="w-3.5 h-3.5 text-emerald-700" />
                  <span>Graduanda em Medicina Veterinária</span>
                </div>
              </div>
            </div>
          </div>

          {/* Text & Philosophy Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-2">
              <div className="text-xs font-semibold tracking-wider text-emerald-800 uppercase">
                Conheça a Profissional
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold font-serif-display text-emerald-950 tracking-tight [text-wrap:balance]">
                Paixão pelos animais com o rigor da ciência veterinária
              </h2>
            </div>

            <p className="text-base sm:text-lg text-emerald-900/85 leading-relaxed font-normal">
              Olá! Sou a <strong>Gabrielly Kind</strong>. Desde cedo soube que minha vocação era cuidar da vida e da saúde animal. Atualmente curso Medicina Veterinária, aliando a sensibilidade do afeto diário aos conhecimentos fundamentais de fisiologia, farmacologia, etologia e primeiros socorros.
            </p>

            <p className="text-sm sm:text-base text-emerald-900/75 leading-relaxed font-normal">
              Sei o quanto pode ser angustiante viajar ou passar o dia fora sabendo que seu animalzinho pode ficar ansioso, solitário ou com remédios atrasados. Meu compromisso é ser a extensão do seu cuidado: respeitar a rotina, o espaço do seu lar e os limites de cada animalzinho, sem forçar contato e promovendo segurança absoluta.
            </p>

            {/* Differentiators Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/70 space-y-1.5">
                <div className="text-xs font-bold text-emerald-950 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-md bg-emerald-100 text-emerald-800 flex items-center justify-center">
                    <Award className="w-3.5 h-3.5" />
                  </span>
                  <span>Olhar Clínico Diferenciado</span>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Percepção imediata de alterações comportamentais, fezes, urina, grau de desidratação e parâmetros vitais.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/70 space-y-1.5">
                <div className="text-xs font-bold text-emerald-950 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-md bg-emerald-100 text-emerald-800 flex items-center justify-center">
                    <Heart className="w-3.5 h-3.5" />
                  </span>
                  <span>Manejo Fear-Free &amp; Cat-Friendly</span>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Abordagem paciente que respeita animais tímidos, gatos assustados e cães reativos com reforço positivo.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/70 space-y-1.5">
                <div className="text-xs font-bold text-emerald-950 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-md bg-emerald-100 text-emerald-800 flex items-center justify-center">
                    <Stethoscope className="w-3.5 h-3.5" />
                  </span>
                  <span>Medicação Segura</span>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Experiência em colírios, pomadas, comprimidos, suspensões orais e insulina para animais diabéticos.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/70 space-y-1.5">
                <div className="text-xs font-bold text-emerald-950 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-md bg-emerald-100 text-emerald-800 flex items-center justify-center">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  <span>Sigilo &amp; Segurança Residencial</span>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Protocolo rigoroso de controle de chaves, verificação de trancas, portões fechados e discrição total.
                </p>
              </div>
            </div>

            {/* Social Proof Link */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs">
              <a
                href={CONTACT_INFO.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-stone-100 hover:bg-stone-200 text-emerald-950 font-semibold rounded-xl transition-colors"
              >
                <Instagram className="w-4 h-4 text-pink-600" />
                <span>@{CONTACT_INFO.instagram}</span>
                <ExternalLink className="w-3 h-3 text-stone-500" />
              </a>

              <span className="text-stone-500">
                Mais de 350 visitas realizadas e avaliadas com 5 estrelas em Valinhos, Vinhedo e Campinas.
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
