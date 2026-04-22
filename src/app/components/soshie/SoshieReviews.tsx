import Image from "next/image";
import React from "react";

const reviews = [
  {
    id: 1,
    name: "SintraAI has been a Game-Changer for My Business!",
    initial: "C",
    avatarBg: "bg-orange-500",
    content:
      "I can't recommend SintraAI enough. It's like having a personal business coach 24/7, mapping out steps to grow my company and clarifying my priorities. I feel a renewed sense of focus and control every day.",
    date: "December 29, 2024",
    location: "Socrate Concepcion • US",
  },
  {
    id: 2,
    name: "Sintra X Saved Me Time",
    initial: "OZ",
    avatarBg: "bg-green-600",
    content:
      "Signed up for Sintra X—it felt overwhelming at first, but once it understood how I think, it turned into a creative powerhouse. Support is top-notch, and the daily integrations impress me.",
    date: "Dec 10, 2024",
    location: "Sami Liftoff • US",
  },
  {
    id: 3,
    name: "Early but satisfied user",
    initial: "B",
    avatarBg: "bg-purple-500",
    content:
      "I've only been using Sintra for a couple of weeks, but the experience has been great—especially with the social media bot reaching out to me with new ideas. The pull model feels super proactive and makes me more confident in my daily tasks.",
    date: "December 30, 2024",
    location: "Bayan Qandil • US",
  },
  {
    id: 4,
    name: "Perfect for Solopreneurs—New or Seasoned",
    initial: "JL",
    avatarBg: "bg-green-500",
    content:
      "Each AI bot tackles my to-do list, from scheduling tasks to crawling my website for SEO tips. I love how it set up calendar reminders for all my commitments. Sintra.ai is well worth every penny, especially for a busy single-person business.",
    date: "December 14, 2024",
    location: "Jennifer Glenn • US",
  },
  {
    id: 5,
    name: "Some Time They're Too Effective with Ideas",
    initial: "JA",
    avatarBg: "bg-blue-500",
    content:
      "I'm not usually one to give top marks, but once I got comfortable with Sintra's 12 helpers, I was blown away by their efficiency. They churn out so many analytical ideas I have to pause and digest them. It's sometimes overwhelming, but in a good way.",
    date: "December 29, 2024",
    location: "lars • DK",
  },
  {
    id: 6,
    name: "1st class service by everyone at Sintra.ai",
    initial: "T",
    avatarBg: "bg-pink-400",
    content:
      "I challenge anyone to compare other platforms to Sintra.ai and their staff—you won't find a better customer experience. Everyone is professional, responsive, and genuinely cares about helping. Truly top-notch!",
    date: "December 28, 2024",
    location: "Timothy Montjoy • US",
  },
];

const TRUSTPILOT_STARS =
  "https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/673fb94ce4b1ffb818f5fbee_trustpilot-5-stars.svg";

const SoshieReviews = () => {
  return (
    <div className="bg-white w-full py-16 md:py-20 lg:py-24 px-[20px] md:px-[40px] lg:px-[120px]">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <div className="flex justify-center mb-4">
            <img
              src="https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/69106f165e4ecda9ee8415ba_annotation-heart.svg"
              alt="Check"
              width={60}
              height={60}
              className="object-contain"
              sizes="24px"
            />
          </div>
          <h2 className="text-black font-walsham text-[32px] md:text-[44px] lg:text-[52px] tracking-tight leading-[1.1] mb-4">
            Our social media AI agent is used by
            <br />
            more than 50,000+ founders.
          </h2>
        </div>

        <div
          className="relative grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6"
          style={{
            WebkitMaskImage:
              "linear-gradient(to bottom, #000 30%, transparent 100%)",
            maskImage: "linear-gradient(to bottom, #000 70%, transparent 100%)",
          }}
        >
          {reviews.map((review, index) => (
            <div
              key={review.id}
              className={`bg-white rounded-2xl p-5 flex flex-col gap-3 border border-neutral-200 w-full ${index >= 2 ? "hidden lg:flex" : ""
                }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <h3 className="text-black font-walsham text-[17px] lg:text-[17px] font-medium leading-[1.3] mb-2">
                    {review.name}
                  </h3>
                  <Image
                    src={TRUSTPILOT_STARS}
                    alt="5 stars"
                    width={100}
                    height={20}
                    className="w-[100px] h-auto"
                  />
                </div>
                <div
                  className={`w-8 h-8 rounded-full ${review.avatarBg} flex items-center justify-center shrink-0`}
                >
                  <span className="text-white text-xs font-bold">
                    {review.initial}
                  </span>
                </div>
              </div>

              <p className="text-black/70 font-walsham text-[17px] lg:text-[17px] leading-normal flex-1">
                {review.content}
              </p>

              <p className="text-gray-400 font-walsham text-[14px] lg:text-[14px] mt-auto">
                {review.date} • {review.location}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile badge */}
        <div className="md:hidden flex flex-col items-center bg-neutral-100 rounded-4xl px-6 py-2 -mt-8 mx-auto max-w-[420px] relative z-10">
          <div className="flex -space-x-2">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full bg-linear-to-br from-purple-400 to-pink-500 border-2 border-white"
              />
            ))}
          </div>
          <p className="text-black font-walsham text-[15px] font-medium text-center">
            50,000+ founders use Sintra
          </p>
          <div className="w-full border-t border-black/10 pt-4">
            <button className="w-full flex items-center justify-center gap-2 text-black font-walsham text-sm hover:opacity-80 transition-opacity">
              View more
              <span className="w-5 h-5 rounded-full border border-black/40 flex items-center justify-center">
                <svg
                  className="w-3 h-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>

        {/* Tablet & Desktop badge */}
        <div className="hidden md:flex items-center justify-center gap-4 md:-mt-10 mt-12 lg:-mt-8 xl:-mt-10 relative z-10 bg-neutral-100 w-fit mx-auto rounded-full px-2 py-0.5 border border-neutral-200">
          <div className="flex -space-x-2">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-6 h-6 rounded-full bg-linear-to-br from-purple-400 to-pink-500 border-2 border-white"
              />
            ))}
          </div>
          <div className="flex items-center gap-2 text-black font-walsham">
            <span className="text-lg font-walsham">50,000+</span>
            <span>founders use Sintra</span>
          </div>
          <button className="ml-4 px-4 py-2 text-black font-walsham text-lg transition-colors flex items-center gap-2 rounded-full ">
            View more
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="8" strokeWidth="1.5" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v8m4-4H8"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SoshieReviews;
