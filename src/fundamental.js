import React, { useRef, useEffect } from "react";
import { TweenMax, Power3 } from "gsap";

const Fundamental = ({ text, onClick }) => {
  let fundamental = useRef(null);

  useEffect(() => {
    TweenMax.to(fundamental, 1.5, {
      opacity: 1,
      y: 0,
      ease: Power3.easeOut
    });
  }, []);

  const proceed = e => {
    TweenMax.to(e.target, 1.5, {
      opacity: 0,
      y: 300,
      ease: Power3.easeOut
    });
  };

  return (
    <h1 ref={el => (fundamental = el)} onClick={proceed}>
      {text}
    </h1>
  );
};

export default Fundamental;
