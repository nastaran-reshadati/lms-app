/** @format */

import Image from "next/image";
import { SingleTestimonialProps, TestimonialProps } from "./testimonial.types";

export const TestiMonialItem: React.FC<SingleTestimonialProps> = ({
  monial: { image, name, skills, description },
}) => {
  return (
    <div className="border-base-content/5 border p-4 rounded-2xl text-sm ">
      <div className="flex items-center gap-2">
        <Image
          loading="lazy"
          src={image}
          alt={name}
          width="48"
          height="48"
          className="pointer-events-none rounded-full grayscale w-14 h-14 object-cover"
        />
        <div className="flex flex-col items-start font-semibold">
          <div className="text-info/80">{name}</div>
          <div className="text-base-content/60">{skills}</div>
        </div>
      </div>
      <p className="mt-3 leading-6 ">{description}</p>
    </div>
  );
};
