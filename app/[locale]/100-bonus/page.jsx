import React from 'react';
import { createTranslator } from "next-intl";
import HundredCreditBonus from '../pages/HundredCreditBonus';

export async function generateMetadata({ params: { locale } }) {
 const messages = (await import(`../../../messages/${locale}.json`)).default;
 const t = createTranslator({ locale, messages });
 const url =
 locale != "en"
   ? `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/100-bonus`
   : `${process.env.NEXT_PUBLIC_BASE_URL}/100-bonus`;
  
 return {
  title: t("compaign.tradeWin.metaData.title"),
  description: t("compaign.tradeWin.metaData.des"),
  alternates: {
    canonical: url,
  },
  };
}

const page = () => {
  return (
    <>
    <HundredCreditBonus/> 

    </>
  )
}

export default page;