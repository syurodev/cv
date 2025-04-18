import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import React from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            // Add print event listeners
            window.addEventListener('beforeprint', function() {
              document.body.classList.add('is-printing');
            });
            window.addEventListener('afterprint', function() {
              document.body.classList.remove('is-printing');
            });
          `,
          }}
        />
      </head>
      <body>{children}</body>
      <Analytics />
    </html>
  );
}
