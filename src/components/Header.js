import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
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
    <div className="grid grid-cols-5 w-screen h-20">
      {isHomeRoute && (
        <motion.div
          className="flex items-center ml-4"
          initial={{ opacity: 0, x: -50 }} // Start state
          whileInView={{ opacity: 1, x: 0 }} // Animation when in view
          transition={{ duration: 0.5, ease: "easeOut" }} // Smooth easing
          viewport={{ once: true, amount: 0.3 }} // Trigger when 30% of the element is visible
        >
          <h1 className="text-white text-3xl font-serif font-bold">
            Cushon Design
          </h1>
        </motion.div>
      )}
      <div className="flex m-3">
        <SliderToggle />
      </div>

      <div className="flex justify-between items-center col-start-5 mr-5">
        {!isContactRoute && (
          <Link
            to="/contact"
            className="text-gray-600 dark:text-white hover:text-gray-900"
          >
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
          </Link>
        )}
        {!isHomeRoute && (
          <Link
            to="/"
            className="text-gray-600 dark:text-white hover:text-gray-900"
          >
            <FontAwesomeIcon icon={faHome} size="2x" />
          </Link>
        )}
        <a
          href="https://github.com/cushonz"
          className="text-gray-600 hover:text-gray-900 dark:text-white"
        >
          <FontAwesomeIcon icon={faSquareGithub} size="2x" />
        </a>
      </div>
    </div>
  );
}

export default Header;
