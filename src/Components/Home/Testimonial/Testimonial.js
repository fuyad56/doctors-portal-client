import React from "react";
import mask from "../../../images/mask.png"

const Testimonial = () => {
  return (
    <section className="mx-[200px]">
      <div className="flex justify-between items-center">
      <div>
        <h5 className="text-[#19D3AE] text-xl font-semibold py-4">Appointment</h5>
        <h1 className="text-6xl font-medium text-slate-500">What Our Patients Says</h1>
      </div>
      <div>
        <img src={mask} alt="" />
      </div>
      </div>
    </section>
  );
};

export default Testimonial;
