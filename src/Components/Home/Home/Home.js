import React from "react";
import HeaderMain from "../HeaderMain/HeaderMain";
import "./Home.css";
import BusinessInfo from "../BusinessInfo/BusinessInfo";
import Services from "../Services/Services";
import FeaturedService from "../FeaturedService/FeaturedService";
import MakeAppointment from "../MakeAppointment/MakeAppointment";
import Testimonial from "../Testimonial/Testimonial";
import Blogs from "../Blogs/Blogs";
import Contact from "../Contact/Contact";
import Footer from "../../Shared/Footer/Footer";

const Home = () => {
  return (
    <div className="home-container">
      <HeaderMain />
      <BusinessInfo />
      <Services />
      <FeaturedService />
      <MakeAppointment />
      <Testimonial />
      <Blogs />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
