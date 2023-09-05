import React from "react";

export default function BTN() {
  function clickHandler() {
    toggleMode = !toggleMode;
    if (toggleMode) {
      console.log("Light Mode is on");
    } else {
      console.log("Dark Mode");
    }
  }
  var toggleMode = true;
  const lightMode = <h1>Light Mode is on</h1>;
  const darkMode = <h1>Dark Mode</h1>;
  return (
    <div>
      <button onClick={clickHandler}>Click Me</button>
      <p>{toggleMode ? lightMode : darkMode}</p>
    </div>
  );
}
