import React, { useCallback, useState } from "react";
import ChildCompMemo from "./ChildCompMemo";

function UseCallBackComp() {
  const [count, setCount] = useState(0);
  const [add, setAddition] = useState(0);

  function increment() {
    setCount(count + 1);
  }
  function addition() {
    setAddition(add + 1);
  }

  const multiplication = useCallback(() => {}, [add]);

  return (
    <div>
      <ChildCompMemo multiply={multiplication} />
      <button onClick={increment}>Increment {count}</button>
      <button onClick={addition}>Addition {add}</button>
    </div>
  );
}

export default UseCallBackComp;
