"use client";

import React from "react";
import EmployeeCard from "./EmployeeCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const employeeData = [
  {
    id: 1,
    video:
      "https://cdn.prod.website-files.com/673ead940412138dd4bf8e83%2F67460d0381cab44875de2583_vizzy_idle_short_blink_1-transcode.mp4",
    heading: "Vizzy",
    subheading:
      "Sales Manager: Milli uses your business insights to craft compelling cold call scripts, design persuasive cold emails, and build pitches that help you close deals with confidence. Milli is also capable of adapting sales strategies to different audiences and markets.",
  },
  {
    id: 2,
    video:
      "https://cdn.prod.website-files.com/673ead940412138dd4bf8e83%2F67460d0a566f3616a558637a_milli_idle_short_blink_1-transcode.mp4",
    heading: "Millie",
    subheading:
      "Business Development Manager: Your go-to AI for business development, crafting growth strategies, delivering business insights, and excelling in AI for marketing to ensure success in product launches, business analysis, and more. Buddy is your strategic partner for achieving business development goals.",
  },
  {
    id: 3,
    video:
      "https://cdn.prod.website-files.com/673ead940412138dd4bf8e83%2F67460c4c525b5d57a4e8bb02_buddy_idle_short_blink_1-transcode.mp4",
    heading: "Buddy",
    subheading:
      "Customer Support Specialist: An AI smart and charming AI for customer support. Cassie crafts expertly tailored responses to customer queries while maintaining your brand's unique voice. Cassie works alongside your human employees, delivering personalized and exceptional customer support.",
  },
  {
    id: 4,
    video:
      "https://cdn.prod.website-files.com/673ead940412138dd4bf8e83%2F67460ccdf6e4fa275a7c75a9_cassie_idle_short_blink_1-transcode.mp4",
    heading: "Cassie",
    subheading:
      "Customer Support Specialist: As a smart and charming AI for customer support, Cassie crafts expertly tailored responses to customer queries while maintaining your brand's unique voice. Cassie works alongside your human employees, supporting them to deliver exceptional customer support.",
  },
  {
    id: 5,
    video:
      "https://cdn.prod.website-files.com/673ead940412138dd4bf8e83%2F67460cd41f42038374d698aa_commet_idle_short_blink_1-transcode.mp4",
    heading: "Commet",
    subheading:
      "eCommerce Manager: Your trusted eCommerce guru, here to guide you through online store setup, product launches, and streamline business processes with efficient processing of orders, inventory, and customer data.",
  },
  {
    id: 6,
    video:
      "https://cdn.prod.website-files.com/673ead940412138dd4bf8e83%2F67460cdad71380b27d8ea973_dexter_idle_short_blink_1-transcode.mp4",
    heading: "Dexter",
    subheading:
      "Data Analyst: A data genius seamlessly transforming complex data into precise calculations, forecasts, and clear, actionable business insights that drive results. With Dexter, you gain actionable insights that inform your business decisions.",
  },
  {
    id: 7,
    video:
      "https://cdn.prod.website-files.com/673ead940412138dd4bf8e83%2F67460cdf842bd7f9ed3683d5_emmie_idle_short_blink_1-transcode.mp4",
    heading: "Emmie",
    subheading:
      "Virtual Assistant: A trustworthy AI for business owners and busy entrepreneurs to handle calendars, schedule meetings, plan trips, or simply ask AI questions about daily challenges.",
  },
  {
    id: 8,
    video:
      "https://cdn.prod.website-files.com/673ead940412138dd4bf8e83%2F67460ce788887965a3f51d76_gigi_idle_short_blink_1-transcode.mp4",
    heading: "Gigi",
    subheading:
      "Personal Growth Coach: Boost productivity with AI—whether you need help planning meals, organizing study sessions, or building workout routines, Gigi is here to support your journey to a better self and bring balance and improvement to your daily life.",
  },
  {
    id: 9,
    video:
      "https://cdn.prod.website-files.com/673ead940412138dd4bf8e83%2F67460ced1ae3bb4bd972d59e_penn_idle_short_blink_1-transcode.mp4",
    heading: "Penn",
    subheading:
      "Copywriter: Dedicated to writing compelling copy for your ads, blog posts, websites, advertorials and other marketing campaigns that convert readers into customers. For example, Penn can generate engaging ad copy for a new product launch or craft a persuasive email marketing campaign to boost conversions.",
  },
  {
    id: 10,
    video:
      "https://cdn.prod.website-files.com/673ead940412138dd4bf8e83%2F67460cf23297a144839f1512_scouty_idle_short_blink_1-transcode.mp4",
    heading: "Scouty",
    subheading:
      "Recruiter: Turning hiring challenges into opportunities, crafting magnetic job posts, and guiding smooth team onboarding. Scouty can support recruitment needs across all departments, from HR to finance to customer service. For any recruitment-related topics, this is your go-to employee to ask AI questions.",
  },
  {
    id: 11,
    video:
      "https://cdn.prod.website-files.com/673ead940412138dd4bf8e83%2F67460cf8218f6fb4b7f708b2_seomi_idle_short_blilnk_1-transcode.mp4",
    heading: "Seomi",
    subheading:
      "SEO Specialist: Streamline business processes with Seomi's proven SEO strategies, SEO-optimized blog posts, and AI-powered solutions to boost your website rankings. Seomi brings advanced SEO skills to your team, helping you stay ahead in search rankings.",
  },
  {
    id: 12,
    video:
      "https://cdn.prod.website-files.com/673ead940412138dd4bf8e83%2F67460cfe78dd86c42545bad8_soshie_idle_short_blink_1-transcode.mp4",
    heading: "Soshie",
    subheading:
      "Social Media Manager: Boost Productivity with AI social media manager by using business automation tools—generate content, plan strategies, schedule posts, find trends, and more. Soshie can collaborate with your marketing and content teams to ensure a unified social media strategy.",
  },
];

