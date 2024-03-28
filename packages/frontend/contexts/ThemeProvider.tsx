"use client";

import { PropsWithChildren } from "react";
import { ThemeProvider as SCProvider } from "styled-components";

export default function ThemeProvider({
  theme,
  children,
}: PropsWithChildren & {
  theme?: { color: string; font: string };
}) {
  return (
    <SCProvider
      theme={{
        fontStyle: theme?.font,
        colorStyle: theme?.color,
      }}
    >
      {children}
    </SCProvider>
  );
}
