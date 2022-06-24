import "../../App.css";
import "./Link.css"

export default function Contact(props) {
  return (
    <div className="section-container">
      <div className="section-content contact-content">
        <h2 className="section-sub-title">Let's Talk!</h2>
        <h1 className="section-title">Contact</h1>
        <p className="section-desc initial-section">
          Feel free to contact me if you have any questions, want to collaborate
          or just want to say hi👋.
        </p>
        <hr />
        <a href="mailto:cgsste@hotmail.com" className="link contact-link">
          Say hi👋
        </a>
      </div>
    </div>
  );
}
