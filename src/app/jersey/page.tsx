"use client";
import React, { useEffect, useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { IoShirtSharp } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import axios from "axios";
import { BiMessageSquareDetail } from "react-icons/bi";

export type TJersey = {
  _id: string;
  category: string;
  name: string;
  image: string;
  price: string;
  discountPrice: string;
};

const Jersey = () => {
  const [data, setData] = useState<TJersey[] | null>(null); // Store gallery data
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const [error, setError] = useState<string | null>(null); // Error state

  // Fetch gallery data using axios
  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const response = await axios?.get(
          "https://panda-server-eight.vercel.app/api/v1/jersey"
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
    <section className="max-w-7xl mx-auto">
      <div className="flex lg:flex-row flex-col justify-center items-center p-4 my-6 mt-16 mb-20">
        <div className="relative p-3 border border-[#313f4f]  rounded-lg w-full max-w-lg">
          <input
            type="text"
            className="rounded-md p-3 w-full bg-[#313f4f] focus:outline-none"
            placeholder="Search your jersey"
          />

          <button
            type="submit"
            className="absolute bg-[#313f4f]  right-6 top-6"
          >
            <IoMdSearch className="text-2xl" />
          </button>
        </div>
        <div className="dropdown dropdown-bottom">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1 flex items-center gap-2 h-14 text-[20px] bg-[#313f4f]  text-white border-none hover:bg-[#1c1c22]"
          >
            All Jersey <RiArrowDropDownLine className="text-2xl" />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow  rounded-box w-52"
          >
            <li>
              <a className="text-[18px]  hover:bg-[#1c1c22]">Club</a>
            </li>
            <li>
              <a className="text-[18px]  hover:bg-[#1c1c22]">National</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 justify-center lg:grid-cols-3 gap-4 ml-0 p-4 lg:ml-6">
        {data?.map((jerseyCrd) => (
          <div key={jerseyCrd?._id}>
            <div className="bg-[#15222f] mb-8 hover:rounded-lg duration-300  pb-4 hover:border-none  max-w-sm">
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
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="mb-2 font-bold text-[18x]">Size:</h3>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-gray-700 text-white px-2 py-1 rounded">
                      M
                    </span>

                    <span className="bg-gray-700 text-white px-2 py-1 rounded">
                      L
                    </span>

                    <span className="bg-gray-700 text-white px-2 py-1 rounded">
                      XL
                    </span>
                    <span className="bg-gray-700 text-white px-2 py-1 rounded">
                      XLL
                    </span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <button className="btn bg-[#165a85] rounded-md border-[#165a85] hover:bg-transparent hover:border-2 hover:border-[#50278b] text-white font-bold">
                      Take screenshot
                    </button>
                  </div>
                  <div>
                    <button className=" text-white text-2xl font-bold">
                      <BiMessageSquareDetail />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Jersey;
