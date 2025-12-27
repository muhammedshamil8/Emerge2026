import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";


const RegistrationFee = () => {
   const registrationData = [
     { category: 'Students', participation: '₹500', presentation: '₹750', publication: '₹1000' },
     { category: 'Research Scholars', participation: '₹750', presentation: '₹1000', publication: '₹1300' },
     { category: 'Faculties', participation: '₹800', presentation: '₹1500', publication: '₹2000' },
     { category: 'Delegates from Industry', participation: '₹1000', presentation: '₹2000', publication: '₹3000' },
     { category: 'International Participants', participation: '$25', presentation: '$30', publication: '$50' },
     { category: 'Accompanying Persons', participation: '₹1000', presentation: '-', publication: '-' },
   ];

  return (
    <div className="">
     {/* Registration Fee */}
      <motion.section
        className='my-10'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h1 className='text-primary text-xl md:text-3xl font-semibold text-center my-10'>Registration Fee</h1>
        <div className='flex flex-col xl:flex-row '>
          <div className='overflow-x-auto sm:overflow-clip'>
            <table className=" rounded-lg  border-separate border-spacing-0 w-fit mx-auto">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="border border-black px-1 sm:px-4 py-2 md:py-3">Category</th>
                  <th className="border border-black px-1 sm:px-4 py-2 md:py-3">Participation</th>
                  <th className="border border-black px-1 sm:px-4 py-2 md:py-3">Presentation</th>
                  <th className="border border-black px-1 sm:px-4 py-2 md:py-3">Presentation & ISBN Publication</th>
                </tr>
              </thead>
              <tbody>
                {registrationData.map((row, index) => (
                  <tr key={index} className="text-center ">
                    <td className="border border-black px-1 sm:px-4 py-2 ">{row.category}</td>
                    <td className="border border-black px-1 sm:px-4 py-2 font-semibold">{row.participation}</td>
                    <td className="border border-black px-1 sm:px-4 py-2 font-semibold">{row.presentation}</td>
                    <td className="border border-black px-1 sm:px-4 py-2 font-semibold ">{row.publication}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className='flex flex-col gap-3 p-4 mx-auto '>
            <ul className='text-left list-disc list-outside pl-6 '>
              <li>Registration for UG and PG students is available daily at a fee of Rs. 300</li>
              <li>The publication charge for selected papers in UGC-listed journals will be communicated after acceptance.</li>
              <li>Accommodation can be arranged for delegates on a prior request and on payment basis</li>
            </ul>
            <div className='bg-primary p-2 rounded-lg text-white text-center max-w-[600px] mx-auto px-4'>
              Registration Fee can be paid by Online Remittance to
            </div>
            <div className='bg-secondary p-4 shadow-full-side rounded-xl max-w-fit sm:text-lg font-medium mx-auto'>
              <p className='flex items-center justify-center gap-6'><span className='text-primary capitalize min-w-[150px] flex items-center justify-between'>Account Name <span>:</span></span><span className='flex w-full items-start'>Principal EMEA college</span></p>
              <p className='flex items-center justify-center gap-6'><span className='text-primary capitalize min-w-[150px] flex items-center justify-between'>Account No <span>:</span></span><span className='flex w-full items-start'>67298282736<br />{'(SBI, Kondotty Branch)'}</span></p>
              <p className='flex items-center justify-center gap-6'><span className='text-primary capitalize min-w-[150px] flex items-center justify-between'>Branch Code<span>:</span></span><span className='flex w-full items-start'>T33</span></p>
              <p className='flex items-center justify-center gap-6'><span className='text-primary capitalize min-w-[150px] flex items-center justify-between'>IFSC Code<span>:</span></span><span className='flex w-full items-start'>SBIN0070311</span></p>
              <p className='flex items-center justify-center gap-6'><span className='text-primary capitalize min-w-[150px] flex items-center justify-between'>Swift Code<span>:</span></span><span className='flex w-full items-start'>SBININBBT33</span></p>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default RegistrationFee;
