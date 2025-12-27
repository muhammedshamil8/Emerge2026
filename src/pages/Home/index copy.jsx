import React, { useState, useRef, useEffect } from 'react'
import {
  EmeaBW, EmeaColor, Commerce, Commerce_big, Science, Science_big, Social, Social_big,
  Speaker1, Speaker2, Speaker3, Speaker4, Speaker5, Speaker6, Speaker7, Speaker8, Speaker9, Speaker10, Speaker11
} from '@/assets/images'
import { Collaboration, Innovation, inspiration, Recognition, Submission_G, Train, Flight, LandMark, speker_bg } from '@/assets/icons';
import { ChevronRight, ChevronLeft, X, Download, MapPin, FileUp } from 'lucide-react'
import { Button, Skeleton, Modal } from 'antd';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';
import Guidelines_for_Authors from '@/assets/brochure/Guidelines_for_Authors.docx'
import Guidelines_for_paper_submission from '@/assets/brochure/guidelines_for_the_author_full_paper.docx'
import { motion } from "motion/react"
import Brochure from '@/assets/brochure/Emerge_brochure.pdf';
import Hero from './components/Hero';



function index() {
 

  const handleNavigate = (path) => {
    navigate(path);
  }

  return (
    <motion.div
      key={location.pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className=' select-none px-4 xl:px-0 md:relative w-full md:overflow-hidden'
    >
    
    <Hero />

    
     



 


    


  

   

    

    </motion.div >
  )
}

export default index
