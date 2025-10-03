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
  variant = "ghost",
  className,
  size = "normal",
  ...rest
}) => {
  const classes = classNames("textbox", "w-full", className, {});
  return (
    <>
      <div></div>
    </>
  );
};
