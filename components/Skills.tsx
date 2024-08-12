import React from "react";
import { motion } from "framer-motion";
import { skills } from "@/data";

const Skills = () => {
  return (
    <div className="py-20 w-full" id="skills">
      <h2 className="heading">
        My Technical <span className="text-grey-100">Skills</span>
        <br />
      </h2>

      <div className="flex flex-wrap items-center justify-center w-full mt-12 p-4 gap-5 lg:gap-8">
        {skills.map((card) => (
          <motion.div
            key={card.id}
            className="bg-grey-200 w-16 h-16 lg:w-20 lg:h-20 rounded-full text-black dark:text-white border-neutral-200 dark:border-slate-800 flex items-center justify-center"
            initial={{ scale: 0 }}           // Start small
            whileInView={{ scale: 1 }}       // Scale up when in view
            transition={{ duration: 0.6 }}   // Customize duration
            viewport={{ once: true, amount: 0.3 }} // Trigger when 30% in view
          >
            <div className="flex justify-center lg:flex-row flex-col lg:items-center gap-2">
              <img
                src={card.thumbnail}
                alt={card.thumbnail}
                className="w-10 h-10 lg:w-14 lg:h-14"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
