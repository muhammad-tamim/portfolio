import type { Metadata } from "next";
import "./globals.css";
import SmoothScrollProvider from "@/providers/SmoothScrollProvider";

export const metadata: Metadata = {
  title: "Muhammad Tamim",
  description: "Full Stack Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
