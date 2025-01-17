import type { PropsWithChildren } from "react";

export default function DotItem({
  children,
  display,
}: PropsWithChildren & { display: "present" | "empty" }) {
  return display === "present" ? <li>{children}</li> : null;
}
