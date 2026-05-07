"use client"; 

export default function Alert(props) {
  const showAlert = () => {
    alert("Hello, your name is  " + props.name+"and your age is   "+props.age);
  };

  return (
    <div>
      <h1>Hello, {props.name}, my age is {props.age}</h1>
      <button onClick={showAlert}>Click Me!</button>
    </div>
  );
}