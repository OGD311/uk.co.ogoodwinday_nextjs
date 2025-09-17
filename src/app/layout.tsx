import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OGD",
  description: "Oliver Goodwin-Day's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
