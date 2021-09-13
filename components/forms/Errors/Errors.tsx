import React from "react";
import { ErrorMessage } from "@hookform/error-message";
import type { Path } from "react-hook-form";

import useFormErrors from "hooks/useFormErrors";

import MessageList from "./MessageList";

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
        />
      )}
    />
  );
}

interface Props {
  /* eslint-disable-next-line */
  name: Path<any>;
  /* The label for the erroring field, ie 'First Name' */
  label: string;
}
