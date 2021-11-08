import { stripUnit } from "@castiron/style-mixins";

// convert px to em
export function pxToRem(px: number, base = 16) {
  return stripUnit(px) / base + "rem";
}
