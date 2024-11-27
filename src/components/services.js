import react from "react";
import { motion } from "framer-motion";
import provide from "./service.json";
import "../styles/services.css";

function Services() {
  return (
    <div className="services">
      <div className="blurb">
        <p>{provide.skills}</p>
        <div className="service-flex">
          <motion.div
            className="card"
            initial={{ opacity: 0, x: -150 }} // Start state
            whileInView={{ opacity: 1, x: 0 }} // Animation when in view
            transition={{ duration: 2, ease: "easeOut" }} // Smooth easing
            viewport={{ once: true, amount: 0.3 }} // Trigger when 30% of the element is visible
          >
            <img src="https://th.bing.com/th/id/R.3286c4561f9baefdba59d61d2660abbe?rik=GR96RVEnqyosrQ&pid=ImgRaw&r=0" />
          </motion.div>
          <motion.div
            className="card"
            initial={{ opacity: 0, x: -150 }} // Start state
            whileInView={{ opacity: 1, x: 0 }} // Animation when in view
            transition={{ duration: 1.5, ease: "easeOut" }} // Smooth easing
            viewport={{ once: true, amount: 0.3 }} // Trigger when 30% of the element is visible
          >
            <img src="https://www.svgrepo.com/show/303251/mysql-logo.svg" />
          </motion.div>
          <motion.div
            className="card"
            initial={{ opacity: 0, x: -150 }} // Start state
            whileInView={{ opacity: 1, x: 0 }} // Animation when in view
            transition={{ duration: 1, ease: "easeOut" }} // Smooth easing
            viewport={{ once: true, amount: 0.3 }} // Trigger when 30% of the element is visible
          >
            <img src="https://cdn0.iconfinder.com/data/icons/designer-skills/128/node-js-512.png" />
          </motion.div>
        </div>
      </div>
      <div className="offer">
        <motion.div
          className="plans"
          initial={{ opacity: 0, y: -50 }} // Start state
          whileInView={{ opacity: 1, y: 0 }} // Animation when in view
          transition={{ duration: 0.5, ease: "easeOut" }} // Smooth easing
          viewport={{ once: true, amount: 0.3 }} // Trigger when 30% of the element is visible
        >
          <h2>Essential Starter Package</h2>
          <ul>
            <ul>
              <li>
                Ideal for small businesses or startups looking for a basic
                online presence.
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
          <button className="my-custom-button">Sign up now</button>
        </motion.div>
        <motion.div
          className="plans"
          initial={{ opacity: 0, y: -50 }} // Start state
          whileInView={{ opacity: 1, y: 0 }} // Animation when in view
          transition={{ duration: 0.8, ease: "easeOut" }} // Smooth easing
          viewport={{ once: true, amount: 0.3 }} // Trigger when 30% of the element is visible
        >
          <h2>Professional Growth Package</h2>

          <ul>
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
          <button className="my-custom-button">Sign up now</button>
        </motion.div>
        <motion.div
          className="plans"
          initial={{ opacity: 0, y: -50 }} // Start state
          whileInView={{ opacity: 1, y: 0 }} // Animation when in view
          transition={{ duration: 1.1, ease: "easeOut" }} // Smooth easing
          viewport={{ once: true, amount: 0.3 }} // Trigger when 30% of the element is visible
        >
          <h2>Premium Custom Solution</h2>
          <ul>
            <li>
              Designed for established businesses, high-traffic websites, or
              those needing advanced functionality.
            </li>
            <li>
              Fully custom-built websites or web apps with extensive UI/UX
              design.
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
          <button className="my-custom-button">Sign up now</button>
        </motion.div>
      </div>
    </div>
  );
}

export default Services;
