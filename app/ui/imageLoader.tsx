"use client";
import { useState } from "react";
import Image from "next/image";
import clsx from "clsx";

interface ImageWithLoaderProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  classname: string;
}

const ImageWithLoader: React.FC<ImageWithLoaderProps> = ({
  src,
  alt,
  width,
  classname,
  height,
}) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoaded = () => {
    setIsLoading(false);
  };

  return (
    <div
      className={clsx("relative transition-all duration-500", {
        "blur-md bg-neutral-100": isLoading,
        "blur-0": !isLoading,
      })}
    >
      <Image
        className={clsx(classname)}
        src={src}
        alt={alt}
        width={width}
        height={height}
        onLoad={handleImageLoaded}
      />
    </div>
  );
};
export default ImageWithLoader;
