import React from "react";
import type { MultipleFieldErrors, ValidateResult } from "react-hook-form";

import Message from "./Message";

export default function MessageList({ inlineMessage, messages }: Props) {
  if (!messages) {
    if (inlineMessage) {
      return <Message result={inlineMessage} />;
    }

    return null;
  }

  return (
    <>
      {Object.entries(messages).map(([type, result]) =>
        renderMessage(type, result)
      )}
    </>
  );
}

function renderMessage(type: string, result: ValidateResult) {
  if (result == null) {
    return null;
  }

  return <Message key={type} type={type} result={result} />;
}

interface Props {
  messages?: MultipleFieldErrors;
  inlineMessage?: string;
}
