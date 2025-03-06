import Message from "./Message";
import type { MultipleFieldErrors, ValidateResult } from "react-hook-form";

interface Props {
  messages?: MultipleFieldErrors;
  inlineMessage?: string;
  label?: string;
  name?: string;
}

export default function MessageList({
  inlineMessage,
  messages,
  label,
  name,
}: Props) {
  function renderMessage(type: string, result: ValidateResult) {
    return result !== null ? (
      <Message
        key={type}
        type={type}
        result={result}
        label={label}
        name={name}
      />
    ) : null;
  }

  if (inlineMessage) return <Message result={inlineMessage} />;

  return (
    <>
      {messages &&
        Object.entries(messages).map(([type, result]) =>
          renderMessage(type, result),
        )}
    </>
  );
}
