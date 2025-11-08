import React from "react";
import Navbar from "../../components/Navbar";

export default function About() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />

      <header className="bg-[#fbecec] py-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <h1 className="text-3xl md:text-4xl font-bold text-red-600">About Us</h1>
            <p className="text-sm text-gray-700">
              From energy to mining, Mosra Energy’s footprint spans multiple states, driving exploration, innovation, and sustainable development across Nigeria’s resource sectors.
            </p>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-6">
          <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Who We Are</span>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mb-6">Empowering Industries to Solve Everyday Challenges</h2>
            <p className="text-gray-700 mb-6">
              Mosra Energy Limited Nigeria (MEL) is a well-established coal mining company with over 15 years experience in the industry. We are operating coal mines in Kogi and Delta States. In addition to our current operations, we have several other coal blocks under exploration in Nsukka/Udenu, Enugu State, Dekina LGA, Kogi State, and Ogbadibo LGA, Benue State.
            </p>

            <div className="flex items-center gap-4 mt-6">
              <img src="/public/file.svg" alt="CEO" className="w-12 h-12 rounded-full object-cover" />
              <div>
                <div className="font-semibold text-sm">Olukayode Ramos</div>
                <div className="text-xs text-gray-500">CEO, Mosra Energy Limited</div>
              </div>
            </div>
          </div>

          <div>
            <div className="overflow-hidden rounded-lg shadow">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F4fc66ae6bdd546dc978b24869a5c88d7%2F4a70b501b8dd41e39c1a504efe248ac9?format=webp&width=1200"
                alt="Mining operations"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        <section id="engineering" className="mt-12">
          <h3 className="text-2xl font-bold mb-4">Engineering Sustainable Growth</h3>
          <p className="text-gray-700 mb-4">
            Mosra Energy Limited holds exploration, quarry, and mining licences for coal (lignite and sub-bituminous), limestone, granite, and iron ore across Nigeria — with active projects in Delta, Kogi, Benue, Nasarawa, Kaduna, and Edo States. Proven reserves include 117.08 MT of lignite in Delta and 11.75 MT of sub-bituminous coal in Kogi, sufficient to generate power for over 50 years.
          </p>
        </section>

        <section id="csr" className="mt-10">
          <h3 className="text-2xl font-bold mb-4">Corporate Social Responsibility</h3>
          <p className="text-gray-700">
            At Mosra Energy Limited, we believe in building a vibrant and brighter future for all. Our commitment to sustainability extends beyond projects — it’s rooted in how we support and empower the communities we work with.
          </p>
        </section>
      </main>

      <footer className="bg-gray-50 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-6 text-center text-sm text-gray-600">© {new Date().getFullYear()} Mosra Energy Limited — All rights reserved</div>
      </footer>
    </div>
  );
}
