import React from "react";
import Image from "next/image";

const features = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 33 33"
        fill="none"
        className="w-8 h-8"
      >
        <path
          d="M3.32767 17.4806C3.14041 17.1841 3.04678 17.0359 2.99437 16.8072C2.955 16.6354 2.955 16.3646 2.99437 16.1928C3.04678 15.9641 3.14041 15.8159 3.32767 15.5194C4.8751 13.0692 9.48117 6.875 16.5006 6.875C23.5199 6.875 28.126 13.0692 29.6734 15.5194C29.8607 15.8159 29.9543 15.9641 30.0067 16.1928C30.0461 16.3646 30.0461 16.6354 30.0067 16.8072C29.9543 17.0359 29.8607 17.1841 29.6734 17.4806C28.126 19.9308 23.5199 26.125 16.5006 26.125C9.48118 26.125 4.8751 19.9308 3.32767 17.4806Z"
          stroke="#6949E7"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.5006 20.625C18.7787 20.625 20.6256 18.7782 20.6256 16.5C20.6256 14.2218 18.7787 12.375 16.5006 12.375C14.2224 12.375 12.3756 14.2218 12.3756 16.5C12.3756 18.7782 14.2224 20.625 16.5006 20.625Z"
          stroke="#6949E7"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Understands your audience at scale.",
    image:
      "https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/69105c167da4db6ff7757709_helperlp-card01.avif",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 33 33"
        fill="none"
        className="w-8 h-8"
      >
        <path
          d="M6.1875 30.25V23.375M6.1875 9.625V2.75M2.75 6.1875H9.625M2.75 26.8125H9.625M17.875 4.125L15.4905 10.3247C15.1027 11.3329 14.9089 11.837 14.6074 12.261C14.3401 12.6368 14.0118 12.9651 13.636 13.2324C13.212 13.5339 12.7079 13.7277 11.6997 14.1155L5.5 16.5L11.6997 18.8845C12.7079 19.2723 13.212 19.4661 13.636 19.7676C14.0118 20.0349 14.3401 20.3632 14.6074 20.739C14.9089 21.163 15.1027 21.6671 15.4905 22.6753L17.875 28.875L20.2595 22.6753C20.6473 21.6671 20.8411 21.163 21.1426 20.739C21.4099 20.3632 21.7382 20.0349 22.114 19.7676C22.538 19.4661 23.0421 19.2723 24.0503 18.8845L30.25 16.5L24.0503 14.1155C23.0421 13.7277 22.538 13.5339 22.114 13.2324C21.7382 12.9651 21.4099 12.6368 21.1426 12.261C20.8411 11.837 20.6473 11.3329 20.2595 10.3247L17.875 4.125Z"
          stroke="#6949E7"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Creates relevant, ready-to-publish content.",
    image:
      "https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/69105c16449a1ed62d3f596a_helperlp-card02.avif",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 33 33"
        fill="none"
        className="w-8 h-8"
      >
        <path
          d="M28.875 13.75H4.125M22 2.75V8.25M11 2.75V8.25M14.4375 19.25L16.5 17.875V24.75M14.7812 24.75H18.2188M10.725 30.25H22.275C24.5852 30.25 25.7403 30.25 26.6227 29.8004C27.3989 29.4049 28.0299 28.7739 28.4254 27.9977C28.875 27.1153 28.875 25.9602 28.875 23.65V12.1C28.875 9.78978 28.875 8.63468 28.4254 7.75229C28.0299 6.97612 27.3989 6.34508 26.6227 5.9496C25.7403 5.5 24.5852 5.5 22.275 5.5H10.725C8.41478 5.5 7.25968 5.5 6.37729 5.9496C5.60112 6.34508 4.97008 6.97612 4.5746 7.75229C4.125 8.63468 4.125 9.78978 4.125 12.1V23.65C4.125 25.9602 4.125 27.1153 4.5746 27.9977C4.97008 28.7739 5.60112 29.4049 6.37729 29.8004C7.25968 30.25 8.41478 30.25 10.725 30.25Z"
          stroke="#6949E7"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Schedules, publishes, and reviews performance.",
    image:
      "https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/69105c169323d93e5719d57f_helperlp-card03.avif",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 33 33"
        fill="none"
        className="w-8 h-8"
      >
        <path
          d="M22.6875 17.875C26.2306 17.875 29.2046 15.4384 30.0253 12.1495C29.437 12.2964 28.8213 12.3744 28.1875 12.3744C24.0108 12.3744 20.625 8.98851 20.625 4.81186C20.625 4.17831 20.7029 3.56295 20.8497 2.97485C17.5612 3.79587 15.125 6.76968 15.125 10.3125C15.125 11.5675 15.4307 12.7511 15.9717 13.7929M6.875 9.62494V4.12494M4.125 6.87494H9.625M8.25 30.2499C5.21243 30.2499 2.75 27.7875 2.75 24.7499C2.75 22.0304 4.72382 19.7718 7.31704 19.3287C8.42704 16.0834 11.5035 13.7499 15.125 13.7499C18.2713 13.7499 21.0062 15.5112 22.3976 18.1015C22.9274 17.9539 23.4857 17.8749 24.0625 17.8749C27.4798 17.8749 30.25 20.6452 30.25 24.0624C30.25 27.4797 27.4798 30.2499 24.0625 30.2499C18.7917 30.2499 13.5208 30.2499 8.25 30.2499Z"
          stroke="#6949E7"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Keeps your socials growing 24/7.",
    image:
      "https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/69105c16babd9ffd4d0f5ff1_helperlp-card04.avif",
  },
];

