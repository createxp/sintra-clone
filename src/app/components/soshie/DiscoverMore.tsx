"use client";

import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const links = [
  {
    text: "facebook ad competitor analysis",
    href: "/soshie/facebook-ad-competitor-analysis",
  },
  {
    text: "b2b twitter marketing strategy",
    href: "/soshie/b2b-twitter-marketing-strategy-generator",
  },
  {
    text: "social media competitor analysis",
    href: "/soshie/social-media-competitor-analysis",
  },
  {
    text: "facebook page growth strategy",
    href: "/soshie/facebook-page-growth-strategy-generator",
  },
  {
    text: "facebook search engine optimization",
    href: "/soshie/facebook-search-engine-optimization",
  },
  {
    text: "tiktok video idea generator",
    href: "/soshie/tiktok-video-idea-generator",
  },
  {
    text: "tiktok comment reply generator",
    href: "/soshie/tiktok-comment-reply-generator",
  },
  {
    text: "linkedin post idea generator",
    href: "/soshie/linkedin-post-idea-generator",
  },
  {
    text: "linkedin cold outreach strategy",
    href: "/soshie/linkedin-cold-outreach-strategy-generator",
  },
  {
    text: "linkedin thought leadership strategy",
    href: "/soshie/linkedin-thought-leadership-strategy-generator",
  },
  {
    text: "linkedin b2b marketing strategy",
    href: "/soshie/linkedin-b2b-marketing-strategy-generator",
  },
  {
    text: "linkedin lead generation strategy",
    href: "/soshie/linkedin-lead-generation-strategy-generator",
  },
  {
    text: "influencer outreach email generator",
    href: "/soshie/influencer-outreach-email-generator",
  },
  {
    text: "b2b influencer marketing strategy",
    href: "/soshie/b2b-influencer-marketing-strategy-generator",
  },
  {
    text: "instagram influencer marketing strategy",
    href: "/soshie/instagram-influencer-marketing-strategy-generator",
  },
  {
    text: "influencer campaign roi analysis",
    href: "/soshie/influencer-campaign-roi-calculator",
  },
  {
    text: "long-term influencer marketing strategy",
    href: "/soshie/long-term-influencer-marketing-strategy-generator",
  },
];

const DiscoverMore = () => {
  const [showAll, setShowAll] = useState(false);

  const getVisibleLinks = () => {
    if (showAll) return links;
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      return links.slice(0, 4);
    }
    return links.slice(0, 12);
  };

  const visibleLinks = getVisibleLinks();

  return (
    <section className="w-full bg-[#fafafa] lg:px-[76px]">
      <div className="w-full px-4 md:px-[44px] lg:px-[px-44px] py-16 md:py-24 lg:py-12 ">
        <motion.h2
          className="font-walsham text-black text-[26px] md:text-[36px] lg:text-[48px] leading-[1.15] tracking-tight mb-8 md:mb-10 lg:mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Discover more
        </motion.h2>

        <motion.div
          className="flex flex-wrap gap-3 mb-8"
          style={
            !showAll
              ? {
                WebkitMaskImage:
                  "linear-gradient(to bottom, black 60%, transparent 100%)",
                maskImage:
                  "linear-gradient(to bottom, black 60%, transparent 100%)",
              }
              : {}
          }
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        >
          {visibleLinks.map((link, i) => (
            <motion.a
              key={link.href}
              href={link.href}
              className="inline-flex items-center gap-2 bg-neutral-200 rounded-full px-6 py-4 font-walsham text-[13px] md:text-[17px] font-medium text-black transition-colors capitalize"
            >
              {link.text}
              <ArrowRight className="size-3.5 shrink-0" />
            </motion.a>
          ))}
        </motion.div>

        <button
          onClick={() => setShowAll(!showAll)}
          className="font-walsham text-[14px] md:text-[20px]  text-black cursor-pointer  transition-colors "
        >
          {showAll ? "View less" : "View more"}
        </button>
      </div>
    </section>
  );
};

export default DiscoverMore;
