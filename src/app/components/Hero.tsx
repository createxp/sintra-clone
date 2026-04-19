import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden px-5 md:px-10 lg:px-10 xl:px-[120px]">
      {/* Background video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden bg-base-black">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-x-[-1] object-[40%_center] md:object-[50%_center]"
        >
          <source
            src="https://d1oil5daeuar1j.cloudfront.net/vizzy_waving.webm"
            type="video/webm"
          />
        </video>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 z-2 w-full h-full bg-[linear-gradient(#000_2%,#0000_21%),linear-gradient(#0000_64%,#000_98%),linear-gradient(225deg,#0000_33%,#000c_65%,#000_82%)]" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-start justify-center h-full max-w-7xl mt-16 lg:mt-80 xl:mt-6 md:mt-30">
        <h1
          className="text-white font-walsham font-medium text-[40px] md:text-[64px] mb-4 leading-[1.06]"
          style={{ letterSpacing: "-0.03em" }}
        >
          AI Employees: Your
          <br />
          First Digital
          <br />
          Workers Team That
          <br />
          Never Sleep
        </h1>

        <p className=" font-walsham text-xl  lg:text-[20.8px] md:text-[20px] leading-[1.4] text-neutral-400 tracking-tight md:max-w-6xl lg:max-w-3xl xl:max-w-[800px] mb-8">
          Hire AI employees today - get your first 24/7 digital team that runs
          your socials, inbox, website, content, customer support, and business
          and sales operations without adding extra headcount.
        </p>

        <button className="bg-primary text-white rounded-full font-medium font-walsham text-[17px] px-button-x py-button-y cursor-pointer transition-opacity hover:opacity-90">
          Get Sintra
        </button>
      </div>
    </section>
  );
};

export default Hero;
