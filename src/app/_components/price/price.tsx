/** @format */

import { Badge } from "../badge/badge";
import { IconToman } from "../icons/icons";
import { Size } from "../types/size.type";
import { PriceTypes } from "./price.types";

const sizeClasses: Record<Size, { textSize: string; svgSize: number }> = {
  tiny: { textSize: "text-md", svgSize: 16 },
  small: { textSize: "text-xl", svgSize: 18 },
  normal: { textSize: "text-2xl", svgSize: 20 },
  large: { textSize: "text-3xl", svgSize: 22 },
};

export const Price: React.FC<PriceTypes> = ({
  price,
  text = "رایگان",
  className,
  size = "normal",
}) => {
  const svgSize = sizeClasses[size].svgSize;

  return (
    <>
      {price != null && price > 0 ? (
        <span
          className={`gap-1 font-bold flex items-center dark:text-white/90 ${className}`}
        >
          {price?.toLocaleString("fa-IR")}
          <IconToman
            strokeWidth={1}
            width={svgSize}
            height={svgSize}
            viewBox="0 0 16 16"
          />
        </span>
      ) : (
        <Badge variant="success">{text}</Badge>
      )}
    </>
  );
};
