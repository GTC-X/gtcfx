'use client'
import { usePathname } from 'next/navigation';

const Hero = ({ title, description }) => {
  const path= usePathname();
  const isAr = path.includes('/ar');
  return (
    <div className='hero-section bg-gradient-to-r from-[#24358b] via-[#242c75] to-[#141b43] border-y border-gray-200 py-10'>
      <div className='container'>
        <div className='flex flex-row justify-between gap-4 items-center'>
          <div className={`content-side text-center md:text-left ltr:text-left rtl:text-right`}>
            <h1 className='bg-gradient-to-r from-white to-secondary inline-block text-transparent bg-clip-text  text-2xl  md:text-4xl xl:text-5xl  mb-5 font-medium'>{title}</h1>
            <p className=' text-white text-base md:max-w-4xl'>{description}</p>
            
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Hero;
