import React, { useMemo, useState } from "react";

export default function UseMemoComp() {
  const [count, setCount] = useState(0);
  const [add, setAddition] = useState(0);

  function indrement() {
    setCount(count + 1);
  }
  function addition() {
    setAddition(add + 1);
  }
  const multiply = useMemo(() => {
    console.log("multiply fun running...");
    return count * 10;
  }, [count]);
  return (
    <div>
      {multiply}
      <br />
      <button onClick={indrement}>Increment {count}</button>
      <button onClick={addition}>Addition {add}</button>
    </div>
  );
}
