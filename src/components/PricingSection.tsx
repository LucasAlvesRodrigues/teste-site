import React from 'react';
import { CONTACT } from '../data/content';

export const PricingSection: React.FC = () => (
  <section className="section section--soft" id="onde-contratar">
    <div className="container">
      <header className="section__head">
        <p className="kicker">Onde me encontrar</p>
        <h2>
          Formas de <em>contratar</em>
        </h2>
        <p>
          Você pode falar comigo direto pelo WhatsApp ou reservar pelas plataformas, que oferecem garantia e
          pagamento seguro.
        </p>
      </header>

      <div className="plans">
        <article className="plan plan--featured reveal">
          <p className="plan__badge">Direto comigo</p>
          <h3>WhatsApp</h3>
          <p className="plan__desc">
            Orçamento sem compromisso, de acordo com o serviço, a duração, a frequência e a distância.
          </p>
          <a className="btn btn--light" href="#orcamento">
            Pedir orçamento
          </a>
        </article>

        <article className="plan reveal">
          <p className="plan__badge plan__badge--sittsy">Sittsy</p>
          <h3>Perfil na Sittsy</h3>
          <a className="btn btn--ghost" href={CONTACT.sittsyUrl} target="_blank" rel="noopener">
            Ver perfil na Sittsy ↗
          </a>
        </article>

        <article className="plan reveal">
          <p className="plan__badge plan__badge--pethost">PetHost</p>
          <h3>Perfil na PetHost</h3>
          <a className="btn btn--ghost" href={CONTACT.pethostUrl} target="_blank" rel="noopener">
            Ver perfil na PetHost ↗
          </a>
        </article>
      </div>
    </div>
  </section>
);
