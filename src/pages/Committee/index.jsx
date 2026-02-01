import React from "react";
import { motion } from "framer-motion";

function index() {
  const streamwiseCommittee = {
    label: "Streamwise Committee",
    streams: [
      {
        stream: "Science",
        chairperson: "Dr. Krishnakumar K",
        coordinator: "Ms. Jisha P. J",
        phone: "+91 99956 30321",
      },
      {
        stream: "Arts",
        chairperson: "Mr. Roy P P",
        coordinator: "Dr. Hussain K",
        phone: "+91 94953 86262",
      },
      {
        stream: "Commerce and Management",
        chairperson: "Dr. Kamalam Edathil",
        coordinator: "Dr. Aboobacker Sidique",
        phone: "+91 97456 68667",
      },
    ],
  };

  const streamwiseReviewCommittee = {
    label: "Streamwise Review Committee",
    streams: [
      {
        stream: "Science",
        members: [
          "Dr. Haulath K",
          "Dr. Mashhoor K",
          "Dr. Ramsiya M",
          "Dr. Rasiya K T",
        ],
        phones: ["+91 99952 66781", "+91 99610 63747"],
      },
      {
        stream: "Arts",
        members: [
          "Dr. Firoz K T",
          "Dr. Nisar U",
          "Dr. Asharaf P",
          "Dr. Saleel Ahammed A K",
        ],
        phones: ["+91 95440 99080", "+91 70124 23728"],
      },
      {
        stream: "Commerce and Management",
        members: [
          "Dr. Jaseena",
          "Dr. Aneesath M",
          "Dr. Amla K",
          "Dr. Juwairya P P",
        ],
        phones: ["9633160071", "+91 74031 14554"],
      },
    ],
  };

  const OrganizingCommittee = [
    // {
    //   label: "Chief Patron",
    //   persons: [
    //     {
    //       name: "Jb. Sayyid Sadiq Ali Shihab Thangal",
    //       designation: "(Chief Patron, EMEA Institutions)",
    //     },
    //   ],
    // },
    // {
    //   label: "Rector",
    //   persons: [
    //     {
    //       name: "Jb. PK Kunhalikutty, MLA",
    //       designation:
    //         "(Rector, EMEA Institutions & Former Minister for Industries and Information Technology, Kerala)",
    //     },
    //   ],
    // },
    // {
    //   label: "Patrons",
    //   persons: [
    //     {
    //       name: "Jb. Sayyid Basheer Ali Shihab Thangal",
    //       designation: "(President, EMEA Institutions)",
    //     },
    //     {
    //       name: "Jb. P.K. Basheer MLA",
    //       designation: "(General Secretary, EMEA Institutions)",
    //     },
    //     {
    //       name: "Jb. P.K. Moosa alias Bappu",
    //       designation: "(Manager, EMEA Institutions)",
    //     },
    //   ],
    // },
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
          name: "Dr. O. Jamsheela",
          designation: "(Head, Dept. of Computer Science)",
        },
      ],
    },
    {
      label: "Members",
      persons: [
        {
          name: "Prof. Dr. Ibrahim Cholakkal",
          designation: "Dept. of Economics",
        },
        {
          name: "Prof. Dr. Abdul Muneer V.",
          designation: "Dept. of Journalism",
        },
        {
          name: "Dr. Shiji Thomas",
          designation: "Assistant Coordinator, Head, Dept. of Microbiology",
        },
        {
          name: "Dr. Haulath K.",
          designation:
            "IQAC Coordinator, Assistant Professor, Dept. of Computer Science",
        },
        {
          name: "Dr. Firoz. K.T",
          designation:
            "Coordinator NAAC, Assistant Professor, Dept. of West Asian Studies.",
        },
        {
          name: "Mr. Abdurazaque P.M",
          designation: "Head, Dept. of Economics",
        },
        {
          name: "Mr. Askarali",
          designation: "Head, Dept. of Malayalam",
        },
        {
          name: "Mr. Mohammed Jamshad. K",
          designation: "Associate Professor, Dept. of Computer Science",
        },
        {
          name: "Mr. Abdul Jaleel M",
          designation: "Assistant Professor, Dept. of English",
        },
        {
          name: "Dr. Ashraf P",
          designation: "Assistant Professor, Dept. of Political Science",
        },
      ],
    },
  ];

  const AdvisoryBoard = {
    label: "Advisory Board:",
    persons: [
      {
        name: "Prof.(Dr.) Andi Asrifan",
        designation:
          "Professor of English Education, Universitas Negeri Makassar, Indonesia.",
      },
      {
        name: "Prof.(Dr.) Asheref  Illiyan",
        designation:
          "Professor and Head, Department of Economics , Jamia Millia Islamia , Central University, New Delhi, India",
      },

      {
        name: "Prof.(Dr.)Rajendra Pilankatta",
        designation:
          "Dept of Biochemistry and Molecular Biology, Dean Students’ Welfare, Central University of Kerala , Kasaragod, Kerala.",
      },
      {
        name: "Prof.(Dr.)Raju. G",
        designation:
          "Dean, Computer Science and Engineering, Sahrdaya College of Engineering and Technology, Thrissur, Kerala.",
      },
      {
        name: "Prof.(Dr.)Arun A Rauf",
        designation:
          "Professor and Head, Department of Biochemistry, University of Kerala, Thiruvananthapuram",
      },
      {
        name: "Dr. Sinu P John",
        designation:
          "Adjunct Associate Professor, Department of Biochemistry, Georgetown University, Washington DC, USA",
      },
      {
        name: "Dr. Girish K Radhakrishnan",
        designation:
          "Scientist-F, BRIC-National Institute of Animal Biotechnology, Hyderabad.",
      },
      {
        name: "Mr. Abdul Haseen Kinadiyil",
        designation: "Technical Solutions Consultant, Google Cloud, Texas, USA",
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
          {OrganizingCommittee.map((item, index) => (
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
            {AdvisoryBoard.label}
            <span className="absolute before:content-[''] box-shadow-lgreen right-[2px] bottom-[0px]  w-[10px] h-[10px]    rounded-full z-10" />
            <span className="absolute before:content-[''] box-shadow-lgreen2 right-[13px] top-[0px]  w-[10px] h-[10px]   rounded-full z-10" />
          </div>
          <div className="pl-8 flex flex-col gap-1">
            {AdvisoryBoard.persons.map((person, index) => (
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

      <h1 className="capitalize font-semibold text-xl sm:text-2xl text-center my-6">
        {streamwiseCommittee.label}
      </h1>

      <section className="bg-secondary rounded-xl shadow-full-side mx-auto max-w-[800px] p-6 mb-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {streamwiseCommittee.streams.map((item, index) => (
            <div className="flex flex-col gap-3 mb-5" key={index}>
              {/* Stream title */}
              <div className="right-slope-card relative bg-primary text-white text-md sm:text-lg font-semibold w-fit pl-3 py-[2px] pr-6 min-w-[100px] rounded-md capitalize">
                <span className="absolute before:content-[''] box-shadow-lgreen right-[2px] bottom-[0px] w-[10px] h-[10px] rounded-full z-10" />
                <span className="absolute before:content-[''] box-shadow-lgreen2 right-[13px] top-[0px] w-[10px] h-[10px] rounded-full z-10" />
                {item.stream}
              </div>

              {/* Stream details */}
              <div className="pl-8 flex flex-col gap-1">
                <p className="sm:text-lg font-semibold">
                  Chairperson: {item.chairperson}
                </p>
                <p className="sm:text-base font-medium">
                  Coordinator: {item.coordinator}
                </p>

                {item.phone && (
                  <p className="text-xs sm:text-sm text-gray-600">
                    Contact: {item.phone}
                  </p>
                )}
              </div>
            </div>
          ))}
        </motion.div>
      </section>

      <h1 className="capitalize font-semibold text-xl sm:text-2xl text-center my-6">
        {streamwiseReviewCommittee.label}
      </h1>

      <section className="bg-secondary rounded-xl shadow-full-side mx-auto max-w-[800px] p-6 mb-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {streamwiseReviewCommittee.streams.map((stream, index) => (
            <div className="flex flex-col gap-3 mb-6" key={index}>
              {/* Stream title */}
              <div className="right-slope-card relative bg-primary text-white text-md sm:text-lg font-semibold w-fit pl-3 py-[2px] pr-6 min-w-[100px] rounded-md capitalize">
                <span className="absolute before:content-[''] box-shadow-lgreen right-[2px] bottom-[0px] w-[10px] h-[10px] rounded-full z-10" />
                <span className="absolute before:content-[''] box-shadow-lgreen2 right-[13px] top-[0px] w-[10px] h-[10px] rounded-full z-10" />
                {stream.stream}
              </div>

              {/* Members */}
              <div className="pl-8 flex flex-col gap-1">
                {stream.members.map((member, idx) => (
                  <p className="sm:text-lg font-medium">
                    {/* {idx + 1}. */}
                     {member}
                  </p>
                ))}

                {/* Contact numbers */}
                {stream.phones && (
                  <div className="mt-2 text-sm flex flex-col gap-1">
                    {stream.phones.map((phone, idx) => (
                      <p key={idx}>
                        <strong>Contact:</strong> {phone}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </motion.div>
      </section>
    </motion.div>
  );
}

export default index;
