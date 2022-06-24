import "../../App.css";
import "./About.css";

export default function About(props) {
  return (
    <div className="section-container">
      <div className="section-content">
        <h2 className="section-sub-title">The Person and the Developer</h2>
        <h1 className="section-title">About Me</h1>
        <p className="section-desc section-about-desc">
          Hello! My name is Carlos and I enjoy creating things that solve problems and help people.
          My interest in development started back in 2013 when I decided to make a CS degree on the university, and it was <span className="accent-love">love💖</span> at first sight.
          <br /><br />
          Making things from scratch is a passion of mine, and being able to create fully function applications using just lines of code is magical, something that I think to this day (Even after I learned how to make a compiler and low code processing). 
          When I was just a beginner, I started coding games in Unity with C#. Coding games was a passion of mine, and a great way to learn coding patterns and good habits. 
          <br /><br />
          Since then, I've worked with a lot of different technologies, and I've learned a lot of things.
          I made and worked on a lot of projects, ranging from small games and single page sites to large applications with Cloud and Fog technologies, chatbots, blockchain smart contracts and Serious Games, and I'm proud of all my work.
          <br />
          If there's one thing that I can tell you about me, it's that <span className="accent-love">I'm Developer, and wow, I love it</span>!
        </p>
        <hr />
      </div>
    </div>
  );
}
