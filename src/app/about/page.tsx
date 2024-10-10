import AboutCard from "@/components/card/aboutCard";
import React from "react";
import { GoGoal } from "react-icons/go";

const About = () => {
  const allAbout = [
    {
      id: 1,
      name: "Md Sh Shoyon",
      position: "Founder",
      study: "International Islamic University",
      image:
        "https://i.ibb.co/FYVnXpt/Whats-App-Image-2024-08-14-at-01-11-07-28c1a3d9.jpg",
    },
    {
      id: 1,
      name: "Fokhrul Islam",
      position: "Founder",
      study: "Sheikh Hasina Textile Engineering College",
      image:
        "https://i.ibb.co/3mdfnb0/Whats-App-Image-2024-08-14-at-01-14-24-4db6f4a8.jpg",
    },
    {
      id: 1,
      name: "Nowroz Imtiaz",
      position: "Co-Founder",
      study: "Primeasia University",
      image:
        "https://i.ibb.co/7bBxHK3/Whats-App-Image-2024-08-14-at-01-12-23-12d8a036.jpg",
    },
    {
      id: 1,
      name: "Niaz Abir",
      position: "Co-founder",
      study: "Daffodil International University",
      image:
        "https://i.ibb.co/qjG8V6H/Whats-App-Image-2024-08-14-at-01-35-07-66d24b0c.jpg",
    },
  ];
  return (
    <section className=" text-white mt-8 pb-14 max-w-7xl mx-auto">
      <h1 className="font-bold pb-8 text-[20px] lg:text-2xl pl-8">
        Connect with Our Team:{" "}
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-2 ml-2 ">
        {allAbout?.map((about) => (
          <AboutCard about={about} key={about?.id} />
        ))}
      </div>
      <div className="mb-8 mt-20 max-w-4xl lg:max-w-7xl mx-auto flex flex-col items-center gap-24 lg:flex-row">
        <div className="rounded-md border-x-2 m-4 border-[#1982C4] p-4">
          <div className="flex  p-4">
            <h3 className="flex items-center gap-4 text-[22px] font-bold text-[#1982C4] ">
              <GoGoal />
              What We Do
            </h3>
          </div>
          <p className="pb-4 text-justify">
            At Jersey Panda we specialize in crafting high-quality, custom
            jerseys that embody the spirit of sports and team pride. Our
            collections cater to athletes, fans, and sports enthusiasts who want
            to wear their passion on their sleeves—literally. From design to
            delivery, we focus on creating jerseys that not only look great but
            also offer comfort, durability, and performance.
          </p>
        </div>
        <div className="rounded-md border-x-2 m-4 border-[#1982C4] p-4">
          <div className="flex p-4">
            <h3 className="flex items-center gap-4 text-[22px] font-bold text-[#1982C4]">
              <GoGoal />
              What Our Goal
            </h3>
          </div>
          <p className="pb-4 text-justify">
            Our goal is simple: to be the go-to source for premium, custom-made
            jerseys that inspire pride and unity. We believe that a jersey is
            more than just a piece of clothing; it’s a symbol of identity,
            community, and passion. That’s why we strive to deliver products
            that not only meet but exceed our customers’ expectations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
