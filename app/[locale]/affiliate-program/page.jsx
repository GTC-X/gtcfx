import { createTranslator } from "next-intl";
import React from "react";
import AffiliateProgramPage from "../pages/AffiliateProgram";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../messages/${locale}.json`)).default;
  const t = createTranslator({ locale, messages });
  const url =
  locale != "en"
    ? `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/affiliate-program`
    : `${process.env.NEXT_PUBLIC_BASE_URL}/affiliate-program`;

  return {
    title: t("partner.affiliateProgram.metaData.title"),
    description: t("partner.affiliateProgram.metaData.des"),
    alternates: {
      canonical: url,
    },
  };
}
const Page = () => {
  return <AffiliateProgramPage />;
};

export default Page;
