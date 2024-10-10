/* eslint-disable @next/next/no-img-element */
import React from "react";

export type TGallery = {
  image: string;
  secondImage: string;
};

const GalleryCard = ({ gallery }: { gallery: TGallery }) => {
  const { image, secondImage } = gallery;
  return (
    <div>
      <div className="diff aspect-[16/9]">
        <div className="diff-item-1">
          {" "}
          <img alt="daisy" src={secondImage} />
        </div>
        <div className="diff-item-2">
          <img alt="daisy" src={image} />
        </div>
        <div className="diff-resizer"></div>
      </div>
    </div>
  );
};

export default GalleryCard;
