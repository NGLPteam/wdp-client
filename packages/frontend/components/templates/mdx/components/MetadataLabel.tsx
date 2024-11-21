import * as Styled from "./components.styles";
import type { PropsWithChildren } from "react";

export default function MetadataLabel({ children }: PropsWithChildren) {
  return <Styled.MetadataLabel>{children}</Styled.MetadataLabel>;
}
