import React from "react";
import { ButtonProps } from "./button.types";
import classNames from "classnames";

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
    { "btn-outlined": isOutline },
    { "btn-link": isLink },
    { "animated-icon": animatedIcon },
    { "pointer-events-none opacity-80": isLoading },
    { [`btn-${variant}`]: variant }
    // { [`btn-${variant}`]: size }
  );
  return (
    <button type="type" disabled={isDisabled} {...rest}>
      {isLoading ? loadingText : children}
    </button>
  );
};

export default Button;
