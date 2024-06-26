import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './pages/Homepage';
import Custompage from './pages/Custompage';
import Webdevelopmentpage from './pages/webdevelopmentpage';
import Webdesignpage from './pages/Webdesignpage';
import Mobileapppage from './pages/Mobileapppage';
import Contactpage from './pages/Contactpage';
import Aboutpage from './pages/Aboutpage';
import Careerspage from './pages/Careerspage';
import Expertisepage from './pages/Expertisepage';
import Ourprocess from './pages/Ourprocess';
import Chatsystem from './components/Chat/Chatsystem';
import Termspage from './pages/Termspage';
import Privacypage from './pages/Privacypage';
import Hiredeveloper from './pages/Hiredeveloper';


function App() {
 

  return (
    <BrowserRouter>
     <Routes>
     <Route path="/" element={<Homepage/>} />
     <Route path="/custom" element={<Custompage/>} />
     <Route path="/web" element={<Webdevelopmentpage/>} />
     <Route path="/webdesign" element={<Webdesignpage/>} />
     <Route path="/mobile" element={<Mobileapppage/>} />
     <Route path="/contact" element={<Contactpage/>} />
     <Route path="/about" element={<Aboutpage/>} />
     <Route path="/ourprocess" element={<Ourprocess/>} />
     <Route path="/expertice" element={<Expertisepage/>} />
     <Route path="/careers" element={<Careerspage/>} />
     <Route path="/privacy-policy" element={<Privacypage/>} />
     <Route path="/terms-conditions" element={<Termspage/>} />
     <Route path="/hire_developers" element={<Hiredeveloper/>} />
   

     </Routes>
     <Chatsystem/>
    </BrowserRouter>
   
  )
}

export default App
