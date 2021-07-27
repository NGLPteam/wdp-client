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
  maxVw = get(breakpoints, 140, "1400px"),
  minVw = get(breakpoints, 30, "375px")
) {
  if (max === min) return max;
  return fluidScaleBase(max, min, maxVw, minVw);
}
