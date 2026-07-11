import Link from "next/link";
export default function NavBar() {
  return (
    <nav style={{ background: "#1976d2", color: "white", padding: "12px" }}>
      <Link href="/" style={{ color: "white", marginRight: "20px" }}>
        Home
      </Link>
      <Link href="/about" style={{ color: "white", marginRight: "20px" }}>
        About
      </Link>
      <Link href="/profile" style={{ color: "white", marginRight: "20px" }}>
        Profile
      </Link>
    </nav>
  );
}
