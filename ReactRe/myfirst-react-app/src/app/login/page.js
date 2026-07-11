"use client";
import { useState, useContext } from "react";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/Context/AuthContext";
export default function LoginPage() {
  const [username, setUsername] = useState("");
  const { login } = useContext(AuthContext);
  const router = useRouter();
  const handleLogin = () => {
    login(username);
    router.push("/dashboard");
  };
  return (
    <div>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter Username"
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
