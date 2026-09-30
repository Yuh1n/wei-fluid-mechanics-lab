import type { Metadata } from "next";
import "./globals.css";
import { Footer, Header } from "./site-shell";

export const metadata: Metadata = {
  title: "Interfacial Flow and Intelligent Manufacturing Group",
  description: "The Xiaofeng Wei Research Group at Zhejiang Normal University.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body><Header /><main>{children}</main><Footer /></body>
    </html>
  );
}
