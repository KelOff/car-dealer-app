import React from 'react';
import VehicleFilter from '@/components/VehicleFilter';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl w-full grid-cols-2">
        <h1 className="text-4xl font-extrabold text-center mb-12 text-red-900">
          Car Dealer App
        </h1>
        <VehicleFilter />
      </div>
    </main>
  );
}
