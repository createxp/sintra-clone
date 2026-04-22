import React from "react";
import Image from "next/image";
import { Lock, ShieldCheck, Fingerprint, LockKeyhole } from "lucide-react";

const cards = [
  {
    number: "1",
    title: "Always up to date",
    description: (
      <>
        Brain AI stores your brand context, preferences, and materials,{" "}
        <span className="text-gray-400">
          so Soshie doesn&apos;t &quot;forget&quot; how your business works as
          things evolve.
        </span>
      </>
    ),
    image:
      "https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/691190b52519d79d5f521867_bdc05d463999fc5ec0fcf562bacefdd4_knowledge-card1.avif",
  },
  {
    number: "2",
    title: "Context that compounds",
    description: (
      <>
        As you refine strategy, approve content, and ship updates,{" "}
        <span className="text-gray-400">
          Brain AI keeps everything connected - no re-explaining, no resets.
        </span>
      </>
    ),
    image:
      "https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/6911918a206f64ecee2416de_knowledge-card-2.avif",
  },
  {
    number: "3",
    title: "One source of truth",
    description: (
      <>
        Your strategy, voice, and references live in one place,{" "}
        <span className="text-gray-400">
          ensuring consistency across every post, campaign, and channel.
        </span>
      </>
    ),
    image:
      "https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/6911921ae2b3f50d86032e4e_64a80dbf885d4584868af19c1893ba83_knowledge-card-3.avif",
  },
];

const privacyCards = [
  {
    icon: <ShieldCheck size={33} strokeWidth={1.5} className="text-gray-800" />,
    title: "Encrypted by design",
    description:
      "From your first login to the last addition in your business knowledge vault, every interaction is encrypted in transit and at rest. This means that neither Sintra nor any third party can access your files or analytics.",
    link: "Learn more about privacy protocols",
  },
  {
    icon: <Fingerprint size={33} strokeWidth={1.5} className="text-gray-800" />,
    title: "Full Data Ownership",
    description:
      "\"Your content, your strategy, your AI – they belong entirely to you. At any time, you can delete your data or export it. We don't train models on it or resell it, and your Brain AI is built exclusively on your own assets.",
    link: "Learn more about privacy protocols",
  },
  {
    icon: <Lock size={33} strokeWidth={1.5} className="text-gray-800" />,
    title: "GDPR Compliant",
    description:
      "We follow the highest standards of data protection under the GDPR framework. Your personal information is collected and stored transparently - with clear rights to access, modify, or delete your data at any time.",
    link: "Learn more about privacy protocols",
  },
];

const Business = () => {
  return (
    <>
      <div className="relative overflow-hidden w-full min-h-screen xl:px-[76px]">
        <div className="flex flex-col items-center justify-center xl:px-[44px] w-full ">
          <h1 className="xl:text-[48px] text-center md:text-left font-walsham text-white w-full text-[30px] leading-[1] tracking-tight">
            All your business context in one workspace - a centralized library
            that brings together your brand details, preferences, and materials
            to Soshie - so nothing gets lost in translation.
          </h1>

          {/* Cards section */}
          <div
            className="flex flex-col lg:flex-row items-start justify-center gap-10 lg:gap-12 xl:gap-16  md:px-12  xl:px-0 
           mt-12 md:mt-16 xl:mt-20 pb-16 xl:pb-24"
          >
            {cards.map((card, index) => {
              const isEven = index % 2 !== 0;
              const rotation = isEven
                ? "rotate-6 lg:rotate-0"
                : "-rotate-6 lg:rotate-0";
              return (
                <div
                  key={card.number}
                  className={`w-full lg:max-w-none lg:w-1/3 xl:w-[400px] mx-auto lg:mx-0 xl:px-10 flex lg:flex-col items-start gap-6 lg:gap-0 ${
                    isEven
                      ? "flex-row lg:flex-col"
                      : "flex-row-reverse lg:flex-col"
                  }`}
                >
                  <div className="flex-1 min-w-0">
                    <h2 className="hidden md:block text-white text-[22px] md:text-[26px] xl:text-[30px] font-walsham font-semibold leading-tight">
                      {card.number}. {card.title}
                    </h2>

                    <p className="text-white text-[17px] md:text-[16px] xl:text-[19px] font-walsham leading-snug mt-3 xl:mt-4">
                      {card.description}
                    </p>
                  </div>
                  <div
                    className={`w-[55%] md:w-[50%] shrink-0 lg:w-full mt-0 lg:mt-8 ${rotation}`}
                  >
                    <Image
                      src={card.image}
                      alt={card.title}
                      width={1000}
                      height={1000}
                      className="w-full h-auto rounded-xl"
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Privacy section */}
          <section className="w-full py-16 md:py-8 xl:py-8">
            <div className="flex flex-col items-center text-center mb-10 md:mb-14 xl:mb-16">
              <LockKeyhole
                size={40}
                strokeWidth={1.5}
                className="text-white mb-4 md:mb-5 md:w-[50px]! md:h-[50px]! xl:w-[60px]! xl:h-[60px]!"
              />
              <h2 className="text-[28px] md:text-[36px] xl:text-[48px] font-walsham font-semibold text-white leading-[1.15]">
                With great powers
                <br />
                comes great privacy.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 px-4 xl:gap-[31px] mx-auto">
              {privacyCards.map((card) => (
                <div
                  key={card.title}
                  className="bg-[#fafafa] rounded-2xl p-6 md:p-7 xl:p-[36px] flex flex-col"
                >
                  <div className="mb-3 xl:mb-[12px]">{card.icon}</div>
                  <h3 className="text-[16px] md:text-[18px] xl:text-[20px] font-walsham font-semibold text-gray-900 mb-1.5 xl:mb-[6px]">
                    {card.title}
                  </h3>
                  <p className="text-[12px] md:text-[13px] xl:text-[14px] font-walsham text-gray-500 leading-relaxed mb-3 xl:mb-[12px]">
                    {card.description}
                  </p>
                  <a
                    href="#"
                    className="text-[14px] md:text-[14px] xl:text-[14px] font-walsham text-blue-500 hover:text-blue-600 transition-colors mt-auto"
                  >
                    {card.link}
                  </a>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Business;
