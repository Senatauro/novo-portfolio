import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import Introduction from "./components/Introduction/Introduction";

import { useState } from "react";
import FullPageSlider from "./components/FullPageSlider/FullPageSlider";

import "./App.css";

export default function SliderPage(props) {
  const [currentSection, setCurrentSection] = useState(1);

  return (
    <>
      <div className={`background + background-pos-${currentSection}`}></div>
      <div className="fixed-elements">
        <div className="top-nav">
          <nav className="nav-links">
            <a href="https://www.google.com" className="link selected">
              Home
            </a>
            <a href="https://www.google.com" className="link">
              About Me
            </a>
            <a href="https://www.google.com" className="link">
              Projects
            </a>
            <a href="https://www.google.com" className="link">
              Skills
            </a>
            <a href="https://www.google.com" className="link">
              Contact
            </a>
            <a href="https://www.google.com" className="link">
              My Resume
            </a>
          </nav>
        </div>
        <div className="bottom-nav">
          <div className="social-links">
            <a href="https://www.linkedin.com/in/senatauro/" target="_blank" rel="noreferrer" className="link">
              Linkedin
            </a>
            <a
              href="https://github.com/Senatauro"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              Github
            </a>
            <a
              href="mailto:cgsste@hotmail.com"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              Email
            </a>
          </div>
        </div>
      </div>
      <FullPageSlider
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
        tickTime={16}
        transitionTime={750}
      >
        <div className="fullpage-container">
          <section id="sec-1" className="one">
            <Introduction />
          </section>
          <section id="sec-2" className="two">
            <About />
          </section>
          <section id="sec-3" className="tree">
            <Projects />
          </section>
          <section id="sec-4" className="four">
            <Skills />
          </section>
          <section id="sec-5" className="five">
            <Contact />
          </section>
        </div>
      </FullPageSlider>
    </>
  );
}
