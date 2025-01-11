"use client";
import React from "react";
import Hero from "../components/common/Hero";
import { useTranslations } from "next-intl";
import Link from "next/link";

const RiskWarningPage = () => {
  const t = useTranslations("footerPage");

  return (
    <>
      <Hero
        imageUrl="/banner/faq.webp"
        title={t("riskWarning.bannerText.heading")}
        description={t("riskWarning.bannerText.description")}
      />
      <div className="inner-content py-10">
        <div className="container">
          {/* <h2 className="HeadingH2">{t("riskWarning.content.mainHeading")}</h2> */}
          <div className="inside-content mt-5 text-base leading-6">
            {/* <h4 className="text-lg font-medium my-3">
              {" "}
              {t("riskWarning.content.riskWarning")}
            </h4> */}
            <p className="mb-2"> {t("riskWarning.content.contentrisk")}</p>
            <p className="mb-2"> {t("riskWarning.content.contentrisk2")}</p>
            <h4 className="text-lg font-medium my-3">
              {" "}
              {t("riskWarning.content.highRisk")}
            </h4>
            <p> {t("riskWarning.content.highcontentrisk")}</p>
            <h3 className="HeadingH3">
              {t("riskWarning.content.interpretationHeading")}
            </h3>
            <h4 className="text-lg font-medium my-3">
              {" "}
              {t("riskWarning.content.subheading")}
            </h4>
            <p className="mb-2">{t("riskWarning.content.contentinter")}</p>
            <p className="mb-2">{t("riskWarning.content.contentinter2")}</p>
            <h4 className="text-lg font-medium my-3">
              {" "}
              {t("riskWarning.content.definitions")}
            </h4>
            <p> {t("riskWarning.content.definitionscontent")}</p>
            <ul className="list-disc ml-7 text-base text-primary py-5 leading-7">
             <li><strong>{t("riskWarning.content.option.point1.bold")} </strong>{t("riskWarning.content.option.point1.normal")}</li>
             <li><strong>{t("riskWarning.content.option.point2.bold")} </strong>{t("riskWarning.content.option.point2.normal")}</li>
             <li><strong>{t("riskWarning.content.option.point3.bold")} </strong>{t("riskWarning.content.option.point3.normal")}</li>
             <li><strong>{t("riskWarning.content.option.point4.bold")} </strong>{t("riskWarning.content.option.point4.normal")} <Link href="https://gtcfx.com/"  className="text-secondary">https://gtcfx.com/</Link></li>
            </ul>
            
            <h3 className="HeadingH3">
              {t("riskWarning.content.desclamir.lable")}
            </h3>
            <p className="mb-2">{t("riskWarning.content.desclamir.para1")}</p>
            <p className="mb-2">{t("riskWarning.content.desclamir.para2")}</p>
            <p className="mb-2">{t("riskWarning.content.desclamir.para3")}</p>
            <p className="mb-2">{t("riskWarning.content.desclamir.para4")}</p>
            <h3 className="HeadingH3">
              {t("riskWarning.content.exterDesclamir.lable")}
            </h3>
            <p className="mb-2">{t("riskWarning.content.exterDesclamir.para1")}</p>
            <p className="mb-2">{t("riskWarning.content.exterDesclamir.para2")}</p>
            <h3 className="HeadingH3">
              {t("riskWarning.content.errorDesclamir.lable")}
            </h3>
            <p className="mb-2">{t("riskWarning.content.errorDesclamir.para1")}</p>
            <p className="mb-2">{t("riskWarning.content.errorDesclamir.para2")}</p>
            <h3 className="HeadingH3">
              {t("riskWarning.content.fairDesclamir.lable")}
            </h3>
            <p className="mb-2">{t("riskWarning.content.fairDesclamir.para1")}</p>
            <p className="mb-2">{t("riskWarning.content.fairDesclamir.para2")}</p>
            <p className="mb-2">{t("riskWarning.content.fairDesclamir.para3")}</p>
            <h3 className="HeadingH3">
              {t("riskWarning.content.viewDesclamir.lable")}
            </h3>
            <p className="mb-2">{t("riskWarning.content.viewDesclamir.para1")}</p>
            <p className="mb-2">{t("riskWarning.content.viewDesclamir.para2")}</p>
            <h3 className="HeadingH3">
              {t("riskWarning.content.noDesclamir.lable")}
            </h3>
            <p className="mb-2">{t("riskWarning.content.noDesclamir.para1")}</p>
            <p className="mb-2">{t("riskWarning.content.noDesclamir.para2")}</p>
            
            <h3 className="HeadingH3">
              {t("riskWarning.content.useDesclamir.lable")}
            </h3>
            <p className="mb-2">{t("riskWarning.content.useDesclamir.para1")}</p>
            <p className="mb-2">{t("riskWarning.content.useDesclamir.para2")}</p>
            
            <h3 className="HeadingH3">
              {t("riskWarning.content.contact.lable")}
            </h3>
            <p className="mb-2">{t("riskWarning.content.contact.para1")}</p>
            <ul className="list-disc ml-7 text-base text-primary py-5 leading-7">
             <li><strong></strong>{t("riskWarning.content.contact.para2")}</li>
             <li><strong> </strong>{t("riskWarning.content.contact.para3")} <Link href="https://gtcfx.com/" className="text-secondary">https://gtcfx.com/contact-us/</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default RiskWarningPage;
