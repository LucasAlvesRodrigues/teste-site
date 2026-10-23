import React from 'react';
import { DIFFERENTIALS, SKILLS } from '../data/content';

export const DifferentialSection: React.FC = () => (
  <section className="section section--dark" id="diferencial">
    <div className="container">
      <header className="section__head section__head--light">
        <p className="kicker">O diferencial</p>
        <h2>
          Por que uma <em>estudante de veterinária</em>?
        </h2>
        <p>
          Porque cuidar bem vai além de encher o pote de ração. Conhecer comportamento e saúde animal faz
          diferença nos detalhes.
        </p>
      </header>

      <div className="diffs">
        {DIFFERENTIALS.map((d, i) => (
          <div key={d.title} className="diff reveal">
            <span className="diff__n">{String(i + 1).padStart(2, '0')}</span>
            <h3>{d.title}</h3>
            <p>{d.description}</p>
          </div>
        ))}
      </div>

      <div className="skills reveal">
        <p className="skills__title">Habilidades</p>
        <ul>
          {SKILLS.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);
