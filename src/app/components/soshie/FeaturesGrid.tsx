"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const features = [
  {
    icon: (
      <svg
        width="33"
        height="33"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    title: "Predictable output.",
    description:
      "Your calendar stays full without recurring planning sessions or manual resets. Take back your time.",
  },
  {
    icon: (
      <svg
        width="33"
        height="33"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "Built for global schedules.",
    description:
      "Your content is prepared and scheduled across time zones without any additional effort. Post when it matters, not when you can.",
  },
  {
    icon: (
      <svg
        width="33"
        height="33"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
    title: "Powered by great models.",
    description:
      "Soshie uses the right approach for text, visuals, and formats - without you dwelling on what to choose.",
  },
  {
    icon: (
      <svg
        width="33"
        height="33"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Fewer bottlenecks.",
    description:
      "No chasing updates, syncing calendars, or checking status - our social media specialist reduces operational friction by default.",
  },
];

const FeaturesGrid = () => {
  return (
    <>
      <section className="relative w-full px-5 md:px-8 lg:px-12 xl:px-[76px]">
        <div className="mx-auto">
          {/* Inner container with responsive padding */}
          <div className="px-0 py-12 md:px-12 md:py-16 lg:px-24 lg:py-20 xl:px-[214px] xl:py-[95px]">
            {/* Grid with responsive gaps */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 md:gap-x-16 md:gap-y-16 lg:gap-x-32 lg:gap-y-20 xl:gap-x-[200px] xl:gap-y-[126px]">
              {features.map((feature, index) => (
                <motion.div key={index} className="flex flex-col items-start">
                  {/* Icon */}
                  <div className="mb-4 md:mb-5 lg:mb-6 text-black">
                    {feature.icon}
                  </div>

                  {/* Title and Description */}
                  <p className="font-walsham text-[16px] md:text-[18px] lg:text-[19px] xl:text-[20px] leading-tight">
                    <strong className="text-black">
                      {feature.title.split(".")[0]}.
                    </strong>
                    {feature.title.includes(" ") &&
                      " " + feature.title.split(".")[1]}{" "}
                    <span className="text-gray-400">{feature.description}</span>
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Full width responsive image */}
      <div className="relative w-full mt-8 md:mt-12">
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[900px] lg:h-[900px] xl:h-[900px]">
          <Image
            src="https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/691d472199655f6db9b920c3_soshie-full.avif"
            alt="Soshie full view"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </div>

      {/* Stats section - Text and Image */}
      <section className="relative w-full bg-white py-[64px] px-6 md:py-[96px] md:px-12 lg:py-[128px] lg:px-[64px] xl:px-[96px] overflow-x-clip overflow-y-visible lg:min-h-[57.5rem]">
        <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between">
          {/* Text Container */}
          <div className="lg:flex-1 px-0 text-left md:px-8 lg:px-[54px] xl:px-[172px]">
            {/* Heading */}
            <motion.h2 className="font-walsham text-[24px] md:text-[28px] lg:text-[48px] xl:text-[48px] tracking-tight leading-[1.1] text-black mb-8 md:mb-12 xl:mb-[64px] lg:max-w-3xl">
              Scale creates experience. Experience creates intelligence.
            </motion.h2>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8 md:gap-x-16 md:gap-y-10 lg:grid-cols-[270px_270px] lg:gap-x-[140px] lg:gap-y-[60px] xl:grid-cols-[270px_270px] xl:gap-x-[140px]">
              {/* Stat 1 */}
              <motion.div className="flex flex-col lg:w-[270px] xl:w-[270px]">
                <p className="font-walsham text-[14px] md:text-[15px] lg:text-[20px] xl:text-[20px] text-black mb-2">
                  More than
                </p>
                <p className="font-walsham text-[32px] md:text-[36px] lg:text-[48px] xl:text-[48px] text-black mb-1">
                  1M+
                </p>
                <p className="font-walsham text-[14px] md:text-[15px] lg:text-[17px] xl:text-[17px] text-black">
                  posts generated in 2025
                </p>
              </motion.div>

              {/* Stat 2 */}
              <motion.div className="flex flex-col lg:w-[270px] xl:w-[270px]">
                <p className="font-walsham text-[14px] md:text-[15px] lg:text-[20px] xl:text-[20px] text-black mb-2">
                  Available
                </p>
                <p className="font-walsham text-[32px] md:text-[36px] lg:text-[48px] xl:text-[48px] text-black mb-1">
                  24/7
                </p>
                <p className="font-walsham text-[14px] md:text-[15px] lg:text-[17px] xl:text-[17px] text-black">
                  on web and mobile
                </p>
              </motion.div>

              {/* Stat 3 */}
              <motion.div className="flex flex-col lg:w-[270px] xl:w-[270px]">
                <p className="font-walsham text-[14px] md:text-[15px] lg:text-[20px] xl:text-[20px] text-black mb-2">
                  More than
                </p>
                <p className="font-walsham text-[32px] md:text-[36px] lg:text-[48px] xl:text-[48px]  text-black mb-1">
                  35,000
                </p>
                <p className="font-walsham text-[14px] md:text-[15px] lg:text-[17px] xl:text-[17px] text-black">
                  accounts managed
                </p>
              </motion.div>

              {/* Stat 4 */}
              <motion.div className="flex flex-col lg:w-[270px] xl:w-[270px]">
                <p className="font-walsham text-[14px] md:text-[15px] lg:text-[20px] xl:text-[20px] text-black mb-2">
                  More than
                </p>
                <p className="font-walsham text-[32px] md:text-[36px] lg:text-[48px] xl:text-[48px] text-black mb-1">
                  750,000
                </p>
                <p className="font-walsham text-[14px] md:text-[15px] lg:text-[17px] xl:text-[17px] text-black">
                  posts published in 2025
                </p>
              </motion.div>
            </div>
          </div>

          {/* Image Container - Only visible on lg and xl screens - Absolute positioned */}
          <motion.div className="hidden lg:block absolute top-10 lg:-right-[80%] xl:-right-[40%] w-[76.688rem] h-[60.5rem]">
            <Image
              src="https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/69129c36e9ea8ca6e6c8ce0a_soshie-factors_illustration.avif"
              alt="Soshie character illustration"
              fill
              className="object-contain"
              style={{ aspectRatio: "1227 / 920" }}
              sizes="76.688rem"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default FeaturesGrid;
