import "src/styles/globals.css";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { Navbar } from "src/components/layout/navbar";

export const metadata: Metadata = {
  title: "Albia Cleaning Services LLC",
  description: "Professional residential and commercial cleaning services",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <body className="px-5">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
