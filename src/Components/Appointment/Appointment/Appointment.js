import React, { useState } from "react";
import Footer from "../../Shared/Footer/Footer";
import AppointmentHeader from "../AppointmentHeader/AppointmentHeader";
import BookAppointment from "../BookAppointment/BookAppointment";
import dayjs from "dayjs";

const Appointment = () => {
  const [selectedDate, setSelectedDate] = useState(dayjs());

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
  };

  return (
    <div>
      <AppointmentHeader handleDateChange={handleDateChange} />
      <BookAppointment key={selectedDate.$H} selectedDate={selectedDate} />
      <Footer />
    </div>
  );
};

export default Appointment;
