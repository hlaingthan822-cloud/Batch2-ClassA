export default function Footer({ children }) {
  return (
    <footer
      style={{
        background: "#222",
        color: "white",
        padding: "1rem",
        textAlign: "center",
      }}
    >
      {children}
    </footer>
  );
}
