import React from "react";
import { useSpring, animated } from "react-spring";

import zelda from "../public/img/zelda.png";

const Intro = () => {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 }
  });
  return (
    <div
      style={{
        position: "relative",
        backgroundColor: "black",
        width: "100%",
        height: "100%"
      }}
    >
      <animated.img
        alt={"Intro"}
        src={zelda}
        style={{ display: "block", margin: "auto", ...props }}
      />
    </div>
  );
};

export default Intro;
