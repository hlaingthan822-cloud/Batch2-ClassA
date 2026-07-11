export default function Button(props) {
  return (
    <button
      style={{ padding: "1rem", textAlign: "center" }}
      onClick={props.onClick}
    >
      Save
    </button>
  );
}
