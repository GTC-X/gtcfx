import React from "react";
import Link from "next-intl/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import LiveAccountButton from "../../liveAccountButton";

const Banner = ({ title, subtitle, buttonText, buttonLink, imageUrl }) => {
  const path = usePathname();
  const isAr = path.includes('/ar');
  return (
    <div className="bg-gradient-to-r from-[#243586] from-10% via-[#222e73] via-30% to-[#141b43] py-10 lg:py-16 3xl:py-24 5xl:py-28 hero-section relative z-10">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className={`content-side text-center md:text-left md:pb-12 z-40 ${isAr ? 'md:text-right':'md:text-left'}`}>
            <h2 className={`pb-2 text-[1.5em] md:w-[450px] text-center  md:text-[3.5em] bg-gradient-to-b from-white to-secondary inline-block text-transparent bg-clip-text md:leading-[4rem] ${isAr ? 'md:text-right':'md:text-left'}`}>
              {title}
            </h2>
            <p className="text-white text-[1.25rem] pb-6">
              {subtitle}
            </p> 
            <LiveAccountButton hoverStyle="hover:bg-white hover:text-white" />
          </div>
          <div className="flex justify-end">
            <div className="relative w-full h-64 md:h-[400px] z-40">
              <Image src={imageUrl} fill alt="Banner Image" className="object-contain" />
            </div>
          </div>
        </div>
      </div>
      {<svg
        className="absolute bottom-0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 100"
        preserveAspectRatio="none"
      >
        <path fill="#FFFFFF" d="M500.2,94.7L0,0v100h1000V0L500.2,94.7z"></path>
      </svg> }
    </div>
  );
};

export default Banner;
