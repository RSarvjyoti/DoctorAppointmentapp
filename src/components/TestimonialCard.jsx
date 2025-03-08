import React from 'react';

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <svg 
          className="absolute -top-4 -left-4 h-8 w-8 text-teal-500 opacity-25" 
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
        
        <p className="text-gray-600 italic mb-6 pt-2">
          {testimonial.text}
        </p>
      </div>

      <div className="mt-4 border-t pt-4 border-gray-100">
        <h4 className="font-semibold text-gray-800">
          {testimonial.name}
        </h4>
        <p className="text-sm text-teal-600">
          {testimonial.location}
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;