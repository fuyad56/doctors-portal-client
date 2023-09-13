import React from "react";
import cavity from "../../../images/cavity.png";
import fluoride from "../../../images/fluoride.png";
import whitening from "../../../images/whitening.png";
import ServicesDetails from "../ServicesDetails/ServicesDetails";

const Services = () => {
  const serviceData = [
    {
      id: 1,
      title: "Fluoride Treatment",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      image: cavity,
    },
    {
      id: 1,
      title: "Cavity Filling",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      image: fluoride,
    },
    {
      id: 1,
      title: "Teeth Whitening",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      image: whitening,
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center text-center my-24">
      <div className="">
        <h4 className="text-[#19D3AE] text-2xl uppercase font-semibold">
          Our Services
        </h4>
        <h2 className="text-4xl font-medium text-[#3A4256] py-2">
          Services We Provide
        </h2>
      </div>
      <div className="grid grid-cols-3 gap-[1.5rem] my-[80px] mx-[100px]">
        {serviceData.map((service, index) => (
          <ServicesDetails key={index} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
