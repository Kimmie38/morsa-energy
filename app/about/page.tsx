import Image from "next/image";
import React from "react";

export default function AboutPage() {
  return (
    <div className="bg-white text-gray-900">
      {/* Hero banner */}
      <section className="bg-[#f9ecec] py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <h1 className="text-3xl md:text-4xl font-bold text-red-600">About Us</h1>
            <p className="text-sm text-gray-700">
              From energy to mining, Mosra Energy’s footprint spans multiple
              states, driving exploration, innovation, and sustainable
              development across Nigeria’s resource sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-6">
          <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Who We Are</span>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mb-6">Empowering Industries to Solve Everyday Challenges</h2>
            <p className="text-gray-700 mb-6">
              Mosra Energy Limited Nigeria (MEL) is a well-established coal
              mining company with over 15 years experience in the industry. We
              are operating coal mines in Kogi and Delta States. In addition to
              our current operations, we have several other coal blocks under
              exploration in Nsukka/Udenu, Enugu State, Dekina LGA, Kogi State,
              and Ogbadibo LGA, Benue State.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <Image src="/images/Ramos.png" alt="Olukayode Ramos" width={56} height={56} className="rounded-full object-cover" />
              <div>
                <div className="font-semibold">Olukayode Ramos</div>
                <div className="text-sm text-gray-500">CEO, Mosra Energy Limited</div>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl shadow">
            <Image src="/images/Abt-image1.png" alt="Mining operations" width={900} height={580} className="w-full h-full object-cover rounded-2xl" />
          </div>
        </section>
      </main>

      <footer className="bg-gray-50 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-6 text-center text-sm text-gray-600">© {new Date().getFullYear()} Mosra Energy Limited — All rights reserved</div>
      </footer>
    </div>
  );
}
