import { ErrorMessage } from "@hookform/error-message";
import useFormErrors from "hooks/useFormErrors";
import MessageList from "./MessageList";
import type { Path } from "react-hook-form";

interface Props {
  /* eslint-disable-next-line */
  name: Path<any>;
  label?: string;
}

export default function Errors({ name, label }: Props) {
  const errors = useFormErrors();

  return (
    <ErrorMessage
      errors={errors}
      name={name}
      render={({ message, messages }) => (
        <MessageList
          messages={messages}
          inlineMessage={message}
          label={label}
          name={name}
        />
      )}
    />
  );
}
