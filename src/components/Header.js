import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "../styles/header.css";

function Header() {
  return (
    <div className="header w-full p-4 sm:p-6 md:p-8 bg-gray-100">
      <div className="logos flex justify-center sm:justify-start gap-4 sm:gap-6">
        <a
          href="https://github.com/cushonz"
          className="text-gray-600 hover:text-gray-900"
        >
          <FontAwesomeIcon icon={faSquareGithub} size="2x" />
        </a>
        <a
          href="mailto:example@example.com"
          className="text-gray-600 hover:text-gray-900"
        >
          <FontAwesomeIcon icon={faEnvelope} size="2x" />
        </a>
      </div>
    </div>
  );
}

export default Header;
