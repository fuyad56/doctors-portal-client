import React from "react";
import {
  faClock,
  faMapMarker,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import InfoCard from "../InfoCard/InfoCard";

const BusinessInfo = () => {
  const infoData = [
    {
      id: 1,
      title: "Opening Hours",
      content: "We are open 7 days",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, illo.",
      icon: faClock,
      backgroundColor: "bg-gradient-to-r from-[#0FCFEC] to-[#19D3AE]",
    },
    {
      id: 2,
      title: "Visit our location",
      content: "Brooking, NY 10036, United States",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, illo.",
      icon: faMapMarker,
      backgroundColor: "bg-[#3A4256]",
    },
    {
      id: 3,
      title: "Contact us now",
      content: "+1234567895",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, illo.",
      icon: faPhone,
      backgroundColor: "bg-gradient-to-r from-[#0FCFEC] to-[#19D3AE]",
    },
  ];

  return (
    <section className="my-10">
      <div className="grid grid-cols-3 gap-6 mx-[100px]">
        {infoData.map((item, index) => (
          <InfoCard key={index} item={item} />
        ))}
      </div>
    </section>
  );
};

export default BusinessInfo;
