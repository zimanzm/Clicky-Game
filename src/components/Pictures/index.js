import React from "react";
import "./style.css";

function Pictures(props) {
  return (
   
    <div
      role="img"
      aria-label="pictures in public"
      onClick={() => props.handleClick(props.id)}
      style={{ backgroundImage: `url("${props.image}")` }}
      className={`pictures-in-public${props.shake ? " shake" : ""}`}
    />
  );
}

export default Pictures;
