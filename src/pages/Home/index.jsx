import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import Hero from './components/Hero.jsx'
import Tracks from './components/Tracks.jsx'
import classNames from 'classnames';
import ContactUs from './components/Contact_Us.jsx'
import WhyAttend from './components/Whyattend.jsx'
import ImportantDates from './components/ImportantDates.jsx'
import HowToReach from './components/How_Reach.jsx'
import Guidelines from './components/Guidelines.jsx'
import RegistrationFee from './components/Registration_Fee.jsx'





function index() {
 

  return (
    <motion.div
      key={location.pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className=' select-none  md:relative w-full md:overflow-hidden'
    >
    
    <Hero />
    <div className='bg-white w-full'>
    <div className='max-w-[1300px] mx-auto pb-14'>
    <Tracks />
    <WhyAttend />
    <ImportantDates />
    <HowToReach />
    <Guidelines />
    <RegistrationFee />
    <ContactUs />
    </div>
    </div>

    </motion.div >
  )
}

export default index
