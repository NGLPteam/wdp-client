import React from "react";

import { ContentTitle } from "components/atomic";
import { IconFactory } from "components/factories";

import * as Styled from "./GlobalErrors.styles";

export default function GlobalErrors({ globalErrors }: Props) {
  if (globalErrors.length === 0) {
    return null;
  }

  return (
    <Styled.Wrapper>
      <ContentTitle as="h4">Something went wrong</ContentTitle>
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
