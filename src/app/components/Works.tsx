import Image from "next/image";
import React from "react";

const Works = () => {
  return (
    <div className="bg-black w-full min-h-screen flex flex-col pb-16">
      <div className="flex lg:flex-row flex-col  md:flex-col mt-48">
        {/* Image */}
        <div className="flex justify-center items-center w-[383px] h-[383px] md:w-[530px] md:h-[530px] lg:w-[760px] lg:h-[746px]">
          <Image
            src="https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/672384f30ff5f820be7412d1_present-mockup.avif"
            alt="Works"
            width={760}
            height={746}
            className="object-cover"
          />
        </div>

        {/* Text */}
        <div className="flex flex-col px-8 md:px-0 justify-center md:mx-auto items-center gap-12 text-white max-w-xl lg:py-[186px] w-full">
          <h1 className="lg:text-[64px] md:text-[56px] text-[36px] font-walsham tracking-tight leading-[1.1] max-w-4xl lg:px-[76px]">
            Work globally with no extra effort.
          </h1>
          <p className="md:text-[20px] text-[19px] font-walsham font-normal leading-[1.3] tracking-tight w-full md:pb-10 lg:px-[76px]">
            <span className="font-bold"> Speaks in 100+ languages.</span>{" "}
            Sintra’s digital AI employees are built to work across different
            markets - write social media content in Italian, answer German
            emails, support your Spanish e-commerce store, or build websites in
            French. Forget hiring local teams or buying multiple tools. Enter
            foreign markets with confidence using one platform.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Works;
