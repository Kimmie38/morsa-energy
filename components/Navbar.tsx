import React from "react";

export default function Navbar() {
  return (
    <header className="w-full bg-white border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3">
          <div className="text-lg font-bold">
            <span className="mr-1">MOSRA</span>
            <span className="text-red-600">ENERGY</span>
            <span className="ml-1 text-gray-600">LIMITED</span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          <a href="/" className="text-sm text-gray-600 hover:text-red-600">Home</a>
          <a href="/about" className="text-sm text-gray-600 hover:text-red-600">About Us</a>
          <a href="/our-business" className="text-sm text-gray-600 hover:text-red-600">Our Business</a>
          <a href="/project" className="text-sm text-gray-600 hover:text-red-600">Project</a>
          <a href="/portfolio" className="text-sm text-gray-600 hover:text-red-600">Portfolio</a>
          <a href="/blog" className="text-sm text-gray-600 hover:text-red-600">Blog</a>
          <a href="/career" className="text-sm text-gray-600 hover:text-red-600">Career</a>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="/projects" className="px-4 py-2 rounded-full border border-gray-300 text-sm text-gray-700 hover:bg-gray-50">View Projects</a>
          <a href="/contact" className="px-4 py-2 rounded-full bg-red-600 text-sm text-white hover:bg-red-700">Contact Us</a>
        </div>

        <div className="md:hidden">
          <details>
            <summary className="px-3 py-2 border rounded-full">Menu</summary>
            <div className="mt-2 w-48 bg-white border rounded shadow p-2 flex flex-col">
              <a href="/" className="px-3 py-2 rounded hover:bg-gray-100">Home</a>
              <a href="/about" className="px-3 py-2 rounded hover:bg-gray-100">About Us</a>
              <a href="/our-business" className="px-3 py-2 rounded hover:bg-gray-100">Our Business</a>
              <a href="/project" className="px-3 py-2 rounded hover:bg-gray-100">Project</a>
              <a href="/portfolio" className="px-3 py-2 rounded hover:bg-gray-100">Portfolio</a>
              <a href="/blog" className="px-3 py-2 rounded hover:bg-gray-100">Blog</a>
              <a href="/career" className="px-3 py-2 rounded hover:bg-gray-100">Career</a>
              <div className="border-t mt-2 pt-2">
                <a href="/projects" className="block px-3 py-2 rounded hover:bg-gray-100">View Projects</a>
                <a href="/contact" className="block mt-2 px-3 py-2 rounded bg-red-600 text-white">Contact Us</a>
              </div>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
