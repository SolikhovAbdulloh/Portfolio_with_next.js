import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SolikhovFrontEnd",
  description: "Solikhov",
  generator: "v0.dev",
  icons: {
    icon: "/futsal.jpg",
  },
  openGraph: {
    title: "SolikhovFrontEnd",
    description: "Solikhov",
    url: "https://portfolio-with-next-js-rho.vercel.app/",
    siteName: "SolikhovFrontEnd",
    images: [
      {
        url: "/futsal.jpg",
        width: 800,
        height: 600,
        alt: "Solikhov image",
      },
    ],
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
