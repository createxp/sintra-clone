"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const SOSHIE_AVATAR =
  "https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/690fb6e3bec5818fa838eec9_navbar_helper-image-soshie.avif";

const cards = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 33 33"
        fill="none"
      >
        <path
          d="M4.125 10.725C4.125 8.41478 4.125 7.25967 4.5746 6.37729C4.97008 5.60112 5.60112 4.97008 6.37729 4.5746C7.25968 4.125 8.41478 4.125 10.725 4.125H22.275C24.5852 4.125 25.7403 4.125 26.6227 4.5746C27.3989 4.97008 28.0299 5.60112 28.4254 6.37729C28.875 7.25967 28.875 8.41478 28.875 10.725V18.15C28.875 20.4602 28.875 21.6153 28.4254 22.4977C28.0299 23.2739 27.3989 23.9049 26.6227 24.3004C25.7403 24.75 24.5852 24.75 22.275 24.75H18.8152C17.9571 24.75 17.528 24.75 17.1177 24.8342C16.7536 24.9089 16.4013 25.0325 16.0703 25.2016C15.6972 25.3922 15.3622 25.6602 14.6922 26.1963L11.4122 28.8203C10.84 29.278 10.554 29.5068 10.3132 29.5071C10.1039 29.5073 9.90581 29.4121 9.77519 29.2485C9.625 29.0603 9.625 28.694 9.625 27.9613V24.75C8.34629 24.75 7.70693 24.75 7.18237 24.6094C5.75887 24.228 4.64698 23.1161 4.26556 21.6926C4.125 21.1681 4.125 20.5287 4.125 19.25V10.725Z"
          stroke="#0077FF"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.4958 10.5865C15.2587 9.15805 13.1957 8.77381 11.6457 10.0818C10.0957 11.3898 9.8775 13.5767 11.0947 15.1237C11.8488 16.0821 13.7416 17.8326 15.0727 19.0258C15.5616 19.4641 15.8061 19.6833 16.0995 19.7716C16.3512 19.8473 16.6403 19.8473 16.892 19.7716C17.1854 19.6833 17.4299 19.4641 17.9188 19.0258C19.2499 17.8326 21.1427 16.0821 21.8968 15.1237C23.114 13.5767 22.9224 11.3761 21.3458 10.0818C19.7692 8.78757 17.7329 9.15805 16.4958 10.5865Z"
          stroke="#0077FF"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    heading: "Available always,\nat your command.",
    subheading:
      "Ask and it's underway - any hour. Soshie drafts, schedules, and reminds without hand-holding.",
    image:
      "https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/691175dbfc331a344f963acc_helper-lp-helped_desktop-visual01.avif",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 33 33"
        fill="none"
      >
        <path
          d="M4.125 10.725C4.125 8.41478 4.125 7.25967 4.5746 6.37729C4.97008 5.60112 5.60112 4.97008 6.37729 4.5746C7.25968 4.125 8.41478 4.125 10.725 4.125H22.275C24.5852 4.125 25.7403 4.125 26.6227 4.5746C27.3989 4.97008 28.0299 5.60112 28.4254 6.37729C28.875 7.25967 28.875 8.41478 28.875 10.725V18.15C28.875 20.4602 28.875 21.6153 28.4254 22.4977C28.0299 23.2739 27.3989 23.9049 26.6227 24.3004C25.7403 24.75 24.5852 24.75 22.275 24.75H18.8152C17.9571 24.75 17.528 24.75 17.1177 24.8342C16.7536 24.9089 16.4013 25.0325 16.0703 25.2016C15.6972 25.3922 15.3622 25.6602 14.6922 26.1963L11.4122 28.8203C10.84 29.278 10.554 29.5068 10.3132 29.5071C10.1039 29.5073 9.90581 29.4121 9.77519 29.2485C9.625 29.0603 9.625 28.694 9.625 27.9613V24.75C8.34629 24.75 7.70693 24.75 7.18237 24.6094C5.75887 24.228 4.64698 23.1161 4.26556 21.6926C4.125 21.1681 4.125 20.5287 4.125 19.25V10.725Z"
          stroke="#0077FF"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.4958 10.5865C15.2587 9.15805 13.1957 8.77381 11.6457 10.0818C10.0957 11.3898 9.8775 13.5767 11.0947 15.1237C11.8488 16.0821 13.7416 17.8326 15.0727 19.0258C15.5616 19.4641 15.8061 19.6833 16.0995 19.7716C16.3512 19.8473 16.6403 19.8473 16.892 19.7716C17.1854 19.6833 17.4299 19.4641 17.9188 19.0258C19.2499 17.8326 21.1427 16.0821 21.8968 15.1237C23.114 13.5767 22.9224 11.3761 21.3458 10.0818C19.7692 8.78757 17.7329 9.15805 16.4958 10.5865Z"
          stroke="#0077FF"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    heading: "Works with just\na few clicks.",
    subheading:
      "Type what you need, approve, done. Edit in-line and schedule across channels in seconds.",
    image:
      "https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/691175db464ab037182f3d32_helper-lp-helped_desktop-visual02.avif",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 33 33"
        fill="none"
      >
        <path
          d="M17.8758 19.25L13.7508 15.125M20.64 4.8125V2.75M26.0566 6.95841L27.515 5.5M26.0566 17.875L27.515 19.3334M15.14 6.95841L13.6816 5.5M28.2025 12.375H30.265M8.4314 28.6944L21.1326 15.9931C21.6772 15.4486 21.9494 15.1764 22.0514 14.8624C22.1412 14.5862 22.1412 14.2888 22.0514 14.0126C21.9494 13.6986 21.6772 13.4264 21.1326 12.8819L20.1189 11.8681C19.5744 11.3236 19.3021 11.0514 18.9882 10.9493C18.712 10.8596 18.4145 10.8596 18.1384 10.9493C17.8244 11.0514 17.5522 11.3236 17.0076 11.8681L4.3064 24.5694C3.76188 25.1139 3.48962 25.3861 3.38761 25.7001C3.29788 25.9763 3.29788 26.2737 3.38761 26.5499C3.48962 26.8639 3.76188 27.1361 4.3064 27.6806L5.32013 28.6944C5.86466 29.2389 6.13692 29.5111 6.45087 29.6132C6.72703 29.7029 7.02451 29.7029 7.30067 29.6132C7.61462 29.5111 7.88688 29.2389 8.4314 28.6944Z"
          stroke="#0077FF"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    heading: "Adapts to\nevery platform.",
    subheading:
      "Posts are shaped for each channel - formats, lengths, and best practices included. No copy-paste, no rework.",
    image:
      "https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/691175db80f7c5be5b485498_helper-lp-helped_desktop-visual03.avif",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 33 33"
        fill="none"
      >
        <path
          d="M5.5 17.875H26.9322C27.5681 17.875 27.886 17.875 28.0676 17.7417C28.226 17.6254 28.327 17.4469 28.3453 17.2513C28.3662 17.027 28.2026 16.7543 27.8754 16.2091L25.0896 11.5659C24.9661 11.3602 24.9044 11.2573 24.8803 11.1475C24.8589 11.0503 24.8589 10.9497 24.8803 10.8525C24.9044 10.7427 24.9661 10.6398 25.0896 10.4341L27.8754 5.79095C28.2026 5.24566 28.3662 4.97302 28.3453 4.74869C28.327 4.55308 28.226 4.37462 28.0676 4.25835C27.886 4.125 27.5681 4.125 26.9322 4.125H5.5L5.5 28.875"
          stroke="#0077FF"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    heading: "Speaks fluently in\n100+ native languages.",
    subheading:
      'Write once - she adapts tone and nuance per market. Local feel, without the "machine" voice.',
    image:
      "https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/691175db6d97c08c825601e3_helper-lp-helped_desktop-visual04.avif",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 33 33"
        fill="none"
      >
        <path
          d="M13.75 24.2806V27.5C13.75 29.0188 14.9812 30.25 16.5 30.25C18.0188 30.25 19.25 29.0188 19.25 27.5V24.2806M16.5 2.75V4.125M4.125 16.5H2.75M7.5625 7.5625L6.73737 6.73737M25.4375 7.5625L26.2628 6.73737M30.25 16.5H28.875M24.75 16.5C24.75 21.0564 21.0564 24.75 16.5 24.75C11.9437 24.75 8.25 21.0564 8.25 16.5C8.25 11.9437 11.9437 8.25 16.5 8.25C21.0564 8.25 24.75 11.9437 24.75 16.5Z"
          stroke="#0077FF"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    heading: "Consistent\nover time.",
    subheading:
      "Your past decisions, approvals, and patterns inform future output - so results stay consistent as things evolve.",
    image:
      "https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/691175db7a628126cda4a8bc_helper-lp-helped_desktop-visual05.avif",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 33 33"
        fill="none"
      >
        <path
          d="M8.25 27.6205H11.8391C12.3071 27.6205 12.7722 27.6762 13.2259 27.7876L17.0182 28.7092C17.8411 28.9096 18.6983 28.9291 19.5298 28.7676L23.7228 27.9519C24.8305 27.7361 25.8494 27.2057 26.648 26.4289L29.6146 23.5431C30.4618 22.7203 30.4618 21.3853 29.6146 20.5612C28.8518 19.8192 27.644 19.7357 26.7811 20.3649L23.3236 22.8874C22.8284 23.2493 22.2259 23.4442 21.6063 23.4442H18.2676L20.3927 23.4441C21.5905 23.4441 22.5608 22.5003 22.5608 21.3351V20.9133C22.5608 19.9458 21.8839 19.1022 20.9194 18.8683L17.6393 18.0706C17.1055 17.9411 16.5589 17.8757 16.0093 17.8757C14.6827 17.8757 12.2814 18.9741 12.2814 18.9741L8.25 20.6599M2.75 20.0757L2.75 28.0507C2.75 28.8208 2.75 29.2058 2.89987 29.4999C3.03169 29.7587 3.24204 29.969 3.50076 30.1008C3.79489 30.2507 4.17993 30.2507 4.95 30.2507H6.05C6.82007 30.2507 7.20511 30.2507 7.49924 30.1008C7.75796 29.969 7.96831 29.7587 8.10013 29.4999C8.25 29.2058 8.25 28.8208 8.25 28.0507V20.0757C8.25 19.3056 8.25 18.9206 8.10013 18.6265C7.96831 18.3677 7.75796 18.1574 7.49924 18.0256C7.20511 17.8757 6.82007 17.8757 6.05 17.8757H4.95C4.17993 17.8757 3.79489 17.8757 3.50076 18.0256C3.24204 18.1574 3.03169 18.3677 2.89987 18.6265C2.75 18.9206 2.75 19.3056 2.75 20.0757ZM23.6381 4.94006C22.8175 3.22288 20.9256 2.31316 19.0856 3.19122C17.2456 4.06928 16.4618 6.15161 17.2321 7.9796C17.7082 9.10934 19.0723 11.3032 20.0449 12.8144C20.4042 13.3727 20.5839 13.6519 20.8464 13.8152C21.0715 13.9553 21.3533 14.0308 21.6183 14.0221C21.9272 14.0119 22.2224 13.8599 22.8128 13.556C24.4107 12.7336 26.6889 11.5157 27.6661 10.7754C29.2473 9.57747 29.6389 7.37563 28.4552 5.70179C27.2714 4.02795 25.2074 3.86325 23.6381 4.94006Z"
          stroke="#0077FF"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    heading: "Delegates the rest\nto others.",
    subheading:
      "When needed, Soshie can loop in other helpers to research, draft, or refine - working together behind the scenes.",
    image:
      "https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/691175dc794007e7d9d49ab8_helper-lp-helped_desktop-visual06.avif",
  },
];

