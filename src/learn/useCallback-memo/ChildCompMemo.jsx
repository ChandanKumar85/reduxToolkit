import React, { memo } from "react";

function ChildCompMemo({ multiply }) {
  console.log("Child Componenmt running...");
  return <div>Child Component</div>;
}

export default memo(ChildCompMemo);
