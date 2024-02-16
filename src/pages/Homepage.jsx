import React from 'react'
import Footer from '../components/Footer'
import Client_card from '../components/Client_card'
import Herosection_main from '../components/Home/Herosection_main'
import Belowherosection from '../components/Home/Belowherosection'
import Companygrowthcard from '../components/Companygrowthcard'
import Contactform1 from '../components/Contactform1'
// import Navbarnormal from '../components/Navbarnormal'
import Navbar from '../components/Navbar'

const Homepage = () => {
  return (
    <>
    <Navbar/>
    <Herosection_main/>
    <Client_card/>
    <Belowherosection/>
    <Companygrowthcard/>
    <Contactform1/>
    <Footer/>
    </>
  )
}

export default Homepage