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
              <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
                <Image src="/images/Ramos.png" alt="Olukayode Ramos" width={56} height={56} className="object-cover w-full h-full" />
              </div>
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

      {/* Engineering section */}
      <section id="engineering" className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="overflow-hidden rounded-2xl">
              <Image src="/images/Abt-image.png" alt="Engineering" width={700} height={480} className="w-full h-48 md:h-64 object-cover rounded-2xl" />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Engineering Sustainable Growth</h3>
              <p className="text-gray-700 mb-4">
                Mosra Energy Limited holds exploration, quarry, and mining licences for coal (lignite and sub-bituminous), limestone, granite, and iron ore across Nigeria — with active projects in Delta, Kogi, Benue, Nasarawa, Kaduna, and Edo States. Proven reserves include 117.08 MT of lignite in Delta and 11.75 MT of sub-bituminous coal in Kogi, sufficient to generate power for over 50 years.
              </p>
              <p className="text-gray-700">
                We combine multidisciplinary expertise, advanced equipment, and rapid mobilisation to deliver tailored engineering and management solutions. Our goal is to set the benchmark in sustainable energy and infrastructure development, supporting communities and driving industrial growth. Key competencies include power system design, transmission and distribution engineering, substation design, and technical advisory for major energy assets and acquisitions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CSR Section */}
      <section id="csr" className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-6">
            <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Corporate Social Responsibility</span>
          </div>

          <div className="text-gray-700 mb-6">
            <p className="mb-4">At Mosra Energy Limited, we believe in building a vibrant and brighter future for all. Our commitment to sustainability extends beyond projects — it’s rooted in how we support and empower the communities we work with.</p>
            <p className="mb-4">Through our corporate social responsibility (CSR) initiatives, we invest in community development, education, and essential infrastructure, while promoting skills transfer and sustainable growth.</p>
            <p>We recognize that every community has unique needs, so our programs range from youth empowerment to providing critical resources like food, shelter, and training. Our people take pride in giving back — both through company-led initiatives and personal community involvement.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div className="overflow-hidden rounded-3xl shadow-lg">
              <Image src="/images/gal1.png" alt="CSR 1" width={800} height={800} className="w-full h-64 md:h-56 lg:h-64 object-cover" />
            </div>
            <div className="overflow-hidden rounded-3xl shadow-lg">
              <Image src="/images/gal2.png" alt="CSR 2" width={800} height={800} className="w-full h-64 md:h-56 lg:h-64 object-cover" />
            </div>
            <div className="overflow-hidden rounded-3xl shadow-lg">
              <Image src="/images/gal3.png" alt="CSR 3" width={800} height={800} className="w-full h-64 md:h-56 lg:h-64 object-cover" />
            </div>
            <div className="overflow-hidden rounded-3xl shadow-lg">
              <Image src="/images/gal4.png" alt="CSR 4" width={800} height={800} className="w-full h-64 md:h-56 lg:h-64 object-cover" />
            </div>
            <div className="overflow-hidden rounded-3xl shadow-lg">
              <Image src="/images/gal5.png" alt="CSR 5" width={800} height={800} className="w-full h-64 md:h-56 lg:h-64 object-cover" />
            </div>
            <div className="overflow-hidden rounded-3xl shadow-lg">
              <Image src="/images/gal6.png" alt="CSR 6" width={800} height={800} className="w-full h-64 md:h-56 lg:h-64 object-cover" />
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-50 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-6 text-center text-sm text-gray-600">© {new Date().getFullYear()} Mosra Energy Limited — All rights reserved</div>
      </footer>
    </div>
  );
}
