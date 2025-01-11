import { createTranslator } from "next-intl";
import React from "react";
import PreciousMetalsPage from "../../pages/(products)/PreciousMetals";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../../messages/${locale}.json`)).default;
  const t = createTranslator({ locale, messages });
  const url =
  locale != "en"
    ? `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/precious-metals`
    : `${process.env.NEXT_PUBLIC_BASE_URL}/precious-metals`;

  return {
    title: t("Instruments.metaDetails.metals.title"),
    description: t("Instruments.metaDetails.metals.des"),
    alternates: {
      canonical: url,
    },
  };
}
const Page = () => {
  return <PreciousMetalsPage />;
};

export default Page;