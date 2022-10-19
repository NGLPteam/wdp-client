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
  return result !== null ? (
    <Message key={type} type={type} result={result} />
  ) : null;
}

interface Props {
  messages?: MultipleFieldErrors;
  inlineMessage?: string;
}
