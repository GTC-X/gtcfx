import { createTranslator } from "next-intl";
import React from "react";
import LiquidityProviderPage from "../pages/LiquidityProvider";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../messages/${locale}.json`)).default;
  const t = createTranslator({ locale, messages });
  const url =
    locale != "en"
      ? `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/wiki-expo`
      : `${process.env.NEXT_PUBLIC_BASE_URL}/wiki-expo`;

  return {
    title: 'Direct Access to Top Tier Liquidity Provider | GTCFX',
    description: 'Tailored Liquidity Solutions Powered by Advanced Technology to Deliver Superior Trading Experiences for Global Professional Clients.',
    alternates: {
      canonical: url,
    },
  };
}
const Page = () => {
  return <LiquidityProviderPage />;
};

export default Page;
