import React, { useState } from 'react';
import { NAV_LINKS } from '../data/content';
import { Brand } from './Icons';

export const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav" id="topo">
      <div className="container nav__inner">
        <Brand />
        <nav className={`nav__links${open ? ' is-open' : ''}`} id="menu" aria-label="Menu principal">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="#orcamento" className="btn btn--primary btn--sm nav__cta" onClick={() => setOpen(false)}>
            Pedir orçamento
          </a>
        </nav>
        <button
          className="nav__toggle"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          aria-controls="menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
};
