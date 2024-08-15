import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './Components/Home'
import Contact from './Components/Contact'
import Treatment from './Components/Treatment'
import Appointment from './Components/Appointment'
import About from './Components/About'



const Routings = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Treatment" element={<Treatment />} />
            <Route path="/Appointment" element={<Appointment />} />
            <Route path="/Contact" element={<Contact />} />
           
        </Routes>

    </div>
  )
}

export default Routings