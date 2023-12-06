import "./globals.css";
import { Figtree } from "next/font/google";

const figTree = Figtree({
  display: "swap",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-figtree",
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="rtl" className={`${figTree.variable}`}>
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
