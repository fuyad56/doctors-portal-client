import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-container">
      <div className="flex justify-center items-center h-full">
        <div className="text-center px-6 py-6">
          <div className="pb-[60px]">
            <h4 className="text-[#19D3AE] text-lg font-medium">Contact Us</h4>
            <h1 className="text-4xl font-medium text-gray-200 py-2">Stay connected with us</h1>
          </div>
          <form action="" className="flex flex-col items-center w-full">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              id="" className="px-2 py-2 my-2 rounded-lg w-[350px]"
            />
            <input type="text" name="subject" placeholder="Subject" className="px-2 py-2 my-2 rounded-lg w-[350px]" />
            <input type="text" placeholder="Your Message" className="px-2 py-2 my-2 mb-6 rounded-lg w-[350px] pb-[100px]" />
            <input
              type="submit"
              value="Submit"
              className="px-8 py-2 rounded-lg bg-gradient-to-r from-[#0FCFEC] to-[#19D3AE] text-lg font-medium text-gray-50 shadow-md hover:rounded-full"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
