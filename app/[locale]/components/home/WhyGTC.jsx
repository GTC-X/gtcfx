import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { GrAction } from "react-icons/gr";
import { BiCandles } from "react-icons/bi";
import { GiUnbalanced } from "react-icons/gi";
import { RxRocket } from "react-icons/rx";
import LiveAccountButton from "../liveAccountButton";





const WhyGTC = () => {
  const t = useTranslations("home.whyGTC");
  const featuresColumn1 = [
    {
      icon: <GrAction />,
      miniheading: t("first.title"), 
      heading: t("first.heading"),
      text: t("first.description"),
    },
    {
        icon: <BiCandles />,
        miniheading: t("second.title"), 
        heading: t("second.heading"),
        text: t("second.description"),
    }, 
  ];

  const featuresColumn2 = [
    {
      icon: <GiUnbalanced />,
      miniheading: t("third.title"), 
      heading: t("third.heading"),
      text: t("third.description"),
    },
    {
      icon: <RxRocket />,
      heading: "Ultra-fast Execution",
      miniheading: t("fourth.title"), 
      heading: t("fourth.heading"),
      text: t("fourth.description"),
    },
  ];

  return (
    <section className="md:py-16 3xl:py-28 py-8 px-5 text-center bg-[url('/BG-11.webp')] bg-cover bg-center"> 
      <div className="container">
        <h2 className="HeadingH2 bg-gradient-to-r from-white to-secondary inline-block text-transparent bg-clip-text">{t("title")}</h2>
        <p className="text-white md:text-base 2xl:text-[17px] text-sm text-center">
          {t("desc")}
        </p>
        <div className="flex flex-row items-center justify-between gap-2 md:gap-4 pt-10">
          <div className="basis-full md:basis-1/5 flex flex-col gap-6 md:gap-24 justify-around items-center">
            {featuresColumn1.map((feature, index) => (
              <div
                key={index}
                className="text-center md:flex md:flex-col items-center justify-center gap-3 md:w-96"
              >
                <button className="bg-gray-400 text-sm rounded-full text-white px-3 h-6 mb-3">
                  {feature.miniheading}
                </button>
                <h3 className="text-secondary md:text-lg xl:text-xl 3xl:text-[24px] text-xs  m-0 p-0 text-center pb-4 flex gap-2 items-center ">
                    <p className="text-white text-2xl md:text-5xl">{feature.icon}</p>
                    {feature.heading}
                </h3>
                <p className=" text-[#fff] md:text-base xl:text-lg 3xl:text-[17px] text-[9px] m-0 text-center">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
          <div className="hidden md:block md:basis-4/5 relative w-full h-64 md:h-[700px]">
            <Image
              src="/newmobile.webp"
              alt="Invest with GTC"
              fill
              className="object-contain"
            />
          </div>
          <div className="basis-full md:basis-1/5 flex flex-col gap-6 md:gap-24 justify-center items-center">
            {featuresColumn2.map((feature, index) => (
              <div
                key={index}
                className="text-center flex flex-col md:flex-col items-center justify-center md:gap-1 md:w-96"
              >
                <button className="bg-gray-400 rounded-full text-white px-3 h-6 mb-3">
                  {feature.miniheading}
                </button>
                <h3 className="text-secondary md:text-lg xl:text-xl 3xl:text-[24px] text-xs  m-0 p-0 text-center pb-4 flex gap-2 items-center ">
                <p className="text-white text-2xl md:text-5xl">{feature.icon}</p>
                  {feature.heading}
                </h3>
                <p className="text-[#fff] md:text-base xl:text-lg 3xl:text-[17px] text-[9px] m-0 text-center">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="container text-white flex flex-col justify-center items-center py-4  gap-2 md:gap-4 text-xs md:text-base 2xl:text-[17px]">
          <p>{t("desc2")}</p>{" "}
         <LiveAccountButton hoverStyle="bg-gradient-to-b from-white via-white from-10% to-white to-90% text-[#000] hover:text-white"
         />
        </div>
      </div>
    </section>
  );
};

export default WhyGTC;
