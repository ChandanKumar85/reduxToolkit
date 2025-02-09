import React, { useState } from "react";
import LiftingChildComp from "./LiftingChildComp";
import ChildCompData from "./ChildCompData";

function LiftingState() {
  const [data, setData] = useState("");
  return (
    <>
      <h1>Parent Component</h1>
      <LiftingChildComp setData={setData} />
      <ChildCompData data={data} />
    </>
  );
}

export default LiftingState;
