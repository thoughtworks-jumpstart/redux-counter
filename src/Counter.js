import React from "react";
import CounterDisplay from "./CounterDisplay";
import CounterIncrementButton from "./CounterIncrementButton";

function Counter() {
  return (
    <div>
      <CounterDisplay />
      <CounterIncrementButton />
    </div>
  );
}

export default Counter;
