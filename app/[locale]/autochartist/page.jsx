
import AutoChartist from "../pages/AutoChartist";
import { createTranslator } from "next-intl";

export async function generateMetadata({ params: { locale } }) {
    const messages = (await import(`../../../messages/${locale}.json`)).default;
    const t = createTranslator({ locale, messages });
    const url =
    locale != "en"
    ? `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/autochartist`
    : `${process.env.NEXT_PUBLIC_BASE_URL}/autochartist`;
  
    return {
      title: t("prime-tech.technicalTool.metaData.title"),
      description: t("prime-tech.technicalTool.metaData.des"),
      alternates: {
        canonical: url,
      },
    };
  }
const Page = () => {
  return <AutoChartist />;
};

export default Page;
