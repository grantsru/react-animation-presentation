import React, { useRef, useEffect, useState } from "react";
import ReactDOM from "react-dom";

import { TweenMax, Power3 } from "gsap";

import tabulaRasaWay from "../public/the-trhc-way.png";
import "./styles.css";
import Fundamental from "./fundamental";

function App() {
  const [active, setActive] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  let trhcLogo = useRef(null);

  useEffect(() => {
    TweenMax.to(trhcLogo, 1.5, {
      opacity: 1,
      y: 150,
      ease: Power3.easeOut
    });
  }, []);

  useEffect(() => {}, [active]);

  const fundamentals = [
    "Do the right thing, always",
    "Make quality personal",
    "Walk in your customers' shoes",
    "Work with a sense of urgency",
    "Get clear on expectations",
    "Speak straight",
    "Make the patient primary",
    "Focus on others",
    "Collaborate",
    "Practice transparency",
    "Listen generously",
    "Treasure, promote and protect our reptuation",
    "Follow-up everything",
    "Drive for innovation",
    "Celebrate success",
    "Think and act like an owner",
    "Be an fanatic about response time",
    "Deliver legendary service",
    "Think team first",
    "Honor commitments",
    "Embrace change",
    "Be relentless about improvement",
    "Take ownership",
    "Assume positive intent",
    "Go the extra mile",
    "Fix problems at the source",
    "Take pride in appearance",
    "Practice blameless problem solving",
    "Always remember that we're a family",
    "Deliver results",
    "'Bring it' every day",
    "Keep things fun"
  ];

  const proceed = e => {
    TweenMax.to(e.target, 1.5, {
      opacity: 0,
      y: 300,
      ease: Power3.easeOut
    });

    if (!active) setActive(true);
  };

  return (
    <div className="App">
      <img
        alt="The TRHC Way"
        ref={el => (trhcLogo = el)}
        src={tabulaRasaWay}
        style={{ opacity: 0 }}
        onClick={proceed}
      />
      {active && (
        <>
          {fundamentals.map(fundamental => (
            <Fundamental text={fundamental} onClick={proceed} />
          ))}
        </>
      )}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
