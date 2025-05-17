import classNames from "classnames";
import { badgeProps } from "./badge.types";

export const Badge: React.FC<badgeProps> = ({
  children,
  variant,
  size = "tiny",
  className,
}: badgeProps) => {
  const sizeClasses = {
    tiny: "badge-tiny",
    small: "badge-sm",
    normal: "",
    large: "badge-large",
  };

  const classes = classNames(
    "badge",
    className,
    {
      [`bage-${variant}`]: variant,
    },
    {
      [`${sizeClasses[size]}`]: size,
    }
  );
  return <span className={classes}>{children}</span>;
};
