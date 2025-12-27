import React, { useState, useEffect } from "react";
import { motion } from "motion/react"


const ContactUs = () => {
  const Contactus = [
     {
       title: 'Social Science and Literature',
       chairman: {
         name: 'Mr. Roy P.P',
         designation: 'Assistant Professor in English',
         mobile: '+91 98474 53870'
       },
       cordinator: [{
         name: 'Dr. Hussain V',
         designation: 'Assistant Professor in Economics',
         mobile: '+91 94953 86262'
       }],
     },
     {
       title: 'Science',
       chairman: {
         name: 'Dr. Krishnakumar T',
         designation: 'Professor in Computer Applications',
         mobile: '+91 94956 07426'
       },
       cordinator: [
         {
           name: 'Ms. Jisha PJ',
           designation: 'Associate Professor, Dept. of Microbiology',
           mobile: '+91 99956 30321'
         }
       ]
     },
     {
       title: 'Commerce',
       chairman: {
         name: 'Ms. Kamalam Edathil',
         designation: 'Head, Department of Commerce',
         mobile: '+91 98476 73343'
       },
       cordinator: [
         {
           name: 'Mr. Aboobacker Siddeeq K.C',
           designation: 'Assistant Professor in Commerce',
           mobile: '+91 97456 68667'
         },
       ]
     },
   ];

  return (
    <div className="">
   {/* Contact Us */}
      <motion.section
        className='w-full mx-auto'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h1 className='text-primary text-xl md:text-3xl font-semibold text-center my-10'>Contact Us</h1>
        <div className='flex gap-4 w-full mx-auto flex-col sm:flex-row gap-y-8 py-4'>
          {Contactus.map((item, index) => (
            <motion.div
              key={index}
              className='max-w-[260px] text-center mx-auto'
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
              <h1 className='text-primary font-semibold text-xl max-w-[160px] min-h-[50px] mx-auto  leading-5'>
                {item.title}
              </h1>
              <div className='bg-secondary rounded-xl shadow-full-side shadow-gray-300 flex flex-col items-center justify-center gap-4 p-4 mt-1'>

                <div className='flex flex-col items-center justify-center gap-1'>
                  <h2 className='text-primary font-semibold text-lg'>Chairman</h2>
                  <div>
                    <h3 className='text-black font-medium'>{item.chairman.name}</h3>
                    <p className='text-sm'>{item.chairman.designation}</p>
                    <span className='text-sm'>Mob: {item.chairman.mobile}</span>
                  </div>
                </div>

                <div className='flex flex-col items-center justify-center gap-1'>
                  <h2 className='text-primary font-semibold text-lg'>Co-ordinator</h2>
                  {item.cordinator.map((cordinator, index) => (
                    <div key={index}>
                      <h3 className='text-black font-medium'>{cordinator.name}</h3>
                      <p className='text-sm'>{cordinator.designation}</p>
                      <span className='text-sm'>Mob: {cordinator.mobile}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default ContactUs;
