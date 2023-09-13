import React from 'react';

const ServicesDetails = ({service}) => {
    return (
        <div className='flex flex-col justify-center items-center rounded-xl border shadow-xl py-6 px-6 hover:scale-[1.06] duration-500'>
            <img src={service.image} alt="" className='w-[15%]' />
            <h4 className='text-3xl font-medium py-4'>{service.title}</h4>
            <p className='text-[1rem] font-medium text-gray-500'>{service.description}</p>
        </div>
    );
};

export default ServicesDetails;