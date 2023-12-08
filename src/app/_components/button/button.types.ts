import { ButtonHTMLAttributes } from "react";
import { componentBase } from "../types/component-base.type";
import { loadingBehavior } from "./loading-behavior.type";
export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & loadingBehavior
  componentBase & {
    isOutline?: boolean;
    isLink?: boolean;
    animatedIcon?: boolean;
    shape?: ButtonShape;
  };

export type ButtonShape = "default" | "wide" | "full" | "square";
