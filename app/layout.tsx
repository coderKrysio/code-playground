import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "JS Games",
  description: "Games made using Javascript",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="https://img.icons8.com/plasticine/100/joy-con.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
