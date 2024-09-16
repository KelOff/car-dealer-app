'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

const VehicleFilter = () => {
  const [makes, setMakes] = useState([]);
  const [selectedMake, setSelectedMake] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 2014 }, (_, i) =>
    (currentYear - i).toString()
  );

  useEffect(() => {
    const fetchMakes = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/vehicles/GetMakesForVehicleType/car?format=json`
        );
        const data = await response.json();
        const flattenedMakes = data.Results.flat();
        const uniqueMakes = Array.from(
          new Set(flattenedMakes.map((make) => make.MakeId))
        ).map((id) => flattenedMakes.find((make) => make.MakeId === id));
        setMakes(uniqueMakes);
      } catch (error) {
        console.error('Error fetching makes:', error);
      }
    };

    fetchMakes();
  }, []);

  const handleMakeChange = (e) => {
    setSelectedMake(e.target.value);
    setSelectedYear('');
  };

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
  };

  const isYearDisabled = !selectedMake;
  const isNextDisabled = !selectedMake || !selectedYear;

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Find Your Vehicle
      </h2>
      <div className="mb-4">
        <label
          htmlFor="make"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Vehicle Make
        </label>
        <div className="relative">
          <select
            id="make"
            value={selectedMake}
            onChange={handleMakeChange}
            className="block w-full pl-3 pr-10 py-2 text-base text-red-900 border-gray-300 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md"
          >
            <option value="">Select a make</option>
            {makes.map((make) => (
              <option key={make.MakeId} value={make.MakeId}>
                {make.MakeName}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"></div>
        </div>
      </div>
      <div className="mb-6">
        <label
          htmlFor="year"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Model Year
        </label>
        <div className="relative">
          <select
            id="year"
            value={selectedYear}
            onChange={handleYearChange}
            disabled={isYearDisabled}
            className={`block w-full pl-3 pr-10 py-2 text-base text-red-900 border-gray-300 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md ${
              isYearDisabled
                ? ' text-gray-300 bg-gray-100 cursor-not-allowed'
                : ''
            }`}
          >
            <option value="">Select a year</option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"></div>
        </div>
      </div>
      <div className="flex justify-center">
        <Link
          href={
            isNextDisabled ? '#' : `/result/${selectedMake}/${selectedYear}`
          }
          className={`px-4 py-2 rounded-md text-white font-medium ${
            isNextDisabled
              ? 'bg-gray-300 cursor-not-allowed'
              : 'bg-blue-400 hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary'
          }`}
          onClick={(e) => {
            if (isNextDisabled) {
              e.preventDefault();
            }
          }}
        >
          Next
        </Link>
      </div>
    </div>
  );
};

export default VehicleFilter;
