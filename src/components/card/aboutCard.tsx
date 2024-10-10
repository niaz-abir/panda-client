/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

type TAbout = {
  image: string;
  name: string;
  position: string;
};

const AboutCard = ({ about }: { about: TAbout }) => {
  const { image, name, position } = about;
  return (
    <div className="p-4 rounded-md ">
      <img className="rounded-md " src={image} alt="" />
      <div className="bg-[#313f4f] rounded-md pt-4 pl-2 pb-4">
        <h2 className="text-[20px] font-bold">{name}</h2>
        <h4 className="font-bold">{position} </h4>
      </div>
    </div>
  );
};

export default AboutCard;
