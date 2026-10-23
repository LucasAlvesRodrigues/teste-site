import React, { useState } from 'react';
import { Menu, X, Heart } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-emerald-950/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          {/* Zone 1: Brand title, single clean text element wordmark */}
          <a
            href="#"
            className="flex items-center gap-2.5 text-xl font-bold tracking-tight text-emerald-950 whitespace-nowrap shrink-0 hover:opacity-90 transition-opacity"
          >
            <span className="w-9 h-9 rounded-xl bg-emerald-800 text-white flex items-center justify-center shadow-xs">
              <Heart className="w-5 h-5 fill-emerald-100/30 text-white" />
            </span>
            <span className="font-serif-display text-2xl tracking-tight text-emerald-950">
              MedVet Gabrielly
            </span>
          </a>

          {/* Zone 2: 4-5 single-line clean text navigation links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-emerald-900/80">
            <a
              href="#servicos"
              className="hover:text-emerald-950 transition-colors whitespace-nowrap shrink-0"
            >
              Serviços
            </a>
            <a
              href="#protocolo"
              className="hover:text-emerald-950 transition-colors whitespace-nowrap shrink-0"
            >
              Como Funciona
            </a>
            <a
              href="#sobre"
              className="hover:text-emerald-950 transition-colors whitespace-nowrap shrink-0"
            >
              Sobre Gabrielly
            </a>
            <a
              href="#depoimentos"
              className="hover:text-emerald-950 transition-colors whitespace-nowrap shrink-0"
            >
              Depoimentos
            </a>
            <a
              href="#simulador"
              className="hover:text-emerald-950 transition-colors whitespace-nowrap shrink-0"
            >
              Simulador
            </a>
            <a
              href="#faq"
              className="hover:text-emerald-950 transition-colors whitespace-nowrap shrink-0"
            >
              Dúvidas
            </a>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenBooking}
              className="px-5 py-2.5 text-sm font-semibold text-white bg-emerald-800 rounded-xl hover:bg-emerald-900 transition-all duration-150 shadow-sm active:scale-98 whitespace-nowrap shrink-0 cursor-pointer"
            >
              Agendar Atendimento
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-emerald-900 hover:bg-emerald-50 focus:outline-hidden"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-emerald-950/10 bg-white px-4 pt-3 pb-5 space-y-3">
          <a
            href="#servicos"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-emerald-900 rounded-lg hover:bg-emerald-50"
          >
            Serviços
          </a>
          <a
            href="#protocolo"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-emerald-900 rounded-lg hover:bg-emerald-50"
          >
            Como Funciona
          </a>
          <a
            href="#sobre"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-emerald-900 rounded-lg hover:bg-emerald-50"
          >
            Sobre Gabrielly
          </a>
          <a
            href="#depoimentos"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-emerald-900 rounded-lg hover:bg-emerald-50"
          >
            Depoimentos
          </a>
          <a
            href="#simulador"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-emerald-900 rounded-lg hover:bg-emerald-50"
          >
            Simular Valores
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-emerald-900 rounded-lg hover:bg-emerald-50"
          >
            Perguntas Frequentes
          </a>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 px-4 text-center text-sm font-semibold text-white bg-emerald-800 rounded-xl hover:bg-emerald-900 transition-colors cursor-pointer"
            >
              Agendar Atendimento
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
