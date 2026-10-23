import React from 'react';
import { STEPS } from '../data/content';

export const HowItWorks: React.FC = () => (
  <section className="section" id="como-funciona">
    <div className="container how">
      <div>
        <header className="section__head section__head--left">
          <p className="kicker">Simples e tranquilo</p>
          <h2>
            Como <em>funciona</em>?
          </h2>
          <p>Em três passos seu pet já está em boas mãos.</p>
        </header>
        <ol className="steps">
          {STEPS.map((s, i) => (
            <li key={s.title} className="reveal">
              <span>{i + 1}</span>
              <div>
                <h3>{s.title}</h3>
                <p>{s.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div className="phone reveal" aria-label="Exemplo de conversa no WhatsApp">
        <div className="phone__head">
          <span className="phone__avatar">G</span>
          <div>
            <strong>Gabrielly</strong>
            <small>online</small>
          </div>
        </div>
        <div className="phone__body">
          <div className="msg msg--in">
            Cheguei! Ele me recebeu todo feliz 🐾<time>14:02</time>
          </div>
          <div className="msg msg--in msg--img">
            <img src="/img/cao-piscina.jpg" alt="" loading="lazy" />
            <time>14:20</time>
          </div>
          <div className="msg msg--in">
            Comeu tudo, água trocada e passeio de 30 min feito ✅<time>14:41</time>
          </div>
          <div className="msg msg--out">
            Que alívio! Obrigada, Gabi 💚<time>14:43</time>
          </div>
        </div>
        <p className="phone__caption">Notícias em tempo real, onde você estiver.</p>
      </div>
    </div>
  </section>
);
