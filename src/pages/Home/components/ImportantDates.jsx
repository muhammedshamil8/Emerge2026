import React from "react";
import { motion } from "framer-motion";

const dates = [
  {
    date: "January 20, 2026",
    title: "Last Date of Abstract Submission",
  },
  {
    date: "January 27, 2026",
    title: "Notification to all Authors",
  },
  {
    date: "January 29, 2026",
    title: "Last Date of Registration",
  },
  {
    date: "February 1, 2026",
    title: "Camera-Ready Paper Submission",
  },
];

const ImportantDates = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1100px] mx-auto px-4">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-2xl md:text-3xl font-semibold text-[#005188] mb-14"
        >
          Important Dates
        </motion.h2>

        {/* Timeline */}
        <div className="relative">
          {/* Line */}
          <div className="hidden md:block absolute top-[8px] left-0 right-0 h-[2px] bg-[#005188] max-w-[800px] mx-auto" />

          {/* Items */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-0 ">
            {dates.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative flex flex-col items-center text-center"
              >
                {/* Dot */}
                <div className="relative z-10 w-4 h-4 rounded-full bg-[#005188] ring-4 ring-[#005188]/20 " />

                {/* Date */}
                <p className="mt-4 text-sm font-semibold text-[#005188]">
                  {item.date}
                </p>

                {/* Title */}
                <p className="mt-2 text-sm text-gray-700 max-w-[200px]">
                  {item.title}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImportantDates;
