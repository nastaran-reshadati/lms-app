import { ButtonHTMLAttributes } from "react";
import { ComponentBase } from "../types/component-base.type"; 
import { loadingBehavior } from "../types/loading-behavior.type";


export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & loadingBehavior
ComponentBase & {
    isOutline?: boolean;
    isLink?: boolean;
    animatedIcon?: boolean;
    shape?: ButtonShape;
  };

export type ButtonShape = "default" | "wide" | "full" | "square";
