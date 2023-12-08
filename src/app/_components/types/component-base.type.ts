import { Size } from "./size.type";
import { Variant } from "./variant.type";

export type componentBase = {
  isDisabled?: boolean;
  className?: string;
  variant?: Variant;
  size?: Size;
};
