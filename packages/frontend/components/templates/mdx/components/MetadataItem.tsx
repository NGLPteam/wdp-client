import type { PropsWithChildren } from "react";

export default function MetadataItem({
  children,
  display,
}: PropsWithChildren & { display: "present" | "empty" }) {
  return display === "present" ? <div>{children}</div> : null;
}
