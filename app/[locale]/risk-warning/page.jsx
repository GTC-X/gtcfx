import { createTranslator } from "next-intl";
import React from "react";
import RiskWarningPage from "../pages/RiskWarning";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../messages/${locale}.json`)).default;
  const t = createTranslator({ locale, messages });
  const url =
  locale != "en"
    ? `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/risk-warning`
    : `${process.env.NEXT_PUBLIC_BASE_URL}/risk-warning`;


  return {
    title: t("footerPage.riskWarning.metaData.title"),
    description: t("footerPage.riskWarning.metaData.des"),
    alternates: {
      canonical: url,
    },
  };
}
const Page = () => {
  return <RiskWarningPage />;
};

export default Page;