import { ServiceItem, Testimonial, FaqItem } from '../types';

export const IMAGES = {
  hero: '/src/assets/images/hero_gabrielly_petcare_1792724416800.jpg',
  portrait: '/src/assets/images/gabrielly_portrait_1792724417086.jpg',
  serviceCats: '/src/assets/images/service_cats_homecare_1792724418365.jpg',
  serviceVet: '/src/assets/images/service_vet_care_1792724418611.jpg',
  serviceDogWalking: '/src/assets/images/service_dog_walking_1792724418922.jpg',
};

export const CONTACT_INFO = {
  name: 'Gabrielly Kind de Souza',
  brandName: 'MedVet Gabrielly',
  phone: '5519999999999', // Template number ready for direct WhatsApp dispatch
  displayPhone: '(19) 99874-2105',
  instagram: 'medvetgabrielly',
  instagramUrl: 'https://www.instagram.com/medvetgabrielly/',
  regions: ['Valinhos', 'Vinhedo', 'Campinas (regiões próximas)', 'Joapiranga', 'Paiquerê', 'Jardim Paiquerê', 'Dois Córregos'],
  email: 'contato@medvetgabrielly.com',
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'pet_sitter',
    title: 'Pet Sitter Domiciliar Especializado',
    tagline: 'Cuidado afetuoso no ambiente seguro da sua própria casa',
    description: 'Seu pet não precisa passar pelo estresse de adaptação em hotéis ou gaiolas. Visitas presenciais completas com alimentação fresca, higienização rigorosa, brincadeiras de enriquecimento ambiental e muito carinho.',
    image: IMAGES.serviceCats,
    highlights: [
      'Alimentação regrada e água fresca com fontes higienizadas',
      'Limpeza de caixas de areia felinas e tapetes higiênicos',
      'Brincadeiras cognitivas e estímulo com carinho no ritmo do pet',
      'Relatório detalhado em tempo real com fotos e vídeos via WhatsApp',
      'Cuidados da casa: recolhimento de correspondência e rega de plantas'
    ],
    duration: '45 a 60 minutos por visita',
    recommendedFor: 'Gatos que odeiam sair de casa, cães tímidos, animais idosos ou famílias com múltiplos pets.',
    basePrice: 55,
  },
  {
    id: 'vet_care',
    title: 'Cuidados Clínicos & Medicação Especial',
    tagline: 'A tranquilidade do conhecimento veterinário na sua ausência',
    description: 'Administração com rigor técnico de tratamentos médicos prescritos pelo veterinário de confiança da família. Olhar clínico atento a parâmetros de bem-estar, apetite, hidratação e recuperação.',
    image: IMAGES.serviceVet,
    highlights: [
      'Administração de medicação oral, tópica, colírios e otológicos',
      'Aplicação de insulina e monitoramento de glicemia para pets diabéticos',
      'Acompanhamento de pós-operatório e troca cuidadosa de curativos',
      'Avaliação atenta a sinais clínicos de desconforto ou dor',
      'Canal de comunicação aberto com o médico veterinário prescritor'
    ],
    duration: 'Visitas dedicadas conforme prescrição',
    recommendedFor: 'Animais em recuperação cirúrgica, nefropatas, cardiopatas, diabéticos ou em antibioticoterapia.',
    basePrice: 75,
  },
  {
    id: 'dog_walking',
    title: 'Dog Walker & Passeios Educativos',
    tagline: 'Gasto de energia física e mental com respeito e segurança',
    description: 'Passeios individuais e personalizados para cães, priorizando rotas seguras, enriquecimento olfativo, ritmo fisiológico adequado para a idade e reforço positivo.',
    image: IMAGES.serviceDogWalking,
    highlights: [
      'Passeios individuais (ou apenas cães da mesma família)',
      'Atenção estrita à temperatura do asfalto e horários amenos',
      'Hidratação com água fresca durante todo o percurso',
      'Enriquecimento sensorial: permissão para farejar com calma',
      'Higienização de patinhas e patas ao retornar para casa'
    ],
    duration: '40 a 50 minutos',
    recommendedFor: 'Cães com excesso de energia, ansiedade por separação ou que precisam manter condicionamento físico.',
    basePrice: 50,
  },
  {
    id: 'hosting',
    title: 'Hospedagem Familiar Selecionada',
    tagline: 'Uma extensão do lar para hóspedes habituados',
    description: 'Vagas extremamente limitadas em ambiente residencial aconchegante, sem baias ou isolamento, oferecendo convivência harmoniosa e supervisão contínua para tutores que precisam de cuidados integrais.',
    image: IMAGES.hero,
    highlights: [
      'Ambiente 100% telado e seguro sem risco de fuga',
      'Supervisão contínua com carinho e rotina personalizada',
      'Apenas pets sociáveis e com carteira vacinal e vermifugação em dia',
      'Múltiplas atualizações diárias com fotos e vídeos',
      'Adaptação prévia obrigatória antes da hospedagem'
    ],
    duration: 'Diárias de 24 horas',
    recommendedFor: 'Cães e pets sociáveis cujos tutores farão viagens mais longas e necessitam de companhia contínua.',
    basePrice: 95,
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    tutorName: 'Mariana Duarte',
    petName: 'Bento & Flora',
    petSpecies: '2 Gatos (Bento é nefropata)',
    city: 'Valinhos - SP',
    service: 'Pet Sitter + Medicação Diária',
    comment: 'Eu tinha pavor de viajar porque o Bento precisa tomar remédio oral duas vezes ao dia e fica muito estressado fora de casa. A Gabrielly foi um anjo! O conhecimento veterinário dela me deu 100% de paz. Recebia vídeos dele ronronando e tomando o remédio sem trauma.',
    date: 'Setembro de 2026',
    verifiedSource: 'Sittsy',
  },
  {
    id: '2',
    tutorName: 'Rodrigo e Paula Alencar',
    petName: 'Thor',
    petSpecies: 'Golden Retriever (3 anos)',
    city: 'Vinhedo - SP',
    service: 'Dog Walker & Visitas',
    comment: 'O Thor tem muita energia e puxava muito na guia. A Gabi tem uma paciência incrível e usa métodos gentis. Quando voltamos do trabalho, ele está calmo e feliz. A pontualidade e o carinho com o Thor são impecáveis!',
    date: 'Agosto de 2026',
    verifiedSource: 'PetHost',
  },
  {
    id: '3',
    tutorName: 'Dra. Camila Nogueira',
    petName: 'Pipoca',
    petSpecies: 'Gatinha SRD Resgatada',
    city: 'Campinas - SP (Jardim das Paineiras)',
    service: 'Pet Sitter Domiciliar',
    comment: 'A Pipoca se esconde de qualquer visita, mas com a Gabrielly no segundo dia já estava pedindo carinho na barriga. O respeito ao espaço do animal faz toda a diferença. O checklist diário com fotos dá um alívio enorme no coração.',
    date: 'Outubro de 2026',
    verifiedSource: 'Sittsy',
  },
  {
    id: '4',
    tutorName: 'Lucas Ferraz',
    petName: 'Mel',
    petSpecies: 'Shih Tzu (Idosinha 11 anos)',
    city: 'Valinhos - SP',
    service: 'Acompanhamento Pós-Operatório',
    comment: 'A Mel precisava de cuidados com colírio a cada 4 horas após uma cirurgia ocular. A Gabrielly foi super pontual, higiênica e atenta. Nota-se de longe a vocação e a formação técnica dela na veterinária.',
    date: 'Julho de 2026',
    verifiedSource: 'WhatsApp',
  },
];

