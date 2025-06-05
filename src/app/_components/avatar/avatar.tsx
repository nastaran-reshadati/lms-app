/** @format */

import React from "react";
import { AvatarProps } from "./avatar.types";
import Image from "next/image";
import { IconUserProfile } from "../icons/icons";
import classNames from "classnames";
import { Size } from "../types/size.type";

/** @format */

const sizeClasses: Record<Size, number> = {
  tiny: 40,
  small: 50,
  normal: 70,
  large: 120,
};

export const Avatar: React.FC<AvatarProps> = ({
  variant = "primary",
  className,
  size = "normal",
  src,
  alt = "",
}) => {
  const classes = classNames(
    "avatar",
    className,
    {
      [`avatar-${variant}`]: variant,
    },
    {
      [`${sizeClasses[size]}`]: size,
    }
  );

  return (
    <div
      style={{
        width: sizeClasses[size],
        height: sizeClasses[size],
      }}
      className={classes}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          width={sizeClasses[size]}
          height={sizeClasses[size]}
          objectFit="cover"
        />
      ) : (
        <IconUserProfile
          width={sizeClasses[size] / 2}
          height={sizeClasses[size] / 2}
        />
      )}
    </div>
  );
};
