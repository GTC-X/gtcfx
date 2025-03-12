'use client'
import Hero from "./components/home/Hero";
import { useTranslations } from "next-intl";
import WhyGTC from "./components/home/WhyGTC";
import Markets from "./components/home/Markets";
import SecurityFund from "./components/home/SecurityFund";
import StatCounter from "./components/home/StatCounter";
import AOS from "aos";
import "aos/dist/aos.css";
import LocationContextProvider from "../../context/location-context";
import { LiveChatWidget } from "@livechat/widget-react";
import AssesAsset from "./components/home/AssesAsset";
import { useParams } from "next/navigation";
import ClientsNetwork from "./components/home/ClientsNetwork";
import ClientPayments from "./components/home/ClientPayments";
import LiquiditySolutions from "./components/home/LiquiditySolutions";
import TradingPlatform from "./components/home/TradingPlatform";
 
export default function HomePage() {
  const t = useTranslations("home"); 
  const statsOne = [
    { value: 985000, description: t("hero.fact_desc1"), prepend: "+" },
    { value: 27000, description: t("hero.fact_desc2"), symbol: "", prepend: false, },
    { value: 20, description: t("hero.fact_desc3"), bold: t("hero.fact_no3"), prepend: "+", },
    { value: 135, description: t("hero.fact_desc4"), bold: t("hero.fact_no4"), symbol: t("hero.fact_syn1"), prepend: "true", },

  ];
  const assetData = [
    {
      name: t("products.title1"),
      description: t("products.desc1"),
      imageUrl: "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/home/icon/icon1.webp",
      alt: "Forex"
    },
    {
      name: t("products.title2"),
      description: t("products.desc2"),
      imageUrl: "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/home/icon/icon7.webp",
      alt: "Crypto CFDs"
    },
    {
      name: t("products.title3"),
      description: t("products.desc3"),
      imageUrl: "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/home/icon/metal-icon.webp",
      alt: "Indices"
    },
    {
      name: t("products.title4"),
      description: t("products.desc4"),
      imageUrl: "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/home/icon/icon8.webp",
      alt: "CFDs"
    },
    {
      name: t("products.title5"),
      description: t("products.desc5"),
      imageUrl: "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/home/icon/icon6.webp",
      alt: "Commodities"
    }, {
      name: t("products.title6"),
      description: t("products.desc6"),
      imageUrl: "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/home/icon/icon5.webp",
      alt: "Indices"
    }, {
      name: t("products.title7"),
      description: t("products.desc7"),
      imageUrl: "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/home/icon/icon4.webp",
      alt: "Indices"
    },
    {
      name: t("products.title8"),
      description: t("products.desc8"),
      imageUrl: "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/home/icon/icon3.webp",
      alt: "Indices"
    },
  ];

  return (
    <>
        <LocationContextProvider>
        <Hero />
        <StatCounter stats={statsOne} />
        <WhyGTC />
        <LiquiditySolutions />
        <TradingPlatform />
        <SecurityFund />
        <Markets /> 
        <ClientsNetwork />
        <ClientPayments />
        {/* <CompanyNews/> */}
      </LocationContextProvider>
    </>
  );
}
