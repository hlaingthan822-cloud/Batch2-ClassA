import { useState } from "react";
export default function Counter() {
  const [count, setCount] = useState(0);
  /*return (
    <div style={{ background: "red", color: "white", textAlign: "center" }}>
      <h1>Counter App</h1>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button
        onClick={() => {
          if (count > 0) {
            console.log("Substract form count to 1", count);
            setCount(count - 1);
          }
        }}
      >
        Decrement
      </button>
    </div>
  );
}*/
return(
  <div>
    <h2>{count}</h2>
  <button onClick={()=>setCount(count+1)}>Increament</button>
  <button onClick={()=>{
    if(count>0){
      setCount(count-1);
    }
  }}>Decrement</button>
  </div>
);
}
