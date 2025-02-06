import type { HeroBackground } from "@/types/graphql-schema";

const BG_COLOR_MAP = {
  NONE: "a-bg-neutral00",
  LIGHT: "a-bg-custom10",
  DARK: "a-bg-neutral90",
};

export const getBgClass = (value?: HeroBackground | null) => {
  if (!value || value === "%future added value") return "a-bg-custom00";
  return BG_COLOR_MAP[value];
};
