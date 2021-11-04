import React from "react";

import * as Styled from "./GlobalErrors.styles";
import { ContentHeader } from "components/layout";
import { IconFactory } from "components/factories";

export default function GlobalErrors({ globalErrors }: Props) {
  if (globalErrors.length === 0) {
    return null;
  }

  return (
    <Styled.Wrapper>
      <ContentHeader headerStyle="secondary" title="Something went wrong" />
      {globalErrors.map((message, index) => (
        <Message key={index} message={message} />
      ))}
    </Styled.Wrapper>
  );
}

interface Props {
  globalErrors: readonly string[];
}

export function Message({ message }: MessageProps) {
  return (
    <Styled.Error>
      <IconFactory icon="warning" title="Error" />
      <p>{message}</p>
    </Styled.Error>
  );
}

interface MessageProps {
  message: string;
}
