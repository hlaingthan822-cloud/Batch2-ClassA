import { useState } from "react";
export default function Message() {
  const [message, setMessage] = useState("Maria");
  return (
    <div>
      <button onClick={() => setMessage("You clicked the buttom")}>
        Change Message
      </button>
      <p>{message}</p>
    </div>
  );
}
