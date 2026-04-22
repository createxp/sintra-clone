"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const competitors = [
  {
    name: "Soshie",
    logo: (
      <div className="relative w-10 h-10 md:w-12 md:h-12">
        <Image
          src="https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/69115a7b177bfbd964c0a9fc_comparison_soshie.avif"
          alt="Soshie"
          fill
          className="object-contain"
          sizes="80px"
        />
      </div>
    ),
  },
  {
    name: "ChatGPT",
    logo: (
      <div className="relative w-8 h-8 md:w-10 md:h-10">
        <Image
          src="https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/69115a7b9640a4d342b14c2b_image%20256.svg"
          alt="ChatGPT"
          fill
          className="object-contain"
          sizes="80px"
        />
      </div>
    ),
  },
  {
    name: "Manychat",
    logo: (
      <div className="relative w-8 h-8 md:w-10 md:h-10">
        <Image
          src="https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/69115a7b4729d4a9fbe075f5_Screenshot%202025-10-15%20at%2022.49.58%201.svg"
          alt="Manychat"
          fill
          className="object-contain"
          sizes="80px"
        />
      </div>
    ),
  },
  {
    name: "Competitor",
    logo: (
      <div className="relative w-8 h-8 md:w-10 md:h-10">
        <Image
          src="https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/69115a7b97ff13eea0668da2_Screenshot%202025-10-15%20at%2022.49.12%201.svg"
          alt="Competitor"
          fill
          className="object-contain"
          sizes="80px"
        />
      </div>
    ),
  },
];

// true = check (green), false = cross (red)
const features: { label: string; values: boolean[] }[] = [
  { label: "Daily business ideas", values: [true, false, false, false] },
  {
    label: "Highly trained on top profiles",
    values: [true, true, false, false],
  },
  { label: "Auto-posts to platforms", values: [true, false, true, false] },
  { label: "Personalized on your brand", values: [true, true, false, false] },
  { label: "Built for teams", values: [true, false, false, true] },
];

const trustedLogos = [
  {
    name: "Rakuten",
    logo: (
      <div className="relative w-[100px] h-[28px] md:w-[120px] md:h-[34px]">
        <Image
          src="https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/68f788efbf40b37d2fd54b86_lp-oct-rakuten.avif"
          alt="Rakuten"
          fill
          className="object-contain"
          sizes="120px"
        />
      </div>
    ),
  },
  {
    name: "Revolut",
    logo: (
      <div className="relative w-[100px] h-[28px] md:w-[120px] md:h-[34px]">
        <Image
          src="https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/68f788ef4dfe1a1b4a6c43d8_lp-oct-revolut.avif"
          alt="Revolut"
          fill
          className="object-contain"
          sizes="120px"
        />
      </div>
    ),
  },
  {
    name: "Crunchbase",
    logo: (
      <div className="relative w-[110px] h-[28px] md:w-[130px] md:h-[34px]">
        <Image
          src="https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/68f788ef1b9c8e28d7ad71b7_lp-oct-crunchbase.svg.avif"
          alt="Crunchbase"
          fill
          className="object-contain"
          sizes="130px"
        />
      </div>
    ),
  },
  {
    name: "Business Insider",
    logo: (
      <div className="relative w-[110px] h-[32px] md:w-[130px] md:h-[38px]">
        <Image
          src="https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/68f788ef120ebf01cd7ec8da_lp-oct-business-insider.svg.avif"
          alt="Business Insider"
          fill
          className="object-contain"
          sizes="130px"
        />
      </div>
    ),
  },
  {
    name: "Fortune",
    logo: (
      <div className="relative w-[100px] h-[28px] md:w-[120px] md:h-[34px]">
        <Image
          src="https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/68f788ef972f25dc90a521e7_lp-oct-fortune.png.avif"
          alt="Fortune"
          fill
          className="object-contain"
          sizes="120px"
        />
      </div>
    ),
  },
  {
    name: "Cybernews",
    logo: (
      <div className="relative w-[110px] h-[28px] md:w-[130px] md:h-[34px]">
        <Image
          src="https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/68f788efe97cf1b228384771_lp-oct-cybernews.avif"
          alt="Cybernews"
          fill
          className="object-contain"
          sizes="130px"
        />
      </div>
    ),
  },
];

const Comparison = () => {
  return (
    <section className="w-full bg-[#fafafa] py-16 md:py-24 lg:py-32 lg:px-[76px]">
      <div className="mx-auto px-4 md:px-[44px]">
        {/* Heading */}
        <motion.div
          className="text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="font-walsham text-black text-[30px] md:text-[36px] lg:text-[48px] xl:text-[48px] leading-[1.1] tracking-tight">
            How we compare
          </h2>
        </motion.div>

        <motion.p
          className="text-center text-[#0077FF] font-walsham text-[16px] md:text-[18px] mb-12 md:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
        >
          Save $400/month. Get Soshie
        </motion.p>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
        >
          {/* Logo Header Row */}
          <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr_1fr] items-center mb-8 md:mb-10">
            <div />
            {competitors.map((comp) => (
              <div key={comp.name} className="flex justify-center">
                {comp.logo}
              </div>
            ))}
          </div>

          {/* Feature Rows */}
          {features.map((feature, idx) => (
            <div
              key={feature.label}
              className={`grid grid-cols-[1.5fr_1fr_1fr_1fr_1fr] items-center py-4 md:py-6 ${
                idx < features.length - 1 ? "border-b border-neutral-300" : ""
              }`}
            >
              <span className="font-walsham text-[#0077FF] text-[13px] md:text-[15px] lg:text-[16px]">
                {feature.label}
              </span>
              {feature.values.map((val, i) => (
                <div key={i} className="flex justify-center">
                  {val ? (
                    <div className="w-6 h-6 md:w-7 md:h-7 rounded-full flex items-center justify-center">
                      <img
                        src="https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/69115a46e60d7dc8af80960b_check-circle-solid.svg"
                        alt="Check"
                        className="object-contain"
                        sizes="24px"
                      />
                    </div>
                  ) : (
                    <div className="w-6 h-6 md:w-7 md:h-7 rounded-full flex items-center justify-center">
                      <img
                        src="https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/69115a467fad8b2d6aeea8d4_x-circle-solid.svg"
                        alt="Mark"
                        className="object-contain"
                        sizes="24px"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Trusted By Section */}
      <motion.div
        className="mt-20 md:mt-28 lg:mt-32 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <p className="font-walsham text-gray-400 text-[14px] md:text-[16px] lg:text-[18px] mb-8 md:mb-10 underline underline-offset-4 decoration-gray-300">
          Trusted by leading teams worldwide
        </p>

        <div className="bg-gray-100 py-6 md:py-8 px-4 mx-4 md:mx-10 xl:mx-[76px] rounded-2xl">
          <div className=" mx-auto flex items-center justify-center gap-6 md:gap-10 py-4 lg:gap-14 flex-wrap">
            {trustedLogos.map((brand) => (
              <div
                key={brand.name}
                className="flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity"
              >
                {brand.logo}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Comparison;
