import classNames from "classnames";
import { Size } from "../types/size.type";
import { LoadingProps } from "./loading.types";

const sizeClasses: Record<Size, string> = {
  tiny: "loading-xs",
  small: "loading-sm",
  normal: "loading-md",
  large: "loading-lg",
};

export const Loading: React.FC<LoadingProps> = ({
  type = "spinner",
  variant,
  size = "normal",
  className,
}) => {
  const classes = classNames(
    "loading",
    className,
    { [`${sizeClasses[size]}`]: size },
    { [`loading-${variant}`]: variant }, //loading-spinner
    { [`loading-${type}`]: type } //loading-primary
  );
  return <span className={classes}></span>;
};
