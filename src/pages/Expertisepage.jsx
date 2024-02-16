import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Contactform1 from "../components/Contactform1";
import Web from "../components/Expertise/Web";
import Mobile from "../components/Expertise/Mobile";
import Custome from "../components/Expertise/Custome";
import Technology from "../components/Expertise/Technology";
import Ecommerce from "../components/Expertise/Ecommerce";
import Navbarnormal from "../components/Navbarnormal";

const Expertisepage = () => {
  return (
    <>
      <Navbarnormal />
      <Web />
      <Mobile/>
      <Ecommerce/>
      <Custome/>
      <Technology/>
      <Contactform1 />
      <Footer />
    </>
  );
};

export default Expertisepage;
