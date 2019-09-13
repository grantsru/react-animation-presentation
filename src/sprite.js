import React from "react";
import { Tween } from "react-gsap";

const Sprite = ({ to, size, from, duration, ease, name, src }) => {
  return (
    <Tween to={to} from={from} duration={duration} ease={ease}>
      <img
        alt={name}
        key={name}
        src={src}
        style={{
          opacity: 1,
          width: size || "5vw",
          padding: "15px",
          cursor: "pointer",
          position: "absolute"
        }}
      />
    </Tween>
  );
};

export default Sprite;
