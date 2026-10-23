import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { CONTACT_INFO } from '../data/content';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const handleOpenWhatsApp = () => {
    const text = encodeURIComponent(
      'Olá Gabrielly! Acessei seu site e gostaria de tirar uma dúvida sobre serviços de cuidados para o meu pet.'
    );
    window.open(`https://wa.me/${CONTACT_INFO.phone}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2">
      {/* Small popover message */}
      {showTooltip && (
        <div className="bg-white border border-emerald-950/15 text-emerald-950 p-3 rounded-xl shadow-lg text-xs max-w-xs flex items-start gap-2 relative animate-fade-in">
          <div>
            <p className="font-bold">Fale com a Gabrielly no WhatsApp</p>
            <p className="text-stone-600 text-[11px] mt-0.5">
              Tire dúvidas sobre datas, remédios e valores para seu pet.
            </p>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="text-stone-400 hover:text-stone-700 p-0.5"
            aria-label="Fechar aviso"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        type="button"
        onClick={handleOpenWhatsApp}
        className="w-13 h-13 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center shadow-xl shadow-emerald-900/20 active:scale-95 transition-all cursor-pointer group"
        aria-label="Conversar no WhatsApp"
      >
        <MessageCircle className="w-7 h-7 fill-white/20" />
      </button>
    </div>
  );
};
