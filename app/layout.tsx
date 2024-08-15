import React, { ReactNode } from "react";

import Navbar from "./components/Navbar";
import './globals.css'
import Footer from "./components/Footer";

export const metadata = {
  title: "Cook",
  description: "Kitchen cook",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
