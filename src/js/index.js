import React from "react";
import ReactDOM from "react-dom";

// Include your styles into the webpack bundle
import "../styles/index.css";

// Import your own components
import SecondsCounter from "./component/SecondsCounter.jsx";
let i = 0;
setInterval(() => {
  const six = Math.floor(i / 100000);
  const five = Math.floor(i / 10000);
  const four = Math.floor(i / 1000);
  const three = Math.floor(i / 100);
  const two = Math.floor(i / 10);
  const one = Math.floor(i / 1);
  i++;

  ReactDOM.render(<SecondsCounter Digit_1={one} Digit_2={two} Digit_3={three} Digit_4={four} Digit_5={five} Digit_6={six}/>, document.querySelector("#app")
  );
}, 1000);
