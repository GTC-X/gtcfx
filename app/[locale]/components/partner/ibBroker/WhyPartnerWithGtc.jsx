'use client'
import Image from "next/image";

const WhyPartnerWithGtc = ({ title, reasons, subHeading }) => {

  return (
    <section className="md:py-16 py-8">
      <div
          className="absolute inset-0 z-10 bg-cover md:bg-cover 2xl:bg-contain bg-center opacity-100 top-[100%] md:top-[100%] 3xl:top-[60%] md:h-[800px] 2xl:h[300px] bg-no-repeat"
          style={{ backgroundImage: `url('/bg-ib.webp')` }}
        />
      <div className="container content-side z-50 relative">
          <div className="text-center">
            <h2 className="HeadingH2 2xl:text-4xl w-72 md:w-full font-[500] bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text text-center">
              {title}
            </h2>
            <p className='text text-primary pb-5'>{subHeading}</p>
          </div>
          <div className="relative w-full h-[300px] md:h-[500px] 3xl:h-[700px]">
              <Image src={reasons} fill className="object-contain" alt="" />
          </div>
    
          </div>
    </section>
  );
};

export default WhyPartnerWithGtc;
