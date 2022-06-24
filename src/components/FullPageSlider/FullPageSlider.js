import { useState, useEffect, useRef } from "react";
import Navigation from "./navigation/Navigation";

export default function FullPageSlider(props) {
  const { currentSection, setCurrentSection } = props;
  const [isAutoScrolling, setIsAutoScrolling] = useState(false);
  const [isManualScrolling, setIsManualScrolling] = useState(false);
  const [pageY, setPageY] = useState(0);
  const didMount = useRef(false);

  /* To fullpage scrolling:
    1 - Add scroll listener on useEffect
    2 - Check the direction wanted to scroll
    3 - Block the scroll
    4 - Change the current section
    5 - Change the ref to the current section
    6 - unblock the scroll for the program  
    7 - scroll to the current section using a lerp function
  */
  // TO run only when the component mounts
  useEffect(() => {
    let actualScroll = 0;
    let lastScroll;
    let ticking = isAutoScrolling;
    window.addEventListener("scroll", handleScroll);

    function handleScroll(e) {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    }

    const updateScrollDir = () => {
      setIsManualScrolling(true);
      lastScroll = window.scrollY;
      setTimeout(() => {
        actualScroll = window.scrollY;
        console.log("last: " + lastScroll, "\nActual: " + actualScroll);
        let dir = lastScroll < actualScroll ? 1 : -1;
        lastScroll = actualScroll;
        console.log(dir);
        setPageY(window.scrollY);
        setCurrentSection((prevSection) => prevSection + dir);
        setIsManualScrolling(false);
      }, 100);
    };
    //*/
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isAutoScrolling, setCurrentSection]);

  // To run only when the pageY changes
  useEffect(() => {
    window.scrollTo({ top: pageY, behavior: "instant" });
    if (!isManualScrolling)
      window.onscroll = function () {
        window.scrollTo({ top: pageY, behavior: "instant" });
      };
    else {
      window.onscroll = null;
    }
  }, [pageY, isManualScrolling]);

  function lerp(v0, v1, t) {
    return (1 - t) * v0 + t * v1;
  }

  useEffect(() => {
    const MAX_RUNNING_TIME = props.transitionTime;
    const TICK_TIME = props.tickTime;
    let aux = window.scrollY;
    let runningTime = 101;
    let res;

    function smootherstep(edge0, edge1, x) {
      // Scale, and clamp x to 0..1 range
      x = clamp((x - edge0) / (edge1 - edge0), 0.0, 1.0);
      // Evaluate polynomial
      return x * x * x * (x * (x * 6 - 15) + 10);
    }
  
    function clamp(x, lowerlimit, upperlimit) {
      if (x < lowerlimit) x = lowerlimit;
      if (x > upperlimit) x = upperlimit;
      return x;
    }

    if (didMount.current === false) {
      didMount.current = true;
      return;
    }

    function RunLerp() {
      setIsAutoScrolling(true);
      setTimeout(() => {
        res = lerp(
          aux,
          document.getElementById("sec-" + currentSection).offsetTop,
          //runningTime/MAX_RUNNING_TIME
          smootherstep(0, MAX_RUNNING_TIME, runningTime)
        );
        runningTime += TICK_TIME;
        setPageY(res);
        if (runningTime > MAX_RUNNING_TIME) {
          setPageY(document.getElementById("sec-" + currentSection).offsetTop);
          runningTime = 0;
          setTimeout(() => setIsAutoScrolling(false), 150);
          return;
        }
        RunLerp();
      }, TICK_TIME);
    }

    RunLerp();
    console.log("Current Section: " + currentSection);
    //console.log("Lerp res: " + res,"\nCurrentSec: " + currentSection, "Heigh: " + document.getElementById("sec-" + currentSection).offsetTop);
  }, [currentSection, props.tickTime, props.transitionTime]);

  return (
    <div className="fullpage-container">
      <Navigation currentSection={currentSection} />
      {props.children}
    </div>
  );
}
