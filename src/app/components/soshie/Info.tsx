"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import MarqueeCards from "../MarqueeCards";
import EasyModeSection from "./EasyModeSection";
import FeaturesGrid from "./FeaturesGrid";
import Social from "../Social";
import Business from "../Business";
import Media from "./Media";
import Comparison from "./Comparison";
import HireCTA from "./HireCTA";
import SoshieReviews from "./SoshieReviews";
import SoshieFaq from "./SoshieFaq";
import MoreAbout from "./MoreAbout";
import DiscoverMore from "./DiscoverMore";
import Footer from "../Footer";

const MAIN_PHONE =
  "https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/6912da9437804ce44ca9aeab_main-phone.avif";

// Desktop (lg+): 3 cards per side, full spread
const DESKTOP_CARDS = [
  {
    src: "https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/6912da94aca96f42f7d88c40_red03.avif",
    alt: "Declined post 3",
    rotate: -18,
    x: -520,
    y: -240,
    z: 1,
    delay: 0.45,
  },
  {
    src: "https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/6912da94d56e37a8c4f4071c_red02.avif",
    alt: "Declined post 2",
    rotate: -10,
    x: -340,
    y: -200,
    z: 2,
    delay: 0.28,
  },
  {
    src: "https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/6912da93f33746d4b7845100_red01.avif",
    alt: "Declined post 1",
    rotate: -4,
    x: -175,
    y: -90,
    z: 3,
    delay: 0.12,
  },
  {
    src: "https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/6912da93835e7a70b58a6ea1_green01.avif",
    alt: "Approved post 1",
    rotate: 4,
    x: 175,
    y: -90,
    z: 3,
    delay: 0.12,
  },
  {
    src: "https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/6912da94854dfa9e61329727_green02.avif",
    alt: "Approved post 2",
    rotate: 10,
    x: 340,
    y: -200,
    z: 2,
    delay: 0.28,
  },
  {
    src: "https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/6912da93343afa7ab68bfc39_green03.avif",
    alt: "Approved post 3",
    rotate: 18,
    x: 520,
    y: -240,
    z: 1,
    delay: 0.45,
  },
];

// Mobile/Tablet (sm/md): 2 cards per side, tighter spread, smaller offsets
const MOBILE_CARDS = [
  {
    src: "https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/6912da94d56e37a8c4f4071c_red02.avif",
    alt: "Declined post 2",
    rotate: -14,
    x: -180,
    y: -80,
    z: 1,
    delay: 0.3,
  },
  {
    src: "https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/6912da93f33746d4b7845100_red01.avif",
    alt: "Declined post 1",
    rotate: -6,
    x: -90,
    y: -30,
    z: 2,
    delay: 0.15,
  },
  {
    src: "https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/6912da93835e7a70b58a6ea1_green01.avif",
    alt: "Approved post 1",
    rotate: 6,
    x: 90,
    y: -30,
    z: 2,
    delay: 0.15,
  },
  {
    src: "https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/6912da94854dfa9e61329727_green02.avif",
    alt: "Approved post 2",
    rotate: 14,
    x: 180,
    y: -80,
    z: 1,
    delay: 0.3,
  },
];

