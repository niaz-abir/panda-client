/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect, useState } from "react";

import axios from "axios";

export type TCustom = {
  _id: string;
  image: string;
};

const CustomizeJersey = () => {
  const [data, setData] = useState<TCustom[] | null>(null); // Store gallery data
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const [error, setError] = useState<string | null>(null); // Error state

  // Fetch gallery data using axios
  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const response = await axios?.get(
          "https://panda-server-eight.vercel.app/api/v1/custom-jersey"
        );
        setData(response.data); // Store data in state
        setIsLoading(false); // Set loading to false once data is fetched
      } catch (err) {
        setError("Error loading gallery"); // Set error state
        setIsLoading(false);
      }
    };

    fetchGallery();
  }, []);
  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>{error}</div>;

  return (
    <section className="max-w-7xl mx-auto pb-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="font-bold text-2xl pb-8 pt-8 lg:pl-0 pl-8 ">
            All Custom Jersey:
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:ml-0 ml-8 gap-4">
        {data?.map((custom) => (
          <div key={custom?._id}>
            <div className="w-[300px] lg:w-96 p-4  rounded-md  bg-[#313f4f] ">
              <div>
                <img className="rounded-md " src={custom.image} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomizeJersey;
