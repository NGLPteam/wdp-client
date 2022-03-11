import React from "react";
import { useIsMounted } from "@wdp/lib/hooks";
import { Controller, useFormContext } from "react-hook-form";
import RichTextarea from "../RichTextarea";

type InputProps = Pick<
  React.ComponentProps<typeof RichTextarea>,
  "name" | "label" | "required" | "isWide"
>;

export default function RichTextareaControl({
  name,
  label,
  required,
  isWide,
}: InputProps) {
  const { control } = useFormContext();

  const isMounted = useIsMounted();

  return isMounted ? (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <RichTextarea
          label={label}
          required={required}
          isWide={isWide}
          {...field}
        />
      )}
    />
  ) : null;
}