const Media = () => {
  return (
    <section className="w-full bg-[#fafafa] py-16 md:py-24 lg:py-32 px-4 md:px-10 xl:px-[76px]">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Heading */}
        <motion.div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h2 className="font-walsham text-black text-[30px] md:text-[30px] lg:text-[48px] xl:text-[48px] leading-[1.15] tracking-tight inline-flex items-center justify-center flex-wrap gap-x-3">
            <Image
              src={SOSHIE_AVATAR}
              alt="Soshie"
              width={48}
              height={48}
              className="rounded-full w-[30px] h-[30px] lg:w-[48px] lg:h-[48px] inline-block"
            />
            <span>
              Soshie is the most{" "}
              <span className="text-red-500">&#10084;&#65039;</span> loved AI
              agent for social media
            </span>
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2"
          style={{
            gridColumnGap: "1.5rem",
            gridRowGap: "1.5rem",
            gridTemplateRows: "1fr 1fr 1fr",
            gridAutoRows: "1fr",
            gridAutoColumns: "1fr",
          }}
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-3xl overflow-hidden flex flex-col"
              style={{
                minHeight: 0,
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
                ease: "easeOut",
              }}
            >
              {/* Text Content */}
              <div className="pt-10 px-6 md:pt-14 md:px-10 lg:pt-[80px] lg:px-[80px] xl:pt-[80px] xl:px-[80px] flex flex-col items-center text-center">
                <div className="mb-4 lg:mb-5">{card.icon}</div>
                <h3 className="font-walsham text-black text-[24px] md:text-[30px] lg:text-[40px] xl:text-[48px] leading-[1.1] tracking-tight whitespace-pre-line">
                  {card.heading}
                </h3>
                <p className="font-walsham text-gray-400 text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] leading-normal mt-3 lg:mt-4 max-w-[420px]">
                  {card.subheading}
                </p>
              </div>

              {/* Card Image */}
              <div className="relative flex-1 min-h-[200px] md:min-h-[280px] lg:min-h-[400px] xl:min-h-[460px] mt-6 md:mt-8 lg:mt-10">
                <Image
                  src={card.image}
                  alt={card.heading.replace(/\n/g, " ")}
                  fill
                  className="object-contain object-bottom"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 630px"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Media;
