import React from "react";
import * as Styled from "./MetadataProperty.styles";

export default function MetadataProperty({ label, children }: Props) {
  return (
    <Styled.Item>
      <Styled.Label>{label}</Styled.Label>
      <Styled.Text>{children || "--"}</Styled.Text>
    </Styled.Item>
  );
}

interface Props {
  label: string;
  children?: React.ReactNode;
}
