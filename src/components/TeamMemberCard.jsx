import React from 'react';

const TeamMemberCard = ({ member }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-64">
        <img 
          src={member.image} 
          alt={member.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      <div className="p-4 text-center">
        <h3 className="text-xl font-semibold text-gray-800 mb-1">
          {member.name}
        </h3>
        <p className="text-teal-600 font-medium">
          {member.role}
        </p>
      </div>
    </div>
  );
};

export default TeamMemberCard;