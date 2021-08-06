import { respondBase, fluidScaleBase } from "@castiron/style-mixins";
import { breakpoints } from "../base/variables";
import get from "lodash/get";

export function respond(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  content: string | any, // TODO: Get the return type of styled-compoonents css function
  size: string | number,
  operator = "max",
  aspect = "width"
) {
  // If the size isn't found in breakpoints, use the size value
  const pxSize = get(breakpoints, size, size);
  return respondBase(content, pxSize, operator, aspect);
}

export function fluidScale(
  max: string | number,
  min: string | number,
  maxVw: string | number = 140,
  minVw: string | number = 30
) {
  const defaultMaxVw = get(breakpoints, maxVw, "1400px");
  const defaultMinVw = get(breakpoints, minVw, "375px");

  if (max === min) return max;
  return fluidScaleBase(max, min, defaultMaxVw, defaultMinVw);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function globalNavRespond(content: string | any, operator?: string) {
  const breakpoint = breakpoints.navBreak;

  return respond(content, breakpoint, operator);
}
