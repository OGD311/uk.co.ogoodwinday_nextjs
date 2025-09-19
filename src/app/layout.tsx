import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OGD",
  description: "Oliver Goodwin-Day's Portfolio",
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    other: [
      { rel: 'icon', url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png'},
      { rel: 'icon', url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png'},
      {rel: "manifest", url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png"},
      {rel: "manifest", url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png"},
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
      <body>
        {children}
      </body>
    </html>
  );
}
