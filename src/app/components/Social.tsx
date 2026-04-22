import Image from "next/image";
import React from "react";

const brainCards = [
  {
    heading: "Brand tone (Memory item)",
    subheading: "Simple, Friendly and Approachable",
    iconSrc:
      "https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/69125a44ee547a53ae4c3914__ButtonItem.Leading.svg",
    position: "bottom-center" as const,
  },
  {
    heading: "company_pricing.pdf (file item)",
    subheading: "To revolutionize the travel experience.",
    iconSrc:
      "https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/69125dd5964332aa097abfef_FeaturedIcon.svg",
    position: "bottom-left" as const,
  },
  {
    heading: "walkers.com (Webpage item)",
    subheading: "Walkers website home page.",
    iconSrc:
      "https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/69125dd5f7ca61cf0d5874b6_FeaturedIcon2.svg",
    position: "top-right" as const,
  },
  {
    heading: "Companies values (Memory item)",
    subheading: "Safety, Velocity, Speed, Quality.",
    iconSrc:
      "https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/69125dd5f7ca61cf0d5874b6_FeaturedIcon2.svg",
    position: "top-left" as const,
  },
  {
    heading: "walker_service.docx (file item)",
    subheading: "Walker sells regular trucking services.",
    iconSrc:
      "https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/69125a44ee547a53ae4c3914__ButtonItem.Leading.svg",
    position: "bottom-right" as const,
  },
];

const cardPositionClasses: Record<string, string> = {
  "top-left": "lg:absolute lg:-top-30 lg:-left-50",
  "top-right": "lg:absolute lg:-top-30 lg:-right-50",
  "bottom-left": "lg:absolute lg:bottom-[8rem] lg:-left-55",
  "bottom-right": "lg:absolute lg:bottom-[8rem] lg:-right-55",
  "bottom-center": "lg:absolute lg:-bottom-18 lg:left-1/2 lg:-translate-x-1/2",
};

const Social = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <div className="flex flex-col items-center justify-center pt-60  md:pt-72 lg:pt-96 xl:pt-96 xl:pb-[192px] px-4">
        <h1 className="text-white text-[30px] md:text-[30px] lg:text-[30px] xl:text-[30px] tracking-tight leading-[1.1] mb-4 text-center lg:pt-48 xl:max-w-lg font-walsham">
          Shaped by real social performance. Trained on 1M+ posts.
        </h1>
        <p className="text-white text-[14px] md:text-[14px] lg:text-[14px] xl:text-[14px] tracking-tight font-walsham max-w-2xl text-center leading-[1.4] mb-12 md:mb-16 lg:mb-0">
          Trained on millions of real social posts, Soshie understands what
          practical intelligence - helping your brand post smarter and move
          faster. It&apos;s balanced, credible, and fits seamlessly into any
          workflows - only data-driven creativity, refined at scale.
        </p>
      </div>

      <div className="relative h-full py-16 px-4 md:py-[128px] md:px-[72px]">
        <h1 className="relative z-10 text-white text-[30px] md:text-[30px] lg:text-[48px] xl:text-[48px] tracking-tight leading-[1.1] mb-4 lg:mb-40 text-center font-walsham mt-16 xl:mb-[213px]">
          Soshie is powered by Brain AI
        </h1>

        <div className="relative mx-auto w-full max-w-[60rem] lg:h-[29.888rem]">
          {/* Card photo pack behind the brain */}
          <Image
            src="https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/6980606a9e70d793c0ec0e63_brain-ai_photo-pack-1.avif"
            alt="Brain AI photo cards"
            width={2000}
            height={2000}
            className="absolute z-[3] object-cover overflow-visible left-1/2 -translate-x-1/2 w-[18rem] h-[11rem] -top-4 md:w-[35rem] md:h-[20rem] md:-top-8 lg:w-[53rem] lg:h-[29.888rem] lg:-top-24"
            style={{ maxWidth: "none" }}
          />

          {/* Brain image on top */}
          <Image
            src="https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/691d6303264a7df642c98618_sintra-brain.avif"
            alt="Soshie is powered by Brain AI"
            width={2000}
            height={2000}
            className="relative lg:absolute z-[4] w-full max-w-[14rem] md:max-w-[22rem] lg:min-w-[29.759rem] lg:max-w-[29.759rem] h-auto object-contain mx-auto lg:left-1/2 lg:-translate-x-1/2 lg:top-1/2 lg:-translate-y-1/2"
          />

          {/* Mobile stacked cards image */}
          <div className="relative flex justify-center -mt-8 md:-mt-12 lg:hidden">
            <Image
              src="https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/69142e3816dfd75bd089c388_card-group_mobile.avif"
              alt="Brain AI cards"
              width={800}
              height={600}
              className="w-full max-w-[380px] md:max-w-[480px] h-auto object-contain"
            />
          </div>

          {/* Desktop absolute-positioned cards */}
          <div className="hidden lg:block">
            {brainCards.map((card) => (
              <div
                key={card.heading}
                className={`${cardPositionClasses[card.position]} bg-white rounded-2xl shadow-lg flex items-center gap-3 p-4 w-[448px] h-[86px]`}
                style={{ zIndex: 5 }}
              >
                <div className="shrink-0 flex items-center justify-center">
                  <img
                    src={card.iconSrc}
                    alt=""
                    width={32}
                    height={32}
                    className="w-8 h-8"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-[18px] xl:text-[21px] text-gray-900 leading-tight font-walsham truncate">
                    {card.heading}
                  </h3>
                  <p className="text-[14px] xl:text-[18px] text-gray-500 leading-snug mt-0.5 font-walsham line-clamp-1">
                    {card.subheading}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Social;
