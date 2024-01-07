import { IRipple } from "../interfaces/IRipple";
import React from "react";

export type UseRippleHooks = {
  ripples: IRipple[];
  addRipple: (event: React.MouseEvent<HTMLDivElement>) => void;
};
