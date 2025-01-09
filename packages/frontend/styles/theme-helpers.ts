const getFontClass = (fontStyle: string) => {
  switch (fontStyle) {
    case "style2":
      return "theme-font-switzer";
    case "style3":
      return "theme-font-sentient";
    case "style1":
    default:
      return "theme-font-ilisarniq";
  }
};

export const getThemeClasses = (theme?: { font?: string; color?: string }) => {
  const { font, color } = theme ?? {};

  const colorClass = color ? `theme-custom-${color}` : "theme-custom-cream";
  const fontClass = font ? getFontClass(font) : "theme-font-ilisarniq";

  return `${colorClass} ${fontClass}`;
};
