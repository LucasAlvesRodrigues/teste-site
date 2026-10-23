import React, { useState } from 'react';
import { CONTACT, FORM_CITIES, FORM_SERVICES, FORM_SPECIES, whatsappLink } from '../data/content';
import { WhatsAppIcon } from './Icons';

interface Props {
  selectedServices: string[];
  onChangeServices: (services: string[]) => void;
}

export const QuoteForm: React.FC<Props> = ({ selectedServices, onChangeServices }) => {
  const [nome, setNome] = useState('');
  const [pet, setPet] = useState('');
  const [especie, setEspecie] = useState(FORM_SPECIES[0].value);
  const [cidade, setCidade] = useState(FORM_CITIES[0]);
  const [datas, setDatas] = useState('');
  const [obs, setObs] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const nomeInvalid = submitted && !nome.trim();
  const petInvalid = submitted && !pet.trim();
  const hasError = submitted && (!nome.trim() || !pet.trim() || selectedServices.length === 0);

  const toggleService = (value: string) => {
    onChangeServices(
      selectedServices.includes(value)
        ? selectedServices.filter((s) => s !== value)
        : [...selectedServices, value]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    if (!nome.trim() || !pet.trim() || selectedServices.length === 0) return;

    const lines = [
      'Olá, Gabrielly! Vim pelo site e gostaria de um orçamento. 🐾',
      '',
      `*Meu nome:* ${nome.trim()}`,
      `*Pet:* ${pet.trim()} (${especie})`,
      `*Serviços:* ${selectedServices.join(', ')}`,
      `*Cidade:* ${cidade}`,
    ];
    if (datas.trim()) lines.push(`*Datas/período:* ${datas.trim()}`);
    if (obs.trim()) lines.push(`*Sobre o pet:* ${obs.trim()}`);

    window.open(whatsappLink(lines.join('\n')), '_blank', 'noopener');
  };

  return (
    <section className="section" id="orcamento">
      <div className="container quote">
        <div className="quote__info">
          <p className="kicker">Orçamento sem compromisso</p>
          <h2>
            Conte sobre seu <em>pet</em>
          </h2>
          <p>Leva menos de 1 minuto. Sua mensagem chega pronta no meu WhatsApp e eu respondo o quanto antes.</p>
          <ul className="contacts">
            <li>
              <span className="contacts__ico">💬</span>
              <div>
                <small>WhatsApp</small>
                <a href={whatsappLink()} target="_blank" rel="noopener">
                  {CONTACT.displayPhone}
                </a>
              </div>
            </li>
            <li>
              <span className="contacts__ico">📷</span>
              <div>
                <small>Instagram</small>
                <a href={CONTACT.instagramUrl} target="_blank" rel="noopener">
                  {CONTACT.instagram}
                </a>
              </div>
            </li>
            <li>
              <span className="contacts__ico">📍</span>
              <div>
                <small>Atendimento</small>
                <span>{CONTACT.regions}</span>
              </div>
            </li>
          </ul>
        </div>

        <form className="form" onSubmit={handleSubmit} noValidate>
          <h3>Pedido de orçamento</h3>
          <p className="form__hint">Os campos com * são obrigatórios.</p>

          <div className="form__row">
            <label>
              Seu nome *
              <input
                type="text"
                autoComplete="name"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className={nomeInvalid ? 'is-invalid' : undefined}
              />
            </label>
            <label>
              Nome do pet *
              <input
                type="text"
                value={pet}
                onChange={(e) => setPet(e.target.value)}
                className={petInvalid ? 'is-invalid' : undefined}
              />
            </label>
          </div>

          <fieldset>
            <legend>Seu pet é…</legend>
            <div className="chips">
              {FORM_SPECIES.map((s) => (
                <label key={s.value} className="chip">
                  <input
                    type="radio"
                    name="especie"
                    value={s.value}
                    checked={especie === s.value}
                    onChange={() => setEspecie(s.value)}
                  />
                  <span>{s.label}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <fieldset>
            <legend>Serviços de interesse *</legend>
            <div className="chips">
              {FORM_SERVICES.map((s) => (
                <label key={s.value} className="chip">
                  <input
                    type="checkbox"
                    value={s.value}
                    checked={selectedServices.includes(s.value)}
                    onChange={() => toggleService(s.value)}
                  />
                  <span>{s.label}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <div className="form__row">
            <label>
              Cidade
              <select value={cidade} onChange={(e) => setCidade(e.target.value)}>
                {FORM_CITIES.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
            </label>
            <label>
              Datas / período
              <input type="text" placeholder="Ex.: 10 a 15/12" value={datas} onChange={(e) => setDatas(e.target.value)} />
            </label>
          </div>

          <label>
            Algo importante sobre o pet?
            <textarea
              rows={3}
              placeholder="Rotina, temperamento, medicações, alergias…"
              value={obs}
              onChange={(e) => setObs(e.target.value)}
            />
          </label>

          {hasError && (
            <p className="form__error" role="alert">
              Preencha seu nome, o nome do pet e escolha ao menos um serviço.
            </p>
          )}

          <button type="submit" className="btn btn--primary btn--block">
            <WhatsAppIcon />
            Enviar pelo WhatsApp
          </button>
          <p className="form__hint form__hint--center">
            Nada é enviado automaticamente: o WhatsApp abre com a mensagem pronta para você revisar.
          </p>
        </form>
      </div>
    </section>
  );
};
