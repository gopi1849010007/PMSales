import React, { useState } from "react";

export default function Header() {
  const [ivalue, setvalue] = useState("");
  console.log(useState(""));
  function handleChange(e) {
    console.log(e);
    setvalue(e.target.value);
  }
  function handleClick() {
    setvalue("Siddharth");
  }
  return (
    <div>
      <input value={ivalue} onChange={handleChange} />
      <button onClick={handleClick}>Reset</button>
      <p>
        <strong>{ivalue}</strong>
      </p>
    </div>
  );
}
