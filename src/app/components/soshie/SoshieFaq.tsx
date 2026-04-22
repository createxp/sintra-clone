"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const SUPPORT_IMAGE =
  "https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/69113ac07961d251239b6837_image%20475.avif";

const faqData = [
  {
    question: "What is an AI assistant for social media?",
    answer:
      "An AI assistant for social media helps manage the day-to-day work behind your social channels. It plans content, drafts posts, organizes schedules, and keeps everything ready to publish - so your team stays visible without constantly managing social media.",
  },
  {
    question: "How does AI in social media actually help teams?",
    answer:
      "Many teams struggle because social media requires constant attention. AI in social media helps by removing the manual workload. For example, Soshie handles planning, content preparation, and scheduling in the background, so your presence stays active without pulling focus from your core work.",
  },
  {
    question: "When teams need an AI tool for social media?",
    answer:
      "An AI makes sense when social media becomes a distraction instead of a growth channel. Soshie is designed for teams that want consistent output without adding headcount or operational overhead.",
  },
  {
    question: "Is an AI social media scheduler enough on its own?",
    answer:
      "For basic posting, yes - but scheduling alone doesn't solve planning or relevance. Soshie combines scheduling with content planning, platform adaptation, and performance feedback, so posts are prepared with intent, not just placed on a calendar.",
  },
  {
    question: "Why do most AI social media tools still feel like more work?",
    answer:
      "Most AI tools stop at content generation. Soshie goes further by providing a well-rounded AI social media management service, executing strategy independently - organizing content, adapting it per platform, and preparing it for review so you're not juggling multiple tools or workflows.",
  },
];

const SoshieFaq = () => {
  return (
    <section className="w-full bg-white px-5 md:px-11 xl:px-[248px] py-16 md:py-20 xl:py-[128px]">
      {/* Top: Heading + Support Card */}
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 xl:gap-20 mb-12 md:mb-16 lg:mb-20">
        {/* Left column */}
        <div className="lg:w-1/2 xl:w-[45%]">
          {/* Lightbulb icon */}
          <div className="mb-5 md:mb-6">
            <Image
              src="https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/6911371c6cd3f8244a6bf8a0_lightbulb-02.svg"
              alt="Lightbulb"
              width={60}
              height={60}
            />
          </div>

          <h2 className="font-walsham text-[24px] md:text-[28px] lg:text-[48px] xl:text-[48px] leading-[1.1] tracking-tight text-black mb-4">
            Our Social Media AI. Your FAQs
          </h2>

          <p className="font-walsham text-[13px] md:text-[14px] lg:text-[17px] xl:text-[17px] text-neutral-500 leading-normal mb-6 max-w-sm">
            Pricing for all helpers starts at $97/m with Sintra X. You can save
            extra with annual billing.
          </p>

          <a
            href="https://www.sintra.ai/pricing"
            className="inline-flex items-center gap-2 bg-[#2563EB] hover:bg-[#1d4ed8] text-white font-walsham font-medium text-[14px] md:text-[15px] rounded-full px-6 py-3 transition-colors"
          >
            Try Soshie risk-free
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Right column: Support card */}
        <div className="lg:w-1/2 xl:w-[55%]">
          <div className="relative bg-[#FAFAFA] rounded-2xl p-6 md:p-8 overflow-hidden min-h-[220px] sm:min-h-[260px] lg:min-h-[300px]">
            {/* Text content */}
            <div className="relative z-10 max-w-[55%] sm:max-w-[50%]">
              <h3 className="font-walsham text-[22px] md:text-[26px] lg:text-[30px] xl:text-[30px] leading-[1.15] tracking-tight text-black mb-3">
                Support available
                <br />
                24/7
              </h3>
              <p className="font-walsham text-[14px] md:text-[15px] lg:text-[17px] xl:text-[17px] text-neutral-500 leading-normal mb-5">
                Need help? It&apos;s always within reach - get support that fits
                your schedule.
              </p>
              <a
                href="https://www.sintra.ai/contact"
                className="inline-flex items-center gap-1.5 text-[14px] font-walsham font-medium text-[#2563EB] hover:text-[#1d4ed8] transition-colors bg-white p-5 rounded-full"
              >
                Get help
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Support image — absolute bottom-right */}
            <div className="absolute bottom-0 right-0 w-[50%] sm:w-[55%] md:w-[50%] lg:w-72 xl:w-72 h-full pointer-events-none">
              <Image
                src={SUPPORT_IMAGE}
                alt="Sintra support team"
                fill
                className="object-contain object-bottom-right"
                sizes="(max-width: 640px) 50vw, 300px"
              />
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Accordion */}
      <div className="w-full max-w-5xl mx-auto lg:max-w-none">
        <Accordion type="single" collapsible className="flex flex-col">
          {faqData.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-b border-neutral-200 bg-[#FAFAFA] rounded-lg first:border-t my-2  shadow-2xs"
            >
              <AccordionTrigger className="py-5 md:py-5 px-4 md:px-6 text-black text-[15px] md:text-[17px] lg:text-[18px] font-walsham font-medium hover:no-underline cursor-pointer **:data-[slot=accordion-trigger-icon]:size-6! md:**:data-[slot=accordion-trigger-icon]:size-7! **:data-[slot=accordion-trigger-icon]:text-neutral-400!">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-neutral-500 text-[14px] md:text-[16px] lg:text-[17px] font-walsham leading-[1.6] px-4 md:px-6 pb-5 md:pb-6">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default SoshieFaq;
