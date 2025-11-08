"use client";
import React from "react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-black dark:text-white">
      <header className="sticky top-0 z-40 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-4">
            <a href="#top" className="text-lg font-semibold">Mosra Energy</a>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <a href="#about" className="text-sm font-medium hover:underline">About</a>
            <a href="#engineering" className="text-sm font-medium hover:underline">Engineering</a>
            <a href="#csr" className="text-sm font-medium hover:underline">CSR</a>
          </div>
          <div className="md:hidden">
            <select
              onChange={(e) => {
                const v = e.target.value;
                if (v) location.href = v;
              }}
              className="rounded border px-2 py-1 text-sm"
              aria-label="Navigate sections"
            >
              <option value="#">Menu</option>
              <option value="#about">About</option>
              <option value="#engineering">Engineering</option>
              <option value="#csr">CSR</option>
            </select>
          </div>
        </nav>
      </header>

      <main id="top" className="max-w-6xl mx-auto px-6 py-12">
        {/* Hero */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4">
              Empowering Industries to Solve Everyday Challenges
            </h1>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Mosra Energy Limited Nigeria (MEL) is a well-established coal mining
              company with over 15 years experience in the industry. We are
              operating coal mines in Kogi and Delta States. In addition to our
              current operations, we have several other coal blocks under
              exploration in Nsukka/Udenu, Enugu State, Dekina LGA, Kogi State,
              and Ogbadibo LGA, Benue State.
            </p>
          </div>

          <div className="flex items-center justify-center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F4fc66ae6bdd546dc978b24869a5c88d7%2F4a70b501b8dd41e39c1a504efe248ac9?format=webp&width=800"
              alt="Mosra Energy mining operations"
              className="w-full h-auto rounded shadow-md"
            />
          </div>
        </section>

        <hr className="my-10 border-gray-200 dark:border-gray-800" />

        {/* Engineering Section */}
        <section id="engineering" className="py-8">
          <h2 className="text-2xl font-bold mb-4">Engineering Sustainable Growth</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Mosra Energy Limited holds exploration, quarry, and mining licences
            for coal (lignite and sub-bituminous), limestone, granite, and iron
            ore across Nigeria — with active projects in Delta, Kogi, Benue,
            Nasarawa, Kaduna, and Edo States. Proven reserves include 117.08 MT
            of lignite in Delta and 11.75 MT of sub-bituminous coal in Kogi,
            sufficient to generate power for over 50 years. We combine
            multidisciplinary expertise, advanced equipment, and rapid
            mobilisation to deliver tailored engineering and management
            solutions. Our goal is to set the benchmark in sustainable energy
            and infrastructure development, supporting communities and driving
            industrial growth.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            Key competencies include power system design, transmission and
            distribution engineering, substation design, and technical advisory
            for major energy assets and acquisitions.
          </p>
        </section>

        <hr className="my-10 border-gray-200 dark:border-gray-800" />

        {/* CSR Section */}
        <section id="csr" className="py-8">
          <h2 className="text-2xl font-bold mb-4">Corporate Social Responsibility</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            At Mosra Energy Limited, we believe in building a vibrant and
            brighter future for all. Our commitment to sustainability extends
            beyond projects — it’s rooted in how we support and empower the
            communities we work with. Through our corporate social
            responsibility (CSR) initiatives, we invest in community
            development, education, and essential infrastructure, while
            promoting skills transfer and sustainable growth.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            We recognize that every community has unique needs, so our programs
            range from youth empowerment to providing critical resources like
            food, shelter, and training. Our people take pride in giving back —
            both through company-led initiatives and personal community
            involvement.
          </p>
        </section>

        <div className="mt-12 py-8 border-t border-gray-100 dark:border-gray-900">
          <a href="#top" className="inline-block text-sm text-gray-600 dark:text-gray-400 hover:underline">Back to top</a>
        </div>
      </main>

      <footer className="mt-12 bg-gray-50 dark:bg-gray-900 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center text-sm text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} Mosra Energy Limited — All rights reserved
        </div>
      </footer>
    </div>
  );
}
