import React from "react";
import "./AppointmentHeader.css";
import chair from "../../../images/chair.png";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";

const AppointmentHeader = ({ handleDateChange, selectedDate }) => {
  return (
    <main className="flex justify-center items-center h-[800px] appointment-container">
      <div className="grid grid-cols-2 gap-4 w-[75%]">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#3A4256] pb-[1rem]">
            Appointment
          </h1>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DateCalendar", "DateCalendar"]}>
              <DemoItem label="Controlled calendar">
                <DateCalendar
                  className="border shadow-xl rounded-xl pt-4"
                  onChange={handleDateChange}
                  value={selectedDate}
                />
              </DemoItem>
            </DemoContainer>
          </LocalizationProvider>
        </div>
        <div>
          <img src={chair} alt="" className="shadow-xl" />
        </div>
      </div>
    </main>
  );
};

export default AppointmentHeader;