const Employe = () => {
  return (
    <div className="bg-black w-full min-h-screen py-20">
      <div className="flex flex-col items-center justify-center gap-2 mb-16 px-[20px] md:px-[76px]">
        <h1 className="text-white font-walsham text-4xl md:text-[44px] max-w-2xl text-center lg:text-[48px] tracking-tight">
          Find The Right AI Employee for Any Business
        </h1>
        <p className="text-neutral-400 text-xl tracking-tight font-walsham lg:max-w-3xl lg:text-center">
          Every business is different. Your team should be too. That's why we
          built AI employees for real business roles. Each worker is designed to
          take ownership of a specific function - so you can stop juggling,
          start delegating, and build a team that actually scales with you.
        </p>
      </div>

      {/* Carousel */}
      <div className="relative w-full mask-l-from-75% mask-r-from-75%">
        {/* Left/Right gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-28 bg-linear-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-28 bg-linear-to-r from-transparent to-black z-10 pointer-events-none" />

        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full px-8 md:px-16"
        >
          <CarouselContent className="-ml-8">
            {employeeData.map((employee) => (
              <CarouselItem key={employee.id} className="pl-8 basis-auto">
                <EmployeeCard
                  video={employee.video}
                  heading={employee.heading}
                  subheading={employee.subheading}
                />
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Arrows sit on top of cards at the edges */}
          <CarouselPrevious className="left-4 absolute md:left-40 z-20 size-12 bg-neutral-600 text-white border border-white/20 backdrop-blur-sm hover:text-white cursor-pointer" />
          <CarouselNext className="right-4 md:right-40 absolute z-20 size-12 bg-neutral-600 text-white border border-white/20 backdrop-blur-sm hover:text-white cursor-pointer" />
        </Carousel>
      </div>
      <div className="flex justify-center mt-12">
        <button
          className="px-4 py-3 rounded-full bg-primary text-white cursor-pointer text-lg transition-colors duration-200 font-walsham"
          // You can add onClick functionality here if needed
        >
          Get helpers
        </button>
      </div>
    </div>
  );
};

export default Employe;
