import React from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import { format, parse, startOfWeek, getDay } from 'date-fns';
import enUS from 'date-fns/locale/en-US';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const locales = {
  'en-US': enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const CalendarView = ({ onSelectSlot, events = [] }) => {
  const handleSelectSlot = (slot) => {
    onSelectSlot(slot);
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <style jsx global>{`
        .rbc-calendar {
          font-family: inherit;
        }
        .rbc-header {
          padding: 0.5rem;
          font-weight: 500;
          color: #374151;
        }
        .rbc-today {
          background-color: #f0f9ff;
        }
        .rbc-event {
          background-color: #0ea5e9;
          border-radius: 0.25rem;
        }
        .rbc-event:focus {
          outline: none;
        }
        .rbc-toolbar button {
          padding: 0.5rem 1rem;
          border-radius: 0.375rem;
        }
        .rbc-toolbar button.rbc-active {
          background-color: #0ea5e9;
          color: white;
        }
      `}</style>

      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        selectable
        onSelectSlot={handleSelectSlot}
        style={{ minHeight: '600px' }}
        views={['month', 'week', 'day']}
        defaultView="month"
        className="font-sans"
      />
    </div>
  );
};

export default CalendarView;