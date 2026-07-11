"use client";
import { useContext } from "react";
import { AuthContext } from "@/Context/AuthContext";
import { ThemeContext } from "@/Context/ThemeContext";
import { useRouter } from "next/navigation";
export default function DashboardPage() {
  const { user, logout } = useContext(AuthContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const router = useRouter();
  const handleLogout = () => {
    logout();
    router.push("/login");
  };
  if (!user) {
    router.push("/login");
    return null; //Prevent rendering the dashboard if not authenticated
  }
  return (
    <div>
      <h1>Welcome,{user.name}!</h1>
      <button onClick={handleLogout}>Logout</button>
      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"}Theme
      </button>
    </div>
  );
}
