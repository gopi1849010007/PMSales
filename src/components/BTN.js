import React from "react";

function clickHandler() {
  console.log("Mouse Over");
}
export default function BTN() {
  return (
    <div>
      <button onHover={clickHandler}>Click Me</button>
    </div>
  );
}
