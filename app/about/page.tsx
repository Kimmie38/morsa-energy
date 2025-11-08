import React from "react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
      <main className="min-h-screen max-w-7xl mx-auto px-6 py-12 flex flex-col">
        {/* Hero - full viewport height */}
        <section className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">Empowering Industries to Solve Everyday Challenges</h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Mosra Energy Limited Nigeria (MEL) is a well-established coal mining company with over 15 years experience in the industry. We are operating coal mines in Kogi and Delta States. In addition to our current operations, we have several other coal blocks under exploration in Nsukka/Udenu, Enugu State, Dekina LGA, Kogi State, and Ogbadibo LGA, Benue State.
            </p>
            <div className="flex gap-4">
              <a href="/projects" className="inline-block px-5 py-3 rounded-full bg-red-600 text-white text-sm hover:bg-red-700">View Projects</a>
              <a href="/contact" className="inline-block px-5 py-3 rounded-full border border-gray-300 text-sm text-gray-700 hover:bg-gray-50">Contact Us</a>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F4fc66ae6bdd546dc978b24869a5c88d7%2F4a70b501b8dd41e39c1a504efe248ac9?format=webp&width=1200"
              alt="Mosra Energy operations"
              className="w-full h-full object-cover rounded shadow-lg max-h-[70vh]"
            />
          </div>
        </section>

        {/* Content sections below fold */}
        <section id="engineering" className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Engineering Sustainable Growth</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Mosra Energy Limited holds exploration, quarry, and mining licences for coal (lignite and sub-bituminous), limestone, granite, and iron ore across Nigeria — with active projects in Delta, Kogi, Benue, Nasarawa, Kaduna, and Edo States. Proven reserves include 117.08 MT of lignite in Delta and 11.75 MT of sub-bituminous coal in Kogi, sufficient to generate power for over 50 years.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            We combine multidisciplinary expertise, advanced equipment, and rapid mobilisation to deliver tailored engineering and management solutions. Our goal is to set the benchmark in sustainable energy and infrastructure development, supporting communities and driving industrial growth. Key competencies include power system design, transmission and distribution engineering, substation design, and technical advisory for major energy assets and acquisitions.
          </p>
        </section>

        <section id="csr" className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Corporate Social Responsibility</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            At Mosra Energy Limited, we believe in building a vibrant and brighter future for all. Our commitment to sustainability extends beyond projects — it’s rooted in how we support and empower the communities we work with. Through our corporate social responsibility (CSR) initiatives, we invest in community development, education, and essential infrastructure, while promoting skills transfer and sustainable growth.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            We recognize that every community has unique needs, so our programs range from youth empowerment to providing critical resources like food, shelter, and training. Our people take pride in giving back — both through company-led initiatives and personal community involvement.
          </p>
        </section>

        <div className="mt-12 py-8 border-t border-gray-100 dark:border-gray-900">
          <a href="#top" className="inline-block text-sm text-gray-600 dark:text-gray-400 hover:underline">Back to top</a>
        </div>
      </main>

      <footer className="bg-gray-50 dark:bg-gray-900 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center text-sm text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} Mosra Energy Limited — All rights reserved
        </div>
      </footer>
    </div>
  );
}
