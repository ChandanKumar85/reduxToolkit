import React from "react";
import StateLftChild from "./StateLftChild";

function StateLiftingParent() {
  function getData(val55) {
    console.log(val55);
  }
  return (
    <div>
      <h2>Top Parent Component</h2>
      <StateLftChild getData={getData} />
    </div>
  );
}

export default StateLiftingParent;
