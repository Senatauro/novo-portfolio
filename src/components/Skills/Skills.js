import "../../App.css";
import "./Skills.css";

export default function Skills(props) {
  return (
    <div className="section-skill-container">
      <div className="skills-section">
          <h2 className="section-sub-title">My toolset of</h2>
          <h1 className="section-title">Skills</h1>
          <hr />
      </div>
      

      <div className="section-divider mobile-hidden" />
      

      <div className="skills-section-content">
        <h3 className="section-skill-title">FrontEnd</h3>
        <div className="skills-container">
          <h4 className="skill-title">HTML</h4>
          <h4 className="skill-title">CSS</h4>
          <h4 className="skill-title">Javascript</h4>
          <h4 className="skill-title">ReactJS</h4>
          <h4 className="skill-title">Web3.0</h4>
        </div>
        
        <h3 className="section-skill-title">BackEnd</h3>
        <div className="skills-container">
          <h4 className="skill-title">NodeJS</h4>
          <h4 className="skill-title">C#</h4>
          <h4 className="skill-title">.Net</h4>
          <h4 className="skill-title">Express</h4>
          <h4 className="skill-title">Solidity</h4>
        </div>

        <h3 className="section-skill-title">DataBase</h3>
        <div className="skills-container">
          <h4 className="skill-title">MySQL</h4>
          <h4 className="skill-title">MongoDB</h4>
          <h4 className="skill-title">DinamoDB</h4>
          <h4 className="skill-title">GraphQL</h4>
        </div>

        <h3 className="section-skill-title">Cloud</h3>
        <div className="skills-container">
          <h4 className="skill-title">AWS</h4>
          <h4 className="skill-title">GCP</h4>
        </div>

        <h3 className="section-skill-title">Game Development</h3>
        <div className="skills-container">
          <h4 className="skill-title">Unity</h4>
          <h4 className="skill-title">Unreal 4</h4>
        </div>
      </div>
    </div>
  );
}
