import React from "react";
import ReactDOM from "react-dom";

import bg from "../public/img/bg.jpg";
import Sprites from "./sprites";

function App() {
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

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
