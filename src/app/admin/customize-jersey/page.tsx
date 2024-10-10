// /* eslint-disable @next/next/no-img-element */
// "use client";

// import Link from "next/link";
// import React from "react";
// import { useQuery, useQueryClient } from "@tanstack/react-query";
// import axios from "axios";

// export type TCustom = {
//   _id: string;
//   image: string;
// };

// const fetchGallery = async () => {
//   const response = await axios.get(
//     "https://panda-server-eight.vercel.app/api/v1/custom-jerseys"
//   );
//   // Adjust based on the actual structure of your API response
//   return response.data.data; // Assuming the data is inside a `data` property
// };

// const CustomizeJersey = () => {
//   const queryClient = useQueryClient();

//   const { data, isLoading, isError, error } = useQuery<TCustom[]>({
//     queryKey: ["custom"],
//     queryFn: fetchGallery,
//   });

//   const handleDelete = async (id: string) => {
//     try {
//       await axios.delete(
//         `https://panda-server-eight.vercel.app/api/v1/custom-jerseys/${id}`
//       );
//       queryClient.invalidateQueries({ queryKey: ["custom"] });
//     } catch (error) {
//       console.error("Error deleting custom item:", error);
//     }
//   };

//   if (isLoading) {
//     return <h1>Loading...</h1>;
//   }

//   if (isError) {
//     return <h1>Error: {error.message}</h1>;
//   }

//   return (
//     <section className="max-w-7xl mx-auto pb-8">
//       <div className="flex justify-between items-center mb-6">
//         <div>
//           <h1 className="font-bold text-2xl pb-8 pt-8 pl-10">
//             All Custom Jersey:
//           </h1>
//         </div>
//         <div>
//           <Link href="/admin/add-customize-jersey">
//             <button className="btn mr-8 bg-green-500 text-black  text-2xl border-none font-bold">
//               Add Custom Jersey
//             </button>
//           </Link>
//         </div>
//       </div>
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 ml-8 mr-8">
//         {Array.isArray(data) && data.length > 0 ? (
//           data.map((custom: TCustom) => (
//             <div key={custom?._id} className=" w-full lg:w-96">
//               <div className="flex justify-end gap-3 mb-2">
//                 <button
//                   onClick={() => handleDelete(custom._id)}
//                   className="btn border-none bg-red-500 text-white text-2xl"
//                 >
//                   Delete
//                 </button>
//               </div>
//               <div>
//                 <img className="rounded-md " src={custom.image} alt="" />
//               </div>
//             </div>
//           ))
//         ) : (
//           <p>No galleries found</p>
//         )}
//       </div>
//     </section>
//   );
// };

// export default CustomizeJersey;
