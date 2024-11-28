import react from "react";
import { motion } from "framer-motion";
import provide from "./service.json";

function Skills() {
  return (
    <div className="grid grid-cols-5">
      <div className="flex col-span-5 my-10 mx-10 px-10 bg-gray-950 bg-opacity-50 h-full rounded-md flex-col grow gap-10 text-white">
        <p className="my-10 text-xl">{provide.skills}</p>
        <div className="flex sm:gap-10 justify-center object-contain lg:gap-[40rem]">
          <motion.div
            initial={{ opacity: 0, x: -150 }} // Start state
            whileInView={{ opacity: 1, x: 0 }} // Animation when in view
            transition={{ duration: 2, ease: "easeOut" }} // Smooth easing
            viewport={{ once: true, amount: 0.3 }} // Trigger when 30% of the element is visible
          >
            <img
              className="object-contain h-28 w-auto bg-gray-950 bg-opacity-50 rounded-md"
              src="https://th.bing.com/th/id/R.3286c4561f9baefdba59d61d2660abbe?rik=GR96RVEnqyosrQ&pid=ImgRaw&r=0"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -150 }} // Start state
            whileInView={{ opacity: 1, x: 0 }} // Animation when in view
            transition={{ duration: 1.5, ease: "easeOut" }} // Smooth easing
            viewport={{ once: true, amount: 0.3 }} // Trigger when 30% of the element is visible
          >
            <img
              className="object-contain h-28 w-auto bg-gray-950 bg-opacity-50 rounded-md"
              src="https://www.svgrepo.com/show/303251/mysql-logo.svg"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -150 }} // Start state
            whileInView={{ opacity: 1, x: 0 }} // Animation when in view
            transition={{ duration: 1, ease: "easeOut" }} // Smooth easing
            viewport={{ once: true, amount: 0.3 }} // Trigger when 30% of the element is visible
          >
            <img
              className="h-28 w-auto bg-gray-950 bg-opacity-50 rounded-md"
              src="https://cdn0.iconfinder.com/data/icons/designer-skills/128/node-js-512.png"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
