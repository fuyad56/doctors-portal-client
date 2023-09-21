import React from "react";
import BookingCard from "../BookingCard/BookingCard";

const bookData = [
  {
    id: 1,
    subject: "Teeth Orthodontics",
    visitingHour: "08:00 AM - 10:00 AM",
    totalSpace: 10,
  },
  {
    id: 2,
    subject: "Cosmetic Dentistry",
    visitingHour: "10:05 am - 11:30 am",
    totalSpace: 10,
  },
  {
    id: 3,
    subject: "Teeth Cleaning",
    visitingHour: "11:40 AM - 01:00 PM",
    totalSpace: 10,
  },
  {
    id: 4,
    subject: "Teeth Orthodontics",
    visitingHour: "08:00 AM - 10:00 AM",
    totalSpace: 10,
  },
  {
    id: 5,
    subject: "Teeth Orthodontics",
    visitingHour: "08:00 AM - 10:00 AM",
    totalSpace: 10,
  },
  {
    id: 6,
    subject: "Teeth Orthodontics",
    visitingHour: "08:00 AM - 10:00 AM",
    totalSpace: 10,
  },
];

const BookAppointment = ({ selectedDate }) => {
  const monthName = selectedDate.format("MMMM");
  const dateName = selectedDate.format("DD");
  const year = selectedDate.format("YYYY");

  return (
    <section className="my-10 mx-[100px]">
      <h1 className="py-6 text-3xl text-center text-[#19D3AE] font-semibold">
        Available Appointments on {monthName} {dateName}, {year}{" "}
      </h1>
      <div className="grid grid-cols-3 gap-4 text-center items-center mt-[80px] mb-[150px]">
        {bookData.map((data) => (
          <BookingCard key={data.id} data={data} selectedDate={selectedDate} />
        ))}
      </div>
    </section>
  );
};

export default BookAppointment;
