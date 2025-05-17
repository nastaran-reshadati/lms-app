import { ReactNode } from "react";
import { ComponentBase } from "../types/component-base.type";

export type badgeProps = Omit<ComponentBase, "isDisabled"> & {
  children: ReactNode;
};
