import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  reset,
} from "./features/counter/counterSlice";
import { useState } from "react";

export default function AppRedux() {
  const [amount, setAmount] = useState(0);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  function handleIncrementButton() {
    dispatch(increment());
  }
  function handleDecrementButton() {
    dispatch(decrement());
  }
  function handleResetButton() {
    dispatch(reset());
  }
  function handleAmountButton() {
    dispatch(incrementByAmount(amount));
  }
  return (
    <div className="counterUI">
      <button onClick={handleIncrementButton}>+</button>
      <h1>Count : {count}</h1>
      <button onClick={handleDecrementButton}>-</button>
      <button onClick={handleResetButton}>Reset</button>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handleAmountButton}>Increment by amount</button>
    </div>
  );
}
