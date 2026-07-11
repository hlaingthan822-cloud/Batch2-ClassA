import { useState } from "react";
export default function ToggleMessage() {
  const [show, setShow] = useState(true);
  return (
    <div>
        <button onClick={()=>setShow(!show)}>
            {show?"Hide":"Show"}message
        </button>
        {show?<p>"This message is a secret"</p>:null}
    </div>
  );
}
