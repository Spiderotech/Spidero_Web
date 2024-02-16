import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Herosection from '../components/Careers/Herosection'
import Jobcards from '../components/Careers/Jobcards'
import Navbarnormal from '../components/Navbarnormal'

const Careerspage = () => {
  return (
    <>
    <Navbarnormal/>
    <Herosection/>
    <Jobcards/>
    <Footer/>
    </>
  )
}

export default Careerspage