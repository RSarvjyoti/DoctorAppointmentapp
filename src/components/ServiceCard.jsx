import React from 'react';

const ServiceCard = ({ service }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-gray-800 border-b border-teal-100 pb-2">
          {service.name}
        </h3>
        
        <p className="text-gray-600 leading-relaxed">
          {service.description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;