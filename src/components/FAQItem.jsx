import React, { useState } from 'react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        className="w-full py-5 flex justify-between items-center text-left hover:bg-gray-50 transition-colors duration-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h4 className="text-lg font-medium text-gray-900">{question}</h4>
        <span className="ml-6 flex-shrink-0 text-gray-500 text-xl">
          {isOpen ? '−' : '+'}
        </span>
      </button>
      
      <div className={`overflow-hidden transition-all duration-200 ${isOpen ? 'max-h-96 pb-5' : 'max-h-0'}`}>
        <p className="text-gray-600 px-1">
          {answer}
        </p>
      </div>
    </div>
  );
};

export default FAQItem;