export const PROTOCOL_STEPS = [
  {
    step: '01',
    title: 'Triagem Inicial Online',
    subtitle: 'Alinhamento rápido e transparente',
    description: 'Entendemos a rotina do seu pet, datas necessárias, necessidades clínicas e bairro em Valinhos, Vinhedo ou Campinas.',
  },
  {
    step: '02',
    title: 'Visita Prévia de Adaptação',
    subtitle: 'Segurança para o tutor e o animal',
    description: 'Vou até a sua residência para conhecer o animal, receber as orientações da casa, testar a chave e criar vínculo prévio.',
  },
  {
    step: '03',
    title: 'Execução do Cuidado',
    subtitle: 'Pontualidade e zelo técnico',
    description: 'Alimentação regrada, água fresca, limpeza, brincadeiras, enriquecimento ambiental e administração precisa de remédios.',
  },
  {
    step: '04',
    title: 'Relatório em Tempo Real',
    subtitle: 'Tranquilidade na palma da mão',
    description: 'A cada visita você recebe no WhatsApp um diário detalhado com fotos, vídeos descontraídos e checklist das atividades.',
  },
];

export const FAQS: FaqItem[] = [
  {
    category: 'visita_previa',
    question: 'Como funciona a visita prévia de adaptação?',
    answer: 'Antes do início de qualquer atendimento, agendamos uma visita prévia presencial na sua residência. Esse momento é essencial para que o animal se acostume com minha presença ao seu lado, você me mostre onde ficam os pertences, ração e produtos de limpeza, além de alinharmos os detalhes das chaves e portões.',
  },
  {
    category: 'medicacao',
    question: 'Você pode administrar qualquer tipo de medicamento?',
    answer: 'Como estudante e futura médica veterinária com treinamento prático, administro medicações orais (comprimidos, suspensões), tópicas (pomadas, curativos), colírios e injetáveis (como insulina para pets diabéticos), sempre estritamente embasada na prescrição fornecida pelo médico veterinário responsável do seu animal.',
  },
  {
    category: 'seguranca',
    question: 'Como é feita a guarda e devolução das chaves da residência?',
    answer: 'A segurança do seu lar é tratada com total sigilo e responsabilidade. As chaves são identificadas sem etiquetas de endereço e mantidas em local seguro. A devolução pode ser combinada pessoalmente no seu retorno ou deixada em local combinado dentro da residência na última visita.',
  },
  {
    category: 'servicos',
    question: 'E se o meu pet apresentar algum sinal de mal-estar durante o período?',
    answer: 'Graças à formação veterinária, possuo um olhar clínico treinado para identificar precocemente sinais sutis como apatia, dor, desidratação ou alterações urinárias/fecais. Caso ocorra qualquer anormalidade, entro em contato imediato com você e com a clínica veterinária de sua preferência.',
  },
  {
    category: 'servicos',
    question: 'Quais cidades e regiões você atende?',
    answer: 'O atendimento prioritário contempla Valinhos (todos os bairros e condomínios), Vinhedo e bairros de Campinas próximos (como Nova Campinas, Sousas, Paineiras, Alphaville Campinas e Proença). Para outras regiões, consulte disponibilidade.',
  },
  {
    category: 'seguranca',
    question: 'Quantos animais da mesma família podem ser atendidos por visita?',
    answer: 'Atendemos múltiplos pets da mesma residência! Em visitas domiciliares, cobrimos até 2 pets no valor padrão, com uma pequena taxa adicional para 3 ou mais animais para garantir que todos recebam o tempo de atenção e carinho individual merecido.',
  },
];
