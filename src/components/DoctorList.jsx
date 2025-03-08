import React from 'react';

const DoctorList = ({ doctors, onBookAppointment }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {doctors.map((doctor) => (
        <div key={doctor.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <div className="relative h-48">
            <img 
              src={doctor.image} 
              alt={doctor.name} 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="p-6 space-y-3">
            <h3 className="text-xl font-semibold text-gray-800">{doctor.name}</h3>
            
            <div className="space-y-2">
              <p className="text-teal-600 font-medium">{doctor.specialization}</p>
              
              <p className="text-gray-600 flex items-center">
                <svg className="w-5 h-5 mr-2 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {doctor.clinicAddress}
              </p>
              
              <p className="text-gray-600 flex items-center">
                <svg className="w-5 h-5 mr-2 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {doctor.experience} years experience
              </p>
            </div>
            
            <button 
              onClick={() => onBookAppointment(doctor)}
              className="w-full mt-4 bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
            >
              Book Appointment
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DoctorList;