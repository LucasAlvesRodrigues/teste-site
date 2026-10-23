import { Differential, Pet, Service, Step, Testimonial } from '../types';

/**
 * Conteúdo reunido de medvetgabrielly.com, do perfil PetHost e do perfil Sittsy
 * da Gabrielly (outubro de 2026). Fotos em /public/img vêm do perfil Sittsy.
 */

export const CONTACT = {
  name: 'Gabrielly Kind de Souza',
  whatsapp: '5535999772945',
  displayPhone: '(35) 99977-2945',
  instagram: '@medvetgabrielly',
  instagramUrl: 'https://www.instagram.com/medvetgabrielly/',
  sittsyUrl: 'https://br.sittsy.com/pet-sitter/gabrielly-kind-de-souza--valinhos',
  pethostUrl: 'https://pethost.com.br/perfil/gabriellykind',
  regions: 'Valinhos, Vinhedo, Campinas e região',
};

export const whatsappLink = (text?: string) =>
  `https://wa.me/${CONTACT.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ''}`;

export const DEFAULT_WA_TEXT = 'Olá, Gabrielly! Vim pelo site e gostaria de um orçamento.';

export const NAV_LINKS = [
  { href: '#servicos', label: 'Serviços' },
  { href: '#sobre', label: 'Sobre mim' },
  { href: '#como-funciona', label: 'Como funciona' },
  { href: '#onde-contratar', label: 'Onde contratar' },
];

export const TRUST = [
  { title: 'Identidade verificada', text: 'e Certificado Sittsy (out/2026)' },
  { title: 'Auxiliar de Veterinária', text: 'curso validado pela PetHost' },
  { title: 'Cães e gatos', text: 'de pequeno, médio e grande porte' },
  { title: 'Encontro prévio gratuito', text: 'para conhecer você e seu pet' },
];

export const MARQUEE = ['Valinhos', 'Vinhedo', 'Campinas e região', 'Fins de semana', 'Horários flexíveis', 'Cães e gatos'];

export const SERVICES: Service[] = [
  {
    title: 'Passeios personalizados',
    description: 'Exercício, diversão e segurança no ritmo do seu pet, do filhote cheio de energia ao idoso que gosta de ir com calma.',
    image: '/img/passeio-jardim.jpg',
    alt: 'Cãozinho passeando em um jardim',
    tag: 'Na sua casa',
    formValue: 'Passeio',
    imgClass: 'pos-br',
  },
  {
    title: 'Visitas domiciliares',
    description: 'Alimentação, água fresca, limpeza, brincadeiras e companhia no conforto de casa, sem o estresse de hotelzinho.',
    image: '/img/pet-pepe-serena.jpg',
    alt: 'Gabrielly com uma gatinha no colo',
    tag: 'Na sua casa',
    formValue: 'Visita domiciliar',
  },
  {
    title: 'Cuidados dia e noite',
    description: 'Cuido do seu pet durante o dia e passo a noite na sua casa, para ele não ficar sozinho enquanto você está fora.',
    image: '/img/soneca.jpg',
    alt: 'Cachorro dormindo enrolado em uma manta',
    tag: 'Na sua casa',
    formValue: 'Cuidados dia e noite',
  },
  {
    title: 'Hospedagem e creche',
    description: 'Ambiente de casa, com espaço externo, sem crianças e livre de fumo. Os pets podem subir no sofá e na cama, e há veterinário por perto.',
    image: '/img/hospedagem-sofa.jpg',
    alt: 'Cachorro relaxando no sofá',
    tag: 'Na casa da Gabrielly',
    tagVariant: 'warm',
    formValue: 'Hospedagem',
  },
  {
    title: 'Administração de medicação',
    description: 'Medicação oral e injetável quando necessário, seguindo a prescrição do médico-veterinário e a autorização do responsável, com registro de cada dose.',
    image: '/img/pet-tomas.jpg',
    alt: 'Beagle sentado olhando para a câmera',
    tag: 'Saúde',
    tagVariant: 'clinic',
    formValue: 'Medicação',
  },
  {
    title: 'Fotos e vídeos',
    description: 'Acompanhe cada atendimento pelo WhatsApp e fique tranquilo(a) mesmo quando estiver longe.',
    image: '/img/gabrielly-e-pet.jpg',
    alt: 'Gabrielly tirando selfie com um cão de pelo cacheado',
    tag: 'Sempre incluso',
  },
];

