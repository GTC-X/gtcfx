import { createTranslator } from "next-intl";
import React from "react";
import CareerPage from "../pages/careers";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../messages/${locale}.json`)).default;
  const t = createTranslator({ locale, messages });
  const url =
    locale != "en"
      ? `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/careers`
      : `${process.env.NEXT_PUBLIC_BASE_URL}/careers`;
  return {
    title: t("about.careers.metaData.title"),
    description: t("about.careers.metaData.des"),
    alternates: {
      canonical: url,
    },
  };
}
const Page = () => {
  return <CareerPage />;
};

export default Page;
