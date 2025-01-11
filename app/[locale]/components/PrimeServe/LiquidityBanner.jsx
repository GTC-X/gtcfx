"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import LocationContextProvider from "@/context/location-context";
import SimpleForm from "../common/SimpleForm";
import Image from "next/image";
import RemainIb from "../../pages/RemainIb";
import RemainLp from "../../pages/RemainLp";

const LiquidityBanner = ({
  backgroundImage = "/overlay.webp",
  imageSrc = "/IB-pic.webp",
}) => {
  const t = useTranslations("compaign.tradeWin.banner");

  // State to manage the active tab
  const [activeTab, setActiveTab] = useState("Liquidity Provider");

  // Content for each tab
  const tabContent = {
    "Liquidity Provider": {
      title: "GTCFX LIQUIDITY SOLUTIONS",
      subtitle: "Empower Your Trading with Deep Liquidity",
      description:
        "Tailored Liquidity Solutions Powered by Advanced Technology to Deliver Superior Trading Experiences for Global Professional Clients",
        tabName: "Register as Liquidity Client", // Custom Tab Name
    },
    "Introductory Broker": {
      title: "Become an Introducing Broker",
      subtitle: "Grow Your Clients Network With Us!",
      description:
        "Power up your business expansion and client network while maximizing the advantages of our IB program.",
        tabName: "Register as Introducing Broker", // Custom Tab Name
    },
  };

  // Get content for the active tab
  const { title, subtitle, description, tabName } = tabContent[activeTab];

  return (
    <>
      <LocationContextProvider>
        <section
          className="relative hero-banner py-8 md:py-10 lg:py-12 2xl:py-14 bg-gradient-to-t from-[#24358b] via-[#202766] to-[#141b43] border-y border-gray-200"
        >
          {/* Overlay Image */}
          <div
            className="absolute inset-0 z-0 bg-cover bg-repeat bg-top top-0"
            style={{
              backgroundImage: `url('${backgroundImage}')`,
              opacity: 0.5,
            }}
          />

          {/* Content */}
          <div className="relative z-10 container flex flex-col md:flex-row justify-between items-top h-full">
            {/* Tabs Section */}
            <div className="content-side text-center md:text-left pb-5 md:pb-0">
              {/* Tabs */}
              <div className="tabs flex space-x-4 pb-4 text-center justify-center md:justify-start">
                {Object.keys(tabContent).map((tabKey) => (
                  <button
                    key={tabKey}
                    className={`px-2 md:px-6 py-2 text-xs md:text-lg font-medium rounded-full ${
                      activeTab === tabKey
                        ? "bg-secondary text-white"
                        : "bg-gray-300 text-primary"
                    }`}
                    onClick={() => setActiveTab(tabKey)}
                  >
                    {tabContent[tabKey].tabName}
                  </button>
                ))}
              </div>
              <div className="pt-2 md:pt-28">
                {/* Dynamic Content */}
                <h4 className="text-white text-base md:text-2xl pb-2 capitalize">
                  {subtitle}
                </h4>
                <h2 className="bg-gradient-to-r from-secondary via-[#ffffffd4] to-secondary inline-block text-transparent bg-clip-text font-semibold text-xl xl:text-[30px] 2xl:text-[35px] max-w-xl leading-tight md:max-w-2xl uppercase">
                  {title}
                </h2>
                <p className="text-white text-xs max-w-2xl md:text-[20px] py-2 leading-6">
                  {description}
                </p>
              </div>
            </div>

            {/* Form and Image */}
            <div className="images-setting flex flex-row items-center justify-end">
            <SimpleForm activeTab={activeTab} />
              <div className="relative w-full h-[500px] hidden md:flex">
                <Image
                  src={imageSrc}
                  width={132}
                  height={500}
                  alt="Hero"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </section>
      </LocationContextProvider>

      {/* Conditional Content Below the Banner */}
      <div className="dynamic-content w-full">
        {activeTab === "Liquidity Provider" && <RemainLp />}
        {activeTab === "Introductory Broker" && <RemainIb />}
      </div>
    </>
  );
};

export default LiquidityBanner;
