/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import React from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export type TGallery = {
  _id: string;
  firstImage: string;
  secondImage: string;
};

const fetchGallery = async () => {
  const response = await axios.get("http://localhost:5000/reviews-gallery");
  // Adjust based on the actual structure of your API response
  return response.data.data; // Assuming the data is inside a `data` property
};

const AllGallery = () => {
  const queryClient = useQueryClient();

  const { data, isLoading, isError, error } = useQuery<TGallery[]>({
    queryKey: ["gallery"],
    queryFn: fetchGallery,
  });

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`http://localhost:5000/reviews-gallery/${id}`);
      queryClient.invalidateQueries({ queryKey: ["gallery"] });
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
          <h1 className="font-bold text-2xl pb-4 pt-8 pl-10">
            Moment With People
          </h1>
        </div>
        <div>
          <Link href="/admin/add-gallery">
            <button className="btn mr-8 bg-green-500 text-black text-2xl border-none font-bold">
              Add Gallery
            </button>
          </Link>
        </div>
      </div>
      <div className="grid max-w-7xl mx-auto grid-cols-1 lg:grid-cols-2 gap-4">
        {Array.isArray(data) && data.length > 0 ? (
          data.map((gallery: TGallery) => (
            <div className="p-4" key={gallery._id}>
              <div className="flex justify-end gap-3 mb-2">
                <button
                  onClick={() => handleDelete(gallery._id)}
                  className="btn border-none bg-red-500 text-white text-2xl"
                >
                  Delete
                </button>
              </div>
              <div className="diff aspect-[16/9]">
                <div className="diff-item-1">
                  <img alt="first" src={gallery.firstImage} />
                </div>
                <div className="diff-item-2">
                  <img alt="second" src={gallery.secondImage} />
                </div>
                <div className="diff-resizer"></div>
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

export default AllGallery;
