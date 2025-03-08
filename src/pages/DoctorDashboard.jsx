import React, { useState, useEffect } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";
import enUS from "date-fns/locale/en-US";
import "react-big-calendar/lib/css/react-big-calendar.css";
import AppointmentModal from "../components/AppointmentModal";

const locales = {
  "en-US": enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const DoctorDashboard = () => {
  const [appointments, setAppointments] = useState([]);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const savedAppointments =
      JSON.parse(localStorage.getItem("appointments")) || [];
    setAppointments(savedAppointments);
  }, []);

  const eventStyleGetter = (event) => ({
    style: {
      backgroundColor: "#0D9488",
      borderRadius: "4px",
      opacity: 0.8,
      color: "white",
      border: "none",
      padding: "2px 5px",
    },
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Doctor Dashboard</h1>
          <p className="mt-2 text-gray-600">
            Manage your appointments and schedule
          </p>
        </div>
        <div className="flex gap-4">
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-teal-600 mr-2"></div>
            <span className="text-sm text-gray-600">Scheduled</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-gray-300 mr-2"></div>
            <span className="text-sm text-gray-600">Available</span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <style jsx>{`
          .rbc-calendar {
            font-family: inherit;
          }
          .rbc-header {
            padding: 0.75rem;
            font-weight: 500;
            color: #374151;
          }
          .rbc-today {
            background-color: #f0fdfa;
          }
          .rbc-toolbar button {
            padding: 0.5rem 1rem;
            border-radius: 0.375rem;
          }
          .rbc-toolbar button.rbc-active {
            background-color: #0d9488;
            color: white;
          }
          .rbc-event:focus {
            outline: none;
          }
        `}</style>

        <Calendar
          localizer={localizer}
          events={appointments}
          startAccessor="start"
          endAccessor="end"
          selectable
          onSelectSlot={handleSelectSlot}
          onSelectEvent={handleSelectEvent}
          eventPropGetter={eventStyleGetter}
          className="min-h-[600px]"
          views={["month", "week", "day"]}
          defaultView="month"
          toolbar={true}
          components={{
            toolbar: (props) => (
              <div className="flex justify-between items-center mb-4 p-2">
                <div className="flex space-x-2">
                  <button
                    onClick={() => props.onNavigate("PREV")}
                    className="px-4 py-2 text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md transition-colors"
                  >
                    Previous
                  </button>
                  <button
                    onClick={() => props.onNavigate("TODAY")}
                    className="px-4 py-2 text-sm bg-teal-600 hover:bg-teal-700 text-white rounded-md transition-colors"
                  >
                    Today
                  </button>
                  <button
                    onClick={() => props.onNavigate("NEXT")}
                    className="px-4 py-2 text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md transition-colors"
                  >
                    Next
                  </button>
                </div>

                <span className="text-lg font-medium text-gray-700">
                  {props.label}
                </span>

                <div className="flex space-x-2">
                  {props.views.map((view) => (
                    <button
                      key={view}
                      onClick={() => props.onView(view)}
                      className={`
                        px-4 py-2 text-sm rounded-md transition-colors
                        ${
                          props.view === view
                            ? "bg-teal-600 text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }
                      `}
                    >
                      {view.charAt(0).toUpperCase() + view.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
            ),
          }}
        />
      </div>

      {showModal && (
        <AppointmentModal
          appointment={selectedAppointment}
          onClose={() => setShowModal(false)}
          onSave={handleSaveAppointment}
          onDelete={handleDeleteAppointment}
          isEditing={isEditing}
        />
      )}
    </div>
  );
};

export default DoctorDashboard;
