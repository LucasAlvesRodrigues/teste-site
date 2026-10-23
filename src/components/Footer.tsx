import React from 'react';
import { CONTACT, DEFAULT_WA_TEXT, NAV_LINKS, whatsappLink } from '../data/content';
import { Brand, WhatsAppIcon } from './Icons';

export const CtaSection: React.FC = () => (
  <section className="cta">
    <div className="container cta__inner">
      <p className="kicker kicker--light">Vamos conversar?</p>
      <h2>
        Seu pet merece <em>esse cuidado</em>.
      </h2>
      <p>Solicite um orçamento sem compromisso e tire todas as suas dúvidas.</p>
      <a className="btn btn--light" href={whatsappLink(DEFAULT_WA_TEXT)} target="_blank" rel="noopener">
        <WhatsAppIcon />
        Chamar no WhatsApp
      </a>
    </div>
  </section>
);

export const Footer: React.FC = () => (
  <footer className="footer">
    <div className="container footer__grid">
      <div>
        <Brand light />
        <p>Cuidado, carinho e confiança para o seu melhor amigo enquanto você está fora.</p>
      </div>
      <div>
        <h4>Navegação</h4>
        {NAV_LINKS.map((l) => (
          <a key={l.href} href={l.href}>
            {l.label}
          </a>
        ))}
      </div>
      <div>
        <h4>Contato</h4>
        <a href={whatsappLink()} target="_blank" rel="noopener">
          {CONTACT.displayPhone}
        </a>
        <a href={CONTACT.instagramUrl} target="_blank" rel="noopener">
          {CONTACT.instagram}
        </a>
        <a href={CONTACT.sittsyUrl} target="_blank" rel="noopener">
          Perfil na Sittsy
        </a>
        <a href={CONTACT.pethostUrl} target="_blank" rel="noopener">
          Perfil na PetHost
        </a>
      </div>
      <div>
        <h4>Atendimento</h4>
        <span>Valinhos</span>
        <span>Vinhedo</span>
        <span>Campinas e região</span>
      </div>
    </div>
    <div className="container footer__bottom">
      <span>
        © {new Date().getFullYear()} {CONTACT.name} · Pet Sitter &amp; Dog Walker
      </span>
      <a href="#topo">Voltar ao topo ↑</a>
    </div>
  </footer>
);

export const FloatingWhatsApp: React.FC = () => (
  <a
    className="wa-float"
    href={whatsappLink('Olá, Gabrielly! Vim pelo site.')}
    target="_blank"
    rel="noopener"
    aria-label="Conversar no WhatsApp"
  >
    <WhatsAppIcon className="" />
  </a>
);
