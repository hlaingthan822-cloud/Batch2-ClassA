import { useState } from "react";
export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter App</h1>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Increament</button>
      <button
        onClick={() => {
          if (count > 0) {
            console.log("Subtract 1 from count", count);
            setCount(count - 1);
          }
        }}
      >
        Decrement
      </button>
    </div>
  );
}
