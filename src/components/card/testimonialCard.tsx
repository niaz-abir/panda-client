/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

type TTestimonial = {
  review: string;
  name: string;
  image: string;
  date: string;
};
const TestimonialCard = ({ testimonial }: { testimonial: TTestimonial }) => {
  const { name, image, review, date } = testimonial;
  return (
    <div className="p-4 m-4 w-96 bg-[#1c1c22] rounded-md">
      <p className=" pt-3 text-justify pb-6">
        <FaQuoteLeft />
        {review}
      </p>
      <div className="flex gap-4 items-center ">
        <div className="avatar">
          <div className="w-16 rounded">
            <img src={image} alt="image" />
          </div>
        </div>
        <div className="text-gray-300">
          <h3>{name}</h3>
          <h3>{date}</h3>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
