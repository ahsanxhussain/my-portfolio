import { FaExternalLinkAlt } from "react-icons/fa";
import "./Projects.css";
export default function Projects() {
  return (
    <div className="project-container">
      <h1>Projects</h1>
      <div className="card-container">
        <div className="project-card">
          <a target="_blank" href="https://ahsanxhussain.github.io/stop-watch/">
            <FaExternalLinkAlt className="open-link" size="20" />
          </a>
          <h2>Stop Watch</h2>
          <h4>HTML, CSS, Javascript</h4>
        </div>
        <div className="project-card">
        <a target="_blank" href="https://learningtech-750ee.web.app/">
            <FaExternalLinkAlt className="open-link" size="20" />
          </a>
          <h2>Learning tech</h2>
          <h4>React, Firebase</h4>
        </div>  <div className="project-card">
        <a target="_blank" href="https://learningtech-750ee.web.app/">
            <FaExternalLinkAlt className="open-link" size="20" />
          </a>
          <h2>Learning tech</h2>
          <h4>React, Firebase</h4>
        </div>  <div className="project-card">
        <a target="_blank" href="https://learningtech-750ee.web.app/">
            <FaExternalLinkAlt className="open-link" size="20" />
          </a>
          <h2>Learning tech</h2>
          <h4>React, Firebase</h4>
        </div>
      </div>
    </div>
  );
}
