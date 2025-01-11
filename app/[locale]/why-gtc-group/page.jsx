import { createTranslator } from "next-intl";
import React from "react";
import WhyGtcGroup from '../pages/WhyGtcGroup'

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../messages/${locale}.json`)).default;
  const t = createTranslator({ locale, messages });
  const url =
    locale != "en"
      ? `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/why-gtc-group`
      : `${process.env.NEXT_PUBLIC_BASE_URL}/why-gtc-group`;

  return {
    title: t("about.why-gtc-group.metaData.title"),
    description: t("about.why-gtc-group.metaData.des"),
    alternates: {
      canonical: url,
    },
  };
}
const Page = () => {
  return <WhyGtcGroup />;
};

export default Page;
