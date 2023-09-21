import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";

const Navbar = () => {
  const [loggedInUser] = useContext(UserContext);

  return (
    <nav className="flex justify-between items-center mx-[100px] py-6">
      <Link to={"/"} className="text-3xl font-bold">
        Doctors Portal
      </Link>
      <ul className="flex justify-between items-center w-[780px] text-lg font-medium">
        <li>
          <Link to={"/"} className="px-4 py-2 rounded-md">
            Home
          </Link>
        </li>
        <li>
          <Link to={"/about"} className="px-4 py-2 rounded-md">
            About
          </Link>
        </li>
        <li>
          <Link to={"/appointment"} className="px-4 py-2 rounded-md">
            Appointment
          </Link>
        </li>
        <li>
          <Link to={"/reviews"} className="px-4 py-2 rounded-md">
            Reviews
          </Link>
        </li>
        <li>
          <Link to={"/contact-us"} className="px-4 py-2 rounded-md">
            Contact Us
          </Link>
        </li>
        <li>
          <Link to={"/login"} className="px-4 py-2 rounded-md ml-4">
            {loggedInUser.name ? `${loggedInUser.name}` : "Login"}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
