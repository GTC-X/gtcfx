"use client";
import { useTranslations } from "next-intl";
import Banner from "../components/account/LiveDemo/Banner";
import DemoAccountBoxes from "../components/account/LiveDemo/DemoAccountBoxes";
import MainForm from "../components/common/MainForm";
import LocationContextProvider from "@/context/location-context";
import WhyChooseIcon from "../components/about/WhyChooseIcon";


const DemoAccountPage = () => {
  const t = useTranslations("accounts");

  return (
    <>
    <LocationContextProvider>
      <Banner
        title={t("demoAccount.bannerText.heading")}
        subtitle={t("demoAccount.bannerText.description")}
        buttonText={t("demoAccount.bannerText.buttonText")}
        buttonLink="https://my.gtcfx.com/getview?view=register"
        imageUrl="/account/live-account-mobile.webp"
      />
     <section className="top-content py-10 2xl:py-12 3xl:py-16 relative z-30">
          <div className="container">
            <WhyChooseIcon /> 
          </div>
        </section>
      <MainForm/>
   
      </LocationContextProvider>
    </>
  );
};

export default DemoAccountPage;
  