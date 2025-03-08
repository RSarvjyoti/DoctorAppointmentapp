import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHospital, FaUserMd, FaAmbulance, FaHeartbeat, FaBrain, FaTeeth } from 'react-icons/fa';

const Services = () => {
  const navigate = useNavigate();

  const serviceCategories = [
    {
      id: 1,
      icon: <FaUserMd className="w-12 h-12 text-teal-600" />,
      title: "Primary Care",
      description: "Comprehensive health care services for patients of all ages."
    },
    {
      id: 2,
      icon: <FaHeartbeat className="w-12 h-12 text-teal-600" />,
      title: "Cardiology",
      description: "Expert care for heart conditions and cardiovascular health."
    },
    {
      id: 3,
      icon: <FaBrain className="w-12 h-12 text-teal-600" />,
      title: "Neurology",
      description: "Specialized treatment for neurological disorders and conditions."
    },
    {
      id: 4,
      icon: <FaTeeth className="w-12 h-12 text-teal-600" />,
      title: "Dental Care",
      description: "Complete dental services for a healthy and beautiful smile."
    },
    {
      id: 5,
      icon: <FaHospital className="w-12 h-12 text-teal-600" />,
      title: "Surgery",
      description: "Advanced surgical procedures with experienced specialists."
    },
    {
      id: 6,
      icon: <FaAmbulance className="w-12 h-12 text-teal-600" />,
      title: "Emergency Care",
      description: "24/7 emergency medical services for urgent health needs."
    }
  ];

  const testimonials = [
    {
      id: 1,
      text: "Exceptional care and professional service. Highly recommended!",
      name: "John Smith"
    },
    {
      id: 2,
      text: "The doctors are very knowledgeable and caring. Great experience!",
      name: "Sarah Johnson"
    },
    {
      id: 3,
      text: "Quick appointments and excellent follow-up care.",
      name: "Michael Brown"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-teal-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-teal-100 max-w-3xl mx-auto">
            We offer a wide range of medical services to meet your healthcare
            needs. Our expert doctors are here to provide the best care for you
            and your family.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCategories.map((service) => (
            <div 
              key={service.id} 
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <button 
                  onClick={() => navigate('/booking')}
                  className="bg-teal-600 text-white px-6 py-2 rounded-md hover:bg-teal-700 transition-colors"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
            What Our Patients Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="bg-white rounded-lg shadow-md p-6"
              >
                <p className="text-gray-600 italic mb-4">"{testimonial.text}"</p>
                <h4 className="text-gray-800 font-semibold">
                  {testimonial.name}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-teal-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Book an Appointment?
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-3xl mx-auto">
            Don't wait! Schedule your appointment today and experience the best
            healthcare services.
          </p>
          <button 
            onClick={() => navigate('/booking')}
            className="bg-white text-teal-600 px-8 py-3 rounded-md font-semibold hover:bg-teal-50 transition-colors"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;