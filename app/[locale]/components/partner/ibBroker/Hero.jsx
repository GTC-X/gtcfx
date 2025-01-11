"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import LocationContextProvider from "@/context/location-context";
import Link from "next/link";
import RegistrationPopup from "./RegistrationPopup";
import ClientRegistrationForm from "../../common/ClientRegistrationForm";
import Image from "next/image";
import LiveAccountButton from "../../liveAccountButton";


const TradeBanner = () => {
  const t = useTranslations("compaign.tradeWin.banner");
  
  return (
    <LocationContextProvider>
      <section className="relative hero-banner py-10 bg-gradient-to-t from-[#24358b] via-[#202766] to-[#141b43]">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center opacity-0"
          style={{ backgroundImage: `url('/banner-IB.webp')` }}
        />
        {/* Content */}
        <div className="relative z-10 container flex flex-col md:flex-row justify-between items-center h-full">
          <div className="content-side text-center md:text-left pb-16 md:pb-0">
            <h4 className="text-white text-base md:text-2xl pb-2 uppercase">
              Grow Your Clients Network With Us!
            </h4>
            <h2 className="bg-gradient-to-r from-secondary via-[#ffffffd4] to-secondary inline-block text-transparent bg-clip-text text-xl xl:text-[30px] 2xl:text-[45px] max-w-xl  leading-tight md:max-w-2xl">
              Become an <br></br> 
              <span className="font-[500] ">Introductory Broker and Unlock Unlimited Earning Potential!</span>
            </h2>
            <p className="text-white text-sm max-w-2xl md:text-[20px] py-2 uppercase leading-8">
              Power up your business expansion and client network while maximizing the advantages of our IB program.
            </p>
            <div className="mt-10">
                  <LiveAccountButton hoverStyle="text-white" />
            </div>

        
       
          </div>
          <div className="images-setting flex flex-row items-center justify-end">
              <ClientRegistrationForm showCountryField={true} showDropdown={false} />
              <div className="relative w-full h-[500px] hidden md:flex">
                <Image src="/IB-pic.webp" width={132} height={500} alt="IB" className="object-contain" />
              </div>
          </div>
          
           
        

        </div>
        <div id="register2"></div>
      </section>

    </LocationContextProvider>
  );
};

export default TradeBanner;

