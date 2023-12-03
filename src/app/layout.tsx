import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="rtl">
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
