import React from "react";
import ContextName from "./AppContext";
import ChildComp from "./ChildComp";

function ContextApiComp() {
  return (
    <ContextName.Provider value={"Chandan Kumar Singh"}>
      <ChildComp />
    </ContextName.Provider>
  );
}

export default ContextApiComp;
