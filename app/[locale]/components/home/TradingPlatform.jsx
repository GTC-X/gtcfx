import Image from "next/image";
import { useTranslations } from "next-intl";
import { MdSwitchAccount } from "react-icons/md";
import Link from "next-intl/link";

export default function TradingPlatform() {
  const t = useTranslations("home.accountType");

  const accountTypes = [
    {
      iconSrc: "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/home/standard.webp",
      heading: t("standardAccount.heading"),
    },
    {
      iconSrc: "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/home/pro.webp",
      heading: t("proAccount.heading"),
    },
    {
      iconSrc: "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/home/ecn.webp",
      heading: t("ecnAccount.heading"),
    },
  ];
  
  return (
    <section className="md:py-16 3xl:py-28 py-8 bg-gradient-to-bl from-slate-100 via-gray-50 to-zinc-50">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          <div className="hidden md:block basis-full md:basis-1/2">
            <div className="relative w-full h-64 md:h-[500px]">
              <Image
                src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/home/new-trading.webp"
                alt=""
                fill
                className="object-contain"
              />
            </div>
          </div>
          <div className="md:basis-1/2">
            <div className="content">
              <p className="text-secondary text-8xl mb-5">
                <MdSwitchAccount />
              </p>
              <h2 className="HeadingH2 ltr:text-left rtl:text-right bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text">{t("heading")}</h2>
              <p className="text ltr:text-left rtl:text-right mb-5">{t("desc")}</p>
              <ul className="text ltr:text-left rtl:text-right leading-10">
                {accountTypes.map((account, index) => (
                  <li key={index}>
                    <Link href='/account-types' className="flex justify-start items-center hover:underline cursor-pointer gap-2 pb-2">
                    <div className="relative w-10 h-10">
                      <Image
                        src={account.iconSrc}
                        alt=""
                        fill
                        className="object-contain"
                      />
                    </div>
                    <p className="text text-xl">{account.heading}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
