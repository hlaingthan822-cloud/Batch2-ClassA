"use client";
import { ThemeProvider } from "@/context/ThemeContext";
import { ProductProvider } from "@/context/ProductContext";
import { AuthProvider } from "@/context/AuthContext";
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
