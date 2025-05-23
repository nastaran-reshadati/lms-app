/** @format */

import { ComponentBase } from "../types/component-base.type";

export type PriceTypes = Omit<ComponentBase, "isDisabled"> & {
  price?: number;
  text?: string;
};
