"use client";
import { ThemeProvider } from "next-themes";
export default function provider({ children }) {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}
