import Link from "next/link";
import React from "react";

interface EmployeeCardProps {
  video: string;
  heading: string;
  subheading: string;
  href?: string;
}

const EmployeeCard: React.FC<EmployeeCardProps> = ({
  video,
  heading,
  subheading,
  href,
}) => {
  const inner = (
    <>
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
        <h3 className="text-white font-walsham text-2xl md:text-[30px] leading-tight group-hover:text-white">
          {heading}
        </h3>
        <p className="text-neutral-400 font-thin font-walsham text-[17px] leading-tight group-hover:text-neutral-300">
          {subheading}
        </p>
      </div>
    </>
  );

  const baseClass =
    "flex flex-col gap-4 w-[340px] h-fit rounded-xl text-left";
  const linkClass =
    `${baseClass} group outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-black transition-opacity hover:opacity-90`;

  if (href) {
    return (
      <Link href={href} className={linkClass} aria-label={`View ${heading}`}>
        {inner}
      </Link>
    );
  }

  return <div className={baseClass}>{inner}</div>;
};

export default EmployeeCard;
