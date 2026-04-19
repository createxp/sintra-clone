import React from "react";

interface EmployeeCardProps {
  video: string;
  heading: string;
  subheading: string;
}

const EmployeeCard: React.FC<EmployeeCardProps> = ({
  video,
  heading,
  subheading,
}) => {
  return (
    <div className="flex flex-col gap-4 w-[340px] h-fit">
      <div className="relative w-full h-[600px] aspect-3/4 overflow-hidden rounded-xl">
        <video
          src={video}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-white font-walsham text-2xl md:text-[30px] leading-tight">
          {heading}
        </h3>
        <p className="text-neutral-400 font-thin font-walsham text-[17px] leading-tight">
          {subheading}
        </p>
      </div>
    </div>
  );
};

export default EmployeeCard;
