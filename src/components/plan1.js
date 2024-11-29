import { motion } from "framer-motion";

function Plan1() {
  return (
    <div>
      <motion.div
        className="flex flex-col text-center p-10"
        initial={{ opacity: 0, y: -50 }} // Start state
        whileInView={{ opacity: 1, y: 0 }} // Animation when in view
        transition={{ duration: 0.5, ease: "easeOut" }} // Smooth easing
        viewport={{ once: true, amount: 0.3 }} // Trigger when 30% of the element is visible
      >
        <h1 className="text-4xl text-center mb-10">
          Essential Starter Package
        </h1>
        <ul>
          <ul>
            <li>
              Ideal for small businesses or startups looking for a basic online
              presence.
            </li>
            <li>
              Professional custom website with essential features like
              responsive design, branding, and basic functionality.
            </li>
            <li>Up to 5 pages.</li>
            <li>SEO optimization.</li>
            <li>Contact forms.</li>
            <li>Performance optimization.</li>
            <li>Timeline: 2-4 weeks.</li>
            <li>Price: Starting at $500.</li>
          </ul>
        </ul>
      </motion.div>
    </div>
  );
}

export default Plan1;