

import React from 'react';
import TeamMemberCard from '../components/TeamMemberCard';

const About = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Dr. John Doe',
      role: 'Cardiologist',
      image: 'https://tse4.mm.bing.net/th?id=OIP.l96BdnBni68Vv9r_AgP7UgHaHa&pid=Api&P=0&h=180',
    },
    {
      id: 2,
      name: 'Dr. Jane Smith',
      role: 'Dermatologist',
      image: 'https://tse2.mm.bing.net/th?id=OIP.3GO8CJYQbs_JPaY6jr2t1wHaHp&pid=Api&P=0&h=180',
    },
    {
      id: 3,
      name: 'Dr. Emily Johnson',
      role: 'Pediatrician',
      image: 'https://tse1.mm.bing.net/th?id=OIP.BCW0cPnEqEV9xnmHeWMM0wHaLJ&pid=Api&P=0&h=180',
    },
    {
      id: 4,
      name: 'Dr. Michael Brown',
      role: 'Orthopedic Surgeon',
      image: 'https://tse2.mm.bing.net/th?id=OIP.B97fQfkfWspQMJ3QQF3j6AHaLu&pid=Api&P=0&h=180',
    },
  ];
  
  const achievements = [
    {
      id: 1,
      title: '10,000+ Appointments',
      description: 'Successfully managed over 10,000 appointments.',
    },
    {
      id: 2,
      title: '500+ Doctors',
      description: 'Trusted by more than 500 doctors worldwide.',
    },
    {
      id: 3,
      title: '24/7 Support',
      description: 'Providing round-the-clock support to our users.',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* About Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">About Us</h1>
        <p className="max-w-3xl mx-auto text-gray-600 text-lg">
          MediBook is a leading platform that connects patients with the best
          doctors in their area. Our mission is to make healthcare accessible and
          convenient for everyone.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-600">
            To provide a seamless and efficient platform for patients to book
            appointments with trusted doctors.
          </p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision</h2>
          <p className="text-gray-600">
            To revolutionize healthcare by making it more accessible and
            patient-centric.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>

      {/* Achievements Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">Our Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((achievement) => (
            <div key={achievement.id} className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold text-teal-600 mb-2">{achievement.title}</h3>
              <p className="text-gray-600">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-teal-600 text-white rounded-lg p-8 text-center">
        <h2 className="text-3xl font-semibold mb-4">Join Us Today</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Experience the future of healthcare with MediBook. Sign up now to
          book appointments with the best doctors.
        </p>
        <button 
          onClick={() => (window.location.href = '/signup')}
          className="bg-white text-teal-600 px-8 py-3 rounded-md font-medium hover:bg-teal-50 transition-colors duration-300"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default About;