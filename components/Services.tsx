import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { services } from "@/data";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Services = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: false, // Ensures the animation triggers again when scrolling back
    threshold: 0.2, // Adjust based on when you want the animation to start
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <div className="py-20 w-full">
      <h2 className="heading">
        I Know That <span className="text-grey-100">Good Development</span>
        <br />
        Means <span className="text-grey-100">Good Business</span>
      </h2>

      <div ref={ref} className="flex flex-wrap justify-center w-full mt-12 p-4 gap-8">
        {services.map((card) => (
          <motion.div
            key={card.id}
            // className="flex text-black dark:text-white border-neutral-200 dark:border-slate-800"
            className="flex text-black border-neutral-200"
            variants={fadeInUp}
            initial="hidden"
            animate={controls}
          >
            <div className="flex flex-col p-3 py-6 md:p-4 lg:p-6 gap-2 w-72">
              <img
                src={card.thumbnail}
                alt={card.thumbnail}
                className="rounded-xl"
              />
              <div>
                <h1 className="text-start text-base md:text-lg font-bold">
                  {card.title}
                </h1>
                <p className="text-start text-white-100 mt-3">
                  {card.desc}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
