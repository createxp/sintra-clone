"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const SINTRA_ICON =
  "https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/69113711efd8106efff104e0_Icon-1.svg";

const agents = [
  {
    name: "Vizzy",
    role: "Your AI virtual\nassistant.",
    color: "#7EC8E3",
    href: "https://www.sintra.ai/ai-employees/vizzy",
    cta: "Get Vizzy",
    image:
      "https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/69146f5421f4fbd4ad82fd20_final1%206.avif",
  },
  {
    name: "Penn",
    role: "Your AI Copywriting\nExpert",
    color: "#5CC9A7",
    href: "https://www.sintra.ai/ai-employees/penn",
    cta: "Get Penn",
    image:
      "https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/69146f5434ac981ce757eadd_final1%205.avif",
  },
  {
    name: "Scouty",
    role: "Your AI Recruitment\nManager",
    color: "#A8D8B9",
    href: "https://www.sintra.ai/ai-employees/scouty",
    cta: "Get Scouty",
    image:
      "https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/69146f54a2e5f3d06d947773_final1%207.avif",
  },
];

const MoreAbout = () => {
  return (
    <section className="w-full bg-[#fafafa]">
      <div className="w-full px-4 md:px-[44px] lg:px-[76px] py-16 md:py-24 lg:py-[128px]">
        {/* Header */}
        <motion.div
          className="flex flex-col items-center text-center mb-12 md:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="mb-4">
            <Image
              src={SINTRA_ICON}
              alt="Sintra AI"
              width={48}
              height={48}
              className="object-contain"
            />
          </div>

          <h2 className="font-walsham text-black text-[26px] md:text-[36px] lg:text-[48px] leading-[1.15] tracking-tight mb-4 md:mb-5">
            There&apos;s even more to love about Sintra AI
          </h2>

          <p className="font-walsham text-gray-500 text-[14px] md:text-[15px] lg:text-[19px] leading-relaxed max-w-2xl mb-6">
            Beyond Soshie, 11 more AI Employees are here to help you grow — each
            specialized in areas from marketing and customer engagement to
            operations and data analytics. Explore their skills and see how they
            can power your business.
          </p>

          <a
            href="https://www.sintra.ai/x"
            className="inline-flex items-center gap-1.5 font-walsham text-[14px] md:text-[15px] lg:text-[17px] font-medium text-[#3366FF] hover:underline transition-colors"
          >
            Compare all AI Employees
            <ArrowRight className="size-4 shrink-0" />
          </a>
        </motion.div>

        {/* Agent Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 xl:px-[44px]">
          {agents.map((agent, i) => (
            <motion.div
              key={agent.name}
              className="relative bg-white rounded-3xl overflow-hidden pt-[48px] px-[48px] pb-0 flex flex-col items-center text-center min-h-[480px] md:min-h-[520px] lg:min-h-[560px]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: i * 0.15,
                ease: "easeOut",
              }}
            >
              <span
                className="block font-wonderkids text-[28px] md:text-[30px] lg:text-[32px] leading-none mb-2"
                style={{ color: agent.color }}
              >
                {agent.name}
              </span>

              <h3 className="font-walsham text-black text-[20px] md:text-[22px] lg:text-[36px] leading-[1.25] tracking-tight mb-5 whitespace-pre-line">
                {agent.role}
              </h3>

              <a
                href={agent.href}
                className="inline-flex items-center gap-2 rounded-full bg-[#3366FF] px-6 py-3 font-walsham text-[13px] md:text-[14px] font-medium text-white transition-opacity hover:opacity-90"
              >
                {agent.cta}
              </a>

              {/* Agent Character Image */}
              <div className="relative w-full flex-1 mt-6">
                <img
                  src={agent.image}
                  alt={`${agent.name} AI character`}
                  className="absolute left-1/2 -translate-x-1/2 bottom-[-10rem] block object-contain"
                  style={{
                    width: "18rem",
                    height: "30rem",
                    maxWidth: "none",
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MoreAbout;
