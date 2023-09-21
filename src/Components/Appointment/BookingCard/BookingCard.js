import React, { useState } from "react";
import AppointmentForm from "../AppointmentForm/AppointmentForm";

const BookingCard = ({ data, selectedDate }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div
      key={data.id}
      className="border py-8 px-4 rounded-xl shadow-xl m-2 hover:scale-[1.04] duration-500"
    >
      <h2 className="text-2xl font-semibold text-[#19D3AE] pb-2">
        {data.subject}
      </h2>
      <h4 className="text-xl font-medium text-slate-600 pb-2">
        {data.visitingHour}
      </h4>
      <h6 className="pb-2 text-[1rem] font-medium uppercase">
        {data.totalSpace} Spaces Available
      </h6>
      <button
        className="px-8 py-2 mt-4 uppercase rounded-lg bg-gradient-to-r from-[#0FCFEC] to-[#19D3AE] text-lg font-medium text-gray-50 shadow-xl hover:rounded-full"
        onClick={openModal}
      >
        Book Appointment
      </button>
      <AppointmentForm modalIsOpen={modalIsOpen} closeModal={closeModal} appointmentOn={data} date={selectedDate} />
    </div>
  );
};

export default BookingCard;
