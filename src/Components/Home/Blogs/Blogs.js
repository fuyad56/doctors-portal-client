import React from "react";
import people1 from "../../../images/people1.png";
import people2 from "../../../images/people2.png";
import people3 from "../../../images/people3.png";

const Blogs = () => {
  const blogsData = [
    {
      id: 1,
      name: "Winson Herry",
      location: "California",
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      image: people1,
    },
    {
      id: 2,
      name: "Ema Gomez",
      location: "California",
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      image: people2,
    },
    {
      id: 3,
      name: "Aliza Farari",
      location: "California",
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      image: people3,
    },
  ];

  return (
    <section className="mx-[200px] mt-24">
      
      <div className="grid grid-cols-3 gap-6">
        {blogsData.map((blog) => (
          <div key={blog.id} className="border px-10 py-6 rounded-lg shadow-xl mb-24 hover:scale-[1.04] duration-500" >
            <div>
              <p className="text-[1rem] font-normal text-gray-500 pb-4">{blog.description}</p>
            </div>
            <div className="flex items-center">
              <div>
                <img src={blog.image} alt="" className="border-4 border-[#19D3AE] p-[2px] rounded-full w-[80%]" />
              </div>
              <div className="px-2">
                <h4 className="text-xl font-medium text-gray-700">{blog.name}</h4>
                <p className="text-[0.9rem] font-normal text-gray-400">{blog.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
