/** @format */

import Image from "next/image";
import { TestimonialProps } from "./testimonial.types";
import { TestiMonialItem } from "./testimonial-items";

export const TestMonialList: React.FC<TestimonialProps> = ({
  testimonials,
}) => {
  return (
    // <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-10 pb-24 md:grid-cols-2 lg:grid-cols-3 lg:[&>*:nth-child(3n-1)]:translate-y-16">

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto gap-6 px-10 lg:[&>*:nth-child(3n-1)]:translate-y-16">
      {testimonials.map((testimonial) => (
        <TestiMonialItem
          key={`testimonial-${testimonial.name}`}
          monial={testimonial}
        />
      ))}
    </div>
  );
};
