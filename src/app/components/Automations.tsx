import Image from "next/image";
import React from "react";

const Automations = () => {
  return (
    <div className="w-full h-full bg-black pt-12 relative">
      <Image
        src="https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/673f7efdd574ab7ce78808c6_automations-helpers-cover.avif"
        alt="Automations"
        width={1000}
        height={1000}
        className="w-full h-full md:object-cover mask-b-from-75%"
      />
      <div className="flex flex-row items-center w-full justify-center gap-2 absolute xl:-bottom-415 md:-bottom-250 md:text-center lg:-bottom-300 top-80 z-14 ">
        <div className="flex flex-col items-center justify-center gap-8">
          <h1 className="text-white text-[36px] text-center lg:text-[64px] font-walsham tracking-tight md:text-[56px] max-w-3xl leading-[1.05]">
            Employ AI staff to automate work. Even while you sleep.
          </h1>
          <p className="text-neutral-400 text-[20px] px-[21.28px]  lg:text-left tracking-tight font-walsham lg:max-w-3xl md:text-[20.8px] lg:text-[20.8px] xl:text-[20.8px] lg:text-center leading-[1.4] md:leading-[1.1] md:px-14 lg:px-0 lg:leading-[1.4]">
            You don’t need hundreds of employees to run a modern business.
            Sintra AI gives you the best AI employees to automate day-to-day
            work - so your business keeps moving. Work gets done continuously,
            efficiently, around the clock and without burnout.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Automations;
