import React from 'react';
import treatment from "../../../images/treatment.png"

const FeaturedService = () => {
    return (
        <section className='h-[600px] mx-[100px] my-[60px]'>
            <div className='flex justify-around items-center mx-auto w-[70%]'>
                <div>
                    <img src={treatment} alt="" className='w-[70%] rounded-xl' />
                </div>
                <div className='w-[60%]'>
                    <h1 className='text-4xl font-semibold pb-6'>Exceptional Dental <br /> Care, on Your Terms</h1>
                    <p className='text-[1rem] font-medium text-gray-600 py-8'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <button className="px-8 py-2 rounded-lg bg-gradient-to-r from-[#0FCFEC] to-[#19D3AE] text-lg font-medium text-gray-50 shadow-xl hover:scale-[1.06] duration-500">Ger started</button>
                </div>
            </div>
        </section>
    );
};

export default FeaturedService;