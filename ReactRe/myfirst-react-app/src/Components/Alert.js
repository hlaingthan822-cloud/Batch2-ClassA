export default function Alert(props) {
  const showAlert = () => {
    alert("My name is " + props.name + " and my age is " + props.age);
  };
  return <button onClick={showAlert}>Click Me</button>;
}
