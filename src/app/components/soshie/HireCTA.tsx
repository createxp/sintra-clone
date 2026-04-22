"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck } from "lucide-react";

const SOSHIE_CHARACTER =
  "https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/69114b5738ec611f7437a0e1_9189bba387c37ef2a6f247ffbd4e9e4c_1-dollar_soshie.avif";
const SHIELD_ICON =
  "https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/691150ad7819641b6b1672c3_shield-checkmark-svgrepo-com%201.svg";

const HireCTA = () => {
  return (
    <section className="w-full bg-[#fafafa]">
      {/* Hire CTA Section */}
      <div className="w-full px-4 md:px-[44px] lg:px-[76px] py-16 md:py-24 lg:py-10">
        <motion.h2
          className="font-walsham text-black text-left text-[26px] md:text-[36px] lg:text-[44px] xl:text-[48px] leading-[1.15] tracking-tight mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Hire our AI social media specialist for just $1 per day.
        </motion.h2>

        <motion.div
          className="mx-auto bg-white rounded-3xl overflow-hidden lg:px-[44px] lg:h-[712px]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
        >
          <div className="relative flex flex-col md:flex-row items-stretch h-full">
            {/* Left: text content */}
            <div className="flex-1 flex flex-col justify-center px-8 py-10 md:px-12 md:py-14 lg:px-[44px] lg:py-16 z-10">
              <span className="block font-wonderkids text-[#c9b3f2] text-[116px] lg:text-[216px] leading-none mb-6 md:mb-8">
                Soshie
              </span>

              <h3 className="font-walsham text-black text-[24px] md:text-[28px] lg:text-[48px] leading-[1.2] tracking-tight mb-6 md:mb-8">
                Your first reliable AI
                <br />
                for social media
                <br />
                marketing.
              </h3>

              <a
                href="https://sintra.ai/pricing-v3?helper=soshie"
                className="inline-flex w-fit items-center gap-2 rounded-full bg-[#3366FF] px-6 py-3 font-walsham text-[14px] md:text-[15px] font-medium text-white transition-opacity hover:opacity-90"
              >
                Try Soshie Risk Free
                <ArrowRight className="size-4 shrink-0" aria-hidden />
              </a>

              <div className="flex items-center gap-1.5 mt-3">
                <BadgeCheck className="size-4 text-[#3366FF] shrink-0" />
                <span className="font-walsham text-[12px] md:text-[13px] text-gray-500">
                  14-day full money-back guarantee
                </span>
              </div>
            </div>

            {/* Right: Soshie character */}
            <div className="relative w-full md:w-[50%] lg:w-[55%] min-h-[400px] md:min-h-0 overflow-hidden">
              {/* Mobile / Tablet */}
              <div className="block lg:hidden relative w-full h-full min-h-[400px]">
                <Image
                  src={SOSHIE_CHARACTER}
                  alt="Soshie AI social media specialist"
                  fill
                  className="object-contain object-bottom"
                  sizes="100vw"
                />
              </div>
              {/* lg / xl — exact positioning */}
              <img
                src={SOSHIE_CHARACTER}
                alt="Soshie AI social media specialist"
                className="hidden lg:block absolute object-contain"
                style={{
                  width: "78rem",
                  height: "78rem",
                  maxWidth: "none",
                  inset: "4.3rem auto auto -20.3rem",
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* 14-Day Risk Free Section */}
      <motion.div
        className="w-full px-4 md:px-[44px] lg:px-[76px] pb-16 md:pb-24 lg:pb-32"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="mx-auto lg:px-[44px] bg-white rounded-3xl overflow-hidden">
          <div className="flex flex-col md:flex-row items-center">
            {/* Left: Shield badge */}
            <div className="flex items-center justify-center bg-[#EBF0FF] w-full md:w-[40%] lg:w-[38%] py-14 md:py-0 md:self-stretch">
              <div className="relative w-[120px] h-[140px] md:w-[140px] md:h-[160px] lg:w-[160px] lg:h-[180px]">
                <Image
                  src={SHIELD_ICON}
                  alt="14-day guarantee shield"
                  fill
                  className="object-contain"
                  sizes="180px"
                />
              </div>
            </div>

            {/* Right: text content */}
            <div className="flex-1 px-8 py-10 md:px-12 md:py-14 lg:px-[44px] lg:py-16">
              <h3 className="font-walsham text-black text-[24px] md:text-[28px] lg:text-[48px] leading-[1.15] tracking-tight mb-4 md:mb-5">
                Try now - risk-free for 14 days
              </h3>

              <p className="font-walsham text-gray-500 text-[14px] md:text-[15px] lg:text-[16px] leading-relaxed mb-6 md:mb-8 max-w-md">
                Not sure our AI agent for social media is a good addition to
                your team? Simply test-proof for 14-days or get a full refund,
                no questions asked.
              </p>

              <a
                href="https://sintra.ai/pricing-v3?helper=soshie"
                className="inline-flex items-center gap-2 rounded-full bg-[#3366FF] px-6 py-3 font-walsham text-[14px] md:text-[15px] font-medium text-white transition-opacity hover:opacity-90"
              >
                Try Soshie Risk Free
                <ArrowRight className="size-4 shrink-0" aria-hidden />
              </a>

              <div className="flex items-center gap-1.5 mt-3">
                <BadgeCheck className="size-4 text-[#3366FF] shrink-0" />
                <span className="font-walsham text-[12px] md:text-[13px] text-gray-500">
                  14-day full money-back guarantee
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HireCTA;
