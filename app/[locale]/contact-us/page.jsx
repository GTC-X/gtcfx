import { createTranslator } from "next-intl";
import React from "react";
import ContactUsPage from "../pages/ContactUs";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../messages/${locale}.json`)).default;
  const t = createTranslator({ locale, messages });
  const url =
  locale != "en"
    ? `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/contact-us`
    : `${process.env.NEXT_PUBLIC_BASE_URL}/contact-us`;


  return {
    title: t("about.contact-us.metaData.title"),
    description: t("about.contact-us.metaData.des"),
    alternates: {
      canonical: url,
    },
  };
}
const Page = () => {
  return <ContactUsPage />;
};

export default Page;
