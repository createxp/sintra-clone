import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import Features from "@/app/components/soshie/Features";
import Info from "@/app/components/soshie/Info";
import Setup from "@/app/components/soshie/Setup";

export const metadata: Metadata = {
  title: "Soshie — Social Media Manager | Sintra",
  description:
    "AI social media manager: generate content, plan strategies, schedule posts, and find trends with Soshie.",
};

const SOSHIE_HERO =
  "https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/690fbb6049c47818ac97feee_helper-lp_soshie-small-p-500.avif";

export default function SoshieAgentPage() {
  return (
    <div className="flex min-h-screen flex-col bg-neutral-50">
      <Navbar />
      <main className="w-full flex-1 px-2 mt-8 py-8 md:px-2 md:py-12 lg:px-10 xl:px-[120px] ">
        <div className="relative mx-auto w-full max-w-7xl overflow-hidden rounded-3xl">
          <div
            className="relative w-full
              min-h-[min(92dvh,720px)]
              max-md:min-h-[min(92dvh,760px)]
              max-md:aspect-[3/4]
              md:min-h-[min(64vh,680px)]
              md:aspect-[1280/594]
              lg:min-h-[min(72vh,800px)]
              xl:min-h-[min(78vh,900px)]
            "
          >
            <Image
              src={SOSHIE_HERO}
              alt="Soshie, AI social media manager"
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1200px"
              className="object-cover object-center"
            />

            <div className="absolute inset-0 z-2 flex items-center justify-center">
              <div className="flex w-full xl:max-w-4xl flex-col gap-4 px-5 py-8 sm:px-8 md:max-w-xl md:pl-10 md:pr-6 lg:pl-12 lg:pr-8 text-center">
                <h1 className="font-walsham xl:text-[64px] leading-tight tracking-tight text-white sm:text-3xl md:text-4xl lg:text-[2.5rem] text-[36px]">
                  Meet Soshie - Your new AI social media manager.
                </h1>
                <p className="max-w-prose xl:text-[19px] leading-snug text-white/90 font-walsham sm:text-[17px] sm:leading-relaxed text-[17px]">
                  From ideas to publishing - she keeps your brand visible. An AI
                  social media manager that&apos;s actually smart, fast, and
                  surprisingly easy to work with.
                </p>
                <div className="pt-1">
                  <button
                    type="button"
                    className="inline-flex w-fit cursor-pointer items-center gap-2 rounded-full border-0 bg-white px-6 py-3 pr-4 font-walsham text-[15px] font-medium text-black transition-opacity hover:opacity-90"
                  >
                    Buy now
                    <ArrowRight className="size-4 shrink-0" aria-hidden />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Features />
      <Setup />
      <Info />
      {/* <Footer /> */}
    </div>
  );
}
