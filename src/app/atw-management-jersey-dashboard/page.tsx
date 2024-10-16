import Link from "next/link";
import React from "react";

const Dashboard = () => {
  const allDashBoardRoute = [
    {
      id: 1,
      name: "jersey",
      href: "/admin/all-jersey",
    },
    {
      id: 3,
      name: "Gallery",
      href: "/admin/all-gallery",
    },
    {
      id: 4,
      name: "Customize jersey",
      href: "/admin/customize-jersey",
    },
    {
      id: 4,
      name: "Football Item",
      href: "/admin/football-item",
    },
  ];
  return (
    <section className="max-w-6xl mx-auto pt-14 pb-14">
      <h1 className="text-4xl pb-6 fon-bold text-center">
        Welcome In Dashboard
      </h1>
      <div className="flex justify-center">
        <div className="flex flex-col gap-4 w-60 ">
          {allDashBoardRoute?.map((route) => (
            <div
              key={route?.id}
              className="bg-gray-700 font-bold p-2 rounded-md"
            >
              <Link href={route?.href}>
                <h2 className="text-center text-2xl">{route?.name}</h2>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
