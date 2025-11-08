import React from "react";

export default function MiningPage() {
  return (
    <div className="bg-white text-gray-900 min-h-screen">
      {/* Hero banner */}
      <section className="bg-[#FBEAE957] py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <h1 className="text-3xl md:text-4xl font-bold text-red-600">Mining</h1>
            <p className="text-sm text-gray-700">
              Advancing responsible mining operations that unlock Nigeria’s rich mineral potential while promoting sustainability and community growth.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery below hero and before main content */}
     <section className="mining-gallery-section py-12">
  <div className="max-w-7xl mx-auto px-6">
    <div className="mining-gallery dotted-bg grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {[
        "/images/img1.png",
        "/images/img2.png",
        "/images/img3.png",
        "/images/img4.png",
      ].map((src, index) => (
        <div
          key={index}
          className="overflow-hidden rounded-2xl shadow-lg [clip-path:polygon(0%_0%,100%_0%,100%_100%,0%_90%)]"
        >
          <img
            src={src}
            alt={`mining ${index + 1}`}
            className="object-cover w-full h-full"
          />
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Coal To Power Generation */}
      <section className="power-gen-section py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="power-gen-content">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Coal To Power Generation</h2>
              <p className="mt-4 text-sm text-gray-700">
                MEL has aligned with the current administration’s plan to generate 30 per cent of electricity needed in the country from coal. Consequently, we have obtained coal exploration Licenses for over 15 tenements including Lignite of the Delta Coastal Plain domiciled in Delta State and Sub-Bituminous Coal of the Ogboyoga/Okaba mining district domiciled in Kogi State all of the Anambra Basin in Nigeria. We are currently working on developing these coal properties exclusively for power generation.
              </p>
              <div className="leader-profile mt-6 flex items-center gap-3">
                <img src="/images/Ramos.png" alt="Olukayode Ramos" className="h-12 w-12 rounded-full object-cover" />
                <div className="leading-tight">
                  <p className="font-semibold text-gray-900">Olukayode Ramos</p>
                  <p className="text-xs text-gray-500">CEO, Ramos Energy Limited</p>
                </div>
              </div>
            </div>
            <div className="power-gen-image">
              <img src="/images/img6.jpg" alt="Coal mining trucks at open-pit site" className="w-full max-h-[440px] h-full rounded-2xl object-cover shadow-lg" />
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}
