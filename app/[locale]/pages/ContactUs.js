"use client";
import React from "react";
import { useTranslations } from "next-intl";
import ContactFrom from "../components/contactUs/ContactFrom";
import { SiLivechat } from "react-icons/si";
import { MdMarkEmailRead } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineContactPhone } from "react-icons/md";
import Link from "next/link";
import ToolFreeContact from "../components/contactUs/ToolFree";
import { BsWhatsapp } from "react-icons/bs";
import { TfiWrite } from "react-icons/tfi";



const ContactUsPage = () => {
  const t = useTranslations("about.contact-us"); 

  const tradingBenefits = [
    {
      text: t("live_chat"),
      icon: <SiLivechat />,
      link: "https://direct.lc.chat/13507356/", // Replace with actual live chat link
    },
    {
      text: t("support_email"),
      icon: <MdMarkEmailRead />,
      link: "mailto:support@gtcfx.com", // Replace with actual support email
    },
    {
      text: t("phone"),
      icon: <BsWhatsapp />,
      link: "https://api.whatsapp.com/send?phone=971800667788", // Replace with actual phone number
    },
  ];

  return (
    <>
      <section className="main-content py-12">
        <div className="container relative z-30">
          <div className="max-w-6xl mx-auto text text-left">
            <div className="flex flex-row items-center justify-start gap-2 md:mb-6">
              <p className="text-secondary text-4xl md:text-5xl">
                <MdOutlineContactPhone />
              </p>
              <h2 className="bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text HeadingH2 text-left mb-0">
                {t("title")}
              </h2>
            </div>

            <p className="py-3 ltr:text-left rtl:text-right">
              {t("sub_title1_1")}{" "}
            </p>
            <p className="py-3 ltr:text-left rtl:text-right">
              {t("sub_title1_2")}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 justify-center items-center gap-6 md:gap-8 pt-6">
              {tradingBenefits.map((benefit, index) => (
                <Link
                  key={index}
                  target="_blank"
                  href={benefit.link}
                  className={`flex bg-gray-100 items-center justify-center gap-2 px-3 md:px-12 py-2 md:py-3 group hover:bg-secondary rounded-3xl hover:rounded-3xl hover:cursor-pointer transition-all duration-300 hover:shadow-xl ${
                    index === tradingBenefits.length - 1
                      ? "md:col-span-1 col-span-2"
                      : "col-span-1"
                  }`}
                >
                  <span className="group-hover:text-[#FFF] text-lg md:text-2xl">
                    {benefit.icon}
                  </span>
                  <span className="text-primary group-hover:text-[#FFF] text-sm 2xl:text-[17px]">
                    {benefit.text}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ToolFreeContact />

      <section className="main-content pb-8 md:pb-20 2xl:pb-28">
      <div className="container relative z-30">
          <div className="max-w-6xl mx-auto text">
          <div className="flex flex-row items-center justify-start gap-2 mb-6">
              <p className="text-secondary text-4xl md:text-5xl">
                <TfiWrite />
              </p>
              <h2 className="bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text HeadingH2 text-left mb-0">
              {t("more_info")}
              </h2>
            </div>
                    <ContactFrom />
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUsPage;
