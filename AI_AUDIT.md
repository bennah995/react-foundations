Did not use ai for day 1

DAY 2
AI PROMPT
Add a step input that lets me set how much each click increments by. Here is my working counter import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(0)}>reset</button>
      {/* <button onClick={() => {
        setCount(count +1);
        setCount(count +1);
      }}>+2</button> */}
      <button onClick={() => {
        setCount((c) => c +1);
        setCount((c) => c +1);
      }}>+2</button>
    </div>
  );
}

export default Counter;. Only change what is necessary.

AI's version
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  return (
    <div>
      <h2>Count: {count}</h2>

      <input
        type="number"
        value={step}
        onChange={(e) => setStep(Number(e.target.value))}
      />

      <button onClick={() => setCount(count + step)}>+</button>
      <button onClick={() => setCount(count - step)}>-</button>
      <button onClick={() => setCount(0)}>reset</button>

      {/* <button onClick={() => {
        setCount(count + 1);
        setCount(count + 1);
      }}>+2</button> */}

      <button
        onClick={() => {
          setCount((c) => c + step);
          setCount((c) => c + step);
        }}
      >
        +2
      </button>
    </div>
  );
}

export default Counter;

WHAT I KEPT
The step state and the number input