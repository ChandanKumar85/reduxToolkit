import React from "react";

function LiftingChildComp({ setData }) {
  return (
    <>
      <h2>Child Component</h2>
      <button onClick={() => setData("Hello I am from Child Comp")}>
        Click me send data to parent
      </button>
    </>
  );
}

export default LiftingChildComp;
