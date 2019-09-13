import React from "react";

import Sprite from "./sprite";

import armos from "../public/img/armos.gif";
import trap from "../public/img/trap.png";
import rope from "../public/img/rope.gif";
import stopwatch from "../public/img/stopwatch.png";
import wizzrobe from "../public/img/wizzrobe.png";
import linkRight from "../public/img/link-right.gif";
import goriya from "../public/img/goriya.gif";
import boomerang from "../public/img/boomerang.png";

const ropeOptions = {
  name: "Rope",
  src: rope,
  ease: "Circ.easeIn",
  from: { x: "40vw" },
  to: { x: 0 }
};
const trapDownOptions = {
  name: "Link",
  src: trap,
  from: { y: 0 },
  to: { y: "11vw" }
};
const trapUpOptions = {
  name: "Trap",
  src: trap,
  from: { y: "28vw" },
  to: { y: "17.5vw" }
};
const linkOptions = {
  name: "Link",
  src: linkRight,
  from: { y: "14vw" },
  to: { x: "20vw" }
};
const stopwatchOptions = {
  name: "Stopwatch",
  src: stopwatch,
  size: "2vw",
  ease: "Back.easeIn",
  from: { x: "20vw", y: "15vw" },
  to: { x: "20vw", y: "15vw", opacity: 0 }
};
const wizzrobeOptions = {
  name: "Wizzrobe",
  src: wizzrobe,
  ease: "Bounce.easeOut",
  from: { x: "15vw", y: "25vw", opacity: 0 },
  to: { x: "15vw", opacity: 1 }
};
const goriyaOptions = {
  name: "Goriya",
  src: goriya,
  from: { x: "48vw", y: "8vw" },
  to: { x: "48vw" }
};
const boomerangOptions = {
  name: "Boomerang",
  src: boomerang,
  size: "1.5vw",
  from: { x: "48vw", y: "8vw" },
  to: { x: "26vw", y: "13vw", rotation: 1080 }
};
const armosOptions = {
  name: "Armos",
  src: armos,
  ease: "Power0.easeIn",
  from: { x: "54vw", y: "28.5vw" },
  to: { x: "54vw", y: "23.5vw" }
};

const Sprites = () => (
  <div style={{ padding: "9vw" }}>
    <Sprite {...trapDownOptions} />
    <Sprite {...trapUpOptions} />
    <Sprite {...ropeOptions} />
    <Sprite {...linkOptions} />
    <Sprite {...stopwatchOptions} />
    <Sprite {...wizzrobeOptions} />
    <Sprite {...goriyaOptions} />
    <Sprite {...boomerangOptions} />
    <Sprite {...armosOptions} />
  </div>
);

export default Sprites;
