import type { Metadata } from "next";
import "./globals.css";
import './fanta.css';
import Head from "./head";
import AuthProvider from "@/context/authContext";

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
      <AuthProvider>
        <body>
          <div id='app'>{children}</div>
          <div id='portal'></div>
        </body>
      </AuthProvider>
    </html>
  );
}
