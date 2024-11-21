import * as Styled from "./components.styles";
import type { PropsWithChildren } from "react";

export default function MetadataItem({ children }: PropsWithChildren) {
  return <Styled.MetadataValue>{children}</Styled.MetadataValue>;
}
