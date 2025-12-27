import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

import {
  Collaboration,
  Innovation,
  inspiration,
  Recognition,
} from "@/assets/icons";

const WhyAttend = () => {
  const AttendEmerge = [
    {
      title: "Inspiration",
      icon: inspiration,
      description: "Gain insights from world-renowned keynote speakers.",
    },
    {
      title: "Collaboration",
      icon: Collaboration,
      description:
        "Network with researchers and professionals across different disciplines.",
    },
    {
      title: "Innovation",
      icon: Innovation,
      description: "Present your research and receive constructive feed-back.",
    },
    {
      title: "Recognition",
      icon: Recognition,
      description:
        "Get your work published in conference proceedings or international journals.",
    },
  ];
  return (
    <div className="">
      {/* Why Attend EMERGE? */}
      <section className="my-10">
        <h1 className="text-primary text-xl md:text-3xl font-semibold text-center my-10">
          Why Attend <span className="font-bold">EMERGE?</span>
        </h1>
        <div
          className="grid gap-6 w-full justify-center items-center 
             grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
        >
          {AttendEmerge.map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col mx-auto items-center justify-evenly gap-2 min-h-[240px] bg-[#F0F9FF] shadow-full-side py-3 px-1 rounded-xl max-w-[300px]"
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
              <img src={item.icon} alt="inspiration" className="w-12 h-12 bg-primary p-2 rounded-xl" />
              <div className="flex items-center justify-center flex-col gap-3">
                <h2 className="font-semibold text-xl">{item.title}</h2>
                <p
                  className="text-center mx-auto min-h-[80px]"
                  style={{ wordSpacing: "0.5em" }}
                >
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default WhyAttend;
