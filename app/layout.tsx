import type { Metadata } from "next";
import { Kumbh_Sans } from "next/font/google";

import "./globals.css";

import headerImg from "../public/assets/desktop/bg-pattern-header.svg";
import Header from "./components/Header/Header";

const kumbhSans = Kumbh_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dev Jobs App",
  description: "A Frontend Mentor challenge",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <body className={kumbhSans.className}> */}
      <body className="light bg-mainBackground">
        <Header />
        {children}
      </body>
    </html>
  );
}
