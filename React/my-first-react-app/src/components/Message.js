import { useState } from "react";
export default function Message() {
  const name = "Maria";
  const [message, setMessage] = useState("Hello!");
  console.log("Message component render");

  return (
    <div>
      <h1>{message}</h1>
      <button onClick={() => setMessage("You clicked change message")}>
        Change Message
      </button>
    </div>
  );
}
