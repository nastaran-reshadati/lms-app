/** @format */

import React from "react";
import { TextboxProps } from "./textbox.types";
import classNames from "classnames";

const sizeClasses = {
  tiny: "textbox-xs",
  small: "textbox-sm",
  normal: "textbox-md",
  large: "textbox-lg",
};

export const Textbox: React.FC<TextboxProps> = ({
  type = "text",
  variant,
  className,
  size = "normal",
  ...rest
}) => {
  const classes = classNames(
    "textbox",
    "w-full",
    className,
    {
      [`textbox-${variant}`]: variant,
    },
    { [`${sizeClasses[size]}`]: size }
  );
  return <input type={type} className={classes} {...rest} />;
};