export const DIFFERENTIALS: Differential[] = [
  { title: 'Olhar atento', description: 'Percebo mudanças de apetite, comportamento ou disposição e aviso você na hora.' },
  { title: 'Respeito à rotina', description: 'Horários, manias e preferências do seu pet são seguidos à risca.' },
  { title: 'Manejo seguro', description: 'Medicações e cuidados especiais feitos com técnica e responsabilidade.' },
  { title: 'Comunicação clara', description: 'Você fica por dentro de tudo durante o atendimento, sem precisar perguntar.' },
];

export const SKILLS = [
  'Primeiros socorros',
  'Medicação oral',
  'Medicação injetável',
  'Pets idosos',
  'Pets com necessidades especiais',
  'Exercícios para pets',
  'Transporte de emergência',
];

export const PETS: Pet[] = [
  { name: 'Choco', breed: 'American Pit Bull Terrier', image: '/img/pet-choco.jpg' },
  { name: 'Pepe e Serena', breed: 'SRD', image: '/img/pet-pepe-serena.jpg' },
  { name: 'Tomás', breed: 'Beagle', image: '/img/pet-tomas.jpg' },
  { name: 'Moana', breed: 'Raça mista', image: '/img/pet-moana.jpg' },
  { name: 'Baboo', breed: 'Shih Tzu', image: '/img/pet-baboo.jpg' },
  { name: 'Paçoca', image: '/img/pet-pacoca.jpg' },
];

export const STEPS: Step[] = [
  {
    title: 'Conte sobre seu pet',
    description: 'Rotina, personalidade, datas e necessidades especiais, pelo formulário ou direto no WhatsApp. Gosto de saber como ele se dá com outros animais, se toma medicação e se tem alergias ou problemas de saúde.',
  },
  {
    title: 'Combinamos os detalhes',
    description: 'Alinhamos serviço, duração, horários, endereço e as orientações de cuidado. Se quiser, marcamos um encontro prévio gratuito para eu conhecer vocês.',
  },
  {
    title: 'Seu pet recebe todo carinho',
    description: 'E você recebe notícias, fotos e vídeos durante o atendimento.',
  },
];

export const FORM_SPECIES = [
  { value: 'Cachorro', label: '🐶 Cachorro' },
  { value: 'Gato', label: '🐱 Gato' },
  { value: 'Outro', label: '🐾 Outro' },
];

export const FORM_SERVICES = [
  { value: 'Passeio', label: 'Passeio' },
  { value: 'Visita domiciliar', label: 'Visita domiciliar' },
  { value: 'Cuidados dia e noite', label: 'Dia e noite' },
  { value: 'Hospedagem', label: 'Hospedagem' },
  { value: 'Creche', label: 'Creche' },
  { value: 'Medicação', label: 'Medicação' },
];

export const FORM_CITIES = ['Valinhos', 'Vinhedo', 'Campinas', 'Outra da região'];

export const TESTIMONIALS: Testimonial[] = [
  { name: 'Cristiane F.', text: 'Super profissional! Meu cachorro adora a Gabi, super carinhosa com os bichinhos. Confio de olhos fechados!' },
  { name: 'Caio', text: 'Recomendo demais o trabalho da Gabrielly, faz tudo com muito carinho, enviou fotos o tempo todo. Agora só deixo minha cachorrinha com ela.' },
  { name: 'Lucas R.', text: 'Muito responsável e compreensiva com meu cachorro, me deixou atualizado o tempo todo e me mandou fotos diariamente!' },
  { name: 'Juliana', text: 'Gabi sempre muito atenciosa e carinhosa com meu cachorro Choco! Excelente.' },
  { name: 'Alexandre A.', text: 'Trabalho sério e com muito amor.' },
  { name: 'Solei S.', text: 'Ótima profissional!!!!' },
  { name: 'Paula S.', text: 'Excelente profissional.' },
  { name: 'Raiane', text: 'Excelente profissional.' },
];
