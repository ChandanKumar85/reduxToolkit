import React from "react";

function StateLftChild(props) {
  function handleData() {
    props.getData("Hi....");
  }
  return (
    <div>
      <h2>State Lift Child Component </h2>
      <button onClick={handleData}>Send Data to parent</button>
    </div>
  );
}

export default StateLftChild;
