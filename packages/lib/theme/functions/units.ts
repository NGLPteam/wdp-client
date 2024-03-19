export const stripUnit = (unit: number) => {
  return parseInt(unit.toString().replace(/[^\d\.]/g, "")); // eslint-disable-line no-useless-escape
};
// convert px to rem
export function pxToRem(px: number, base = 16) {
  return stripUnit(px) / base + "rem";
}
