import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const InfoCard = ({ item }) => {
    // Construct the background color class dynamically based on item.backgroundColor
    const bgColorClass = item.backgroundColor;

    return (
        <div className={`${bgColorClass} flex justify-between items-center text-white px-[4rem] pb-5 rounded-lg shadow-xl hover:scale-[1.06] duration-500`}>
            <div className="text-[60px] px-10">
                <FontAwesomeIcon icon={item.icon} />
            </div>
            <div className="mt-4">
                <h3 className="text-2xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-gray-200">{item.description}</p>
            </div>
        </div>
    );
};

export default InfoCard;
