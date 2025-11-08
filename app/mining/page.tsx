import React from "react";

export default function MiningPage() {
  return (
    <div className="bg-white text-gray-900">
      {/* Hero banner */}
      <section className="bg-[#f9ecec] py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <h1 className="text-3xl md:text-4xl font-bold text-red-600">Mining</h1>
            <p className="text-sm text-gray-700">
              Mosra Energy Limited operates coal mines in Kogi and Delta States and advances exploration across Enugu, Kogi, and Benue. We combine modern equipment, disciplined safety, and environmental stewardship to deliver reliable fuel for Nigeria’s industries.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
