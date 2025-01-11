"use client";
import { useTranslations } from "next-intl";
import LocationContextProvider from "@/context/location-context";
import TradeForm from "./TraderForm";


const TradeBanner = () => {
  const t = useTranslations("compaign.tradeWin.banner");

  return (
    <LocationContextProvider>
      <section className="relative hero-banner py-5 bg-gradient-to-t from-[#24358b] via-[#202766] to-[#141b43] border-y border-gray-200">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: `url('https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/trading.jpg')` }}
        />
        {/* Content */}
        <div className="relative z-10 container flex flex-col md:flex-row justify-between items-center h-full">
          <div className="basis-full md:basis-1/2 content-side text-center ltr:md:text-left rtl:md:text-right">
            <h4 className="text-white text-base md:text-2xl pb-2">
             {t("title")}
            </h4>
            <h2 className="bg-gradient-to-t from-white to-secondary inline-block text-transparent bg-clip-text text-2xl font-[600] xl:text-[30px] 2xl:text-[50px] capitalize max-w-xl leading-tight md:max-w-2xl">
            {t("subtitle")}
            </h2>
            <p className="text-white text-sm max-w-xl md:text-lg py-2">
            {t("description")}
            </p>
            <div className="flex flex-col gap-2 text-base md:text-xl pt-4 text-gray-200">
              <p>{t("validUntil")}</p>
              <p className="flex flex-row justify-start items-center gap-4 py-2">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("register3")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="bg-gradient-to-b from-[#202d7bdb] via-[#050331] to-[#05033162] rounded-lg shadow-lg overflow-hidden text-white 3xl:text-xl px-8 py-3 text-center md:w-auto w-[300px] md:m-0 mx-auto transition-colors duration-900 hover:bg-gradient-to-b hover:from-secondary hover:to-primary duration-500 hover:text-white"
                >
                        {t("tc")}
                </button>
              </p>
             
            </div>
          </div>
          
          
          <TradeForm />
          
        </div>
        <div id="register2"></div>
      </section>
    </LocationContextProvider>
  );
};

export default TradeBanner;
