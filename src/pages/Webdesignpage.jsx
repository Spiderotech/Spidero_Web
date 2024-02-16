import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Client_card from '../components/Client_card'
import Belowherosection from '../components/Home/Belowherosection'
import Companygrowthcard from '../components/Companygrowthcard'
import Contactform1 from '../components/Contactform1'
import Herosection from '../components/Web_design/Herosection'
import Ourcapacity from '../components/Web_design/Ourcapacity'
import Creative_webdesign from '../components/Web_design/Creative_webdesign'
import Message_that from '../components/Web_design/Message_that'
import Designprinciple from '../components/Web_design/Designprinciple'
import EmphasisOnMobileFirst from '../components/Web_design/EmphasisOnMobileFirst'

const Webdesignpage = () => {
  return (
    <>
    <Navbar/>
    <Herosection/>
    <Client_card/>
    <Belowherosection/>
    <Companygrowthcard/>
    <Ourcapacity/>
    <Message_that/>
    <Creative_webdesign/>
    <EmphasisOnMobileFirst/>
    <Designprinciple/>
    <Contactform1/>
    <Footer/>
    </>
  )
}

export default Webdesignpage