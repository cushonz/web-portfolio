import { motion } from "framer-motion";

function Plan2() {
  return (
    <div>
      <motion.div
        className="flex flex-col text-center p-10"
        initial={{ opacity: 0, y: -50 }} // Start state
        whileInView={{ opacity: 1, y: 0 }} // Animation when in view
        transition={{ duration: 0.8, ease: "easeOut" }} // Smooth easing
        viewport={{ once: true, amount: 0.3 }} // Trigger when 30% of the element is visible
      >
        <ul className="text-left">
          <li>
            Perfect for growing businesses or companies needing a polished,
            feature-rich website.
          </li>
          <li>Custom design.</li>
          <li>CMS integration.</li>
          <li>E-commerce features.</li>
          <li>Custom animations.</li>
          <li>Up to 15 pages.</li>
          <li>Enhanced SEO.</li>
          <li>Analytics integration.</li>
          <li>Timeline: 4-6 weeks.</li>
          <li>Price: Starting at $1,500.</li>
        </ul>
      </motion.div>
    </div>
  );
}

export default Plan2;
