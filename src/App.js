import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./App.css";
import intro from "./intro.json";
import provide from "./service.json";

function App() {
  const profilePic = "https://avatars.githubusercontent.com/u/77802000?v=4";
  return (
    <div className="App">
      <div className="header">
        <div className="header-content">
          <h5>Home</h5>
          <h5>About</h5>
          <h5>Lab</h5>
        </div>
        <div className="logos">
          <FontAwesomeIcon icon={faSquareGithub} size="2x" />
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </div>
      </div>
      <div className="hero">
        <div className="intro">
          <p>{intro.introText}</p>
          <img src={profilePic} />
        </div>
        <div className="services">
          <div className="blurb">
            <p>{provide.skills}</p>
            <div className="service-flex">
              <div className="card">
                <img src="https://th.bing.com/th/id/R.3286c4561f9baefdba59d61d2660abbe?rik=GR96RVEnqyosrQ&pid=ImgRaw&r=0" />
              </div>

              <div className="card">
                <img src="https://cdn0.iconfinder.com/data/icons/designer-skills/128/node-js-512.png" />
              </div>
            </div>
          </div>
          <div className="offer">
            <motion.div
              className="plans"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }} // Trigger when 30% of the element is in view
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
            </motion.div>
            <motion.div
              className="plans"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }} // Trigger when 30% of the element is in view
            >
              <h2>Professional Growth Package</h2>

              <ul>
                <li>
                  Perfect for growing businesses or companies needing a
                  polished, feature-rich website.
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
            <motion.div
              className="plans"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }} // Trigger when 30% of the element is in view
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
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
