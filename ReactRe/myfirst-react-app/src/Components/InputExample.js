import {useState} from "react";
export default function InputExample(){
  const[name,setName]=useState("Su Su");
  return(
   
      <div>
      <input
        type="text"
        value="name"
        placeholder="Enter your name."
        onChange={(e) => setName(e.target.value)}
      />
      <p>Hello,{name}</p>
    </div>
  );
}
/*import { useState } from "react";
export default function InputExample() {
  const [name, setName] = useState(0);
  return (
    <div>
      <input
        type="text"
        value="name" 
        placeholder="Enter your name"
        onChange={(e) => e.target.value}
      />
      <p>Hello,{name}</p>
    </div>
  );
}
*/