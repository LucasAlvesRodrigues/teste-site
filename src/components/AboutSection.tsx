import React from 'react';
import { CONTACT } from '../data/content';

export const AboutSection: React.FC = () => (
  <section className="section" id="sobre">
    <div className="container about">
      <div className="about__media reveal">
        <img className="about__main" src="/img/pet-baboo.jpg" alt="Gabrielly segurando um cãozinho branco no colo" loading="lazy" />
        <img className="about__small" src="/img/pet-da-casa.jpg" alt="Cão de pelo cacheado" loading="lazy" />
        <span className="about__stamp">
          feito com
          <br />
          <strong>amor</strong> ♡
        </span>
      </div>
      <div className="about__text reveal">
        <p className="kicker">Prazer, sou a Gabrielly</p>
        <h2>
          Cuidado com olhar atento e <em>coração presente</em>
        </h2>
        <p>
          Sou a <strong>{CONTACT.name}</strong>, tenho 20 anos e curso Medicina Veterinária. Convivo com
          animais desde criança e tenho um cachorro em casa.
        </p>
        <p>
          Já cuido de pets da família, de amigos e de vizinhos, e tenho experiência com passeios, trabalho
          remunerado e voluntariado em abrigos e resgates. Criei este serviço para oferecer aos tutores uma
          alternativa segura e carinhosa para os momentos em que não podem estar presentes.
        </p>
        <p>
          Durante todo o atendimento respeito a rotina do pet, sigo as orientações do responsável e mantenho
          você atualizado(a), para que a saudade seja a única preocupação. Seu pet merece estar nas mãos
          certas! 🐾
        </p>
        <ul className="pills">
          <li>Responsabilidade</li>
          <li>Respeito à rotina</li>
          <li>Comunicação constante</li>
        </ul>
        <a href="#orcamento" className="btn btn--primary">
          Vamos conversar
        </a>
      </div>
    </div>
  </section>
);
