import { respondBase, fluidScaleBase } from "@castiron/style-mixins";
import get from "lodash/get";
import { breakpoints } from "../base/variables";
export { noInsetSupport } from "@wdp/lib/theme/mixins";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type CssContent = string | any; // TODO: Get the return type of styled-compoonents css function

export function respond(
  content: CssContent,
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

export function globalNavRespond(content: CssContent, operator?: string) {
  const breakpoint =
    operator === "min" ? `${parseInt(breakpoints[100]) + 1}px` : 100;

  return respond(content, breakpoint, operator);
}
