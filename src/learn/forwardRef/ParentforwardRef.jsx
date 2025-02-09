import React, { useRef } from "react";
import UserforwardRef from "./UserforwardRef";

function ParentforwardRef() {
  const inputRef = useRef();
  function habdleInput() {
    inputRef.current.value = "100";
    inputRef.current.focus();
    inputRef.current.style.color = "red";
  }
  return (
    <div>
      <UserforwardRef inputRef={inputRef} />
      <button onClick={habdleInput}>Click to input update</button>
    </div>
  );
}

export default ParentforwardRef;
