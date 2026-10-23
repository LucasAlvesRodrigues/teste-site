import React from 'react';
import { PETS } from '../data/content';

export const PetsSection: React.FC = () => (
  <section className="section section--soft" id="pets">
    <div className="container">
      <header className="section__head">
        <p className="kicker">Clientes de quatro patas</p>
        <h2>
          Alguns pets que <em>já cuidei</em>
        </h2>
      </header>
      <div className="pets">
        {PETS.map((p) => (
          <figure key={p.name} className="pet reveal">
            <img src={p.image} alt={p.breed ? `${p.name}, ${p.breed}` : p.name} loading="lazy" />
            <figcaption>
              <strong>{p.name}</strong>
              {p.breed && <span>{p.breed}</span>}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  </section>
);
