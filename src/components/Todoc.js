import React, { useState } from "react";

function Todoc(props) {
  const [done, setDone] = useState(false);
  function DoneLine() {
    setDone((prevValue) => {
      return !prevValue;
    });
  }
  return (
    <div onClick={DoneLine}>
      <li style={{ textDecoration: done ? "line-through" : "none" }}>
        {props.text}
      </li>
    </div>
  );
}

export default Todoc;
