import { motion } from "framer-motion";
import React, { useState } from "react";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";
import {
  ChevronRight,
  ChevronLeft,
  Download,
} from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button, Skeleton } from "antd";
import { speker_bg } from "@/assets/icons";
import {
  EmeaBW,
  Speaker1,
  Speaker2,
  Speaker3,
  Speaker4,
  Speaker5,
  Speaker6,
  Speaker7,
  Speaker8,
  Speaker9,
  Speaker10,
  Speaker11,
} from "@/assets/images";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={classNames(
        className,
        "flex items-center justify-center  mr-5"
      )}
      onClick={onClick}
    >
      <ChevronRight size={40} className="text-black  " />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={classNames(className, "flex items-center justify-center ")}
      onClick={onClick}
    >
      <ChevronLeft size={40} className="text-black p-.5 " />
    </div>
  );
}

const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleDownloadBrochure = () => {
    window.open(Brochure, "_blank");
  };

  const speakers = [
    {
      name: "Prof. Dr. Raeid Abed",
      designation:
        "Professor and Head, Department of Biology, Sultan Qaboos University, Oman",
      image: Speaker1,
    },
    {
      name: "Prof. Dr. Galal Hatem",
      designation: "Former Chancellor, Umm Al Quwain University, UAE",
      image: Speaker2,
    },
    {
      name: "Dr. Ahmed Abdul Maujood Athiyya Sulaiman",
      designation: "Associate Professor, Al-Qasimia University",
      image: Speaker3,
    },
    {
      name: "Prof. Dr. Mohamed Hatha Abdulla",
      designation:
        "Professor, Department of Marine Biology, Microbiology, and Biochemistry, Cochin University of Science and Technology",
      image: Speaker4,
    },
    {
      name: "Dr. Mushthaq Ahammed",
      designation:
        "Assistant Professor, Department of Commerce, University of Kerala",
      image: Speaker5,
    },
    {
      name: "Dr. Md Imdadul Haque",
      designation:
        "Associate Professor, Department of Economics, Aligarh Muslim University (AMU)",
      image: Speaker6,
    },
    {
      name: "Dr. Abdul Azeez N.P",
      designation:
        "Associate Professor, Department of Economics Aligarh Muslim University (AMU)",
      image: Speaker7,
    },
    {
      name: "Prof. Dr. Sebastian Joseph",
      designation: "Historian and Author",
      image: Speaker8,
    },
    {
      name: "Dr. Raziuddin Aquil",
      designation: "Professor, Department of History, University of Delhi",
      image: Speaker9,
    },
    {
      name: "Dr. Sunil Mathew",
      designation:
        "Associate Professor, Department of Mathematics, National Institute of Technology, Calicut",
      image: Speaker10,
    },
    {
      name: "Dr. K.B. Jinesh",
      designation:
        "Professor, Indian Institute of Space Science and Technology (IIST) Department of Space, Govt. of India",
      image: Speaker11,
    },
  ];

  var settings = {
    dots: false,
    infinite: true,
    pauseOnHover: true,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    // cssEase: "linear",
    slidesToShow: 4,
    initialSlide: 0,
    swipeToSlide: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1140,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="">
      {/* Image and overlay */}
      <div className="relative z-0 select-none h-full min-h-[260px] md:min-h-[300px] ">
        {!imageLoaded && (
          <div className="w-full h-full min-h-[300px] bg-gray-300 animate-pulse"></div>
        )}

        {/* Image */}
        <img
          src={EmeaBW}
          alt="EmeaBW"
          className={`w-full h-full min-h-[300px] object-cover z-0 transition-opacity duration-300 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setImageLoaded(true)}
        />
        <div className="bg-white/80 absolute inset-0 z-10 "></div>

        {/* Content */}
        <motion.div
          className="absolute  top-2 sm:top-[5px] md:top-[10px] lg:top-[12%] xl:top-[20%] left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center text-center gap-2 sm:gap-4 md:gap-5 lg:gap-10 w-full sm:w-4/5 md:w-3/5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col sm:gap-3">
            <h1 className="text-3xl sm:text-4xl   lg:text-6xl bg-gradient-to-b text-transparent bg-clip-text from-[#068585] to-[#005188] font-bold uppercase">
              EMERGE-2025
            </h1>
            <p className="font-medium uppercase text-center text-[10px] leading-3 sm:text-md md:text-lg md:leading-5">
              EMEA MULTIDISCIPLINARY CONFERENCE ON <br />
              EMERGING RESEARCH AND GLOBAL EXCELLENCE
            </p>
          </div>

          <div className="flex flex-col  sm:gap-4">
            <h2 className="text-2xl sm:text-4xl   lg:text-6xl text-primary font-semibold whitespace-nowrap">
              International Conference
            </h2>
            <div className="rounded-full bg-green flex items-center justify-center  uppercase w-fit px-8 gap-2 py-1 sm:py-2 mx-auto text-sm md:text-lg">
              <span className="bg-primary rounded-md text-white font-semibold px-1 text-xs py-0.5 sm:text-sm md:text-md">
                14
              </span>
              <span className="bg-primary rounded-md text-white font-semibold px-1 text-xs py-0.5 sm:text-sm md:text-md">
                15
              </span>
              <span className="bg-primary rounded-md text-white font-semibold px-1 text-xs py-0.5 sm:text-sm md:text-md">
                16
              </span>
              <span className="text-primary font-semibold text-md  sm:text-lg md:text-2xl">
                JANUARY 2025
              </span>
            </div>
          </div>
          <div className="flex gap-3 sm:gap-6 flex-col">
            {/* <div className="rounded-full bg-primary uppercase px-6 md:px-10 py-1.5 md:py-2.5 min-w-[240px] max-w-[240px] md:min-w-[340px] md:max-w-[340px] font-bold text-white text-sm  sm:!text-md md:!text-lg shadow-button cursor-pointer mx-auto" onClick={() => handleNavigate('/register')}>
                REGISTER NOW
              </div> */}
            <div
              className="rounded-full bg-primary uppercase px-6 md:px-10 py-1.5 md:py-2.5 min-w-[240px] max-w-[240px] md:min-w-[340px] md:max-w-[340px] font-bold text-white text-sm  sm:!text-md md:!text-lg shadow-button cursor-pointer mx-auto flex items-center justify-center gap-2"
              onClick={handleDownloadBrochure}
            >
              <Download size={20} strokeWidth={2.5} /> Brochure
            </div>
            <div className="flex gap-4 w-full  items-center justify-center flex-col sm:flex-row">
              {/* <div className="rounded-full hover:bg-[#2da3a3] bg-primary text-white uppercase px-4 py-[5px] md:py-[7px] min-w-[300px] max-w-[300px] w-full  font-semibold text-[12px] md:text-sm    cursor-pointer flex items-center justify-center gap-x-2 transition-all ease-in-out  whitespace-nowrap" onClick={() => handleNavigate('/register/abstract')}>
                  <FileUp size={18} /> Abstract Submission
                </div> */}
              {/* <a href={Guidelines_for_paper_submission} download
                  className="text-white hover:bg-[#2da3a3] font-semibold text-[12px] py-[6px] w-full min-w-[300px] max-w-[300px] transition-all ease-in-out flex items-center gap-2 justify-center  bg-primary md:py-2 px-4 rounded-full whitespace-nowrap">
                  <Download size={18} /> Guidelines for full paper submission
                </a> */}
              <div
                onClick={() => handleNavigate("/Feedback")}
                className="text-white hover:bg-[#2da3a3] cursor-pointer font-semibold text-[16px] py-[6px] w-full min-w-[200px] max-w-[300px] transition-all ease-in-out flex items-center gap-2 justify-center  bg-primary  md:py-3 px-4 rounded-full whitespace-nowrap"
              >
                Submit your Feedback
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className=" bg-primary h-10 absolute left-0 sm:w-full overflow-hidden z-30 w-[110%] ">
        <div className="marquee flex justify-start h-full gap-4">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="flex items-center justify-between gap-6 text-white h-full mx-2"
            >
              <span className="whitespace-nowrap font-medium">{`ABSTRACT SUBMISSION AND REGISTRATION CLOSED`}</span>
              <span className="h-2 w-2 rounded-full bg-[#0098FF]" />
            </div>
          ))}
        </div>
      </div>

      {/* sport Registration */}
      <section className="my-10 mt-20 sm:mt-32">
        <div className="max-w-[800px] shadow-[5px_5px_20px_rgba(0,_0,_0,_0.15)] rounded-xl -mt-4 mx-auto p-4 flex flex-col w-full gap-4">
          <h1 className="text-primary text-xl md:text-3xl font-bold text-center  md:my-2 ">
            SPOT REGISTRATION
          </h1>
          <div className="grid grid-cols-2  md:flex items-center justify-between  md:px-4 mx-auto gap-[10px] md:gap-[26px]">
            <button className="rounded-lg flex items-center justify-center flex-nowrap text-nowrap whitespace-nowrap border-[4px] border-white shadow-lg bg-primary text-white font-semibold text-md px-5 py-2">
              STUDENTS: Rs. 750
            </button>
            <button className="rounded-lg border-[4px] flex items-center justify-center flex-nowrap text-nowrap whitespace-nowrap border-white shadow-lg bg-primary text-white font-semibold text-md px-5 py-2">
              FACULTIES: Rs. 1200
            </button>
            <button className="rounded-lg col-span-2  md:col-span-2 border-[4px] flex items-center justify-center flex-nowrap text-nowrap whitespace-nowrap border-white shadow-lg bg-primary text-white font-semibold text-md px-5 py-2">
              RESEARCH SCHOLARS: Rs.1000
            </button>
          </div>
          <div className="border border-[#005188] px-4 py-1.5 font-semibold text-center max-w-[730px] w-full mx-auto text-sm sm:text-md">
            Registration for UG and PG students on Daily Basis available:{" "}
            <span className="font-bold text-primary">Rs. 250</span> per day
          </div>
          <div className="flex justify-between w-full items-center max-w-[730px] mx-auto">
            <div className="text-[12px] sm:text-sm">
              <span className="font-medium">Contact: </span>
              <a
                href="mailto:emerge2026@emeacollege.ac.in"
                className="text-primary font-semibold"
              >
                emerge2026@emeacollege.ac.in
              </a>
            </div>
            <div className="text-[12px] sm:text-sm">
              <span className="font-medium">Mob: </span>
              <a
                href="tel:+919947869914"
                className="text-primary font-semibold"
              >
                9947869914
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* speekers */}
      <section className="my-10">
        <h1 className="text-primary text-xl md:text-3xl font-bold text-center my-6 sm:my-20">
          SPEAKERS OF EMERGE2025
        </h1>
        <div className="slider-container  max-w-[1200px] relative mx-auto">
          <Slider
            {...settings}
            className="p-4 cursor-grabbing" // Attach onMouseLeave
          >
            {speakers.map((speaker, index) => (
              <div
                key={index}
                className="p-1 h-full flex items-end w-fit justify-end  mx-auto max-w-[280px]"
              >
                <div className="relative mx-auto bg-white  rounded-md overflow-hidden w-fit  p-[5px] ">
                  <img
                    src={speker_bg}
                    alt="Background"
                    className="w-full h-full object-cover absolute bottom-0 z-0 left-0 right-0 top-[20%] rounded-md"
                  />
                  {/* Profile Picture  */}
                  {speaker.image ? (
                    <img
                      src={speaker.image}
                      alt="Speaker"
                      className="object-cover object-top relative w-full max-w-full h-full -mt-[10px] speaker_image_size rounded  mx-auto  z-10 pt-2"
                    />
                  ) : (
                    <div className="w-full h-[170px] sm:h-[240px] md:h-[250px] flex items-center justify-center z-10">
                      <Skeleton.Image className="object-cover z-10 bg-gray-200/90 rounded-md" />
                    </div>
                  )}

                  {/* Content */}
                  <div className="relative bg-white p-1 items-center justify-center  text-center rounded-md flex flex-col h-[75px] md:h-[110px]">
                    <h2 className="text-sm md:text-xl font-bold leading-[15px] md:leading-[22px] text-primary ">
                      {speaker.name}
                    </h2>
                    <p className="text-[8px] sm:text-[12px] leading-tight font-medium ">
                      {speaker.designation}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
      {/* Content Card */}
      <motion.div
        className="mt-10 font-medium rounded-xl leading-5 sm:leading-7 w-full p-3 sm:p-8 flex flex-col items-start text-center sm:text-left z-50 sm:text-lg"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }} // Triggers animation once when the element enters the viewport
      >
        <p>
          <span className="text-primary">
            EMEA College of Arts and Science
          </span>{" "}
          is a prominent institution affiliated with the University of Calicut,
          offering a wide range of undergraduate, postgraduate, and research
          programs. Established in 1982, the college has played a pivotal role
          in the educational advancement of the Malabar region in Kerala,
          creating an environment conducive to both intellectual and cultural
          development.
        </p>
        <p>
          Building on its strong academic foundation,{" "}
          <span className="text-primary">EMERGE</span> will serve as a
          platform for inter and cross-disciplinary engagement, bringing
          together thought leaders, academics, and researchers from around the
          world. This multidisciplinary conference upholds EMEA’s commitment to
          promoting dialogue across diverse fields of study, with three major
          tracks: Humanities, Social Sciences and Literature, Sciences, and
          Commerce and Management.
        </p>
      </motion.div>
    </div>
  );
};

export default Hero;
