import React, { useState } from "react";
import { animated, useTrail } from "react-spring";

export default function() {
  const [drugs] = useState(["Tylenol", "Advil", "Robitussin", "B12"]);

  const trail = useTrail(drugs.length, {
    from: { opacity: 0, transform: "translate3d(0,-40px,0)" },
    to: { opacity: 1, transform: "translate3d(0,0px,0)" }
  });

  return (
    <>
      <h1>Drugs</h1>
      {trail.map((props, index) => {
        return (
          <animated.div
            key={drugs[index]}
            style={{
              backgroundColor: "lightgrey",
              height: 50,
              width: 100,
              ...props
            }}
          >
            {drugs[index]}
          </animated.div>
        );
      })}
    </>
  );
}
