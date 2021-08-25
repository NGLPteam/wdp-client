import React from "react";
import { ErrorMessage } from "@hookform/error-message";
import type { Path } from "react-hook-form";

import useFormErrors from "hooks/useFormErrors";

import MessageList from "./MessageList";

export default function Errors({ name }: Props) {
  const errors = useFormErrors();

  return (
    <ErrorMessage
      errors={errors}
      name={name}
      render={({ message, messages }) => (
        <MessageList messages={messages} inlineMessage={message} />
      )}
    />
  );
}

interface Props {
  /* eslint-disable-next-line */
  name: Path<any>;
}
