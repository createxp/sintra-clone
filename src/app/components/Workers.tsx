import Image from "next/image";
import React from "react";

const Workers = () => {
  return (
    <div className="bg-black w-full min-h-[100vh] pb-64 pt-16 overflow-hidden">
      <div className="flex flex-col items-center justify-center gap-2 mb-1 px-[20px] md:px-[76px]">
        <h1 className="text-white font-walsham text-[40px] md:text-[56px] max-w-3xl text-center lg:text-[48px] xl:text-[64px] tracking-tight leading-[1.1] mb-4 text-center">
          They learn your business. Just like real workers.
        </h1>
        <p className="text-neutral-400 text-xl lg:text-[20.8px] tracking-tight font-walsham lg:max-w-3xl lg:text-center mb-4 text-center">
          Onboard your AI employees by sharing your brand context. Add
          documents, provide tone of voice, branded guidelines, and explain your
          business values. Every interaction adds to their understanding, so
          outputs stay consistent, on-brand, and aligned with how your business
          actually operates.
        </p>
        <p className="text-neutral-400 text-xl lg:text-[20.8px] tracking-tight font-walsham lg:max-w-3xl lg:text-center mt-6 text-center">
          As your business grows, your AI workers grow with it - they learn from
          new work, adapt to requested changes, and improve over time without
          retraining or setup. Work with digital employee team that evolves
          alongside you, not tools you constantly have to reconfigure.
        </p>
      </div>
      <div className="relative flex justify-center items-center px-[20px] md:px-[40px] lg:px-[120px]">
        <Image
          src="https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/673eb161f734e9a1b54ff1bc_brain-ai-floaters.avif"
          alt="Workers"
          width={1280}
          height={654}
          className="w-full md:w-[753px] md:h-[385px] lg:w-full lg:h-auto object-contain relative z-10"
        />
        <div
          className="absolute z-[1] top-1/2 left-1/2 -translate-x-1/2 -translate-y-[16%] w-[240px] h-[500px] md:w-[300px] md:h-[620px] lg:w-[384px] lg:h-[800px]"
          style={{
            WebkitMaskImage:
              "linear-gradient(to bottom, #000 60%, transparent 100%)",
            maskImage: "linear-gradient(to bottom, #000 60%, transparent 100%)",
          }}
        >
          <video
            autoPlay
            loop={false}
            muted
            playsInline
            className="w-full h-full object-contain mask-b-from-10%"
          >
            <source
              src="https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c%2F673ea9f10353f48a685fd1fc_SOshie%20Landing%20from%20Martynas-transcode.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </div>
  );
};

export default Workers;
