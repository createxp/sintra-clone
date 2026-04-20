import React from "react";
import Image from "next/image";

const ExitCta = () => {
  return (
    <div className="relative bg-black  w-full flex items-center overflow-hidden">
      <div className="home-cta_background" />

      <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-center justify-between w-full max-w-[90rem] mx-auto px-6 md:px-10 lg:px-16  lg:py-16 xl:py-0 gap-10 lg:gap-0">
        <div className="flex flex-col items-center lg:items-start justify-center gap-8 lg:max-w-[50%]">
          <h1 className="text-white text-[36px] text-center lg:text-left lg:text-[64px] font-walsham tracking-tight md:text-[56px] max-w-3xl leading-[1.05]">
            Your new AI digital workers team with infinite knowledge.
          </h1>
          <p className="text-neutral-400 text-[20px] px-[21.28px] lg:px-0 text-center lg:text-left tracking-tight font-walsham lg:max-w-3xl md:text-[20.8px] lg:text-[20.8px] xl:text-[20.8px] leading-[1.4] md:leading-[1.1] md:px-14 lg:leading-[1.4]">
            AI for business has never been this personal. Hire your new team -
            work less, but do more.
          </p>
          <button className="bg-primary text-white rounded-full font-medium font-walsham text-[17px] px-button-x py-button-y cursor-pointer transition-opacity hover:opacity-90">
            Get Sintra
          </button>
        </div>

        <div className="home-cta_visual md:mt-16 lg:mt-0">
          <Image
            src="https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/673fa35a6278374bebb41f4e_homepage-cta-mockup-p-500.avif"
            alt="Sintra AI app mockup"
            width={1000}
            height={1000}
            className="home-cta_visual-image"
            unoptimized
          />
        </div>
      </div>
    </div>
  );
};

export default ExitCta;
