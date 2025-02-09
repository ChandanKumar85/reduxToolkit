import React, { useReducer } from "react";

function UseReducer() {
  const [state, dispatch] = useReducer(reduce, 0);
  function reduce(state, action) {
    if (action.type === "increment") {
      return state + action.payload;
    }
    if (action.type === "decrement") {
      return state - action.payload;
    }
  }
  return (
    <div>
      <h1>{state}</h1>
      <button onClick={() => dispatch({ type: "increment", payload: 1 })}>
        increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 2 })}>
        decrement
      </button>
    </div>
  );
}

export default UseReducer;
