import React from "react";
import type { MultipleFieldErrors, ValidateResult } from "react-hook-form";

import Message from "./Message";

export default function MessageList({ inlineMessage, messages, label }: Props) {
  if (!messages) {
    if (inlineMessage) {
      return <Message result={inlineMessage} />;
    }

    return null;
  }

  return (
    <>
      {Object.entries(messages).map(([type, result]) =>
        renderMessage(type, result, label)
      )}
    </>
  );
}

function renderMessage(type: string, result: ValidateResult, label: string) {
  return result !== null ? (
    <Message key={type} type={type} result={`${label} ${result}`} />
  ) : null;
}

interface Props {
  messages?: MultipleFieldErrors;
  inlineMessage?: string;
  /* The label for the erroring field, ie 'First Name' */
  label: string;
}
