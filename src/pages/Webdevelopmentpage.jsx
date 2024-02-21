import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Herosection from '../components/Web/Herosection'
import Belowherosection from '../components/Web/Belowherosection'
import Projects from '../components/Web/Projects'
import Technologystack from '../components/Web/Technologystack'
import Developmemt_service from '../components/Web/Developmemt_service'
import Contactform1 from '../components/Contactform1'
import Developmentprocess from '../components/Web/Developmentprocess'
import { Helmet } from "react-helmet";



const Webdevelopmentpage = () => {
  return (
    <>
     <Helmet>
        <meta charSet="utf-8" />
        <title>
        Web Development & Design Company London | Spidero Technology

        </title>
        <link rel="canonical" href="https://spiderotechnology.com/web" />
        <meta
          name="description"
          content="Elevate your online presence with Spidero Technology's web development & design services. We build custom websites & offer SEO optimization – get started now!
          "
        />
      </Helmet>
    <Navbar/>
    <Herosection/>
    <Belowherosection/>
    <Projects/>
    <Technologystack/>
    <Developmemt_service/>
    <Developmentprocess/>
    <Contactform1/>

    <Footer/>
    </>
    
  )
}

export default Webdevelopmentpage