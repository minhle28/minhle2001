import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { experienceData } from '@/data';

interface ExperienceData {
  jobName: string;
  date: string;
  description: string | string[];
}

const Experience: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const displayExperience = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="py-20 w-full" id="experience">
      <h2 className="heading">
        My Work<span className="text-grey-100"> Experience</span>
      </h2>

      <div className="lg:flex flex-row mt-12 gap-6">
        <div className="flex lg:flex-col gap-2 mb-6">
          {experienceData.map((job, index) => (
            <button
              key={index}
              onClick={() => displayExperience(index)}
              className={`lg:w-72 sm:w-auto mb-4 px-4 py-4 bg-gray-100 text-left text-xs font-bold relative transition-transform ease-in-out transform origin-left ${
                activeIndex === index ? 'after:scale-x-100' : 'after:scale-x-0'
              } after:absolute after:left-0 after:bottom-0 after:h-1 after:w-full after:bg-black after:origin-left after:transition-transform after:duration-1000 hover:after:scale-x-100`}
            >
              {job.jobName}
            </button>
          ))}
        </div>
        <motion.div
          key={activeIndex}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:h-96 md:h-auto bg-white rounded-lg shadow-lg p-8 w-3/3"
        >
          <div className='flex justify-between items-center'>
            <h2 className="text-xl font-bold">{experienceData[activeIndex].jobName}</h2>
            <p className="text-gray-600">{experienceData[activeIndex].date}</p>
          </div>
          <p className="text-gray-600">Location: {experienceData[activeIndex].location}</p>
          <br />
          <div dangerouslySetInnerHTML={{ __html: Array.isArray(experienceData[activeIndex].description) ? experienceData[activeIndex].description.join('<br>') : experienceData[activeIndex].description }} />
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
