import React from 'react';
import { SERVICES } from '../data/content';

interface Props {
  onSelectService: (value: string) => void;
}

export const ServicesSection: React.FC<Props> = ({ onSelectService }) => (
  <section className="section" id="servicos">
    <div className="container">
      <header className="section__head">
        <p className="kicker">Cuidado completo</p>
        <h2>
          Tudo o que seu pet <em>precisa</em>
        </h2>
        <p>Cada atendimento é combinado de acordo com a rotina, o temperamento e as necessidades do seu animal.</p>
      </header>

      <div className="services">
        {SERVICES.map((s) => (
          <article key={s.title} className="service reveal">
            <div className="service__img">
              <img className={s.imgClass} src={s.image} alt={s.alt} loading="lazy" />
            </div>
            <div className="service__body">
              <span className={`tag${s.tagVariant ? ` tag--${s.tagVariant}` : ''}`}>{s.tag}</span>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
              <a href="#orcamento" className="link" onClick={() => s.formValue && onSelectService(s.formValue)}>
                {s.formValue ? 'Quero este →' : 'Pedir orçamento →'}
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
