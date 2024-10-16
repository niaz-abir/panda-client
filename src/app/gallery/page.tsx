/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

export type TGallery = {
  _id: string;
  firstImage: string;
  secondImage: string;
};

const Gallery = () => {
  const [data, setData] = useState<TGallery[] | null>(null); // Store gallery data
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const [error, setError] = useState<string | null>(null); // Error state

  // Fetch gallery data using axios
  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const response = await axios?.get(
          "https://panda-server-eight.vercel.app/api/v1/gallery"
        );
        setData(response?.data?.data); // Store data in state
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
    <section className="pb-14 max-w-7xl mx-auto pt-8">
      <h1 className="font-bold pb-6 pt-4 text-2xl pl-8">Moment With People</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 ml-6 mr-6">
        {data?.map((gallery: TGallery) => (
          <div className="p-4" key={gallery._id}>
            <div className="flex justify-end gap-3 mb-2"></div>
            <div className="diff aspect-[16/9]">
              <div className="diff-item-1">
                <img alt="first" src={gallery?.firstImage} />
              </div>
              <div className="diff-item-2">
                <img alt="second" src={gallery?.secondImage} />
              </div>
              <div className="diff-resizer"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
