"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const DESKTOP_MAIN_IMAGE =
  "https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/6912af5270d8ddd44e54fb33_95330815cb166c18b4be33f7e5b8561e_helper-chat.avif";
const MOBILE_MAIN_IMAGE =
  "https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/697aebec0169bdf08cc92c65_switch-on_lp-soshie.avif";
const TOGGLE_CIRCLE_IMAGE =
  "https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/6912a852419415bc0b586a60_beba0ebe27f5625e84c4f0a1ebcacd96_round-toggle.avif";
const LEFT_IMAGE =
  "https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/6912b0917a733fa99becb0f5_image%20480.avif";
const RIGHT_IMAGE =
  "https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/6912b091116a40d3f44d595c_290b95bd2c66692ab4418c8e410140d1_image%20479.avif";

const EasyModeSection = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <section className="relative w-full py-18 md:py-32 px-6 md:px-[76px] overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        {/* Heading with Toggle */}
        <div className="flex flex-col items-center justify-center gap-2 md:gap-3 mb-12 md:mb-16">
          <h2 className="font-walsham text-white text-center text-[30px] md:text-[48px] lg:text-[56px] xl:text-[64px] leading-[1.1] tracking-tight">
            Your social media,
          </h2>

          {/* Toggle row */}
          <div className="flex items-center gap-2 md:gap-3 lg:gap-4">
            <span className="font-walsham text-white text-[30px] md:text-[48px] lg:text-[56px] xl:text-[64px] leading-[1.1]">
              on
            </span>

            <button
              onClick={() => setIsActive(!isActive)}
              className="relative flex items-center justify-start w-[60px] h-[32px] md:w-[90px] md:h-[48px] lg:w-[105px] lg:h-[56px] xl:w-[120px] xl:h-[64px] rounded-full transition-colors duration-300 ease-in-out"
              style={{
                backgroundColor: isActive ? "#03ff00" : "#6b7280",
              }}
              aria-label="Toggle easy mode"
            >
              <motion.div
                className="absolute w-[26px] h-[26px] md:w-[40px] md:h-[40px] lg:w-[48px] lg:h-[48px] xl:w-[64px] xl:h-[64px] rounded-full"
                initial={false}
                animate={{
                  x: isActive ? "calc(100% + 6px)" : "3px",
                }}
                transition={{
                  duration: 0.4,
                  ease: "easeIn",
                }}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={TOGGLE_CIRCLE_IMAGE}
                    alt="Toggle"
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
              </motion.div>
            </button>

            <span
              className="font-walsham text-[30px] md:text-[48px] lg:text-[56px] xl:text-[64px] leading-[1.1] transition-colors duration-300"
              style={{
                color: isActive ? "#03ff00" : "#9ca3af",
              }}
            >
              easy mode.
            </span>
          </div>
        </div>

        {/* Images Section */}
        <div className="relative w-full flex items-center justify-center">
          {/* Desktop Layout: 3 images (left, center, right) - visible on md and up */}
          <div className="hidden md:block w-full">
            {/* Center Main Image - Relative positioned, fluid width */}
            <motion.div
              className="relative mx-auto shadow-2xl rounded-2xl w-full max-w-[1014px]"
              style={{
                aspectRatio: "1014 / 601.3",
              }}
            >
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <Image
                  src={DESKTOP_MAIN_IMAGE}
                  alt="Social media manager dashboard"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1280px) 1014px, (min-width: 768px) 80vw, 100vw"
                  priority
                />
              </div>

              {/* Left Character Image - On top of main image */}
              <motion.div
                className="absolute z-10 pointer-events-none"
                style={{
                  width: "55%",
                  height: "90%",
                  left: "-12%",
                  bottom: "-20%",
                }}
              >
                <Image
                  src={LEFT_IMAGE}
                  alt="Soshie character left"
                  fill
                  className="object-contain"
                  sizes="(min-width: 1280px) 744px, 40vw"
                />
              </motion.div>

              {/* Right Character Image - On top of main image */}
              <motion.div
                className="absolute z-10 pointer-events-none"
                style={{
                  width: "55%",
                  height: "90%",
                  right: "-40%",
                  bottom: "-22%",
                }}
              >
                <Image
                  src={RIGHT_IMAGE}
                  alt="Soshie character right"
                  fill
                  className="object-contain"
                  sizes="(min-width: 1280px) 744px, 40vw"
                />
              </motion.div>
            </motion.div>
          </div>

          {/* Mobile Layout: Phone centered, characters overlapping from sides */}
          <div className="md:hidden relative w-full flex justify-center">
            <motion.div
              className="relative"
              style={{
                width: 260,
                height: 520,
                boxShadow:
                  "0 8px 10px -6px #4040400f, 0 20px 25px -5px #4040400f",
              }}
            >
              <Image
                src={MOBILE_MAIN_IMAGE}
                alt="Soshie mobile app"
                fill
                className="object-contain"
                sizes="260px"
                priority
              />

              {/* Left Character - Mobile */}
              <motion.div
                className="absolute z-10 pointer-events-none overflow-visible"
                style={{
                  width: "100%",
                  height: "16.75rem",
                  left: "-3rem",
                  bottom: "-7rem",
                }}
              >
                <Image
                  src={LEFT_IMAGE}
                  alt="Soshie character left"
                  width={234}
                  height={267}
                  className="object-cover"
                  style={{ objectPosition: "0% 50%" }}
                />
              </motion.div>

              {/* Right Character - Mobile */}
              <motion.div
                className="absolute z-10 pointer-events-none overflow-visible"
                style={{
                  width: "100%",
                  height: "16.75rem",
                  right: "-75%",
                  bottom: "-7rem",
                }}
              >
                <Image
                  src={RIGHT_IMAGE}
                  alt="Soshie character right"
                  width={234}
                  height={267}
                  className="object-cover"
                  style={{ objectPosition: "0% 50%" }}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EasyModeSection;
