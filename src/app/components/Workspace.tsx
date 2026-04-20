import Image from "next/image";
import React from "react";

const Workspace = () => {
  return (
    <div className="relative bg-black w-full min-h-[800px] md:min-h-[900px] lg:min-h-[900px] xl:min-h-[1000px] overflow-hidden">
      <Image
        src="https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/6735e6a05e6e7f0def9fae4e_workspaces-final-mockup.avif"
        alt="Workspace mockup showing multiple AI agent profiles"
        fill
        className="!left-auto !right-0 !w-[90%] md:!w-[80%] lg:!w-[70%] !h-full object-contain object-right-top"
        sizes="(max-width: 768px) 90vw, (max-width: 1024px) 80vw, 70vw"
      />

      {/* Gradient overlay: transparent to black */}
      <div className="absolute inset-0 z-[2] bg-gradient-to-b from-transparent to-black" />

      <div className="relative z-10 flex flex-col justify-end h-full px-[20px] md:px-[40px] lg:px-[120px] pb-8 md:pb-12 lg:pb-24 xl:pt-[490px] pt-[400px] md:pt-[600px] lg:pt-0">
        <h1 className="text-white font-walsham text-[40px] md:text-[56px] lg:text-[48px] xl:text-[64px] tracking-tight leading-[1.1] max-w-2xl xl:max-w-lg mb-8 md:mb-10 lg:mb-12">
          Multiple workspaces. One team with different AI agents as employees.
        </h1>

        <div className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-16 max-w-3xl">
          <div className="flex flex-col gap-3 flex-1">
            <h3 className="text-white font-walsham text-[20px] md:text-[22px] lg:text-[24px] font-medium">
              Up to 5 profiles
            </h3>
            <p className="text-gray-400 text-base md:text-lg lg:text-[18px] font-walsham leading-[1.5]">
              Create up to 5 business profiles, each customized to your unique
              business needs and specific goals, powered by AI employees ready
              to deliver results.
            </p>
          </div>

          <div className="flex flex-col gap-3 flex-1">
            <h3 className="text-white font-walsham text-[20px] md:text-[22px] lg:text-[24px] font-medium">
              Share workspace with the team
            </h3>
            <p className="text-gray-400 text-base md:text-lg lg:text-[18px] font-walsham leading-[1.5]">
              Collaborate with your team in real-time. Share your workspace to
              make business insights accessible to everyone involved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workspace;
