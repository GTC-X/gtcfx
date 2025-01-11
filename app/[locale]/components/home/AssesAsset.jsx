import React from "react";
import Image from "next/image";

const AssesAsset = ({ assetData, title, des, columns }) => {
    const gridClasses = {
        '2': 'md:grid-cols-2',
        '3': 'md:grid-cols-3',
        '4': 'md:grid-cols-4'
    };

    // Default to 3 columns if the passed columns value is not defined in gridClasses
    const columnClass = gridClasses[columns] || 'md:grid-cols-3';

    return (
        <section className="md:py-16 3xl:py-28 py-8 text-center">
            <div className="container">
                <h2 className="HeadingH2 max-w-2xl mx-auto text-center capitalize bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text">
                    {title}
                </h2>
                <p class="text">{des}</p>
                <div className={`grid grid-cols-2 ${columnClass} md:gap-24 md:mt-10`}>
                    {assetData.map((asset, index) => (
                        <div key={index} className="group flex flex-col justify-center items-center text-center p-2 md:p-4 cursor-pointer hover:opacity-60 transition-all ease-in duration-500">
                            <div className="relative h-8 md:h-16 w-full mb-2">
                                <Image src={asset.imageUrl} fill alt={asset.alt} className="object-contain" />
                            </div>
                            <div>
                                <h2 className="text-sm md:text-lg mb-0 text-secondary hover:text-primary">{asset.name}</h2>
                                <p className="text-xs lg:text-base 2xl:text-[17px]">{asset.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AssesAsset;
