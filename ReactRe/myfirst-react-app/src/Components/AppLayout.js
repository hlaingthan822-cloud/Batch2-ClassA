"use client";
import { ThemeProvider } from "@/Context/ThemeContext";
import { ProductProvider } from "@/Context/ProductContext";
import { AuthProvider } from "@/Context/AuthContext";
export default function AppLayout({ children }) {
  return (
    <div>
      <AuthProvider>
        <ThemeProvider>
          <ProductProvider>{children}</ProductProvider>
        </ThemeProvider>
      </AuthProvider>
    </div>
  );
}
