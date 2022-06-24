import "../../App.css";
import "./Projects.css";
import ProjectCard from "./ProjectCard/ProjectCard";
import { Link } from "react-router-dom";

export default function Projects(props) {
  return (
    <div className="section-project-container">
      <div className="project-content">
        <h2 className="section-sub-title">Works that I'm proud of</h2>
        <h1 className="section-title">Projects</h1>
        <p className="section-desc project-desc">
          A small showcase of the projects that I`m most proud of making/working on.
          <br/>MELHORAR ESSA SEÇÃO, não estou gostando muito dos cards
        </p>
        <hr />
      </div>

      <div className="section-divider mobile-hidden" />

      <div className="section-content">
        <div className="project-container">
          <h2 className="section-sub-title">Projects I'm proud of</h2>
          <div className="project-cards-container">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </div>
          <Link to="/projects" className="link">See All my projects</Link>
        </div>
      </div>
    </div>
  );
}
