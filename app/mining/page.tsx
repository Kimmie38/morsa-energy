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
            <div className="w-full max-w-md overflow-hidden rounded-xl shadow-lg [clip-path: polygon(0% 0%, 100% 10%, 100% 100%, 0% 90%)] mining-gallery-item">
              <img src="/images/img1.png" alt="Mining site" className="object-cover w-full h-full" />
            </div>
            <div className="w-full max-w-md overflow-hidden rounded-xl shadow-lg [clip-path: polygon(0% 0%, 100% 10%, 100% 100%, 0% 90%)] mining-gallery-item">
              <img src="/images/img2.png" alt="Mining site" className="object-cover w-full h-full" />
            </div>
            <div className="w-full max-w-md overflow-hidden rounded-xl shadow-lg [clip-path: polygon(0% 0%, 100% 10%, 100% 100%, 0% 90%)] mining-gallery-item">
              <img src="/images/img3.png" alt="Mining site" className="object-cover w-full h-full" />
            </div>
            <div className="w-full max-w-md overflow-hidden rounded-xl shadow-lg [clip-path: polygon(0% 0%, 100% 10%, 100% 100%, 0% 90%)] mining-gallery-item">
              <img src="/images/img4.png" alt="Mining site" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
