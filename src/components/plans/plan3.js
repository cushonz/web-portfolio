import { motion } from "framer-motion";

function Plan3() {
  return (
    <div>
      <motion.div
        className="flex flex-col text-center p-10"
        initial={{ opacity: 0, y: -50 }} // Start state
        whileInView={{ opacity: 1, y: 0 }} // Animation when in view
        transition={{ duration: 1.1, ease: "easeOut" }} // Smooth easing
        viewport={{ once: true, amount: 0.3 }} // Trigger when 30% of the element is visible
      >
        <ul className="text-left">
          <li>
            Designed for established businesses, high-traffic websites, or those
            needing advanced functionality.
          </li>
          <li>
            Fully custom-built websites or web apps with extensive UI/UX design.
          </li>
          <li>Third-party integrations.</li>
          <li>Custom databases.</li>
          <li>E-commerce capabilities.</li>
          <li>Unlimited pages.</li>
          <li>Scalability options.</li>
          <li>Ongoing support.</li>
          <li>Timeline: 6-8 weeks or more.</li>
          <li>Custom quote.</li>
        </ul>
        <div className="flex justify-center mt-20"></div>
      </motion.div>
    </div>
  );
}

export default Plan3;
