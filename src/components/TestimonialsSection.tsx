import React from 'react';
import { TESTIMONIALS } from '../data/content';

export const TestimonialsSection: React.FC = () => (
  <section className="section" id="depoimentos">
    <div className="container">
      <header className="section__head">
        <p className="kicker">Depoimentos</p>
        <h2>
          O que dizem os <em>tutores</em>
        </h2>
        <p className="reviews__summary">
          <span className="stars" aria-label="5 de 5 estrelas">★★★★★</span>
          <span>Todas as avaliações com nota máxima</span>
        </p>
      </header>

      <div className="reviews">
        {TESTIMONIALS.map((t) => (
          <figure key={t.name} className="review reveal">
            <span className="stars" aria-label="5 de 5 estrelas">★★★★★</span>
            <blockquote>{t.text}</blockquote>
            <figcaption>
              <span className="review__avatar" aria-hidden="true">
                {t.name.charAt(0)}
              </span>
              <div>
                <strong>{t.name}</strong>
                <small>Tutor(a) atendido(a)</small>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  </section>
);
