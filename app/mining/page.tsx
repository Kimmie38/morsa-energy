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
          className="overflow-hidden rounded-2xl shadow-lg border-l-4 border-yellow-500 [clip-path:polygon(0%_0%,100%_0%,100%_100%,0%_90%)]"
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



    </div>
  );
}
