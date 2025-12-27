import React from "react";
import { motion } from "framer-motion";

function index() {
  const committee1 = [
    {
      label: "Chief Patron",
      persons: [
        {
          name: "Jb. Sayyid Sadiq Ali Shihab Thangal",
          designation: "(Chief Patron, EMEA Institutions)",
        },
      ],
    },
    {
      label: "Rector",
      persons: [
        {
          name: "Jb. PK Kunhalikutty, MLA",
          designation:
            "(Rector, EMEA Institutions & Former Minister for Industries and Information Technology, Kerala)",
        },
      ],
    },
    {
      label: "Patrons",
      persons: [
        {
          name: "Jb. Sayyid Basheer Ali Shihab Thangal",
          designation: "(President, EMEA Institutions)",
        },
        {
          name: "Jb. P.K. Basheer MLA",
          designation: "(General Secretary, EMEA Institutions)",
        },
        {
          name: "Jb. P.K. Moosa alias Bappu",
          designation: "(Manager, EMEA Institutions)",
        },
      ],
    },
    {
      label: "Chairman",
      persons: [
        {
          name: "Prof. Dr. Riyad A.M",
          designation: "(Principal)",
        },
      ],
    },
    {
      label: "Vice chairman",
      persons: [
        {
          name: "Capt. Abdul Rasheed P",
          designation: "(Assistant Professor, Dept. of English)",
        },
      ],
    },
    {
      label: "General Convener",
      persons: [
        {
          name: "Dr. Jamsheela",
          designation: "(Head, Dept. of Computer Science)",
        },
      ],
    },
    {
      label: "Members",
      persons: [
        {
          name: "Prof. Dr. Ibrahim Cholakkal",
          designation:
            "Vice Chairperson, IQAC and Professor, Dept. of Economics",
        },
        {
          name: "Prof. Dr. Abdul Muneer V.",
          designation:
            "Vice Chairperson, IQAC and Professor, Dept. of Journalism",
        },
        {
          name: "Dr. Shiji Thomas",
          designation: "Head, Dept. of Microbiology",
        },
        {
          name: "Dr. Haulath K.",
          designation:
            "Coordinator, IQAC and Assistant Professor, Dept. of Computer Science",
        },
        {
          name: "Dr. Hussain",
          designation: "Assistant Professor, Dept. of Economics",
        },
        {
          name: "Mr. Aboobacker Siddeeq K.C.",
          designation: "Assistant Professor, Dept. of Commerce",
        },
        {
          name: "Dr. Ashraf P.",
          designation: "Assistant Professor, Dept. of Politics",
        },
        {
          name: "Muhammed Jamshad K.",
          designation: "Associate Professor, Dept. of Computer Science",
        },
        {
          name: "Firoz K.T.",
          designation:
            "Assistant Professor, Dept. of West Asian Studies and Coordinator, NAAC",
        },
        {
          name: "Jisha P.J.",
          designation: "Associate Professor, Dept. of Microbiology",
        },
      ],
    },
  ];

  const committee2 = {
    label: "Advisory Board:",
    persons: [
      {
        name: "Prof. Dr. P. Raveendran",
        designation: "Vice chancellor, University of Calicut, India",
      },
      {
        name: "Prof. Dr. Piotr Szweda",
        designation:
          "Professor, Department of Pharmaceutical Technology and Biochemistry, Gdańsk University of Technology, Poland",
      },
      {
        name: "Prof. Dr. Satheesh C. Raghavan",
        designation:
          "Professor, Department of Biochemistry, Indian Institute of Science (IISc) Banglore, India",
      },
      {
        name: "Prof. Dr. Mohammed Basheer K",
        designation: "Former Vice chancellor, University of Calicut, India",
      },
      {
        name: "Prof. Dr. M. Nasser",
        designation: "Former Pro-Vice chancellor, University of Calicut, India",
      },
      {
        name: "Prof. Dr. Surendra Prasad",
        designation: "Head SAGEONS, University of the South Pacific, Fiji",
      },
      {
        name: "Prof. Dr. Asheref Illyan",
        designation:
          "Head, Department of Economics, Jamia Millia Islamia, India",
      },
      {
        name: "Prof. Dr. Krishnan Chalil",
        designation:
          "Head, Department of Economic Studies and Policy, Central University of South Bihar, India",
      },
      {
        name: "Dr. Safna Hussan K. P",
        designation:
          "Scientist, Micro/Nano Technology Center, Tokai University, Tokyo, Japan",
      },
    ],
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.2, duration: 0.5 },
    },
  };

  return (
    <motion.div
      key={location.pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white p-4 pb-14"
    >
      <h1 className="capitalize font-semibold text-xl sm:text-2xl text-center my-4 pt-6">
        Organizing Committee
      </h1>
      <section className="bg-secondary rounded-xl shadow-full-side mx-auto max-w-[800px] p-6 mb-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {committee1.map((item, index) => (
            <div className="flex flex-col gap-3 mb-5" key={index}>
              <div className="right-slope-card relative bg-primary text-white text-md sm:text-lg font-semibold w-fit pl-3 py-[2px] pr-6 min-w-[100px] rounded-md  capitalize">
                <span className="absolute before:content-[''] box-shadow-lgreen right-[2px] bottom-[0px]  w-[10px] h-[10px]    rounded-full z-10" />
                <span className="absolute before:content-[''] box-shadow-lgreen2 right-[13px] top-[0px]  w-[10px] h-[10px]   rounded-full z-10" />
                {item.label}:
              </div>
              <div className="pl-8 flex flex-col gap-1">
                {item.persons.map((person, index) => (
                  <div className="flex flex-col" key={index}>
                    <h1 className="sm:text-lg font-semibold leading-5">
                      {person.name}
                    </h1>
                    <p className="text-xs sm:text-sm">{person.designation}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </section>

      <h1 className="capitalize font-semibold text-xl sm:text-2xl text-center my-4">
        Advisory Board
      </h1>
      <section className="bg-secondary rounded-xl shadow-full-side mx-auto max-w-[800px] p-6 ">
        <div className="flex flex-col gap-3 mb-5">
          <div className="right-slope-card relative bg-primary text-white text-md sm:text-lg font-semibold w-fit pl-3 py-[2px] pr-6 min-w-[100px] rounded-md  capitalize">
            {committee2.label}:
            <span className="absolute before:content-[''] box-shadow-lgreen right-[2px] bottom-[0px]  w-[10px] h-[10px]    rounded-full z-10" />
            <span className="absolute before:content-[''] box-shadow-lgreen2 right-[13px] top-[0px]  w-[10px] h-[10px]   rounded-full z-10" />
          </div>
          <div className="pl-8 flex flex-col gap-1">
            {committee2.persons.map((person, index) => (
              <div className="flex flex-col" key={index}>
                <h1 className="sm:text-lg font-semibold leading-5">
                  {person.name}
                </h1>
                <p className="text-xs sm:text-sm">{person.designation}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}

export default index;
