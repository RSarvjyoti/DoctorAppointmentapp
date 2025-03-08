import React, { useState } from 'react';
import CalendarView from '../components/CalendarView';
import AppointmentModal from '../components/AppointmentModal';
import { useNavigate } from 'react-router-dom';

const BookingPage = () => {
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleSelectSlot = (slot) => {
    setSelectedSlot(slot);
    setShowModal(true);
  };

  const handleConfirmBooking = (appointment) => {
    const appointments = JSON.parse(localStorage.getItem('appointments')) || [];
    appointments.push(appointment);
    localStorage.setItem('appointments', JSON.stringify(appointments));
    setShowModal(false);
    navigate('/appointments');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Book an Appointment</h1>
        <p className="mt-2 text-gray-600">
          Select a date and time slot to schedule your appointment
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <CalendarView onSelectSlot={handleSelectSlot} />
      </div>

      {showModal && (
        <AppointmentModal
          slot={selectedSlot}
          onClose={() => setShowModal(false)}
          onConfirm={handleConfirmBooking}
        />
      )}
    </div>
  );
};

export default BookingPage;