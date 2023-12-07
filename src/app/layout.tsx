import "./globals.css";
import { Figtree } from "next/font/google";
import localFont from "next/font/local";
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
      className={`${figTree.variable} ${vazirFont.variable}`}
    >
      <body className="flex flex-col min-h-screen font-bold uppercase">
        <header className="bg-gray-400 flex justify-center items-center">
          Header
        </header>
        <div className="flex flex-1">{children}</div>

        <footer className="bg-gray-400 flex justify-center items-center">
          Footer
        </footer>
      </body>
    </html>
  );
}
