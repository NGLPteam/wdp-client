import React from "react";
import { useTranslation } from "react-i18next";
import type { ValidateResult } from "react-hook-form";
import capitalize from "lodash/capitalize";
import * as Styled from "./Message.styles";

export default function Message({ type, result }: Props) {
  const { t } = useTranslation();

  let message = "";

  if (typeof result === "string") {
    message = result;
  } else if (type === "required" && typeof result === "boolean") {
    message = capitalize(t("forms.validation.required"));
  } else if (type && !message) {
    message = capitalize(type);
  }

  return message ? (
    <Styled.Error>
      <Styled.ErrorIcon icon="warning" title="Error" />
      <span>{message}</span>
    </Styled.Error>
  ) : null;
}

interface Props {
  type?: string;
  result: ValidateResult;
}
