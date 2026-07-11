export default function Card(props) {
  return (
    <div style={{ margin: "1rem", textAlign: "center", padding: "1%" }}>
      <p>{props.title}</p>
      <p>{props.description}</p>
    </div>
  );
}
