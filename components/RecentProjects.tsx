"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { motion } from "framer-motion";
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h2 className="heading">
        Browse My Recent{" "}
        <span className="text-grey-100">Projects</span>
      </h2>
      <div className="flex flex-wrap items-center justify-center xl:justify-start p-4 gap-20 lg:gap-12 mt-10">
        {projects.slice().reverse().map((item) => (
          <motion.div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }} // Trigger animation when item is 20% visible
            variants={fadeInUp}
          >
            <PinContainer
              title={item.link}
              href="https://twitter.com/mannupaaji"
            >
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-auto mb-10 rounded-xl">
                {/* <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bgimg" />
                </div> */}
                <img
                  src={item.img}
                  alt="cover"
                  // className="z-10 absolute"
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-grey-200 lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon5" className="p-1.5" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <a
                    key={item.id}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center items-center"
                  >
                    <p className="flex lg:text-xl md:text-xs text-sm text-grey-100">
                      Check Github
                    </p>
                    <FaLocationArrow className="ms-3" color="#a4a4a3" />
                  </a>
                </div>
              </div>
            </PinContainer>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
