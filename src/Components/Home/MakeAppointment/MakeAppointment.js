import React from "react";
import "./MakeAppointment.css";
import doctorSmall from "../../../images/doctor-small.png";

const MakeAppointment = () => {
  return (
    <section className="my-[150px] MakeAppointment-container">
      <div className="mx-[100px] my-20">
        <div className="flex justify-around items-center">
          <div>
            <img src={doctorSmall} alt="" className="transition translate-y-[-55px]" />
          </div>
          <div className="w-[40%]">
            <h5 className="text-[#19D3AE] text-lg font-medium py-4">
              Appointment
            </h5>
            <h3 className="text-4xl font-semibold text-gray-200 pb-10">
              Make an appointment Today
            </h3>
            <p className="text-[1rem] font-medium text-gray-400 pb-10">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <button className="px-8 py-2 rounded-lg bg-gradient-to-r from-[#0FCFEC] to-[#19D3AE] text-lg font-medium text-gray-50 shadow-xl hover:rounded-full">
              Ger started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;
