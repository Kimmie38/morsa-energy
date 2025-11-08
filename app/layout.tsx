import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mosra Energy",
  description: "Mosra Energy website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header className="sticky top-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
          <div className="max-w-7xl mx-auto px-6">
            <nav className="flex items-center justify-between h-16">
              <div className="flex items-center gap-6">
                <a href="/" className="flex items-center gap-3">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F4fc66ae6bdd546dc978b24869a5c88d7%2Fa07e52bdaf8c4f09b4920b86ff593dc3?format=webp&width=800"
                    alt="Mosra Energy"
                    className="h-8 w-auto"
                  />
                </a>
              </div>

              <div className="hidden md:flex items-center gap-6">
                <a href="/" className="text-sm text-gray-700 dark:text-gray-200 hover:text-red-600">Home</a>
                <a href="/about" className="text-sm text-gray-700 dark:text-gray-200 hover:text-red-600">About Us</a>
                <a href="/our-business" className="text-sm text-gray-700 dark:text-gray-200 hover:text-red-600">Our Business</a>
                <a href="/project" className="text-sm text-gray-700 dark:text-gray-200 hover:text-red-600">Project</a>
                <a href="/portfolio" className="text-sm text-gray-700 dark:text-gray-200 hover:text-red-600">Portfolio</a>
                <a href="/blog" className="text-sm text-gray-700 dark:text-gray-200 hover:text-red-600">Blog</a>
                <a href="/career" className="text-sm text-gray-700 dark:text-gray-200 hover:text-red-600">Career</a>
              </div>

              <div className="hidden md:flex items-center gap-4">
                <a href="/projects" className="px-4 py-2 rounded-full border border-gray-300 text-sm text-gray-700 hover:bg-gray-50">View Projects</a>
                <a href="/contact" className="px-4 py-2 rounded-full bg-red-600 text-sm text-white hover:bg-red-700">Contact Us</a>
              </div>

              <div className="md:hidden">
                <details className="relative">
                  <summary className="px-3 py-2 rounded-full border text-sm cursor-pointer">Menu</summary>
                  <div className="mt-2 flex flex-col bg-white dark:bg-black border border-gray-100 dark:border-gray-800 rounded shadow-sm p-2">
                    <a href="/" className="px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 rounded">Home</a>
                    <a href="/about" className="px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 rounded">About Us</a>
                    <a href="/our-business" className="px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 rounded">Our Business</a>
                    <a href="/project" className="px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 rounded">Project</a>
                    <a href="/portfolio" className="px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 rounded">Portfolio</a>
                    <a href="/blog" className="px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 rounded">Blog</a>
                    <a href="/career" className="px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 rounded">Career</a>
                    <div className="mt-2 border-t pt-2">
                      <a href="/projects" className="block px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 rounded">View Projects</a>
                      <a href="/contact" className="block mt-2 px-3 py-2 text-sm bg-red-600 text-white rounded">Contact Us</a>
                    </div>
                  </div>
                </details>
              </div>
            </nav>
          </div>
        </header>

        <main className="pt-6">{children}</main>
      </body>
    </html>
  );
}
