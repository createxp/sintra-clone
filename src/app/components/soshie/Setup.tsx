"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const STEPS = [
  {
    number: "1",
    title: "Set the foundation",
    description:
      "Add your brand details once. Tell Soshie who you are and what you're building — so everything it does reflects your voice, positioning, and goals from day one.",
    image:
      "https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/6912c85ed935cf038954bbd5_Soshie%20smm%20setup%207.avif",
  },
  {
    number: "2",
    title: "Connect your social platforms",
    description:
      "Link your Facebook, Instagram, and LinkedIn accounts. This gives Soshie direct access to post and schedule content on your behalf.",
    image:
      "https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/6912c85ec41476989ad4021b_Soshie%20smm%20setup%208.avif",
  },
  {
    number: "3",
    title: "Set the strategy once",
    description:
      "Tell Soshie what to create and how often. Choose themes, formats, hashtags, captions, visuals, and KPIs.",
    image:
      "https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/6912c85e0a363f41d2f24088_Soshie%20smm%20setup%209.avif",
  },
  {
    number: "4",
    title: "Stay in control — you approve, Soshie executes",
    description:
      "Every post comes to you for review before it goes live. Approve, edit, or skip — you always have the final say.",
    image:
      "https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/6912c85ec2615bb8af60a3c5_Soshie%20smm%20setup%2010.avif",
  },
  {
    number: "5",
    title: "Measure what works and automate",
    description:
      "Track reach, engagement, and performance across platforms. Soshie learns from the data and refines your strategy.",
    image:
      "https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/6912c85eb94fe4783db201d3_Soshie%20smm%20setup%2011.avif",
  },
];

function StepRow({
  step,
  isActive,
  onClick,
}: {
  step: (typeof STEPS)[number];
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <div
      className="border-t border-zinc-200 py-6 cursor-pointer"
      onClick={onClick}
    >
      <div className="flex items-start gap-4">
        <motion.span
          animate={{
            color: isActive ? "#111" : "#aaa",
            fontSize: isActive ? "32px" : "20.8px",
          }}
          transition={{ duration: 0.3 }}
          className=" w-7 shrink-0 pt-0.5 font-walsham leading-none"
        >
          {step.number}
        </motion.span>

        <div className="flex-1">
          <motion.h3
            animate={{
              color: isActive ? "#111" : "#aaa",
              fontSize: isActive ? "32px" : "20.8px",
            }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className=" leading-snug font-walsham"
          >
            {step.title}
          </motion.h3>

          <AnimatePresence initial={false}>
            {isActive && (
              <motion.p
                key="desc"
                initial={{ height: 0, opacity: 0, marginTop: 0 }}
                animate={{ height: "auto", opacity: 1, marginTop: 12 }}
                exit={{ height: 0, opacity: 0, marginTop: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="text-zinc-500 text-[17px] leading-relaxed overflow-hidden font-walsham"
              >
                {step.description}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

const Setup = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [mobileActiveStep, setMobileActiveStep] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const mobileSectionRef = useRef<HTMLDivElement>(null);

  const calcStep = (section: HTMLDivElement): number => {
    const rect = section.getBoundingClientRect();
    const scrollableDistance = section.offsetHeight - window.innerHeight;
    if (scrollableDistance <= 0) return 0;

    const progress = Math.max(0, Math.min(1, -rect.top / scrollableDistance));
    return Math.min(STEPS.length - 1, Math.floor(progress * STEPS.length));
  };

  const handleScroll = useCallback(() => {
    if (sectionRef.current) setActiveStep(calcStep(sectionRef.current));
    if (mobileSectionRef.current)
      setMobileActiveStep(calcStep(mobileSectionRef.current));
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div className="bg-[#fafafa] w-full">
      {/* Header */}
      <div className="flex flex-col items-center justify-center gap-3 mb-12 md:mb-16 px-[20px] md:px-[76px] pt-16 md:pt-20 xl:pt-[128px]">
        <h1 className="text-black font-walsham text-[30px] md:text-[44px] lg:text-[48px] xl:text-[48px] tracking-tight leading-[1.1] text-center max-w-2xl">
          From setup to value in minutes
        </h1>
        <p className="text-neutral-600 text-[17px] md:text-[19px] lg:text-[19px] xl:text-[19px] tracking-tight font-walsham max-w-2xl text-center leading-[1.4]">
          Getting started with our AI social media assistant is intentionally
          simple. Create an account with Sintra AI, set your preferences, and
          let Soshie take it from there.
        </p>
      </div>

      {/* Steps section */}
      <div className="max-w-6xl mx-auto px-5 md:px-8 lg:px-10 pb-20 md:pb-32">
        {/* Mobile / Tablet: vertical scroll-pinned layout */}
        <div
          ref={mobileSectionRef}
          className="lg:hidden relative"
          style={{ height: `${STEPS.length * 100}vh` }}
        >
          <div className="sticky top-0 h-screen flex items-center justify-center">
            <div className="flex flex-col items-center gap-6 w-full max-w-sm mx-auto">
              {/* Image */}
              <div className="relative rounded-3xl overflow-hidden w-[260px] h-[488px] md:w-[320px] md:h-[600px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={mobileActiveStep}
                    className="absolute inset-0"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <Image
                      src={STEPS[mobileActiveStep].image}
                      alt={STEPS[mobileActiveStep].title}
                      fill
                      className="object-cover"
                      sizes="320px"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Title + Description */}
              <div className="text-center px-4">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={mobileActiveStep}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <h3 className="text-[22px] md:text-[26px] leading-snug font-walsham text-zinc-900">
                      {STEPS[mobileActiveStep].title}
                    </h3>
                    <p className="text-zinc-500 text-[15px] md:text-[17px] leading-relaxed mt-3 font-walsham">
                      {STEPS[mobileActiveStep].description}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop: sticky image + scrolling steps */}
        <div
          ref={sectionRef}
          className="hidden lg:block relative"
          style={{ height: `${STEPS.length * 100}vh` }}
        >
          <div className="sticky top-0 h-screen flex items-center">
            <div className="w-full flex items-center" style={{ gap: 133 }}>
              {/* Left: Fixed-size phone image */}
              <div
                className="shrink-0 flex justify-center"
                style={{ width: 392 }}
              >
                <div
                  className="relative rounded-3xl overflow-hidden"
                  style={{ width: 392, height: 736 }}
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeStep}
                      className="absolute inset-0"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <Image
                        src={STEPS[activeStep].image}
                        alt={STEPS[activeStep].title}
                        fill
                        className="object-cover"
                        sizes="392px"
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Right: Steps list */}
              <div className="flex-1">
                {STEPS.map((step, i) => (
                  <StepRow
                    key={i}
                    step={step}
                    isActive={i === activeStep}
                    onClick={() => setActiveStep(i)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setup;
