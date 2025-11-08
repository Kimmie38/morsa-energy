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
          <div className="mining-gallery dotted-bg">
            <div className="mining-gallery-item">
              <img src="/images/img1.png" alt="mining 1" className="w-full h-full object-cover rounded-2xl" />
            </div>
            <div className="mining-gallery-item">
              <img src="/images/img2.png" alt="mining 2" className="w-full h-full object-cover rounded-2xl" />
            </div>
            <div className="mining-gallery-item">
              <img src="/images/img3.png" alt="mining 3" className="w-full h-full object-cover rounded-2xl" />
            </div>
            <div className="mining-gallery-item">
              <img src="/images/img4.png" alt="mining 4" className="w-full h-full object-cover rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
