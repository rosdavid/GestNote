import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-5xl">
      <div className="flex items-center">
        <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:h-[600px] md:w-[600px]">
          <Image
            src="/demo.png"
            fill={true}
            alt="Demo Image"
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
