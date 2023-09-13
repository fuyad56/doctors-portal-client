import React from "react";
import chair from "../../../images/chair.png";

const HeaderMain = () => {
  return (
    <main className="flex justify-center items-center h-full">
      <div className="grid grid-cols-2 gap-4 w-[75%]">
      <div className="py-4">
        <h1 className="text-6xl font-bold text-[#3A4256] pb-[3rem]">
          Your New Smile <br /> Starts Here
        </h1>
        <p className="text-lg text-gray-500 pb-10 w-[80%]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat
          vitae quisquam temporibus autem sapiente exercitationem asperiores.
          Accusamus tenetur consequatur dolorum!
        </p>
        <button className="px-8 py-2 rounded-lg bg-gradient-to-r from-[#0FCFEC] to-[#19D3AE] text-lg font-medium text-gray-50 shadow-xl hover:scale-[1.06] duration-500">Get Appointment</button>
      </div>
      <div>
        <img src={chair} alt="" className="shadow-xl" />
      </div>
      </div>
    </main>
  );
};

export default HeaderMain;
