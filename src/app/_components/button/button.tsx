import React from "react";
import { ButtonProps, ButtonShape } from "./button.types";
import classNames from "classnames";
import { Size } from "../types/size.type";

const sizeClasses: { [key: Size]: string } = {
  tiny: "btn-xs",
  small: "btn-sm",
  normal: "",
  large: "btn-lg",
};
const shapeClasses: { [key: ButtonShape]: string } = {
  default: "",
  wide: "btn-wide",
  full: "btn-block",
  square: "btn-square",
};
export const Button: React.FC<ButtonProps> = ({
  variant,
  size = "normal",
  isDisabled = false,
  isOutline = false,
  isLoading = false,
  loadingType = "spinner",
  loadingText = "در حال ارسال درخواست",
  type = "button",
  isLink = false,
  animatedIcon = false,
  shape = "default",
  children,
  className,
  ...rest
}) => {
  const classes = classNames(
    "btn",
    className,
    { "btn-outlined": isOutline },
    { "btn-link": isLink },
    { "animated-icon": animatedIcon },
    { "pointer-events-none opacity-80": isLoading },
    { [`btn-${variant}`]: variant },
    { [`${sizeClasses[size]}`]: size },
    { [`${shapeClasses[shape]}`]: shape }
  );
  return (
    <button type={type} disabled={isDisabled} {...rest} className={classes}>
      {isLoading ? loadingText : children}
    </button>
  );
};

export default Button;
