import React from "react";

export default function Hello(props) {
  console.log(props);
  return (
    <div>
      <h1>
        Hello {props.name} wao! you are an {props.job}
      </h1>
    </div>
  );
}
