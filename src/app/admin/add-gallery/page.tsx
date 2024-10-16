"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";

interface IFormInput {
  firstImage: FileList;
  secondImage: FileList;
}

const AddGallery = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      // Extract the first image file from the form data
      const firstImage = data.firstImage[0];
      const secondImage = data.secondImage[0];

      // Create a FormData object to upload to imgbb
      const formData = new FormData();
      formData.append("image", firstImage);

      // Upload the image to imgbb
      const imgUploadResponse = await axios?.post(
        "https://api.imgbb.com/1/upload?expiration=600&key=1f471dd54105935416929b8c41eb9f57",
        formData
      );

      const imageUrl = imgUploadResponse?.data?.data?.url;

      // Create a FormData object for the second image
      const secondFormData = new FormData();
      secondFormData.append("image", secondImage);

      // Upload the second image to imgbb
      const secondImgUploadResponse = await axios?.post(
        "https://api.imgbb.com/1/upload?expiration=600&key=1f471dd54105935416929b8c41eb9f57",
        secondFormData
      );

      const secondImageUrl = secondImgUploadResponse?.data?.data?.url;

      // Prepare the data to be sent to your backend
      const galleryData = {
        firstImage: imageUrl,
        secondImage: secondImageUrl,
      };

      console.log(galleryData);

      // Send the gallery data to your backend API
      const response = await axios?.post(
        "http://localhost:5000/api/v1/create-gallery",
        galleryData
      );

      console.log("Gallery data submitted successfully:", response.data);

      // Reset the form after successful submission
      reset();
    } catch (error) {
      console.error("Error submitting gallery data:", error);
    }
  };

  return (
    <section className="flex justify-center">
      <div className="relative m-10 rounded-lg shadow">
        <div className="ml-2 lg:ml-8">
          <h1 className="p-2 text-3xl font-bold text-center text-[#1982C4]">
            Add Your gallery
          </h1>
        </div>
        <div className="space-y-6 p-6">
          <form
            action="#"
            className="rounded-md p-6 shadow-sm shadow-[#1982C4]"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col gap-4 mb-2">
              <div>
                <label className="mb-2 flex items-center gap-3 text-[15px] font-medium text-white">
                  image
                </label>
                <input
                  {...register("firstImage", { required: true })}
                  type="file"
                  name="firstImage"
                  placeholder="image"
                  className="input input-bordered bg-gray-800 w-full max-w-xs"
                />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div>
                <label className="mb-2 flex items-center gap-3 text-[15px] font-medium text-white">
                  secondImage
                </label>

                <input
                  {...register("secondImage", { required: true })}
                  type="file"
                  name="secondImage"
                  placeholder="image"
                  className="input input-bordered bg-gray-800 w-full max-w-xs"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="mt-6  btn  border-none w-72 text-white font-bold bg-[#1982C4]"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddGallery;
