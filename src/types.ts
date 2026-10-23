export type PetSpecies = 'cat' | 'dog' | 'both';

export type ServiceType = 'pet_sitter' | 'vet_care' | 'dog_walking' | 'hosting';

export interface ServiceItem {
  id: ServiceType;
  title: string;
  tagline: string;
  description: string;
  image: string;
  highlights: string[];
  duration: string;
  recommendedFor: string;
  basePrice: number;
}

export interface BookingFormData {
  tutorName: string;
  tutorPhone: string;
  tutorEmail: string;
  city: 'Valinhos' | 'Vinhedo' | 'Campinas' | 'Outra região';
  neighborhood: string;
  petName: string;
  petSpecies: 'Gato' | 'Cachorro' | 'Ambos / Múltiplos';
  petAge: string;
  petBreed: string;
  petBehavior: string;
  requiresMedication: boolean;
  medicationDetails: string;
  serviceType: ServiceType;
  startDate: string;
  endDate: string;
  visitsPerDay: number;
  specialInstructions: string;
}

export interface Testimonial {
  id: string;
  tutorName: string;
  petName: string;
  petSpecies: string;
  city: string;
  service: string;
  comment: string;
  date: string;
  verifiedSource: 'Sittsy' | 'PetHost' | 'WhatsApp';
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'servicos' | 'seguranca' | 'medicacao' | 'visita_previa';
}
