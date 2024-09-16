import React, { Suspense } from 'react';

import VehicleResults from '../../../../components/VehicleResults';

async function fetchVehicles(makeId, year) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`
  );
  if (!res.ok) {
    throw new Error('Failed to fetch vehicles');
  }
  return res.json();
}

async function fetchMakeName(makeId, year) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/vehicles/GetModelsForMakeId/${makeId}?format=json`
  );
  if (!res.ok) {
    throw new Error('Failed to fetch make name');
  }
  const data = await res.json();
  return data.Results[0]?.Make_Name || 'Unknown Make';
}

export async function generateStaticParams() {
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 2014 }, (_, i) =>
    (currentYear - i).toString()
  );

  const makesRes = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/vehicles/GetMakesForVehicleType/car?format=json`
  );
  const makesData = await makesRes.json();
  const makes = makesData.Results;

  const params = [];

  for (const make of makes) {
    for (const year of years) {
      params.push({ makeId: make.MakeId.toString(), year });
    }
  }

  return params;
}

export default async function ResultPage({ params }) {
  const { makeId, year } = params;
  const vehiclesData = await fetchVehicles(makeId, year);
  const makeName = await fetchMakeName(makeId, year);

  return (
    <main className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Vehicle Results
        </h1>
        <Suspense fallback={<Loading />}>
          <VehicleResults
            vehicles={vehiclesData.Results}
            make={makeName}
            year={year}
          />
        </Suspense>
      </div>
    </main>
  );
}

function Loading() {
  return (
    <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
      🌀 Loading...
    </h2>
  );
}
