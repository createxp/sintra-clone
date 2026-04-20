import Image from "next/image";
import React from "react";

export const automationFeatureCards = [
  {
    id: "soshie",
    variant: "purple" as const,
    heading: "Soshie, schedule social media posts for me",
    subheading:
      "Automate your social media game with AI for marketing. Write, create, and post content effortlessly with AI-powered solutions.",
    image:
      "https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/67477e8395c6fe6685369d24_automation-soshie.avif",
    alt: "Soshie — review posts and social automation",
  },
  {
    id: "cassie",
    variant: "blue" as const,
    heading: "Cassie, check my Facebook comments",
    subheading:
      "Engage your audience with business automation tools. Use AI for customer support to analyze comments and craft personalized responses. By automating comment analysis, your team can focus on building stronger customer relationships.",
    image:
      "https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/67477e835d7ac382c6ebb990_automation-cassie.avif",
    alt: "Cassie — customer support and suggested actions",
  },
  {
    id: "vizzy",
    variant: "orange" as const,
    heading: "Vizzy, help me prepare for today's meetings",
    subheading:
      "Boost productivity with AI. Streamline business processes with daily summaries based on your email and calendar to keep your schedule on track.",
    image:
      "https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/67477e83b8cd1c76d0434bef_automation-vizzy.avif",
    alt: "Vizzy — meetings, actions, and email summary",
  },
] as const;

const headingClass =
  "text-white font-walsham tracking-tight leading-[1.15] text-[30px] md:text-[30px] md:font-normal lg:text-[40px] lg:max-w-md";
const subheadingClass =
  "text-neutral-300 font-walsham leading-[1.3] lg:leading-[1.45] text-[19px] md:text-[20px] lg:text-[20px] max-w-[420px]";

/** Purple card — same width × height for text column and image column */
const purpleCellClass =
  "box-border mx-auto w-full max-w-[345px] h-[361px] md:mx-0 md:max-w-[318px] md:h-[342px] md:w-[318px] lg:h-[516.04px] lg:w-[452.2px] lg:max-w-[452.2px] xl:h-[584.48px] xl:w-[511.2px] xl:max-w-[511.2px]";

/** Blue & orange cards — design dimensions per breakpoint */
const bottomCardDimensions =
  "mx-auto box-border h-[522px] w-full max-w-[347px] md:h-[687px] md:max-w-[311px] lg:h-[763px] lg:max-w-[430px] lg:w-[430px] xl:h-[738px] xl:max-w-[488px] xl:w-[488px] justify-self-center";

export function AutomationFeatureCards() {
  const [purple, blue, orange] = automationFeatureCards;

  return (
    <div className="grid w-full grid-cols-1 gap-8 lg:gap-14 font-walsham md:grid-cols-2 px-8 bg-black md:px-14 lg:px-14 2xl:px-[250px]">
      {/* Purple — full width row; inner text | image from md+ */}
      <article
        className="overflow-hidden rounded-[28px] border border-[#ffffff1a] px-[28px] pt-[48px] md:col-span-2"
        style={{
          backgroundImage: "linear-gradient(#8b5cf6, #513690)",
          boxShadow: "0 0 70px #823aff66",
        }}
      >
        <div className="grid w-full grid-cols-1 gap-0 md:mx-auto md:w-fit md:grid-cols-2">
          <div
            className={`flex min-h-0 flex-col justify-center gap-4 overflow-y-auto ${purpleCellClass}`}
          >
            <h2 className={headingClass}>{purple.heading}</h2>
            <p className={subheadingClass}>{purple.subheading}</p>
          </div>
          <div
            className={`relative min-h-0 overflow-hidden ${purpleCellClass}`}
          >
            <Image
              src={purple.image}
              alt={purple.alt}
              fill
              className="object-contain object-[bottom_right]"
              sizes="(max-width: 768px) 345px, (max-width: 1024px) 318px, (max-width: 1280px) 452px, 511px"
            />
          </div>
        </div>
      </article>

      {/* Blue */}
      <article
        className={`flex flex-col overflow-hidden rounded-[28px] border border-[#ffffff1a] ${bottomCardDimensions}`}
        style={{
          backgroundImage: "linear-gradient(#3b82f6, #234c90)",
          boxShadow: "0 2px 70px #3371d466",
        }}
      >
        <div className="flex shrink-0 flex-col gap-4 p-8 md:py-8">
          <h2 className={`${headingClass}`}>{blue.heading}</h2>
          <p className={subheadingClass}>{blue.subheading}</p>
        </div>
        <div className="relative min-h-0 w-full flex-1 mt-1 lg:mx-4">
          <Image
            src={blue.image}
            alt={blue.alt}
            fill
            className="object-contain  md:mt-6 lg:mt-12 xl:mt-6 px-"
            sizes="(max-width: 768px) 347px, (max-width: 1024px) 311px, (max-width: 1280px) 330px, 488px"
          />
        </div>
      </article>

      {/* Orange — 16px gap between text block and art */}
      <article
        className={`flex flex-col gap-4 overflow-hidden rounded-[28px] border border-[#ffffff1a] ${bottomCardDimensions}`}
        style={{
          backgroundImage: "linear-gradient(#f59e0b, #8f5c06)",
          boxShadow: "0 0 70px #b0720a66",
        }}
      >
        <div className="flex shrink-0 flex-col gap-4 px-8 pb-0 pt-8 md:px-8 md:pt-10">
          <h2 className={headingClass}>{orange.heading}</h2>
          <p className={subheadingClass}>{orange.subheading}</p>
        </div>
        <div className="relative min-h-0 w-full flex-1">
          <Image
            src={orange.image}
            alt={orange.alt}
            fill
            className="object-contain object-bottom"
            sizes="(max-width: 768px) 347px, (max-width: 1024px) 311px, (max-width: 1280px) 430px, 488px"
          />
        </div>
      </article>
    </div>
  );
}

export default AutomationFeatureCards;
