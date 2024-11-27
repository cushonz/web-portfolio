import react from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "../styles/header.css";

function Header() {
  return (
    <div className="header">
      <div className="logos">
        <a href="https://github.com/cushonz">
          <FontAwesomeIcon icon={faSquareGithub} size="2x" />
        </a>
        <FontAwesomeIcon icon={faEnvelope} size="2x" />
      </div>
    </div>
  );
}

export default Header;
