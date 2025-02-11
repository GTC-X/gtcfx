"use client";
import React, { useContext, useEffect, useState } from "react";
import Link from "next-intl/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import { LocationContext } from "@/context/location-context";
import { useRouter } from "next-intl/client";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const Language = (props) => {
  const { currentLanguage } = props;
  const locale = useLocale();
  const pathname = usePathname();
  const isAr = pathname.includes("/ar-AE");
  const router = useRouter();
  const pathnameWithoutLocale = pathname.replace(`/${locale}`, "");
  const location = useContext(LocationContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const languages = [
    { code: "en", label: "English", flagSrc: "/en.webp" },
    { code: "id-ID", label: "Bahasa", flagSrc: "/id-ID.webp" },
       // Add more languages as needed
  ];

  return (
    <div className="dropdown dropdown-hover z-50 relative">
      <button
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="bg-white text-primary border border-gray-200 px-2 py-[6px] text-sm flex justify-start items-center gap-2 cursor-pointer capitalize"
      >
        <Image
          src={`/${locale || "en"}.webp`}
          width={28}
          height={16}
          alt={locale.toLowerCase()}
        />
        {dropdownOpen ? <FaAngleUp /> : <FaAngleDown />}
      </button>
      {dropdownOpen && (
        <ul
          tabIndex={0}
          className="dropdown-content z-[99] pt-1 mt-1 language-setting menu shadow bg-white border border-gray-300 absolute rounded-none md:w-[110px] flex flex-row gap-1 text-sm ltr:right-0 rtl:left-0"
        >
          {languages.map((language) => (
            <li key={language.code}>
              <Link
                href={
                  pathnameWithoutLocale === "" ? "/" : pathnameWithoutLocale
                }
                locale={language.code}
                className="language px-2"
              >
                <Image
                  src={language.flagSrc}
                  width={16}
                  height={8}
                  alt={language.label}
                />
                {language.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Language;