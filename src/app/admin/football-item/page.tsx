/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import React from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export type TFootballItem = {
  _id: string;
  image: string;
  price: string;
};

const fetchGallery = async () => {
  const response = await axios.get(
    "https://panda-server-eight.vercel.app/api/v1/football-item"
  );
  // Adjust based on the actual structure of your API response
  return response?.data?.data; // Assuming the data is inside a data property
};

const FootballItem = () => {
  const queryClient = useQueryClient();

  const { data, isLoading, isError, error } = useQuery<TFootballItem[]>({
    queryKey: ["footballItem"],
    queryFn: fetchGallery,
  });

  console.log(data);

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(
        `https://panda-server-eight.vercel.app/api/v1/delete-football-item/${id}`
      );
      queryClient.invalidateQueries({ queryKey: ["footballItem"] });
    } catch (error) {
      console.error("Error deleting footballItem:", error);
    }
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>Error: {error.message}</h1>;
  }

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between max-w-6xl mx-auto items-center">
        <div>
          <h1 className="font-bold text-2xl pb-8 pt-8 pl-10">
            All Football Item:
          </h1>
        </div>
        <div>
          <Link href="/admin/add-football-item">
            <button className="btn mr-8 bg-green-500 text-2xl text-white border-none font-bold">
              Add football Item
            </button>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1  lg:grid-cols-3 gap-4 max-w-6xl mx-auto mt-14">
        {Array.isArray(data) && data.length > 0 ? (
          data?.map((football: TFootballItem) => (
            <div
              key={football?._id}
              className="w-full lg:w-96 p-4   bg-[#313f4f] "
            >
              <div className="flex justify-end gap-3 mb-2">
                <button
                  onClick={() => handleDelete(football._id)}
                  className="btn border-none bg-red-500 text-white text-2xl"
                >
                  Delete
                </button>
              </div>
              <div>
                <img
                  className="rounded-md  w-full lg:w-80"
                  src={football?.image}
                  alt=""
                />
                <h1>Price : {football?.price}</h1>
              </div>
            </div>
          ))
        ) : (
          <p>No galleries found</p>
        )}
      </div>
    </div>
  );
};

export default FootballItem;
