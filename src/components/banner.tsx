import React from "react";
import { IoFootballOutline } from "react-icons/io5";

export default function Banner() {
  return (
    <div className="text-center mt-24">
      <div className="flex justify-center">
        <h1 className="text-5xl flex gap-2 items-center font-bold pb-2">
          Jersey Panda{" "}
          <IoFootballOutline className="animate-spin-slow " size={50} />
        </h1>
      </div>
      <h4 className="text-gray-400"> We try to give best jersey</h4>
    </div>
  );
}
