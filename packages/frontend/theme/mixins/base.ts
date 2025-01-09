import { fluidScaleBase } from "@castiron/style-mixins";
import get from "lodash/get";
import { breakpoints } from "../base/variables";

export function fluidScale(
  max: string | number,
  min: string | number,
  maxVw: string | number = 140,
  minVw: string | number = 30,
) {
  const defaultMaxVw = get(breakpoints, maxVw, "1400px");
  const defaultMinVw = get(breakpoints, minVw, "375px");

  if (max === min) return max;
  return fluidScaleBase(max, min, defaultMaxVw, defaultMinVw);
}
