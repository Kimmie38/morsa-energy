import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="flex items-center gap-4">
        <Link href="/about" className="px-6 py-3 rounded-full bg-red-600 text-white text-lg shadow">About</Link>
        <Link href="/mining" className="px-6 py-3 rounded-full bg-red-600 text-white text-lg shadow">Mining</Link>
      </div>
    </div>
  );
}
