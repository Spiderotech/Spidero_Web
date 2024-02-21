import React from "react";
import Footer from "../components/Footer";
import Client_card from "../components/Client_card";
import Herosection_main from "../components/Home/Herosection_main";
import Belowherosection from "../components/Home/Belowherosection";
import Companygrowthcard from "../components/Companygrowthcard";
import Contactform1 from "../components/Contactform1";
// import Navbarnormal from '../components/Navbarnormal'
import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet";

const Homepage = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Spidero Technology | Secure Mobile Apps & Web Development in London
        </title>
        <link rel="canonical" href="https://spiderotechnology.com/" />
        <meta
          name="description"
          content="Spidero Technology crafts secure mobile apps & web solutions for businesses in London. Get custom software, web design & development services – contact us today!"
        />
      </Helmet>
      <Navbar />
      <Herosection_main />
      <Client_card />
      <Belowherosection />
      <Companygrowthcard />
      <Contactform1 />
      <Footer />
    </>
  );
};

export default Homepage;