const Features = () => {
  return (
    <div className="bg-neutral-50 w-full min-h-screen px-4 md:px-10 xl:px-[76px]">
      <div className="flex justify-center flex-col py-16 md:py-20 xl:py-[128px] items-center">
        <h1 className="text-black font-walsham text-[40px] md:text-[56px] lg:text-[48px] xl:text-[48px] tracking-tight leading-[1.1] mb-4 text-center xl:max-w-2xl">
          First AI social media assistant{" "}
          <span className="inline-block">
            <img
              className="w-9.5 h-9.5 rounded-full inline-block object-cover"
              src="https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/690fb6e3bec5818fa838eec9_navbar_helper-image-soshie.avif"
            />
          </span>{" "}
          teams actually want
        </h1>
        <p className="text-neutral-600 text-[17px] md:text-[19px] xl:text-[19px] px-4 md:px-8 lg:px-0 tracking-tight font-walsham max-w-2xl text-center leading-[1.4] mb-12 md:mb-16">
          Social media tools are easy to buy, but hard to keep up with. Soshie
          is different. She's built to operate independently, make smart
          decisions, and keep things moving without constant input from your
          team.
        </p>

        <div className="w-full max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-3xl overflow-hidden flex flex-col bg-white shadow-xs
                w-full
                h-[550px]
                md:w-auto
                md:h-[625px]
                lg:h-[650px]
                xl:w-[300px]
                xl:h-[625px]
              "
            >
              <div className="pt-[54px] px-6 pb-6 flex flex-col gap-4 items-center text-center">
                <div className="text-neutral-900">{feature.icon}</div>
                <h3 className="text-neutral-900 font-walsham text-[20.8px] leading-[1.2] font-medium">
                  {feature.title}
                </h3>
              </div>

              <div className="relative flex-1 min-h-0 p-4 md:p-6 lg:p-6 xl:p-0">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-contain md:object-contain lg:object-contain xl:object-cover object-top"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 300px"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="w-full px-4 md:px-8 xl:my-64 xl:px-[400px] lg:px-0 mb-12 md:mb-16 flex justify-center items-center">
          <div
            className="text-[24px] md:text-[24px] lg:text-[35px] xl:text-[35px] font-walsham font-medium text-left leading-[1.3] tracking-tight pt-14 lg:pt-0"
            style={{ color: "#9B7FD4" }}
          >
            <p className="mb-8">
              Most teams don't fail at social media - they abandon it.
            </p>
            <p className="mb-8">
              Not because it doesn't work, but because it becomes another thing
              to manage. Soshie{" "}
              <span className="inline-block">
                <img
                  className="w-9.5 h-9.5 rounded-full inline-block object-cover"
                  src="https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/690fb6e3bec5818fa838eec9_navbar_helper-image-soshie.avif"
                  alt="Soshie"
                />
              </span>{" "}
              makes it sustainable by running it quietly in the background.
            </p>
            <p>One AI social media agent - no extra headcount required.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
