import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container h-[50%]">
      <div className="flex justify-center flex-col items-center h-full">
        <div className="grid grid-cols-3 gap-6 text-center w-[100rem]">
          <div>
            <h3 className="text-3xl font-bold text-gray-600 py-4">Services</h3>
            <ul className="text-[1rem] font-medium text-gray-500">
              <li>
                <h5>Emergency Checkup</h5>
              </li>
              <li>
                <h5>Monthly Checkup</h5>
              </li>
              <li>
                <h5>Weekly Checkup</h5>
              </li>
              <li>
                <h5>Deep Checkup</h5>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-600 py-4">
              ORAL HEALTH
            </h3>
            <ul className="text-[1rem] font-medium text-gray-500">
              <li>
                <h5>Fluoride Treatment</h5>
              </li>
              <li>
                <h5>Cavity Filling</h5>
              </li>
              <li>
                <h5>Teeth Whitening</h5>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-600 py-4">
              OUR ADDRESS
            </h3>
            <ul className="text-[1rem] font-medium text-gray-500">
              <li>
                <h5>New York - 101010 Hudson</h5>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-24">
          <p>Copyright {(new Date().getFullYear())} All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
