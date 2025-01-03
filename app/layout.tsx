import "./globals.css";
import { Poppins } from "next/font/google";

const inter = Poppins({ subsets: ["latin"], weight: ["400", "500"] });

export const metadata = {
    title: "Code Playground",
    description:
        "Games made using Javascript, Landing pages and websites from various hackathons.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <link
                    rel="icon"
                    href="https://img.icons8.com/plasticine/100/joy-con.png"
                />
            </head>
            <body className={inter.className}>{children}</body>
        </html>
    );
}
