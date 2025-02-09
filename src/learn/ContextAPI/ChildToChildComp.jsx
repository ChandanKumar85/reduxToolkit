import React, { useContext } from "react";
import ContextName from "./AppContext";

export default function ChildToChildComp() {
  const value = useContext(ContextName);

  return <div>Child to Child Component :: {value}</div>;
}
