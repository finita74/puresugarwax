import React from 'react';
import { Star, Quote } from 'lucide-react';
import { REVIEWS } from '../constants';

const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-teal-900 text-stone-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-5xl text-white mb-6">Client Love</h2>
          <p className="text-teal-100/70 max-w-2xl mx-auto">See what our community is saying about their Pure Sugar Wax experience.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {REVIEWS.map((review, index) => (
            <div key={index} className="bg-teal-800/50 p-8 rounded-xl backdrop-blur-sm border border-teal-700 relative hover:border-teal-500 transition-colors">
              <Quote className="absolute top-6 right-6 text-teal-600 opacity-50" size={48} />
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-lg italic text-teal-50 mb-6 font-serif">"{review.text}"</p>
              <div className="flex items-center justify-between">
                <span className="font-bold text-white tracking-wide">{review.name}</span>
                <span className="text-xs uppercase bg-teal-950 px-3 py-1 rounded-full text-teal-300 border border-teal-700">
                  via {review.source}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;