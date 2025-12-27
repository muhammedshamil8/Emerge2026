import { motion } from "framer-motion";
import React, { useState } from "react";
import classNames from "classnames";
import { Download } from "lucide-react";
import EmeaBW from "@/assets/images/emea_bg.png";
import { useNavigate } from "react-router-dom";

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

  return (
    <div className="">
      <div className="max-w-[800px] mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center pt-10 text-primary">
          EMERGE 2026
        </h2>
        <p className="text-center sm:text-lg  text-[#000]">
          Innovating Knowledge, Connecting Ideas and Research
        </p>
        <h3 className="text-center text-xl md:text-2xl mt-2 text-[#000] font-semibold">
       2ND LNTERDISCIPLINARY NTERNATIONAL CONFERENCE
        </h3>
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

      <img
        src={EmeaBW}
        alt="EMEACONFERENCE"
        className={classNames("mx-auto  z-0", {
          "opacity-100": imageLoaded,
          "opacity-0": !imageLoaded,
        })}
        onLoad={() => setImageLoaded(true)}
      />

      <div className=" bg-[#fff]">
        {/* sport Registration */}
        <section className="-mt-[8%] relative z-10 max-w-[1000px] mx-auto px-4 py-6 ">
          <div className=" -mt-4 mx-auto p-4  bg-[#fff]  flex flex-col w-full gap-4 lg:px-10 rounded-3xl shadow-lg border">
            <h1 className="text-primary text-lg sm:text-xl md:text-3xl font-bold text-center  md:my-2 ">
              SPOT REGISTRATION
            </h1>
            <div className="flex-col md:flex-row flex items-center justify-between  mx-auto gap-[10px] md:gap-[26px]  max-w-[730px] w-full">
              <div className="flex flex-col sm:flex-row items-center justify-center   mx-auto gap-[10px] md:gap-[26px]  max-w-[730px] w-full">
                <button className="rounded-lg flex items-center justify-center flex-nowrap text-nowrap whitespace-nowrap border-[4px] border-white shadow-lg bg-primary text-white font-semibold text-sm sm:text-md px-5 py-2">
                  STUDENTS: Rs. 600
                </button>
                <button className="rounded-lg border-[4px] flex items-center justify-center flex-nowrap text-nowrap whitespace-nowrap border-white shadow-lg bg-primary text-white font-semibold text-sm sm:text-md px-5 py-2">
                  FACULTIES: Rs. 900
                </button>
              </div>
              <button className="rounded-lg col-span-2  md:col-span-2 border-[4px] flex items-center justify-center flex-nowrap text-nowrap whitespace-nowrap border-white shadow-lg bg-primary text-white font-semibold text-sm sm:text-md px-5 py-2">
                RESEARCH SCHOLARS: Rs.850
              </button>
            </div>
            <div className="border  border-[#005188] px-4 py-1.5 font-semibold text-center max-w-[730px] w-full mx-auto text-sm sm:text-md">
              Registration for UG and PG students on Daily Basis available:{" "}
              <span className="font-bold text-primary">Rs. 300</span> per day
            </div>
            <div className="flex justify-between w-full items-center max-w-[730px] mx-auto">
              <div className="text-[12px] sm:text-sm">
                <span className="font-medium">Contact: </span>
                <a
                  href="mailto:emerge2026@emeacollege.ac.in"
                  className="text-primary font-semibold select-text"
                >
                  emerge2026@emeacollege.ac.in
                </a>
              </div>
              <div className="text-[12px] sm:text-sm">
                <span className="font-medium">Mob: </span>
                <a
                  href="tel:+919961063747"
                  className="text-primary font-semibold select-text"
                >
                 9961063747
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* About Emerge */}
        <section className="bg-white relative z-10 max-w-[1000px] mx-auto px-4 py-6 rounded-3xl ">
          <div className=" mx-auto p-4 flex flex-col w-full gap-4 px-10">
            <h1 className="text-primary text-2xl md:text-3xl font-semibold text-center  md:my-2 ">
              About EMERGE 2.0
            </h1>
            <p className="text-[#333] text-md md:text-lg font-medium text-justify">
              <span className="text-primary">EMERGE 2.0</span>, the second
              edition of EMEA’s flagship interdisciplinary conference, invites
              scholars, researchers, practitioners, and students to participate
              in a vibrant forum for dialogue, discovery, and collaboration. The
              conference seeks to address the challenges of a rapidly changing
              world through rigorous scholarship and innovative perspectives.
            </p>
            <p className="text-[#333] text-md md:text-lg font-medium text-justify">
              Organised around three broad academic tracks—Humanities, Social
              Sciences and Literature; Sciences; and Commerce and
              Management—EMERGE 2.0 encourages interdisciplinary engagement that
              transcends traditional boundaries. The conference aims to foster
              meaningful scholarly exchange, generate actionable insights, and
              envision equitable, sustainable, and humane futures.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
