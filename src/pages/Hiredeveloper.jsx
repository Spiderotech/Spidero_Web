import React from 'react'
import Navbarnormal from '../components/Navbarnormal'
import Footer from '../components/Footer'
import Faq from '../components/Hire/Faq'
import Steps from '../components/Hire/Steps'
import Clientsays from '../components/Custom/Clientsays'
import Pricingcard from '../components/Hire/Pricingcard'
import Howit_done from '../components/Hire/Howit_done'

const Hiredeveloper = () => {
  return (
  <>
   <Navbarnormal/>
   <Pricingcard/>
   <Steps/>
   <Clientsays/>
   <Howit_done/>
   <Faq/>
  
   <Footer/>
  </>
  )
}

export default Hiredeveloper