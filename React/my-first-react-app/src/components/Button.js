export default function Button(props) {
  return (
    <button
      style={{ padding: "1rem", fontSize: "10px" }}
      onClick={props.onClick}
      //ON-{()=>props.onClick()}
    >
      Save
    </button>
  );
}
