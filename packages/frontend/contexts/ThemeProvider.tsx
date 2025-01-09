"use client";

import { PropsWithChildren, createContext, useContext } from "react";

const ThemeContext = createContext<{ font?: string; color?: string }>({
  font: undefined,
  color: undefined,
});

export default function ThemeProvider({
  theme,
  children,
}: PropsWithChildren & {
  theme?: { color: string; font: string };
}) {
  return (
    <ThemeContext.Provider
      value={{
        font: theme?.font,
        color: theme?.color,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  return useContext(ThemeContext);
};
