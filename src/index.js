import React, { useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import { TweenMax, Power3 } from "gsap";

import octorok from "../public/octorok.gif";
import armos from "../public/armos.gif";
import moblin from "../public/moblin.gif";
import "./styles.css";

function App() {
  const octorokRef = useRef(null);
  const armosRef = useRef(null);
  const moblinRef = useRef(null);

  const enemies = [
    {
      src: octorok,
      name: "octorok",
      ref: octorokRef
    },
    {
      src: armos,
      name: "armos",
      ref: armosRef
    },
    {
      src: moblin,
      name: "moblin",
      ref: moblinRef
    }
  ];

  useEffect(() => {}, []);

  const proceed = enemy => {
    TweenMax.to(enemy, 1.5, {
      opacity: 1,
      x: Math.floor(Math.random() * 150) + 1,
      y: Math.floor(Math.random() * 150) + 1,
      rotation: Math.floor(Math.random() * 360),
      ease: Power3.easeOut
    });
  };

  return (
    <div className="App">
      {enemies.map(enemy => {
        return (
          <img
            ref={enemy.ref}
            alt={enemy.name}
            src={enemy.src}
            key={enemy.name}
            style={{
              opacity: 1,
              width: "30px",
              padding: "5px",
              cursor: "pointer"
            }}
            onClick={() => proceed(enemy.ref)}
          />
        );
      })}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
