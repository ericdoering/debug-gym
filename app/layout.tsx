import type { Metadata } from "next";
import "./globals.css";
import './fanta.css';
import Head from "./head";

export const metadata: Metadata = {
  title: "Debug Gym",
  description: "Code debugging training app.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head />
      <body>
        <div id='app'>{children}</div>
        <div id='portal'></div>
      </body>
    </html>
  );
}
