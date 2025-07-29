import React, { useContext } from 'react';
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next-intl/client";
import Link from "next-intl/link";
import { MdOutlineLogin } from "react-icons/md";
import Language from "./Language";
import { useLocationDetail } from "@/context/useLocationDetail";
import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
const TopBar = ({ currentLanguage, isAr, href }) => {
    const t = useTranslations("navigation");
     const t2 = useTranslations("footerLink");
    const router = useRouter();
    const locale = useLocale();
    const location = useContext(useLocationDetail);
    const { countryCode } = useLocationDetail();

    // Define region-specific conditions
    const europeanCountries = ['AT', 'BE', 'BG', 'CY', 'CZ', 'DE', 'DK', 'EE', 'ES', 'FI', 'FR', 'GR', 'HR', 'HU', 'IE', 'IT', 'LT', 'LU', 'LV', 'MT', 'NL', 'PL', 'PT', 'RO', 'SE', 'SI', 'SK'];
    
    const isEuropean = countryCode && europeanCountries.includes(countryCode);
    const isChilean = countryCode === 'CL'; // Check if the country is Chile
    const isJapanese = countryCode === 'JP';
    const isIranianOrFarsi = countryCode === 'IR' || locale === 'fa-IR'; // Check for Iran or Farsi language

    // Define base links for different regions
    const baseLink = (() => {
        if (isIranianOrFarsi) {
            return 'https://mygtcfx.com/getview?view=register&token=exhowww.z8owwwww'; // Iranian or Farsi
        } else if (isEuropean) {
            return 'https://mygtcfx.com/getview?view=register&token=exhowww.z8owwwww'; // European
        } else if (isChilean) {
            return 'https://mygtcfx.com/getview?view=register&token=exhowww.z8owwwww'; // Chilean token
        } else if (countryCode === 'JP') {
            return 'https://mygtcfx.com/getview?view=register&token=exhowww.z8owwwww'; // Japanese
        } else if (countryCode === 'PK') {
            return 'https://mygtcfx.com/getview?view=register&token=exhowww.z8owwwww'; // Pakistani
        } else if (countryCode === 'IN') {
            return 'https://mygtcfx.com/getview?view=register&token=exhowww.z8owwwww'; // Indian
        } else {
            return 'https://mygtcfx.com/getview?view=register&token=exhowww.z8owwwww'; // Default
        }
    })();

    const baseLink2 = isEuropean ? 'https://my.gtcfx.com' : isJapanese ? 'https://mygtcportal.com' : 'https://mygtcportal.com';
    
    const newClientPortalLink = `${baseLink2}/`;
    const accountLink = `${baseLink}`;
    const registerLink = `${baseLink}`;

    return (
        <section className="hidden md:block border-b border-gray-200 bg-primary text-white" id="register1">
            <div className="container flex flex-row justify-between items-center">
            <div className="content-top flex flex-row gap-2">
  <p className="text-[14px] font-[400] flex items-center gap-4 py-3">
   
    {/* White separator line */}
 
    <Link href="mailto:support@gtcfx.com" className="flex items-center gap-2 hover:text-secondary text-sm">
      <MdEmail /> {t2("contact.menu2")} support@gtcfx.com
    </Link>
     <span className="h-4 border-l border-white"></span>
     <Link
       href="https://wa.me/448000488461"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 hover:text-secondary text-sm"
    >
      <FaWhatsapp /> +44 800 048 8461
    </Link>
  </p>
</div>

                <div className={`flex items-center gap-2 ${isAr ? "rtl:md:mr-4" : "ltr:md:ml-4"}`}>
                    <div className="flex flex-col lg:flex-row">
                        <Link href='https://mygtcfx.com' target="_blank" className="hidden text-white uppercase hover:bg-white hover:text-secondary text-sm border border-gray-200 px-3 py-[6px] md:flex gap-2 items-center">
                            <MdOutlineLogin size={20} />
                            {t("new_client_portal")} 1
                        </Link>
                    </div>
                    <div className="flex flex-col lg:flex-row">
                        <Link href='https://web.mygtc.app/login/login' target="_blank" className="hidden text-white uppercase hover:bg-white hover:text-secondary text-sm border border-gray-200 px-3 py-[6px] md:flex gap-2 items-center">
                            <MdOutlineLogin size={20} />
                            {t("new_client_portal")} 2
                        </Link>
                    </div>
                    <div className="flex flex-col lg:flex-row">
                        <Link href='https://mygtcfx.com/getview?view=register&token=exhowww.z8owwwww' target="_blank" className="hidden text-white uppercase bg-[#29a643] hover:bg-white hover:text-primary text-sm border border-gray-200 px-3 py-[6px] md:flex gap-2 items-center">
                            {t("tobbar.account")}
                        </Link>
                    </div>
                    <div className="flex flex-col lg:flex-row">
                        <Link href='/introductory-broker' className="hidden text-white uppercase bg-secondary hover:bg-primary hover:text-white text-sm border border-gray-200 px-3 py-[6px] md:flex gap-2 items-center">
                            {t("tobbar.rgister")}
                        </Link>
                    </div>
                    <Language href={href} currentLanguage={currentLanguage}/>
                </div>
            </div>
        </section>
    );
};

export default TopBar;
