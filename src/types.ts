export interface Service {
  title: string;
  description: string;
  image: string;
  alt: string;
  tag: string;
  tagVariant?: 'warm' | 'clinic';
  formValue?: string;
  imgClass?: string;
}

export interface Differential {
  title: string;
  description: string;
}

export interface Pet {
  name: string;
  breed?: string;
  image: string;
}

export interface Step {
  title: string;
  description: string;
}

export interface Testimonial {
  name: string;
  text: string;
}
