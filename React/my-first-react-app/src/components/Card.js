export default function Card(props) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "1rem",
        borderRadius: "8px",
        marginBottom: "1rem",
      }}
    >
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
}
