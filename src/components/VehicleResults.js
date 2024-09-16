import React from 'react';

const VehicleResults = ({ vehicles, make, year }) => {
  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        {make} Models for {year}
      </h2>
      {vehicles.length > 0 ? (
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {vehicles.map((vehicle) => (
            <li
              key={vehicle.MakeId}
              className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200"
            >
              <div className="w-full flex items-center justify-between p-6 space-x-6">
                <div className="flex-1 truncate">
                  <div className="flex items-center space-x-3 border-red-500">
                    <h3 className="text-gray-900 text-sm font-medium truncate">
                      {vehicle.Make_Name} {vehicle.Model_Name}
                    </h3>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-gray-600">
          No vehicles found for the selected criteria.
        </p>
      )}
    </div>
  );
};

export default VehicleResults;
