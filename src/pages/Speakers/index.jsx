import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  AhmadJabas,
  Mallikarjunappa,
  MuhammadShafi,
  NurulFadhillah,
  Sheeja,
  VilasM,
  Hameed,
} from "@/assets/images";
import { Bassam } from "../../assets/images";

// Speaker Card Component with Cursor-following Effect
const SpeakerCard = ({ speaker, index }) => {
  const cardRef = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glowX, setGlowX] = useState(50);
  const [glowY, setGlowY] = useState(50);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate rotation based on cursor position
    const rotX = ((y - centerY) / centerY) * -15;
    const rotY = ((x - centerX) / centerX) * 15;

    setRotateX(rotX);
    setRotateY(rotY);
    setGlowX((x / rect.width) * 100);
    setGlowY((y / rect.height) * 100);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setGlowX(50);
    setGlowY(50);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative group cursor-pointer"
      style={{
        perspective: "1000px",
      }}
    >
      <div
        className="relative rounded-2xl overflow-hidden transition-all duration-200 ease-out"
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Glow Effect */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10"
          style={{
            background: `radial-gradient(circle at ${glowX}% ${glowY}%, rgba(0, 81, 136, 0.4) 0%, transparent 50%)`,
          }}
        />

        {/* Card Background with Gradient Border */}
        <div className="bg-gradient-to-br from-[#005188] via-[#0077b6] to-[#00a8e8] p-[2px] rounded-2xl">
          <div className="bg-white rounded-2xl overflow-hidden">
            {/* Image Container */}
            <div className="relative h-64 sm:h-72 overflow-hidden bg-gradient-to-b from-[#F0F9FF] to-white">
              <img
                src={speaker.image}
                alt={speaker.name}
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
              />
              {/* Image Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#005188]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Speaker Info */}
            <div className="p-4 sm:p-5 text-center bg-gradient-to-b from-white to-[#F0F9FF] min-h-[120px] group-hover:min-h-fit flex flex-col justify-start transition-all duration-300">
              <h3
                className="text-lg sm:text-xl font-bold text-[#005188] mb-2 transition-transform duration-300 line-clamp-2 group-hover:line-clamp-none"
                style={{ transform: "translateZ(20px)" }}
              >
                {speaker.name}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed line-clamp-4 group-hover:line-clamp-none text-center px-1 transition-all duration-300">
                {speaker.designation}
              </p>
              {speaker.organization && (
                <p className="text-xs text-gray-500 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {speaker.organization}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Floating Particles Effect */}
        <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#00a8e8] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:translate-x-2 group-hover:-translate-y-2" />
        <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-[#0077b6] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:-translate-x-2 group-hover:translate-y-2" />
      </div>
    </motion.div>
  );
};

function index() {
  // Speakers Data
  const speakers = [
    {
      name: "Ahmad Jabas Professor",
      designation: "Department Of computer Science SHAQRA UNIVERSITY, Kingdom of Saudi Arabia",
      organization: "",
      image: AhmadJabas,
    },
    {
      name: "Dr. Mallikarjunappa",
      designation: "Professor, NITTE (Deemed to be University), Justice K S Hegde Institute of Management, Nitte - 574 110 Karkala (Taluk), Udupi (District), Karnataka, India",
      organization: "",
      image: Mallikarjunappa,
    },
    {
      name: "Dr. Muhammad Shafi",
      designation: "Associate Professor, School of Management Studies,National Institute of Technology Calicut",
      organization: "",
      image: MuhammadShafi,
    },
    {
      name: "Dr. Nurul Fadhillah",
      designation: "S.Pd., M.Hum.\nVice Dean for Partnership, Students and Alumni Affairs of Tabiyah and Teacher Training Faculty,\n UIN Sultanah Nahrasiyah Lhokseumawe,",
      organization: "",
      image: NurulFadhillah,
    },
    {
      name: "Dr. Sheeja",
      designation: "Principal Scientist and HOD Division of Crop Improvement and Biotechnology ICAR-IISR, KOZHIKODE",
      organization: "",
      image: Sheeja,
    },
    {
      name: "Dr. Vilas M",
      designation: "Senior Professor Department of Studies and Research in Economics, Tumkur University, Karnataka",
      organization: "",
      image: VilasM,
    },
    {
      name: "Dr. Hameed",
      designation: "Department of Computer Science and Engineering, College of Engineering, Osmania University",
      organization: "",
      image: Hameed,
    },
    {
      name: "Bassam Ahmed",
      designation: "Assistant Professor, University of Hodeidah, Yemen",
      organization: "",
      image: Bassam,

    }
  ];
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
      },
      {
        stream: "Commerce and Management",
        chairperson: "Dr. Kamalam Edathil",
        coordinator: "Dr. Aboobacker Sidique",
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
          designation: "Assistant Professor, Dept. of politics.",
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
      {/* Speakers Section */}
      <section className="mb-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-[#005188] mb-3 pt-6">
            Distinguished Speakers
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto px-4">
            Meet our esteemed speakers who will share their expertise and insights at EMERGE 2026
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#005188] to-[#00a8e8] mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 max-w-7xl mx-auto px-2 sm:px-4">
          {speakers.map((speaker, index) => (
            <SpeakerCard key={index} speaker={speaker} index={index} />
          ))}
        </div>
      </section>

      
      

      
      

      
      

      

      
    </motion.div>
  );
}

export default index;
