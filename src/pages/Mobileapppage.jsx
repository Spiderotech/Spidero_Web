import React from 'react'
import Navbarnormal from '../components/Navbarnormal'
import Footer from '../components/Footer'
import Client_card from '../components/Client_card'
import Contactform1 from '../components/Contactform1'
import Herosection from '../components/Mobile_app/Herosection'
import Belowherosection from '../components/Mobile_app/Belowherosection'
import Projects from '../components/Mobile_app/Projects'
import Developmentservice from '../components/Mobile_app/Developmentservice'
import Makes_yourappidea_a_reality from '../components/Mobile_app/Makes_yourappidea _a_reality'
import Humancentered_design from '../components/Mobile_app/Humancentered_design'
import Results_mobile from '../components/Mobile_app/Results_mobile'
import Faq from '../components/Mobile_app/Faq'
import Expertise from '../components/Mobile_app/Expertise'
import { Helmet } from "react-helmet";
const Mobileapppage = () => {
  return (
    <>
     <Helmet>
        <meta charSet="utf-8" />
        <title>
        Secure Mobile App Development | Spidero Technology London

        </title>
        <link rel="canonical" href="https://spiderotechnology.com/mobile" />
        <meta
          name="description"
          content="Develop secure & user-friendly mobile apps with Spidero Technology. Expertise in iOS & Android app development for businesses in London. Get a free quote!
          Web Development:
          "
        />
      </Helmet>
    <Navbarnormal/>
    <Herosection/>
    <Client_card/>
    <Belowherosection/>
    <Projects/>
    <Developmentservice/>
    <Makes_yourappidea_a_reality/>
    <Humancentered_design/>
    <Results_mobile/>
    <Expertise/>
    <Faq/>
    <Contactform1/>
    <Footer/>
    </>
  )
}

export default Mobileapppage