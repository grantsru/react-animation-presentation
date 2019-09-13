import React from "react";

import bg from "../public/img/bg.jpg";
import Sprites from "./sprites";

function Zelda() {
  return (
    <div
      style={{
        height: "55vw",
        width: "80vw",
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover"
      }}
    >
      <Sprites />
    </div>
  );
}

export default Zelda;
