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
            {/* Column 1 */}
            <div className="flex flex-col gap-6">
              <div className="overflow-hidden rounded-3xl shadow-lg">
                <img src="/images/gal1.png" alt="CSR 1" className="w-full h-64 object-cover" />
              </div>
              <div className="overflow-hidden rounded-3xl shadow-lg">
                <img src="/images/gal4.png" alt="CSR 4" className="w-full h-64 object-cover" />
              </div>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-6">
              <div className="overflow-hidden rounded-3xl shadow-lg">
                <img src="/images/gal2.png" alt="CSR 2" className="w-full h-40 object-cover" />
              </div>
              <div className="overflow-hidden rounded-3xl shadow-lg">
                <img src="/images/gal5.png" alt="CSR 5" className="w-full h-[22rem] md:h-64 lg:h-[22rem] object-cover" />
              </div>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-6">
              <div className="overflow-hidden rounded-3xl shadow-lg">
                <img src="/images/gal3.png" alt="CSR 3" className="w-full h-40 object-cover" />
              </div>
              <div className="overflow-hidden rounded-3xl shadow-lg">
                <img src="/images/gal6.png" alt="CSR 6" className="w-full h-64 object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section id="purpose" className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-6">
            <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Purpose & Core Values</span>
          </div>

          <div className="grid grid-cols-1 gap-8 items-start">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Vision</h3>
              <p className="text-gray-700">Our purpose—to positively impact lives, transform communities and make the world a better place—unites professionals working collaboratively across a broad range of disciplines.</p>
            </div>

            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Mission</h3>
              <p className="text-gray-700 mb-6">Our core values recognize that our business success is founded upon a commitment to certain principles:</p>

            <div className="mt-4">
            {/* Top row: 4 items */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/** Item */}
              <div className="text-sm text-gray-700">
                <div className="text-xs text-gray-400 mb-3">01</div>
                <div className="border-t border-gray-200 pt-4">
                  <div className="font-semibold">Innovation</div>
                  <div className="text-sm text-gray-600">We embrace cutting-edge technologies to solve real-world challenges and drive sustainable growth.</div>
                </div>
              </div>

              <div className="text-sm text-gray-700">
                <div className="text-xs text-gray-400 mb-3">02</div>
                <div className="border-t border-gray-200 pt-4">
                  <div className="font-semibold">Integrity</div>
                  <div className="text-sm text-gray-600">We operate with transparency, honesty, and accountability in all our partnerships and processes.</div>
                </div>
              </div>

              <div className="text-sm text-gray-700">
                <div className="text-xs text-gray-400 mb-3">03</div>
                <div className="border-t border-gray-200 pt-4">
                  <div className="font-semibold">Empowerment</div>
                  <div className="text-sm text-gray-600">We uplift communities, clients, and employees by providing tools, knowledge, and energy to thrive.</div>
                </div>
              </div>

              <div className="text-sm text-gray-700">
                <div className="text-xs text-gray-400 mb-3">04</div>
                <div className="border-t border-gray-200 pt-4">
                  <div className="font-semibold">Sustainability</div>
                  <div className="text-sm text-gray-600">We are committed to environmentally responsible practices that protect future generations.</div>
                </div>
              </div>
            </div>

            {/* Bottom row: 3 items centered */}
            <div className="mt-8">
              <div className="max-w-3xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-sm text-gray-700">
                    <div className="text-xs text-gray-400 mb-3">05</div>
                    <div className="border-t border-gray-200 pt-4">
                      <div className="font-semibold">Collaboration</div>
                      <div className="text-sm text-gray-600">We believe in the power of partnerships—working together across industries, sectors, and borders to achieve shared success.</div>
                    </div>
                  </div>

                  <div className="text-sm text-gray-700">
                    <div className="text-xs text-gray-400 mb-3">06</div>
                    <div className="border-t border-gray-200 pt-4">
                      <div className="font-semibold">Excellence</div>
                      <div className="text-sm text-gray-600">We pursue the highest standards in engineering, service delivery, and operational performance.</div>
                    </div>
                  </div>

                  <div className="text-sm text-gray-700">
                    <div className="text-xs text-gray-400 mb-3">07</div>
                    <div className="border-t border-gray-200 pt-4">
                      <div className="font-semibold">Local Impact</div>
                      <div className="text-sm text-gray-600">We prioritize indigenous participation, local sourcing, and community development in every project.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section id="team" className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8">
            <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Our Team</span>
            <h2 className="mt-6 text-3xl md:text-4xl font-bold">Meet Our Leadership Team</h2>
            <p className="mt-3 text-gray-600 max-w-2xl mx-auto">Dedicated professionals leading the charge in engineering reliable infrastructure for a sustainable future.</p>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <Image src="/images/Ramos.png" alt="Olukayode Ramos" width={600} height={800} className="w-full h-96 object-cover" />
                <div className="absolute left-0 right-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <div className="text-white font-semibold">Olukayode Ramos</div>
                  <div className="text-xs text-white/80">Chief Executive Officer, Mosra Energy Ltd.</div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <Image src="/images/Daniel.png" alt="Daniel Monwuba" width={600} height={800} className="w-full h-96 object-cover" />
                <div className="absolute left-0 right-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <div className="text-white font-semibold">Daniel Monwuba</div>
                  <div className="text-xs text-white/80">Group Head, Procurement, Sales & Marketing</div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <Image src="/images/lawal.png" alt="Engr. Muntari Lawal" width={600} height={800} className="w-full h-96 object-cover" />
                <div className="absolute left-0 right-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <div className="text-white font-semibold">Engr. Muntari Lawal, FNSE</div>
                  <div className="text-xs text-white/80">Group Project Manager</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <Image src="/images/Chukwuma.png" alt="Chukwuma Chukwuekwu" width={600} height={800} className="w-full h-96 object-cover" />
                <div className="absolute left-0 right-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <div className="text-white font-semibold">Chukwuma Chukwuekwu</div>
                  <div className="text-xs text-white/80">Group Head, Accounts & Finance</div>
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <Image src="/images/Ali.png" alt="Ahmed Ali" width={600} height={800} className="w-full h-96 object-cover" />
                <div className="absolute left-0 right-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <div className="text-white font-semibold">Ahmed Ali</div>
                  <div className="text-xs text-white/80">Group Head, Human Resources & Corporate Services</div>
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <Image src="/images/Abubakar.png" alt="Abubakar Ibrahim" width={600} height={800} className="w-full h-96 object-cover" />
                <div className="absolute left-0 right-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <div className="text-white font-semibold">Abubakar Ibrahim</div>
                  <div className="text-xs text-white/80">Head, Mineral Exploration</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <Image src="/images/Ishola.png" alt="Ishola Emmanuel Aderopo" width={500} height={700} className="w-full h-96 object-cover" />
                <div className="absolute left-0 right-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <div className="text-white font-semibold">Ishola Emmanuel Aderopo</div>
                  <div className="text-xs text-white/80">Plant Manager, Idowa Falola Coal Mines (IFCM), Delta State</div>
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <Image src="/images/Babatunde.png" alt="Babatunde Olanrewaju Emmanuel" width={520} height={800} className="w-full h-120 object-cover" />
                <div className="absolute left-0 right-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <div className="text-white font-semibold">Engr. Babatunde Olanrewaju Emmanuel</div>
                  <div className="text-xs text-white/80">Plant Manager, Tunde Ramos Coal Mines (TRCM), Kogi State</div>
                </div>
              </div>
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
