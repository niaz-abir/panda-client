/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import Link from "next/link";
import Jersey from "@/components/jersey";
import { IoShirtSharp } from "react-icons/io5";
import { BiMessageSquareDetail } from "react-icons/bi";

export type TJersey = {
  _id: string;
  category: string;
  name: string;
  image: string;
  price: string;
  discountPrice: string;
};

const fetchGallery = async () => {
  const response = await axios.get("http://localhost:5000/jerseys");
  // Adjust based on the actual structure of your API response
  return response.data.data; // Assuming the data is inside a `data` property
};

const AllJersey = () => {
  const queryClient = useQueryClient();

  const { data, isLoading, isError, error } = useQuery<TJersey[]>({
    queryKey: ["jersey"],
    queryFn: fetchGallery,
  });

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`http://localhost:5000/jerseys/${id}`);
      queryClient.invalidateQueries({ queryKey: ["jersey"] });
    } catch (error) {
      console.error("Error deleting gallery item:", error);
    }
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>Error: {error.message}</h1>;
  }

  return (
    <section className="max-w-7xl mx-auto h-auto pb-14 pt-8">
      <div className="flex justify-between items-center mb-2">
        <div>
          <h1 className="font-bold text-2xl pb-4 pt-8 pl-10">All Jersey</h1>
        </div>
        <div>
          <Link href="/admin/add-jersey">
            <button className="btn mr-8 bg-green-500 text-black text-2xl border-none font-bold">
              Add Jersey
            </button>
          </Link>
        </div>
      </div>
      <div className="grid max-w-7xl mx-auto grid-cols-1 lg:grid-cols-3 gap-4">
        {Array.isArray(data) && data.length > 0 ? (
          data.map((jerseyCrd: TJersey) => (
            <div
              key={jerseyCrd?._id}
              className="bg-[#15222f] mb-8 hover:rounded-lg duration-300  pb-4 hover:border-none  max-w-sm"
            >
              <div className="flex justify-end gap-3 mb-2">
                <button
                  onClick={() => handleDelete(jerseyCrd._id)}
                  className="btn border-none bg-red-500 text-white text-2xl"
                >
                  Delete
                </button>
              </div>
              <div className="relative ">
                <img src={jerseyCrd.image} alt="Product Image" />
              </div>
              <div className="p-4">
                <h2 className=" text-[28px] flex items-center gap-2 font-bold ">
                  <IoShirtSharp />
                  {jerseyCrd.name}
                </h2>
                <h3 className="mb-2 font-bold">
                  Price:{" "}
                  <span className="font-semibold ">
                    {jerseyCrd.discountPrice}
                  </span>{" "}
                  <span className=" ml-2  line-through">{jerseyCrd.price}</span>
                </h3>
              </div>
            </div>
          ))
        ) : (
          <p>No galleries found</p>
        )}
      </div>
    </section>
  );
};

export default AllJersey;
