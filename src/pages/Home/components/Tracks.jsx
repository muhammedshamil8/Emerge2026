import React, { useState, useEffect } from "react";
import { Commerce_big, Science_big, Social_big } from "@/assets/images";
import Social from "@/assets/images/1image.svg";
import Science from "@/assets/images/2image.svg";
import Commerce from "@/assets/images/3image.svg";
import EmergerLogo from "@/assets/images/Emerge.svg";
import { ChevronRight, X } from "lucide-react";
import { Modal } from "antd";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";

const Tracks = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [ConferenceTrack, setConferenceTrack] = useState(null);
  const [imageLoadedTrack, setImageLoadedTrack] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleConfereceTrack = (track) => {
    setConferenceTrack(track);
    setOpen(true);
  };

  const ConferenceTracks = [
    {
      title: "Humanities, Social Sciences and Literature",
      image_url: Social,
      image_url_big: Social_big,
      description:
        "This track welcomes theoretical, empirical, and creative engagements with past, present, and future worlds through the lens of humanities and social sciences. It encourages interdisciplinary dialogue on culture, society, power, identity, and knowledge systems.",
      topics: [
        "Contemporary literary studies, comparative literature, and world literatures",
        "Cultural studies, media and film studies, and digital humanities",
        "History, philosophy, political science, sociology, and anthropology",
        "Gender, sexuality, queer studies, subaltern and marginality studies",
        "Language, translation, and discourse studies",
        "Migration, identity, diaspora, and globalisation",
        "Ethics, human rights, and social justice",
        "Education, pedagogy, curriculum, and assessment in the 21st century",
        "Public policy, governance, and civil society interventions",
      ],
      shadow:
        "bg-gradient-to-b from-[#068585] via-[#068585]/60 to-[#000000]/60",
    },

    {
      title: "Sciences",
      image_url: Science,
      image_url_big: Science_big,
      description:
        "This track focuses on scientific inquiry and technological innovation in crafting resilient, sustainable, and intelligent futures. It highlights the intersections of science, technology, ethics, policy, and society.",
      topics: [
        "Fundamental and applied sciences (physics, chemistry, biology, mathematics, statistics)",
        "Environmental science, sustainability studies, and climate resilience",
        "Data science, artificial intelligence, machine learning, and emerging technologies",
        "Biotechnology, health sciences, and public health innovations",
        "Materials science, nanoscience, and green technologies",
        "Science education, scientific literacy, and public engagement with science",
        "Intersections of science, ethics, policy, and society",
      ],
      shadow:
        "bg-gradient-to-b from-[#005188] via-[#005188]/60 to-[#032943]/60",
    },

    {
      title: "Commerce and Management",
      image_url: Commerce,
      image_url_big: Commerce_big,
      description:
        "This track explores how organisations, markets, and economic systems respond to disruption, innovation, and future challenges in a globally connected world.",
      topics: [
        "Innovation and entrepreneurship in the digital era",
        "Sustainable business models, CSR, ESG, and circular economies",
        "Financial markets, fintech, and inclusive finance",
        "Marketing, branding, consumer behaviour, and digital platforms",
        "Human resource management, leadership, and organisational culture",
        "Supply chain, logistics, and operations in a connected world",
        "Business analytics, decision sciences, and data-driven management",
        "Public sector management, social enterprises, and development economics",
      ],
      shadow:
        "bg-gradient-to-b from-[#043658]/80 via-[#043658]/60 to-[#012036]/60",
    },
  ];

  useEffect(() => {
    ConferenceTracks.forEach((track) => {
      const img = new Image();
      img.src = track.image_url_big;
    });
  }, []);
  useEffect(() => {
    if (ConferenceTrack) {
      setImageLoadedTrack(false); // Reset loading state
    }
  }, [ConferenceTrack]);

  return (
    <div className="">
      {/* confernce content */}
      <motion.section
        className="max-w-[1100px] mx-auto px-4 pt-14 text-center"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Heading */}
        <h6 className="text-sm sm:text-base font-medium tracking-wide uppercase text-gray-500">
          Conference Theme
        </h6>

        <h1 className="mt-2 text-xl md:text-3xl font-semibold text-[#005188]">
          Innovation: Research, connection, Knowledge
        </h1>

        {/* Content */}
        <div className="mt-10 flex flex-col-reverse md:flex-row items-center gap-10 text-left">
          {/* Text */}
          <div className="md:basis-2/3">
            <p className="text-gray-700 leading-relaxed sm:text-lg">
              {/* <span className="font-semibold text-[#005188]">EMERGE 2026</span>{" "} */}
              foregrounds how imaginative thinking, evidence-based research, and
              connected forms of knowledge production shape the futures we
              design and inhabit. The conference invites critical reflections
              and creative interventions on the intersections of innovation,
              research, connection, and knowledge.
            </p>

            {/* Key Pillars */}
            <ul className="mt-4 space-y-1 text-gray-700 sm:text-lg">
              <li>
                <span className="font-medium text-[#005188]">Innovation</span>{" "}
                as a catalyst for technological, social, cultural, economic, and
                pedagogical transformation.
              </li>
              <li>
                <span className="font-medium text-[#005188]">Research</span> as
                a rigorous and ethical endeavour addressing real-world
                challenges while amplifying marginalized voices.
              </li>
              <li>
                <span className="font-medium text-[#005188]">Connection</span>{" "}
                as the vital link uniting disciplines, communities, and
                ecosystems in an interconnected world.
              </li>
              <li>
                <span className="font-medium text-[#005188]">Knowledge</span> as
                a shared and empowering resource fostering inclusive futures.
              </li>
            </ul>
          </div>

          {/* Logo */}
          <motion.div
            className="md:basis-1/3 flex justify-center"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <img
              src={EmergerLogo}
              alt="EMERGE Symbol"
              className="w-44 md:w-56 lg:w-64 opacity-90"
            />
          </motion.div>
        </div>

        {/* Objectives */}
        <div className="mt-14 text-left">
          <h2 className="text-lg md:text-2xl font-semibold text-[#005188] mb-4 text-center">
            Objectives of the Conference
          </h2>

          <ul className="max-w-[900px] mx-auto space-y-3 text-gray-700 sm:text-lg list-disc list-inside">
            <li>
              Provide a collaborative forum for presenting cutting-edge research
              and innovative practices across disciplines.
            </li>
            <li>
              Promote cross-disciplinary and transdisciplinary engagement among
              scholars, practitioners, industry professionals, and students.
            </li>
            <li>
              Critically examine contemporary challenges and emerging
              opportunities in a rapidly evolving global landscape.
            </li>
            <li>
              Encourage co-creation of knowledge that is ethically grounded and
              socially responsive.
            </li>
            <li>
              Build enduring academic networks and research collaborations
              beyond the conference.
            </li>
          </ul>
        </div>
      </motion.section>

      {/* Conference Tracks */}

      <motion.section
        className="my-10 px-4"
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        id="tracks"
      >
        <h1 className="text-primary text-xl md:text-3xl font-semibold text-center my-10">
          Conference Tracks
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 max-w-[1000px] mx-auto flex-wrap">
          {ConferenceTracks.map((item, index) => (
            // <motion.div
            //   key={index}
            //   className="relative w-[300px] h-[200px] rounded-lg overflow-hidden "
            //   initial={{ opacity: 0, scale: 0.8, y: 20 }}
            //   whileInView={{
            //     opacity: 1,
            //     scale: 1,
            //     y: 0,
            //   }}
            //   transition={{
            //     duration: 0.5,
            //     delay: index * 0.2,
            //     ease: "easeInOut",
            //   }}
            //   viewport={{ once: true }}
            // >
            //   <img
            //     src={item.image_url}
            //     alt={item.title}
            //     className="w-full h-full object-cover z-20"
            //   />
            //   <div className="absolute top-0 bottom-0 left-0 right-0  bg-gradient-to-b from-[#068585]/40 via-[#005188]/40 to-[#005188]/30" />

            //   <div className="absolute bottom-0 w-full flex justify-between text-white">
            //     <p className="text-sm font-semibold p-2 max-w-[80%]">
            //       {item.title}
            //     </p>
            //     <span
            //       className="absolute -bottom-0 -right-1 h-14 transition-all ease-in-out  w-16 bg-primary rounded-tl-xl  border-l-[6px] border-t-[6px] border-white flex items-center justify-center cursor-pointer hover:bg-[#227ab4]"
            //       onClick={() => handleConfereceTrack(item)}
            //     >
            //       <ChevronRight size={40} />
            //     </span>
            //     <span className="absolute before:content-[''] box-shadow-white right-0 bottom-[36px]  w-[15px] h-[15px]  rounded-full z-10" />
            //     <span className="absolute before:content-[''] box-shadow-white2 right-0 bottom-[56px]  w-[15px] h-[15px] rounded-full  z-10" />
            //     <span className="absolute right-[39px] bottom-0 box-shadow-white3 after:content-['']  w-[15px] rounded-full h-[15px] " />
            //     <span className="absolute right-[60px] bottom-0 box-shadow-white4 after:content-['']  w-[15px] rounded-full h-[15px] " />
            //   </div>
            //   {/* </motion.div> */}
            // </motion.div>
            <motion.div
              key={index}
              className="relative w-[260px] h-[360px] rounded-3xl overflow-hidden "
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.2,
                ease: "easeInOut",
              }}
              viewport={{ once: true }}
            >
              <img
                src={item.image_url}
                alt={item.title}
                className="w-full h-full object-cover z-20"
              />
              <div
                className="
                absolute bottom-0 bottom-0 left-0 right-0 h-[140px]
               bg-gradient-to-b from-transparent to-[#005188]/80 
               backdrop-blur-sm pointer-events-none rounded-lg"
              />

              <div className="absolute rounded-lg bottom-0 w-full flex justify-between text-white flex-col items-center pb-4">
                <p className="text-sm font-semibold p-2 max-w-[80%] rounded-lg">
                  {item.title}
                </p>

                <button
                  className="bg-white rounded-2xl px-10 py-2 text-primary font-semibold hover:bg-gray-100 shadow-lg border border-[#005188] flex items-center transition duration-300"
                  onClick={() => handleConfereceTrack(item)}
                >
                  Know More →
                </button>
              </div>
              {/* </motion.div> */}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* modal for big view for selected card */}
      <Modal
        title=""
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        footer={null}
        styles={"!bg-secondary !p-0"}
        // styles={{
        //   maxHeight: "80vh",
        //   overflowY: "auto",
        //   padding: 0,
        // }}
        mask={true}
        maskClosable={true}
        width={1000}
        closeIcon={
          <span style={{ color: "white" }} className="text-4xl">
            <X strokeWidth={2.25} size={40} />
          </span>
        }
        className="!bg-secondary w-full min-h-[60%] flex items-center justify-center !-p-10 !rounded-2xl"
      >
        {ConferenceTrack ? (
          <div className="-p-10 relative -mx-[26px] min-h-[80vh] -my-[26px] rounded-2xl overflow-y-auto max-h-[80vh]">
            {/* ===== BACKGROUND IMAGE (FIXED) ===== */}
            <img
              src={ConferenceTrack.image_url_big}
              alt={ConferenceTrack.title}
              className="absolute inset-0 w-full h-full object-cover object-center"
            />

            {/* ===== OVERLAY ===== */}
            <div
              className={classNames("absolute inset-0", ConferenceTrack.shadow)}
            />

            {/* ===== SCROLLABLE CONTENT ===== */}
            <div className="relative z-10 max-h-[80vh] overflow-y-auto text-white">
              {/* Title */}
              <div className="py-6 bg-white/80 text-center">
                <h1 className="text-xl sm:text-3xl font-semibold text-primary max-w-[360px] mx-auto">
                  {ConferenceTrack.title}
                </h1>
              </div>

              {/* Description */}
              <div className="px-4 py-6 text-center max-w-[800px] mx-auto">
                <p className="sm:text-lg font-medium">
                  {ConferenceTrack.description}
                </p>
              </div>

              {/* Topics */}
              <div className="px-4 pb-10">
                <h2 className="text-center font-semibold text-lg sm:text-xl mb-4">
                  Key topics include:
                </h2>

                <div className="bg-white p-4 rounded-xl text-black max-w-[800px] mx-auto">
                  <ul className="list-disc list-inside space-y-2 text-sm sm:text-base leading-relaxed">
                    {ConferenceTrack.topics.map((topic, index) => (
                      <li key={index}>{topic}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="p-10 text-center">Loading…</div>
        )}
      </Modal>
    </div>
  );
};

export default Tracks;
