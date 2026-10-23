import React from 'react';
import { DEFAULT_WA_TEXT, MARQUEE, TRUST, whatsappLink } from '../data/content';
import { WhatsAppIcon } from './Icons';

export const Hero: React.FC = () => (
  <>
    <section className="hero">
      <div className="container hero__grid">
        <div className="hero__text">
          <p className="kicker">Estudante de Medicina Veterinária · Valinhos, Vinhedo &amp; Campinas</p>
          <h1>
            Seu pet feliz, seguro e <em>muito bem cuidado</em>.
          </h1>
          <p className="lead">
            Passeios, visitas domiciliares, hospedagem e cuidados com medicação, com olhar atento,
            responsabilidade e muito carinho. Você viaja tranquilo(a) e seu melhor amigo continua se
            sentindo em casa.
          </p>
          <div className="hero__ctas">
            <a className="btn btn--primary" href={whatsappLink(DEFAULT_WA_TEXT)} target="_blank" rel="noopener">
              <WhatsAppIcon />
              Chamar no WhatsApp
            </a>
            <a className="btn btn--ghost" href="#servicos">
              Ver serviços
            </a>
          </div>
          <ul className="hero__checks">
            <li>Horários flexíveis e fins de semana</li>
            <li>Fotos e vídeos em cada atendimento</li>
            <li>Atendimento personalizado</li>
          </ul>
        </div>

        <div className="hero__media">
          <div className="hero__photo">
            <img
              src="/img/gabrielly-jaleco.jpg"
              alt="Gabrielly Kind de jaleco de Medicina Veterinária, sorrindo"
              width={750}
              height={1000}
            />
          </div>
          <div className="float-card float-card--top">
            <span className="float-card__icon">🩺</span>
            <div>
              <strong>Olhar de veterinária</strong>
              <small>cuidado além do passeio</small>
            </div>
          </div>
          <div className="float-card float-card--bottom">
            <span className="float-card__icon">💚</span>
            <div>
              <strong>Seu pet em boas mãos</strong>
              <small>como parte da família</small>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <ul className="trust">
          {TRUST.map((t) => (
            <li key={t.title}>
              <strong>{t.title}</strong>
              <span>{t.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>

    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {[...MARQUEE, ...MARQUEE].map((m, i) => (
          <React.Fragment key={i}>
            <span>{m}</span>
            <span>✦</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  </>
);
