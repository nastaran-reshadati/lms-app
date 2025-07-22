/** @format */

import "./globals.css";
import { Figtree } from "next/font/google";
import localFont from "next/font/local";
import Header from "./_components/header/header";
import Footer from "./_components/footer/footer";
import { QueryClientProvider } from "react-query";
import QueryProvider from "@/providers/react-query-provider";
const figTree = Figtree({
  display: "swap",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-figtree",
});
const vazirFont = localFont({
  src: [
    {
      path: "../../public/fonts/vazir/Vazir.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/vazir/Vazir.woff",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/vazir/Vazir.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/vazir/Vazir.eot",
      weight: "100",
      style: "normal",
    },
  ],
  variable: "--font-vazir",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      // lang="fa"
      dir="rtl"
      className={`dark ${figTree.variable} ${vazirFont.variable}`}
    >
      <QueryProvider>
        <body className="min-h-screen grid grid-rows-[80px_1fr_auto] dark dark:bg-base-100 dark:text-base-content">
          <Header />
          {children}

          <Footer />
        </body>
      </QueryProvider>
    </html>
  );
}
