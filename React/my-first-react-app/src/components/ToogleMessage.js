import { useState } from "react";
export default function ToogleMessage() {
  const [show, setShow] = useState(true);
  console.log("show", show);
  return (
    <div>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"} Message
      </button>
      {show ? <p>This is a secret message.</p> : null}
    </div>
  );
}
