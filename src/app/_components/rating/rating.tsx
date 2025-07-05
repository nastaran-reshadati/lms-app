/** @format */

import { IconStar } from "../icons/icons";
import { Size } from "../types/size.type";
import { RatingProps } from "./rating.types";

// /** @format */

// import { IconStar } from "../icons/icons";
// import { Size } from "../types/size.type";
// import { RatingProps } from "./rating.types";

// const sizeClasses: Record<Size, number> = {
//   tiny: 12,
//   small: 20,
//   normal: 30,
//   large: 50,
// };
// export const Rating: React.FC<RatingProps> = ({
//   rating,
//   className,
//   variant = "warning",
//   size = "normal",
// }) => {
//   return (
//     <div className="flex gap-2">
//       {[1, 2, 3, 4, 5].map((item, index) => (
//         <IconStar
//           key={`star-${index}`}
//           width={sizeClasses[size]}
//           height={sizeClasses[size]}
//           color={rating >= index ? `var(--color-${variant})` : "currentColor"}
//           fill={rating >= index ? `var(--color-${variant})` : ""}
//         />
//       ))}
//     </div>
//   );
// };

export const Rating: React.FC<RatingProps> = ({
  size = "tiny",
  className,
  variant = "warning",
  rating,
}) => {
  const sizeClasses: Record<Size, number> = {
    tiny: 12,
    small: 20,
    normal: 30,
    large: 50,
  };

  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((index, item) => (
        <IconStar
          key={`start-${index}`}
          width={sizeClasses[size]}
          height={sizeClasses[size]}
          color={rating >= index ? `var(--color-${variant})` : "white"}
          // color={rating >= index ? `var(--color-${variant})` : "currentColor"}
          fill={rating >= index ? `var(--color-${variant})` : ""}
        />
      ))}
    </div>
  );
};
