"use client";
import { useTheme } from "next-themes";
import { HiMoon } from "react-icons/hi";
import { BiSolidSun } from "react-icons/bi";
import { CiNoWaitingSign } from "react-icons/ci";
import { useState, useEffect } from "react";

export default function ThemeButton() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return (
      <>
        <div className="text-black">
          {" "}
          <CiNoWaitingSign />
        </div>
      </>
    );
  }
  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="text-slate-950"
    >
      {resolvedTheme === "dark" ? <BiSolidSun /> : <HiMoon />}
    </button>
  );
}
