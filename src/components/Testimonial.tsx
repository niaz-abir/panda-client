import React from "react";
import Marquee from "react-fast-marquee";
import TestimonialCard from "./card/testimonialCard";

export default function Testimonial() {
  const allTestimonial = [
    {
      id: 1,
      name: "Ahsan Habib",
      image:
        "https://i.ibb.co/9hxjpKw/jeffrey-keenan-p-Uhxo-Sap-PFA-unsplash-1.jpg",
      review:
        "This is a great platform .We are happy about there service. Wearing clothes makes me great .Thank you for your service.",
      date: "04-05-2002",
    },
    {
      id: 1,
      name: "Ahsan Habib",
      image:
        "https://i.ibb.co/9hxjpKw/jeffrey-keenan-p-Uhxo-Sap-PFA-unsplash-1.jpg",
      review:
        "This is a great platform .We are happy about there service. Wearing clothes makes me great .Thank you for your service.",
      date: "04-05-2002",
    },
    {
      id: 1,
      name: "Ahsan Habib",
      image:
        "https://i.ibb.co/9hxjpKw/jeffrey-keenan-p-Uhxo-Sap-PFA-unsplash-1.jpg",
      review:
        "This is a great platform .We are happy about there service. Wearing clothes makes me great .Thank you for your service.",
      date: "04-05-2002",
    },
    {
      id: 1,
      name: "Ahsan Habib",
      image:
        "https://i.ibb.co/9hxjpKw/jeffrey-keenan-p-Uhxo-Sap-PFA-unsplash-1.jpg",
      review:
        "This is a great platform .We are happy about there service. Wearing clothes makes me great .Thank you for your service.",
      date: "04-05-2002",
    },
    {
      id: 1,
      name: "Ahsan Habib",
      image:
        "https://i.ibb.co/9hxjpKw/jeffrey-keenan-p-Uhxo-Sap-PFA-unsplash-1.jpg",
      review:
        "This is a great platform .We are happy about there service. Wearing clothes makes me great .Thank you for your service.",
      date: "04-05-2002",
    },
    {
      id: 1,
      name: "Ahsan Habib",
      image:
        "https://i.ibb.co/9hxjpKw/jeffrey-keenan-p-Uhxo-Sap-PFA-unsplash-1.jpg",
      review:
        "This is a great platform .We are happy about there service. Wearing clothes makes me great .Thank you for your service.",
      date: "04-05-2002",
    },
    {
      id: 1,
      name: "Ahsan Habib",
      image:
        "https://i.ibb.co/9hxjpKw/jeffrey-keenan-p-Uhxo-Sap-PFA-unsplash-1.jpg",
      review:
        "This is a great platform .We are happy about there service. Wearing clothes makes me great .Thank you for your service.",
      date: "04-05-2002",
    },
    {
      id: 1,
      name: "Ahsan Habib",
      image:
        "https://i.ibb.co/9hxjpKw/jeffrey-keenan-p-Uhxo-Sap-PFA-unsplash-1.jpg",
      review:
        "This is a great platform .We are happy about there service. Wearing clothes makes me great .Thank you for your service.",
      date: "04-05-2002",
    },
  ];
  return (
    <section className=" text-white pt-14 pb-14">
      <div>
        <h1 className="text-center font-bold pb-6 pt-4 text-[20px] lg:text-2xl">
          All Testimonial from people
        </h1>
        <Marquee>
          {allTestimonial?.map((testimonial) => (
            <TestimonialCard key={testimonial?.id} testimonial={testimonial} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
