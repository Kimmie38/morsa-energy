import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <Link href="/about" className="px-6 py-3 rounded-full bg-red-600 text-white text-lg shadow">About</Link>
    </div>
  );
}
