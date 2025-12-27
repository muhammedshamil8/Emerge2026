
import { motion } from "framer-motion";
import React, { useState, useEffect } from 'react'

import { Train, Flight, LandMark } from '@/assets/icons';
import {  MapPin } from 'lucide-react'


const HowToReach = () => {
 
 const travelLocation = [
    {
      icon: Train,
      title: 'By Train',
      description: 'The nearest railway station is Feroke, approximately 18 km away, Calicut Railway station 32 km',
    },
    {
      icon: Flight,
      title: 'By Air',
      description: 'The nearest airport is Calicut International Airport, just 2 km away.',
    },
    {
      icon: LandMark,
      title: 'Landmarks',
      description: ' The college is 6 km from the University of Calicut and 32 km from Calicut City',
    }
  ];
  return (
    <div className="">
    {/* How to Reach */}
      <motion.section
        className='w-full mx-auto my-16'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h1 className='text-primary text-xl md:text-3xl font-semibold text-center my-6'>How to Reach</h1>
        <div className='mx-auto flex items-center justify-center flex-col gap-2'>
          <MapPin size={30} className='stroke-[2.3px]' />
          <p className='text-center max-w-[360px]'>
            <span className='font-medium'>EMEA College of Arts and Science</span><br /> is situated at
            <span className='font-medium'> Kumminiparamba</span> in
            <span className='font-medium'> Kondotty,</span> Malappuram, Kerala, India
          </p>
        </div>
        <div className='flex gap-4 w-full mx-auto flex-col md:flex-row gap-y-8 py-4'>
          {travelLocation.map((item, index) => (
            <motion.div
              key={index}
              className='max-w-[260px]  text-center mx-auto'
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.2, // Staggered animation
                ease: 'easeInOut',
              }}
              viewport={{ once: true }} // Ensure animation happens once when in view
            >
              <div className='bg-secondary min-h-[230px] rounded-xl shadow-full-side shadow-gray-300 flex flex-col items-center justify-center gap-2 p-4 mt-1'>
                <div className='p-4 rounded-full bg-primary'>
                  <img src={item.icon} alt={item.title} className='w-10 h-10' />
                </div>
                <h1 className='font-semibold text-lg'> {item.title}</h1>
                <p className='text-sm'>
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default HowToReach;
