"use client";
import React from "react";
import Hero from "../components/common/Hero";
import { useTranslations } from "next-intl";
import { usePathname } from 'next/navigation';

const RestrictedCountriesPage = () => {
  const t = useTranslations("footerPage");
  const path= usePathname();
  const isAr = path.includes('/ar');

  // Content array
  const content = [
    t("restrictedCountry.content.option.one"),

    t("restrictedCountry.content.option.six"),
  ];

  const country = [
    t("restrictedCountry.content.list.one"),
    t("restrictedCountry.content.list.two"),
    t("restrictedCountry.content.list.three"),
    t("restrictedCountry.content.list.four"),
    t("restrictedCountry.content.list.five"),
    t("restrictedCountry.content.list.six"),
    t("restrictedCountry.content.list.seven"),
    t("restrictedCountry.content.list.eight"),
    t("restrictedCountry.content.list.nine"),
    t("restrictedCountry.content.list.ten"),
    t("restrictedCountry.content.list.eleven"),
    t("restrictedCountry.content.list.twelve"),
    t("restrictedCountry.content.list.thirty"),
    t("restrictedCountry.content.list.foutry"),
    t("restrictedCountry.content.list.fifty"),
    t("restrictedCountry.content.list.fifty1"),
    t("restrictedCountry.content.list.sixty"),
    t("restrictedCountry.content.list.seventy"),
    t("restrictedCountry.content.list.eighty"),
    t("restrictedCountry.content.list.ninty"),
    t("restrictedCountry.content.list.tten"),
    t("restrictedCountry.content.list.oneOne"),
    t("restrictedCountry.content.list.oneTwo"),
  ];

  return (
    <> 
      <Hero
        imageUrl="/trading/banner/latest-news.webp"
        title={t("restrictedCountry.bannerText.heading")}
        description={t("restrictedCountry.bannerText.description")}
      />
      <div className="inner-content py-10">
        <div className="container">
          <h2 className="HeadingH2">
            {t("restrictedCountry.content.mainHeading")}
          </h2>
          <h3 className="HeadingH3 font-medium">
            {t("restrictedCountry.content.subHeading")}
          </h3>
          <ul className={`list-disc text-lg text-primary ${isAr ? 'mr-7':'ml-7'} `}>
            {content.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <div className="my-4 text-primary text-xl">
          {t("restrictedCountry.content.detail")}
          </div>
          <ul className={`list-disc text-lg text-primary ${isAr ? 'mr-7':'ml-7'} `}>
            {country.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default RestrictedCountriesPage;
