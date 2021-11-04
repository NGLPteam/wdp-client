import React from "react";
import { useTranslation } from "react-i18next";
import type { ValidateResult } from "react-hook-form";

import * as Styled from "./Message.styles";
import { IconFactory } from "components/factories";

export default function Message({ type, result }: Props) {
  const { t } = useTranslation();

  let message = "";

  if (typeof result === "string") {
    message = result;
  } else if (type === "required" && typeof result === "boolean") {
    message = t("forms.validation.required");
  } else if (type && !message) {
    message = type;
  }

  return message ? (
    <Styled.Error>
      <IconFactory icon="warning" title="Error" />
      <p>{message}</p>
    </Styled.Error>
  ) : null;
}

interface Props {
  type?: string;
  result: ValidateResult;
}
