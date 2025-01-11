import Image from "next/image";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

const SecurityFund = () => {
  const path = usePathname();
  const isAr = path.includes('/ar');

  const t = useTranslations("home.security_of_funds");
  return (
    <section className="securityFund py-3 pb-5 text-white border-t border-b border-gray-300 shadow-3xl bg-gradient-to-t from-[#243586] from-10% via-[#222e73] via-30% to-[#141b43]">
      <div className="container">
        <div className="flex flex-row justify-start items-start gap-1">
          <div className="basis-1/6 relative h-10 md:h-14 w-full justify-start">
            <Image
              src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/home/lock.webp"
              fill
              alt="Security"
              className="object-contain"
            />
          </div>
          <div className="basis-5/6 content">
            <h2 className={`text-white md:text-lg text-xl font-regular mb-2 ltr:text-left rtl:text-right`}>
              {t("title")}
            </h2>
            <p className={`text text-white md:text-sm text-xs text-left ltr:text-left rtl:text-right`}>
            {t("desc")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityFund;
