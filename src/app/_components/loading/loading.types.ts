import { ComponentBase } from "../types/component-base.type";

export type LoadingProps = ComponentBase & {
  type?: "spinner" | "ring";
};
