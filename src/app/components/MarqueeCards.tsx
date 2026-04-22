import React from "react";
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";
import {
  TrendingUp,
  Lightbulb,
  Search,
  Infinity,
  Calendar,
  Video,
  Rocket,
  BarChart3,
  Target,
  Wrench,
  RefreshCw,
  MessageSquare,
} from "lucide-react";

const cards = [
  {
    icon: BarChart3,
    title: "Build a content plan",
    description: "Turn strategy into a clear, actionable posting plan.",
    color: "bg-[#C95951]",
  },
  {
    icon: Infinity,
    title: "Create a content roadmap",
    description: "Map content themes and campaigns across weeks and launches.",
    color: "bg-[#DE7644]",
  },
  {
    icon: Search,
    title: "Generate content",
    description: "Create posts, captions, and variations ready for review.",
    color: "bg-[#CD6C52]",
  },
  {
    icon: Lightbulb,
    title: "Identify quick wins",
    description:
      "Spot simple, high-impact content opportunities worth shipping fast.",
    color: "bg-[#C94F5E]",
  },
  {
    icon: Calendar,
    title: "Provide expert-style insights",
    description: "Turn industry knowledge into clear, on-brand commentary.",
    color: "bg-[#9C5766]",
  },
  {
    icon: Video,
    title: "Analyze performance trends",
    description:
      "Track what works over time and translate it into next actions.",
    color: "bg-[#7E5670]",
  },
  {
    icon: Wrench,
    title: "Coordinate execution tasks",
    description:
      "Break work into clear steps so nothing stalls or gets missed.",
    color: "bg-[#8E6B88]",
  },
  {
    icon: RefreshCw,
    title: "Send weekly recaps & summaries",
    description:
      "Summarize output, performance, and next priorities in one place.",
    color: "bg-[#886989]",
  },
  {
    icon: Rocket,
    title: "Prepare launch messaging & teasers",
    description:
      "Plan and draft content around upcoming releases, features, or milestones ahead of time.",
    color: "bg-[#5F4E7C]",
  },
  {
    icon: Target,
    title: "Distill your experiments",
    description:
      "Distill takeaways from experiments, launches, or pilot brands into clear insights.",
    color: "bg-[#7F628A]",
  },
  {
    icon: TrendingUp,
    title: "Reinforce vision & positioning",
    description:
      "Translate your mission, values, and long-term direction into shareable moments.",
    color: "bg-[#655482]",
  },
  {
    icon: MessageSquare,
    title: "Curate user-generated content",
    description:
      "Identify, adapt, and organize customer quotes, feedback, and shared content.",
    color: "bg-neutral-500",
  },
];

const firstRow = cards.slice(0, 4);
const secondRow = cards.slice(4, 8);
const thirdRow = cards.slice(8, 12);

const MarqueeCard = ({
  icon: Icon,
  title,
  description,
  color,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
}) => {
  return (
    <figure
      className={cn(
        "relative flex flex-col justify-start items-start cursor-pointer w-[240px] min-h-[180px] md:w-[295px] md:min-h-[195px] p-4 md:p-6",
        color,
      )}
      style={{
        backgroundColor: "#ffffff1a",
        border: "2px solid #fff3",
        borderRadius: "1rem",
        marginLeft: ".5rem",
        marginRight: ".5rem",
        gap: "0.75rem",
      }}
    >
      <Icon className="text-white shrink-0" size={33} strokeWidth={1.5} />
      <div className="flex flex-col gap-2 md:gap-4">
        <h3 className="text-[15px] md:text-[17px] font-medium text-white leading-tight font-walsham">
          {title}
        </h3>
        <p className="text-[13px] md:text-[14px] text-white/80 leading-snug md:leading-relaxed font-walsham">
          {description}
        </p>
      </div>
    </figure>
  );
};

const MarqueeCards = () => {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-16 lg:py-12">
      {/* First row */}
      <Marquee className="[--duration:15s] [--gap:0.5rem] mb-4">
        {firstRow.map((card, index) => (
          <MarqueeCard key={`first-${index}`} {...card} />
        ))}
      </Marquee>

      {/* Second row - reverse direction */}
      <Marquee reverse className="[--duration:15s] [--gap:0.5rem] mb-4">
        {secondRow.map((card, index) => (
          <MarqueeCard key={`second-${index}`} {...card} />
        ))}
      </Marquee>

      {/* Third row - hidden on mobile, shown on md+ */}
      <Marquee className="[--duration:15s] [--gap:0.5rem] hidden md:flex">
        {thirdRow.map((card, index) => (
          <MarqueeCard key={`third-${index}`} {...card} />
        ))}
      </Marquee>
    </div>
  );
};

export default MarqueeCards;
