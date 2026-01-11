import { motion, AnimatePresence } from "framer-motion";
import React, { useState ,useEffect } from "react";
import classNames from "classnames";
import { Download } from "lucide-react";
import EmeaBW from "@/assets/images/emea_bg.png";
import { useNavigate } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";


const scaleIn = {
  hidden: { opacity: 0, scale: 0.96 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const handleDownloadBrochure = () => {
    const link = document.createElement("a");
    link.href = "/brochure/Emerge_brochure.pdf";
    link.download = "Emerge_brochure.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const eventDate = new Date("February 4, 2026 09:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = eventDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  const valuesArray = () => {
    const { days, hours, minutes, seconds } = timeLeft;
    return [days, hours, minutes, seconds];
  };

  return (
    <div className="">
      <div className="px-4 mx-auto ">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center pt-10 text-primary">
          EMERGE 2026
        </h2>

        <h3 className="text-center text-xl md:text-2xl mt-2 text-[#000] font-semibold">
          {/* 2ND INTERDISCIPLINARY INTERNATIONAL CONFERENCE */}
          2nd Interdisciplinary International Conference
        </h3>
        <p className="text-center sm:text-lg  text-[#000]">
          <span className="text-primary font-semibold">Innovation:</span>{" "}
          Research, connection, Knowledge
        </p>
        <h4 className="text-center text-md md:text-lg mt-1  font-semibold">
          <span className=" text-primary">04</span> &{" "}
          <span className=" text-primary">05</span> February 2025
        </h4>
        <div className="flex justify-center mt-6 flex-wrap gap-4">
          {/* register now */}
          <button
            onClick={() => navigate("/register")}
            className="bg-primary hover:bg-[#005188]/80 hover:shadow-lg text-white font-semibold px-10 py-2 rounded-full shadow-lg mr-4 transition duration-300"
          >
            Register Now →
          </button>
          <button
            onClick={() => navigate("/register/abstract")}
            className="bg-white hover:bg-gray-100 text-primary font-semibold px-6 py-2  rounded-full shadow-lg border border-[#005188] flex items-center transition duration-300"
          >
            Abstract Submission
          </button>
          {/* download brochure */}
          {/* <button
            onClick={handleDownloadBrochure}
            className="bg-white hover:bg-gray-100 text-primary font-semibold px-6 py-2  rounded-full shadow-lg border border-[#005188] flex items-center transition duration-300"
          >
            <Download className="mr-2" size={16} />
          Download Brochure
          </button> */}
        </div>
      </div>
      {!imageLoaded && (
        <div className="w-full py-10 h-full min-h-[300px] opacity-50 bg-gray-300 animate-pulse"></div>
      )}
      <motion.img
        src={EmeaBW}
        alt="EMEACONFERENCE"
        initial={{ opacity: 0 }}
        animate={{ opacity: imageLoaded ? 1 : 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        onLoad={() => setImageLoaded(true)}
        className="mx-auto w-full h-full object-contain "
      />
      <motion.div
        variants={scaleIn}
        className="flex items-center justify-center relative z-20 -mt-[6%] mb-10 px-4"
      >
        <motion.div
          className="grid grid-cols-4 bg-white shadow-lg shadow-blue-50 rounded-3xl"
          layout
        >
          {["DAYS", "HRS", "MIN", "SEC"].map((text, i) => {
            const value = valuesArray()[i];
            const padded = String(value).padStart(2, "0");
            return (
              <div
                key={i}
                className={`px-4 sm:px-8 py-6 text-center ${
                  i !== 0 ? "border-l border-gray-100" : ""
                }`}
              >
                <AnimatePresence mode="wait">
                  <motion.p
                    key={padded}
                    initial={{ opacity: 0, y: -12, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 12, scale: 0.98 }}
                    transition={{ duration: 0.28, ease: "easeOut" }}
                    className="text-2xl md:text-4xl text-[#005AAB] font-mono tabular-nums w-12 mx-auto text-center font-black"
                  >
                    {padded}
                  </motion.p>
                </AnimatePresence>

                <p className="text-xs font-semibold tracking-wider text-[#005AAB] mt-1">
                  {text}
                </p>
              </div>
            );
          })}
        </motion.div>
      </motion.div>
      <div className="px-4 ">
        {/* sport Registration */}
        <section className="-mt-[6%] relative z-10 max-w-[1000px] mx-auto px-4 py-6 ">
          <div className=" -mt-4 mx-auto p-4  bg-[#fff]  flex flex-col w-full gap-4 lg:px-10 rounded-3xl shadow-lg border">
            <h1 className="text-primary text-lg sm:text-xl md:text-3xl font-bold text-center  md:my-2 ">
              SPOT REGISTRATION
            </h1>
            <div className="flex-col md:flex-row flex items-center justify-between  mx-auto   max-w-[730px] w-full">
              <button className="rounded-lg flex items-center justify-center flex-nowrap text-nowrap whitespace-nowrap border-[4px] border-white shadow-lg bg-primary text-white font-semibold text-sm sm:text-md px-5 py-2">
                STUDENTS: Rs. 550
              </button>
              <button className="rounded-lg border-[4px] flex items-center justify-center flex-nowrap text-nowrap whitespace-nowrap border-white shadow-lg bg-primary text-white font-semibold text-sm sm:text-md px-5 py-2">
                FACULTIES: Rs. 850
              </button>
              <button className="rounded-lg col-span-2  md:col-span-2 border-[4px] flex items-center justify-center flex-nowrap text-nowrap whitespace-nowrap border-white shadow-lg bg-primary text-white font-semibold text-sm sm:text-md px-5 py-2">
                RESEARCH SCHOLARS: Rs. 800
              </button>
            </div>
            <div className="border  border-[#005188] px-4 py-1.5 mb-4 font-semibold text-center max-w-[730px] w-full mx-auto text-sm sm:text-md">
              Registration for UG and PG students on Daily Basis available:{" "}
              <span className="font-bold text-primary">Rs. 300</span> per day
            </div>
            {/* <div className="flex justify-between w-full items-center max-w-[730px] mx-auto">
              <div className="text-[12px] sm:text-sm select-text">
                <span className="font-medium">Contact: </span>
                <a
                  href="mailto:emerge2026@emeacollege.ac.in"
                  className="text-primary font-semibold hover:underline"
                >
                  emerge2026@emeacollege.ac.in
                </a>
              </div>

              <div className="text-[12px] sm:text-sm flex items-start gap-2 select-text">
                <FaWhatsapp className="text-green-500 mt-0.5" size={16} />

                <div className="flex flex-col gap-1">
                  <a
                    href="https://wa.me/919961063747"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-green-600 transition-colors select-text"
                  >
                    +91 99610 63747
                  </a>

                  <a
                    href="https://wa.me/919995266781"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-green-600 transition-colors select-text"
                  >
                    +91 99952 66781
                  </a>
                </div>
              </div>
            </div> */}
          </div>
        </section>

        {/* About Emerge */}
        <section className="bg-white mb-8 relative z-10 max-w-[1200px] mx-auto px-4 py-6 rounded-3xl ">
          <div className=" mx-auto  flex flex-col w-full gap-4">
            <h1 className="text-primary text-2xl md:text-3xl font-semibold text-center  md:my-2 ">
              About EMERGE 2026
            </h1>
            <p className="text-[#333] text-md md:text-lg font-medium text-justify">
              <span className="text-primary">EMERGE 2026</span>, the second
              edition of EMEA's flagship interdisciplinary conference, invites
              scholars, researchers, practitioners, and students to participate
              in a vibrant forum for dialogue, discovery, and collaboration. The
              conference seeks to address the challenges of a rapidly changing
              world through rigorous scholarship and innovative perspectives
            </p>
            <p className="text-[#333] text-md md:text-lg font-medium text-justify">
              Organised around three broad academic tracks&mdash;Humanities,
              Social Sciences and Literature; Sciences; and Commerce and
              Management&mdash; EMERGE 2026 encourages interdisciplinary
              engagement that transcends traditional boundaries. The conference
              aims to foster meaningful scholarly exchange, generate actionable
              insights, and envision equitable, sustainable, and humane futures.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
