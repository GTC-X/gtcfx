"use client";
import ForexTradingAdv from "@/app/[locale]/components/account/forex/ForexTradingAdv";
import ForexSpreadTable from "@/app/[locale]/components/account/forex/ForexSpreadTable";
import ProductsFAQ from "@/app/[locale]/components/account/forex/ProductsFAQ";
import ProductsBanner from "@/app/[locale]/components/account/forex/ProductsBanner";
import ProductsImageContent from "@/app/[locale]/components/account/forex/ForexImageContent";
import { useTranslations } from "next-intl";

const ForexPage = () => {
  const t = useTranslations("Instruments.forex");
  const ContentData = [
    {
      image: {
        src: "/account/forex/forex-banner.webp",
        width: "500",
        height: "450",
        alt: "Forex",
      },
      title: t("title4"),
      description: `${t("desc4_1")} <br />
      <br />
    ${t("desc4_2")}`,
    },
    {
      image: {
        src: "/account/forex/mobiles.webp",
        width: "500",
        height: "450",
        alt: "Forex",
      },
      title: t("title5"),
      description: t("desc5"),
    },
    {
      image: {
        src: "/account/forex/laptop.webp",
        width: "500",
        height: "450",
      },
      title: t("title6"),
      description: `${t("desc6_1")}<br/><br/>${t("desc6_2")}`,
    },
  ];
  const faqs = [
    {
      title: t("faq1Q"),
      paragraphs: [
        t("faq1A1_1"),
        `${t("faq1A1_2")}`,
        `${t("faq1A1_3")}<br />
                 ${t("faq1A1_4")}   `,
      ],
    },
  ];
  const advData = [
    {
      title: t("adv1_1"),
      subtitle: t("adv1_2"),
      image: {
        src: "/account/forex/spread.webp",
        width: "245",
        height: "245",
      },
    },
    {
      title: t("adv2_1"),
      subtitle: t("adv2_2"),
      image: {
        src: "/account/forex/leverage.webp",
        width: "245",
        height: "245",
      },
    },
    {
      title: t("adv3_1"),
      subtitle: t("adv3_2"),
      image: {
        src: "/account/forex/execution.webp",
        width: "245",
        height: "245",
      },
    },
    {
      title: t("adv4_1"),
      subtitle: t("adv4_2"),
      image: {
        src: "/account/forex/protection.webp",
        width: "245",
        height: "245",
      },
    },
   
  ];
  return (
    <>
      <ProductsBanner
        title={t('bannerTitle')}
        subtitle={
          t("bannerDesc")
        }
        image={{
          src: "/account/forex/currencies-image.webp",
          alt: "Forex Banner",
        }}
        className={"pt-10"}
      />
      <ForexTradingAdv data={advData} className={"mt-8 lg:mt-10 bg-primary rounded-xl p-6"} />
      {/* <ForexSpreadTable className={"mt-8 lg:mt-20"} /> */}
      <ProductsImageContent className={"mt-8 lg:mt-20"} data={ContentData} />
      <ProductsFAQ className={"mt-8 lg:mt-20"} faqs={faqs} />
    </>
  );
};

export default ForexPage;
