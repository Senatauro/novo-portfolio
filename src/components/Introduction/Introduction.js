import "../../App.css";

export default function Introduction(props) {
  return (
    <div className="section-container">
      <div className="section-content">
        <h2 className="section-sub-title">Welcome</h2>
        <h1 className="section-title">
          <span className="im">I'm</span> <span className="name">Carlos Stedile</span>
        </h1>
        <h2 className="section-sub-title">Full Stack Developer</h2>
        <a href="https://www.google.com.br" className="link"><br/>See my resume</a>
        <hr />
      </div>
    </div>
  );
}
