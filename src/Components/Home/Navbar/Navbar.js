import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("/");

  const links = [
    { to: "/", text: "Home" },
    { to: "/about", text: "About" },
    { to: "/appointment", text: "Appointment" },
    { to: "/reviews", text: "Reviews" },
    { to: "/contact-us", text: "Contact Us" },
    { to: "/login", text: "Login" },
  ];

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav className="flex justify-between items-center mx-[100px] py-6">
      <Link to={"/"} className="text-3xl font-bold">
        Doctors Portal
      </Link>
      <ul className="flex justify-between items-center w-[650px] text-lg font-medium">
        {links.map((linkData) => (
          <li key={linkData.to}>
            <Link
              to={linkData.to}
              className={`px-4 py-2 rounded-md ${
                activeLink === linkData.to ? "bg-[#3A4256] text-gray-100" : ""
              }`}
              onClick={() => handleLinkClick(linkData.to)}
            >
              {linkData.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
