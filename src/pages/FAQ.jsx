import React from 'react';
import FAQItem from '../components/FAQItem';

const FAQ = () => {
  const faqs = [
    {
      question: 'How do I book an appointment?',
      answer: 'You can book an appointment by searching for a doctor and selecting a date and time.',
    },
    {
      question: 'Can I cancel an appointment?',
      answer: 'Yes, you can cancel an appointment from your dashboard.',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-gray-600">
          Find answers to common questions about our services
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <FAQItem 
              question={faq.question} 
              answer={faq.answer}
            />
          </div>
        ))}
      </div>

      <div className="mt-12 text-center bg-gray-50 rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Still have questions?
        </h2>
        <p className="text-gray-600 mb-4">
          We're here to help. Contact our support team.
        </p>
        <a 
          href="/contact" 
          className="inline-block bg-teal-600 text-white px-6 py-2 rounded-md hover:bg-teal-700 transition-colors"
        >
          Contact Support
        </a>
      </div>
    </div>
  );
};

export default FAQ;