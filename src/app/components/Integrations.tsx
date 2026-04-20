import Image from "next/image";
import React from "react";

const Integrations = () => {
  const socialIcons = [
    {
      src: "https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/6735d8ee29c42f15c6707fa7_Facebook%20SVG%20Icons.svg",
      alt: "Facebook",
    },
    {
      src: "https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/6735d8de64d6f4d7f26fd126_Instagram%20SVG%20Icon.svg",
      alt: "Instagram",
    },
    {
      src: "https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/6735d8f48f6442c3908dd984_Gmail%20Logo%20SVG.svg",
      alt: "Gmail",
    },
    {
      src: "https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/6735d8efa606f510309578f2_Google%20Calendar%20Icon.svg",
      alt: "Google Calendar",
    },
    {
      src: "https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/6735d8d567988dc4ab79316a_Outlook%20SVG%20Icon.svg",
      alt: "Outlook",
    },
    {
      src: "https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/6735d8ef1b32e53cf36b4a36_Google%20Drive%20SVG%20Icon.svg",
      alt: "Google Drive",
    },
    {
      src: "https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/6735d8e5d76655df048cc4f9_Strava%20SVG%20Icon.svg",
      alt: "Strava",
    },
    {
      src: "https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/67864f97bae3e849a2171fa7_notion.avif",
      alt: "Notion",
    },
  ];

  return (
    <div className="bg-black w-full min-h-screen lg:px-[76px] pb-16 pt-16">
      <div className="flex lg:flex-row flex-col md:flex-col gap-8 lg:gap-12 px-[20px] md:px-[40px] lg:px-[44px]">
        <div className="flex flex-col justify-center gap-6 lg:gap-8 flex-1 order-1 lg:order-1">
          <h1 className="text-white font-walsham text-[40px] md:text-[56px] lg:text-[48px] xl:text-[64px] tracking-tight leading-[1.1] md:text-center lg:text-left">
            Integrates with your favorite tools.
          </h1>
          <p className="text-white text-xl lg:text-[20.8px] tracking-tight font-walsham leading-[1.3] max-w-2xl md:text-center lg:text-left">
            Your AI employees don't live in a silo. They work directly inside
            the tools your business already relies on - from email and calendars
            to social platforms, CRMs, to personal apps. By connecting your
            existing stack, Sintra gives your digital staff the context they
            need to follow your workflows, act at the right moment, and keep
            work moving without manual handoffs. No new processes to learn. No
            disruption. Just smarter execution across your tools.
          </p>

          <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-4 gap-4 md:gap-4 lg:gap-8 max-w-[200px] md:max-w-full lg:max-w-[320px] mx-auto md:mt-10 md:mx-auto lg:mx-0">
            {socialIcons.map((icon, index) => (
              <div
                key={index}
                className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 flex items-center justify-center"
              >
                <Image
                  src={icon.src}
                  alt={icon.alt}
                  width={64}
                  height={64}
                  className="object-contain w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center items-center flex-1 order-2 lg:order-2 mt-18">
          <div
            className="relative w-full max-w-[300px] h-[490px] md:max-w-[400px] md:h-[654px] lg:w-[480px] lg:h-[785px]"
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, #000 70%, transparent 100%)",
              maskImage:
                "linear-gradient(to bottom, #000 70%, transparent 100%)",
            }}
          >
            <Image
              src="https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/6735d29b63a7448ed3346cf2_iphone-integrations-clear.avif"
              alt="Integration phone mockup"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 300px, (max-width: 1024px) 400px, 480px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Integrations;
