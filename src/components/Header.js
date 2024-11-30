import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="grid grid-cols-5 w-screen h-20">
      <div className="flex justify-around items-center col-start-5">
        <a
          href="https://github.com/cushonz"
          className="text-gray-600 hover:text-gray-900"
        >
          <FontAwesomeIcon icon={faSquareGithub} size="2x" />
        </a>
        <Link to="/contact" className="text-gray-600 hover:text-gray-900">
          <FontAwesomeIcon icon={faEnvelope} size="2x" />
        </Link>
      </div>
    </div>
  );
}

export default Header;
