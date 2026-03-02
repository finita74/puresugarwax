export interface ServiceItem {
  name: string;
  price: string;
  note?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  icon?: any;
}

export interface Testimonial {
  name: string;
  text: string;
  source: string;
  rating: number;
}