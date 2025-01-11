"use client";
import React from "react";

const AboutGTCFX = ({ sectionTitle, description1, description2, description3 }) => {
  return (
    <div className="bg-gradient-to-b from-gray-50 via-slate-50 to-white py-10 md:py-16">
      <div className="container">
        <div className="text-center">
          <h2 className="bg-gradient-to-r from-primary to-secondary inline-block font-semibold text-transparent bg-clip-text text-2xl lg:text-[2.5rem] 2xl:text-[30px] capitalize leading-normal xl:leading-[3rem] 3xl:leading-[4rem] mb-5">
            {sectionTitle}
          </h2>
        </div>
        <div className="max-w-4xl mx-auto">
          <p className="text-primary text-base text-center pb-4">
            {description1}
          </p>
          <p className="text-center font-medium text-lg">
            {description2}
          </p>
          <p className="text-sm text-center">
            {description3}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutGTCFX;
