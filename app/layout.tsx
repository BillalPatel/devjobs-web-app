"use client";

import React, { useState, createContext } from "react";
import { Kumbh_Sans } from "next/font/google";

import "./globals.css";

import headerImg from "../public/assets/desktop/bg-pattern-header.svg";
import Header from "./components/Header/Header";

const kumbhSans = Kumbh_Sans({ subsets: ["latin"] });

// @ts-ignore
export const ThemeContext = createContext();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }

  return (
    <html lang="en">
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <body className={`${kumbhSans.className} bg-mainBackground ${theme}`}>
          <Header />
          {children}
        </body>
      </ThemeContext.Provider>
    </html>
  );
}
