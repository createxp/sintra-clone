import Image from "next/image";
import React from "react";

const testimonials = [
  {
    id: 1,
    name: "SintraAI has been a Game-Changer for My Business!",
    avatar:
      "https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/6735d8ee29c42f15c6707fa7_Facebook%20SVG%20Icons.svg",
    avatarBg: "bg-orange-500",
    content:
      "I can't recommend SintraAI enough. It's like having a personal business manager available 24/7, mapping out tasks to promote growth and offering accountability. I no longer feel overwhelmed but instead feel a renewed sense of focus and control every day.",
    date: "December 06, 2025",
    location: "Scozzle Covington • US",
  },
  {
    id: 2,
    name: "Sintra X Saved Me Time",
    avatar:
      "https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/6735d8de64d6f4d7f26fd126_Instagram%20SVG%20Icon.svg",
    avatarBg: "bg-pink-500",
    content:
      "Signed up for Sintra X - is felt overwhelming at first, but once I understood how to access it, it turned into a creative powerhouse. Support is top-notch, and the daily integrations impress me.",
    date: "Dec 17, 2024",
    location: "Isaac Ukoni • US",
  },
  {
    id: 3,
    name: "Early but satisfied user",
    avatar:
      "https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/6735d8f48f6442c3908dd984_Gmail%20Logo%20SVG.svg",
    avatarBg: "bg-purple-500",
    content:
      "I've only been using Sintra for a couple of weeks, but it experience has been great—especially with the social media bot reaching out to my with new ideas. The pull model feels super proactive and makes me more confident in my daily tasks.",
    date: "December 20, 2025",
    location: "Baron Odvili • US",
  },
  {
    id: 4,
    name: "Some Time They're Too Effective with Ideas",
    avatar:
      "https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/6735d8efa606f510309578f2_Google%20Calendar%20Icon.svg",
    avatarBg: "bg-blue-500",
    content:
      "I'm not usually one to give top marks, but once I got comfortable with Sintra's AI features, I was impressed. It strikes a balance between being overly automated and still allowing some user input.",
    date: "December 15, 2025",
    location: "Martin Schultz • Germany",
  },
  {
    id: 5,
    name: "Perfect for Solopreneurs—New or Seasoned",
    avatar:
      "https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/6735d8d567988dc4ab79316a_Outlook%20SVG%20Icon.svg",
    avatarBg: "bg-red-500",
    content:
      "Since I'll first saw how quickly tool, team members can scale tasks for my team, and how they integrate with everything, I've felt more productive. It gives me freedom to be strategic rather than buried in operations all day.",
    date: "December 08, 2025",
    location: "Natasha Bryant • UK",
  },
  {
    id: 6,
    name: "1st class service by everyone at Sintra.ai",
    avatar:
      "https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/6735d8ef1b32e53cf36b4a36_Google%20Drive%20SVG%20Icon.svg",
    avatarBg: "bg-yellow-500",
    content:
      "I challenge anyone to compare other platforms to Sintra.ai and their staff - you won't find a better experience. Everyone is professional, understanding, and genuinely helpful.",
    date: "December 12, 2025",
    location: "Oliver Morrison • Australia",
  },
];

const Testimonials = () => {
  return (
    <div className="bg-black w-full py-16 md:py-20 lg:py-24 px-[20px] md:px-[40px] lg:px-[120px]">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-white font-walsham text-[40px] md:text-[56px] lg:text-[64px] tracking-tight leading-[1.1] mb-6">
            AI workers of the month, every month.
          </h2>
          <p className="text-gray-400 font-walsham text-base md:text-lg lg:text-[20px] leading-[1.4] max-w-4xl mx-auto">
            Trusted by 140,000+ entrepreneurs across 100+ countries. Whether
            you're a solo founder, a growing team, or a global company, Sintra
            adapts to how you work – and grows with you. Join tens of thousands
            of businesses across the world using AI employees and get ahead of
            your competition. New features are added continuously, so your team
            keeps getting better, month after month.
          </p>
        </div>

        <div
          className="relative grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6"
          style={{
            WebkitMaskImage:
              "linear-gradient(to bottom, #000 70%, transparent 100%)",
            maskImage: "linear-gradient(to bottom, #000 70%, transparent 100%)",
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`bg-neutral-900 rounded-2xl p-5 flex flex-col gap-3 border border-neutral-800 lg:border-0 w-full ${
                index >= 2 ? "hidden lg:flex" : ""
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-walsham text-[16px] lg:text-[15px] font-medium leading-[1.3] mb-2">
                    {testimonial.name}
                  </h3>
                  <Image
                    src="https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/68da2d687c59ae461c3428a3_testimonial-stars.png"
                    alt="5 stars"
                    width={100}
                    height={20}
                    className="w-[100px] h-auto"
                  />
                </div>
                <div
                  className={`w-8 h-8 rounded-full ${testimonial.avatarBg} flex items-center justify-center flex-shrink-0 lg:hidden`}
                >
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-sm font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                </div>
              </div>

              <p className="text-white/80 font-walsham text-[15px] lg:text-[13px] leading-[1.5] flex-1">
                {testimonial.content}
              </p>

              <p className="text-gray-500 font-walsham text-[13px] lg:text-[12px] mt-auto">
                {testimonial.date} • {testimonial.location}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile badge */}
        <div className="md:hidden flex flex-col items-center bg-neutral-900/80 rounded-4xl px-6 py-2 -mt-8 mx-auto max-w-[320px] relative z-10">
          <div className="flex -space-x-2 ">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 border-2 border-neutral-900"
              />
            ))}
          </div>
          <p className="text-white font-walsham text-[15px] font-medium text-center">
            40,000+ business owners use Sintra
          </p>
          <div className="w-full border-t border-white/10 pt-4">
            <button className="w-full flex items-center justify-center gap-2 text-white font-walsham text-sm hover:opacity-80 transition-opacity">
              View more
              <span className="w-5 h-5 rounded-full border border-white/40 flex items-center justify-center">
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
        <div className="hidden md:flex items-center justify-center gap-4 md:-mt-10 mt-12 lg:-mt-8 xl:-mt-10 relative z-10 bg-neutral-900 w-fit mx-auto rounded-full">
          <div className="flex -space-x-2">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 border-2 border-black"
              />
            ))}
          </div>
          <div className="flex items-center gap-2 text-white font-walsham">
            <span className="text-lg font-medium">140,000+</span>
            <span className="">business owners use Sintra</span>
          </div>
          <button className="ml-4 px-4 py-2 text-white font-walsham text-sm hover:bg-white/10 transition-colors flex items-center gap-2">
            View more
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
