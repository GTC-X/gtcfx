import { createTranslator } from "next-intl";
import React from "react";
import DynamicLervagePage from "../pages/DynamicLervage";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../messages/${locale}.json`)).default;
  const t = createTranslator({ locale, messages });
  const url =
  locale != "en"
    ? `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/deposit`
    : `${process.env.NEXT_PUBLIC_BASE_URL}/deposit`;


  return {
    title: t("lervage.metaData.title"),
    description: t("lervage.metaData.des"),
    alternates: {
      canonical: url,
    },
  };
}
const Page = () => {
  return <DynamicLervagePage />;
};

export default Page;


