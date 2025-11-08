import React from "react";

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-50 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-4">
            <div className="logo-group">
              <div className="logo-name text-sm font-semibold uppercase tracking-wide">
                <span className="mr-1">MOSRA</span>
                <span className="text-red-600">ENERGY</span>
                <span className="ml-1 text-gray-600">LIMITED</span>
              </div>
              <div className="logo-tagline text-xs text-gray-500">Developer Of Nigeria's Mineral Resources</div>
            </div>
          </div>

          <nav className="hidden md:flex items-center">
            <div className="nav-pill bg-gray-100 rounded-full px-4 py-2 flex items-center gap-6 shadow-sm">
              <a href="/" className="nav-link text-sm text-gray-600 hover:text-red-600">Home</a>
              <a href="/about" className="nav-link text-sm text-gray-600 hover:text-red-600 bg-white rounded-full px-3 py-1">About Us</a>
              <a href="/our-business" className="nav-link text-sm text-gray-600 hover:text-red-600">Our Business</a>
              <a href="/project" className="nav-link text-sm text-gray-600 hover:text-red-600">Project</a>
              <a href="/portfolio" className="nav-link text-sm text-gray-600 hover:text-red-600">Portfolio</a>
              <a href="/blog" className="nav-link text-sm text-gray-600 hover:text-red-600">Blog</a>
              <a href="/career" className="nav-link text-sm text-gray-600 hover:text-red-600">Career</a>
            </div>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a href="/projects" className="view-projects btn-outline text-sm px-4 py-2 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-50">View Projects</a>
            <a href="/contact" className="contact-btn text-sm px-4 py-2 rounded-full bg-red-600 text-white hover:bg-red-700">Contact Us</a>
          </div>

          <div className="md:hidden">
            <details className="relative">
              <summary className="px-3 py-2 rounded-full border text-sm cursor-pointer">Menu</summary>
              <div className="mt-2 w-48 flex flex-col bg-white border border-gray-100 rounded shadow-sm p-2">
                <a href="/" className="px-3 py-2 text-sm hover:bg-gray-100 rounded">Home</a>
                <a href="/about" className="px-3 py-2 text-sm hover:bg-gray-100 rounded">About Us</a>
                <a href="/our-business" className="px-3 py-2 text-sm hover:bg-gray-100 rounded">Our Business</a>
                <a href="/project" className="px-3 py-2 text-sm hover:bg-gray-100 rounded">Project</a>
                <a href="/portfolio" className="px-3 py-2 text-sm hover:bg-gray-100 rounded">Portfolio</a>
                <a href="/blog" className="px-3 py-2 text-sm hover:bg-gray-100 rounded">Blog</a>
                <a href="/career" className="px-3 py-2 text-sm hover:bg-gray-100 rounded">Career</a>
                <div className="mt-2 border-t pt-2">
                  <a href="/projects" className="block px-3 py-2 text-sm hover:bg-gray-100 rounded">View Projects</a>
                  <a href="/contact" className="block mt-2 px-3 py-2 text-sm bg-red-600 text-white rounded">Contact Us</a>
                </div>
              </div>
            </details>
          </div>
        </div>
      </div>
    </header>
  );
}
