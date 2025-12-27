import React from 'react';
import {  Submission_G } from '@/assets/icons';
import {  Download} from 'lucide-react'
import Guidelines_for_Authors from '@/assets/brochure/AbstarctSubmissionGuidlines.pdf'
import { motion } from "motion/react"

const Guidelines = () => {
 
  return (
    <div className=" relative overflow-hidden px-4 pb-24" id='guidelines'>
      {/* Submission Guidelines */}
      <motion.section
        className="my-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        id='#guidelines'
      >
        <h1 className='text-primary text-xl md:text-3xl font-semibold text-center my-10'>Submission Guidelines</h1>
        <div className='flex flex-col-reverse sm:flex-row gap-y-6 w-full items-center justify-center'>
          <div className='basis-1/2 flex w-full  items-center justify-center pl-6'>
            <ul className='list-disc list-outside'>
              <li>Presentations can be delivered both offline and online. This option can be chosen during the abstract submission.</li>
              <li>Abstracts and full papers must be submitted electronically. Only submissions sent through our online platform will be accepted.</li>
              <li>Please follow the format provided on the conference website for all submissions.</li>
              <li>For detailed instructions regarding submission, including formatting guidelines and topics of interest, Please download the PDF shared above..</li>
              <li className='font-medium'>The full paper can only be submitted after receiving acceptance of the abstract</li>
               <a href={Guidelines_for_Authors} download
          className="text-white hidden md:flex hover:bg-[#184866]  w-fit mx-auto  transition-all ease-in-out  items-center gap-2 justify-center my-3 bg-primary py-2 px-4 rounded-xl"
        >
          <Download /> Guidelines for Authors (.pdf)
        </a>
            </ul>
          </div>

          <div className='basis-1/2 flex w-full items-center justify-center mx-auto flex-col-reverse md:flex-col'>

            <a href={Guidelines_for_Authors} download
              className="text-white hover:bg-[#184866] md:hidden transition-all ease-in-out flex items-center gap-2 justify-center my-3 bg-primary py-2 px-4 rounded-xl">
              <Download /> Guidelines for Authors (.pdf)
            </a>
            <img src={Submission_G} alt="Submission_G" className='object-cover max-h-[280px] sm:max-h-[300px] mx-auto' />
          </div>
        </div>
       
      </motion.section>

      {/*  */}

      <section
        className='h-12'
      >
        <div className='marguee_rotate_1 absolute z-10  w-[150%] sm:w-[110%] -left-10 -right-4 h-12 bg-[#D9D9D9] py-2  text-black uppercase flex items-center '>
          {[...Array(20)].map((_, i) => (
            <p key={i} className='flex  items-center justify-center'>
              <span className='h-2 w-2 rounded-full bg-primary mx-5' />
              <span className='whitespace-nowrap'>{`Submission Guidelines`}</span>
            </p>
          ))}
        </div>
        <div className='absolute  w-[150%] sm:w-[110%] -left-10 -right-4 h-12 bg-[#D9D9D9] py-2 -rotate-[8deg] sm:-rotate-[5deg] text-black uppercase flex items-center '>
          {[...Array(10)].map((_, i) => (
            <p key={i} className='flex  items-center justify-center'>
              {/* <span className='h-2 w-2 rounded-full bg-primary mx-5' /> */}
              {/* <span className='whitespace-nowrap'>{`Submission Guidelines`}</span> */}
            </p>
          ))}
        </div>
        <div className='marguee_rotate_2 z-30 absolute w-[150%] sm:w-[110%] -left-10 -right-4 h-12 bg-primary py-2  text-white uppercase flex items-center'>
          {[...Array(20)].map((_, i) => (
            <p key={i} className='flex items-center justify-center'>
              <span className='h-2 w-2 rounded-full bg-[#B0FFFF] mx-5' />
              <span className='whitespace-nowrap'>{`Submission Guidelines`}</span>
            </p>
          ))}
        </div>
        <div className='absolute w-[150%] z-20  sm:w-[110%] -left-10 -right-4 h-12 bg-primary py-2 rotate-[4deg] sm:rotate-[3deg] text-white uppercase flex items-center'>
          {[...Array(10)].map((_, i) => (
            <p key={i} className='flex items-center justify-center'>
              {/* <span className='h-2 w-2 rounded-full bg-[#B0FFFF] mx-5' /> */}
              {/* <span className='whitespace-nowrap'>{`Submission Guidelines`}</span> */}
            </p>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Guidelines;