const Info = () => {
  return (
    <div className="w-full">
      <div className="relative w-full">
        {/* Base gradient */}
        <div
          className="absolute h-full inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(150% 70% at 50% 55%, #EFB242 0%, #EF8442 19.23%, rgba(182, 57, 74, 0.70) 44.23%, #A9ADF5 73.56%, #FAFAFA 100%)",
          }}
        />

        {/* Smooth top fade from white */}
        <div
          className="absolute inset-0 pointer-events-none z-1"
          style={{
            background:
              "linear-gradient(to bottom, #FAFAFA 0%, rgba(250,250,250,0.8) 8%, rgba(250,250,250,0) 28%)",
          }}
        />

        {/* Content */}
        <div className="relative z-2">
          {/* Title */}
          <div className="flex flex-col items-center pt-24 md:pt-32 lg:pt-40 xl:pt-48">
            <h2 className="font-walsham text-white text-center text-[32px] md:text-[44px] lg:text-[56px] xl:text-[64px] leading-[1.1] tracking-tight max-w-3xl px-6 mb-16 md:mb-20 lg:mb-24">
              Your well-rounded
              <br />
              AI for social media
            </h2>
          </div>

          {/* === Desktop cards (lg+): 3 per side === */}
          <div
            className="relative w-full h-full overflow-hidden mx-auto hidden lg:block"
            style={{ height: 738 + 80 }}
          >
            {DESKTOP_CARDS.map((card) => (
              <motion.div
                key={card.alt}
                className="absolute origin-bottom"
                style={{
                  width: 390,
                  height: 580,
                  left: "50%",
                  marginLeft: -195,
                  bottom: 0,
                  zIndex: card.z,
                }}
                initial={{ opacity: 0, x: 0, y: 0, rotate: 0 }}
                whileInView={{
                  opacity: 1,
                  x: card.x,
                  y: card.y,
                  rotate: card.rotate,
                }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <div className="relative w-full h-full rounded-2xl overflow-hidden">
                  <Image
                    src={card.src}
                    alt={card.alt}
                    fill
                    className="object-contain"
                    sizes="390px"
                  />
                </div>
              </motion.div>
            ))}

            {/* Main phone — desktop */}
            <motion.div
              className="absolute z-10 bottom-0"
              style={{
                width: 350,
                height: 738,
                left: "50%",
                marginLeft: -175,
              }}
            >
              <div className="relative w-full h-full rounded-[2rem] overflow-hidden">
                <Image
                  src={MAIN_PHONE}
                  alt="Soshie social media post preview"
                  fill
                  className="object-cover"
                  sizes="350px"
                  priority
                />
              </div>
            </motion.div>
          </div>

          {/* === Mobile/Tablet cards (sm/md): 2 per side, smaller === */}
          <div
            className="relative w-full overflow-hidden mx-auto lg:hidden"
            style={{ height: 480 }}
          >
            {MOBILE_CARDS.map((card) => (
              <motion.div
                key={card.alt}
                className="absolute origin-bottom"
                style={{
                  width: 200,
                  height: 320,
                  left: "50%",
                  marginLeft: -100,
                  bottom: 0,
                  zIndex: card.z,
                }}
                initial={{ opacity: 0, x: 0, y: 0, rotate: 0 }}
                whileInView={{
                  opacity: 1,
                  x: card.x,
                  y: card.y,
                  rotate: card.rotate,
                }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <div className="relative w-full h-full rounded-xl overflow-hidden">
                  <Image
                    src={card.src}
                    alt={card.alt}
                    fill
                    className="object-contain"
                    sizes="200px"
                  />
                </div>
              </motion.div>
            ))}

            {/* Main phone — mobile/tablet */}
            <motion.div
              className="absolute z-10 bottom-0"
              style={{
                width: 220,
                height: 440,
                left: "50%",
                marginLeft: -110,
              }}
            >
              <div className="relative w-full h-full rounded-[1.5rem] overflow-hidden">
                <Image
                  src={MAIN_PHONE}
                  alt="Soshie social media post preview"
                  fill
                  className="object-cover"
                  sizes="220px"
                  priority
                />
              </div>
            </motion.div>
          </div>

          {/* Descriptive text */}
          <div className="py-16 md:py-24 lg:py-32 px-6 md:px-12">
            <div className="mx-auto max-w-2xl text-center">
              <p className="font-walsham text-white/90 text-[17px] md:text-[19px] lg:text-[19px] leading-[1.3] mb-6 ">
                Our social media helper turns your strategy into a steady,
                repeatable rhythm that doesn&apos;t break when things get busy.
              </p>
              <p className="font-walsham text-white/90 text-[17  px] md:text-[19px] lg:text-[19px] leading-[1.6] mb-6">
                Content shows up consistently, week after week, shaped by real
                performance – not guesswork or reminders. Your presence stays
                active without being top of mind.
              </p>
              <p className="font-walsham text-white/90 text-[17px] md:text-[19px] lg:text-[19px] leading-[1.6]">
                Social media runs in the background. Your team stays focused on
                what actually moves the business.
              </p>
            </div>
          </div>

          {/* Marquee Cards Section */}
          <MarqueeCards />

          {/* Easy Mode Section */}
          <EasyModeSection />
        </div>
      </div>
      <FeaturesGrid />

      {/* Continuous purple gradient spanning Social → Business */}
      <div
        className="relative w-full"
        style={{
          background:
            "radial-gradient(103.53% 39.16% at 50.03% 47.99%, #7B3EA4 0%, #7B3EA4 13.46%, #9F7FFF 35.1%, #AAB7E7 57.21%, rgba(255, 255, 255, 0.00) 96.15%)",
        }}
      >
        {/* Top fade: white → transparent */}
        <div
          className="absolute inset-x-0 top-0 h-32 md:h-40 lg:h-64 z-[1] pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, #ffffff 0%, rgba(255,255,255,0.5) 40%, rgba(255,255,255,0) 100%)",
          }}
        />

        <Social />
        <Business />

        {/* Bottom padding so fade doesn't clip content */}
        <div className="h-40 md:h-56 lg:h-72" />
      </div>

      {/* Bottom fade: sits across the boundary between gradient and next section */}
      <div
        className="relative -mt-40 md:-mt-56 lg:-mt-72 h-40 md:h-56 lg:h-72 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(250,250,250,0) 0%, rgba(250,250,250,0.7) 50%, #fafafa 100%)",
        }}
      />
      <Media />
      <Comparison />
      <HireCTA />
      <SoshieReviews />
      <SoshieFaq />
      <MoreAbout />
      <DiscoverMore />
      <Footer />
    </div>
  );
};

export default Info;
