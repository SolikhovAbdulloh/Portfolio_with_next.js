import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SolikhovFrontEnd",
  description: "Solikhov",
  generator: "v0.dev",
  icons: {
    icon: "/futsal.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
