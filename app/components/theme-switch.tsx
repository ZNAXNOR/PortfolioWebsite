"use client";
import * as React from "react";
import Image from "next/image";
import { useCallback, useEffect, useState, ReactNode } from "react";

const storageKey = "theme-preference";

interface ThemeProviderProps {
  children: ReactNode;
  showIcon?: boolean; // Added showIcon prop
}

export const ThemeSwitch: React.FC<ThemeProviderProps> = ({ children, showIcon = true }) => {
  const [mounted, setMounted] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<"light" | "dark">("light");

  const reflectPreference = useCallback((newTheme: "light" | "dark") => {
    setCurrentTheme(newTheme);
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  useEffect(() => {
    setMounted(true);
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const storedTheme = localStorage.getItem(storageKey);
    const userPrefersDark = mediaQuery.matches;

    const initialTheme =
      storedTheme === "dark" || (!storedTheme && userPrefersDark)
        ? "dark"
        : "light";

    reflectPreference(initialTheme);

    const handleChange = () => {
      const newTheme = mediaQuery.matches ? "dark" : "light";
      localStorage.setItem(storageKey, newTheme);
      reflectPreference(newTheme);
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [reflectPreference]);

  const toggleTheme = () => {
    const newTheme = currentTheme === "light" ? "dark" : "light";
    localStorage.setItem(storageKey, newTheme);
    reflectPreference(newTheme);
  };

  if (!mounted) {
    return (
      <>
        {children}
        {showIcon && (
          <Image
            src={currentTheme === "dark" ? "../logo/dark-moon.svg" : "../logo/light-sun.svg"}
            alt={currentTheme === "dark" ? "Moon icon for dark mode" : "Sun icon for light mode"}
            height={20}
            width={20}
          />
        )}
      </>
    );
  }

  return (
    <>
      {children}
      {showIcon && (
        <button
          id="theme-toggle"
          aria-label={`${currentTheme} mode`}
          onClick={toggleTheme}
          className="flex items-center justify-center transition-opacity duration-300 hover:opacity-90"
        >
          <Image
            src={currentTheme === "dark" ? "../logo/dark-moon.svg" : "../logo/light-sun.svg"}
            alt={currentTheme === "dark" ? "Moon icon for dark mode" : "Sun icon for light mode"}
            height={20}
            width={20}
          />
        </button>
      )}
    </>
  );
};
