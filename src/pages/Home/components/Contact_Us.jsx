import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Mail, Globe } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const sectionFade = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6 },
  },
};

const listStagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardFadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};


const ContactUs = () => {
  const Contactus = [
    {
      title: "Social Science and Literature",
      chairman: {
        name: "Mr. Roy P.P",
        designation: "Assistant Professor in English",
        mobile: "+91 98474 53870",
      },
      cordinator: [
        {
          name: "Dr. Hussain V",
          designation: "Assistant Professor in Economics",
          mobile: "+91 94953 86262",
        },
      ],
    },
    {
      title: "Science",
      chairman: {
        name: "Dr. Krishnakumar T",
        designation: "Professor in Computer Applications",
        mobile: "+91 94956 07426",
      },
      cordinator: [
        {
          name: "Ms. Jisha PJ",
          designation: "Associate Professor, Dept. of Microbiology",
          mobile: "+91 99956 30321",
        },
      ],
    },
    {
      title: "Commerce",
      chairman: {
        name: "Ms. Kamalam Edathil",
        designation: "Head, Department of Commerce",
        mobile: "+91 98476 73343",
      },
      cordinator: [
        {
          name: "Mr. Aboobacker Siddeeq K.C",
          designation: "Assistant Professor in Commerce",
          mobile: "+91 97456 68667",
        },
      ],
    },
  ];

  return (
    <motion.section
      className="w-full mx-auto"
      variants={sectionFade}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <h1 className="text-primary text-xl md:text-3xl font-semibold text-center my-10">
        Contact Us
      </h1>

       <div className="bg-secondary rounded-xl shadow-full-side shadow-gray-300 p-4 my-4 max-w-[420px] mx-auto space-y-4">
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="mailto:emerge2026@emeacollege.ac.in"
              className="flex items-center gap-2 hover:text-[#005188]"
            >
              <Mail size={14} />
              emerge2026@emeacollege.ac.in
            </a>

          </div>

          <div className="flex justify-center items-center gap-4 text-sm text-gray-500">
            <a
              href="https://wa.me/919961063747"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-green-600"
            >
              <FaWhatsapp size={16} />
              +91 9961063747
            </a>
            <span>|</span>
            <a
              href="https://wa.me/919995266781"
              target="_blank"
              rel="noreferrer"
              className="hover:text-green-600"
            >
              +91 9995266781
            </a>
          </div>
        </div>

      <motion.div
        className="flex flex-col sm:flex-row gap-8 py-4"
        variants={listStagger}
      >
        {Contactus.map((item, index) => (
          <motion.div
            key={index}
            variants={cardFadeUp}
            className="max-w-[260px] mx-auto text-center"
          >
            <h2 className="text-primary font-semibold text-xl max-w-[160px] min-h-[50px] mx-auto leading-5">
              {item.title}
            </h2>

            <div className="bg-secondary rounded-xl shadow-full-side shadow-gray-300 p-4 mt-2 space-y-5">
              {/* Chairman */}
              <div>
                <h3 className="text-primary font-semibold text-lg">Chairman</h3>
                <p className="font-medium">{item.chairman.name}</p>
                <p className="text-sm">{item.chairman.designation}</p>
                <p className="text-sm">Mob: {item.chairman.mobile}</p>
              </div>

              {/* Coordinators */}
              <div>
                <h3 className="text-primary font-semibold text-lg">
                  Co-ordinator
                </h3>
                {item.cordinator.map((c, i) => (
                  <div key={i} className="mt-1">
                    <p className="font-medium">{c.name}</p>
                    <p className="text-sm">{c.designation}</p>
                    <p className="text-sm select-text">Mob: {c.mobile}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>


       
    </motion.section>
  );
};

export default ContactUs;
