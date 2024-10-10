/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { IoPricetagsSharp } from "react-icons/io5";

export type TFootballItem = {
  _id: string;
  image: string;
  price: string;
};

const FootballItem = () => {
  const [data, setData] = useState<TFootballItem[] | null>(null); // Store gallery data
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const [error, setError] = useState<string | null>(null); // Error state

  // Fetch gallery data using axios
  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const response = await axios?.get(
          "https://panda-server-eight.vercel.app/api/v1/football-item"
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

  //   {
  //     id: 1,
  //     image:
  //       "https://i.ibb.co/FJnvJrr/Whats-App-Image-2024-06-19-at-22-50-53-1baa3e4e.jpg",
  //   },
  //   {
  //     id: 1,
  //     image:
  //       "https://i.ibb.co/FJnvJrr/Whats-App-Image-2024-06-19-at-22-50-53-1baa3e4e.jpg",
  //   },
  //   {
  //     id: 1,
  //     image:
  //       "https://i.ibb.co/FJnvJrr/Whats-App-Image-2024-06-19-at-22-50-53-1baa3e4e.jpg",
  //   },
  //   {
  //     id: 1,
  //     image:
  //       "https://i.ibb.co/FJnvJrr/Whats-App-Image-2024-06-19-at-22-50-53-1baa3e4e.jpg",
  //   },
  //   {
  //     id: 1,
  //     image:
  //       "https://i.ibb.co/FJnvJrr/Whats-App-Image-2024-06-19-at-22-50-53-1baa3e4e.jpg",
  //   },
  //   {
  //     id: 1,
  //     image:
  //       "https://i.ibb.co/FJnvJrr/Whats-App-Image-2024-06-19-at-22-50-53-1baa3e4e.jpg",
  //   },
  //   {
  //     id: 1,
  //     image:
  //       "https://i.ibb.co/FJnvJrr/Whats-App-Image-2024-06-19-at-22-50-53-1baa3e4e.jpg",
  //   },
  // ];

  return (
    <div className="max-w-7xl mx-auto pb-6">
      <div className="flex justify-between max-w-6xl mx-auto items-center">
        <div>
          <h1 className="font-bold text-2xl pb-4 pt-8 pl-10">
            All Sports Item:
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-1  lg:grid-cols-3 gap-4 max-w-6xl mx-auto mt-8">
        {data?.map((football: TFootballItem) => (
          <div
            key={football?._id}
            className="w-[300px] lg:w-96 p-4 ml-8 mr-8 lg:mr-0 lg:ml-0 rounded-md  bg-[#313f4f] "
          >
            <div>
              <img
                className="rounded-md  w-full lg:w-80"
                src={football?.image}
                alt=""
              />
              <h1 className=" pt-4 text-[20px] font-bold">
                {" "}
                Price : {football?.price}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FootballItem;
