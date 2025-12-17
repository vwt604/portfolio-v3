"use-client";

import { FaMoon } from "react-icons/fa";
import { MdWbSunny } from "react-icons/md";
import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {theme === "light" ? <FaMoon /> : <MdWbSunny />}
    </button>
  );
}
