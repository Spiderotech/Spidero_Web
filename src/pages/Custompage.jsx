import React from 'react'
import Footer from '../components/Footer'
import Herosection from '../components/Custom/Herosection'
import Client_card from '../components/Client_card'
import Developmemt_service from '../components/Custom/Developmemt_service'
// import Success from '../components/Custom/Success'
import Contactcard1 from '../components/Custom/Contactcard1'
import Contactcard2 from '../components/Custom/Contactcard2'
import Contactcard3 from '../components/Custom/Contactcard3'
import Webvulnarability from '../components/Custom/Webvulnarability'
import Technologystack from '../components/Custom/Technologystack'
import Companyabout_verticalscroll from '../components/Custom/Companyabout_verticalscroll'
import Clientsays from '../components/Custom/Clientsays'
import Contactcard4 from '../components/Custom/Contactcard4'
import Faq from '../components/Custom/Faq'
import Developmentteam from '../components/Custom/Developmentteam'
import Industries_we_serve from '../components/Custom/Industries_we_serve'
import Howweapproach from '../components/Custom/Howweapproach'
import Contactform from '../components/Custom/contactform'
import Navbarnormal from '../components/Navbarnormal'



const Custompage = () => {
  return (
   <>
   <Navbarnormal/>
   <Herosection/>
   <Client_card/>
   <Developmemt_service/>
   {/* <Success/> */}
   <Contactcard1/>
   <Howweapproach/>
   <Webvulnarability/>
   <Contactcard2/>
   <Technologystack/>
   <Industries_we_serve/>
   <Contactcard3/>
   <Companyabout_verticalscroll/>
   <Clientsays/>
   <Contactcard4/>
   <Developmentteam/>
   <Faq/>
   <Contactform/>
   <Footer/>
   </>
  )
}

export default Custompage