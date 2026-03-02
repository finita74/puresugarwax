import { ServiceItem, FaqItem, Testimonial } from './types';
import { Leaf, ShieldCheck, HandMetal, Sparkles, Clock, Ban } from 'lucide-react';

export const LOCATION = {
  address: "14701 Lee Hwy, Suite 101",
  subLocation: "Inside Unique Hair Zone",
  city: "Centreville",
  state: "VA",
  zip: "20121",
  phone: "(703) 364-9876",
  email: "PureSugarWax@gmail.com",
  bookingUrl: "https://my.setmore.com/shortBookingPage/ffbfc454-f6ce-425d-8737-bcd4336e1493"
};

export const ALERTS = [
  "Only Accepting Appointments, No Walk-ins",
  "We do not offer Leg Sugaring at this time",
  "Shop will be closed from"
];

export const SERVICES: ServiceItem[] = [
  { name: "Brazilian", price: "$90", note: "(+$10 for extended bikini lines)" },
  { name: "Bikini", price: "$50 - $60" },
  { name: "Underarms", price: "$30 - $35" },
  { name: "Derriere", price: "$35 - $45" },
  { name: "Stomach", price: "$20 - $25" },
  { name: "Full Arms", price: "$70 - $80" },
  { name: "Half Arms", price: "$35 - $40" },
  { name: "Chest", price: "$30 - $35" },
  { name: "Full Legs", price: "N/A", note: "(Not available at this time)" },
  { name: "Half Legs", price: "N/A", note: "(Not available at this time)" },
  { name: "Women's Back", price: "$65 - $75" },
  { name: "Lower Back", price: "$15 - $20" },
  { name: "Men's Back", price: "$90+" },
  { name: "Men's Chest", price: "$90+" },
  { name: "Men's Shoulders", price: "$25+" },
];

export const FAQS: FaqItem[] = [
  {
    question: "Better than Waxing?",
    answer: "Sugaring uses an all natural paste made from real ingredients to remove the hair follicle from the root. The results can last up to 6 weeks.",
    icon: Sparkles
  },
  {
    question: "Will it damage my skin?",
    answer: "Absolutely not. The sugar will not stick to live skin cells, only dead skin cells are removed, so there is no risk of abrasion or tearing.",
    icon: ShieldCheck
  },
  {
    question: "Is the sugar paste safe?",
    answer: "Yes! Our sugar is made of real ingredients: sugar, water, and lemon juice. You could even eat it if you wanted to! No chemicals.",
    icon: Leaf
  },
  {
    question: "How is it applied?",
    answer: "Sugar paste is applied and removed in the natural direction of hair growth. This causes less discomfort than traditional waxing.",
    icon: HandMetal
  },
  {
    question: "More Sanitary?",
    answer: "Hypoallergenic and non-comedogenic sugar paste is applied with gloves, and a fresh ball is used on each client. No cross contamination.",
    icon: Ban
  },
  {
    question: "How often should I go?",
    answer: "Generally every 4–6 weeks, although we’ll discuss your personal hair removal plan at the time of your appointment.",
    icon: Clock
  }
];

export const HOURS = [
  { day: "Monday", time: "10:00 AM - 6:30 PM" },
  { day: "Tuesday", time: "10:00 AM - 7:00 PM" },
  { day: "Wednesday", time: "9:30 AM - 2:00 PM" },
  { day: "Thursday", time: "10:00 AM - 7:00 PM" },
  { day: "Friday", time: "10:00 AM - 6:30 PM" },
  { day: "Saturday", time: "9:30 AM - 2:00 PM" },
  { day: "Sunday", time: "Closed" },
];

export const REVIEWS: Testimonial[] = [
  {
    name: "Ahera M.",
    source: "Yelp",
    rating: 5,
    text: "Absolutely the best sugaring experience I've had. The technique is gentle and the results last so much longer than traditional wax."
  },
  {
    name: "Puneet K.",
    source: "Yelp",
    rating: 5,
    text: "Very professional and clean environment. I felt comfortable the entire time. Highly recommend for first-timers."
  },
  {
    name: "Bridget J.",
    source: "Yelp",
    rating: 5,
    text: "I will never go back to regular waxing after coming here. My skin is so smooth and irritation-free."
  },
  {
    name: "Alishia Q.",
    source: "Yelp",
    rating: 5,
    text: "Great prices and even better service. The staff is knowledgeable and makes you feel at ease."
  }
];