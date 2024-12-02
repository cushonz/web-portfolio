import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faHome } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import SliderToggle from "./SliderToggle";

function Header() {
  const location = useLocation();
  const hideOnRoutes = ["/contact"];
  const isHiddenRoute = hideOnRoutes.includes(location.pathname);

  const isContactRoute = location.pathname === "/contact";
  const isHomeRoute = location.pathname === "/";

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 items-center w-full h-auto md:h-20 p-4">
      {/* Title Section */}
      {isHomeRoute && (
        <motion.div
          className="flex items-center justify-center md:justify-start md:ml-4 mb-4 md:mb-0"
          initial={{ opacity: 0, x: -50 }} // Start state
          whileInView={{ opacity: 1, x: 0 }} // Animation when in view
          transition={{ duration: 0.5, ease: "easeOut" }} // Smooth easing
          viewport={{ once: true, amount: 0.3 }} // Trigger when 30% of the element is visible
        >
          <h1 className="text-white text-2xl md:text-3xl font-serif font-bold">
            Cushon Design
          </h1>
        </motion.div>
      )}

      {/* Slider Section */}
      <div className="flex justify-center md:justify-start">
        <SliderToggle />
      </div>

      {/* Links Section */}
      <div className="flex justify-center md:justify-self-end items-center space-x-4 mt-4 md:mt-0 col-start-3">
        {!isContactRoute && (
          <Link
            to="/contact"
            className="text-gray-600 dark:text-white hover:text-gray-900"
          >
            <FontAwesomeIcon
              icon={faEnvelope}
              size="lg"
              className="md:text-2xl"
            />
          </Link>
        )}
        {!isHomeRoute && (
          <Link
            to="/"
            className="text-gray-600 dark:text-white hover:text-gray-900"
          >
            <FontAwesomeIcon icon={faHome} size="lg" className="md:text-2xl" />
          </Link>
        )}
        <a
          href="https://github.com/cushonz"
          className="text-gray-600 hover:text-gray-900 dark:text-white"
        >
          <FontAwesomeIcon
            icon={faSquareGithub}
            size="lg"
            className="md:text-2xl"
          />
        </a>
      </div>
    </div>
  );
}

export default Header;
