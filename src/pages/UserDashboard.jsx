import React, { useState } from 'react';
import AppointmentDetails from '../components/AppointmentDetails';
import { FaCalendarAlt, FaClock, FaHistory } from 'react-icons/fa';

const UserDashboard = () => {
  const [activeTab, setActiveTab] = useState('upcoming');
  
  const appointments = [
    {
      id: 1,
      doctor: { 
        name: 'Dr. John Doe',
        specialization: 'Cardiologist',
        image: 'https://example.com/doctor1.jpg'
      },
      date: '2023-10-25',
      time: '10:00 AM',
      status: 'upcoming'
    },
    {
      id: 2,
      doctor: { 
        name: 'Dr. Jane Smith',
        specialization: 'Dermatologist',
        image: 'https://example.com/doctor2.jpg'
      },
      date: '2023-10-26',
      time: '11:00 AM',
      status: 'upcoming'
    }
  ];

  const filteredAppointments = appointments.filter(
    app => app.status === activeTab
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Dashboard Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Your Dashboard</h1>
          <p className="mt-2 text-gray-600">Manage your appointments and medical history</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <FaCalendarAlt className="w-8 h-8 text-teal-600" />
              <div className="ml-4">
                <p className="text-gray-600">Upcoming Appointments</p>
                <p className="text-2xl font-bold text-gray-800">
                  {appointments.filter(app => app.status === 'upcoming').length}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <FaClock className="w-8 h-8 text-teal-600" />
              <div className="ml-4">
                <p className="text-gray-600">Next Appointment</p>
                <p className="text-2xl font-bold text-gray-800">
                  {appointments[0]?.date || 'No appointments'}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <FaHistory className="w-8 h-8 text-teal-600" />
              <div className="ml-4">
                <p className="text-gray-600">Past Appointments</p>
                <p className="text-2xl font-bold text-gray-800">
                  {appointments.filter(app => app.status === 'past').length}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Appointments Section */}
        <div className="bg-white rounded-lg shadow-md">
          {/* Tabs */}
          <div className="flex border-b border-gray-200">
            <button
              className={`px-6 py-3 text-sm font-medium ${
                activeTab === 'upcoming'
                  ? 'border-b-2 border-teal-600 text-teal-600'
                  : 'text-gray-500 hover:text-teal-600'
              }`}
              onClick={() => setActiveTab('upcoming')}
            >
              Upcoming
            </button>
            <button
              className={`px-6 py-3 text-sm font-medium ${
                activeTab === 'past'
                  ? 'border-b-2 border-teal-600 text-teal-600'
                  : 'text-gray-500 hover:text-teal-600'
              }`}
              onClick={() => setActiveTab('past')}
            >
              Past
            </button>
          </div>

          {/* Appointments List */}
          <div className="p-6">
            {filteredAppointments.length > 0 ? (
              <div className="space-y-4">
                {filteredAppointments.map((appointment) => (
                  <AppointmentDetails 
                    key={appointment.id} 
                    appointment={appointment} 
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                No {activeTab} appointments found
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;